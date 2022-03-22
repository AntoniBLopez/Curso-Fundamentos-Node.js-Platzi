const os = require('os')

console.log(os.arch()) // Ver la arquitectura // = x64

console.log(os.platform()) // Ver la plataforma ( Linux, Mac, Windows, Android, Win32 etc... ) // = win32

console.log(os.cpus()) // Accecer a la informaciónde las CPU's que tenemos en nuestro sistema,
//                                                           devuelve un array con los núcleos dentro de objetos

// ¿Cuantos procesos de node, independientes, puedo tener corriendo uno en cada núcleo?
console.log(os.cpus().length) // En mi caso son 2 núcleos ( 2 cores, puedo levantar 2 procesos )


console.log(os.constants) // Errores y señales del sistema

console.log(os.freemem()) // Nos dice en Bytes la memoria RAM libre que tenemos // A día de hoy 22/03/2022 = 1148723200 Bytes


// Pasamos los Bytes a KiloBytes, KB a MegaBytes, y MB a GigaBytes:

const size = 1024

function kilobytes(bytes) { // = 1080884 KiloByte
    const kilobytes = bytes / size

    return megabytes(kilobytes)
}
function megabytes(kilobytes) { // = 1093.46484375 MegaByte
    const megabytes = kilobytes / size

    return gigabytes(megabytes)
}
function gigabytes(megabytes) { // 1.0563087463378906 GigaByte
    const gigabytes = megabytes / size

    return gigabytes
}

console.log(kilobytes(os.freemem())) //  Nos dice en Gigabytes la memoria RAM libre que tenemos // = 1.0563087463378906 GigaByte


console.log(kilobytes(os.totalmem())) // Nos dice en Gigabytes la memoria RAM TOTAL que tenemos // = 6.890602111816406

console.log(os.homedir()) // Acceder al directiorio raíz del usuario // = C:\Users\tonib

console.log(os.tmpdir()) // Acceder al directorio para archivos temporales  // = C:\Users\tonib\AppData\Local\Temp

// En el directiorio temporal podemos dejar imágenes, archivos o lo que queramos, que queramos que se borre en algún momento,
// archivos temporales, imágenes temporales... que no queramos que se guarden

console.log(os.hostname()) // Acceder al nombre del host del pc ( host name ) // = LAPTOP-S8T4RL16

console.log(os.networkInterfaces()) // Acceder a la interfaz de red activas
