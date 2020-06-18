//chunk 1
const express = require('express')
const app = express()
const path = require('path')
const PORT = 3001

var createError = require('http-errors')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var usersRouter = require('./routes/contact')
var cors = require('cors')

app.use(cors())
app.use(logger('dev'))
app.use(cookieParser())

// chunk 2
//Data parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/build')))

app.use((req, res, next) => {
  console.log('*****INSIDE SERVER****')
  next()
})

// app.use("/", indexRouter);
app.use('/contact', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

app.listen(PORT, () => console.log('Server is starting on PORT', 3001))

module.exports = app
