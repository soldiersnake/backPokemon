//servicio para manejar las distintas consultas a la API de pokemon

class PokemonService {

    //consulta que trae los primeros 250 pokemons
    async fetchPokemon() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=250');
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error(`El error es: ${error}`);
            throw new Error('Error al obtener los pokemones.');
        }
    }

    //consulta para traer pokemon segun nombre
    async fetchPokemonByName(name) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (!response.ok) {
                throw new Error('No se pudo encontrar el Pokémon.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`El error es: ${error}`);
            throw new Error('Error al obtener el Pokémon.');
        }
    }

    //consulta para traer pokemones segun color
    async fetchPokemonByColor(color) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-color/${color}`);
            if (!response.ok) {
                throw new Error('No se pudo encontrar Pokémon del color especificado.');
            }
            const data = await response.json();
            // Extraer los datos relevantes de los Pokémon
            const pokemonList = await Promise.all(
                data.pokemon_species.map(async (species) => {
                    const pokemonResponse = await fetch(species.url.replace('-species', ''));
                    const pokemonData = await pokemonResponse.json();
                    return {
                        name: pokemonData.name,
                        base_experience: pokemonData.base_experience,
                        height: pokemonData.height,
                        weight: pokemonData.weight
                    };
                })
            );
            return pokemonList;
        } catch (error) {
            console.error(`El error es: ${error}`);
            throw new Error('Error al obtener Pokémon por color.');
        }
    }
}

export default new PokemonService(); //exportacion del servicio con clase ya instanciada