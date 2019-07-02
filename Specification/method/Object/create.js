//es5新增方法——接收两个参数：用作新对象原型的对象与（可选的）为新对象定义额外属性的对象
Object.create = function (o) {
	let F = function () {}
	F.prototype = o
	return new F()
}
