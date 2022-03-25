const express = require("express")
const app = express()
const path = require("path")

app.use(express.json())
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    next()
})

app.get("/", (req, res) => {
    res
        .status(200)
        .send(`<p>Il va faire beau sur ${req.query.city}</p>
        
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consequuntur consectetur dolorem voluptates provident obcaecati eligendi nulla at modi omnis, ab cumque unde aspernatur a dolorum deleniti aut, nihil neque!</p>`)
        
})

app.listen("8080")
console.log("Server started")