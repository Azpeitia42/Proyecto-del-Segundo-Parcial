# PROYECTO DEL SEGUNDO PARCIAL. - TU PRIMER SITIO WEB
Este proyecto consiste en el desarrollo de un sitio web para la empresa Automax, dedicada a la renta de autos. El sitio web permite a los usuarios conocer más sobre la empresa (contacto y acerca de), ver los vehículos disponibles y contactarse con Automax a través de un formulario, el cual envía datos a nuestro servidor que se ejecuta en el puerto 8888. 
El fin de este proyecto, es poner en marcha nuestros conocimientos adquiridos en la unidad de la materia de desarrollo basado en plataformas. 

## EMPEZANDO
Para probar este proyecto, debes utilizar el siguiente comando en la línea de comandos de tu preferencia.
```
node app.js
```
### Requisitos previos
Puede que necesites instalar node Js. Para hacerlo, entre al siguiente link: https://nodejs.org/en
Para ver la versión que tienes, ejecute el siguiente comando:
```
node -v
```
### Instalación
Para poder ver el sitio web, necesitas clonar el repositorio. Para hacerlo, ejecute el siguiente comando: 
```
git@github.com:Azpeitia42/Proyecto-del-Segundo-Parcial.git  
```
## Docker hub 
    1. Crea un archivo llamado Dockerfile en el directorio raíz de tu proyecto. No debe tener ninguna extensión.
Agregar el contenido al Dockerfile:
La imagen que construiremos se basará en la imagen oficial de Node.js, versión 14. Que es el node que esta preinstalado: 

FROM node:14
Estableceremos un directorio de trabajo dentro del contenedor. Todas las siguientes instrucciones (COPY, RUN, etc.) se ejecutarán en el contexto de este directorio. Aquí, se crea y se cambia al directorio /app : 
WORKDIR /app
Luego copiamos nuestros archivos.json desde el directorio actual en tu máquina host al directorio de trabajo (/app) en el contenedor. Estos archivos contienen la información de las dependencias necesarias para la aplicación: 

COPY package*.json
Ejecutamos el comando npm install dentro del contenedor. npm install lee los archivos package.json y package-lock.json y descarga e instala todas las dependencias listadas en esos archivos: 

RUN npm install
Copiamos todos los archivos del directorio actual al que creamos "app": 
COPY ..
Esta línea indica a Docker que el contenedor escucha en el puerto 8888. Este es el puerto en el que la aplicación Node.js está configurada para ejecutarse. Aunque EXPOSE no publica el puerto fuera del contenedor, es una forma de        documentar qué puertos deben publicarse: 

EXPOSE 8888
Especifica el comando que se ejecutará cuando el contenedor se inicie. Aquí, se ejecuta node app.js, lo que inicia tu aplicación Node.js utilizando el archivo app.js como el punto de entrada (se lanza la app):
CMD ["node", "app.js"]

    2. Construir la imagen de Docker: 
Asegúrate de estar en tu terminal dentro del directorio donde está tu Dockerfile:
utilizamos: docker build -t emily2710/proyectofinaldbp . para construir la imagen
luego utilizamos: docker push emily2710/proyectofinaldbp para subir la imagen etiquetada a docker hub  y por ultimo: docker pull emily2710/proyectofinaldbp para descargar las capas de la imagen, vez que todas las capas han sido descargadas, Docker las almacena en tu máquina local, permitiéndote usar la imagen para crear contenedores.
### Docker hub
Para descargar la imagen de Docker hub entre al siguiente link:
https://hub.docker.com/repository/docker/emily2710/proyecttfinaldbp/general

## Autores
Angélica Torres Velderrain 359628     
Oswaldo Valles Azpeitia 358430
Emily Abril Vázquez Moreno 357623
Jesús Alberto Núñez Delgadillo 348790
