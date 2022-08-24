module.exports = function getAlgorithmSidebar() {
  return [
    {
      text: '数据结构',
      children: [
        {
          text: '栈',
          link: '/algorithm/dataStructure/stack/1.栈'
        }
      ]
    },
    {
      text: '栈',
      children: [
        {
          text: '用两个栈实现一个队列',
          link: '/algorithm/stack/用两个栈实现一个队列'
        }
      ]
    },
    {
      text: '链表',
      children: [
        {
          text: 'JS反转单向链表',
          link: '/algorithm/linkList/JS反转单向链表'
        }
      ]
    },
  ]
}