const { getUserByEmail } = require('../DB/queries/user')
module.exports.signUpValidator = async (req, res, next) => {
    const { username, email, password,phone, location,country,occupation,isVarified} = req.body
    let isError = false
    const error = []
    if (!username) {
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
    if(!phone){
        isError = true
        error.push({message:'phone is required'})
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
module.exports.emailValidator = async (req, res, next) => {
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