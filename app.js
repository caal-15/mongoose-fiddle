var express = require('express')
var mongoose = require('mongoose')

var app = express()

mongoose.connect('mongodb://localhost/mongoose-fiddle')
app.db = mongoose.connection

module.exports = app
