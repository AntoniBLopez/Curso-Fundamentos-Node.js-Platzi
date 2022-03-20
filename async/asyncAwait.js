async function primeraFuncion () {
    return new Promise((resolve) => {
        console.log('Inicia proceso')
        resolve(saludo('Ara'))
    })
}


async function saludo (name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Hola '+ name)
            resolve(hablar())
        }, 3000);
    })
}

async function hablar () {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('bla bla bla...')
            resolve()
        }, 2000)
    })
}

async function toni () {
    primeraFuncion()
    await saludo('Toni')
    await hablar()
    await hablar()
    await hablar()
}

toni()

// primeraFuncion()
//     .then()
//     .then()
//     .then(hablar)
//     .then(hablar)