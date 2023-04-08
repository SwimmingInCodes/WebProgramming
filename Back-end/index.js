
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name }=req.params
    if (name=="dog") {
        res.json({'sound':'bark'})
    } else if (name=="cat") {
        res.jason({'sound':'meow'})
    } else if (name=="pig") {
        res.jason({'sound':'oink-oink'})
    } else {
        res.jason({'sound': "don't know"})
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

