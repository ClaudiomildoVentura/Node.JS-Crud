try {
    const User = require('./user')

    User.methods(['get', 'post', 'put', 'delete'])

    User.updateOptions({ new: true, runValidators: true })

    User.route('count', (req, res, next) => {
        User.count((error, value) => {
            if (error) {
                res.status(500).json({ errors: [error] })
            } else {
                res.json({ value })
            }
        })
    })

    module.exports = User

} catch (error) {
    console.log(error)
}