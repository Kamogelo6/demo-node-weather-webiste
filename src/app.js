const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 3000

//Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engines and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static dir to serve
app.use(express.static(publicDir))

app.get('', (req, res)=>{
    res.render('index',  {
        title : 'Weather',
        name : 'Kamogelo Mmatli'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'About me',
        body : 'Family guy',
        name : 'Kamogelo Mmatli'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title: 'Help',
        message : `Use contron C to stop server from running`,
        name : 'Kamogelo Mmatli'
        
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.location){
        return res.send({
            error : 'You must enter an location'
        })
    }

    res.send({
        forecast : 7,
        location : req.query.location
    })
})

app.get('/products', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error : 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res)=>{
    res.render('pageNotFound', {
        title : 404,
        errorMessage : 'Help article not found.',
        name : 'Kamogelo Mmatli'
    })
})

app.get('*', (req, res)=>{
    res.render('pageNotFound',{
        title : 404,
        errorMessage : 'Page not found',
        name : 'Kamogelo Mmatli'
    })
})

app.listen(port, ()=>{
    console.log(`Server runnning on ${port}`)
})