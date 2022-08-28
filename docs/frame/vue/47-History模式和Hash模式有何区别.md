## History模式和Hash模式有何区别？

### 分析

vue-router有3个模式，其中两个更为常用，那便是history和hash。

两者差别主要在显示形式和部署上。

------

### 体验

vue-router4.x中设置模式已经变化：

```ts
const router = createRouter({
  history: createWebHashHistory(), // hash模式
  history: createWebHistory(),     // history模式
})
复制代码
```

用起来一模一样

```html
<router-link to="/about">Go to About</router-link>
复制代码
```

区别只在url形式

```js
// hash
// 浏览器里的形态：http://xx.com/#/about
// history
// 浏览器里的形态：http://xx.com/about
复制代码
```

### 思路

- 区别
- 详细阐述
- 实现

------

### 回答范例

- vue-router有3个模式，其中history和hash更为常用。两者差别主要在显示形式、seo和部署上。
- hash模式在地址栏显示的时候是已哈希的形式：#/xxx，这种方式使用和部署简单，但是不会被搜索引擎处理，seo有问题；history模式则建议用在大部分web项目上，但是它要求应用在部署时做特殊配置，服务器需要做回退处理，否则会出现刷新页面404的问题。
- 底层实现上其实hash是一种特殊的history实现。

------

### 知其所以然

hash是一种特殊的history实现：

[github1s.com/vuejs/route…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Frouter%2Fblob%2FHEAD%2Fsrc%2Fhistory%2Fhash.ts%23L31-L32)