import{_ as n,e as s,o as a,Q as p}from"./plugin-vue_export-helper.8dc630d2.js";const N='{"title":"JS \u53CD\u8F6C\u5355\u5411\u94FE\u8868","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"},{"level":3,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5"}],"relativePath":"algorithm/linkList/JS\u53CD\u8F6C\u5355\u5411\u94FE\u8868.md","lastUpdated":1672908831843}',t={},o=p(`__VP_STATIC_START__<h1 id="js-\u53CD\u8F6C\u5355\u5411\u94FE\u8868">JS \u53CD\u8F6C\u5355\u5411\u94FE\u8868</h1><h3 id="\u4EE3\u7801">\u4EE3\u7801</h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ILinkListNode</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span>
  next<span class="token operator">?</span><span class="token operator">:</span> ILinkListNode
<span class="token punctuation">}</span>
</code></pre></div><p>1\u3001\u521B\u5EFA\u94FE\u8868</p><div class="language-ts"><pre><code><span class="token comment">/**
 * \u6839\u636E\u6570\u7EC4\u521B\u5EFA\u5355\u5411\u94FE\u8868
 * @param arr number arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> ILinkListNode <span class="token punctuation">{</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;arr is empty&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">let</span> curNode<span class="token operator">:</span> ILinkListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> arr<span class="token punctuation">[</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> curNode

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    curNode <span class="token operator">=</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>
      next<span class="token operator">:</span> curNode<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> curNode
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;list:&#39;</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span>
</code></pre></div><p>2\u3001\u53CD\u8F6C\u94FE\u8868</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>listNode<span class="token operator">:</span> ILinkListNode<span class="token punctuation">)</span><span class="token operator">:</span> ILinkListNode <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9A\u4E49\u4E09\u4E2A\u6307\u9488</span>
  <span class="token keyword">let</span> prevNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token keyword">let</span> curNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token keyword">let</span> nextNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> listNode

  <span class="token comment">// \u4EE5 nextNode \u4E3A\u4E3B\uFF0C\u904D\u5386\u94FE\u8868</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u5220\u6389 next \uFF0C\u9632\u6B62\u5FAA\u73AF\u5F15\u7528</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">delete</span> curNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>

    <span class="token comment">// \u53CD\u8F6C\u6307\u9488</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">&amp;&amp;</span> prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6574\u4F53\u5411\u540E\u79FB\u52A8\u6307\u9488</span>
    prevNode <span class="token operator">=</span> curNode
    curNode <span class="token operator">=</span> nextNode
    nextNode <span class="token operator">=</span> nextNode<span class="token operator">?.</span>next
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u7684\u8865\u5145\uFF1A\u5F53 nextNode \u7A7A\u65F6\uFF0C\u6B64\u65F6 curNode \u5C1A\u672A\u8BBE\u7F6E next</span>
  curNode<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode

  <span class="token keyword">return</span> curNode<span class="token operator">!</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> list1 <span class="token operator">=</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;list1:&#39;</span><span class="token punctuation">,</span> list1<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u6D4B\u8BD5">\u6D4B\u8BD5</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ILinkListNode<span class="token punctuation">,</span>
  reverseLinkList<span class="token punctuation">,</span>
  createLinkList<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./reverse-link-list&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;\u53CD\u8F6C\u5355\u5411\u94FE\u8868&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;\u5355\u4E2A\u5143\u7D20&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node<span class="token operator">:</span> ILinkListNode <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span>
    <span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;\u591A\u4E2A\u5143\u7D20&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      next<span class="token operator">:</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        next<span class="token operator">:</span> <span class="token punctuation">{</span>
          value<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,9),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{N as __pageData,w as default};
