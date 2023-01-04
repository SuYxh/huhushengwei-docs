import{_ as n,e as a,o as s,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const m='{"title":"\u4F60\u4E86\u89E3\u54EA\u4E9BVue\u6027\u80FD\u4F18\u5316\u65B9\u6CD5\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F60\u4E86\u89E3\u54EA\u4E9BVue\u6027\u80FD\u4F18\u5316\u65B9\u6CD5\uFF1F","slug":"\u4F60\u4E86\u89E3\u54EA\u4E9Bvue\u6027\u80FD\u4F18\u5316\u65B9\u6CD5\uFF1F"},{"level":3,"title":"\u5206\u6790","slug":"\u5206\u6790"},{"level":3,"title":"\u7B54\u9898\u601D\u8DEF\uFF1A","slug":"\u7B54\u9898\u601D\u8DEF\uFF1A"},{"level":3,"title":"\u56DE\u7B54\u8303\u4F8B","slug":"\u56DE\u7B54\u8303\u4F8B"}],"relativePath":"frame/vue/25-\u4F60\u4E86\u89E3\u54EA\u4E9BVue\u6027\u80FD\u4F18\u5316\u65B9\u6CD5.md","lastUpdated":1672831176992}',p={},e=t(`<h2 id="\u4F60\u4E86\u89E3\u54EA\u4E9Bvue\u6027\u80FD\u4F18\u5316\u65B9\u6CD5\uFF1F">\u4F60\u4E86\u89E3\u54EA\u4E9BVue\u6027\u80FD\u4F18\u5316\u65B9\u6CD5\uFF1F</h2><h3 id="\u5206\u6790">\u5206\u6790</h3><p>\u8FD9\u662F\u4E00\u9053\u7EFC\u5408\u5B9E\u8DF5\u9898\u76EE\uFF0C\u5199\u8FC7\u4E00\u5B9A\u6570\u91CF\u7684\u4EE3\u7801\u4E4B\u540E\u5C0F\u4F19\u4F34\u4EEC\u81EA\u7136\u4F1A\u5F00\u59CB\u5173\u6CE8\u4E00\u4E9B\u4F18\u5316\u65B9\u6CD5\uFF0C\u7B54\u5F97\u8D8A\u591A\u80AF\u5B9A\u5B9E\u8DF5\u7ECF\u9A8C\u4E5F\u8D8A\u4E30\u5BCC\uFF0C\u662F\u5F88\u597D\u7684\u9898\u76EE\u3002</p><h3 id="\u7B54\u9898\u601D\u8DEF\uFF1A">\u7B54\u9898\u601D\u8DEF\uFF1A</h3><p>\u6839\u636E\u9898\u76EE\u63CF\u8FF0\uFF0C\u8FD9\u91CC\u4E3B\u8981\u63A2\u8BA8Vue\u4EE3\u7801\u5C42\u9762\u7684\u4F18\u5316</p><h3 id="\u56DE\u7B54\u8303\u4F8B">\u56DE\u7B54\u8303\u4F8B</h3><ul><li><p>\u6211\u8FD9\u91CC\u4E3B\u8981\u4ECEVue\u4EE3\u7801\u7F16\u5199\u5C42\u9762\u8BF4\u4E00\u4E9B\u4F18\u5316\u624B\u6BB5\uFF0C\u4F8B\u5982\uFF1A\u4EE3\u7801\u5206\u5272\u3001\u670D\u52A1\u7AEF\u6E32\u67D3\u3001\u7EC4\u4EF6\u7F13\u5B58\u3001\u957F\u5217\u8868\u4F18\u5316\u7B49</p></li><li><p>\u6700\u5E38\u89C1\u7684\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF1A\u6709\u6548\u62C6\u5206App\u5C3A\u5BF8\uFF0C\u8BBF\u95EE\u65F6\u624D\u5F02\u6B65\u52A0\u8F7D</p><div class="language-css"><pre><code><span class="token selector">const router = createRouter(</span><span class="token punctuation">{</span>
  <span class="token selector">routes: [
    // \u501F\u52A9webpack\u7684import()\u5B9E\u73B0\u5F02\u6B65\u7EC4\u4EF6</span>
    <span class="token punctuation">{</span> <span class="token property">path</span><span class="token punctuation">:</span> <span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token property">component</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; <span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&#39;./Foo.vue&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
  ]
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p><code>keep-alive</code>\u7F13\u5B58\u9875\u9762\uFF1A\u907F\u514D\u91CD\u590D\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u4E14\u80FD\u4FDD\u7559\u7F13\u5B58\u7EC4\u4EF6\u72B6\u6001</p><div class="language-ruby"><pre><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>view v<span class="token operator">-</span>slot<span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;{ Component }&quot;</span></span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>component <span class="token symbol">:is</span><span class="token operator">=</span><span class="token string-literal"><span class="token string">&quot;Component&quot;</span></span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
</code></pre></div></li><li><p>\u4F7F\u7528<code>v-show</code>\u590D\u7528DOM\uFF1A\u907F\u514D\u91CD\u590D\u521B\u5EFA\u7EC4\u4EF6</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u8FD9\u79CD\u60C5\u51B5\u7528v-show\u590D\u7528DOM\uFF0C\u6BD4v-if\u6548\u679C\u597D --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Heavy</span> <span class="token attr-name">:n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Heavy</span> <span class="token attr-name">:n</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10000<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p><code>v-for</code> \u904D\u5386\u907F\u514D\u540C\u65F6\u4F7F\u7528 <code>v-if</code>\uFF1A\u5B9E\u9645\u4E0A\u5728Vue3\u4E2D\u5DF2\u7ECF\u662F\u4E2A\u9519\u8BEF\u5199\u6CD5</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user in activeUsers<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">&lt;!--</span> <span class="token attr-name">\u907F\u514D\u540C\u65F6\u4F7F\u7528\uFF0Cvue3\u4E2D\u4F1A\u62A5\u9519</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- v-if=&quot;user.isActive&quot; --&gt;</span>
        :key=&quot;user.id&quot;&gt;
        {{ user.name }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
  export default {
    computed: {
      activeUsers: function () {
        return this.users.filter(user =&gt; user.isActive)
      }
    }
  }
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>v-once\u548Cv-memo\uFF1A\u4E0D\u518D\u53D8\u5316\u7684\u6570\u636E\u4F7F\u7528<code>v-once</code></p><div class="language-xml"><pre><code><span class="token comment">&lt;!-- single element --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-once</span><span class="token punctuation">&gt;</span></span>This will never change: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- the element have children --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-once</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>comment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- component --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span class="token attr-name">v-once</span> <span class="token attr-name">:comment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \`v-for\` directive --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-once</span><span class="token punctuation">&gt;</span></span>{{i}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6309\u6761\u4EF6\u8DF3\u8FC7\u66F4\u65B0\u65F6\u4F7F\u7528<code>v-momo</code>\uFF1A\u4E0B\u9762\u8FD9\u4E2A\u5217\u8868\u53EA\u4F1A\u66F4\u65B0\u9009\u4E2D\u72B6\u6001\u53D8\u5316\u9879</p><div class="language-css"><pre><code><span class="token selector">&lt;div v-for=&quot;item in list&quot; :key=&quot;item.id&quot; v-memo=&quot;[item.id === selected]&quot;&gt;
  &lt;p&gt;ID:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> item.id <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token selector">- selected:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> item.id === selected <span class="token punctuation">}</span><span class="token punctuation">}</span>&lt;/p&gt;
  &lt;p&gt;...more child nodes&lt;/p&gt;
&lt;/div&gt;
</code></pre></div><blockquote><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fapi%2Fbuilt-in-directives.html%23v-memo" target="_blank" rel="noopener noreferrer">vuejs.org/api/built-i\u2026</a></p></blockquote></li><li><p>\u957F\u5217\u8868\u6027\u80FD\u4F18\u5316\uFF1A\u5982\u679C\u662F\u5927\u6570\u636E\u957F\u5217\u8868\uFF0C\u53EF\u91C7\u7528\u865A\u62DF\u6EDA\u52A8\uFF0C\u53EA\u6E32\u67D3\u5C11\u90E8\u5206\u533A\u57DF\u7684\u5185\u5BB9</p><div class="language-ini"><pre><code>&lt;recycle-scroller
  <span class="token key attr-name">class</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">items</span>&quot;</span>
  <span class="token key attr-name">:items</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">items</span>&quot;</span>
  <span class="token key attr-name">:item-size</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">24</span>&quot;</span>
&gt;
  <span class="token key attr-name">&lt;template v-slot</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;{ item }&quot;&gt;</span>
    &lt;FetchItemView
      <span class="token key attr-name">:item</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">item</span>&quot;</span>
      <span class="token key attr-name">@vote</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">voteItem(item)</span>&quot;</span>
    /&gt;
  &lt;/template&gt;
&lt;/recycle-scroller&gt;
</code></pre></div><blockquote><p>\u4E00\u4E9B\u5F00\u6E90\u5E93\uFF1A</p><ul><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FAkryum%2Fvue-virtual-scroller" target="_blank" rel="noopener noreferrer">vue-virtual-scroller</a></li><li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Frocwang%2Fvue-virtual-scroll-grid" target="_blank" rel="noopener noreferrer">vue-virtual-scroll-grid</a></li></ul></blockquote></li><li><p>\u4E8B\u4EF6\u7684\u9500\u6BC1\uFF1AVue \u7EC4\u4EF6\u9500\u6BC1\u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E3\u7ED1\u5B83\u7684\u5168\u90E8\u6307\u4EE4\u53CA\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u4F46\u662F\u4EC5\u9650\u4E8E\u7EC4\u4EF6\u672C\u8EAB\u7684\u4E8B\u4EF6\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refresh<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u56FE\u7247\u61D2\u52A0\u8F7D</p><p>\u5BF9\u4E8E\u56FE\u7247\u8FC7\u591A\u7684\u9875\u9762\uFF0C\u4E3A\u4E86\u52A0\u901F\u9875\u9762\u52A0\u8F7D\u901F\u5EA6\uFF0C\u6240\u4EE5\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5C06\u9875\u9762\u5185\u672A\u51FA\u73B0\u5728\u53EF\u89C6\u533A\u57DF\u5185\u7684\u56FE\u7247\u5148\u4E0D\u505A\u52A0\u8F7D\uFF0C \u7B49\u5230\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\u540E\u518D\u53BB\u52A0\u8F7D\u3002</p><div class="language-ini"><pre><code><span class="token key attr-name">&lt;img v-lazy</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;/static/img/1.png&quot;&gt;</span>
</code></pre></div><blockquote><p>\u53C2\u8003\u9879\u76EE\uFF1A<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fhilongjw%2Fvue-lazyload" target="_blank" rel="noopener noreferrer">vue-lazyload</a></p></blockquote></li><li><p>\u7B2C\u4E09\u65B9\u63D2\u4EF6\u6309\u9700\u5F15\u5165</p><p>\u50CF<code>element-plus</code>\u8FD9\u6837\u7684\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u5E93\u53EF\u4EE5\u6309\u9700\u5F15\u5165\u907F\u514D\u4F53\u79EF\u592A\u5927\u3002</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Select<span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u5B50\u7EC4\u4EF6\u5206\u5272\u7B56\u7565\uFF1A\u8F83\u91CD\u7684\u72B6\u6001\u7EC4\u4EF6\u9002\u5408\u62C6\u5206</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComp</span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
export default {
  components: {
    ChildComp: {
      methods: {
        heavy () { /* \u8017\u65F6\u4EFB\u52A1 */ }
      },
      render (h) {
        return h(&#39;div&#39;, this.heavy())
      }
    }
  }
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4F46\u540C\u65F6\u4E5F\u4E0D\u5B9C\u8FC7\u5EA6\u62C6\u5206\u7EC4\u4EF6\uFF0C\u5C24\u5176\u662F\u4E3A\u4E86\u6240\u8C13\u7EC4\u4EF6\u62BD\u8C61\u5C06\u4E00\u4E9B\u4E0D\u9700\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6\u7279\u610F\u62BD\u51FA\u6765\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u6D88\u8017\u8FDC\u5927\u4E8E\u7EAFdom\u8282\u70B9\u3002\u53C2\u8003\uFF1A<a href="https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fguide%2Fbest-practices%2Fperformance.html%23avoid-unnecessary-component-abstractions" target="_blank" rel="noopener noreferrer">vuejs.org/guide/best-\u2026</a></p></li><li><p>\u670D\u52A1\u7AEF\u6E32\u67D3/\u9759\u6001\u7F51\u7AD9\u751F\u6210\uFF1ASSR/SSG</p><p>\u5982\u679CSPA\u5E94\u7528\u6709\u9996\u5C4F\u6E32\u67D3\u6162\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u8003\u8651SSR\u3001SSG\u65B9\u6848\u4F18\u5316\u3002\u53C2\u8003<a href="https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fguide%2Fscaling-up%2Fssr.html" target="_blank" rel="noopener noreferrer">SSR Guide</a></p></li></ul>`,7),o=[e];function c(l,u,k,i,r,g){return s(),a("div",null,o)}var d=n(p,[["render",c]]);export{m as __pageData,d as default};
