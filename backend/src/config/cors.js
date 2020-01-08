try {

    module.exports = (req, res, next) => {

        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        next()

    }

} catch (error) {
    console.log(error)
}
/*
|--------------------------------------------------------------------------
| cors.js
|--------------------------------------------------------------------------
|
| Midlleware para permitir que o cors da aplicação sejá acessado com sucesso
| de uma origem diferente.
|
| Na linha 5, res.header permite que seja acessado de origens diferentes.
| Na linha 6, res.header contendo alguns verbos http e outros.
| Na linha 7, res.header permite que seja acessado de origens diferentes
| com sucesso
|
| Na linha 8, é importante declarar o next() pois sem ele pode ocorrer o
| travamento da aplicação.
|
| Habilitar no server.js o midlleware declarado
*/