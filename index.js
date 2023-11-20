
const express = require('express')
const app = express()
const port = 3000

app.get('/saksham', (req, res) => {
    res.send('hii Saksham')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})