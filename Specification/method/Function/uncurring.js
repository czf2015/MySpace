Function.prototype.uncurring = function () {
  let self = this
  return function () {
    return Function.prototype.call.apply(self, arguments)
  }
}

const push = Array.prototype.push.uncurring()

let obj = {
  length: 1,
  "0": 1
}

push(obj, 2)

console.log(obj)