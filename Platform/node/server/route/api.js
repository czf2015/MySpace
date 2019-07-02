const express = require('express')
const User = require('../lib/user')
const Entry = require('../lib/entry')

exports.auth = express.basicAuth(User.authenticate)

exports.user = function (req, res, next) {
	User.get(req.params.id, function (err, user) {
		if (err) {
			return next(err)
		}
		if (!user.id) {
			return res.send(404)
		}
		res.json(user)
	})
}

exports.entries = function (req, res, next) {
	let page = req.page
	Entry.getRange(page.from, page.to, function (err, entries) {
		if (err) {
			return next(err)
		}
		res.format({
			json: function () {
				res.send(entries)
			},
			xml: function () {
				res.render('/entries/xml', {entries: entries})
			}
		})
	})
}