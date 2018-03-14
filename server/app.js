const express = require('express')
const app = express()
const db = require('./db')
const conf = require('./config')

app.disable('x-powered-by')
app.set('trust proxy', true)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token")
    next()
})

const UserController = require('./api/Controlers/UserController')
app.use('/users', UserController)

module.exports = app