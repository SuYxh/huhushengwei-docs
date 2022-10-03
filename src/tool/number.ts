/**
 * @description: 判断一个数是奇数还是偶数
 * @param {number} num
 * @return {*}
 */
const isEven = (num: number) => num % 2 === 0
// console.log(isEven(996)) // true

/**
 * @description: 获得一组数的平均值
 * @param {array} args
 * @return {*}
 */
// @ts-ignore
const average = (...args) => args.reduce((a, b) => a + b) / args.length
// console.log(average(1, 2, 3, 4, 5)) // 3

/**
 * @description: 获取两个整数之间的随机整数
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
const getRandomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)
// console.log(getRandomNum(1, 50))

/**
 * @description: 将一个数字按照指定位进行四舍五入
 * @param {number} n
 * @param {number} d
 * @return {*}
 */
// @ts-ignore
const roundNum = (n: number, d: number) => Number(Math.round(n + 'e' + d) + 'e-' + d)
// console.log(roundNum(1.005, 2)) //1.01
// console.log(roundNum(1.555, 2)) //1.56
