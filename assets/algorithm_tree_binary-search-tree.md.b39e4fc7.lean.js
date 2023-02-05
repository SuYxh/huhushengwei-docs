import{_ as n,e as s,o as a,Q as p}from"./plugin-vue_export-helper.8dc630d2.js";const _='{"title":"\u5BFB\u627E BST \u91CC\u7684\u7B2C K \u5C0F\u503C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BFB\u627E BST \u91CC\u7684\u7B2C K \u5C0F\u503C","slug":"\u5BFB\u627E-bst-\u91CC\u7684\u7B2C-k-\u5C0F\u503C"},{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"}],"relativePath":"algorithm/tree/binary-search-tree.md","lastUpdated":1675610981935}',t={},o=p(`__VP_STATIC_START__<h2 id="\u5BFB\u627E-bst-\u91CC\u7684\u7B2C-k-\u5C0F\u503C">\u5BFB\u627E BST \u91CC\u7684\u7B2C K \u5C0F\u503C</h2><h3 id="\u601D\u8DEF">\u601D\u8DEF</h3><p>\u4F7F\u7528\u4E2D\u5E8F\u904D\u5386\u5373\u53EF\u5F97\u5230\u6709\u5E8F\u6570\u7EC4\uFF0C\u7136\u540E\u53D6\u51FA\u7B2C k-1 \u7684\u503C</p><h3 id="\u4EE3\u7801">\u4EE3\u7801</h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span>
  left<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
  right<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
  <span class="token comment">// console.log(node.value)</span>
  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bst<span class="token operator">:</span> ITreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  left<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    left<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  right<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    left<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      right<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getKthValue</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode<span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getKthValue</span><span class="token punctuation">(</span>bst<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,5),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var h=n(t,[["render",c]]);export{_ as __pageData,h as default};
