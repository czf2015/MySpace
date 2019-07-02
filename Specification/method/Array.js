export function Array() {}
​
Array.prototype.name = "Array"

Array.prototype.length = 1

Array.prototype.prototype = Array []

Array.prototype.concat = function concat()
​
Array.prototype.every = function every()
​
Array.prototype.filter = function filter()
​
Array.prototype.forEach = function forEach()
​
Array.prototype.from = function from()
​
Array.prototype.indexOf = function indexOf()
​
Array.prototype.isArray = function isArray()
​
Array.prototype.join = function join()
​
Array.prototype.lastIndexOf = function lastIndexOf()
​
Array.prototype.map = function (callback, thisArg) {

  var T, A, k;

  if (this == null) {
    throw new TypeError(" this is null or not defined");
  }

  // 1. 将O赋值为调用map方法的数组.
  var O = Object(this);

  // 2.将len赋值为数组O的长度.
  var len = O.length >>> 0;

  // 3.如果callback不是函数,则抛出TypeError异常.
  if (Object.prototype.toString.call(callback) != "[object Function]") {
    throw new TypeError(callback + " is not a function");
  }

  // 4. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
  if (thisArg) {
    T = thisArg;
  }

  // 5. 创建新数组A,长度为原数组O长度len
  A = new Array(len);

  // 6. 将k赋值为0
  k = 0;

  // 7. 当 k < len 时,执行循环.
  while(k < len) {

    var kValue, mappedValue;

    //遍历O,k为原数组索引
    if (k in O) {

      //kValue为索引k对应的值.
      kValue = O[ k ];

      // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
      mappedValue = callback.call(T, kValue, k, O);

      // 返回值添加到新数组A中.
      A[ k ] = mappedValue;
    }
    // k自增1
    k++;
  }

  // 8. 返回新数组A
  return A;
}; 
​
​
Array.prototype.of = function of()
​
Array.prototype.pop = function pop()
​
​
Array.prototype.push = function push()
​
Array.prototype.reduce = function (f, v = 0) {
  for (let i = 0; i < this.length; i++) {
    v = f(v, this[i])
  }
  return v
}
​
Array.prototype.reduceRight = function reduceRight()
​
Array.prototype.reverse = function reverse()
​
Array.prototype.shift = function shift()
​
Array.prototype.slice = function slice()
​
Array.prototype.some = function some()
​
Array.prototype.sort = function sort()
​
Array.prototype.splice = function splice()
​
Array.prototype.unshift = function unshift()
​