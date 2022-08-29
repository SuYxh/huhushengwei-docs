module.exports = function getAlgorithmSidebar() {
  return [
    {
      text: '数据结构',
      children: [
        {
          text: '栈',
          link: '/algorithm/dataStructure/stack/1.栈'
        },
        {
          text: '队列',
          link: '/algorithm/dataStructure/queue/队列'
        },
        {
          text: '优先队列',
          link: '/algorithm/dataStructure/queue/优先队列'
        },
        {
          text: '单向链表',
          link: '/algorithm/dataStructure/linkList/单向链表'
        },
        {
          text: '双向链表',
          link: '/algorithm/dataStructure/linkList/双向链表'
        },
        {
          text: '树',
          link: '/algorithm/dataStructure/tree/树'
        },
        {
          text: '二叉树',
          link: '/algorithm/dataStructure/tree/二叉树'
        },
        {
          text: '二叉搜索树',
          link: '/algorithm/dataStructure/tree/二叉搜索树'
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
      text: '数组',
      children: [
        {
          text: '两数之和',
          link: '/algorithm/array/two-numbers-sum'
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