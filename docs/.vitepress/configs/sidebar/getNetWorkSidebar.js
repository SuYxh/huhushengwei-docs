module.exports = function getNetWorkSidebar() {
  return [
    {
      text: 'HTTP',
      children: [
        {
          text: '1.HTTP 和 HTTPS',
          link: '/network/http/1.HTTP 和 HTTPS'
        }
      ]
    },
    {
      text: 'TCP',
      children: [
        {
          text: '1.TCP三次握手.md',
          link: '/network/tcp/1.TCP三次握手'
        }
      ]
    },
  ]
}