import{o as t,c as e,b as r}from"./app.157864df.js";const d='{"title":"03-简述 Vue 的生命周期以及每个阶段做的事","description":"","frontmatter":{},"headers":[{"level":2,"title":"03-简述 Vue 的生命周期以及每个阶段做的事","slug":"_03-简述-vue-的生命周期以及每个阶段做的事"},{"level":3,"title":"思路","slug":"思路"},{"level":3,"title":"回答范例","slug":"回答范例"},{"level":3,"title":"可能的追问","slug":"可能的追问"},{"level":3,"title":"知其所以然","slug":"知其所以然"}],"relativePath":"frame/vue/03-简述 Vue 的生命周期以及每个阶段做的事.md","lastUpdated":1662083353135}',o={},n=[r('<h2 id="_03-简述-vue-的生命周期以及每个阶段做的事">03-简述 Vue 的生命周期以及每个阶段做的事</h2><p>必问题目，考查vue基础知识。</p><h3 id="思路">思路</h3><ol><li>给出概念</li><li>列举生命周期各阶段</li><li>阐述整体流程</li><li>结合实践</li><li>扩展：vue3变化</li></ol><hr><h3 id="回答范例">回答范例</h3><p>1.每个Vue组件实例被创建后都会经过一系列初始化步骤，比如，它需要数据观测，模板编译，挂载实例到dom上，以及数据变化时更新dom。这个过程中会运行叫做生命周期钩子的函数，以便用户在特定阶段有机会添加他们自己的代码。</p><p>2.Vue生命周期总共可以分为8个阶段：<strong>创建前后, 载入前后, 更新前后, 销毁前后</strong>，以及一些特殊场景的生命周期。vue3中新增了三个用于调试和服务端渲染场景。</p><hr><table><thead><tr><th>生命周期v2</th><th>生命周期v3</th><th>描述</th></tr></thead><tbody><tr><td>beforeCreate</td><td>beforeCreate</td><td>组件实例被创建之初</td></tr><tr><td>created</td><td>created</td><td>组件实例已经完全创建</td></tr><tr><td>beforeMount</td><td>beforeMount</td><td>组件挂载之前</td></tr><tr><td>mounted</td><td>mounted</td><td>组件挂载到实例上去之后</td></tr><tr><td>beforeUpdate</td><td>beforeUpdate</td><td>组件数据发生变化，更新之前</td></tr><tr><td>updated</td><td>updated</td><td>数据数据更新之后</td></tr><tr><td>beforeDestroy</td><td><strong>beforeUnmount</strong></td><td>组件实例销毁之前</td></tr><tr><td>destroyed</td><td><strong>unmounted</strong></td><td>组件实例销毁之后</td></tr></tbody></table><hr><table><thead><tr><th>生命周期v2</th><th>生命周期v3</th><th>描述</th></tr></thead><tbody><tr><td>activated</td><td>activated</td><td>keep-alive 缓存的组件激活时</td></tr><tr><td>deactivated</td><td>deactivated</td><td>keep-alive 缓存的组件停用时调用</td></tr><tr><td>errorCaptured</td><td>errorCaptured</td><td>捕获一个来自子孙组件的错误时被调用</td></tr><tr><td>-</td><td><strong>renderTracked</strong></td><td>调试钩子，响应式依赖被收集时调用</td></tr><tr><td>-</td><td><strong>renderTriggered</strong></td><td>调试钩子，响应式依赖被触发时调用</td></tr><tr><td>-</td><td><strong>serverPrefetch</strong></td><td>ssr only，组件实例在服务器上被渲染前调用</td></tr></tbody></table><hr><p>3.<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgitee.com%2F57code%2Fpicgo%2Fraw%2Fmaster%2Flifecycle.cec11dcc.png" target="_blank" rel="noopener noreferrer"><code>Vue</code>生命周期流程图</a>：</p><p><img src="https://qn.huat.xyz/mac/20220828183601.awebp" alt="Component lifecycle diagram"></p><hr><p>4.结合实践：</p><p><strong>beforeCreate</strong>：通常用于插件开发中执行一些初始化任务</p><p><strong>created</strong>：组件初始化完毕，可以访问各种数据，获取接口数据等</p><p><strong>mounted</strong>：dom已创建，可用于获取访问数据和dom元素；访问子组件等。</p><p><strong>beforeUpdate</strong>：此时<code>view</code>层还未更新，可用于获取更新前各种状态</p><p><strong>updated</strong>：完成<code>view</code>层的更新，更新后，所有状态已是最新</p><p><strong>beforeunmount</strong>：实例被销毁前调用，可用于一些定时器或订阅的取消</p><p><strong>unmounted</strong>：销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器</p><h3 id="可能的追问">可能的追问</h3><ol><li>setup和created谁先执行？</li><li>setup中为什么没有beforeCreate和created？</li></ol><hr><h3 id="知其所以然">知其所以然</h3><p>vue3中生命周期的派发时刻：</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fcore%2Fblob%2FHEAD%2Fpackages%2Fruntime-core%2Fsrc%2FcomponentOptions.ts%23L554-L555" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/core/…</a></p><p>vue2中声明周期的派发时刻：</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fvue%2Fblob%2FHEAD%2Fsrc%2Fcore%2Finstance%2Finit.js%23L55-L56" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/vue/b…</a></p>',32)];o.render=function(r,d,o,a,p,s){return t(),e("div",null,n)};export default o;export{d as __pageData};
