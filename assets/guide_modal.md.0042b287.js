var t=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,e=(n,a,s)=>a in n?t(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s;import{V as o,r as l,o as p,c,a as u,w as r,d as i,e as k,b as d}from"./app.d8b1e834.js";var b={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:l,withCtx:p,createVNode:c,openBlock:u,createElementBlock:r}=o,i=t("默认按钮"),k=t("主要按钮"),d=t("成功按钮"),b=t("信息按钮"),g=t("警告按钮"),m=t("危险按钮");return((t,o)=>{for(var l in o||(o={}))a.call(o,l)&&e(t,l,o[l]);if(n)for(var l of n(o))s.call(o,l)&&e(t,l,o[l]);return t})({render:function(t,n){const a=l("xl-button");return u(),r("div",null,[c(a,null,{default:p((()=>[i])),_:1}),c(a,{type:"primary"},{default:p((()=>[k])),_:1}),c(a,{type:"success"},{default:p((()=>[d])),_:1}),c(a,{type:"info"},{default:p((()=>[b])),_:1}),c(a,{type:"warning"},{default:p((()=>[g])),_:1}),c(a,{type:"danger"},{default:p((()=>[m])),_:1})])}},{})}()}};const g='{"title":"Modal 对话框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"Attributes","slug":"attributes"}],"relativePath":"components/modal.md","lastUpdated":1661230026885}',m=i("h1",{id:"modal-对话框"},"Modal 对话框",-1),x=i("p",null,"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1),y=i("h2",{id:"基础用法"},"基础用法",-1),f=i("p",null,"Modal 弹出一个对话框，适合需要定制性更大的场景。",-1),h=i("div",{class:"language-vue"},[i("pre",null,[i("code",null,[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("template")]),i("span",{class:"token punctuation"},">")]),k("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("xl-button")]),i("span",{class:"token punctuation"},">")]),k("默认按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),k("xl-button")]),i("span",{class:"token punctuation"},">")]),k("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("xl-button")]),k(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),k("primary"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),k("主要按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),k("xl-button")]),i("span",{class:"token punctuation"},">")]),k("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("xl-button")]),k(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),k("success"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),k("成功按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),k("xl-button")]),i("span",{class:"token punctuation"},">")]),k("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("xl-button")]),k(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),k("info"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),k("信息按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),k("xl-button")]),i("span",{class:"token punctuation"},">")]),k("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("xl-button")]),k(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),k("warning"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),k("警告按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),k("xl-button")]),i("span",{class:"token punctuation"},">")]),k("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),k("xl-button")]),k(),i("span",{class:"token attr-name"},"type"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),k("danger"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),k("危险按钮"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),k("xl-button")]),i("span",{class:"token punctuation"},">")]),k("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),k("template")]),i("span",{class:"token punctuation"},">")]),k("\n")])])],-1),v=d('<h2 id="attributes">Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visible</td><td>是否展示</td><td>boolean</td><td>true / false</td><td>normal</td></tr><tr><td>ok</td><td>确认触发函数</td><td>function</td><td>()=&gt;{}</td><td>—</td></tr><tr><td>cancel</td><td>取消触发函数</td><td>function</td><td>()=&gt;{}</td><td>—</td></tr></tbody></table>',2);b.render=function(t,n,a,s,e,o){const i=l("render-demo-0"),k=l("demo");return p(),c("div",null,[m,x,y,f,u(k,{sourceCode:'<template>\n  <xl-button>默认按钮</xl-button>\n  <xl-button type="primary">主要按钮</xl-button>\n  <xl-button type="success">成功按钮</xl-button>\n  <xl-button type="info">信息按钮</xl-button>\n  <xl-button type="warning">警告按钮</xl-button>\n  <xl-button type="danger">危险按钮</xl-button>\n</template>\n'},{highlight:r((()=>[h])),default:r((()=>[u(i)])),_:1}),v])};export default b;export{g as __pageData};
