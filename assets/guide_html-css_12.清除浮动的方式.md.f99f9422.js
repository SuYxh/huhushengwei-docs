import{_ as a,e as n,o as s,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const g='{"title":"\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F","slug":"\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F"}],"relativePath":"guide/html-css/12.\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F.md","lastUpdated":1681784316386}',e={},p=t(`<h3 id="\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F">\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F</h3><ul><li>\u6DFB\u52A0\u989D\u5916\u6807\u7B7E</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    //\u6DFB\u52A0\u989D\u5916\u6807\u7B7E\u5E76\u4E14\u6DFB\u52A0clear\u5C5E\u6027
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">clear</span><span class="token punctuation">:</span>both</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    //\u4E5F\u53EF\u4EE5\u52A0\u4E00\u4E2Abr\u6807\u7B7E
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>\u7236\u7EA7\u6DFB\u52A0overflow\u5C5E\u6027\uFF0C\u6216\u8005\u8BBE\u7F6E\u9AD8\u5EA6</li><li>\u5EFA\u7ACB\u4F2A\u7C7B\u9009\u62E9\u5668\u6E05\u9664\u6D6E\u52A8</li></ul><div class="language-html"><pre><code>//\u5728css\u4E2D\u6DFB\u52A0:after\u4F2A\u5143\u7D20
.parent:after{
    /* \u8BBE\u7F6E\u6DFB\u52A0\u5B50\u5143\u7D20\u7684\u5185\u5BB9\u662F\u7A7A */
    content: &#39;&#39;;
    /* \u8BBE\u7F6E\u6DFB\u52A0\u5B50\u5143\u7D20\u4E3A\u5757\u7EA7\u5143\u7D20 */
    display: block;
    /* \u8BBE\u7F6E\u6DFB\u52A0\u7684\u5B50\u5143\u7D20\u7684\u9AD8\u5EA60 */
    height: 0;
    /* \u8BBE\u7F6E\u6DFB\u52A0\u5B50\u5143\u7D20\u770B\u4E0D\u89C1 */
    visibility: hidden;
    /* \u8BBE\u7F6Eclear\uFF1Aboth */
    clear: both;
}
</code></pre></div>`,5),o=[p];function l(c,u,i,r,_,k){return s(),n("div",null,o)}var v=a(e,[["render",l]]);export{g as __pageData,v as default};
