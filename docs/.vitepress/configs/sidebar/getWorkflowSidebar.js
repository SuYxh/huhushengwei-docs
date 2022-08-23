module.exports = function getWorkflowSidebar() {
  return [
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
          text: '01-你对webpack的理解',
          link: '/workflow/webpack/01-你对webpack的理解'
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