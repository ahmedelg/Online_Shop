const express = require('express')
const path = require('path')

const homeRouter = require('./routes/home.route')
const app = express()

app.use(express.static(path.join(__dirname ,'assets')))
app.use(express.static(path.join(__dirname ,'images')))

app.set('view engine' , 'ejs')
app.set('views' , 'views') //Defualt


app.use('/', homeRouter)

app.listen(7000, () =>{
    console.log('Server Running on Port 7000')
})