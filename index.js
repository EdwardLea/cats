require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')


const app = express()

app.use(express.static(`${__dirname}/dist`))

mongoose.connect('mongodb://localhost/cats-db')

app.use(bodyParser.json())

app.use('/api', routes)

app.get('/*', (req,res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () => console.log(`Express is listening on port ${process.env.PORT}`))
