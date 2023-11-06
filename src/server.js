// Importing Libraries
const express = require("express")
const app = express()

app.use('/public', express.static('public'));

// Routes
app.get('/', (req,res)=>{
    res.render("index.ejs")
})

app.get('/login', (req,res)=>{
    res.render("login.ejs")
})

app.get('/register', (req,res)=>{
    res.render("register.ejs")
})
// End Routes



app.listen(3000)