const express = require("express")
const app = express.Router()
const { userSignUp, userSignIn, getSelf } = require('../controller/user')
const { signUpValidator, signInValidator } = require('../validators/user')
const { validateToken } = require('../middleware/auth')
app.post(
    "/user/signup", signUpValidator, userSignUp
)

app.post("/user/signin", signInValidator, userSignIn)

app.get("/user/self", validateToken, getSelf)

module.exports = app
