## 手写防抖节流

## 解析

## 代码

```js
// 防抖
function debounce(fn, delay = 300) {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, arguments)
    }, delay)
  }
}

window.addEventListener(
  'scroll',
  debounce(() => {
    console.log(111)
  }, 1000)
)

// 节流
// 设置一个标志
function throttle(fn, delay) {
  let flag = true
  return () => {
    if (!flag) return
    flag = false
    timer = setTimeout(() => {
      fn()
      flag = true
    }, delay)
  }
}

window.addEventListener(
  'scroll',
  throttle(() => {
    console.log(111)
  }, 1000)
)

// 其他写法
function throttle2(fn, delay) {
  let lastTime = 0
  return function () {
    let nowTime = Date.now()
    if (nowTime > lastTime + delay) {
      fn.call(this, arguments)
      lastTime = nowTime
    }
  }
}

function throttleSetTimeOut(fn, delay) {
  let timer = null
  return function () {
    if (!timer) {
      fn.call(this, arguments)
      setTimeout(() => {
        timer = null
      }, delay)
    }
  }
}
```
