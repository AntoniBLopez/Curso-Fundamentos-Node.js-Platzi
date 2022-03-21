const { exec } = require('child_process') // Así ejecutamos comandos en la consola

// git add .

exec('git add .', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})


// git commit -m""

exec('git commit -m"Proceso entero automatizado ( add, commit, pull & push )"', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})


// git pull origin master

exec('git pull origin master', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})


// git push origin master

exec('git push origin master', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})