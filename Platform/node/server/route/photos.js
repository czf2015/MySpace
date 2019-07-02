const fs = require('fs')
const path = require('path')
const join = path.join
const Photo = require('../model/Photo')


let photos = []
photos.push({
	name: 'Node.js Logo',
	path: 'http://nodejs.org/images/logos/nodejs-green.png'
})
photos.push({
	name: 'Ryan Speaking',
	path: 'http://nodejs.org/images/ryan-speaker.jpg'
})


exports.list = function (req, res) {
	Photo.find({}, function (err, photos) {
		if (err) {
			return next(err)
		}

		res.render('photos', {
			title: 'photos',
			photos: photos
		})
	})
}

exports.form = function (req, res) {
	res.render('photos/upload', {
		title: 'Photo upload'
	})
}

exports.submit = function (dir) {
	return function (req, res, next) {
		let img = req.files.photo.image
		let name = req.body.photo.name || img.name
		let path = join(dir, img.name)
		fs.rename(img.path, path, function (err) {
			if (err) {
				return next(err)
			}

			Photo.create({
				name: name,
				path: img.name
			}, function (err) {
				if (err) {
					return next(err)
				}

				res.redirect('/')
			})
		}) 
	}

}

exports.download = function (dir) {
	return function (req, res, next) {
		let id = req.params.id
		Photo.findById(id, function (err, photo) {
			if (err) {
				return next(err)
			}

			let path = join(dir, photo.path)
			res.download(path, photo.name + '.jpeg')
		})
	}
}