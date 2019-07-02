const fs = require('fs')
const request = require('request')
const htmlparser = require('htmlparser')

const configFilename = './rss_feeds.txt'

function checkForRSSFile() {
	fs.exists(configFilename, function (exists) {
		if (!exists) return next(new Error('Missing RSS file: ' + configFilename))

		next(null, configFilename)
	})
}

function readRSSFile(configFilename) {
	fs.readFile(configFilename, function (err, feedList) {
		if (err) return next(err)

		feedList = feedList.toString().replace(/^\s+|\s+$/g, '').split('\n')

		let random = Math.floor(Math.random() * feedList.length)

		next(null, feedList[random])
	})
}

function downloadRSSFeed(feedUrl) {
	request({uri: feedUrl}, function (err, res, body) {
		if (err) return next(err)

		if (res.statusCode != 200) return next(new Error('Abnormal response status code'))

		next(null, body)
	})
}

function parseRSSFeed(res) {
	let handler = new htmlparser.RssHandler()
	let parser = new htmlparser.Parser(handler)

	parser.parserComplete(rss)

	if (!handler.dom.items.length) return next(new Error('No RSS items found'))

	let item = handler.dom.items.shift()

	console.log(item.title)
	console.log(item.link)
}

let tasks = [checkForRSSFile, readRSSFile, downloadRSSFeed, parseRSSFeed]

function next(err, result) {
	if (err) throw err

	let currentTask = tasks.shift()

	if (currentTask) {
		currentTask(result)
	}
}

next()