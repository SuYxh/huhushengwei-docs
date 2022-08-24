module.exports = function getGuideSidebar() {
  return [
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