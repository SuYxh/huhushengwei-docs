import{_ as d,d as m,c as u,u as e,o,e as a,j as _,f as r,t as i,l as x,F,y as T,E as I,z as l,A as k}from"./plugin-vue_export-helper.607da6b9.js";import{u as y,w as L,N as g}from"./app.00a92783.js";const A={key:0,class:"home-hero"},B={key:0,class:"figure"},C=["src","alt"],N={key:1,id:"main-title",class:"title"},w={key:2,class:"description"},b=m({__name:"HomeHero",setup(v){const{site:s,frontmatter:t}=y(),c=u(()=>{const{heroImage:f,heroText:n,tagline:p,actionLink:H,actionText:$}=t.value;return f||n||p||H&&$}),h=u(()=>t.value.heroText||s.value.title);return(f,n)=>e(c)?(o(),a("header",A,[e(t).heroImage?(o(),a("figure",B,[_("img",{class:"image",src:e(L)(e(t).heroImage),alt:e(t).heroAlt},null,8,C)])):r("v-if",!0),e(h)?(o(),a("h1",N,i(e(h)),1)):r("v-if",!0),e(t).tagline?(o(),a("p",w,i(e(t).tagline),1)):r("v-if",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("v-if",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});var V=d(b,[["__scopeId","data-v-0cb9fda2"]]);const D={key:0,class:"home-features"},E={class:"wrapper"},S={class:"container"},j={class:"features"},z={key:0,class:"title"},q={key:1,class:"details"},G=m({__name:"HomeFeatures",setup(v){const{frontmatter:s}=y(),t=u(()=>s.value.features&&s.value.features.length>0),c=u(()=>s.value.features?s.value.features:[]);return(h,f)=>e(t)?(o(),a("div",D,[_("div",E,[_("div",S,[_("div",j,[(o(!0),a(F,null,T(e(c),(n,p)=>(o(),a("section",{key:p,class:"feature"},[n.title?(o(),a("h2",z,i(n.title),1)):r("v-if",!0),n.details?(o(),a("p",q,i(n.details),1)):r("v-if",!0)]))),128))])])])])):r("v-if",!0)}});var J=d(G,[["__scopeId","data-v-e39c13e0"]]);const K={key:0,class:"footer"},M={class:"container"},O={class:"text"},P=m({__name:"HomeFooter",setup(v){const{frontmatter:s}=y();return(t,c)=>e(s).footer?(o(),a("footer",K,[_("div",M,[_("p",O,i(e(s).footer),1)])])):r("v-if",!0)}});var Q=d(P,[["__scopeId","data-v-30918238"]]);const R={class:"home","aria-labelledby":"main-title"},U={class:"home-content"},W=m({__name:"Home",setup(v){return(s,t)=>{const c=I("Content");return o(),a("main",R,[l(V),k(s.$slots,"hero",{},void 0,!0),l(J),_("div",U,[l(c)]),k(s.$slots,"features",{},void 0,!0),l(Q),k(s.$slots,"footer",{},void 0,!0)])}}});var Z=d(W,[["__scopeId","data-v-32eddf2f"]]);export{Z as default};
