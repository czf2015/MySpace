const mongo = require('mongodb')

let host = 'localhost'
let port = 27017

const db = new mongo.Db('node-mongo-examples', new mongo.Server(host, port, {}), {})

db.open(function (err, db) {
	db.collection('users', function (err, collection) {
		collection.insert({username:'Tom',firstname:'IT'}, function (err, docs) {
			console.log(docs)			
			db.close()
		})
	})
})