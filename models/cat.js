const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  colour: { type: String, required: true },
  image: { type: String, required: true },
  gender: { type: String },
  breed: { type: String }
})

module.exports = mongoose.model('Cat', catSchema)
