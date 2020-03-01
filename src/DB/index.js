const mongoose = require('mongoose')

let mongoConnection = mongoose
    .connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('mongoDB connected'))
    .catch(err => console.log(err))

const mongoDB = mongoConnection

module.exports = mongoDB
