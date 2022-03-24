const puppeteer = require('puppeteer'); // Traemos el módulo puppeteer y IMPORTANTE añadir ; en todos los require porque
// me ha fallado porque no tenía el punto y coma, así que es preferible añadirlo como buena práctica para evitar errores

(async () => {
    console.log('Lanzamos navegador!');
    // const browser = await puppeteer.launch() // puppeteer.launch() nos sirve para lanzar el navegador ( abrir el navegador ) pero no lo abre de forma visual
    const browser = await puppeteer.launch({ headless: false }) // Y cambiando el headless a false lo que le decimos, es que se abra de forma visual

    const page = await browser.newPage() // browser.newPage() sirve para crear una nueva página a la que podemos añadirle la URL a la que queremos acceder

    await page.goto('https://es.wikipedia.org/wiki/Node.js') // Aquí usamos .goto(URL) que es igual a: go to = Ir a ... ( y añadimos la URL )

    var titulo = await page.evaluate(() => { // .evaluate(cb) va a ejecutar un script dentro de la páigna y va a devoler lo que toque
        const h1 = document.querySelector('h1') // cojemos el h1 de la página a la que vamos a acceder ( el código entero es lo que estamos recogiendo )
        console.log(h1.innerHTML) // le añadimos al h1 el atributo .innerHTML para que nos de el texto en concreto ( si es lo que deseamos )

        return h1.innerHTML // lo retornamos para almacenarlo en la variable titulo que hemos creado
    })

    console.log(titulo) // hacemos visible en el servidor el título (h1) de la web a la que hemos accedido

    console.log('Cerramos navegador...')
    browser.close()  // browser.close() nos sirve para cerrar el navegador desde el código
    console.log('Navegador cerrado')
})()

// es importante destacar que todos los llamados tienen un await para esperar a que hagan su función
// con el módulo puppeteer podemos ejecutar todo lo que queramos dentro del navegador y
// recojer lo que queramos y lo llevamos a dónde queramos
