Function.prototype.curry = function () {
	let slice = Array.prototype.slice,
		  args = slice.apply(arguments),
		  that = this;

	return function() {
		return that.apply(null, args.concat(slice.apply(arguments)));
	}
}

//示例：
function add(a, b) {
	try {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw {
				name: 'TypeError',
				message: 'add needs numbers'
			};
		}

		return a + b;
	} catch (e) {
		console.log(`${e.name} : ${e.message}`);
	}
}

let add1 = add.curry(1);
console.log(add1(6));