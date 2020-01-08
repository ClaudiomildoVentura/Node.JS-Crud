try {
    const express = require('express')

    module.exports = (server) => {

        const router = express.Router()
        server.use('/api', router)

        const todoService = require('../api/todo/service')
        todoService.register(router, '/users')
    }

} catch (error) {
    console.log(error)
}
/*
|--------------------------------------------------------------------------
| routes.js
|--------------------------------------------------------------------------
|
| Arquivo com as rotas do servidor
|
| Na linha 10, o método register utiliza todos verbos que foram declarados
| no todoServices
|
| A declaração da rota ficou desta forma http://127.0.0.1:3000/api/todos
*/