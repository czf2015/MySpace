function setup(format) {
	let regexp = /:(/w+)/g

	return function logger(req, res, next) {
		let str = format.replace(regexp, function (match, property) {
			return req[property]
		})
		
		console.log(str)

		next()
	}
}

module.exports = setup