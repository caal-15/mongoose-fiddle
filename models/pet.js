var mongoose = require('mongoose')
var Human = require('./human.js')

var petSchema = new mongoose.Schema({
  name: {type: String, required: true},
  howYouActuallyCallIt: String,
  human: {type: String, ref: 'human', required: true}
})

petSchema.statics.findPetsAndhumans = function (cb) {
  this
    .find()
    .populate('human')
    .exec(cb)
}

petSchema.pre('save', function (next) {
  Human.findByIdAndUpdate(this.human, {$inc: {pets: 1}}, function (err, human) {
    if (err) next(err)
    else next()
  })
})

petSchema.post('save', function (doc) {
  console.log('The new pet Name is ' + doc.name)
})

module.exports = mongoose.model('pet', petSchema)
