## instanceof

## 解析

> instanceof是JavaScript用于检查对象是否属于某个类（即是否是该类的实例）的运算符。它会在对象原型链上查找指定的构造函数，并返回布尔值表示是否找到了匹配。

实 instanceof 主要的实现原理就是 只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。

## 代码

```js
function instanceOf(leftVaule, rightVaule) {
  let rightProto = rightVaule.prototype // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__ // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
      return false
    }
    if (leftVaule === rightProto) {
      return true
    }
    leftVaule = leftVaule.__proto__
  }
}

console.log([] instanceof Array)
console.log(instanceOf([], Array))
```





```js
function myInstanceOf(object, constructor) {
  let prototype = Object.getPrototypeOf(object);
  while (prototype !== null) {
    if (prototype === constructor.prototype) {
      return true;
    }
    prototype = Object.getPrototypeOf(prototype);
  }
  return false;
}


// 定义一个构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 创建一个实例
const person = new Person('Tom', 25);

// 使用myInstanceOf检查实例是否属于Person类
console.log(myInstanceOf(person, Person)); // true
console.log(myInstanceOf(person, Object)); // true
console.log(myInstanceOf(person, Array)); // false

```

