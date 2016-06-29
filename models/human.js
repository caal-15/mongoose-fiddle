var mongoose = require('mongoose')

var humanSchema = new mongoose.Schema({
  name: {type: String, required: true, maxlength: 50},
  age: {type: Number, required: true, min: 0},
  likesGameOfThrones: {type: Boolean, default: true},
  likesCats: {type: Boolean, default: true},
  pets: {type: Number, default: 0},
  sex: {type: String, maxlength: 1}
})

humanSchema.methods.isAwesome = function () {
  return this.likesGameOfThrones && this.likesCats
}

humanSchema.statics.findAwesomePeople = function (cb) {
  this.find({likesGameOfThrones: true, likesCats: true}, cb)
}

module.exports = mongoose.model('human', humanSchema)
