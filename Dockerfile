# Usamos una imagen base oficial de Node.js
FROM node:18

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instalamos las dependencias de la aplicación
RUN npm install

# Copiamos el resto del código de la aplicación al contenedor
COPY . .

# Exponemos el puerto que utiliza la aplicación
EXPOSE 3000

# Establecemos las variables de entorno necesarias
ENV PORT=3000

# Iniciamos la aplicación
CMD ["npm", "start"]
