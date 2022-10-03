/**
 * @description: 复制内容到剪切板。 该方法使用 navigator.clipboard.writeText 来实现将文本复制到剪贴板
 * @param {any} text
 * @return {*}
 */
const copyToClipboard = (text: any) => {
  if (!globalThis?.navigator) {
    console.warn('请在浏览器使用 copyToClipboard()')
    return
  }
  navigator.clipboard.writeText(text)
}

// copyToClipboard("Hello World");

/**
 * @description: 清除所有cookie。 该方法可以通过使用 document.cookie 来访问 cookie 并清除存储在网页中的所有 cookie
 * @return {*}
 */
const clearCookies = () => {
  if (!globalThis?.navigator) {
    console.warn('请在浏览器使用 clearCookies()')
    return
  }
  document.cookie
    .split(';')
    .forEach(
      (cookie) =>
        (document.cookie = cookie
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
    )
}

// clearCookies()

/**
 * @description: 获取选中的文本。 该方法通过内置的 getSelection 属性获取用户选择的文本
 * @return {*}
 */
// @ts-ignore
const getSelectedText = () => window.getSelection().toString();


/**
 * @description: 检测是否是黑暗模式。 该方法用于检测当前的环境是否是黑暗模式，它是一个布尔值
 * @return {*}
 */
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
// console.log(isDarkMode)


/**
 * @description: 滚动到页面顶部
 * @return {*}
 */
const goToTop = () => window.scrollTo(0, 0);
// goToTop();

/**
 * @description: 是否滚动到页面底部
 * @return {*}
 */
const scrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;


/**
 * @description: 判断当前标签页是否激活。 该方法用于检测当前标签页是否已经激活
 * @return {*}
 */
const isTabInView = () => !document.hidden; 


/**
 * @description: 判断当前是否是苹果设备。 该方法用于检测当前的设备是否是苹果的设备
 * @return {*}
 */
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);


/**
 * @description: 重定向到一个URL
 * @param {*} url
 * @return {*}
 */
const redirect = (url:string) => location.href = url
// redirect("https://www.google.com/")

/**
 * @description: 打开浏览器打印框。 该方法用于打开浏览器的打印框
 * @return {*}
 */
const showPrintDialog = () => window.print()