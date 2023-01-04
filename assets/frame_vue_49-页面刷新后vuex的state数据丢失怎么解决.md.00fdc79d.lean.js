import{_ as s,e as n,o as t,Q as a}from"./plugin-vue_export-helper.8dc630d2.js";const h='{"title":"\u9875\u9762\u5237\u65B0\u540Evuex\u7684state\u6570\u636E\u4E22\u5931\u600E\u4E48\u89E3\u51B3\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9875\u9762\u5237\u65B0\u540Evuex\u7684state\u6570\u636E\u4E22\u5931\u600E\u4E48\u89E3\u51B3\uFF1F","slug":"\u9875\u9762\u5237\u65B0\u540Evuex\u7684state\u6570\u636E\u4E22\u5931\u600E\u4E48\u89E3\u51B3\uFF1F"},{"level":3,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":3,"title":"\u4F53\u9A8C","slug":"\u4F53\u9A8C"},{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":3,"title":"\u56DE\u7B54\u8303\u4F8B","slug":"\u56DE\u7B54\u8303\u4F8B"},{"level":3,"title":"\u77E5\u5176\u6240\u4EE5\u7136","slug":"\u77E5\u5176\u6240\u4EE5\u7136"}],"relativePath":"frame/vue/49-\u9875\u9762\u5237\u65B0\u540Evuex\u7684state\u6570\u636E\u4E22\u5931\u600E\u4E48\u89E3\u51B3.md","lastUpdated":1672831176992}',e={},o=a(`__VP_STATIC_START__<h2 id="\u9875\u9762\u5237\u65B0\u540Evuex\u7684state\u6570\u636E\u4E22\u5931\u600E\u4E48\u89E3\u51B3\uFF1F">\u9875\u9762\u5237\u65B0\u540Evuex\u7684state\u6570\u636E\u4E22\u5931\u600E\u4E48\u89E3\u51B3\uFF1F</h2><h3 id="\u5206\u6790">\u5206\u6790</h3><p>\u8FD9\u662F\u4E00\u9053\u5E94\u7528\u9898\u76EE\uFF0C\u5F88\u5BB9\u6613\u60F3\u5230\u4F7F\u7528<code>localStorage</code>\u6216\u6570\u636E\u5E93\u5B58\u50A8\u5E76\u8FD8\u539F\u72B6\u6001\u3002</p><p>\u4F46\u662F\u5982\u4F55\u4F18\u96C5\u7F16\u5199\u4EE3\u7801\u8FD8\u662F\u80FD\u4F53\u73B0\u8BA4\u77E5\u6C34\u5E73\u3002</p><hr><h3 id="\u4F53\u9A8C">\u4F53\u9A8C</h3><p>\u53EF\u4EE5\u4ECE<code>localStorage</code>\u4E2D\u83B7\u53D6\u4F5C\u4E3A\u72B6\u6001\u521D\u59CB\u503C\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">state</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E1A\u52A1\u4EE3\u7801\u4E2D\uFF0C\u63D0\u4EA4\u4FEE\u6539\u72B6\u6001\u540C\u65F6\u4FDD\u5B58\u6700\u65B0\u503C\uFF1A\u867D\u8BF4\u5B9E\u73B0\u4E86\uFF0C\u4F46\u662F\u6BCF\u6B21\u8FD8\u8981\u624B\u52A8\u5237\u65B0localStorage\u4E0D\u592A\u4F18\u96C5</p><div class="language-js"><pre><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
</code></pre></div><hr><h3 id="\u601D\u8DEF">\u601D\u8DEF</h3><ul><li>\u95EE\u9898\u63CF\u8FF0</li><li>\u89E3\u51B3\u65B9\u6CD5</li><li>\u8C08\u4E2A\u4EBA\u7406\u89E3</li><li>\u4E09\u65B9\u5E93\u539F\u7406\u63A2\u8BA8</li></ul><hr><h3 id="\u56DE\u7B54\u8303\u4F8B">\u56DE\u7B54\u8303\u4F8B</h3><ul><li>vuex\u53EA\u662F\u5728\u5185\u5B58\u4FDD\u5B58\u72B6\u6001\uFF0C\u5237\u65B0\u4E4B\u540E\u5C31\u4F1A\u4E22\u5931\uFF0C\u5982\u679C\u8981\u6301\u4E45\u5316\u5C31\u8981\u5B58\u8D77\u6765\u3002</li><li>localStorage\u5C31\u5F88\u5408\u9002\uFF0C\u63D0\u4EA4mutation\u7684\u65F6\u5019\u540C\u65F6\u5B58\u5165localStorage\uFF0Cstore\u4E2D\u628A\u503C\u53D6\u51FA\u4F5C\u4E3Astate\u7684\u521D\u59CB\u503C\u5373\u53EF\u3002</li><li>\u8FD9\u91CC\u6709\u4E24\u4E2A\u95EE\u9898\uFF0C\u4E0D\u662F\u6240\u6709\u72B6\u6001\u90FD\u9700\u8981\u6301\u4E45\u5316\uFF1B\u5982\u679C\u9700\u8981\u4FDD\u5B58\u7684\u72B6\u6001\u5F88\u591A\uFF0C\u7F16\u5199\u7684\u4EE3\u7801\u5C31\u4E0D\u591F\u4F18\u96C5\uFF0C\u6BCF\u4E2A\u63D0\u4EA4\u7684\u5730\u65B9\u90FD\u8981\u5355\u72EC\u505A\u4FDD\u5B58\u5904\u7406\u3002\u8FD9\u91CC\u5C31\u53EF\u4EE5\u5229\u7528vuex\u63D0\u4F9B\u7684subscribe\u65B9\u6CD5\u505A\u4E00\u4E2A\u7EDF\u4E00\u7684\u5904\u7406\u3002\u751A\u81F3\u53EF\u4EE5\u5C01\u88C5\u4E00\u4E2Avuex\u63D2\u4EF6\u4EE5\u4FBF\u590D\u7528\u3002</li><li>\u7C7B\u4F3C\u7684\u63D2\u4EF6\u6709vuex-persist\u3001vuex-persistedstate\uFF0C\u5185\u90E8\u7684\u5B9E\u73B0\u5C31\u662F\u901A\u8FC7\u8BA2\u9605mutation\u53D8\u5316\u505A\u7EDF\u4E00\u5904\u7406\uFF0C\u901A\u8FC7\u63D2\u4EF6\u7684\u9009\u9879\u63A7\u5236\u54EA\u4E9B\u9700\u8981\u6301\u4E45\u5316</li></ul><hr><h3 id="\u77E5\u5176\u6240\u4EE5\u7136">\u77E5\u5176\u6240\u4EE5\u7136</h3><p>\u53EF\u4EE5\u770B\u4E00\u4E0Bvuex-persist\u5185\u90E8\u786E\u5B9E\u662F\u5229\u7528subscribe\u5B9E\u73B0\u7684</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchampionswimmer%2Fvuex-persist%2Fblob%2Fmaster%2Fsrc%2Findex.ts%23L277" target="_blank" rel="noopener noreferrer">github.com/championswi\u2026</a></p>__VP_STATIC_END__`,20),p=[o];function c(l,i,u,r,_,k){return t(),n("div",null,p)}var v=s(e,[["render",c]]);export{h as __pageData,v as default};
