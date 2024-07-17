
const express = require('express')
const app = express()

const hostname = '127.0.0.1'
const port = 3000

app.get('/', (req, res) => res.send('Olá mundo, servidor ligado...'))

app.listen(port, hostname, () => console.log(`Server ligado em http://${hostname}:${port}/`))