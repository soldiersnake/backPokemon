import pokemonService from "../Services/pokemonService.js";
import { Parser } from 'json2csv'; //libreria de json2csv para generar archivo CSV

class pokemonController {
    
    constructor() {
        
    }

    // Meotdo que trae los primeros 250 pokemones
    async getPokemon(req, res) {
        try {
            const pokemones = await pokemonService.fetchPokemon();  // Usamos el servicio para obtener los datos
            res.status(200).json(pokemones);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    //busca pokemones por nombre por metodo GET
    async findByNameGet(req, res) {
        try {
            const name = req.params.name;
            const formattedName = name.toLowerCase().trim();
            const pokemon = await pokemonService.fetchPokemonByName(formattedName); //utilizamos servicio
            console.log('pasamos x aqui');
            
            //manejo de errores
            if (!pokemon) {
                return res.status(404).json({ message: `No se encontró el Pokémon con el nombre ${name}` });
            }
    
            return res.status(200).json({
                count: 1,
                results: [{
                    base_experience: pokemon.base_experience,
                    name: pokemon.name,
                    height: pokemon.height,
                    weight: pokemon.weight
                }]
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //busca pokemones por nombre por metodo POST
    async findByNamePost(req, res) {
        try {
            const { name } = req.body;
            const formattedName = name.toLowerCase().trim(); // aseguramos que el nombre este en minuscula y quitamos espacios
            const pokemon = await pokemonService.fetchPokemonByName(formattedName); //utilizamos servicio
            
            //manejo de errores
            if (!pokemon) {
                return res.status(404).json({ message: `No se encontró el Pokémon con el nombre ${name}` });
            }
            
            return res.status(200).json({
                count: 1,
                results: [{
                    base_experience: pokemon.base_experience,
                    name: pokemon.name,
                    height: pokemon.height,
                    weight: pokemon.weight
                }]
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    //busca y genera archivo CSV con pokemones segun su color ordenados en base su experiencia
    async getPokemonCsvByColor(req, res) {
        try {
            const { color } = req.params;
            const pokemones = await pokemonService.fetchPokemonByColor(color);

            if (!pokemones || pokemones.length === 0) {
                return res.status(404).json({ message: `No se encontraron Pokémon de color ${color}` });
            }

            const sortedPokemones = pokemones.sort((a, b) => b.base_experience - a.base_experience);

            // Convertir los datos a CSV
            const fields = ['name', 'base_experience', 'height', 'weight'];
            const json2csvParser = new Parser({ fields });
            const csv = json2csvParser.parse(sortedPokemones);

            // devuelve el CSV
            res.header('Content-Type', 'text/csv');
            res.attachment('pokemones.csv');
            res.status(200).send(csv);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

export default new pokemonController(); //exportacion del servicio con clase ya instanciada