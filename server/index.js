const express = require('express')
require('dotenv').config()
const massive = require('massive')
const ctrl = require('./controller.js')
const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env

const app = express()

app.use(express.json())


massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))
}).catch(err => console.log(err))


app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);