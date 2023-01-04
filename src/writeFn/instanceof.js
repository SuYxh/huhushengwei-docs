function myInstanceof(leftVal, rightVal) {

  leftVal = leftVal.__proto__, rightVal = rightVal.prototype

  while (true) {
    if (leftVal === null) {
      return false
    }
    if (leftVal === rightVal) {
      return true
    }
    leftVal = leftVal.__proto__
  }
}


// console.log(myInstanceof([], Array))

// console.log((2).constructor)
// console.log(Number)
// function Fn(){};
// console.log(Object)
// console.log(typeof Object)


// class PrimitiveString {
//   static [Symbol.hasInstance](x) {
//     console.log('x', x)
//     return typeof x === 'string'
//   }
// }
// console.log(Object);
// console.log(PrimitiveString)
// console.log(typeof PrimitiveString)

// console.log('hello world' instanceof PrimitiveString) // true
