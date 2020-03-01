const { getUserByEmail } = require('../DB/queries/user')

module.exports.signUpValidator = async (req, res, next) => {
    const { name, email, password } = req.body
    let isError = false
    const error = []
    if (!name) {
        isError = true
        error.push({ message: 'name is required' })
    }
    if (!email) {
        isError = true
        error.push({ message: 'email is required' })
    }
    if (!password) {
        isError = true
        error.push({ message: 'password is required' })
    }
    if (isError) {
        res.status(404).send(error)
        return
    }
    const user = await getUserByEmail(email)
    if (user) {
        res.status(400).send({ message: 'Email Already exists' })
        return
    }
    next()
}

module.exports.signInValidator = async (req, res, next) => {
    const { email, password } = req.body
    let isError = false
    const error = []
    if (!email) {
        isError = true
        error.push({ message: 'email is required' })
    }
    if (!password) {
        isError = true
        error.push({ message: 'password is required' })
    }
    if (isError) {
        res.status(404).send(error)
        return
    }
    next()
}