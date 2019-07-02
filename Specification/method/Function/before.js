/**
 * 在函数前后执行某些操作
 */
Function.prototype.before = function (fn) {
  let self = this
  return function () {
    fn.call(this)
    self.apply(this, arguments)
  }
}

Function.prototype.after = function (fn) {
  let self = this
  return function () {
    self.apply(this, arguments)
    fn.call(this)
  }
}
