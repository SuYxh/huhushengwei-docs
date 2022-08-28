## Composition API 与 Options API 有什么不同

### 分析

Vue3最重要更新之一就是Composition API，它具有一些列优点，其中不少是针对Options API暴露的一些问题量身打造。是Vue3推荐的写法，因此掌握好Composition API应用对掌握好Vue3至关重要。

![image-20220629182639250](https://qn.huat.xyz/mac/20220829004525.awebp)

[vuejs.org/guide/extra…](https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fguide%2Fextras%2Fcomposition-api-faq.html)

------

### 体验

Composition API能更好的组织代码

![image-20220629182815578](https://qn.huat.xyz/mac/20220829004537.png)![image-20220629183203082](https://qn.huat.xyz/mac/20220829004541.awebp)

例如上面代码，可以提取为useCount()，用于组合、复用

![image-20220629184919471](https://qn.huat.xyz/mac/20220829004546.awebp)![image-20220629184919471](https://qn.huat.xyz/mac/20220829004551.awebp)

------

### 思路

- 总述不同点
- composition api动机
- 两者选择

------

### 回答范例

- `Composition API`是一组API，包括：Reactivity API、生命周期钩子、依赖注入，使用户可以通过导入函数方式编写vue组件。而`Options API`则通过声明组件选项的对象形式编写组件。
- `Composition API`最主要作用是能够简洁、高效复用逻辑。解决了过去`Options API`中`mixins`的各种缺点；另外`Composition API`具有更加敏捷的代码组织能力，很多用户喜欢`Options API`，认为所有东西都有固定位置的选项放置代码，但是单个组件增长过大之后这反而成为限制，一个逻辑关注点分散在组件各处，形成代码碎片，维护时需要反复横跳，`Composition API`则可以将它们有效组织在一起。最后`Composition API`拥有更好的类型推断，对ts支持更友好，`Options API`在设计之初并未考虑类型推断因素，虽然官方为此做了很多复杂的类型体操，确保用户可以在使用`Options API`时获得类型推断，然而还是没办法用在mixins和provide/inject上。
- Vue3首推`Composition API`，但是这会让我们在代码组织上多花点心思，因此在选择上，如果我们项目属于中低复杂度的场景，`Options API`仍是一个好选择。对于那些大型，高扩展，强维护的项目上，`Composition API`会获得更大收益。

------

### 可能的追问

- `Composition API`能否和`Options API`一起使用？