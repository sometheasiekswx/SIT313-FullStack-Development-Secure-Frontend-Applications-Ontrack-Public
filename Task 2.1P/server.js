const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000
app.listen(port, () => {
    console.log(`Email iService listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
