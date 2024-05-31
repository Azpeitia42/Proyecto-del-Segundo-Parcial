# Usar una imagen base de Node.js
FROM node:14

# Crear un directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json si existen
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto que usa tu aplicación
EXPOSE 8888

# Comando para ejecutar tu aplicación
CMD ["node", "app.js"]

