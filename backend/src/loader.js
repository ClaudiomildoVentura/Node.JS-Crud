try {

    const server = require('./config/server')
    require('./config/database')
    require('./config/routes')(server)

} catch (error) {
    console.log(error)
}
/*
|--------------------------------------------------------------------------
| loader.js
|--------------------------------------------------------------------------
|
| Este arquivo é responsável por subir o servidor. E esta declarado no
| package j.son
|
|
*/