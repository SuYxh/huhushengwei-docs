## 你觉得vuex有什么缺点？

### 分析

相较于redux，vuex已经相当简便好用了。但模块的使用比较繁琐，对ts支持也不好。

------

### 体验

使用模块：用起来比较繁琐，使用模式也不统一，基本上得不到类型系统的任何支持

```js
const store = createStore({
  modules: {
    a: moduleA
  }
})
store.state.a // -> 要带上 moduleA 的key，内嵌模块的话会很长，不得不配合mapState使用
store.getters.c // -> moduleA里的getters，没有namespaced时又变成了全局的
store.getters['a/c'] // -> 有namespaced时要加path，使用模式又和state不一样
store.commit('d') // -> 没有namespaced时变成了全局的，能同时触发多个子模块中同名mutation
store.commit('a/d') // -> 有namespaced时要加path，配合mapMutations使用感觉也没简化
```

------

### 思路

- 先夸再贬
- 使用感受
- 解决方案

------

### 回答范例

- vuex利用响应式，使用起来已经相当方便快捷了。但是在使用过程中感觉模块化这一块做的过于复杂，用的时候容易出错，还要经常查看文档
- 比如：访问state时要带上模块key，内嵌模块的话会很长，不得不配合mapState使用，加不加namespaced区别也很大，getters，mutations，actions这些默认是全局，加上之后必须用字符串类型的path来匹配，使用模式不统一，容易出错；对ts的支持也不友好，在使用模块时没有代码提示。
- 之前Vue2项目中用过[vuex-module-decorators](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchampionswimmer%2Fvuex-module-decorators)的解决方案，虽然类型支持上有所改善，但又要学一套新东西，增加了学习成本。pinia出现之后使用体验好了很多，Vue3 + pinia会是更好的组合。

------

### 知其所以然

下面我们来看看vuex中`store.state.x.y`这种嵌套的路径是怎么搞出来的。

首先是子模块安装过程：父模块状态`parentState`上面设置了子模块名称`moduleName`，值为当前模块`state`对象。放在上面的例子中相当于：`store.state['x'] = moduleX.state`。此过程是递归的，那么`store.state.x.y`安装时就是：`store.state['x']['y'] = moduleY.state`。

```js
if (!isRoot && !hot) {
    // 获取父模块state
    const parentState = getNestedState(rootState, path.slice(0, -1))
    // 获取子模块名称
    const moduleName = path[path.length - 1]
    store._withCommit(() => {
        // 把子模块state设置到父模块上
        parentState[moduleName] = module.state
    })
}
```

这下大家明白了吧！

> 源码地址：[github1s.com/vuejs/vuex/…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fvuex%2Fblob%2FHEAD%2Fsrc%2Fstore-util.js%23L102-L115)

### 