require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('./DB')
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(routes)



module.exports = app
