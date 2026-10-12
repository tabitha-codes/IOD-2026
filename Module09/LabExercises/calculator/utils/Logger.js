class Logger {
    log(id, result) {
        console.log(`[Caller ${id}]: result = ${result}`)
    }
}

module.exports = Logger