const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/photo_app')

let PhotoSchema = new mongoose.Schema({
	name: String,
	path: String
})

module.exports = mongoose.model('Photo', PhotoSchema)