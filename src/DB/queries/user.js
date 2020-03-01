const { User } = require('../models/user')

module.exports.createUser = (body) => {
    const user = new User({
        name: body.name,
        password: body.password,
        email: body.email
    })
    return user.save()
}

module.exports.getAllUser = () => User.find({})

module.exports.getUserByEmail = (email) => User.findOne({ email:email })