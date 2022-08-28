module.exports = function getGuideSidebar() {
  return [
    {
      text: '浏览器',
      children: [
        {
          text: '1.Cookie、sessionStorage、localStorage 的区别',
          link: '/guide/browser/1.Cookie、sessionStorage、localStorage 的区别',
        },
        {
          text: '2.从输入URL到页面加载的全过程',
          link: '/guide/browser/2.从输入URL到页面加载的全过程',
        },
        {
          text: '3.浏览器重绘与重排的区别',
          link: '/guide/browser/3.浏览器重绘与重排的区别',
        },
        {
          text: '4.如何触发重排和重绘',
          link: '/guide/browser/4.如何触发重排和重绘',
        },
        {
          text: '5.如何避免重绘或者重排',
          link: '/guide/browser/5.如何避免重绘或者重排',
        },
        {
          text: '6.介绍下304过程',
          link: '/guide/browser/6.介绍下304过程',
        },
        {
          text: '7.浏览器的缓存机制 强制缓存 && 协商缓存',
          link: '/guide/browser/7.浏览器的缓存机制 强制缓存 && 协商缓存',
        },
        {
          text: '8.说下进程、线程和协程',
          link: '/guide/browser/8.说下进程、线程和协程',
        },
      ],
    },
    {
      text: 'CSS',
      children: [
        {
          text: '1.HTML5 新特性、语义化',
          link: '/guide/html&css/1.HTML5 新特性、语义化',
        },
        {
          text: '2.CSS 选择器及优先级',
          link: '/guide/html&css/2.CSS 选择器及优先级',
        },
        {
          text: '3.position 属性的值有哪些及其区别',
          link: '/guide/html&css/3.position 属性的值有哪些及其区别',
        },
        {
          text: '4.box-sizing属性',
          link: '/guide/html&css/4.box-sizing属性',
        },
        {
          text: '5.CSS 盒子模型',
          link: '/guide/html&css/5.CSS 盒子模型',
        },
        {
          text: '6.BFC（块级格式上下文）',
          link: '/guide/html&css/6.BFC（块级格式上下文）',
        },
        {
          text: '7.让一个元素水平垂直居中',
          link: '/guide/html&css/7.让一个元素水平垂直居中',
        },
        {
          text: '8.隐藏页面中某个元素的方法',
          link: '/guide/html&css/8.隐藏页面中某个元素的方法',
        },
        {
          text: '9.用CSS实现三角符号',
          link: '/guide/html&css/9.用CSS实现三角符号',
        },
        {
          text: '10.页面布局',
          link: '/guide/html&css/10.页面布局',
        },
        {
          text: '11.如何使用rem或viewport进行移动端适配',
          link: '/guide/html&css/11.如何使用rem或viewport进行移动端适配',
        },
        {
          text: '12.清除浮动的方式',
          link: '/guide/html&css/12.清除浮动的方式',
        },
      ],
    },
    {
      text: 'JavaScript',
      children: [
        {
          text: '内置类型',
          link: '/guide/js/内置类型',
        },
        {
          text: '手写函数',
          children: [
            {
              text: '格式化金额',
              link: '/guide/js/func/1.格式化金额',
            },
          ],
        },
      ],
    },
  ]
}
