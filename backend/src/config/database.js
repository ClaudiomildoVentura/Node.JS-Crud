try {
    const mongoose = require('mongoose')

    mongoose.Promise = global.Promise

    module.exports = mongoose.connect('mongodb://localhost/user', { useMongoClient: true })

} catch (error) {
    console.log(error)
}