/**
 * @description: 将英文字符串的首字母大写处理
 * @param {string} str
 * @return {*}
 */
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
// console.log(capitalize("hello world")) // Hello world

/**
 * @description: 翻转字符串
 * @param {string} str
 * @return {*}
 */
const reverseStr = (str: string) => str.split('').reverse().join('')
// console.log(reverseStr('hello world')) // 'dlrow olleh'

/**
 * @description: 随机字符串
 * @return {*}
 */
const randomString = () => Math.random().toString(36).slice(2)
// console.log(randomString())

/**
 * @description: 从指定长度处截断字符串
 * @param {string} string
 * @param {number} length
 * @return {*}
 */
const truncateString = (string: string, length: number) =>
  string.length < length ? string : `${string.slice(0, length - 3)}...`

// console.log(
//   truncateString('Hi, I should be truncated because I am too loooong!', 36)
// ) // Hi, I should be truncated because...

/**
 * @description: 去除字符串中的HTML
 * @param {string} html
 * @return {*}
 */
const stripHtml = (html:string) => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';