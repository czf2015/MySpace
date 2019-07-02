//处理父类方法的方法
Object.prototype.superior = function (name) {
	let that = this,
	    method = that[name];	    
	return function () {
		return method.apply(that, arguments);
	}
}