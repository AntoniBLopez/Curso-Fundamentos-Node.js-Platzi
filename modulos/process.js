// const process = require('process') // Como es un módulo global no necesiramos importarlo con require('process)



// Escuchar la salida del programa y justo antes de la salida del programa:

console.group('Prueba')

console.log('Hola');


// Acceder a la salida del programa, se ejcuta cuando node detiene el event loop.
// (No podemos usar la asincronía dentro de su scope porque ya nos hemos desconectado del event loop)

// Una vez el programa esté ejecutando 'exit' todo el contenido tiene que ser síncrono y se va a ejecutar en el hilo principal.

process.on('exit', () => {
    console.log('El proceso ha terminado')
})

console.log('Adios');

console.log('Estoy dentro de la ejecución del programa');

console.groupEnd('Prueba')


// Acceder justo antes de la salida del programa.

process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
})




// Escuchar cuando hay una excepción que nadie ha capturado

process.on('uncaughtException', (err, origen) => { // Para excepciones que no se han capturado
    console.error('Se nos ha olvidado capturar un error') // mensaje
    console.error(err) // Imprimir el error que ha ocurrido
})

forzarUnError()

process.on('unhandledRejection') // Para promesas que se han rechazado y nadie tiene un catch