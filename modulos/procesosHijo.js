const { exec } = require('child_process')

// async function processAll () {

// }

// processAll()

exec('git add .', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})

exec('git commit -m"Proceso entero automatizado ( add, commit, pull & push )"', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})

exec('git pull origin master', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})

exec('git push origin master', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})