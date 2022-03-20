const test = setInterval(() => {
    console.log('Hola 1');
    clearInterval(test)  // parar intervalo
}, 1000);


let contador = 0
const test2 = setInterval(() => {
    contador++
    console.log('Hola');

    if (contador === 4) {
        clearInterval(test2)  // parar intervalo
    }
}, 1000);