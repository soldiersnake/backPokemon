import express from "express";
import pokemonController from "../controllers/pokemonController.js";

const routerPokemon = express.Router();
//Ruta que trae todos los pokemons
routerPokemon.get('/pokemon', pokemonController.getPokemon);
//Ruta al entry de busqueda de pokemon por nombre por GET
routerPokemon.get('/pokemon/findByName/:name', pokemonController.findByNameGet);
//Ruta al entry de busqueda de pokemon por nombre por POST
routerPokemon.post('/pokemon/findByName', pokemonController.findByNamePost);
//Ruta al entry de csv Color
routerPokemon.get('/pokemon/csv/:color', pokemonController.getPokemonCsvByColor);

export default routerPokemon;


