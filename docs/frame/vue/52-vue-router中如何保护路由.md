## vue-router中如何保护路由？

### 分析

路由保护在应用开发过程中非常重要，几乎每个应用都要做各种路由权限管理，因此相当考察使用者基本功。

------

### 体验

全局守卫：

```js
const router = createRouter({ ... })

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  return false
})
```

路由独享守卫：

```js
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  },
]
```

组件内的守卫：

```js
const UserDetails = {
  template: `...`,
  beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
  },
  beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
  },
}
```

------

### 思路

- 路由守卫的概念
- 路由守卫的使用
- 路由守卫的原理

------

- vue-router中保护路由的方法叫做路由守卫，主要用来通过跳转或取消的方式守卫导航。
- 路由守卫有三个级别：全局，路由独享，组件级。影响范围由大到小，例如全局的router.beforeEach()，可以注册一个全局前置守卫，每次路由导航都会经过这个守卫，因此在其内部可以加入控制逻辑决定用户是否可以导航到目标路由；在路由注册的时候可以加入单路由独享的守卫，例如beforeEnter，守卫只在进入路由时触发，因此只会影响这个路由，控制更精确；我们还可以为路由组件添加守卫配置，例如beforeRouteEnter，会在渲染该组件的对应路由被验证前调用，控制的范围更精确了。
- 用户的任何导航行为都会走navigate方法，内部有个guards队列按顺序执行用户注册的守卫钩子函数，如果没有通过验证逻辑则会取消原有的导航。

------

### 知其所以然

runGuardQueue(guards)链式的执行用户在各级别注册的守卫钩子函数，通过则继续下一个级别的守卫，不通过进入catch流程取消原本导航。

![image-20220630193341500](https://qn.huat.xyz/mac/20220829004645.awebp)

[github1s.com/vuejs/route…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Frouter%2Fblob%2FHEAD%2Fpackages%2Frouter%2Fsrc%2Frouter.ts%23L808-L809)