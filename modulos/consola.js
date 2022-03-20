
console.group('Grupo 1')
    console.log('Hola soy el primer grupo');
    console.log('bla bal bla...');
    console.groupCollapsed('Grupo 2'); // es como crear un console.group
        console.log('Hola soy el segundo grupo')
        console.log('bla bal bal...');
        console.log('Adios');
    console.groupEnd('Grupo 2')
console.groupEnd('Grupo 1')

console.log('new hola')


// part 2:

console.count('hola') // = hola: 1
console.count('hola') // = hola: 2
console.log('hola') // = hola
console.count('hola') // = hola: 3
console.count('hola') // = hola: 4
console.countReset('hola') // =      // No devuelve nada, solo resetea el contador de los console.count
console.count('hola') // = hola: 1

 // Nos dice las veces que hemos puesto console.count
