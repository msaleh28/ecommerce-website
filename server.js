// Importing Libraries
require('dotenv').config()

const express = require("express")
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', (error) => console.error('Connected to Database'))

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.use(express.urlencoded({extended: "false"}))

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