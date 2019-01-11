const express = require('express')
require('dotenv').config()
const massive = require('massive')
const ctrl = require('./controller.js')
const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env

const app = express()

app.use(express.json())


massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))