## Vue-router 除了 router-link 怎么实现跳转

### 分析

vue-router导航有两种方式：`声明式导航`和`编程方式导航`

------

### 体验

声明式导航

```html
<router-link to="/about">Go to About</router-link>
```

编程导航

```js
// literal string path
router.push('/users/eduardo')

// object with path
router.push({ path: '/users/eduardo' })

// named route with params to let the router build the url
router.push({ name: 'user', params: { username: 'eduardo' } })
```

------

### 思路

- 两种方式
- 分别阐述使用方式
- 区别和选择
- 原理说明

------

### 回答范例

- vue-router导航有两种方式：`声明式导航`和`编程方式导航`
- 声明式导航方式使用`router-link`组件，添加to属性导航；编程方式导航更加灵活，可传递调用router.push()，并传递path字符串或者RouteLocationRaw对象，指定path、name、params等信息
- 如果页面中简单表示跳转链接，使用router-link最快捷，会渲染一个a标签；如果页面是个复杂的内容，比如商品信息，可以添加点击事件，使用编程式导航
- 实际上内部两者调用的导航函数是一样的

------

### 知其所以然

[github1s.com/vuejs/route…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Frouter%2Fblob%2FHEAD%2Fsrc%2FRouterLink.ts%23L240-L241)

routerlink点击跳转，调用的是navigate方法

![image-20220626173129790](https://qn.huat.xyz/mac/20220829003756.awebp)

navigate内部依然调用的push

![image-20220626173217861](https://qn.huat.xyz/mac/20220829003801.awebp)

