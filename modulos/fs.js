const fs = require('fs')

// Leer un archivo de texto con fs.readFile():

function read (path) {
    fs.readFile(path, (error, datos) => {
        if (error) {
            console.error('He fallado al leer el archivo')
        } else {
            console.log(String(datos))  // devuelve un dato tipo Buffer y con String(datos) o datos.toString() lo pasamos a string.
        }
    })
}
read(__dirname + '/texto.txt')  // __dirname = devuelve la ruta de la carpeta en la que estamos


// Crear un archivo de texto ( txt ) con fs.writeFile():

function write (path, newData) {
    fs.writeFile(path, newData, (error) => {
        if (error) {
            console.error('No se ha podido crear el nuevo archivo')
        } else {
            console.log('Se ha creado correctamente')
        }
    })
}
write(__dirname + '/texto3.txt', 'Soy un nuevo archivo')


// Borrar un archivo con el método fs.unlink():

function clear (path) {
    fs.unlink(path, console.log)
}

clear(__dirname + '/texto3.txt')