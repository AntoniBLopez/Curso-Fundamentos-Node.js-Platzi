const { exec } = require('child_process')

async function processAll () {
    await exec('git add .', (error, stdout, stderr) => {
        if (error) {
            console.error(error)
            return false
        }
        console.log(stdout)
    })

    await exec('git commit m"Proceso automatizado ( add & commit)"', (error, stdout, stderr) => {
        if (error) {
            console.error(error)
            return false
        }
        console.log(stdout)
    })

}

processAll()

// exec('git pull origin master', (error, stdout, stderr) => {
//     if (error) {
//         console.error(error)
//         return false
//     }
//     console.log(stdout)
// })

// exec('git push origin master', (error, stdout, stderr) => {
//     if (error) {
//         console.error(error)
//         return false
//     }
//     console.log(stdout)
// })