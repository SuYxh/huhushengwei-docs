import{_ as n,e as s,o as a,Q as p}from"./plugin-vue_export-helper.8dc630d2.js";const g='{"title":"06-\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u6539\u53D8\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u4E48\uFF0C\u8BF4\u660E\u539F\u56E0","description":"","frontmatter":{},"headers":[{"level":2,"title":"06-\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u6539\u53D8\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u4E48\uFF0C\u8BF4\u660E\u539F\u56E0","slug":"_06-\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u6539\u53D8\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u4E48\uFF0C\u8BF4\u660E\u539F\u56E0"},{"level":3,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":3,"title":"\u56DE\u7B54\u8303\u4F8B","slug":"\u56DE\u7B54\u8303\u4F8B"},{"level":2,"title":"","slug":""}],"relativePath":"frame/vue/06-\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u6539\u53D8\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u4E48\uFF0C\u8BF4\u660E\u539F\u56E0.md","lastUpdated":1672831176992}',t={},o=p(`<h2 id="_06-\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u6539\u53D8\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u4E48\uFF0C\u8BF4\u660E\u539F\u56E0">06-\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u6539\u53D8\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u4E48\uFF0C\u8BF4\u660E\u539F\u56E0</h2><h3 id="\u5206\u6790">\u5206\u6790</h3><p>\u8FD9\u662F\u4E00\u4E2A\u5B9E\u8DF5\u77E5\u8BC6\u70B9\uFF0C\u7EC4\u4EF6\u5316\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u6709\u4E2A<strong>\u5355\u9879\u6570\u636E\u6D41\u539F\u5219</strong>\uFF0C\u4E0D\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4FEE\u6539\u7236\u7EC4\u4EF6\u662F\u4E2A\u5E38\u8BC6\u95EE\u9898\u3002</p><p>\u53C2\u8003\u6587\u6863\uFF1A<a href="https://link.juejin.cn/?target=https%3A%2F%2Fstaging.vuejs.org%2Fguide%2Fcomponents%2Fprops.html%23one-way-data-flow" target="_blank" rel="noopener noreferrer">staging.vuejs.org/guide/compo\u2026</a></p><hr><h3 id="\u601D\u8DEF">\u601D\u8DEF</h3><ol><li>\u8BB2\u8BB2\u5355\u9879\u6570\u636E\u6D41\u539F\u5219\uFF0C\u8868\u660E\u4E3A\u4F55\u4E0D\u80FD\u8FD9\u4E48\u505A</li><li>\u4E3E\u51E0\u4E2A\u5E38\u89C1\u573A\u666F\u7684\u4F8B\u5B50\u8BF4\u8BF4\u89E3\u51B3\u65B9\u6848</li><li>\u7ED3\u5408\u5B9E\u8DF5\u8BB2\u8BB2\u5982\u679C\u9700\u8981\u4FEE\u6539\u7236\u7EC4\u4EF6\u72B6\u6001\u5E94\u8BE5\u5982\u4F55\u505A</li></ol><hr><h3 id="\u56DE\u7B54\u8303\u4F8B">\u56DE\u7B54\u8303\u4F8B</h3><ol><li><p>\u6240\u6709\u7684 prop \u90FD\u4F7F\u5F97\u5176\u7236\u5B50\u4E4B\u95F4\u5F62\u6210\u4E86\u4E00\u4E2A<strong>\u5355\u5411\u4E0B\u884C\u7ED1\u5B9A</strong>\uFF1A\u7236\u7EA7 prop \u7684\u66F4\u65B0\u4F1A\u5411\u4E0B\u6D41\u52A8\u5230\u5B50\u7EC4\u4EF6\u4E2D\uFF0C\u4F46\u662F\u53CD\u8FC7\u6765\u5219\u4E0D\u884C\u3002\u8FD9\u6837\u4F1A\u9632\u6B62\u4ECE\u5B50\u7EC4\u4EF6\u610F\u5916\u53D8\u66F4\u7236\u7EA7\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u4ECE\u800C\u5BFC\u81F4\u4F60\u7684\u5E94\u7528\u7684\u6570\u636E\u6D41\u5411\u96BE\u4EE5\u7406\u89E3\u3002\u53E6\u5916\uFF0C\u6BCF\u6B21\u7236\u7EA7\u7EC4\u4EF6\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5B50\u7EC4\u4EF6\u4E2D\u6240\u6709\u7684 prop \u90FD\u5C06\u4F1A\u5237\u65B0\u4E3A\u6700\u65B0\u7684\u503C\u3002\u8FD9\u610F\u5473\u7740\u4F60<strong>\u4E0D</strong>\u5E94\u8BE5\u5728\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u5185\u90E8\u6539\u53D8 prop\u3002\u5982\u679C\u4F60\u8FD9\u6837\u505A\u4E86\uFF0CVue \u4F1A\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u4E2D\u53D1\u51FA\u8B66\u544A\u3002</p><div class="language-ini"><pre><code><span class="token key attr-name">const props</span> <span class="token punctuation">=</span> <span class="token value attr-value">defineProps([&#39;foo&#39;])</span>
// \u274C \u4E0B\u9762\u884C\u4E3A\u4F1A\u88AB\u8B66\u544A, props\u662F\u53EA\u8BFB\u7684!
<span class="token key attr-name">props.foo</span> <span class="token punctuation">=</span> <span class="token value attr-value">&#39;<span class="token inner-value">bar</span>&#39;</span>
</code></pre></div></li></ol><hr><ol><li><p>\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u6709\u4E24\u4E2A\u573A\u666F\u4F1A\u60F3\u8981\u4FEE\u6539\u4E00\u4E2A\u5C5E\u6027\uFF1A</p><ul><li><p>**\u8FD9\u4E2A prop \u7528\u6765\u4F20\u9012\u4E00\u4E2A\u521D\u59CB\u503C\uFF1B\u8FD9\u4E2A\u5B50\u7EC4\u4EF6\u63A5\u4E0B\u6765\u5E0C\u671B\u5C06\u5176\u4F5C\u4E3A\u4E00\u4E2A\u672C\u5730\u7684 prop \u6570\u636E\u6765\u4F7F\u7528\u3002**\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6700\u597D\u5B9A\u4E49\u4E00\u4E2A\u672C\u5730\u7684 data\uFF0C\u5E76\u5C06\u8FD9\u4E2A prop \u7528\u4F5C\u5176\u521D\u59CB\u503C\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;initialCounter&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>initialCounter<span class="token punctuation">)</span>
</code></pre></div></li><li><p>**\u8FD9\u4E2A prop \u4EE5\u4E00\u79CD\u539F\u59CB\u7684\u503C\u4F20\u5165\u4E14\u9700\u8981\u8FDB\u884C\u8F6C\u6362\u3002**\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6700\u597D\u4F7F\u7528\u8FD9\u4E2A prop \u7684\u503C\u6765\u5B9A\u4E49\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;size&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// prop\u53D8\u5316\uFF0C\u8BA1\u7B97\u5C5E\u6027\u81EA\u52A8\u66F4\u65B0</span>
<span class="token keyword">const</span> normalizedSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>size<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li><li><p>\u5B9E\u8DF5\u4E2D\u5982\u679C\u786E\u5B9E\u60F3\u8981\u6539\u53D8\u7236\u7EC4\u4EF6\u5C5E\u6027\u5E94\u8BE5emit\u4E00\u4E2A\u4E8B\u4EF6\u8BA9\u7236\u7EC4\u4EF6\u53BB\u505A\u8FD9\u4E2A\u53D8\u66F4\u3002\u6CE8\u610F\u867D\u7136\u6211\u4EEC\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539\u4E00\u4E2A\u4F20\u5165\u7684\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u7C7B\u578B\u7684prop\uFF0C\u4F46\u662F\u6211\u4EEC\u8FD8\u662F\u80FD\u591F\u76F4\u63A5\u6539\u5185\u5D4C\u7684\u5BF9\u8C61\u6216\u5C5E\u6027\u3002</p></li></ol><hr><h2 id=""></h2>`,14),e=[o];function l(c,i,r,u,k,_){return a(),s("div",null,e)}var f=n(t,[["render",l]]);export{g as __pageData,f as default};
