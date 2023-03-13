import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const m='{"title":"setState \u65E2\u5B58\u5728\u5F02\u6B65\u60C5\u51B5\u4E5F\u5B58\u5728\u540C\u6B65\u60C5\u51B5","description":"","frontmatter":{},"headers":[{"level":3,"title":"setState \u65E2\u5B58\u5728\u5F02\u6B65\u60C5\u51B5\u4E5F\u5B58\u5728\u540C\u6B65\u60C5\u51B5","slug":"setstate-\u65E2\u5B58\u5728\u5F02\u6B65\u60C5\u51B5\u4E5F\u5B58\u5728\u540C\u6B65\u60C5\u51B5"}],"relativePath":"frame/react/3.setState \u65E2\u5B58\u5728\u5F02\u6B65\u60C5\u51B5\u4E5F\u5B58\u5728\u540C\u6B65\u60C5\u51B5.md","lastUpdated":1678706535827}',p={},o=t(`<h3 id="setstate-\u65E2\u5B58\u5728\u5F02\u6B65\u60C5\u51B5\u4E5F\u5B58\u5728\u540C\u6B65\u60C5\u51B5">setState \u65E2\u5B58\u5728\u5F02\u6B65\u60C5\u51B5\u4E5F\u5B58\u5728\u540C\u6B65\u60C5\u51B5</h3><p>1.\u5F02\u6B65\u60C5\u51B5 \u5728<code>React\u4E8B\u4EF6\u5F53\u4E2D\u662F\u5F02\u6B65\u64CD\u4F5C</code></p><p>2.\u540C\u6B65\u60C5\u51B5 \u5982\u679C\u662F\u5728<code>setTimeout\u4E8B\u4EF6\u6216\u8005\u81EA\u5B9A\u4E49\u7684dom\u4E8B\u4EF6</code>\u4E2D\uFF0C\u90FD\u662F\u540C\u6B65\u7684</p><div class="language-js"><pre><code><span class="token comment">//setTimeout\u4E8B\u4EF6</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Count</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>btnAction<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u589E\u52A0<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token function-variable function">btnAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">//\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539state\uFF0C\u9700\u8981\u901A\u8FC7setState\u8FDB\u884C\u4FEE\u6539</span>
        <span class="token comment">//\u540C\u6B65</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Count<span class="token punctuation">;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">//\u81EA\u5B9A\u4E49dom\u4E8B\u4EF6</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Count</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>count<span class="token operator">:</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u81EA\u5B9A\u4E49dom\u4E8B\u4EF6\uFF0C\u4E5F\u662F\u540C\u6B65\u4FEE\u6539</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Count<span class="token punctuation">;</span>
</code></pre></div>`,5),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
