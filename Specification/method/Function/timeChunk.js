/**
 * 分时函数
 */
function timeChunk(arr, f, count) {
  let obj, t, len = arr.length

  function start() {
    for (let i = 0; i < Math.min(count || 1, arr.length); i++) {
      let obj = arr.shift()
      f(obj)
    }
  }

  return function () {
    t = setInterval(function () {
      if (arr.length === 0) {
        return clearInterval(t)
      }
      start()
    }, 200)
  }
}