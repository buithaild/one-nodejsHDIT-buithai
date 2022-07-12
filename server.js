const express = require('express')
const app = express()
const port = 6060

app.get('/', (req, res) => {
    res.send('Hello World! vs Bui Van Thai')
})

app.get('/about', (req, res) => {
    res.send(`I 'm Thai`)
})

app.listen(port, () => {
    console.log(`Example app listening at  http://localhost:${port}`)
})