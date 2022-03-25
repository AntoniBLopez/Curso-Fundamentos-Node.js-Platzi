const gulp = require('gulp')

// Ejemplo para crear una tarea

gulp.task('build', cb => { // .task() para crear tareas con gulp, como primer parámetro añadimos lo que quermos hacer en string, en este caso build (construir)
    console.log('construyendo el sitio...');
    console.log('esto serían tareas asíncronas automatizadas');
    setTimeout(cb, 2000) // simulamos la asincronía, y como primer parámetro llamamos al callback
}) // y luego una función (arrow function en este caso) que es lo que queremos que haga (es asíncrono) y como parámetro le podemos pasar un callback
// Nuestra tarea (contenido) dentro de la función pasada como segundo parámetro a gulp.task() puede
// ser todo lo asíncrono que queramos, y una vez termine, ejecutamos el callback y mandaremos un mensaje
// que nos indique que la tarea ha terminado.

// Conclusión: el callback es el indicador de que toda la tarea ha terminado.

// Otro ejemplo para ejecutar un server

const server = require('gulp-server-livereload') // este módulo nos sirver para crear un servidor

gulp.task('serve', cb => {
    gulp.src('www.') // gulp.src(URL) para mirar la URL que deseemos
        .pipe(server({ // nos sirve para encadenar la corriente ( stream )
            livereload: true, // para que si hay algun cambio en nuestro código se actualize inmediatamente
            open: true // para que automáticamente nos abra el código
        }))
})
// Cada vez que ejecute serve me debería de crear un servidor