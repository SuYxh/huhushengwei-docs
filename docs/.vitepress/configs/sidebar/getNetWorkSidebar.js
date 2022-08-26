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
        },
        {
          text: '2.TCP 四次挥手',
          link: '/network/tcp/2.TCP 四次挥手'
        },
        {
          text: '3.TCP:IP-如何保证数据包传输的有序可靠？',
          link: '/network/tcp/3.TCP:IP-如何保证数据包传输的有序可靠？'
        },
        {
          text: '4.TCP和UDP的区别',
          link: '/network/tcp/4.TCP和UDP的区别'
        }
      ]
    },
  ]
}