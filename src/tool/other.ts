/**
 * @description: 将摄氏温度转华氏温度
 * @param {number} celsius
 * @return {*}
 */
const celsiusToFahrenheit = (celsius:number) => celsius * 9/5 + 32;
// celsiusToFahrenheit(100) // 212

/**
 * @description: 将华氏温度转换为摄氏温度
 * @param {number} fahrenheit
 * @return {*}
 */
const fahrenheitToCelsius = (fahrenheit:number) => (fahrenheit - 32) * 5/9;
// fahrenheitToCelsius(50) // 10

/**
 * @description: 检测对象是否为空
 * @param {*} obj
 * @return {*}
 */
const isEmpty = (obj: any) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;