const { exec } = require('child_process')

exec('git add .', (error, stdout, stderr) => {
    if (error) {
        console.error(error)
        return false
    }
    console.log(stdout)
})