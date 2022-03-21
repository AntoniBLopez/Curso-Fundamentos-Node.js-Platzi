function broken () {
    return a + i
}

try { // try = TRATAR
    broken()
} catch(error) { // catch = ATRAPAR
    console.log('Ha habido un error: '+ error); // = Ha habido un error: ReferenceError: a is not defined ( nombre + mensaje)
    console.log('Ha habido un error: '+ error.name); // = Ha habido un error: ReferenceError ( solo nombre )
    console.log('Ha habido un error: '+ error.message); // = Ha habido un error: a is not defined ( solo mensaje )
    console.log('Ha habido un error: '+ error.stack); // con .stack es como cuando lo añadimos solo como en la línea 11 ( stack = Apilar ) ( nombre + mensaje + datos )
    console.log(error) // ( nombre + mensaje + stack )
}

console.log('Continua ejecutandose el codigo')