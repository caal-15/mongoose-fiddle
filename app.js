var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var morgan = require('morgan');
var Human = require('./models/human.js')

var app = express()

mongoose.connect('mongodb://localhost/mongoose-fiddle')
app.db = mongoose.connection

app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', function (req, res) {
  Human.find(req.query, function (err, humans) {
    if (err) res.json({msg: 'Failure'})
    else res.json({msg: 'OK', data: humans})
  })
})

app.post('/', function (req, res) {
  Human.create(req.body, function (err, human) {
    if (err) res.json({msg: 'Failure'})
    else res.json({msg: 'OK', data: human})
  })
})

module.exports = app
