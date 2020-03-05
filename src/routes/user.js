const express = require("express")
const app = express.Router()
const { userSignUp, userSignIn,verifyUser, getSelf } = require('../controller/user')
const { signUpValidator, signInValidator} = require('../validators/user')
const { validateToken } = require('../middleware/auth')
app.get(
    "/user/signup", signUpValidator, userSignUp
)
app.post("/user/signin", signInValidator, userSignIn)
app.post("/user/verify/:email",verifyUser)


app.get("/user/self", validateToken, getSelf)
module.exports = app












