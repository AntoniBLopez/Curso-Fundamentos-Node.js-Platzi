const bcrypt = require('bcrypt')

const passwordOculta = '1234Segura!'

bcrypt.hash(passwordOculta, 7, (err, hash) => { // Se autoejecuta
    console.log(hash);

    bcrypt.compare(passwordOculta + 'a', hash, (err, res) => {  // Comprueba que sea la pasword que le corresponde con hash, si es incorrecto devuelve false, si es correcto true
        // console.log(err);
        console.log(res);
    })
})
// Cifrar la contraseña // hash() tiene 3 parámetros:
// 1. Password
// 2. Número de rondas que va a dar para crear el hash
// 3. una función que recibe 2 parámetros: 1. El error, 2. El hash

// RESULTADO del hash de mi contraseña = $2b$07$Z2XItUv.PuB0c5qidIJoBOAKAa9BV6PG49YLjYLy/sIhReqUeIXFS
// Genera un hash por cada ejecución que hacemos

// bcrypt también funciona con promesas por si las quiero utilizar en vez de callback