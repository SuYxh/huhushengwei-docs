import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const g='{"title":"\u6808","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6808","slug":"\u6808"},{"level":2,"title":"\u4EC0\u4E48\u662F\u6808","slug":"\u4EC0\u4E48\u662F\u6808"},{"level":2,"title":"\u7A0B\u5E8F\u4E2D\u7684\u6808\u7ED3\u6784","slug":"\u7A0B\u5E8F\u4E2D\u7684\u6808\u7ED3\u6784"},{"level":2,"title":"\u7EC3\u4E60","slug":"\u7EC3\u4E60"},{"level":2,"title":"\u6808\u7ED3\u6784\u5B9E\u73B0","slug":"\u6808\u7ED3\u6784\u5B9E\u73B0"},{"level":3,"title":"\u6808\u5E38\u89C1\u7684\u64CD\u4F5C","slug":"\u6808\u5E38\u89C1\u7684\u64CD\u4F5C"},{"level":3,"title":"JavaScript \u4EE3\u7801\u5B9E\u73B0\u6808\u7ED3\u6784","slug":"javascript-\u4EE3\u7801\u5B9E\u73B0\u6808\u7ED3\u6784"},{"level":3,"title":"\u6D4B\u8BD5\u5C01\u88C5\u7684\u6808\u7ED3\u6784","slug":"\u6D4B\u8BD5\u5C01\u88C5\u7684\u6808\u7ED3\u6784"},{"level":2,"title":"\u6808\u7ED3\u6784\u7684\u7B80\u5355\u5E94\u7528","slug":"\u6808\u7ED3\u6784\u7684\u7B80\u5355\u5E94\u7528"},{"level":3,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0"},{"level":3,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5"}],"relativePath":"algorithm/dataStructure/stack/1.\u6808.md","lastUpdated":1672831176988}',p={},o=t(`__VP_STATIC_START__<h2 id="\u6808">\u6808</h2><p>\u6570\u7EC4\u662F\u4E00\u4E2A\u7EBF\u6027\u7ED3\u6784\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728\u6570\u7EC4\u7684\u4EFB\u610F\u4F4D\u7F6E\u63D2\u5165\u548C\u5220\u9664\u5143\u7D20\u3002 \u4F46\u662F\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u4E3A\u4E86\u5B9E\u73B0\u67D0\u4E9B\u529F\u80FD\uFF0C\u5FC5\u987B\u5BF9\u8FD9\u79CD\u4EFB\u610F\u6027\u52A0\u4EE5\u9650\u5236\u3002 \u6808\u548C\u961F\u5217\u5C31\u662F\u6BD4\u8F83\u5E38\u89C1\u7684\u53D7\u9650\u7684\u7EBF\u6027\u7ED3\u6784\u3002</p><h2 id="\u4EC0\u4E48\u662F\u6808">\u4EC0\u4E48\u662F\u6808</h2><p>\u6808\uFF08stack\uFF09\u662F\u4E00\u79CD\u8FD0\u7B97\u53D7\u9650\u7684\u7EBF\u6027\u8868\uFF1A</p><ul><li><code>LIFO\uFF08last in first out\uFF09</code>\u8868\u793A\u5C31\u662F\u540E\u8FDB\u5165\u7684\u5143\u7D20\uFF0C\u7B2C\u4E00\u4E2A\u5F39\u51FA\u6808\u7A7A\u95F4\u3002\u7C7B\u4F3C\u4E8E\u81EA\u52A8\u9910\u6258\u76D8\uFF0C\u6700\u540E\u653E\u4E0A\u7684\u6258\u76D8\uFF0C\u5F80\u5F80\u5148\u628A\u62FF\u51FA\u53BB\u4F7F\u7528\u3002</li><li>\u5176\u9650\u5236\u662F\u4EC5\u5141\u8BB8\u5728\u8868\u7684\u4E00\u7AEF\u8FDB\u884C\u63D2\u5165\u548C\u5220\u9664\u8FD0\u7B97\u3002\u8FD9\u4E00\u7AEF\u88AB\u79F0\u4E3A\u6808\u9876\uFF0C\u76F8\u5BF9\u5730\uFF0C\u628A\u53E6\u4E00\u7AEF\u79F0\u4E3A\u6808\u5E95\u3002</li><li>\u5411\u4E00\u4E2A\u6808\u63D2\u5165\u65B0\u5143\u7D20\u53C8\u79F0\u4F5C\u8FDB\u6808\u3001\u5165\u6808\u6216\u538B\u6808\uFF0C\u5B83\u662F\u628A\u65B0\u5143\u7D20\u653E\u5230\u6808\u9876\u5143\u7D20\u7684\u4E0A\u9762\uFF0C\u4F7F\u4E4B\u6210\u4E3A\u65B0\u7684\u6808\u9876\u5143\u7D20\uFF1B</li><li>\u4ECE\u4E00\u4E2A\u6808\u5220\u9664\u5143\u7D20\u53C8\u79F0\u4F5C\u51FA\u6808\u6216\u9000\u6808\uFF0C\u5B83\u662F\u628A\u6808\u9876\u5143\u7D20\u5220\u9664\u6389\uFF0C\u4F7F\u5176\u76F8\u90BB\u7684\u5143\u7D20\u6210\u4E3A\u65B0\u7684\u6808\u9876\u5143\u7D20\u3002</li></ul><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A <img src="https://qn.huat.xyz/mac/20220829103037.png" alt="image"></p><p>\u6808\u7684\u7279\u70B9\uFF1A<strong>\u5148\u8FDB\u540E\u51FA\uFF0C\u540E\u8FDB\u5148\u51FA</strong>\u3002</p><h2 id="\u7A0B\u5E8F\u4E2D\u7684\u6808\u7ED3\u6784">\u7A0B\u5E8F\u4E2D\u7684\u6808\u7ED3\u6784</h2><ul><li><p>\u51FD\u6570\u8C03\u7528\u6808\uFF1AA(B(C(D())))\uFF1A \u5373 A \u51FD\u6570\u4E2D\u8C03\u7528 B\uFF0CB \u8C03\u7528 C\uFF0CC \u8C03\u7528 D\uFF1B\u5728 A \u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u5C06 A \u538B\u5165\u6808\uFF0C\u968F\u540E B \u6267\u884C\u65F6 B \u4E5F\u88AB\u538B\u5165\u6808\uFF0C\u51FD\u6570 C \u548C D \u6267\u884C\u65F6\u4E5F\u4F1A\u88AB\u538B\u5165\u6808\u3002\u6240\u4EE5\u5F53\u524D\u6808\u7684\u987A\u5E8F\u4E3A\uFF1AA-&gt;B-&gt;C-&gt;D\uFF08\u6808\u9876\uFF09\uFF1B\u51FD\u6570 D \u6267\u884C\u5B8C\u4E4B\u540E\uFF0C\u4F1A\u5F39\u51FA\u6808\u88AB\u91CA\u653E\uFF0C\u5F39\u51FA\u6808\u7684\u987A\u5E8F\u4E3A D-&gt;C-&gt;B-&gt;A;</p></li><li><p>\u9012\u5F52\uFF1A \u4E3A\u4EC0\u4E48\u6CA1\u6709\u505C\u6B62\u6761\u4EF6\u7684\u9012\u5F52\u4F1A\u9020\u6210\u6808\u6EA2\u51FA\uFF1F\u6BD4\u5982\u51FD\u6570 A \u4E3A\u9012\u5F52\u51FD\u6570\uFF0C\u4E0D\u65AD\u5730\u8C03\u7528\u81EA\u5DF1\uFF08\u56E0\u4E3A\u51FD\u6570\u8FD8\u6CA1\u6709\u6267\u884C\u5B8C\uFF0C\u4E0D\u4F1A\u628A\u51FD\u6570\u5F39\u51FA\u6808\uFF09\uFF0C\u4E0D\u505C\u5730\u628A\u76F8\u540C\u7684\u51FD\u6570 A \u538B\u5165\u6808\uFF0C\u6700\u540E\u9020\u6210\u6808\u6EA2\u51FA\uFF08Queue Overfloat\uFF09\u3002</p></li></ul><h2 id="\u7EC3\u4E60">\u7EC3\u4E60</h2><p>\u9898\u76EE\uFF1A\u6709 6 \u4E2A\u5143\u7D20 6\uFF0C5\uFF0C4\uFF0C3\uFF0C2\uFF0C1 \u6309\u987A\u5E8F\u8FDB\u6808\uFF0C\u95EE\u4E0B\u5217\u54EA\u4E00\u4E2A\u4E0D\u662F\u5408\u6CD5\u7684\u51FA\u6808\u987A\u5E8F\uFF1F</p><ul><li>A\uFF1A5 4 3 6 1 2 \uFF08\u221A\uFF09</li><li>B\uFF1A4 5 3 2 1 6 \uFF08\u221A\uFF09</li><li>C\uFF1A3 4 6 5 2 1 \uFF08\xD7\uFF09</li><li>D\uFF1A2 3 4 1 5 6 \uFF08\u221A\uFF09</li></ul><p>\u9898\u76EE\u6240\u8BF4\u7684\u6309\u987A\u5E8F\u8FDB\u6808\u6307\u7684\u4E0D\u662F\u4E00\u6B21\u6027\u5168\u90E8\u8FDB\u6808\uFF0C\u800C\u662F\u6709\u8FDB\u6709\u51FA\uFF0C\u8FDB\u6808\u987A\u5E8F\u4E3A 6 -&gt; 5 -&gt; 4 -&gt; 3 -&gt; 2 -&gt; 1\u3002</p><p>\u89E3\u6790\uFF1A</p><ul><li>A \u7B54\u6848\uFF1A65 \u8FDB\u6808\uFF0C5 \u51FA\u6808\uFF0C4 \u8FDB\u6808\u51FA\u6808\uFF0C3 \u8FDB\u6808\u51FA\u6808\uFF0C6 \u51FA\u6808\uFF0C21 \u8FDB\u6808\uFF0C1 \u51FA\u6808\uFF0C2 \u51FA\u6808\uFF08\u6574\u4F53\u5165\u6808\u987A\u5E8F\u7B26\u5408 654321\uFF09\u3002</li><li>B \u7B54\u6848\uFF1A654 \u8FDB\u6808\uFF0C4 \u51FA\u6808\uFF0C5 \u51FA\u6808\uFF0C3 \u8FDB\u6808\u51FA\u6808\uFF0C2 \u8FDB\u6808\u51FA\u6808\uFF0C1 \u8FDB\u6808\u51FA\u6808\uFF0C6 \u51FA\u6808\uFF08\u6574\u4F53\u7684\u5165\u6808\u987A\u5E8F\u7B26\u5408 654321\uFF09\u3002</li><li>C \u7B54\u6848\uFF1A6543 \u8FDB\u6808\uFF0C3 \u51FA\u6808\uFF0C4 \u51FA\u6808\uFF0C\u4E4B\u540E\u5E94\u8BE5 5 \u51FA\u6808\u800C\u4E0D\u662F 6\uFF0C\u6240\u4EE5\u9519\u8BEF\u3002</li><li>D \u7B54\u6848\uFF1A65432 \u8FDB\u6808\uFF0C2 \u51FA\u6808\uFF0C3 \u51FA\u6808\uFF0C4 \u51FA\u6808\uFF0C1 \u8FDB\u6808\u51FA\u6808\uFF0C5 \u51FA\u6808\uFF0C6 \u51FA\u6808\u3002\u7B26\u5408\u5165\u6808\u987A\u5E8F\u3002</li></ul><h2 id="\u6808\u7ED3\u6784\u5B9E\u73B0">\u6808\u7ED3\u6784\u5B9E\u73B0</h2><h3 id="\u6808\u5E38\u89C1\u7684\u64CD\u4F5C">\u6808\u5E38\u89C1\u7684\u64CD\u4F5C</h3><ul><li><code>push()</code> \u6DFB\u52A0\u4E00\u4E2A\u65B0\u5143\u7D20\u5230\u6808\u9876\u4F4D\u7F6E\u3002</li><li><code>pop()</code> \u79FB\u9664\u6808\u9876\u7684\u5143\u7D20\uFF0C\u540C\u65F6\u8FD4\u56DE\u88AB\u79FB\u9664\u7684\u5143\u7D20\u3002</li><li><code>peek()</code> \u8FD4\u56DE\u6808\u9876\u7684\u5143\u7D20\uFF0C\u4E0D\u5BF9\u6808\u505A\u4EFB\u4F55\u4FEE\u6539\uFF08\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u79FB\u9664\u6808\u9876\u7684\u5143\u7D20\uFF0C\u4EC5\u4EC5\u8FD4\u56DE\u5B83\uFF09\u3002</li><li><code>isEmpty()</code> \u5982\u679C\u6808\u91CC\u6CA1\u6709\u4EFB\u4F55\u5143\u7D20\u5C31\u8FD4\u56DE <code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE <code>false</code>\u3002</li><li><code>size()</code> \u8FD4\u56DE\u6808\u91CC\u7684\u5143\u7D20\u4E2A\u6570\u3002\u8FD9\u4E2A\u65B9\u6CD5\u548C\u6570\u7EC4\u7684 <code>length</code> \u5C5E\u6027\u7C7B\u4F3C\u3002</li><li><code>toString()</code> \u5C06\u6808\u7ED3\u6784\u7684\u5185\u5BB9\u4EE5\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\u8FD4\u56DE\u3002</li></ul><h3 id="javascript-\u4EE3\u7801\u5B9E\u73B0\u6808\u7ED3\u6784">JavaScript \u4EE3\u7801\u5B9E\u73B0\u6808\u7ED3\u6784</h3><div class="language-js"><pre><code><span class="token comment">// \u6808\u7ED3\u6784\u7684\u5C01\u88C5</span>
<span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// push(item) \u538B\u6808\u64CD\u4F5C\uFF0C\u5F80\u6808\u91CC\u9762\u6DFB\u52A0\u5143\u7D20</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// pop() \u51FA\u6808\u64CD\u4F5C\uFF0C\u4ECE\u6808\u4E2D\u53D6\u51FA\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u53D6\u51FA\u7684\u90A3\u4E2A\u5143\u7D20</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// peek() \u67E5\u770B\u6808\u9876\u5143\u7D20</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// isEmpty() \u5224\u65AD\u6808\u662F\u5426\u4E3A\u7A7A</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// size() \u83B7\u53D6\u6808\u4E2D\u5143\u7D20\u4E2A\u6570</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// toString() \u8FD4\u56DE\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u6808\u5185\u5143\u7D20\u6570\u636E</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> item <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6D4B\u8BD5\u5C01\u88C5\u7684\u6808\u7ED3\u6784">\u6D4B\u8BD5\u5C01\u88C5\u7684\u6808\u7ED3\u6784</h3><div class="language-js"><pre><code><span class="token comment">// push() \u6D4B\u8BD5</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; [1, 2, 3]</span>

<span class="token comment">// pop() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 3</span>

<span class="token comment">// peek() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 2</span>

<span class="token comment">// isEmpty() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; false</span>

<span class="token comment">// size() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 2</span>

<span class="token comment">// toString() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 1 2</span>
</code></pre></div><h2 id="\u6808\u7ED3\u6784\u7684\u7B80\u5355\u5E94\u7528">\u6808\u7ED3\u6784\u7684\u7B80\u5355\u5E94\u7528</h2><p>\u5229\u7528\u6808\u7ED3\u6784\u7684\u7279\u70B9\u5C01\u88C5\u5B9E\u73B0\u5341\u8FDB\u5236\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u7684\u65B9\u6CD5\u3002</p><h3 id="\u4EE3\u7801\u5B9E\u73B0">\u4EE3\u7801\u5B9E\u73B0</h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">dec2bin</span><span class="token punctuation">(</span><span class="token parameter">dec</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// new \u4E00\u4E2A Stack\uFF0C\u4FDD\u5B58\u4F59\u6570</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5F53\u4E0D\u786E\u5B9A\u5FAA\u73AF\u6B21\u6570\u65F6\uFF0C\u4F7F\u7528 while \u5FAA\u73AF</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>dec <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9664\u4E8C\u53D6\u4F59\u6CD5</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dec <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u4F59\u6570\uFF0C\u653E\u5165\u6808\u4E2D</span>
    dec <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>dec <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9664\u6570\u9664\u4EE5\u4E8C\uFF0C\u5411\u4E0B\u53D6\u6574</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> binaryString <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4E0D\u65AD\u5730\u4ECE\u6808\u4E2D\u53D6\u51FA\u5143\u7D20\uFF080 \u6216 1\uFF09\uFF0C\u5E76\u62FC\u63A5\u5230\u4E00\u8D77\u3002</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    binaryString <span class="token operator">+=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> binaryString<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6D4B\u8BD5">\u6D4B\u8BD5</h3><div class="language-js"><pre><code><span class="token comment">// dec2bin() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">dec2bin</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 1100100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">dec2bin</span><span class="token punctuation">(</span><span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 1011000</span>
</code></pre></div>__VP_STATIC_END__`,28),c=[o];function e(l,u,i,k,r,m){return a(),s("div",null,c)}var h=n(p,[["render",e]]);export{g as __pageData,h as default};
