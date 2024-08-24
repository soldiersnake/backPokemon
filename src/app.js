import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routerPokemon from './routes/pokemonRouter.js';

// Llamada a la configuración de .env
dotenv.config();
//puerto de escucha
const PORT = process.env.PORT || 3000;
//config de express
const app = express();

// Configuración de CORS para comunicarse con el front
app.use(cors());

// body-parser para manejar las solicitudes de body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configura la ruta base para el router de Pokemon
app.use('/', routerPokemon);

//escucha del puerto segun variable de entorno
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});
