# Pokémon Node.js API

Esta es una aplicación de Node.js que se conecta a la API de Pokémon ([PokeAPI](https://pokeapi.co/)) para realizar búsquedas de Pokémon por nombre y devolver una lista de Pokémon en formato CSV.

## Índice

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Rutas de la API](#rutas-de-la-api)
- [Dockerización](#dockerización)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuir](#contribuir)

## Características

- Buscar un Pokémon por su nombre y devolver información como la experiencia base, altura y peso.
- Generar un archivo CSV con todos los Pokémon ordenados por su experiencia base.
- Dockerización para facilitar el despliegue en clústeres.

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local:

### Clona el repositorio

```bash
git clone https://github.com/tuusuario/pokemon-api.git
cd pokemon-api
npm install
```
Para iniciar proyecto de forma Local - determinar la variable de entorno en el puerto de preferencia, sino el por defecto sera el 3000
.env
PORT = 3000 (o el de preferencia)
npm start (Para iniciar el proyecto forma local)
La aplicación estará corriendo en http://localhost:3000

## Uso
Rutas de la API
Obtener lista de Pokémon
GET /api/pokemon

Devuelve una lista de los primeros 250 Pokémon.

GET /api/pokemon/findByName/:name

Devuelve un Pokémon segun en name(nombre) por params.

Url ej:
http://localhost:3000/api/pokemon/findByName/pikachu

Buscar un Pokémon por nombre
POST /api/pokemon/findByName

Body:
json
{
  "name": "pikachu"
}
Devuelve la información del Pokémon con el nombre dado, incluyendo la experiencia base, altura y peso.

Obtener lista en CSV ordenada por experiencia
GET /api/pokemon/csv/:color

Devuelve un archivo CSV con la lista de Pokémon de un color dado, ordenada por experiencia base.

Ejemplo de uso de la API
Puedes realizar las llamadas a las rutas de la API usando curl o herramientas como Postman.
### Ejemplo curl
curl -X POST http://localhost:3000/api/findByName -H "Content-Type: application/json" -d '{"name": "pikachu"}'

## Dockerización
Si prefieres usar Docker, puedes construir y ejecutar la imagen del proyecto.

abrir terminal e insertar comandos
- Construir la imagen Docker
```bash
docker build -t pokemon-api .
```
- Ejecutar el contenedor Docker
```bash
docker run -p 3000:3000 pokemon-api
```
**O tambien puedes usar Docker Desktop y correr la aplicacion de alli mismo**
Tu aplicación se ejecutará en http://localhost:3000.

## Tecnologías Utilizadas
- Node.js
- Express
- Cors
- Dotenv
- Nodemon
- JSON2CSV
- Docker

## Contribuir
Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork del proyecto
2. Crea una nueva rama (git checkout -b feature/mi-feature)
3. Realiza tus cambios (git commit -m 'Agrega una nueva feature')
4. Sube los cambios a tu repositorio fork (git push origin feature/mi-feature)
5. Crea un Pull Request

