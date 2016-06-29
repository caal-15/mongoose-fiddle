var Human = require('../models/human.js')
var Pet = require('../models/pet.js')
var mongoose = require('mongoose')
var prettyjson = require('prettyjson')

function handler(err, item) {
  if (err) console.log('We Failed! :(')
  else console.log(item)
}

module.exports = {
  start: function () {
    mongoose.connect('mongodb://localhost/mongoose-fiddle')
  },
  createHuman: function (data) {
    Human.create(data, handler)
  },
  findHumans: function (query) {
    Human.find(query, handler)
  },
  findOneHuman: function (id) {
    Human.findById(id, handler)
  },
  editHuman: function (id, data) {
    Human.findByIdAndUpdate(id, {$set: data}, handler)
  },
  deleteHuman: function (id) {
    Human.findByIdAndRemove(id, handler)
  },
  isThisOneAwesome: function (id) {
    Human.findById(id, function (err, human) {
      if (err || !human) {
        console.log('We Failed! :(')
      } else {
        if (human.isAwesome()) console.log('Awesome!')
        else console.log('Not Awesome D:');
      }
    })
  },
  findAwesomePeople: function () {
    Human.findAwesomePeople(handler)
  },
  createPet: function (data) {
    Pet.create(data, handler)
  },
  findPetsAndhumans: function () {
    Pet.findPetsAndhumans(handler)
  },
  end: function () {
    mongoose.connection.close()
  }
}
