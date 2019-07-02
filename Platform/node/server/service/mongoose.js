const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

let AuthorSchema = new Schema({
	name: {
		first: String,
		last: String,
		full: String
	},
	contact: {
		email: String,
		twitter: String,
		google: String
	},
	photo: String
})

let CommentSchema = new Schema({
	commenter: String,
	body: String,
	posted: Date
})

let ArticleSchema = new Schema({
	author: ObjectId,
	title: String, 
	contents: String,
	published: Date,
	comments: [CommentSchema]
})

let Author = mongoose.model('Author', AuthorSchema)
let Article = mongoose.model('Article', ArticleSchema)

mongoose.connect('mongodb://localhost:27017/upandrunning', function (err) {
	if (err) {
		console.log('Could not connect to mongo')
	}
})

let author = new Author({
	name: {
		first: 'Tom',
		last: 'Bill',
		full: String
	},
	contact: {
		email: '122385930@qq.com',
		twitter: 'twitt',
		google: 'go'
	},
	photo: 'www.baidu.com'
})

author.save(function (err) {
	if (err) {
		console.log('Could not save author')
	} else {
		console.log('Author saved')
	}
})

Author.find(function (err, doc) {
	console.log(doc)
})