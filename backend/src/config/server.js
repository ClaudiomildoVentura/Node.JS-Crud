try {
    const bodyParser = require('body-parser')
    const cors = require('./cors')
    const express = require('express')

    const server = express()
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
    server.use(cors)

    const port = process.env.PORT || 3001
    server.listen(port, () => {
        console.log(`Server on, at http://127.0.0.1 in port: ${port}`)
    }) 

    module.exports = server

} catch (error) {
    console.log(error)
}
/*
|--------------------------------------------------------------------------
| server.js
|--------------------------------------------------------------------------
|
| Arquivo com as módulos e midlleware do servidor
| Na linha 16, é exportador o módulo do express para ser utilizado em
| outros arquivos
|
*/