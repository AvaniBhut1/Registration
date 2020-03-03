const { User } = require('../models/user')
const md5=require('md5')
module.exports.createUser = (body) => {
    const user = new User({
        username: body.name,
        password:body.password=md5(body.password),
        email: body.email,
        phone:body.phone,
        location:body.location,
        country:body.country,
        occupation:body.occupation,
        isVarified:body.isVarified,
        phone:body.phone,


    })
    return user.save()
}


module.exports.getAllUser = () => User.find({})

module.exports.getUserByEmail = (email) => User.findOne({ email:email })
