## 页面刷新后vuex的state数据丢失怎么解决？

### 分析

这是一道应用题目，很容易想到使用`localStorage`或数据库存储并还原状态。

但是如何优雅编写代码还是能体现认知水平。

------

### 体验

可以从`localStorage`中获取作为状态初始值：

```js
const store = createStore({
  state () {
    return {
      count: localStorage.getItem('count')
    }
  }
})
```

业务代码中，提交修改状态同时保存最新值：虽说实现了，但是每次还要手动刷新localStorage不太优雅

```js
store.commit('increment')
localStorage.setItem('count', store.state.count)
```

------

### 思路

- 问题描述
- 解决方法
- 谈个人理解
- 三方库原理探讨

------

### 回答范例

- vuex只是在内存保存状态，刷新之后就会丢失，如果要持久化就要存起来。
- localStorage就很合适，提交mutation的时候同时存入localStorage，store中把值取出作为state的初始值即可。
- 这里有两个问题，不是所有状态都需要持久化；如果需要保存的状态很多，编写的代码就不够优雅，每个提交的地方都要单独做保存处理。这里就可以利用vuex提供的subscribe方法做一个统一的处理。甚至可以封装一个vuex插件以便复用。
- 类似的插件有vuex-persist、vuex-persistedstate，内部的实现就是通过订阅mutation变化做统一处理，通过插件的选项控制哪些需要持久化

------

### 知其所以然

可以看一下vuex-persist内部确实是利用subscribe实现的

[github.com/championswi…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchampionswimmer%2Fvuex-persist%2Fblob%2Fmaster%2Fsrc%2Findex.ts%23L277)