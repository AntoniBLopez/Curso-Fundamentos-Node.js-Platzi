const { app, BrowserWindow } = require('electron');

let mainWindow // ventana principal

// .app empieza el proceso de la creación de la aplicación, y tarda un tiempito en estar listo, entonces,
// primero debemos asegurarnos de que se ha creado la app para luego ejecutar la función de createWindow
// que es para crear la ventana

app.on('ready', createWindow) // 'ready' significa que cuando la app esté lista, ejecutamos crear ventana ( createWindow )

function createWindow () { // Esta función va a encargarse de que venga un new BrowserWindow de electron y que se setee en el mainWindow
    mainWindow = new BrowserWindow({ // le añadimos un objeto para configurarlo
        widh: 800,
        height: 600,

        // --->
        webPreferences: { // si queremos que se carge un script añadimos webpreferences y dentro:
            preload: { // Aquí le decimos de dónde queremos que nos haga una pre-carga de archivos

            }
        }
    })

    mainWindow.loadFile('index.html') // .loadFile() sirve para cargar/ejecutar la aplicación y como parámetro añadimos el archivo que deseamos usar
}

// para ejecutar este archivo creamos un script en el package.json
