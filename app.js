let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')
let app = express()
let port = process.env.PORT || 5000

//view Engines 
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

// Set Static path for non html code like pictures and CSS
app.use(express.static(path.join(__dirname + 'public')))


app.get('/', (req, res) => {
    res.render('pages/index')
  })

  // app.get('/', (req, res) => {
  //   res.render('pages/buildshirt3')
  // })

  // app.get('/', (req, res) => {
  //   res.render('pages/buildshirt4')
  // })
  // app.get('/', (req, res) => {
  //   res.render('pages/finalshirt')
  // })


  

// app.get('/', (req, res) => {
//     res.render('pages/index')
//   })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))