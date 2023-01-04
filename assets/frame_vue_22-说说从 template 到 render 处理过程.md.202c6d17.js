import{_ as e,e as t,o as l,Q as r}from"./plugin-vue_export-helper.8dc630d2.js";const u='{"title":"22-\u8BF4\u8BF4\u4ECE template \u5230 render \u5904\u7406\u8FC7\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"22-\u8BF4\u8BF4\u4ECE template \u5230 render \u5904\u7406\u8FC7\u7A0B","slug":"_22-\u8BF4\u8BF4\u4ECE-template-\u5230-render-\u5904\u7406\u8FC7\u7A0B"},{"level":3,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":3,"title":"\u56DE\u7B54\u8303\u4F8B","slug":"\u56DE\u7B54\u8303\u4F8B"},{"level":3,"title":"\u77E5\u5176\u6240\u4EE5\u7136","slug":"\u77E5\u5176\u6240\u4EE5\u7136"},{"level":3,"title":"\u53EF\u80FD\u7684\u8FFD\u95EE","slug":"\u53EF\u80FD\u7684\u8FFD\u95EE"},{"level":2,"title":"","slug":""}],"relativePath":"frame/vue/22-\u8BF4\u8BF4\u4ECE template \u5230 render \u5904\u7406\u8FC7\u7A0B.md","lastUpdated":1672831176992}',i={},a=r('<h2 id="_22-\u8BF4\u8BF4\u4ECE-template-\u5230-render-\u5904\u7406\u8FC7\u7A0B">22-\u8BF4\u8BF4\u4ECE template \u5230 render \u5904\u7406\u8FC7\u7A0B</h2><h3 id="\u5206\u6790">\u5206\u6790</h3><p>\u95EE\u6211\u4EECtemplate\u5230render\u8FC7\u7A0B\uFF0C\u5176\u5B9E\u662F\u95EEvue<code>\u7F16\u8BD1\u5668</code>\u5DE5\u4F5C\u539F\u7406\u3002</p><h3 id="\u601D\u8DEF">\u601D\u8DEF</h3><ol><li>\u5F15\u5165vue\u7F16\u8BD1\u5668\u6982\u5FF5</li><li>\u8BF4\u660E\u7F16\u8BD1\u5668\u7684\u5FC5\u8981\u6027</li><li>\u9610\u8FF0\u7F16\u8BD1\u5668\u5DE5\u4F5C\u6D41\u7A0B</li></ol><h3 id="\u56DE\u7B54\u8303\u4F8B">\u56DE\u7B54\u8303\u4F8B</h3><ol><li>Vue\u4E2D\u6709\u4E2A\u72EC\u7279\u7684\u7F16\u8BD1\u5668\u6A21\u5757\uFF0C\u79F0\u4E3A\u201Ccompiler\u201D\uFF0C\u5B83\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u5C06\u7528\u6237\u7F16\u5199\u7684template\u7F16\u8BD1\u4E3Ajs\u4E2D\u53EF\u6267\u884C\u7684render\u51FD\u6570\u3002</li><li>\u4E4B\u6240\u4EE5\u9700\u8981\u8FD9\u4E2A\u7F16\u8BD1\u8FC7\u7A0B\u662F\u4E3A\u4E86\u4FBF\u4E8E\u524D\u7AEF\u7A0B\u5E8F\u5458\u80FD\u9AD8\u6548\u7684\u7F16\u5199\u89C6\u56FE\u6A21\u677F\u3002\u76F8\u6BD4\u800C\u8A00\uFF0C\u6211\u4EEC\u8FD8\u662F\u66F4\u613F\u610F\u7528HTML\u6765\u7F16\u5199\u89C6\u56FE\uFF0C\u76F4\u89C2\u4E14\u9AD8\u6548\u3002\u624B\u5199render\u51FD\u6570\u4E0D\u4EC5\u6548\u7387\u5E95\u4E0B\uFF0C\u800C\u4E14\u5931\u53BB\u4E86\u7F16\u8BD1\u671F\u7684\u4F18\u5316\u80FD\u529B\u3002</li><li>\u5728Vue\u4E2D\u7F16\u8BD1\u5668\u4F1A\u5148\u5BF9template\u8FDB\u884C\u89E3\u6790\uFF0C\u8FD9\u4E00\u6B65\u79F0\u4E3Aparse\uFF0C\u7ED3\u675F\u4E4B\u540E\u4F1A\u5F97\u5230\u4E00\u4E2AJS\u5BF9\u8C61\uFF0C\u6211\u4EEC\u6210\u4E3A\u62BD\u8C61\u8BED\u6CD5\u6811AST\uFF0C\u7136\u540E\u662F\u5BF9AST\u8FDB\u884C\u6DF1\u52A0\u5DE5\u7684\u8F6C\u6362\u8FC7\u7A0B\uFF0C\u8FD9\u4E00\u6B65\u6210\u4E3Atransform\uFF0C\u6700\u540E\u5C06\u524D\u9762\u5F97\u5230\u7684AST\u751F\u6210\u4E3AJS\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662Frender\u51FD\u6570\u3002</li></ol><h3 id="\u77E5\u5176\u6240\u4EE5\u7136">\u77E5\u5176\u6240\u4EE5\u7136</h3><p>vue3\u7F16\u8BD1\u8FC7\u7A0B\u7AA5\u63A2\uFF1A</p><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub1s.com%2Fvuejs%2Fcore%2Fblob%2FHEAD%2Fpackages%2Fcompiler-core%2Fsrc%2Fcompile.ts%23L61-L62" target="_blank" rel="noopener noreferrer">github1s.com/vuejs/core/\u2026</a></p><p>\u6D4B\u8BD5\uFF0Ctest-v3.html</p><h3 id="\u53EF\u80FD\u7684\u8FFD\u95EE">\u53EF\u80FD\u7684\u8FFD\u95EE</h3><ol><li>Vue\u4E2D\u7F16\u8BD1\u5668\u4F55\u65F6\u6267\u884C\uFF1F</li><li>react\u6709\u6CA1\u6709\u7F16\u8BD1\u5668\uFF1F</li></ol><h2 id=""></h2>',14),_=[a];function o(s,p,n,d,c,h){return l(),t("div",null,_)}var v=e(i,[["render",o]]);export{u as __pageData,v as default};
