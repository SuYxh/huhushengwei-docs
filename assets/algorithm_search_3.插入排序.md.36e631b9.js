import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const _='{"title":"\u63D2\u5165\u6392\u5E8F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63D2\u5165\u6392\u5E8F","slug":"\u63D2\u5165\u6392\u5E8F"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"}],"relativePath":"algorithm/search/3.\u63D2\u5165\u6392\u5E8F.md","lastUpdated":1675321926364}',p={},o=t(`<h2 id="\u63D2\u5165\u6392\u5E8F">\u63D2\u5165\u6392\u5E8F</h2><p><img src="https://qn.huat.xyz/mac/20220828153254.png" alt="image-20220828153254745"></p><h3 id="\u4EE3\u7801">\u4EE3\u7801</h3><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">insertSort</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1\u3001\u51C6\u5907\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u50A8\u6293\u5230\u624B\u91CC\u7684\u724C</span>
  <span class="token keyword">const</span> handle<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 2\u3001\u5F00\u59CB\u5148\u6293\u4E00\u5F20\u724C\u8FDB\u6765</span>
  handle<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment">// 3\u3001\u4ECE\u7B2C\u4E8C\u9879\u4F9D\u6B21\u6293\u724C\uFF0C\u4E00\u76F4\u5230\u628A\u724C\u6293\u5149</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// A \u662F\u65B0\u6293\u7684\u724C</span>
    <span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

    <span class="token comment">// \u548C\u624B\u4E2D\u7684\u724C\u8FDB\u884C\u5BF9\u6BD4\uFF08\u4ECE\u540E\u5411\u524D\uFF09</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> handle<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token constant">B</span> <span class="token operator">=</span> handle<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
      <span class="token comment">// \u5982\u679C A \u8981\u6BD4 B \u5927\uFF0C\u5219\u628A A \u653E\u5728 B \u7684\u540E\u9762</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">&gt;</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        handle<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u5DF2\u7ECF\u6BD4\u8F83\u5230\u7B2C\u4E00\u9879\uFF0C\u628A\u65B0\u724C\u63D2\u5165\u5230\u7B2C\u4E00\u9879</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        handle<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> handle
<span class="token punctuation">}</span>
</code></pre></div>`,4),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{_ as __pageData,h as default};
