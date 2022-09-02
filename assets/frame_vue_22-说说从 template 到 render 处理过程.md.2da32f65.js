import{o as e,c as l,b as t}from"./app.157864df.js";const r='{"title":"22-说说从 template 到 render 处理过程","description":"","frontmatter":{},"headers":[{"level":2,"title":"22-说说从 template 到 render 处理过程","slug":"_22-说说从-template-到-render-处理过程"},{"level":3,"title":"分析","slug":"分析"},{"level":3,"title":"思路","slug":"思路"},{"level":3,"title":"回答范例","slug":"回答范例"},{"level":3,"title":"知其所以然","slug":"知其所以然"},{"level":3,"title":"可能的追问","slug":"可能的追问"},{"level":2,"title":"","slug":""}],"relativePath":"frame/vue/22-说说从 template 到 render 处理过程.md","lastUpdated":1662083353135}',i={},p=[t('<h2 id="_22-说说从-template-到-render-处理过程">22-说说从 template 到 render 处理过程</h2><h3 id="分析">分析</h3><p>问我们template到render过程，其实是问vue<code>编译器</code>工作原理。</p><h3 id="思路">思路</h3><ol><li>引入vue编译器概念</li><li>说明编译器的必要性</li><li>阐述编译器工作流程</li></ol><h3 id="回答范例">回答范例</h3><ol><li>Vue中有个独特的编译器模块，称为“compiler”，它的主要作用是将用户编写的template编译为js中可执行的render函数。</li><li>之所以需要这个编译过程是为了便于前端程序员能高效的编写视图模板。相比而言，我们还是更愿意用HTML来编写视图，直观且高效。手写render函数不仅效率底下，而且失去了编译期的优化能力。</li><li>在Vue中编译器会先对template进行解析，这一步称为parse，结束之后会得到一个JS对象，我们成为抽象语法树AST，然后是对AST进行深加工的转换过程，这一步成为transform，最后将前面得到的AST生成为JS代码，也就是render函数。</li></ol><h3 id="知其所以然">知其所以然</h3><p>vue3编译过程窥探：</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fcore%2Fblob%2FHEAD%2Fpackages%2Fcompiler-core%2Fsrc%2Fcompile.ts%23L61-L62" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/core/…</a></p><p>测试，test-v3.html</p><h3 id="可能的追问">可能的追问</h3><ol><li>Vue中编译器何时执行？</li><li>react有没有编译器？</li></ol><h2 id=""></h2>',14)];i.render=function(t,r,i,a,o,d){return e(),l("div",null,p)};export default i;export{r as __pageData};
