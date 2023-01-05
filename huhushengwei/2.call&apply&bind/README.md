## call apply bind

## 解析

JavaScript深入之call和apply的模拟实现
https://github.com/mqyqingfeng/Blog/issues/11 


JavaScript深入之bind的模拟实现
https://github.com/mqyqingfeng/Blog/issues/12


## 代码

### call

```js
Function.prototype.myCall = function (context, ...args) {
  // this 要处理的函数 fn
  if (typeof this !== 'function') {
    throw new TypeError(`${this} must be a function`)
  }
  if (!context) {
    context = typeof window !== 'undefined' ? window : global
  }
  // context 有可能传非对象，必须保证 context 是一个对象类型
  if (!/^(object|function)$/i.test(typeof context)) {
    // context = new context.constructor(context); // 不适用于 Symbol/BigInt
    context = Object(context)
  }
  const fn = Symbol('fn')
  // 把函数作为对象的某个成员值
  context[fn] = this
  let result = context[fn](...args)
  // 设置完成员属性后，删除
  delete context[fn]
  return result
}

// 测试
const objForCall = {
  name: 'jarvis',
  sex: 'man',
}

function fnForCall() {
  console.log(this, this.name, this.sex)
}

fnForCall()
fnForCall.call(objForCall)
fnForCall.myCall(objForCall)
```

### apply

```js
Function.prototype.myApply = function (context, args) {
  // this 要处理的函数 fn
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`)
  }
  //  null，undefined，和不传时，context为 window
  if (!context) {
    context = typeof window !== 'undefined' ? window : global
  }
  // 必须保证 context 是一个对象类型
  if (!/^(object|function)$/i.test(typeof context)) {
    // context = new context.constructor(context); // 不适用于 Symbol/BigInt
    context = Object(context)
  }
  const fn = Symbol('fn')
  context[fn] = this // 把函数作为对象的某个成员值
  const result = context[fn](...args)
  delete context[fn] // 设置完成员属性后，删除
  return result
}

const objForApply = {
  name: 'jarvis',
  sex: 'man',
}

function fnForApply() {
  console.log(this, this.name, this.sex)
}

fnForApply()
fnForApply.apply(objForApply)
fnForApply.myApply(objForApply)
```

### bind

写法一

```js
Function.prototype.bind2 = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Bind must be called on a function')
  }

  const executeBound = function (
    sourceFunc,
    boundFunc,
    context,
    callingContext,
    args
  ) {
    if (!(callingContext instanceof boundFunc)) {
      // 如果调用方式不是new func的形式就直接调用sourceFunc，并且给到对应的参数即可
      return sourceFunc.apply(context, args)
    } else {
      const self = Object.create(sourceFunc.prototype) // 处理new调用的形式
      const result = sourceFunc.apply(self, args)

      if (
        (result && typeof result === 'object') ||
        typeof result === 'function'
      ) {
        return result
      } else {
        return self
      }
    }
  }
  const func = this

  const bound = function (...innerArgs) {
    return executeBound(func, bound, context, this, args.concat(innerArgs))
  }

  return bound
}

// 测试
// 1. 普通调用
const showName = function (sex, age) {
  console.log(this, sex, age)
}

const Person = function (name) {
  this.name = name
}

Person.prototype.showName = function (age) {
  console.log(this, this.name, age)
}

const bindPerson = Person.bind(null, 'boy')
const p1 = new bindPerson('前端胖头鱼')

p1.showName(100)

showName.bind2({ name: '前端胖头鱼' }, 'boy')(100)
```

写法二

```js
Function.prototype.myBind = function (context, ...args) {
  if (!context || context === null) {
    context = window
  }
  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol()
  context[fn] = this
  let _this = this
  //  bind情况要复杂一点
  const result = function (...innerArgs) {
    // 第一种情况 :若是将 bind 绑定之后的函数当作构造函数，通过 new 操作符使用，则不绑定传入的 this，而是将 this 指向实例化出来的对象
    // 此时由于new操作符作用  this指向result实例对象  而result又继承自传入的_this 根据原型链知识可得出以下结论
    // this.__proto__ === result.prototype   //this instanceof result =>true
    // this.__proto__.__proto__ === result.prototype.__proto__ === _this.prototype; //this instanceof _this =>true
    if (this instanceof _this === true) {
      // 此时this指向指向result的实例  这时候不需要改变this指向
      this[fn] = _this
      this[fn](...[...args, ...innerArgs]) //这里使用es6的方法让bind支持参数合并
    } else {
      // 如果只是作为普通函数调用  那就很简单了 直接改变this指向为传入的context
      context[fn](...[...args, ...innerArgs])
    }
  }
  // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
  // 实现继承的方式: 使用Object.create
  result.prototype = Object.create(this.prototype)
  return result
}

// function Person(name, age) {
//   console.log(name); //'我是参数传进来的name'
//   console.log(age); //'我是参数传进来的age'
//   console.log(this); //构造函数this指向实例对象
// }
// // 构造函数原型的方法
// Person.prototype.say = function() {
//   console.log(123);
// }
// let obj = {
//   objName: '我是obj传进来的name',
//   objAge: '我是obj传进来的age'
// }
// // 普通函数
// function normalFun(name, age) {
//   console.log(name);   //'我是参数传进来的name'
//   console.log(age);   //'我是参数传进来的age'
//   console.log(this); //普通函数this指向绑定bind的第一个参数 也就是例子中的obj
//   console.log(this.objName); //'我是obj传进来的name'
//   console.log(this.objAge); //'我是obj传进来的age'
// }

// 先测试作为构造函数调用
// let bindFun = Person.myBind(obj, '我是参数传进来的name')
// let a = new bindFun('我是参数传进来的age')
// a.say() //123

// 再测试作为普通函数调用
// let bindFun = normalFun.myBind(obj, '我是参数传进来的name')
//  bindFun('我是参数传进来的age')
```
