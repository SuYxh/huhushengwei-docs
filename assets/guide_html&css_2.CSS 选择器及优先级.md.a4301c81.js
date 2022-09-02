import{o as l,c as i,b as t}from"./app.157864df.js";const e='{"title":"CSS 选择器及优先级","description":"","frontmatter":{},"headers":[{"level":3,"title":"CSS 选择器及优先级","slug":"css-选择器及优先级"}],"relativePath":"guide/html&css/2.CSS 选择器及优先级.md","lastUpdated":1662083353135}',o={},r=[t('<h3 id="css-选择器及优先级">CSS 选择器及优先级</h3><p><strong>选择器</strong></p><ul><li>id选择器(#myid)</li><li>类选择器(.myclass)</li><li>属性选择器(a[rel=&quot;external&quot;])</li><li>伪类选择器(a:hover, li:nth-child)</li><li>标签选择器(div, h1,p)</li><li>相邻选择器（h1 + p）</li><li>子选择器(ul &gt; li)</li><li>后代选择器(li a)</li><li>通配符选择器(*)</li></ul><p><strong>优先级：</strong></p><ul><li><code>!important</code></li><li>内联样式（1000）</li><li>ID选择器（0100）</li><li>类选择器/属性选择器/伪类选择器（0010）</li><li>元素选择器/伪元素选择器（0001）</li><li>关系选择器/通配符选择器（0000）</li></ul><p>带!important 标记的样式属性优先级最高； 样式表的来源相同时：<code>!important &gt; 行内样式&gt;ID选择器 &gt; 类选择器 &gt; 标签 &gt; 通配符 &gt; 继承 &gt; 浏览器默认属性</code></p>',6)];o.render=function(t,e,o,s,a,d){return l(),i("div",null,r)};export default o;export{e as __pageData};
