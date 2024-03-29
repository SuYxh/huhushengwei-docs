## 模拟 new

## 解析

new 的执行过程

1. 创建一个对象 obj
2. 该对象的**proto**指向构造函数 Fn 的原型 prototype
3. 执行构造函数 Fn 的代码，往新创建的对象 obj 上添加成员属性和方法
4. 返回这个新的对象 obj

https://github.com/mqyqingfeng/Blog/issues/13



```
1、创建一个空对象
2、将该对象的构造函数属性指向要创建实例的构造函数
3、将该对象作为this关键字传递给构造函数，并执行该构造函数，以初始化对象的属性和方法
4、如果构造函数返回一个对象，则返回该对象；否则，返回上面创建的对象
```





## 代码

方式一

```js
function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype)
  let res = fn.call(obj, ...args)
  if (res && (typeof res === 'object' || typeof res === 'function')) {
    return res
  }
  return obj
}

// 用法如下：
// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }
// // Person.prototype.say = function() {
// //   console.log(this.age);
// // };
// // let p1 = myNew(Person, "lihua", 18);
// // console.log(p1.name);
// // console.log(p1);
// // p1.say();
```

方式二

```js
function mockNew() {
  // console.log("mockNew函数的参数：", arguments)
  // console.log("类数组转换：", Array.from(arguments))
  // 拿到第一个参数，这里是 Animal
  const Constructor = [].shift.call(arguments)
  // console.log("first params", Constructor)
  let obj = {}
  obj.__proto__ = Constructor.prototype
  let r = Constructor.apply(obj, arguments)
  // console.log("r", r)
  return r instanceof Object ? r : obj
}
```

方式三

```js
function _new() {
  let newObject = null,
    constructor = Array.prototype.shift.call(arguments)
  result = null
  // 参数判断
  if (typeof constructor !== 'function') {
    console.error('type error')
    return
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype)
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments)
  // 判断返回对象
  let flag =
    result && (typeof result === 'object' || typeof result === 'function')
  // 判断返回结果
  return flag ? result : newObject
}
```



方式4

```js
function myNew(constructor, ...args) {
  // 创建一个空对象
  const obj = {};

  // 将该对象的构造函数属性指向要创建实例的构造函数
  Object.setPrototypeOf(obj, constructor.prototype);

  // 将该对象作为this关键字传递给构造函数，并执行该构造函数，以初始化对象的属性和方法
  const result = constructor.apply(obj, args);

  // 如果构造函数返回一个对象，则返回该对象；否则，返回上面创建的对象
  return (result && typeof result === 'object') ? result : obj;
}


// 定义一个构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 使用myNew创建实例
const person = myNew(Person, 'Tom', 25);

console.log(person instanceof Person); // true
console.log(person.name); // 'Tom'
console.log(person.age); // 25
```

