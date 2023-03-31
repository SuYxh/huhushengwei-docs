import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const m='{"title":"\u53CC\u5411\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5355\u5411\u94FE\u8868\u548C\u53CC\u5411\u94FE\u8868","slug":"\u5355\u5411\u94FE\u8868\u548C\u53CC\u5411\u94FE\u8868"},{"level":3,"title":"\u5355\u5411\u94FE\u8868","slug":"\u5355\u5411\u94FE\u8868"},{"level":3,"title":"\u53CC\u5411\u94FE\u8868","slug":"\u53CC\u5411\u94FE\u8868-1"},{"level":2,"title":"\u53CC\u5411\u94FE\u8868\u7ED3\u6784","slug":"\u53CC\u5411\u94FE\u8868\u7ED3\u6784"},{"level":2,"title":"\u53CC\u5411\u94FE\u8868\u5E38\u89C1\u7684\u64CD\u4F5C","slug":"\u53CC\u5411\u94FE\u8868\u5E38\u89C1\u7684\u64CD\u4F5C"},{"level":2,"title":"\u53CC\u5411\u94FE\u8868\u7684\u5C01\u88C5","slug":"\u53CC\u5411\u94FE\u8868\u7684\u5C01\u88C5"},{"level":3,"title":"\u521B\u5EFA\u53CC\u5411\u94FE\u8868\u7C7B DoublyLinkedList","slug":"\u521B\u5EFA\u53CC\u5411\u94FE\u8868\u7C7B-doublylinkedlist"},{"level":3,"title":"append(element)","slug":"append-element"},{"level":3,"title":"insert(position, element)","slug":"insert-position-element"},{"level":3,"title":"insert(position, element)","slug":"insert-position-element-1"},{"level":3,"title":"removeAt(position)","slug":"removeat-position"},{"level":3,"title":"update(position, data)","slug":"update-position-data"},{"level":3,"title":"forwardToString()","slug":"forwardtostring"},{"level":3,"title":"backwardString()","slug":"backwardstring"},{"level":3,"title":"\u5176\u4ED6\u65B9\u6CD5\u7684\u5B9E\u73B0","slug":"\u5176\u4ED6\u65B9\u6CD5\u7684\u5B9E\u73B0"},{"level":3,"title":"\u5B8C\u6574\u5B9E\u73B0","slug":"\u5B8C\u6574\u5B9E\u73B0"},{"level":3,"title":"\u4EE3\u7801\u6D4B\u8BD5","slug":"\u4EE3\u7801\u6D4B\u8BD5"}],"relativePath":"algorithm/dataStructure/linkList/\u53CC\u5411\u94FE\u8868.md","lastUpdated":1680267263668}',p={},o=t(`__VP_STATIC_START__<h1 id="\u53CC\u5411\u94FE\u8868">\u53CC\u5411\u94FE\u8868</h1><h2 id="\u5355\u5411\u94FE\u8868\u548C\u53CC\u5411\u94FE\u8868">\u5355\u5411\u94FE\u8868\u548C\u53CC\u5411\u94FE\u8868</h2><h3 id="\u5355\u5411\u94FE\u8868">\u5355\u5411\u94FE\u8868</h3><ul><li>\u53EA\u80FD\u4ECE\u5934\u904D\u5386\u5230\u5C3E\u6216\u8005\u4ECE\u5C3E\u904D\u5386\u5230\u5934\uFF08\u4E00\u822C\u4ECE\u5934\u5230\u5C3E\uFF09\u3002</li><li>\u94FE\u8868\u76F8\u8FDE\u7684\u8FC7\u7A0B\u662F\u5355\u5411\u7684\uFF0C\u5B9E\u73B0\u539F\u7406\u662F\u4E0A\u4E00\u4E2A\u8282\u70B9\u4E2D\u6709\u6307\u5411\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u5F15\u7528\u3002</li><li>\u5355\u5411\u94FE\u8868\u6709\u4E00\u4E2A\u6BD4\u8F83\u660E\u663E\u7684\u7F3A\u70B9\uFF1A\u53EF\u4EE5\u8F7B\u677E\u5230\u8FBE\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F46\u56DE\u5230\u524D\u4E00\u4E2A\u8282\u70B9\u5F88\u96BE\uFF0C\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D, \u7ECF\u5E38\u4F1A\u9047\u5230\u9700\u8981\u56DE\u5230\u4E0A\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5\u3002</li></ul><h3 id="\u53CC\u5411\u94FE\u8868-1">\u53CC\u5411\u94FE\u8868</h3><ul><li>\u65E2\u53EF\u4EE5\u4ECE\u5934\u904D\u5386\u5230\u5C3E\uFF0C\u4E5F\u53EF\u4EE5\u4ECE\u5C3E\u904D\u5386\u5230\u5934\u3002</li><li>\u94FE\u8868\u76F8\u8FDE\u7684\u8FC7\u7A0B\u662F\u53CC\u5411\u7684\u3002\u5B9E\u73B0\u539F\u7406\u662F\u4E00\u4E2A\u8282\u70B9\u65E2\u6709\u5411\u524D\u8FDE\u63A5\u7684\u5F15\u7528\uFF0C\u4E5F\u6709\u4E00\u4E2A\u5411\u540E\u8FDE\u63A5\u7684\u5F15\u7528\u3002</li><li>\u53CC\u5411\u94FE\u8868\u53EF\u4EE5\u6709\u6548\u7684\u89E3\u51B3\u5355\u5411\u94FE\u8868\u5B58\u5728\u7684\u95EE\u9898\u3002</li><li>\u53CC\u5411\u94FE\u8868\u7F3A\u70B9\uFF1A <ul><li>\u6BCF\u6B21\u5728\u63D2\u5165\u6216\u5220\u9664\u67D0\u4E2A\u8282\u70B9\u65F6\uFF0C\u90FD\u9700\u8981\u5904\u7406\u56DB\u4E2A\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u4E24\u4E2A\uFF0C\u5B9E\u73B0\u8D77\u6765\u4F1A\u56F0\u96BE\u4E9B\u3002</li><li>\u76F8\u5BF9\u4E8E\u5355\u5411\u94FE\u8868\uFF0C\u6240\u5360\u5185\u5B58\u7A7A\u95F4\u66F4\u5927\u4E00\u4E9B\u3002</li><li>\u4F46\u662F\uFF0C\u76F8\u5BF9\u4E8E\u53CC\u5411\u94FE\u8868\u7684\u4FBF\u5229\u6027\u800C\u8A00\uFF0C\u8FD9\u4E9B\u7F3A\u70B9\u5FAE\u4E0D\u8DB3\u9053\u3002</li></ul></li></ul><h2 id="\u53CC\u5411\u94FE\u8868\u7ED3\u6784">\u53CC\u5411\u94FE\u8868\u7ED3\u6784</h2><p><img src="https://qn.huat.xyz/mac/20220829104012.png" alt="image"></p><ul><li>\u53CC\u5411\u94FE\u8868\u4E0D\u4EC5\u6709 head \u6307\u9488\u6307\u5411\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF0C\u800C\u4E14\u6709 tail \u6307\u9488\u6307\u5411\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u3002</li><li>\u6BCF\u4E00\u4E2A\u8282\u70B9\u7531\u4E09\u90E8\u5206\u7EC4\u6210\uFF1Aitem \u50A8\u5B58\u6570\u636E\u3001prev \u6307\u5411\u524D\u4E00\u4E2A\u8282\u70B9\u3001next \u6307\u5411\u540E\u4E00\u4E2A\u8282\u70B9\u3002</li><li>\u53CC\u5411\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684 prev \u6307\u5411 null\u3002</li><li>\u53CC\u5411\u94FE\u8868\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684 next \u6307\u5411 null\u3002</li></ul><h2 id="\u53CC\u5411\u94FE\u8868\u5E38\u89C1\u7684\u64CD\u4F5C">\u53CC\u5411\u94FE\u8868\u5E38\u89C1\u7684\u64CD\u4F5C</h2><ul><li><code>append(element)</code> \u5411\u94FE\u8868\u5C3E\u90E8\u8FFD\u52A0\u4E00\u4E2A\u65B0\u5143\u7D20\u3002</li><li><code>insert(position, element)</code> \u5411\u94FE\u8868\u7684\u6307\u5B9A\u4F4D\u7F6E\u63D2\u5165\u4E00\u4E2A\u65B0\u5143\u7D20\u3002</li><li><code>getElement(position)</code> \u83B7\u53D6\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20\u3002</li><li><code>indexOf(element)</code> \u8FD4\u56DE\u5143\u7D20\u5728\u94FE\u8868\u4E2D\u7684\u7D22\u5F15\u3002\u5982\u679C\u94FE\u8868\u4E2D\u6CA1\u6709\u8BE5\u5143\u7D20\u5C31\u8FD4\u56DE -1\u3002</li><li><code>update(position, element)</code> \u4FEE\u6539\u6307\u5B9A\u4F4D\u7F6E\u4E0A\u7684\u5143\u7D20\u3002</li><li><code>removeAt(position)</code> \u4ECE\u94FE\u8868\u4E2D\u7684\u5220\u9664\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20\u3002</li><li><code>remove(element)</code> \u4ECE\u94FE\u8868\u5220\u9664\u6307\u5B9A\u7684\u5143\u7D20\u3002</li><li><code>isEmpty()</code> \u5982\u679C\u94FE\u8868\u4E2D\u4E0D\u5305\u542B\u4EFB\u4F55\u5143\u7D20\uFF0C\u8FD4\u56DE <code>trun</code>\uFF0C\u5982\u679C\u94FE\u8868\u957F\u5EA6\u5927\u4E8E 0 \u5219\u8FD4\u56DE <code>false</code>\u3002</li><li><code>size()</code> \u8FD4\u56DE\u94FE\u8868\u5305\u542B\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u4E0E\u6570\u7EC4\u7684 <code>length</code> \u5C5E\u6027\u7C7B\u4F3C\u3002</li><li><code>toString()</code> \u7531\u4E8E\u94FE\u8868\u9879\u4F7F\u7528\u4E86 Node \u7C7B\uFF0C\u5C31\u9700\u8981\u91CD\u5199\u7EE7\u627F\u81EA JavaScript \u5BF9\u8C61\u9ED8\u8BA4\u7684 <code>toString</code> \u65B9\u6CD5\uFF0C\u8BA9\u5176\u53EA\u8F93\u51FA\u5143\u7D20\u7684\u503C\u3002</li><li><code>forwardString()</code> \u8FD4\u56DE\u6B63\u5411\u904D\u5386\u8282\u70B9\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</li><li><code>backwordString()</code> \u8FD4\u56DE\u53CD\u5411\u904D\u5386\u7684\u8282\u70B9\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</li></ul><h2 id="\u53CC\u5411\u94FE\u8868\u7684\u5C01\u88C5">\u53CC\u5411\u94FE\u8868\u7684\u5C01\u88C5</h2><h3 id="\u521B\u5EFA\u53CC\u5411\u94FE\u8868\u7C7B-doublylinkedlist">\u521B\u5EFA\u53CC\u5411\u94FE\u8868\u7C7B DoublyLinkedList</h3><ul><li>DoublyNode \u7C7B\u7EE7\u627F\u5355\u5411\u94FE\u8868\u7684 Node \u7C7B\uFF0C\u65B0\u6DFB\u52A0 <code>this.prev</code> \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7528\u4E8E\u6307\u5411\u4E0A\u4E00\u4E2A\u8282\u70B9\u3002</li><li>DoublyLinkedList \u7C7B\u7EE7\u627F LinkedList \u7C7B\uFF0C\u65B0\u6DFB\u52A0 <code>this.tail</code> \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6307\u5411\u672B\u5C3E\u7684\u8282\u70B9\u3002</li></ul><div class="language-js"><pre><code><span class="token comment">// \u53CC\u5411\u94FE\u8868\u7684\u8282\u70B9\u7C7B\uFF08\u7EE7\u627F\u5355\u5411\u94FE\u8868\u7684\u8282\u70B9\u7C7B\uFF09</span>
<span class="token keyword">class</span> <span class="token class-name">DoublyNode</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53CC\u5411\u94FE\u8868\u7C7B\u7EE7\u627F\u5355\u5411\u94FE\u8868\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="append-element">append(element)</h3><div class="language-js"><pre><code><span class="token comment">// append(element) \u5F80\u53CC\u5411\u94FE\u8868\u5C3E\u90E8\u8FFD\u52A0\u4E00\u4E2A\u65B0\u7684\u5143\u7D20</span>
<span class="token comment">// \u91CD\u5199 append()</span>
<span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">// 1\u3001\u521B\u5EFA\u53CC\u5411\u94FE\u8868\u8282\u70B9</span>
<span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2\u3001\u8FFD\u52A0\u5143\u7D20</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// \uFF01\uFF01\u8DDF\u5355\u5411\u94FE\u8868\u4E0D\u540C\uFF0C\u4E0D\u7528\u901A\u8FC7\u5FAA\u73AF\u627E\u5230\u6700\u540E\u4E00\u4E2A\u8282\u70B9</span>
  <span class="token comment">// \u5DE7\u5999\u4E4B\u5904</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
  newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="insert-position-element">insert(position, element)</h3><div class="language-js"><pre><code><span class="token comment">// insert(position, data) \u63D2\u5165\u5143\u7D20</span>
<span class="token comment">// \u91CD\u5199 insert()</span>
<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u521B\u5EFA\u65B0\u7684\u53CC\u5411\u94FE\u8868\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3\u3001\u5224\u65AD\u591A\u79CD\u63D2\u5165\u60C5\u51B5</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728\u7B2C 0 \u4E2A\u4F4D\u7F6E\u63D2\u5165</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//== \u5DE7\u5999\u4E4B\u5904\uFF1A\u76F8\u5904\u817E\u51FA this.head \u7A7A\u95F4\uFF0C\u7559\u4E2A newNode \u6765\u8D4B\u503C ==//</span>
        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>perv <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u5165</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728 0 ~ this.length \u4F4D\u7F6E\u4E2D\u95F4\u63D2\u5165</span>

      <span class="token keyword">let</span> targetIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

      <span class="token comment">// \u627E\u5230\u8981\u63D2\u5165\u4F4D\u7F6E\u7684\u8282\u70B9</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>targetIndex<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u4EA4\u6362\u8282\u70B9\u4FE1\u606F</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> previousNode<span class="token punctuation">;</span>

      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
      currentNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="insert-position-element-1">insert(position, element)</h3><div class="language-js"><pre><code><span class="token comment">// insert(position, data) \u63D2\u5165\u5143\u7D20</span>
<span class="token comment">// \u91CD\u5199 insert()</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u521B\u5EFA\u65B0\u7684\u53CC\u5411\u94FE\u8868\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3\u3001\u5224\u65AD\u591A\u79CD\u63D2\u5165\u60C5\u51B5</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728\u7B2C 0 \u4E2A\u4F4D\u7F6E\u63D2\u5165</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//== \u5DE7\u5999\u4E4B\u5904\uFF1A\u76F8\u5904\u817E\u51FA this.head \u7A7A\u95F4\uFF0C\u7559\u4E2A newNode \u6765\u8D4B\u503C ==//</span>
        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>perv <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u5165</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728 0 ~ this.length \u4F4D\u7F6E\u4E2D\u95F4\u63D2\u5165</span>

      <span class="token keyword">let</span> targetIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

      <span class="token comment">// \u627E\u5230\u8981\u63D2\u5165\u4F4D\u7F6E\u7684\u8282\u70B9</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>targetIndex<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u4EA4\u6362\u8282\u70B9\u4FE1\u606F</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> previousNode<span class="token punctuation">;</span>

      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
      currentNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="removeat-position">removeAt(position)</h3><div class="language-js"><pre><code>  <span class="token comment">// removeAt() \u5220\u9664\u6307\u5B9A\u4F4D\u7F6E\u7684\u8282\u70B9</span>
  <span class="token comment">// \u91CD\u5199 removeAt()</span>
  <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u6839\u636E\u4E0D\u540C\u60C5\u51B5\u5220\u9664\u5143\u7D20</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5220\u9664\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u94FE\u8868\u5185\u53EA\u6709\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// \u94FE\u8868\u5185\u6709\u591A\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5220\u9664\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>

      currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// \u5220\u9664 0 ~ this.length - 1 \u91CC\u9762\u8282\u70B9\u7684\u60C5\u51B5</span>

      <span class="token keyword">let</span> targetIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>targetIndex<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>perv <span class="token operator">=</span> previousNode<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="update-position-data">update(position, data)</h3><div class="language-js"><pre><code>  <span class="token comment">// update(position, data) \u4FEE\u6539\u6307\u5B9A\u4F4D\u7F6E\u7684\u8282\u70B9</span>
  <span class="token comment">// \u91CD\u5199 update()</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001\u5220\u9664 position \u4F4D\u7F6E\u7684\u8282\u70B9</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u5728 position \u4F4D\u7F6E\u63D2\u5165\u5143\u7D20</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="forwardtostring">forwardToString()</h3><div class="language-js"><pre><code><span class="token comment">// forwardToString() \u94FE\u8868\u6570\u636E\u4ECE\u524D\u5F80\u540E\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token function">forwardToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u7684\u8282\u70B9\uFF0C\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&#39;--&#39;</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="backwardstring">backwardString()</h3><div class="language-js"><pre><code><span class="token comment">// backwardString() \u94FE\u8868\u6570\u636E\u4ECE\u540E\u5F80\u524D\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token function">backwardString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u7684\u8282\u70B9\uFF0C\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&#39;--&#39;</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5176\u4ED6\u65B9\u6CD5\u7684\u5B9E\u73B0">\u5176\u4ED6\u65B9\u6CD5\u7684\u5B9E\u73B0</h3><p>\u53CC\u5411\u94FE\u8868\u7684\u5176\u4ED6\u65B9\u6CD5\u901A\u8FC7\u7EE7\u627F\u5355\u5411\u94FE\u8868\u6765\u5B9E\u73B0\u3002</p><h3 id="\u5B8C\u6574\u5B9E\u73B0">\u5B8C\u6574\u5B9E\u73B0</h3><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ------------ \u94FE\u8868\u7684\u5E38\u89C1\u64CD\u4F5C ------------ //</span>
  <span class="token comment">// append(element) \u5F80\u53CC\u5411\u94FE\u8868\u5C3E\u90E8\u8FFD\u52A0\u4E00\u4E2A\u65B0\u7684\u5143\u7D20</span>
  <span class="token comment">// \u91CD\u5199 append()</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001\u521B\u5EFA\u53CC\u5411\u94FE\u8868\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u8FFD\u52A0\u5143\u7D20</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uFF01\uFF01\u8DDF\u5355\u5411\u94FE\u8868\u4E0D\u540C\uFF0C\u4E0D\u7528\u901A\u8FC7\u5FAA\u73AF\u627E\u5230\u6700\u540E\u4E00\u4E2A\u8282\u70B9</span>
      <span class="token comment">// \u5DE7\u5999\u4E4B\u5904</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// insert(position, data) \u63D2\u5165\u5143\u7D20</span>
  <span class="token comment">// \u91CD\u5199 insert()</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u521B\u5EFA\u65B0\u7684\u53CC\u5411\u94FE\u8868\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3\u3001\u5224\u65AD\u591A\u79CD\u63D2\u5165\u60C5\u51B5</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728\u7B2C 0 \u4E2A\u4F4D\u7F6E\u63D2\u5165</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//== \u5DE7\u5999\u4E4B\u5904\uFF1A\u76F8\u5904\u817E\u51FA this.head \u7A7A\u95F4\uFF0C\u7559\u4E2A newNode \u6765\u8D4B\u503C ==//</span>
        newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>perv <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u5165</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5728 0 ~ this.length \u4F4D\u7F6E\u4E2D\u95F4\u63D2\u5165</span>

      <span class="token keyword">let</span> targetIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

      <span class="token comment">// \u627E\u5230\u8981\u63D2\u5165\u4F4D\u7F6E\u7684\u8282\u70B9</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>targetIndex<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u4EA4\u6362\u8282\u70B9\u4FE1\u606F</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
      newNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> previousNode<span class="token punctuation">;</span>

      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
      currentNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// getData() \u7EE7\u627F\u5355\u5411\u94FE\u8868</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// indexOf() \u7EE7\u627F\u5355\u5411\u94FE\u8868</span>
  <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// removeAt() \u5220\u9664\u6307\u5B9A\u4F4D\u7F6E\u7684\u8282\u70B9</span>
  <span class="token comment">// \u91CD\u5199 removeAt()</span>
  <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u6839\u636E\u4E0D\u540C\u60C5\u51B5\u5220\u9664\u5143\u7D20</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5220\u9664\u7B2C\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u94FE\u8868\u5185\u53EA\u6709\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u94FE\u8868\u5185\u6709\u591A\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5220\u9664\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684\u60C5\u51B5</span>

      currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5220\u9664 0 ~ this.length - 1 \u91CC\u9762\u8282\u70B9\u7684\u60C5\u51B5</span>

      <span class="token keyword">let</span> targetIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>targetIndex<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      currentNode<span class="token punctuation">.</span>next<span class="token punctuation">.</span>perv <span class="token operator">=</span> previousNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// update(position, data) \u4FEE\u6539\u6307\u5B9A\u4F4D\u7F6E\u7684\u8282\u70B9</span>
  <span class="token comment">// \u91CD\u5199 update()</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001\u5220\u9664 position \u4F4D\u7F6E\u7684\u8282\u70B9</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u5728 position \u4F4D\u7F6E\u63D2\u5165\u5143\u7D20</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// remove(data) \u5220\u9664\u6307\u5B9A data \u6240\u5728\u7684\u8282\u70B9\uFF08\u7EE7\u627F\u5355\u5411\u94FE\u8868\uFF09</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// isEmpty() \u5224\u65AD\u94FE\u8868\u662F\u5426\u4E3A\u7A7A</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// size() \u83B7\u53D6\u94FE\u8868\u7684\u957F\u5EA6</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// forwardToString() \u94FE\u8868\u6570\u636E\u4ECE\u524D\u5F80\u540E\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token function">forwardToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u7684\u8282\u70B9\uFF0C\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot;--&quot;</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// backwardString() \u94FE\u8868\u6570\u636E\u4ECE\u540E\u5F80\u524D\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token function">backwardString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u7684\u8282\u70B9\uFF0C\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot;--&quot;</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u4EE3\u7801\u6D4B\u8BD5">\u4EE3\u7801\u6D4B\u8BD5</h3><div class="language-js"><pre><code><span class="token keyword">const</span> doublyLinkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// append() \u6D4B\u8BD5</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;ZZ&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;XX&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;CC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// insert() \u6D4B\u8BD5</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// getData() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; ZZ</span>

<span class="token comment">// indexOf() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;XX&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// removeAt() \u6D4B\u8BD5</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// update() \u6D4B\u8BD5</span>
doublyLinkedList<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// remove() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;111111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;22222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// forwardToString() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">.</span><span class="token function">forwardToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// backwardString() \u6D4B\u8BD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doublyLinkedList<span class="token punctuation">.</span><span class="token function">backwardString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,35),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
