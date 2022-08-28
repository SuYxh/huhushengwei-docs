module.exports = function getWorkflowSidebar() {
  return [
    {
      text: 'Babel',
      children: [
        {
          text: '1.简单描述一下 Babel 的编译过程',
          link: '/workflow/babel/1.简单描述一下 Babel 的编译过程'
        }
      ]
    },
    {
      text: 'Vite',
      children: [
        {
          text: '01-你对vite的理解',
          link: '/workflow/vite/01-你对vite的理解'
        }
      ]
    },
    {
      text: 'webpack',
      children: [
        {
          text: 'webpack优化',
          link: '/workflow/webpack/1.webpack 做过哪些优化，开发效率方面、打包策略方面等等'
        }
      ]
    },
    {
      text: '部署',
      children: [
        {
          text: '部署方式',
          link: '/workflow/deploy/部署'
        }
      ]
    },
  ]
}