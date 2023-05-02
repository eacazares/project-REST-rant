require('dotenv').config()
const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('home')
})

// app.get ('/', function(req,res){
//     res.status(404).send('hello world')
// })

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)