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
      text: '排序',
      children: [
        {
          text: '1.冒泡排序',
          link: '/algorithm/search/1.冒泡排序'
        },
        {
          text: '2.二分查找',
          link: '/algorithm/search/2.二分查找'
        },
        {
          text: '3.插入排序',
          link: '/algorithm/search/3.插入排序'
        },
        {
          text: '4.快速排序',
          link: '/algorithm/search/4.快速排序'
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