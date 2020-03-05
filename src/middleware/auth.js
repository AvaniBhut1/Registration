const jwt = require('jsonwebtoken')
module.exports.createJWT = (user) => {
    console.log('asdfasdf')
    return jwt.sign(user, process.env.JWTSECRET,{expiresIn:'5m'})
}
module.exports.validateToken = (req, res, next) => {
    try{
        console.log(req.headers)
        const decoded = jwt.verify(req.headers.authorization, process.env.JWTSECRET)
        console.log(decoded)
        req.body = { decoded, ...req.body }
        next()
    } catch (err) {
        res.status(401).send({ message: 'invalid token' })
    }
}



































