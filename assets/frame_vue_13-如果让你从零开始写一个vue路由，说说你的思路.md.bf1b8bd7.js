import{_ as e,e as t,o as r,Q as l}from"./plugin-vue_export-helper.8dc630d2.js";const v='{"title":"13-\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avue\u8DEF\u7531\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF","description":"","frontmatter":{},"headers":[{"level":2,"title":"13-\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avue\u8DEF\u7531\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF","slug":"_13-\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avue\u8DEF\u7531\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF"},{"level":3,"title":"\u601D\u8DEF\u5206\u6790\uFF1A","slug":"\u601D\u8DEF\u5206\u6790\uFF1A"},{"level":3,"title":"\u56DE\u7B54\u8303\u4F8B\uFF1A","slug":"\u56DE\u7B54\u8303\u4F8B\uFF1A"},{"level":3,"title":"\u77E5\u5176\u6240\u4EE5\u7136\uFF1A","slug":"\u77E5\u5176\u6240\u4EE5\u7136\uFF1A"},{"level":2,"title":"","slug":""}],"relativePath":"frame/vue/13-\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avue\u8DEF\u7531\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF.md","lastUpdated":1672831176992}',i={},o=l(`<h2 id="_13-\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avue\u8DEF\u7531\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF">13-\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avue\u8DEF\u7531\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF</h2><h3 id="\u601D\u8DEF\u5206\u6790\uFF1A">\u601D\u8DEF\u5206\u6790\uFF1A</h3><p>\u9996\u5148\u601D\u8003vue\u8DEF\u7531\u8981\u89E3\u51B3\u7684\u95EE\u9898\uFF1A\u7528\u6237\u70B9\u51FB\u8DF3\u8F6C\u94FE\u63A5\u5185\u5BB9\u5207\u6362\uFF0C\u9875\u9762\u4E0D\u5237\u65B0\u3002</p><ul><li>\u501F\u52A9hash\u6216\u8005history api\u5B9E\u73B0url\u8DF3\u8F6C\u9875\u9762\u4E0D\u5237\u65B0</li><li>\u540C\u65F6\u76D1\u542Chashchange\u4E8B\u4EF6\u6216\u8005popstate\u4E8B\u4EF6\u5904\u7406\u8DF3\u8F6C</li><li>\u6839\u636Ehash\u503C\u6216\u8005state\u503C\u4ECEroutes\u8868\u4E2D\u5339\u914D\u5BF9\u5E94component\u5E76\u6E32\u67D3\u4E4B</li></ul><hr><h3 id="\u56DE\u7B54\u8303\u4F8B\uFF1A">\u56DE\u7B54\u8303\u4F8B\uFF1A</h3><p>\u4E00\u4E2ASPA\u5E94\u7528\u7684\u8DEF\u7531\u9700\u8981\u89E3\u51B3\u7684\u95EE\u9898\u662F<strong>\u9875\u9762\u8DF3\u8F6C\u5185\u5BB9\u6539\u53D8\u540C\u65F6\u4E0D\u5237\u65B0</strong>\uFF0C\u540C\u65F6\u8DEF\u7531\u8FD8\u9700\u8981\u4EE5\u63D2\u4EF6\u5F62\u5F0F\u5B58\u5728\uFF0C\u6240\u4EE5\uFF1A</p><ol><li><p>\u9996\u5148\u6211\u4F1A\u5B9A\u4E49\u4E00\u4E2A</p><div class="language-"><pre><code>createRouter
</code></pre></div><p>\u51FD\u6570\uFF0C\u8FD4\u56DE\u8DEF\u7531\u5668\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u5185\u90E8\u505A\u51E0\u4EF6\u4E8B\uFF1A</p><ul><li>\u4FDD\u5B58\u7528\u6237\u4F20\u5165\u7684\u914D\u7F6E\u9879</li><li>\u76D1\u542Chash\u6216\u8005popstate\u4E8B\u4EF6</li><li>\u56DE\u8C03\u91CC\u6839\u636Epath\u5339\u914D\u5BF9\u5E94\u8DEF\u7531</li></ul></li><li><p>\u5C06router\u5B9A\u4E49\u6210\u4E00\u4E2AVue\u63D2\u4EF6\uFF0C\u5373\u5B9E\u73B0install\u65B9\u6CD5\uFF0C\u5185\u90E8\u505A\u4E24\u4EF6\u4E8B\uFF1A</p><ul><li>\u5B9E\u73B0\u4E24\u4E2A\u5168\u5C40\u7EC4\u4EF6\uFF1Arouter-link\u548Crouter-view\uFF0C\u5206\u522B\u5B9E\u73B0\u9875\u9762\u8DF3\u8F6C\u548C\u5185\u5BB9\u663E\u793A</li><li>\u5B9A\u4E49\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\uFF1A$route\u548C$router\uFF0C\u7EC4\u4EF6\u5185\u53EF\u4EE5\u8BBF\u95EE\u5F53\u524D\u8DEF\u7531\u548C\u8DEF\u7531\u5668\u5B9E\u4F8B</li></ul></li></ol><hr><h3 id="\u77E5\u5176\u6240\u4EE5\u7136\uFF1A">\u77E5\u5176\u6240\u4EE5\u7136\uFF1A</h3><ul><li>createRouter\u5982\u4F55\u521B\u5EFA\u5B9E\u4F8B</li></ul><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Frouter%2Fblob%2FHEAD%2Fsrc%2Frouter.ts%23L355-L356" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/route\u2026</a></p><ul><li>\u4E8B\u4EF6\u76D1\u542C</li></ul><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Frouter%2Fblob%2FHEAD%2Fsrc%2Fhistory%2Fhtml5.ts%23L314-L315" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/route\u2026</a> RouterView</p><ul><li>\u9875\u9762\u8DF3\u8F6CRouterLink</li></ul><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Frouter%2Fblob%2FHEAD%2Fsrc%2FRouterLink.ts%23L184-L185" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/route\u2026</a></p><ul><li>\u5185\u5BB9\u663E\u793ARouterView</li></ul><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Frouter%2Fblob%2FHEAD%2Fsrc%2FRouterView.ts%23L43-L44" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/route\u2026</a></p><hr><h2 id=""></h2>`,20),u=[o];function s(a,n,_,h,p,c){return r(),t("div",null,u)}var g=e(i,[["render",s]]);export{v as __pageData,g as default};
