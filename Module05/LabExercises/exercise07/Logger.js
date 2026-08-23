class Logger {
    log(id, result) {
        console.log(`[Caller ${id}]: result = ${result}`)
    }
}

module.exports = Logger

/*
$ node index.js
Example app listening at http://localhost:3000
[Calculator :373]:105
[Caller 373]: result = 105
[Calculator :373]:45
[Caller 373]: result = 45
[Calculator :373]:2250
[Caller 373]: result = 2250
[Calculator :373]:2.5
[Caller 373]: result = 2.5

*/