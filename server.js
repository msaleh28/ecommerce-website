// Importing Libraries
require('dotenv').config()

const express = require("express")
const app = express()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', (error) => console.error('Connected to Database'))

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.use(express.urlencoded({extended: "false"}))

app.use('/public', express.static('public'));

app.set('view-engine', 'ejs')

// Routes
app.get('/', (req,res)=>{
    res.render("index.ejs")
})

app.get('/login', (req,res)=>{
    res.render("login.ejs")
})

app.post('/login', (req,res) => {
    
})

app.get('/register', (req,res)=>{
    res.render("register.ejs")
})

app.post('/register', async (req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.register-password, 10)
        usersRouter.
    } catch(err) {

    }
})
// End Routes



app.listen(3000)