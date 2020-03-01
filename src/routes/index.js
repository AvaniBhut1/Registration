const express = require('express')
const app = express.Router()
const user = require("./user")
const routes = [user]
routes.forEach(route => {
    app.use("/api", route)
})
module.exports = app