const { createUser, getAllUser, getUserByEmail } = require('../DB/queries/user')
const { createJWT } = require('../middleware/auth')

module.exports.userSignUp = async (req, res) => {
    const body = req.body
    await createUser({ username: body.username, email: body.email, password: body.password,phone:body.phone,location:body.location,country:body.country,occupation:body.occupation,isvarified:body.isvarified})
    const token = await createJWT({ email: body.email, username: body.username ,phone:body.phone,password:body.password,location:body.location,country:body.country,occupation:body.occupation,isvarified:body.isvarified})
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





