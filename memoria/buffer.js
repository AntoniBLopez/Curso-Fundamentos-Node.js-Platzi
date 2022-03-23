// Buffer.alloc ( guardar datos en memoria en secuencias de bytes )

const buffer = Buffer.alloc(4) // .alloc() como parámetro le paso la cantidad de secuencias de bytes que quiero guardar

console.log(buffer) // = <Buffer 00 00 00 00>


// Buffer.from ( guardar datos de texto en memoria en secuencias de bytes )

const buffer3 = Buffer.from('Hola que tal') // .from() obtenemos un buffer en secuencias de bytes que significan
// exactamente el texto que le pasemos ( Puedo comprobarlo pasando el buffer a string )

console.log(buffer3); // = <Buffer 48 6f 6c 61>  // ( Esta es la combinación de Hola que tal en secuencias de bytes )


// Buffer.from con array

const buffer2 = Buffer.from([16, 1, 3]) // este .from([]) funciona pasándole un array y es lo mismo que
// .alloc pero añadiendole una cantidad específica

console.log(buffer2); // = <Buffer 09 01 03>



// Creamos un abcedario

let abc = Buffer.alloc(26) // 26 son los carácteres que tiene el abecedario
console.log(abc)

for (i = 0; i < 26; i++) {
    abc[i] = i + 33 // Accedemos a cada posición del buffer de la misma manera en la que lo haríamos con un
    // array, y a cada posición le asignamos la secuencia de bytes que queramos según nuestro objetivo una vez
    // pasados los datos a string
}

console.log(abc) // = <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76 77 78 79 7a>
console.log(abc.toString()) // = abcdefghijklmnopqrstuvwxyz // si pasamos el código a string vemos el resultado en el alfabeto latino