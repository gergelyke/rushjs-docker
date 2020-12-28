const express = require('express')
const math = require('@gergelyke/rush-math')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world' + math(1, 2))
})

app.listen(3000, (err) => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }
})
