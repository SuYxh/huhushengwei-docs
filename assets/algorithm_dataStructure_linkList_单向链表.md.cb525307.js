import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const h='{"title":"\u5355\u5411\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BA4\u8BC6\u94FE\u8868","slug":"\u8BA4\u8BC6\u94FE\u8868"},{"level":3,"title":"\u94FE\u8868\u548C\u6570\u7EC4","slug":"\u94FE\u8868\u548C\u6570\u7EC4"},{"level":2,"title":"\u5355\u5411\u94FE\u8868","slug":"\u5355\u5411\u94FE\u8868-1"},{"level":3,"title":"\u94FE\u8868\u4E2D\u7684\u5E38\u89C1\u64CD\u4F5C","slug":"\u94FE\u8868\u4E2D\u7684\u5E38\u89C1\u64CD\u4F5C"},{"level":3,"title":"\u5355\u5411\u94FE\u8868\u7684\u5C01\u88C5","slug":"\u5355\u5411\u94FE\u8868\u7684\u5C01\u88C5"}],"relativePath":"algorithm/dataStructure/linkList/\u5355\u5411\u94FE\u8868.md","lastUpdated":1672982970895}',p={},o=t(`<h1 id="\u5355\u5411\u94FE\u8868">\u5355\u5411\u94FE\u8868</h1><h2 id="\u8BA4\u8BC6\u94FE\u8868">\u8BA4\u8BC6\u94FE\u8868</h2><h3 id="\u94FE\u8868\u548C\u6570\u7EC4">\u94FE\u8868\u548C\u6570\u7EC4</h3><p>\u94FE\u8868\u548C\u6570\u7EC4\u4E00\u6837\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u4E00\u7CFB\u5217\u7684\u5143\u7D20\uFF0C\u4F46\u662F\u94FE\u8868\u548C\u6570\u7EC4\u7684\u5B9E\u73B0\u673A\u5236\u5B8C\u5168\u4E0D\u540C\u3002</p><h4 id="\u6570\u7EC4">\u6570\u7EC4</h4><ul><li><p>\u5B58\u50A8\u591A\u4E2A\u5143\u7D20\uFF0C\u6570\u7EC4\uFF08\u6216\u5217\u8868\uFF09\u53EF\u80FD\u662F\u6700\u5E38\u7528\u7684\u6570\u636E\u7ED3\u6784\u3002</p></li><li><p>\u51E0\u4E4E\u6BCF\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709\u9ED8\u8BA4\u5B9E\u73B0\u6570\u7EC4\u7ED3\u6784\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4FBF\u5229\u7684 <code>[]</code> \u8BED\u6CD5\u6765\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20\u3002</p></li><li><p>\u6570\u7EC4\u7F3A\u70B9\uFF1A</p><p>\u6570\u7EC4\u7684\u521B\u5EFA\u9700\u8981\u7533\u8BF7\u4E00\u6BB5\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4(\u4E00\u6574\u5757\u5185\u5B58)\uFF0C\u5E76\u4E14\u5927\u5C0F\u662F\u56FA\u5B9A\u7684\uFF0C\u5F53\u524D\u6570\u7EC4\u4E0D\u80FD\u6EE1\u8DB3\u5BB9\u91CF\u9700\u6C42\u65F6\uFF0C\u9700\u8981\u6269\u5BB9\u3002 (\u4E00\u822C\u60C5\u51B5\u4E0B\u662F\u7533\u8BF7\u4E00\u4E2A\u66F4\u5927\u7684\u6570\u7EC4\uFF0C\u6BD4\u5982 2 \u500D\uFF0C\u7136\u540E\u5C06\u539F\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u590D\u5236\u8FC7\u53BB)</p><p>\u5728\u6570\u7EC4\u5F00\u5934\u6216\u4E2D\u95F4\u4F4D\u7F6E\u63D2\u5165\u6570\u636E\u7684\u6210\u672C\u5F88\u9AD8\uFF0C\u9700\u8981\u8FDB\u884C\u5927\u91CF\u5143\u7D20\u7684\u4F4D\u79FB\u3002</p></li></ul><h4 id="\u94FE\u8868">\u94FE\u8868</h4><ul><li><p>\u5B58\u50A8\u591A\u4E2A\u5143\u7D20\uFF0C\u53E6\u5916\u4E00\u4E2A\u9009\u62E9\u5C31\u662F\u4F7F\u7528\u94FE\u8868\u3002</p></li><li><p>\u4E0D\u540C\u4E8E\u6570\u7EC4\uFF0C\u94FE\u8868\u4E2D\u7684\u5143\u7D20\u5728\u5185\u5B58\u4E2D\u4E0D\u5FC5\u662F\u8FDE\u7EED\u7684\u7A7A\u95F4\u3002</p></li><li><p>\u94FE\u8868\u7684\u6BCF\u4E2A\u5143\u7D20\u7531\u4E00\u4E2A\u5B58\u50A8\u5143\u7D20\u672C\u8EAB\u7684\u8282\u70B9\u548C\u4E00\u4E2A\u6307\u5411\u4E0B\u4E00\u4E2A\u5143\u7D20\u7684\u5F15\u7528(\u6709\u4E9B\u8BED\u8A00\u79F0\u4E3A\u6307\u9488)\u7EC4\u6210\u3002</p></li><li><p>\u94FE\u8868\u4F18\u70B9\uFF1A</p><p>\u5185\u5B58\u7A7A\u95F4\u4E0D\u5FC5\u662F\u8FDE\u7EED\u7684\uFF0C\u53EF\u4EE5\u5145\u5206\u5229\u7528\u8BA1\u7B97\u673A\u7684\u5185\u5B58\uFF0C\u5B9E\u73B0\u7075\u6D3B\u7684\u5185\u5B58\u52A8\u6001\u7BA1\u7406\u3002</p><p>\u94FE\u8868\u4E0D\u5FC5\u5728\u521B\u5EFA\u65F6\u5C31\u786E\u5B9A\u5927\u5C0F\uFF0C\u5E76\u4E14\u5927\u5C0F\u53EF\u4EE5\u65E0\u9650\u5EF6\u4F38\u4E0B\u53BB\u3002</p><p>\u94FE\u8868\u5728\u63D2\u5165\u548C\u5220\u9664\u6570\u636E\u65F6\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u53EF\u4EE5\u8FBE\u5230 O(1)\uFF0C\u76F8\u5BF9\u6570\u7EC4\u6548\u7387\u9AD8\u5F88\u591A\u3002</p></li><li><p>\u94FE\u8868\u7F3A\u70B9\uFF1A</p><p>\u8BBF\u95EE\u4EFB\u4F55\u4E00\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u65F6\uFF0C\u9700\u8981\u4ECE\u5934\u5F00\u59CB\u8BBF\u95EE\u3002(\u65E0\u6CD5\u8DF3\u8FC7\u7B2C\u4E00\u4E2A\u5143\u7D20\u8BBF\u95EE\u4EFB\u4F55\u4E00\u4E2A\u5143\u7D20)</p><p>\u65E0\u6CD5\u901A\u8FC7\u4E0B\u6807\u503C\u76F4\u63A5\u8BBF\u95EE\u5143\u7D20\uFF0C\u9700\u8981\u4ECE\u5934\u5F00\u59CB\u4E00\u4E2A\u4E2A\u8BBF\u95EE\uFF0C\u76F4\u5230\u627E\u5230\u5BF9\u5E94\u7684\u5143\u7D20\u3002</p><p>\u867D\u7136\u53EF\u4EE5\u8F7B\u677E\u5730\u5230\u8FBE\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F46\u662F\u56DE\u5230\u524D\u4E00\u4E2A\u8282\u70B9\u662F\u5F88\u96BE\u7684\u3002</p></li></ul><h2 id="\u5355\u5411\u94FE\u8868-1">\u5355\u5411\u94FE\u8868</h2><p>\u5355\u5411\u94FE\u8868\u7C7B\u4F3C\u4E8E\u706B\u8F66\uFF0C\u6709\u4E00\u4E2A\u706B\u8F66\u5934\uFF0C\u706B\u8F66\u5934\u4F1A\u8FDE\u63A5\u4E00\u4E2A\u8282\u70B9\uFF0C\u8282\u70B9\u4E0A\u6709\u4E58\u5BA2\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8282\u70B9\u4F1A\u8FDE\u63A5\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><ul><li><p>\u94FE\u8868\u7684\u706B\u8F66\u7ED3\u6784</p><p><img src="https://qn.huat.xyz/mac/20220829103633.png" alt="\u94FE\u8868\u7684\u706B\u8F66\u7ED3\u6784"></p></li><li><p>\u94FE\u8868\u7684\u6570\u636E\u7ED3\u6784</p><p>head \u5C5E\u6027\u6307\u5411\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\u3002<br> \u94FE\u8868\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u6307\u5411 <code>null</code>\u3002 \u5F53\u94FE\u8868\u4E2D\u4E00\u4E2A\u8282\u70B9\u4E5F\u6CA1\u6709\u7684\u65F6\u5019\uFF0Chead \u76F4\u63A5\u6307\u5411 <code>null</code>\u3002</p><p><img src="https://qn.huat.xyz/mac/20220829103753.png" alt="\u94FE\u8868\u7684\u6570\u636E\u7ED3\u6784"></p></li><li><p>\u7ED9\u706B\u8F66\u52A0\u4E0A\u6570\u636E\u540E\u7684\u7ED3\u6784</p><p><img src="https://qn.huat.xyz/mac/20220829103749.png" alt="\u7ED9\u706B\u8F66\u52A0\u4E0A\u6570\u636E\u540E\u7684\u7ED3\u6784"></p></li></ul><h3 id="\u94FE\u8868\u4E2D\u7684\u5E38\u89C1\u64CD\u4F5C">\u94FE\u8868\u4E2D\u7684\u5E38\u89C1\u64CD\u4F5C</h3><ul><li><code>append(element)</code> \u5411\u94FE\u8868\u5C3E\u90E8\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u9879\u3002</li><li><code>insert(position, element)</code> \u5411\u94FE\u8868\u7684\u7279\u5B9A\u4F4D\u7F6E\u63D2\u5165\u4E00\u4E2A\u65B0\u7684\u9879\u3002</li><li><code>get(position)</code> \u83B7\u53D6\u5BF9\u5E94\u4F4D\u7F6E\u7684\u5143\u7D20\u3002</li><li><code>indexOf(element)</code> \u8FD4\u56DE\u5143\u7D20\u5728\u94FE\u8868\u4E2D\u7684\u7D22\u5F15\u3002\u5982\u679C\u94FE\u8868\u4E2D\u6CA1\u6709\u8BE5\u5143\u7D20\u5C31\u8FD4\u56DE-1\u3002</li><li><code>update(position, element)</code> \u4FEE\u6539\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5143\u7D20\u3002</li><li><code>removeAt(position)</code> \u4ECE\u94FE\u8868\u7684\u7279\u5B9A\u4F4D\u7F6E\u79FB\u9664\u4E00\u9879\u3002</li><li><code>remove(element)</code> \u4ECE\u94FE\u8868\u4E2D\u79FB\u9664\u4E00\u9879\u3002</li><li><code>isEmpty()</code> \u5982\u679C\u94FE\u8868\u4E2D\u4E0D\u5305\u542B\u4EFB\u4F55\u5143\u7D20\uFF0C\u8FD4\u56DE trun\uFF0C\u5982\u679C\u94FE\u8868\u957F\u5EA6\u5927\u4E8E 0 \u5219\u8FD4\u56DE false\u3002</li><li><code>size()</code> \u8FD4\u56DE\u94FE\u8868\u5305\u542B\u7684\u5143\u7D20\u4E2A\u6570\uFF0C\u4E0E\u6570\u7EC4\u7684 length \u5C5E\u6027\u7C7B\u4F3C\u3002</li><li><code>toString()</code> \u7531\u4E8E\u94FE\u8868\u9879\u4F7F\u7528\u4E86 Node \u7C7B\uFF0C\u5C31\u9700\u8981\u91CD\u5199\u7EE7\u627F\u81EA JavaScript \u5BF9\u8C61\u9ED8\u8BA4\u7684 toString \u65B9\u6CD5\uFF0C\u8BA9\u5176\u53EA\u8F93\u51FA\u5143\u7D20\u7684\u503C\u3002</li></ul><h3 id="\u5355\u5411\u94FE\u8868\u7684\u5C01\u88C5">\u5355\u5411\u94FE\u8868\u7684\u5C01\u88C5</h3><h4 id="\u521B\u5EFA\u5355\u5411\u94FE\u8868\u7C7B">\u521B\u5EFA\u5355\u5411\u94FE\u8868\u7C7B</h4><p>\u5148\u521B\u5EFA\u5355\u5411\u94FE\u8868\u7C7B LinkedList\uFF0C\u6DFB\u52A0\u57FA\u672C\u5C5E\u6027\uFF0C\u518D\u9010\u6B65\u5B9E\u73B0\u5355\u5411\u94FE\u8868\u7684\u5E38\u7528\u65B9\u6CD5\u3002</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u94FE\u8868\u957F\u5EA6\u4E3A 0</span>
  length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// \u521D\u59CB head \u4E3A null\uFF0Chead \u6307\u5411\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9</span>
  head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5185\u90E8\u7C7B\uFF08\u94FE\u8868\u91CC\u7684\u8282\u70B9 Node\uFF09</span>
  Node <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">;</span>
    next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u5B9E\u73B0-append-\u65B9\u6CD5">\u5B9E\u73B0 append() \u65B9\u6CD5</h4><h5 id="\u4EE3\u7801\u5B9E\u73B0">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token comment">// append() \u5F80\u94FE\u8868\u5C3E\u90E8\u8FFD\u52A0\u6570\u636E</span>
<span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 1\u3001\u521B\u5EFA\u65B0\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">this<span class="token punctuation">.</span>Node</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u8FFD\u52A0\u65B0\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u94FE\u8868\u957F\u5EA6\u4E3A 0 \u65F6\uFF0C\u5373\u53EA\u6709 head \u7684\u65F6\u5019</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u94FE\u8868\u957F\u5EA6\u5927\u4E8E 0 \u65F6\uFF0C\u5728\u6700\u540E\u9762\u6DFB\u52A0\u65B0\u8282\u70B9</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token comment">// \u5F53 currentNode.next \u4E0D\u4E3A\u7A7A\u65F6\uFF0C</span>
    <span class="token comment">// \u5FAA\u5E8F\u4F9D\u6B21\u627E\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF0C\u5373\u8282\u70B9\u7684 next \u4E3A null \u65F6</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684 next \u6307\u5411\u65B0\u8282\u70B9</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u8FFD\u52A0\u5B8C\u65B0\u8282\u70B9\u540E\uFF0C\u94FE\u8868\u957F\u5EA6 + 1</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u8FC7\u7A0B\u56FE\u89E3">\u8FC7\u7A0B\u56FE\u89E3</h5><ul><li><p>\u9996\u5148\u8BA9 <code>currentNode</code> \u6307\u5411\u7B2C\u4E00\u4E2A\u8282\u70B9\u3002</p><p><img src="https://qn.huat.xyz/mac/20220829103804.png" alt="image"></p></li><li><p>\u901A\u8FC7 <code>while</code> \u5FAA\u73AF\u4F7F <code>currentNode</code> \u6307\u5411\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF0C\u6700\u540E\u901A\u8FC7 <code>currentNode.next = newNode</code>\uFF0C\u8BA9\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u6307\u5411\u65B0\u8282\u70B9 <code>newNode</code>\u3002</p><p><img src="https://qn.huat.xyz/mac/20220829103809.png" alt="image"></p></li></ul><h5 id="\u4EE3\u7801\u6D4B\u8BD5">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token keyword">const</span> linkedList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6D4B\u8BD5 append \u65B9\u6CD5</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><img src="https://qn.huat.xyz/mac/20220829103815.png" alt="image"></p><h4 id="\u5B9E\u73B0-tostring-\u65B9\u6CD5">\u5B9E\u73B0 toString() \u65B9\u6CD5</h4><h5 id="\u4EE3\u7801\u5B9E\u73B0-1">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u7684\u8282\u70B9\uFF0C\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">;</span>
    currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u4EE3\u7801\u6D4B\u8BD5-1">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token comment">// \u6D4B\u8BD5 toString \u65B9\u6CD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; AA BB CC</span>
</code></pre></div><h4 id="\u5B9E\u73B0-insert-\u65B9\u6CD5">\u5B9E\u73B0 insert() \u65B9\u6CD5</h4><h5 id="\u4EE3\u7801\u5B9E\u73B0-2">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token comment">// insert() \u5728\u6307\u5B9A\u4F4D\u7F6E\uFF08position\uFF09\u63D2\u5165\u8282\u70B9</span>
<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// position \u65B0\u63D2\u5165\u8282\u70B9\u7684\u4F4D\u7F6E</span>
    <span class="token comment">// position = 0 \u8868\u793A\u65B0\u63D2\u5165\u540E\u662F\u7B2C\u4E00\u4E2A\u8282\u70B9</span>
    <span class="token comment">// position = 1 \u8868\u793A\u65B0\u63D2\u5165\u540E\u662F\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u4EE5\u6B64\u7C7B\u63A8</span>

    <span class="token comment">// 1\u3001\u5BF9 position \u8FDB\u884C\u8D8A\u754C\u5224\u65AD\uFF0C\u4E0D\u80FD\u5C0F\u4E8E 0 \u6216\u5927\u4E8E\u94FE\u8868\u957F\u5EA6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u521B\u5EFA\u65B0\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">this<span class="token punctuation">.</span>Node</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3\u3001\u63D2\u5165\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// position = 0 \u7684\u60C5\u51B5</span>
    <span class="token comment">// \u8BA9\u65B0\u8282\u70B9\u7684 next \u6307\u5411 \u539F\u6765\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF0C\u5373 head</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

    <span class="token comment">// head \u8D4B\u503C\u4E3A newNode</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 0 &lt; position &lt;= length \u7684\u60C5\u51B5</span>

    <span class="token comment">// \u521D\u59CB\u5316\u4E00\u4E9B\u53D8\u91CF</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u8282\u70B9\u521D\u59CB\u5316\u4E3A head</span>
    <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// head \u7684 \u4E0A\u4E00\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// head \u7684 index \u4E3A 0</span>

    <span class="token comment">// \u5728 0 ~ position \u4E4B\u95F4\u904D\u5386\uFF0C\u4E0D\u65AD\u5730\u66F4\u65B0 currentNode \u548C previousNode</span>
    <span class="token comment">// \u76F4\u5230\u627E\u5230\u8981\u63D2\u5165\u7684\u4F4D\u7F6E</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5728\u5F53\u524D\u8282\u70B9\u548C\u5F53\u524D\u8282\u70B9\u7684\u4E0A\u4E00\u8282\u70B9\u4E4B\u95F4\u63D2\u5165\u65B0\u8282\u70B9\uFF0C\u5373\u5B83\u4EEC\u7684\u6539\u53D8\u6307\u5411</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
    previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u66F4\u65B0\u94FE\u8868\u957F\u5EA6</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u4EE3\u7801\u6D4B\u8BD5-2">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token comment">// \u6D4B\u8BD5 insert \u65B9\u6CD5</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
linkedList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 123 AA 456 BB CC</span>
</code></pre></div><h4 id="\u5B9E\u73B0-getdata-\u65B9\u6CD5">\u5B9E\u73B0 getData() \u65B9\u6CD5</h4><p>\u83B7\u53D6\u6307\u5B9A\u4F4D\u7F6E\uFF08position\uFF09\u7684 data\u3002</p><h5 id="\u4EE3\u7801\u5B9E\u73B0-3">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u83B7\u53D6\u6307\u5B9A position \u8282\u70B9\u7684 data</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3\u3001\u8FD4\u56DE data</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u4EE3\u7801\u6D4B\u8BD5-3">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token comment">// \u6D4B\u8BD5 getData \u65B9\u6CD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; AA</span>
</code></pre></div><h4 id="\u5B9E\u73B0-indexof-\u65B9\u6CD5">\u5B9E\u73B0 indexOf() \u65B9\u6CD5</h4><p>indexOf(data) \u8FD4\u56DE\u6307\u5B9A data \u7684 index\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u8FD4\u56DE -1\u3002</p><h5 id="\u4EE3\u7801\u5B9E\u73B0-4">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>data <span class="token operator">===</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    index<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u4EE3\u7801\u6D4B\u8BD5-4">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token comment">// \u6D4B\u8BD5 indexOf \u65B9\u6CD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;AA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;ABC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; -1</span>
</code></pre></div><h4 id="\u5B9E\u73B0-update-\u65B9\u6CD5">\u5B9E\u73B0 update() \u65B9\u6CD5</h4><p>update(position, data) \u4FEE\u6539\u6307\u5B9A\u4F4D\u7F6E\u8282\u70B9\u7684 data\u3002</p><h5 id="\u4EE3\u7801\u5B9E\u73B0-5">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6D89\u53CA\u5230 position \u90FD\u8981\u8FDB\u884C\u8D8A\u754C\u5224\u65AD</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u75DB\u8FC7\u5FAA\u73AF\u904D\u5386\uFF0C\u627E\u5230\u6307\u5B9A position \u7684\u8282\u70B9</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u4FEE\u6539\u8282\u70B9 data</span>
    currentNode<span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>

    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u4EE3\u7801\u6D4B\u8BD5-5">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token comment">// \u6D4B\u8BD5 update \u65B9\u6CD5</span>
linkedList<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 12345 AA 456 BB CC</span>
linkedList<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;54321&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 12345 54321 456 BB CC</span>
</code></pre></div><h4 id="\u5B9E\u73B0-removeat-\u65B9\u6CD5">\u5B9E\u73B0 removeAt() \u65B9\u6CD5</h4><p>removeAt(position) \u5220\u9664\u6307\u5B9A\u4F4D\u7F6E\u7684\u8282\u70B9\u3002</p><h5 id="\u4EE3\u7801\u5B9E\u73B0-6">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u5220\u9664\u6307\u5B9A position \u8282\u70B9</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// position = 0 \u7684\u60C5\u51B5</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// position &gt; 0 \u7684\u60C5\u51B5</span>
    <span class="token comment">// \u901A\u8FC7\u5FAA\u73AF\u904D\u5386\uFF0C\u627E\u5230\u6307\u5B9A position \u7684\u8282\u70B9\uFF0C\u8D4B\u503C\u5230 currentNode</span>

    <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5DE7\u5999\u4E4B\u5904\uFF0C\u8BA9\u4E0A\u4E00\u8282\u70B9\u7684 next \u6307\u5411\u5230\u5F53\u524D\u7684\u8282\u70B9\u7684 next\uFF0C\u76F8\u5F53\u4E8E\u5220\u9664\u4E86\u5F53\u524D\u8282\u70B9\u3002</span>
    previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u66F4\u65B0\u94FE\u8868\u957F\u5EA6 -1</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u4EE3\u7801\u6D4B\u8BD5-6">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token comment">// \u6D4B\u8BD5 removeAt \u65B9\u6CD5</span>
linkedList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 12345 54321 456 CC</span>
</code></pre></div><h4 id="\u5B9E\u73B0-remove-\u65B9\u6CD5">\u5B9E\u73B0 remove() \u65B9\u6CD5</h4><p>remove(data) \u5220\u9664\u6307\u5B9A data \u6240\u5728\u7684\u8282\u70B9\u3002</p><h5 id="\u4EE3\u7801\u5B9E\u73B0-7">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u4EE3\u7801\u6D4B\u8BD5-7">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token comment">// \u6D4B\u8BD5 remove \u65B9\u6CD5</span>
linkedList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;CC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 12345 54321 456</span>
</code></pre></div><h4 id="\u5B9E\u73B0-isempty-\u65B9\u6CD5">\u5B9E\u73B0 isEmpty() \u65B9\u6CD5</h4><p>isEmpty() \u5224\u65AD\u94FE\u8868\u662F\u5426\u4E3A\u7A7A\u3002</p><h5 id="\u4EE3\u7801\u5B9E\u73B0-8">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u4EE3\u7801\u6D4B\u8BD5-8">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token comment">// \u6D4B\u8BD5 isEmpty \u65B9\u6CD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; false</span>
</code></pre></div><h4 id="\u5B9E\u73B0-size-\u65B9\u6CD5">\u5B9E\u73B0 size() \u65B9\u6CD5</h4><p>size() \u83B7\u53D6\u94FE\u8868\u7684\u957F\u5EA6\u3002</p><h5 id="\u4EE3\u7801\u5B9E\u73B0-9">\u4EE3\u7801\u5B9E\u73B0</h5><div class="language-js"><pre><code><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="\u4EE3\u7801\u6D4B\u8BD5-9">\u4EE3\u7801\u6D4B\u8BD5</h5><div class="language-js"><pre><code><span class="token comment">// \u6D4B\u8BD5 size \u65B9\u6CD5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>linkedList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 3</span>
</code></pre></div><h4 id="\u5B8C\u6574\u5B9E\u73B0">\u5B8C\u6574\u5B9E\u73B0</h4><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u94FE\u8868\u957F\u5EA6\u4E3A 0</span>
  length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// \u521D\u59CB head \u4E3A null\uFF0Chead \u6307\u5411\u94FE\u8868\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9</span>
  head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5185\u90E8\u7C7B\uFF08\u94FE\u8868\u91CC\u7684\u8282\u70B9 Node\uFF09</span>
  Node <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">;</span>
    next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// ------------ \u94FE\u8868\u7684\u5E38\u89C1\u64CD\u4F5C ------------ //</span>

  <span class="token comment">// append() \u5F80\u94FE\u8868\u5C3E\u90E8\u8FFD\u52A0\u6570\u636E</span>
  <span class="token function">append</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001\u521B\u5EFA\u65B0\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">this<span class="token punctuation">.</span>Node</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u8FFD\u52A0\u65B0\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u94FE\u8868\u957F\u5EA6\u4E3A 0 \u65F6\uFF0C\u5373\u53EA\u6709 head \u7684\u65F6\u5019</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u94FE\u8868\u957F\u5EA6\u5927\u4E8E 0 \u65F6\uFF0C\u5728\u6700\u540E\u9762\u6DFB\u52A0\u65B0\u8282\u70B9</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

      <span class="token comment">// \u5F53 currentNode.next \u4E0D\u4E3A\u7A7A\u65F6\uFF0C</span>
      <span class="token comment">// \u5FAA\u5E8F\u4F9D\u6B21\u627E\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF0C\u5373\u8282\u70B9\u7684 next \u4E3A null \u65F6</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u8282\u70B9\u7684 next \u6307\u5411\u65B0\u8282\u70B9</span>
      currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u8FFD\u52A0\u5B8C\u65B0\u8282\u70B9\u540E\uFF0C\u94FE\u8868\u957F\u5EA6 + 1</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// insert() \u5728\u6307\u5B9A\u4F4D\u7F6E\uFF08position\uFF09\u63D2\u5165\u8282\u70B9</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// position \u65B0\u63D2\u5165\u8282\u70B9\u7684\u4F4D\u7F6E</span>
    <span class="token comment">// position = 0 \u8868\u793A\u65B0\u63D2\u5165\u540E\u662F\u7B2C\u4E00\u4E2A\u8282\u70B9</span>
    <span class="token comment">// position = 1 \u8868\u793A\u65B0\u63D2\u5165\u540E\u662F\u7B2C\u4E8C\u4E2A\u8282\u70B9\uFF0C\u4EE5\u6B64\u7C7B\u63A8</span>

    <span class="token comment">// 1\u3001\u5BF9 position \u8FDB\u884C\u8D8A\u754C\u5224\u65AD\uFF0C\u4E0D\u80FD\u5C0F\u4E8E 0 \u6216\u5927\u4E8E\u94FE\u8868\u957F\u5EA6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u521B\u5EFA\u65B0\u8282\u70B9</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">this<span class="token punctuation">.</span>Node</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3\u3001\u63D2\u5165\u8282\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// position = 0 \u7684\u60C5\u51B5</span>
      <span class="token comment">// \u8BA9\u65B0\u8282\u70B9\u7684 next \u6307\u5411 \u539F\u6765\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF0C\u5373 head</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>

      <span class="token comment">// head \u8D4B\u503C\u4E3A newNode</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 0 &lt; position &lt;= length \u7684\u60C5\u51B5</span>

      <span class="token comment">// \u521D\u59CB\u5316\u4E00\u4E9B\u53D8\u91CF</span>
      <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u8282\u70B9\u521D\u59CB\u5316\u4E3A head</span>
      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// head \u7684 \u4E0A\u4E00\u8282\u70B9\u4E3A null</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// head \u7684 index \u4E3A 0</span>

      <span class="token comment">// \u5728 0 ~ position \u4E4B\u95F4\u904D\u5386\uFF0C\u4E0D\u65AD\u5730\u66F4\u65B0 currentNode \u548C previousNode</span>
      <span class="token comment">// \u76F4\u5230\u627E\u5230\u8981\u63D2\u5165\u7684\u4F4D\u7F6E</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u5728\u5F53\u524D\u8282\u70B9\u548C\u5F53\u524D\u8282\u70B9\u7684\u4E0A\u4E00\u8282\u70B9\u4E4B\u95F4\u63D2\u5165\u65B0\u8282\u70B9\uFF0C\u5373\u5B83\u4EEC\u7684\u6539\u53D8\u6307\u5411</span>
      newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u66F4\u65B0\u94FE\u8868\u957F\u5EA6</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// getData() \u83B7\u53D6\u6307\u5B9A\u4F4D\u7F6E\u7684 data</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u83B7\u53D6\u6307\u5B9A position \u8282\u70B9\u7684 data</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u8FD4\u56DE data</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// indexOf() \u8FD4\u56DE\u6307\u5B9A data \u7684 index\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u8FD4\u56DE -1\u3002</span>
  <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">.</span>data <span class="token operator">===</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      index<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// update() \u4FEE\u6539\u6307\u5B9A\u4F4D\u7F6E\u8282\u70B9\u7684 data</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">position<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6D89\u53CA\u5230 position \u90FD\u8981\u8FDB\u884C\u8D8A\u754C\u5224\u65AD</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u75DB\u8FC7\u5FAA\u73AF\u904D\u5386\uFF0C\u627E\u5230\u6307\u5B9A position \u7684\u8282\u70B9</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u4FEE\u6539\u8282\u70B9 data</span>
    currentNode<span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>

    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// removeAt() \u5220\u9664\u6307\u5B9A\u4F4D\u7F6E\u7684\u8282\u70B9</span>
  <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1\u3001position \u8D8A\u754C\u5224\u65AD</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> position <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 2\u3001\u5220\u9664\u6307\u5B9A position \u8282\u70B9</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// position = 0 \u7684\u60C5\u51B5</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// position &gt; 0 \u7684\u60C5\u51B5</span>
      <span class="token comment">// \u901A\u8FC7\u5FAA\u73AF\u904D\u5386\uFF0C\u627E\u5230\u6307\u5B9A position \u7684\u8282\u70B9\uFF0C\u8D4B\u503C\u5230 currentNode</span>

      <span class="token keyword">let</span> previousNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>index<span class="token operator">++</span> <span class="token operator">&lt;</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        previousNode <span class="token operator">=</span> currentNode<span class="token punctuation">;</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u5DE7\u5999\u4E4B\u5904\uFF0C\u8BA9\u4E0A\u4E00\u8282\u70B9\u7684 next \u6307\u5411\u5230\u5F53\u524D\u7684\u8282\u70B9\u7684 next\uFF0C\u76F8\u5F53\u4E8E\u5220\u9664\u4E86\u5F53\u524D\u8282\u70B9\u3002</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3\u3001\u66F4\u65B0\u94FE\u8868\u957F\u5EA6 -1</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// remove() \u5220\u9664\u6307\u5B9A data \u7684\u8282\u70B9</span>
  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// isEmpty() \u5224\u65AD\u94FE\u8868\u662F\u5426\u4E3A\u7A7A</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// size() \u83B7\u53D6\u94FE\u8868\u7684\u957F\u5EA6</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// toString() \u94FE\u8868\u6570\u636E\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u8FD4\u56DE</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u7684\u8282\u70B9\uFF0C\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u5230\u8282\u70B9\u4E3A null</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> currentNode<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,79),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var w=n(p,[["render",c]]);export{h as __pageData,w as default};
