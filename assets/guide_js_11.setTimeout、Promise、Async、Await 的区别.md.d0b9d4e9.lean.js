import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const g='{"title":"setTimeout\u3001Promise\u3001Async/Await \u7684\u533A\u522B","description":"","frontmatter":{},"headers":[{"level":3,"title":"setTimeout\u3001Promise\u3001Async/Await \u7684\u533A\u522B","slug":"settimeout\u3001promise\u3001async-await-\u7684\u533A\u522B"}],"relativePath":"guide/js/11.setTimeout\u3001Promise\u3001Async\u3001Await \u7684\u533A\u522B.md","lastUpdated":1672831176996}',p={},o=t(`__VP_STATIC_START__<h3 id="settimeout\u3001promise\u3001async-await-\u7684\u533A\u522B">setTimeout\u3001Promise\u3001Async/Await \u7684\u533A\u522B</h3><ol><li><p>setTimeout</p><p>settimeout\u7684\u56DE\u8C03\u51FD\u6570\u653E\u5230\u5B8F\u4EFB\u52A1\u961F\u5217\u91CC\uFF0C\u7B49\u5230\u6267\u884C\u6808\u6E05\u7A7A\u4EE5\u540E\u6267\u884C\u3002</p></li><li><p>Promise</p><p>Promise\u672C\u8EAB\u662F<strong>\u540C\u6B65\u7684\u7ACB\u5373\u6267\u884C\u51FD\u6570</strong>\uFF0C \u5F53\u5728executor\u4E2D\u6267\u884Cresolve\u6216\u8005reject\u7684\u65F6\u5019, \u6B64\u65F6\u662F\u5F02\u6B65\u64CD\u4F5C\uFF0C \u4F1A\u5148\u6267\u884Cthen/catch\u7B49\uFF0C\u5F53\u4E3B\u6808\u5B8C\u6210\u540E\uFF0C\u624D\u4F1A\u53BB\u8C03\u7528resolve/reject\u4E2D\u5B58\u653E\u7684\u65B9\u6CD5\u6267\u884C\u3002</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1 end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;settimeout&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8F93\u51FA\u987A\u5E8F: script start-&gt;promise1-&gt;promise1 end-&gt;script end-&gt;promise2-&gt;settimeout</span>
</code></pre></div></li><li><p>async/await</p><p>async \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u5F53\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4E00\u65E6\u9047\u5230 await \u5C31\u4F1A\u5148\u8FD4\u56DE\uFF0C\u7B49\u5230\u89E6\u53D1\u7684\u5F02\u6B65\u64CD\u4F5C\u5B8C\u6210\uFF0C\u518D\u6267\u884C\u51FD\u6570\u4F53\u5185\u540E\u9762\u7684\u8BED\u53E5\u3002\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF0C\u662F\u8BA9\u51FA\u4E86\u7EBF\u7A0B\uFF0C\u8DF3\u51FA\u4E86 async \u51FD\u6570\u4F53\u3002</p><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F93\u51FA\u987A\u5E8F\uFF1Ascript start-&gt;async1 start-&gt;async2-&gt;script end-&gt;async1 end</span>
</code></pre></div></li></ol><p>\u4F20\u9001\u95E8 \u261E <a href="https://juejin.cn/post/6999651011304357925" target="_blank" rel="noopener noreferrer"># JavaScript Promise \u4E13\u9898</a></p>__VP_STATIC_END__`,3),c=[o];function e(u,i,l,k,r,m){return a(),s("div",null,c)}var _=n(p,[["render",e]]);export{g as __pageData,_ as default};
