import{_ as e,e as o,o as t,Q as a}from"./plugin-vue_export-helper.8dc630d2.js";const g='{"title":"\u5982\u4F55\u907F\u514D\u91CD\u7ED8\u6216\u8005\u91CD\u6392\uFF1F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5982\u4F55\u907F\u514D\u91CD\u7ED8\u6216\u8005\u91CD\u6392\uFF1F","slug":"\u5982\u4F55\u907F\u514D\u91CD\u7ED8\u6216\u8005\u91CD\u6392\uFF1F"}],"relativePath":"guide/browser/5.\u5982\u4F55\u907F\u514D\u91CD\u7ED8\u6216\u8005\u91CD\u6392.md","lastUpdated":1672831176992}',n={},l=a(`<h3 id="\u5982\u4F55\u907F\u514D\u91CD\u7ED8\u6216\u8005\u91CD\u6392\uFF1F">\u5982\u4F55\u907F\u514D\u91CD\u7ED8\u6216\u8005\u91CD\u6392\uFF1F</h3><ol><li><p><code>\u96C6\u4E2D\u6539\u53D8\u6837\u5F0F</code>\uFF0C\u4E0D\u8981\u4E00\u6761\u4E00\u6761\u5730\u4FEE\u6539 DOM \u7684\u6837\u5F0F\u3002</p></li><li><p>\u4E0D\u8981\u628A DOM \u7ED3\u70B9\u7684\u5C5E\u6027\u503C\u653E\u5728\u5FAA\u73AF\u91CC\u5F53\u6210\u5FAA\u73AF\u91CC\u7684\u53D8\u91CF\u3002</p></li><li><p>\u4E3A\u52A8\u753B\u7684 HTML \u5143\u4EF6\u4F7F\u7528 <code>fixed</code> \u6216 <code>absoult</code> \u7684 <code>position</code>\uFF0C\u90A3\u4E48\u4FEE\u6539\u4ED6\u4EEC\u7684 CSS \u662F\u4E0D\u4F1A reflow \u7684\u3002</p></li><li><p>\u4E0D\u4F7F\u7528 table \u5E03\u5C40\u3002\u56E0\u4E3A\u53EF\u80FD\u5F88\u5C0F\u7684\u4E00\u4E2A\u5C0F\u6539\u52A8\u4F1A\u9020\u6210\u6574\u4E2A table \u7684\u91CD\u65B0\u5E03\u5C40\u3002</p></li><li><p>\u5C3D\u91CF\u53EA\u4FEE\u6539<code>position\uFF1Aabsolute</code>\u6216<code>fixed</code>\u5143\u7D20\uFF0C\u5BF9\u5176\u4ED6\u5143\u7D20\u5F71\u54CD\u4E0D\u5927</p></li><li><p>\u52A8\u753B\u5F00\u59CB<code>GPU</code>\u52A0\u901F\uFF0C<code>translate</code>\u4F7F\u7528<code>3D</code>\u53D8\u5316</p></li><li><p>\u63D0\u5347\u4E3A\u5408\u6210\u5C42</p><p>\u5C06\u5143\u7D20\u63D0\u5347\u4E3A\u5408\u6210\u5C42\u6709\u4EE5\u4E0B\u4F18\u70B9\uFF1A</p><ul><li>\u5408\u6210\u5C42\u7684\u4F4D\u56FE\uFF0C\u4F1A\u4EA4\u7531 GPU \u5408\u6210\uFF0C\u6BD4 CPU \u5904\u7406\u8981\u5FEB</li><li>\u5F53\u9700\u8981 repaint \u65F6\uFF0C\u53EA\u9700\u8981 repaint \u672C\u8EAB\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u7684\u5C42</li><li>\u5BF9\u4E8E transform \u548C opacity \u6548\u679C\uFF0C\u4E0D\u4F1A\u89E6\u53D1 layout \u548C paint</li></ul><p>\u63D0\u5347\u5408\u6210\u5C42\u7684\u6700\u597D\u65B9\u5F0F\u662F\u4F7F\u7528 CSS \u7684 will-change \u5C5E\u6027\uFF1A</p></li></ol><div class="language-css"><pre><code><span class="token selector">#target</span> <span class="token punctuation">{</span>
  <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u5173\u4E8E\u5408\u6210\u5C42\u7684\u8BE6\u89E3\u8BF7\u79FB\u6B65<a href="https://link.juejin.cn/?target=http%3A%2F%2Ftaobaofed.org%2Fblog%2F2016%2F04%2F25%2Fperformance-composite%2F" target="_blank" rel="noopener noreferrer">\u65E0\u7EBF\u6027\u80FD\u4F18\u5316\uFF1AComposite</a></p></blockquote>`,4),p=[l];function s(c,i,r,d,_,u){return t(),o("div",null,p)}var h=e(n,[["render",s]]);export{g as __pageData,h as default};
