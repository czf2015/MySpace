if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {

    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    // 1. 将O赋值为调用map方法的数组.
    const O = Object(this);

    // 2.将len赋值为数组O的长度.
    const len = O.length >>> 0;

    // 3.如果callback不是函数,则抛出TypeError异常.
    if (Object.prototype.toString.call(callback) != "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }

    // 4. 如果参数thisArg有值,则将arg赋值为thisArg;否则arg为undefined.
    let arg = thisArg || undefined

    // 5. 创建新数组a,长度为原数组O长度len
    let a = new Array(len);

    for (let k = 0; k < len; k++) {

      let kValue, mValue;

      //遍历O,k为原数组索引
      if (k in O) {

        //kValue为索引k对应的值.
        kValue = O[k];

        // 执行callback,this指向arg,参数有三个.分别是kValue:值,k:索引,O:原数组.
        mValue = callback.call(arg, kValue, k, O);

        // 返回值添加到新数组a中.
        a[k] = mValue;
      }
    }

    // 8. 返回新数组a
    return a;
  }; 
}

const map = Array.prototyp.map