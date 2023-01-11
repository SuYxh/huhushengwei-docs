import{_ as n,e as s,o as a,Q as p}from"./plugin-vue_export-helper.8dc630d2.js";const y='{"title":"\u601D\u8DEF","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"}],"relativePath":"algorithm/search/2.\u4E8C\u5206\u67E5\u627E.md","lastUpdated":1673402675647}',t={},o=p(`__VP_STATIC_START__<h3 id="\u601D\u8DEF">\u601D\u8DEF</h3><p>1\u3001\u9012\u5F52</p><p>\u4EE3\u7801\u903B\u8F91\u66F4\u52A0\u6E05\u6670</p><p>2\u3001\u975E\u9012\u5F52\uFF08\u5FAA\u73AF\uFF09</p><p>\u6027\u80FD\u66F4\u597D(\u76F8\u5BF9\u6765\u8BF4)</p><p><img src="https://qn.huat.xyz/mac/20220906162918.png" alt="image-20220906162918328"></p><h3 id="\u4EE3\u7801">\u4EE3\u7801</h3><div class="language-ts"><pre><code><span class="token comment">/**
 * \u4E8C\u5206\u67E5\u627E\uFF08\u9012\u5F52\uFF09
 * @param arr arr
 * @param target target
 * @param startIndex start index
 * @param endIndex end index
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">binarySearch2</span><span class="token punctuation">(</span>
  arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  startIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  endIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token comment">// \u5F00\u59CB\u548C\u7ED3\u675F\u7684\u8303\u56F4</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> startIndex <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>endIndex <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> endIndex <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token comment">// \u5982\u679C start \u548C end \u76F8\u9047\uFF0C\u5219\u7ED3\u675F</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">&gt;</span> endIndex<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token comment">// \u4E2D\u95F4\u4F4D\u7F6E</span>
  <span class="token keyword">const</span> midIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> endIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> midValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>midIndex<span class="token punctuation">]</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u76EE\u6807\u503C\u8F83\u5C0F\uFF0C\u5219\u7EE7\u7EED\u5728\u5DE6\u4FA7\u67E5\u627E</span>
    <span class="token keyword">return</span> <span class="token function">binarySearch2</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> target<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> midIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u76EE\u6807\u503C\u8F83\u5927\uFF0C\u5219\u7EE7\u7EED\u5728\u53F3\u4FA7\u67E5\u627E</span>
    <span class="token keyword">return</span> <span class="token function">binarySearch2</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> target<span class="token punctuation">,</span> midIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> endIndex<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u76F8\u7B49\uFF0C\u8FD4\u56DE</span>
    <span class="token keyword">return</span> midIndex
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token comment">/**
 * \u4E8C\u5206\u67E5\u627E\uFF08\u5FAA\u73AF\uFF09
 * @param arr arr
 * @param target target
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">binarySearch1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token keyword">let</span> startIndex <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u5F00\u59CB\u4F4D\u7F6E</span>
  <span class="token keyword">let</span> endIndex <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// \u7ED3\u675F\u4F4D\u7F6E</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>startIndex <span class="token operator">&lt;=</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> midIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> endIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> midValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>midIndex<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u76EE\u6807\u503C\u8F83\u5C0F\uFF0C\u5219\u7EE7\u7EED\u5728\u5DE6\u4FA7\u67E5\u627E</span>
      endIndex <span class="token operator">=</span> midIndex <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u76EE\u6807\u503C\u8F83\u5927\uFF0C\u5219\u7EE7\u7EED\u5728\u53F3\u4FA7\u67E5\u627E</span>
      startIndex <span class="token operator">=</span> midIndex <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u76F8\u7B49\uFF0C\u8FD4\u56DE</span>
      <span class="token keyword">return</span> midIndex
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,8),e=[o];function c(l,r,k,u,i,d){return a(),s("div",null,e)}var x=n(t,[["render",c]]);export{y as __pageData,x as default};
