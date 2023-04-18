import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const y='{"title":"\u4F18\u5148\u961F\u5217","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u573A\u666F","slug":"\u573A\u666F"},{"level":2,"title":"\u4F18\u5148\u961F\u5217","slug":"\u4F18\u5148\u961F\u5217-1"},{"level":2,"title":"\u4F18\u5148\u961F\u5217\u7684\u5B9E\u73B0","slug":"\u4F18\u5148\u961F\u5217\u7684\u5B9E\u73B0"},{"level":3,"title":"\u4EE3\u7801\u5B9E\u73B0","slug":"\u4EE3\u7801\u5B9E\u73B0"},{"level":3,"title":"\u6D4B\u8BD5\u4EE3\u7801","slug":"\u6D4B\u8BD5\u4EE3\u7801"},{"level":2,"title":"\u6570\u7EC4\u3001\u6808\u548C\u961F\u5217\u56FE\u89E3","slug":"\u6570\u7EC4\u3001\u6808\u548C\u961F\u5217\u56FE\u89E3"}],"relativePath":"algorithm/dataStructure/queue/\u4F18\u5148\u961F\u5217.md","lastUpdated":1681805691296}',p={},o=t(`<h1 id="\u4F18\u5148\u961F\u5217">\u4F18\u5148\u961F\u5217</h1><h2 id="\u573A\u666F">\u573A\u666F</h2><p>\u751F\u6D3B\u4E2D\u7C7B\u4F3C<strong>\u4F18\u5148\u961F\u5217</strong>\u7684\u573A\u666F\uFF1A</p><ul><li>\u4F18\u5148\u6392\u961F\u7684\u4EBA\uFF0C\u4F18\u5148\u5904\u7406\u3002 (\u4E70\u7968\u3001\u7ED3\u8D26\u3001WC)\u3002</li><li>\u6392\u961F\u4E2D\uFF0C\u6709\u7D27\u6025\u60C5\u51B5\uFF08\u7279\u6B8A\u60C5\u51B5\uFF09\u7684\u4EBA\u53EF\u4F18\u5148\u5904\u7406\u3002</li></ul><h2 id="\u4F18\u5148\u961F\u5217-1">\u4F18\u5148\u961F\u5217</h2><p>\u4F18\u5148\u7EA7\u961F\u5217\u4E3B\u8981\u8003\u8651\u7684\u95EE\u9898\uFF1A</p><ul><li>\u6BCF\u4E2A\u5143\u7D20\u4E0D\u518D\u53EA\u662F\u4E00\u4E2A\u6570\u636E\uFF0C\u8FD8\u5305\u542B\u4F18\u5148\u7EA7\u3002</li><li>\u5728\u6DFB\u52A0\u5143\u7D20\u8FC7\u7A0B\u4E2D\uFF0C\u6839\u636E\u4F18\u5148\u7EA7\u653E\u5165\u5230\u6B63\u786E\u4F4D\u7F6E\u3002</li></ul><h2 id="\u4F18\u5148\u961F\u5217\u7684\u5B9E\u73B0">\u4F18\u5148\u961F\u5217\u7684\u5B9E\u73B0</h2><h3 id="\u4EE3\u7801\u5B9E\u73B0">\u4EE3\u7801\u5B9E\u73B0</h3><div class="language-js"><pre><code><span class="token comment">// \u4F18\u5148\u961F\u5217\u5185\u90E8\u7684\u5143\u7D20\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">QueueElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> priority</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> element<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>priority <span class="token operator">=</span> priority<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F18\u5148\u961F\u5217\u7C7B\uFF08\u7EE7\u627F Queue \u7C7B\uFF09</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PriorityQueue</span> <span class="token keyword">extends</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// enqueue(element, priority) \u5165\u961F\uFF0C\u5C06\u5143\u7D20\u6309\u4F18\u5148\u7EA7\u52A0\u5165\u5230\u961F\u5217\u4E2D</span>
  <span class="token comment">// \u91CD\u5199 enqueue()</span>
  <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> priority</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6839\u636E\u4F20\u5165\u7684\u5143\u7D20\uFF0C\u521B\u5EFA QueueElement \u5BF9\u8C61</span>
    <span class="token keyword">const</span> queueElement <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueueElement</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> priority<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5224\u65AD\u961F\u5217\u662F\u5426\u4E3A\u7A7A</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u4E3A\u7A7A\uFF0C\u4E0D\u7528\u5224\u65AD\u4F18\u5148\u7EA7\uFF0C\u76F4\u63A5\u6DFB\u52A0</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queueElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\u8BB0\u5F55\u662F\u5426\u6210\u529F\u6DFB\u52A0\u4E86\u65B0\u5143\u7D20</span>
      <span class="token keyword">let</span> added <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BA9\u65B0\u63D2\u5165\u7684\u5143\u7D20\u8FDB\u884C\u4F18\u5148\u7EA7\u6BD4\u8F83\uFF0Cpriority \u503C\u8D8A\u5C0F\uFF0C\u4F18\u5148\u7EA7\u8D8A\u5927</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>queueElement<span class="token punctuation">.</span>priority <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>priority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5728\u6307\u5B9A\u7684\u4F4D\u7F6E\u63D2\u5165\u5143\u7D20</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> queueElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
          added <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u5982\u679C\u904D\u5386\u5B8C\u6240\u6709\u5143\u7D20\uFF0C\u4F18\u5148\u7EA7\u90FD\u5927\u4E8E\u65B0\u63D2\u5165\u7684\u5143\u7D20\uFF0C\u5C31\u5C06\u65B0\u63D2\u5165\u7684\u5143\u7D20\u63D2\u5165\u5230\u6700\u540E</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>added<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queueElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// dequeue() \u51FA\u961F\uFF0C\u4ECE\u961F\u5217\u4E2D\u5220\u9664\u524D\u7AEF\u5143\u7D20\uFF0C\u8FD4\u56DE\u5220\u9664\u7684\u5143\u7D20</span>
  <span class="token comment">// \u7EE7\u627F Queue \u7C7B\u7684 dequeue()</span>
  <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// front() \u67E5\u770B\u961F\u5217\u7684\u524D\u7AEF\u5143\u7D20</span>
  <span class="token comment">// \u7EE7\u627F Queue \u7C7B\u7684 front()</span>
  <span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// isEmpty() \u67E5\u770B\u961F\u5217\u662F\u5426\u4E3A\u7A7A</span>
  <span class="token comment">// \u7EE7\u627F Queue \u7C7B\u7684 isEmpty()</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// size() \u67E5\u770B\u961F\u5217\u4E2D\u5143\u7D20\u7684\u4E2A\u6570</span>
  <span class="token comment">// \u7EE7\u627F Queue \u7C7B\u7684 size()</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// toString() \u5C06\u961F\u5217\u4E2D\u5143\u7D20\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token comment">// \u91CD\u5199 toString()</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> item<span class="token punctuation">.</span>element <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>priority <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6D4B\u8BD5\u4EE3\u7801">\u6D4B\u8BD5\u4EE3\u7801</h3><div class="language-js"><pre><code><span class="token keyword">const</span> priorityQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5165\u961F enqueue() \u6D4B\u8BD5</span>
priorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
priorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
priorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
priorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
priorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//--&gt; output:</span>
<span class="token comment">// QueueElement {element: &quot;A&quot;, priority: 10}</span>
<span class="token comment">// QueueElement {element: &quot;C&quot;, priority: 11}</span>
<span class="token comment">// QueueElement {element: &quot;B&quot;, priority: 15}</span>
<span class="token comment">// QueueElement {element: &quot;E&quot;, priority: 18}</span>
<span class="token comment">// QueueElement {element: &quot;D&quot;, priority: 20}</span>

<span class="token comment">// \u51FA\u961F dequeue() \u6D4B\u8BD5</span>
priorityQueue<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
priorityQueue<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//--&gt; output:</span>
<span class="token comment">// QueueElement {element: &quot;B&quot;, priority: 15}</span>
<span class="token comment">// QueueElement {element: &quot;E&quot;, priority: 18}</span>
<span class="token comment">// QueueElement {element: &quot;D&quot;, priority: 20}</span>

<span class="token comment">// isEmpty() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; false</span>

<span class="token comment">// size() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 3</span>

<span class="token comment">// toString() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; B-15 E-18 D-20</span>
</code></pre></div><h2 id="\u6570\u7EC4\u3001\u6808\u548C\u961F\u5217\u56FE\u89E3">\u6570\u7EC4\u3001\u6808\u548C\u961F\u5217\u56FE\u89E3</h2><p><img src="https://qn.huat.xyz/mac/20220829103410.png" alt="\u6570\u7EC4\u3001\u6808\u548C\u961F\u5217\u56FE\u89E3"></p>`,14),e=[o];function c(u,l,i,k,r,m){return a(),s("div",null,e)}var q=n(p,[["render",c]]);export{y as __pageData,q as default};
