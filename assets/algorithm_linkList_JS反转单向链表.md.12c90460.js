import{o as n,c as s,b as a}from"./app.157864df.js";const p='{"title":"JS 反转单向链表","description":"","frontmatter":{},"headers":[{"level":3,"title":"代码","slug":"代码"},{"level":3,"title":"测试","slug":"测试"}],"relativePath":"algorithm/linkList/JS反转单向链表.md","lastUpdated":1662083353131}',t={},o=[a('<h1 id="js-反转单向链表">JS 反转单向链表</h1><h3 id="代码">代码</h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ILinkListNode</span> <span class="token punctuation">{</span>\n  value<span class="token operator">:</span> <span class="token builtin">number</span>\n  next<span class="token operator">?</span><span class="token operator">:</span> ILinkListNode\n<span class="token punctuation">}</span>\n</code></pre></div><p>1、创建链表</p><div class="language-ts"><pre><code><span class="token comment">/**\n * 根据数组创建单向链表\n * @param arr number arr\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> ILinkListNode <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;arr is empty&#39;</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">let</span> curNode<span class="token operator">:</span> ILinkListNode <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token operator">:</span> arr<span class="token punctuation">[</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> curNode\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    curNode <span class="token operator">=</span> <span class="token punctuation">{</span>\n      value<span class="token operator">:</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>\n      next<span class="token operator">:</span> curNode<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> curNode\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span>\n<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;list:&#39;</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span>\n</code></pre></div><p>2、反转链表</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>listNode<span class="token operator">:</span> ILinkListNode<span class="token punctuation">)</span><span class="token operator">:</span> ILinkListNode <span class="token punctuation">{</span>\n  <span class="token comment">// 定义三个指针</span>\n  <span class="token keyword">let</span> prevNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>\n  <span class="token keyword">let</span> curNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>\n  <span class="token keyword">let</span> nextNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> listNode\n\n  <span class="token comment">// 以 nextNode 为主，遍历链表</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 第一个元素，删掉 next ，防止循环引用</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">delete</span> curNode<span class="token punctuation">.</span>next\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 反转指针</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">&amp;&amp;</span> prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 整体向后移动指针</span>\n    prevNode <span class="token operator">=</span> curNode\n    curNode <span class="token operator">=</span> nextNode\n    nextNode <span class="token operator">=</span> nextNode<span class="token operator">?.</span>next\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 最后一个的补充：当 nextNode 空时，此时 curNode 尚未设置 next</span>\n  curNode<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode\n\n  <span class="token keyword">return</span> curNode<span class="token operator">!</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> list1 <span class="token operator">=</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;list1:&#39;</span><span class="token punctuation">,</span> list1<span class="token punctuation">)</span>\n</code></pre></div><h3 id="测试">测试</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  ILinkListNode<span class="token punctuation">,</span>\n  reverseLinkList<span class="token punctuation">,</span>\n  createLinkList<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./reverse-link-list&#39;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;反转单向链表&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;单个元素&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> node<span class="token operator">:</span> ILinkListNode <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span>\n    <span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;多个元素&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> node1 <span class="token operator">=</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>node1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n      next<span class="token operator">:</span> <span class="token punctuation">{</span>\n        value<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n        next<span class="token operator">:</span> <span class="token punctuation">{</span>\n          value<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div>',9)];t.render=function(a,p,t,e,c,l){return n(),s("div",null,o)};export default t;export{p as __pageData};
