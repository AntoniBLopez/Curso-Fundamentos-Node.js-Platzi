
require('dotenv').config()

function primeraFuncion (callback) {
    console.log('Inicia proceso')
    callback()
}

function saludo (callback) {
    setTimeout(() => {
        console.log('Hola Toni')
        callback()
    }, 1000);
}

function async (callback, callbackTwo) {
    setTimeout(() => {
        console.log('Soy asíncrona y me ejecuto después de adiós')
        callbackTwo()
    }, 5000)
    callback()
}

function segundaFuncion (callback) {
    console.log('Penúltimo Adios')
    callback()
}

function hablar (iteraciones, callback) {
    setTimeout(() => {
        if(iteraciones > 0) {
            console.log('bla bla bla...')
            hablar(--iteraciones, callback)  // recursividad ( función recursiva )
        } else {
            segundaFuncion(callback)
        }
    }, 1000)
}

function testFunction() {
    setTimeout(() => {
        console.log('Soy la última función de prueba')
    }, 1000)
}

const adiosVariableEntorno = process.env.ADIOS || 'No se ha podido ejecutar'

function adios () {
    console.log(adiosVariableEntorno)
}

primeraFuncion(() => {
    saludo(() => {
        async(() => {
            hablar(3, () => {
                adios()
            })
        }, testFunction)
    })
})
