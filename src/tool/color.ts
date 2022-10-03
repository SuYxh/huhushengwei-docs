/**
 * @description: 将一个RGB的颜色值转化为16进制值
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {*}
 */
const rgbToHex = (r:number, g:number, b:number) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
console.log(rgbToHex(255, 255, 255)) // '#ffffff'


/**
 * @description: 获取随机十六进制颜色
 * @return {*}
 */
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(randomHex());