const http = require('http')

const port = 3001

http.createServer((req, res) => {

    console.log('Nueva petición');
    console.log(`Veo la URL ${req.url}`); // Traigo la URL a la que estoy llamando

    // AQUÍ CREO EL PRIMER SISTEMA DE ENRUTAMIENTO ( ROUTER )

    // if (req.url === '/hola') {
    //     res.write('Holaaaaaaaa love u')
    //     res.end()
    // } else {
    //     res.write("Error 404: I don't know do you want")
    //     res.end()
    // }

    // FIN SISTEMA ENRUTAMIENTO Y INICIO CÓDIGO BÁSICO

    // Primero tiene que ir el .writeHead y después el .write para que se ejecute el código, si no, peta. Comprobado.

    res.writeHead(201, { 'Content-Type': 'text/plain' }) // Escribir cabecera
    // Enviamos como status (o código de autentifiación) 201 que indica que hemos creado un archivo y todo está OK

    res.write('Hola, estoy usando el modulo http de node.js') // escribir respuesta al usuario

    res.end() // cada vez que llegue una petición del servidor ( una respuesta ) // .end() Para que mande la petición
}).listen(port) // Escuchador y añadimos el puerto 3000

// Para que funcione necesitamos que el servidor escuche en un puerto,
// esto lo hacemos en la línea 8 con el .listen(NUMERO_PUERTO)

console.log(`Escuchando en el puerto ${port}`) // Esto es una buena prácica para que podamos ver
// el puerto que estamos escuchando.

// Automáticamente chrome siempre devuelve un /favicon.ico ejecutando de
// nuevo la función pasada como primer parámetro de .createServer