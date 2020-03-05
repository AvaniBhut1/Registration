const { User } = require('../models/user')
const md5=require('md5')
module.exports.createUser = (body) => {
    const user = new User({
        username: body.username,
        password:body.password,
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
module.exports.veryfyUser=(email)=>user.updateOne({email},{isVarified:true})

