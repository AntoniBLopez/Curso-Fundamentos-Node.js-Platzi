const fs = require('fs')

// Stream de lectura:

let data = ''

// vamos a crear una lectura con string al archivo que le indiquemos como parámetro al método .createReadStream()

let readableStream = fs.createReadStream(__dirname + '/input.txt') // readable String ( Stream legible )

readableStream.on('data', chunk => { // chunk = ( pedazo/cantidad )
    console.log(chunk.toString()) // al invocar el parámetro de la función llamado chunk por consola nos muestra los carácteres del archivo en Buffer, y al pasarlo a string obtenemos el texto en alfabeto latino.
})


// Si ya sabemos que decodificación ( charset ) es la del archivo que vamos a recibir, usamos: ( que sepamos concretamente cuál es )
// usamos el método .setEncoding() y lo ejecutamos de tal manera que tenemos que almacenar los datos en una variable llamada en este
// caso ( data ) y luego crear otro método que nos imprima los datos cuando termine de traerlos durante el proceso de 'data' con 'end'
// y dentro de la función de 'end' añadir el console.log para imprimir por consola los datos obtenidos.

readableStream.setEncoding('UTF8') // setEnconding = ( establecer decodificación ) // Le añadimos por ejemplo UTF8 ( es el estándad internacional para poder ecribir caracteres con tildes, eñes... cualquier letra que no sea típica del alfabeto americano )

readableStream.on('data', chunk => {
    data += chunk
})

readableStream.on('end', () => {
    console.log(data);
})



// Stream de escritura:

process.stdout.write('hola     que tal ') // process.stdout ya es un Buffer de escritura ( no se que hace por detrás )
process.stdout.write('  adios')


// Stream de doble sentido:

const stream = require('stream') // Esta línea de código y la de util tienen que ir arriba del todo en las primeras líneas con todos los require
const util = require('util') // El módulo global util lo utiliazmos para poder trabajar con herencia automática

const Transform =  stream.Transform // stream.Transform nos crea un Stream de transformación que puede leer y escribir

function Mayuscula () {
    Transform.call(this)
}

util.inherits(Mayuscula, Transform)

Mayuscula.prototype._Transform = function (chunk, codificacion, callback) {
    chunkMayuscula = chunk.toString().toUpperCase()
    this.push(chunkMayuscula)
    callback()
}

let mayus = new Mayuscula()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)