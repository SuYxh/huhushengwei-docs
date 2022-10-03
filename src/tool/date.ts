/**
 * @description: 检测给出的日期是否有效
 * @param {array} val
 * @return {*}
 */
// @ts-ignore
const isDateValid = (...val: any) => !Number.isNaN(new Date(...val).valueOf())
// console.log(isDateValid("December 17, 1995 03:24:00"))  // true

/**
 * @description: 计算两个日期之间的间隔时间
 * @param {Date} date1
 * @param {Date} date2
 * @return {*}
 */
const dayDif = (date1: Date, date2: Date) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

// console.log(dayDif(new Date('2021-10-1'), new Date('2022-10-1'))) // 365



/**
 * @description: 检测给出的日期位于今年的第几天
 * @param {Date} date
 * @return {*}
 */
// @ts-ignore
const dayOfYear = (date: Date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// console.log(dayOfYear(new Date())); // 274



/**
 * @description: 将时间转化为hour:minutes:seconds的格式：
 * @param {Date} date
 * @return {*}
 */
const timeFromDate = (date: Date) => date.toTimeString().slice(0, 8);

// console.log(timeFromDate(new Date(2021, 11, 2, 12, 30, 0)))
// console.log(timeFromDate(new Date()));


/**
 * @description: 查询某天是否为工作日, 周一至周五为工作日
 * @param {*} date
 * @return {*}
 */
const isWeekday = (date: Date) => date.getDay() % 6 !== 0;
console.log(isWeekday(new Date()));
