Array.prototype.reduce = function (f, v = 0) {
	for (let i = 0; i < this.length; i++) {
		v = f(v, this[i])
	}
	return v
}

//示例：
let data = [4, 8, 15, 16, 23, 42]
function add(a, b) {
	return a + b
}
//因为数组其实就是对象，所以可以直接给其增加方法
//因为字符串'total'不是整数，所以不会改变length
data.total = function () {
	return this.reduce(add)
} 
data.total()