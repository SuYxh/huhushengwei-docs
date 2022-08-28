const { getPath } = require('./utils')

module.exports = [
  { text: '基础', link: '/guide/', activeMatch: getPath('^/guide/') },
  { text: '框架', link: '/frame/', activeMatch: getPath('^/frame/') },
  { text: '工程化', link: '/workflow/', activeMatch: getPath('^/workflow/') },
  { text: '网络', link: '/network/', activeMatch: getPath('^/network/') },
  { text: '算法', link: '/algorithm/', activeMatch: getPath('^/algorithm/') },
  { text: '性能优化', link: '/performance/', activeMatch: getPath('^/performance/') },
  { text: '工具', link: '/devTool/', activeMatch: getPath('^/devTool/') },
  { text: '其他', link: '/other/', activeMatch: getPath('^/other/')  },
]
