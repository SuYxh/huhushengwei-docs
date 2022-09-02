import{o as n,c as s,b as a}from"./app.157864df.js";const t='{"title":"你有使用过vuex的module吗？","description":"","frontmatter":{},"headers":[{"level":2,"title":"你有使用过vuex的module吗？","slug":"你有使用过vuex的module吗？"},{"level":3,"title":"体验","slug":"体验"},{"level":3,"title":"思路","slug":"思路"},{"level":3,"title":"范例","slug":"范例"},{"level":3,"title":"可能的追问","slug":"可能的追问"}],"relativePath":"frame/vue/27-你有使用过vuex的module吗.md","lastUpdated":1662083353135}',o={},p=[a('<h2 id="你有使用过vuex的module吗？">你有使用过vuex的module吗？</h2><p>这是基本应用能力考察，稍微上点规模的项目都要拆分vuex模块便于维护。 要能说出使用方法和细节。</p><h3 id="体验">体验</h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fvuex.vuejs.org%2Fzh%2Fguide%2Fmodules.html" target="_blank" rel="noopener noreferrer">vuex.vuejs.org/zh/guide/mo…</a></p><div class="language-js"><pre><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  mutations<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  actions<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  getters<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> moduleB <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  mutations<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  actions<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  modules<span class="token operator">:</span> <span class="token punctuation">{</span>\n    a<span class="token operator">:</span> moduleA<span class="token punctuation">,</span>\n    b<span class="token operator">:</span> moduleB\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nstore<span class="token punctuation">.</span>state<span class="token punctuation">.</span>a <span class="token comment">// -&gt; moduleA 的状态</span>\nstore<span class="token punctuation">.</span>state<span class="token punctuation">.</span>b <span class="token comment">// -&gt; moduleB 的状态</span>\nstore<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>c <span class="token comment">// -&gt; moduleA里的getters</span>\nstore<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; 能同时触发子模块中同名mutation</span>\nstore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; 能同时触发子模块中同名action</span>\n复制代码\n</code></pre></div><h3 id="思路">思路</h3><ol><li>概念和必要性</li><li>怎么拆</li><li>使用细节</li><li>优缺点</li></ol><h3 id="范例">范例</h3><ol><li>用过module，项目规模变大之后，单独一个store对象会过于庞大臃肿，通过模块方式可以拆分开来便于维护</li><li>可以按之前规则单独编写子模块代码，然后在主文件中通过<code>modules</code>选项组织起来：<code>createStore({modules:{...}})</code></li><li>不过使用时要注意访问子模块状态时需要加上注册时模块名：<code>store.state.a.xxx</code>，但同时<code>getters</code>、<code>mutations</code>和<code>actions</code>又在全局空间中，使用方式和之前一样。如果要做到完全拆分，需要在子模块加上<code>namespace</code>选项，此时再访问它们就要加上命名空间前缀。</li><li>很显然，模块的方式可以拆分代码，但是缺点也很明显，就是使用起来比较繁琐复杂，容易出错。而且类型系统支持很差，不能给我们带来帮助。pinia显然在这方面有了很大改进，是时候切换过去了。</li></ol><h3 id="可能的追问">可能的追问</h3><ol><li>用过pinia吗？都做了哪些改善？</li></ol>',11)];o.render=function(a,t,o,e,c,l){return n(),s("div",null,p)};export default o;export{t as __pageData};
