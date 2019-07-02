Function.prototype.inherits = function (Super) {
	this.prototype = new Super();
	return this;
}