function primeraFuncion (name, test) {
    return new Promise((resolve, reject) => {
        console.log('Inicia proceso')
        resolve(name, test)
        reject()
    })
}

function saludo (name, test) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Hola '+ name)
            resolve(name, test)
        }, 1000);

    })
}

function hablar (name, test) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('bla bla bla...')
            resolve(name, test)
        }, 1000)
    })
}

function despedida (name, test) {
    if (test === 'Primera función'){
        console.log('Adios '+ name)
    } else {
        throw new Error ('No me funciona el segundo parámetro')
    }
}

primeraFuncion('Toni', 'Primera función')
    .then(saludo)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(despedida)
    .catch(aa => {      // No importa el parámetro que le pasaes y tampoco importa si no existe, sirve para capturar el error ( ver dónde está )
        console.log(aa.message) // se hace un console.log de el nombre del primer parámetro que es el de capturar el error y muestra cuál ha sido el error y dónde está
    }) // el .message es para que solo muestre el mensage que he escrito en el throw new Error(MESSAGE), aquí sí que tiene que se la palabra message en concreto, si no no funciona



//  Promesas dentro de un array y con variables:


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
])
    .then((messages) => {
        console.log(messages)
    })
    .catch()