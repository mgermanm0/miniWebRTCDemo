const express = require("express")
const bodyparser = require("body-parser")
const path = require("path")
const app = express()
const puerto = 3000

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, '/vistas/')))

app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.render(__dirname + "\\vistas\\index.ejs")
})

app.post('/entrarsala', (req,res) => {
    if(res.req.user == ""){
        res.send('<script>alert("NONONNO")</script>')
    } else {
    res.render(__dirname + "\\vistas\\sala.ejs", {
        user: req.body.user
    })
    }
})

app.listen(puerto, () => {
    console.log("A la escucha en puerto " + puerto)
})