const { createUser, getAllUser, getUserByEmail } = require('../DB/queries/user')
const { createJWT } = require('../middleware/auth')

module.exports.userSignUp = async (req, res) => {
    const body = req.body
    await createUser({ name: body.name, email: body.email, password: body.password })
    const token = await createJWT({ email: body.email, name: body.name })
    res.status(200).send({ message: 'user created successfully', token })
}

module.exports.userSignIn = async (req, res) => {
    const { email, password } = req.body
    const user = await getUserByEmail(email)
    if (!user || user.password !== password) {
        res.status(401).send({ message: 'emailId or password is incorrect' })
        return
    }
    const token = createJWT({ email: user.email, name: user.name })
    res.send({ message: 'login Success', token })
}

module.exports.getSelf = async (req, res) => {
    const { email } = req.body
    const data = await getUserByEmail(email)
    res.send(data)
}