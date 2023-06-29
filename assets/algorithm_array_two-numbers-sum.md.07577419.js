import{_ as n,e as s,o as a,Q as p}from"./plugin-vue_export-helper.8dc630d2.js";const y='{"title":"\u65B9\u6CD5\u4E00\uFF1A\u66B4\u529B\u5FAA\u73AF","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u65B9\u6CD5\u4E00\uFF1A\u66B4\u529B\u5FAA\u73AF","slug":"\u65B9\u6CD5\u4E00\uFF1A\u66B4\u529B\u5FAA\u73AF"},{"level":3,"title":"\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488","slug":"\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488"}],"relativePath":"algorithm/array/two-numbers-sum.md","lastUpdated":1688054008665}',t={},o=p(`<h3 id="\u65B9\u6CD5\u4E00\uFF1A\u66B4\u529B\u5FAA\u73AF">\u65B9\u6CD5\u4E00\uFF1A\u66B4\u529B\u5FAA\u73AF</h3><p>\u7B2C\u4E00\u5C42\u5FAA\u73AF\u6570\u7EC4\u5143\u7D20\uFF0C\u7B2C\u4E8C\u5C42\u5FAA\u73AF\u4ECEi+1\u8D77\uFF0C\u9010\u4E2A\u5BF9\u6BD4\uFF0C\u770B\u6709\u6CA1\u6709\u52A0\u8D77\u6765\u548C\u4E3A\u8F93\u5165\u503C\u7684\u3002</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findTowNumbers1</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arr</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">n</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">res</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

  <span class="token comment">// O(n^2)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n1 <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// \u662F\u5426\u5F97\u5230\u4E86\u7ED3\u679C</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> n2 <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">+</span> n2 <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span>
        flag <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token keyword">break</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488">\u65B9\u6CD5\u4E8C\uFF1A\u53CC\u6307\u9488</h3><p>\u4E24\u4E2A\u6307\u9488\uFF0C\u4E00\u524D\u4E00\u540E\uFF0C\u5206\u522B\u5411\u4E2D\u95F4\u9760\u62E2\uFF0C\u9010\u6B65\u5224\u65AD\u4E24\u4E2A\u6307\u9488\u5BF9\u5E94\u7684\u503C\u662F\u5426\u7B26\u5408\u8981\u6C42\u3002\u5982\u679C\u4E24\u4E2A\u6307\u9488\u5BF9\u5E94\u7684\u6570\u4E4B\u548C\u5927\u4E8E\u7ED9\u5B9A\u7684\u503C\uFF0C\u90A3\u4E48\u5C3E\u6307\u9488\u524D\u79FB\uFF0C\u5982\u679C\u5C0F\u4E8E\u7ED9\u5B9A\u7684\u503C\u90A3\u4E48\u5934\u6307\u9488\u540E\u79FB\u3002</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findTowNumbers2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u5934</span>
  <span class="token keyword">let</span> j <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// \u5C3E</span>

  <span class="token comment">// O(n)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n1 <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">const</span> n2 <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> n1 <span class="token operator">+</span> n2

    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// sum \u5927\u4E8E n \uFF0C\u5219 j \u8981\u5411\u524D\u79FB\u52A8</span>
      j<span class="token operator">--</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// sum \u5C0F\u4E8E n \uFF0C\u5219 i \u8981\u5411\u540E\u79FB\u52A8</span>
      i<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u76F8\u7B49</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre></div>`,6),e=[o];function c(l,k,u,r,i,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{y as __pageData,w as default};
