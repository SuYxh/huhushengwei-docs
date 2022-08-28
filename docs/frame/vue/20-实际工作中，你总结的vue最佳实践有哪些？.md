## 20-实际工作中，你总结的vue最佳实践有哪些？

看到这样的题目，可以用以下图片来回答：

![img](https://qn.huat.xyz/mac/20220828184838.awebp)

------

### 思路

查看vue官方文档：

风格指南：[vuejs.org/style-guide…](https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fstyle-guide%2F)

性能：[vuejs.org/guide/best-…](https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fguide%2Fbest-practices%2Fperformance.html%23overview)

安全：[vuejs.org/guide/best-…](https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fguide%2Fbest-practices%2Fsecurity.html)

访问性：[vuejs.org/guide/best-…](https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fguide%2Fbest-practices%2Faccessibility.html)

发布：[vuejs.org/guide/best-…](https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fguide%2Fbest-practices%2Fproduction-deployment.html)

------

### 回答范例

我从编码风格、性能、安全等方面说几条：

1. 编码风格方面：
   - 命名组件时使用“多词”风格避免和HTML元素冲突
   - 使用“细节化”方式定义属性而不是只有一个属性名
   - 属性名声明时使用“驼峰命名”，模板或jsx中使用“肉串命名”
   - 使用v-for时务必加上key，且不要跟v-if写在一起
2. 性能方面：
   - 路由懒加载减少应用尺寸
   - 利用SSR减少首屏加载时间
   - 利用v-once渲染那些不需要更新的内容
   - 一些长列表可以利用虚拟滚动技术避免内存过度占用
   - 对于深层嵌套对象的大数组可以使用shallowRef或shallowReactive降低开销
   - 避免不必要的组件抽象

------

1. 安全：
   - 不使用不可信模板，例如使用用户输入拼接模板：`template: <div> + userProvidedString + </div>`
   - 小心使用v-html，:url，:style等，避免html、url、样式等注入
2. 等等......

------

## 