const base = process.env.BASE || '/'
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar/index')

module.exports = {
  title: 'Huhushengwei',
  description: 'Life is short, Keep it simple.',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  base: base,
  themeConfig: {
    // 注释掉 repo 就不在展示 GitHub 
    // repo: 'SuYxh/huhushengwei-docs',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'master',

    algolia: {
      appId: 'PPGAVKEK5G',
      apiKey: '0e1577e38c8b10771d19d8fe606b73c9',
      indexName: 'huhushengwei-docs',
    },

    // nav
    nav,

    // sidebar
    sidebar,

    // page meta
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less',
      })
    },
  },
}
