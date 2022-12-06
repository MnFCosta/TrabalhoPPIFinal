const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const imagemRoutes = require('./routes/imagemRoutes')
const userRoutes = require('./routes/userRoutes')
const siteRoutes = require('./routes/siteRoutes')
const receitaRoutes = require('./routes/receitaRoutes')


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/imagems', imagemRoutes)
app.use('/users', userRoutes)
app.use('/site', siteRoutes)
app.use('/receitas', receitaRoutes)

app.listen(3000)
