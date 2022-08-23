# 01-Vue组件之间通信方式有哪些

vue是组件化开发框架，所以对于vue应用来说组件间的数据通信非常重要。 此题主要考查大家vue基本功，对于vue基础api运用熟练度。 另外一些边界知识如provide/inject/$attrs则提现了面试者的知识广度。



组件传参的各种方式

![img](https://qn.huat.xyz/mac/20220823141438.awebp)



### 思路分析：

1. 总述知道的所有方式
2. 按组件关系阐述使用场景

------

### 回答范例：

1. 组件通信常用方式有以下8种：

- props
- $emit/~~$on~~
- ~~$children~~/$parent
- $attrs/~~$listeners~~
- ref
- $root
- eventbus
- vuex



> 注意vue3中废弃的几个API
>
> [v3-migration.vuejs.org/breaking-ch…](https://link.juejin.cn/?target=https%3A%2F%2Fv3-migration.vuejs.org%2Fbreaking-changes%2Fchildren.html)
>
> [v3-migration.vuejs.org/breaking-ch…](https://link.juejin.cn/?target=https%3A%2F%2Fv3-migration.vuejs.org%2Fbreaking-changes%2Flisteners-removed.html)
>
> [v3-migration.vuejs.org/breaking-ch…](https://link.juejin.cn/?target=https%3A%2F%2Fv3-migration.vuejs.org%2Fbreaking-changes%2Fevents-api.html%23overview)