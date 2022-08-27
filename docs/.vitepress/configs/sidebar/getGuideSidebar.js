module.exports = function getGuideSidebar() {
  return [
    {
      text: '浏览器',
      children: [
        {
          text: '1.Cookie、sessionStorage、localStorage 的区别',
          link: '/guide/browser/1.Cookie、sessionStorage、localStorage 的区别'
        },
        {
          text: '2.从输入URL到页面加载的全过程',
          link: '/guide/browser/2.从输入URL到页面加载的全过程'
        },
        {
          text: '3.浏览器重绘与重排的区别',
          link: '/guide/browser/3.浏览器重绘与重排的区别'
        },
        {
          text: '4.如何触发重排和重绘',
          link: '/guide/browser/4.如何触发重排和重绘'
        },
        {
          text: '5.如何避免重绘或者重排',
          link: '/guide/browser/5.如何避免重绘或者重排'
        },
        {
          text: '6.介绍下304过程',
          link: '/guide/browser/6.介绍下304过程'
        },
        {
          text: '7.浏览器的缓存机制 强制缓存 && 协商缓存',
          link: '/guide/browser/7.浏览器的缓存机制 强制缓存 && 协商缓存'
        },
        {
          text: '8.说下进程、线程和协程',
          link: '/guide/browser/8.说下进程、线程和协程'
        }
      ]
    },
    {
      text: 'CSS',
      children: [
        {
          text: '如何实现居中',
          link: '/guide/css/如何实现居中'
        }
      ]
    },
    {
      text: 'JavaScript',
      children: [
        {
          text: '内置类型',
          link: '/guide/js/内置类型'
        },
        {
          text: '手写函数',
          children: [
            {
              text: '格式化金额',
              link: '/guide/js/func/1.格式化金额'
            },
          ]
        }
      ]
    },
  ]
}