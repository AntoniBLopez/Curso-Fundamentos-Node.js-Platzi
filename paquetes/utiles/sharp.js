const sharp = require('sharp')

sharp('./html-5.png') // Como parámetro le pasamos el nombre del archivo de la imágen sobre la que queremos trabajar
    .resize(80) // Indicar el tamaño de la imágen, como parámetro le pasamos el tamaño que queramos, en este caso = 80px x 80px
    .toFile('resized2.png') // Creamos un nuevo archivo de la imágen indicada en sharp() del tamaño indicado en .resize() con el nombre que le pasemos como parámetro

// Se tiene que ejecutar con node o nodemon para que funcione, no funciona si se ejecuta con la extensión Code Runner
// Y se tiene que ejecutar estando ubicado en la terminal justo en el directiorio en el que está la imágen y el archivo que estamos ejecutando ( No se si es el dir. de la imágen o el archivo en concreto o ámbos a la vez )

sharp('./html-5.png')
    .resize(200)
    .greyscale() // Con .greyscale() lo ponemos en blanco y negro y hay muchas más funcionalidades
    .toFile('resized4.png')