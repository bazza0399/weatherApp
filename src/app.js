const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const getWeather = require('./utils/getWeather')
require('./utils/getWeather')
//express config paths
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//view engine and view path setup
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//static dir setup
app.use(express.static(publicDirPath))
//routes
app.get('',(req,res)=>{
    res.render('index',{
        title : 'weather app',
        name : 'Ahmed'
    })
})

app.get('/forecast',(req,res)=>{
    if(!req.query.location){
        return res.send({
            error : 'no location provided'
        })
    }
    getWeather(req.query.location,(err,data)=>{
        res.send(data)
    })
})

app.get('/weather',(req,res)=>{
    res.render('weather',{
        title : 'weather page'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'about page'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title : 'help page'
    })
})

app.get('*',(req,res)=>{
    res.send('error')
})





app.listen(3000,()=>{
    console.log('server is up')
})