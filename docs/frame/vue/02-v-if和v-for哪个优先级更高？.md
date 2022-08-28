## 02-v-if和v-for哪个优先级更高？

### 分析：

此题考查常识，文档中曾有详细说明[v2](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fstyle-guide%2F%23%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%BF%85%E8%A6%81)|[v3](https://link.juejin.cn/?target=https%3A%2F%2Fstaging.vuejs.org%2Fstyle-guide%2Frules-essential.html%23avoid-v-if-with-v-for)；也是一个很好的实践题目，项目中经常会遇到，能够看出面试者api熟悉程度和应用能力。

------

### 思路分析：

1. 先给出结论
2. 为什么是这样的，说出细节
3. 哪些场景可能导致我们这样做，该怎么处理
4. 总结，拔高

------

### 回答范例：

1. 实践中**不应该把v-for和v-if放一起**
2. 在**vue2中**，**v-for的优先级是高于v-if**，把它们放在一起，输出的渲染函数中可以看出会先执行循环再判断条件，哪怕我们只渲染列表中一小部分元素，也得在每次重渲染的时候遍历整个列表，这会比较浪费；另外需要注意的是在**vue3中则完全相反，v-if的优先级高于v-for**，所以v-if执行时，它调用的变量还不存在，就会导致异常
3. 通常有两种情况下导致我们这样做：
   - 为了**过滤列表中的项目** (比如 `v-for="user in users" v-if="user.isActive"`)。此时定义一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表即可（比如`users.filter(u=>u.isActive)`）。
   - 为了**避免渲染本应该被隐藏的列表** (比如 `v-for="user in users" v-if="shouldShowUsers"`)。此时把 `v-if` 移动至容器元素上 (比如 `ul`、`ol`)或者外面包一层`template`即可。
4. 文档中明确指出**永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上**，显然这是一个重要的注意事项。
5. 源码里面关于代码生成的部分，能够清晰的看到是先处理v-if还是v-for，顺序上vue2和vue3正好相反，因此产生了一些症状的不同，但是不管怎样都是不能把它们写在一起的。

------

### 知其所以然：

做个测试，[test.html](https://link.juejin.cn/?target=.%2Ftest.html) 两者同级时，渲染函数如下：

```js
ƒ anonymous() {
with(this){return _c('div',{attrs:{"id":"app"}},_l((items),function(item){return (item.isActive)?_c('div',{key:item.id},[_v("\n      "+_s(item.name)+"\n    ")]):_e()}),0)}
}
```

------

做个测试，test-v3.html

![image-20220210104854185](https://qn.huat.xyz/mac/20220828183314.awebp)

------

源码中找答案

v2：[github1s.com/vuejs/vue/b…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fvue%2Fblob%2FHEAD%2Fsrc%2Fcompiler%2Fcodegen%2Findex.js%23L65-L66)

v3：[github1s.com/vuejs/core/…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fcore%2Fblob%2FHEAD%2Fpackages%2Fcompiler-core%2Fsrc%2Fcodegen.ts%23L586-L587)