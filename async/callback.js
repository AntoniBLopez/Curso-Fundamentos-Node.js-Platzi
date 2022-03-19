//  Test One:

function soyAsincrona() {

    setTimeout(() => {
        console.log('Estoy siendo asíncrona');
    }, 1000);
}

console.log('iniciando proceso...');
soyAsincrona()
console.log('terminando proceso...');


//  Test Two:

// A esta asincronía le he pasado el mismo tiempo de intervalo de ejecución pero
// espero a que se llame una para llamar la otra:

function asyncOne(name, firstCallback) {

    setTimeout(() => { // setTimeout se ejecuta una sola vez cuando llega a la línea de ejecución y se cumple el tiempo de espera hasta su ejecución

        console.log('Primera asincronía '+ name);
        firstCallback(name)
    }, 1000);
}

function asyncTwo(name, secondCallback) {

    setTimeout(() => {

        console.log('Segunda asincronía '+ name);
        secondCallback()
    }, 1000);
}

function speak(callback) {
    setTimeout(() => {
        console.log('bla bla bla bla bla...')
        callback()
    },1000)
}

asyncOne('Toni', (name) => {

    speak(() => {

        asyncTwo(name, () => {

            setInterval(() => { // setInterval se ejecuta de forma infinita cada X tiempo que le hayamos añadido

                console.log('Soy más compejo aún '+ name);
            }, 1000);
        })
    })

})


// Test Two part 2: ( Callback Hell )

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
            hablar(--iteraciones, callback)
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

function adios () {
    console.log('Adios Toni')
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
