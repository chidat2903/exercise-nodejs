const express = require('express')
const app = express()
const port = 3000

app.get('/example/a', (req, res) => {
    res.send('Hello from A!')
  })
  app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from B!')
  })
  const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }

  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/example/c', [cb0, cb1, cb2])

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })