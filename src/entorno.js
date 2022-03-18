require('dotenv').config() // Rquiero el módulo dotenv y ejecuto el método .config()

const nombre = process.env.NOMBRE || 'Sin nombre Hello World' // Si la variable de entorno no tiene un valor añadele a la variable el valor siguiente
const web = process.env.WEB || 'Sin web Hello World'

console.log('Hi my name is ' + nombre)
console.log('And my web is ' + web)


// Ejecutar sin valor: node entorno.js (Saldrá el string que le he añadido en el Or || que es
// el resultado que va a devolver en el caso de que no le añada un valor)