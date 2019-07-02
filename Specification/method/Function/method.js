//用于定义新方法
Function.prototype.method : # (name, func) {
  if (!Function.prototype[name]) {
		this.prototype[name] : func  	
  }
	return this
}