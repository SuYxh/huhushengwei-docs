import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const h='{"title":"42-\u600E\u4E48\u76D1\u542Cvuex\u6570\u636E\u7684\u53D8\u5316\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"42-\u600E\u4E48\u76D1\u542Cvuex\u6570\u636E\u7684\u53D8\u5316\uFF1F","slug":"_42-\u600E\u4E48\u76D1\u542Cvuex\u6570\u636E\u7684\u53D8\u5316\uFF1F"},{"level":3,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":3,"title":"\u56DE\u7B54\u8303\u4F8B","slug":"\u56DE\u7B54\u8303\u4F8B"},{"level":3,"title":"\u5B9E\u8DF5","slug":"\u5B9E\u8DF5"}],"relativePath":"frame/vue/42-\u600E\u4E48\u76D1\u542Cvuex\u6570\u636E\u7684\u53D8\u5316.md","lastUpdated":1672831176992}',p={},e=t(`<h2 id="_42-\u600E\u4E48\u76D1\u542Cvuex\u6570\u636E\u7684\u53D8\u5316\uFF1F">42-\u600E\u4E48\u76D1\u542Cvuex\u6570\u636E\u7684\u53D8\u5316\uFF1F</h2><h3 id="\u5206\u6790">\u5206\u6790</h3><p>vuex\u6570\u636E\u72B6\u6001\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u6240\u4EE5\u72B6\u6001\u53D8\u89C6\u56FE\u8DDF\u7740\u53D8\uFF0C\u4F46\u662F\u6709\u65F6\u8FD8\u662F\u9700\u8981\u77E5\u9053\u6570\u636E\u72B6\u6001\u53D8\u4E86\u4ECE\u800C\u505A\u4E00\u4E9B\u4E8B\u60C5\u3002</p><p>\u65E2\u7136\u72B6\u6001\u90FD\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u90A3\u81EA\u7136\u53EF\u4EE5<code>watch</code>\uFF0C\u53E6\u5916vuex\u4E5F\u63D0\u4F9B\u4E86\u8BA2\u9605\u7684API\uFF1A<code>store.subscribe()</code>\u3002</p><hr><h3 id="\u601D\u8DEF">\u601D\u8DEF</h3><ul><li>\u603B\u8FF0\u77E5\u9053\u7684\u65B9\u6CD5</li><li>\u5206\u522B\u9610\u8FF0\u7528\u6CD5</li><li>\u9009\u62E9\u548C\u573A\u666F</li></ul><hr><h3 id="\u56DE\u7B54\u8303\u4F8B">\u56DE\u7B54\u8303\u4F8B</h3><ul><li>\u6211\u77E5\u9053\u51E0\u79CD\u65B9\u6CD5\uFF1A <ul><li>\u53EF\u4EE5\u901A\u8FC7watch\u9009\u9879\u6216\u8005watch\u65B9\u6CD5\u76D1\u542C\u72B6\u6001</li><li>\u53EF\u4EE5\u4F7F\u7528vuex\u63D0\u4F9B\u7684API\uFF1Astore.subscribe()</li></ul></li><li>watch\u9009\u9879\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u76D1\u542C<code>$store.state.xx</code>\uFF1Bsubscribe\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u8C03\u7528store.subscribe(cb),\u56DE\u8C03\u51FD\u6570\u63A5\u6536mutation\u5BF9\u8C61\u548Cstate\u5BF9\u8C61\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8FDB\u4E00\u6B65\u5224\u65ADmutation.type\u662F\u5426\u662F\u671F\u5F85\u7684\u90A3\u4E2A\uFF0C\u4ECE\u800C\u8FDB\u4E00\u6B65\u505A\u540E\u7EED\u5904\u7406\u3002</li><li>watch\u65B9\u5F0F\u7B80\u5355\u597D\u7528\uFF0C\u4E14\u80FD\u83B7\u53D6\u53D8\u5316\u524D\u540E\u503C\uFF0C\u9996\u9009\uFF1Bsubscribe\u65B9\u6CD5\u4F1A\u88AB\u6240\u6709commit\u884C\u4E3A\u89E6\u53D1\uFF0C\u56E0\u6B64\u8FD8\u9700\u8981\u5224\u65ADmutation.type\uFF0C\u7528\u8D77\u6765\u7565\u7E41\u7410\uFF0C\u4E00\u822C\u7528\u4E8Evuex\u63D2\u4EF6\u4E2D\u3002</li></ul><h3 id="\u5B9E\u8DF5">\u5B9E\u8DF5</h3><p>watch\u65B9\u5F0F</p><div class="language-js"><pre><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&#39;$store.state.counter&#39;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;counter change!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>subscribe\u65B9\u5F0F\uFF1A</p><div class="language-js"><pre><code>  store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;counter change in subscribe()!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,15),o=[e];function c(u,l,i,r,k,_){return a(),s("div",null,o)}var v=n(p,[["render",c]]);export{h as __pageData,v as default};
