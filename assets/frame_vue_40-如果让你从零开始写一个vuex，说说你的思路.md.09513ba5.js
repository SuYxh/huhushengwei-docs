import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const h='{"title":"\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avuex\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avuex\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF","slug":"\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avuex\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF"},{"level":3,"title":"\u601D\u8DEF\u5206\u6790","slug":"\u601D\u8DEF\u5206\u6790"},{"level":3,"title":"\u56DE\u7B54\u8303\u4F8B","slug":"\u56DE\u7B54\u8303\u4F8B"},{"level":3,"title":"\u5B9E\u8DF5","slug":"\u5B9E\u8DF5"},{"level":3,"title":"\u77E5\u5176\u6240\u4EE5\u7136","slug":"\u77E5\u5176\u6240\u4EE5\u7136"}],"relativePath":"frame/vue/40-\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avuex\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF.md","lastUpdated":1672831176992}',e={},o=t(`<h2 id="\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avuex\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF">\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avuex\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF</h2><h3 id="\u601D\u8DEF\u5206\u6790">\u601D\u8DEF\u5206\u6790</h3><p>\u8FD9\u4E2A\u9898\u76EE\u5F88\u6709\u96BE\u5EA6\uFF0C\u9996\u5148\u601D\u8003<code>vuex</code>\u89E3\u51B3\u7684\u95EE\u9898\uFF1A\u5B58\u50A8\u7528\u6237\u5168\u5C40\u72B6\u6001\u5E76\u63D0\u4F9B\u7BA1\u7406\u72B6\u6001API\u3002</p><ul><li><code>vuex</code>\u9700\u6C42\u5206\u6790</li><li>\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E9B\u9700\u6C42</li></ul><hr><h3 id="\u56DE\u7B54\u8303\u4F8B">\u56DE\u7B54\u8303\u4F8B</h3><ol><li>\u5B98\u65B9\u8BF4<code>vuex</code>\u662F\u4E00\u4E2A\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u548C\u5E93\uFF0C\u5E76\u786E\u4FDD\u8FD9\u4E9B\u72B6\u6001\u4EE5\u53EF\u9884\u671F\u7684\u65B9\u5F0F\u53D8\u66F4\u3002\u53EF\u89C1\u8981\u5B9E\u73B0\u4E00\u4E2A<code>vuex</code>\uFF1A <ul><li>\u8981\u5B9E\u73B0\u4E00\u4E2A<code>Store</code>\u5B58\u50A8\u5168\u5C40\u72B6\u6001</li><li>\u8981\u63D0\u4F9B\u4FEE\u6539\u72B6\u6001\u6240\u9700API\uFF1A<code>commit(type, payload)</code>, <code>dispatch(type, payload)</code></li></ul></li><li>\u5B9E\u73B0<code>Store</code>\u65F6\uFF0C\u53EF\u4EE5\u5B9A\u4E49Store\u7C7B\uFF0C\u6784\u9020\u51FD\u6570\u63A5\u6536\u9009\u9879options\uFF0C\u8BBE\u7F6E\u5C5E\u6027state\u5BF9\u5916\u66B4\u9732\u72B6\u6001\uFF0C\u63D0\u4F9Bcommit\u548Cdispatch\u4FEE\u6539\u5C5E\u6027state\u3002\u8FD9\u91CC\u9700\u8981\u8BBE\u7F6Estate\u4E3A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u540C\u65F6\u5C06Store\u5B9A\u4E49\u4E3A\u4E00\u4E2AVue\u63D2\u4EF6\u3002</li><li><code>commit(type, payload)</code>\u65B9\u6CD5\u4E2D\u53EF\u4EE5\u83B7\u53D6\u7528\u6237\u4F20\u5165<code>mutations</code>\u5E76\u6267\u884C\u5B83\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6309\u7528\u6237\u63D0\u4F9B\u7684\u65B9\u6CD5\u4FEE\u6539\u72B6\u6001\u3002 <code>dispatch(type, payload)</code>\u7C7B\u4F3C\uFF0C\u4F46\u9700\u8981\u6CE8\u610F\u5B83\u53EF\u80FD\u662F\u5F02\u6B65\u7684\uFF0C\u9700\u8981\u8FD4\u56DE\u4E00\u4E2APromise\u7ED9\u7528\u6237\u4EE5\u5904\u7406\u5F02\u6B65\u7ED3\u679C\u3002</li></ol><hr><h3 id="\u5B9E\u8DF5">\u5B9E\u8DF5</h3><p>Store\u7684\u5B9E\u73B0\uFF1A</p><div class="language-kotlin"><pre><code><span class="token keyword">class</span> Store <span class="token punctuation">{</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token punctuation">}</span>
    <span class="token function">commit</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>mutations<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\u590D\u5236\u4EE3\u7801
</code></pre></div><h3 id="\u77E5\u5176\u6240\u4EE5\u7136">\u77E5\u5176\u6240\u4EE5\u7136</h3><p>Vuex\u4E2DStore\u7684\u5B9E\u73B0\uFF1A</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fvuex%2Fblob%2FHEAD%2Fsrc%2Fstore.js%23L19-L20" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/vuex/\u2026</a></p>`,14),p=[o];function c(l,i,u,d,r,k){return a(),s("div",null,p)}var v=n(e,[["render",c]]);export{h as __pageData,v as default};
