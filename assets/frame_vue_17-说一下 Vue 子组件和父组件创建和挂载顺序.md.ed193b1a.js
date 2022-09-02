import{o as e,c as t,b as r}from"./app.157864df.js";const l='{"title":"17-说一下 Vue 子组件和父组件创建和挂载顺序","description":"","frontmatter":{},"headers":[{"level":2,"title":"17-说一下 Vue 子组件和父组件创建和挂载顺序","slug":"_17-说一下-vue-子组件和父组件创建和挂载顺序"},{"level":3,"title":"思路分析","slug":"思路分析"},{"level":3,"title":"回答范例","slug":"回答范例"},{"level":3,"title":"知其所以然","slug":"知其所以然"}],"relativePath":"frame/vue/17-说一下 Vue 子组件和父组件创建和挂载顺序.md","lastUpdated":1662083353135}',o={},i=[r('<h2 id="_17-说一下-vue-子组件和父组件创建和挂载顺序">17-说一下 Vue 子组件和父组件创建和挂载顺序</h2><p>这题考查大家对创建过程的理解程度。</p><h3 id="思路分析">思路分析</h3><ol><li>给结论</li><li>阐述理由</li></ol><hr><h3 id="回答范例">回答范例</h3><ol><li>创建过程自上而下，挂载过程自下而上；即： <ul><li>parent created</li><li>child created</li><li>child mounted</li><li>parent mounted</li></ul></li><li>之所以会这样是因为Vue创建过程是一个递归过程，先创建父组件，有子组件就会创建子组件，因此创建时先有父组件再有子组件；子组件首次创建时会添加mounted钩子到队列，等到patch结束再执行它们，可见子组件的mounted钩子是先进入到队列中的，因此等到patch结束执行这些钩子时也先执行。</li></ol><hr><h3 id="知其所以然">知其所以然</h3><p>观察beforeCreated和created钩子的处理</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fcore%2Fblob%2FHEAD%2Fpackages%2Fruntime-core%2Fsrc%2FcomponentOptions.ts%23L554-L555" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/core/…</a></p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fcore%2Fblob%2FHEAD%2Fpackages%2Fruntime-core%2Fsrc%2FcomponentOptions.ts%23L741-L742" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/core/…</a></p><p>观察beforeMount和mounted钩子的处理</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fcore%2Fblob%2FHEAD%2Fpackages%2Fruntime-core%2Fsrc%2Frenderer.ts%23L1310-L1311" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/core/…</a></p><p>测试代码，test-v3.html</p>',15)];o.render=function(r,l,o,n,s,u){return e(),t("div",null,i)};export default o;export{l as __pageData};
