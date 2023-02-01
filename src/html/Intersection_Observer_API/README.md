## Intersection_Observer_API
一般一个页面只有一个观察器， 可观察多个元素


### 使用方式

1、初始化观察器

```js
// 配置项更具自己需求进行配置
observer = new IntersectionObserver(callback, {
  root: root.value,
  rootMargin: '0px 0px 200px 0px', // 监视区向下拓展200px
})
```

2、添加观察目标

```js
// 可以循环添加多个目标
observer.value.observe(dom)
```

3、配置回调函数

```js
function handlerObserve(entries) {
  entries.forEach(({ isIntersecting, target }) => {
    // 观察的目标
    console.log('target', target)
    // 观察的目标是否进入可视区域
    console.log('isIntersecting', isIntersecting)
  })
}
```

### demo
参考当前的 `LazyImagesPro.vue` 文件


### 参考

https://juejin.cn/post/7067002674863931422