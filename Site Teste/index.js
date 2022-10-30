const express = require('express')
const app = express()
const User = require('./TesteAuth')

app.get('/secret', (req , res) => {
    res.send('Segredo!')
})

app.listen(3000, () => {
    console.log("Serving your app!")
})