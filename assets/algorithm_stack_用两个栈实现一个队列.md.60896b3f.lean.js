import{_ as n,e as s,o as a,Q as t}from"./plugin-vue_export-helper.8dc630d2.js";const f='{"title":"\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"},{"level":3,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5"}],"relativePath":"algorithm/stack/\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217.md","lastUpdated":1680267263668}',p={},o=t(`__VP_STATIC_START__<h1 id="\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217">\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217</h1><h3 id="\u601D\u8DEF">\u601D\u8DEF</h3><p><img src="https://qn.huat.xyz/mac/20220824133731.png" alt="\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217"></p><h3 id="\u4EE3\u7801">\u4EE3\u7801</h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyQueue</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> stack1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">private</span> stack2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">/**
     * \u5165\u961F
     * @param n n
     */</span>
    <span class="token function">add</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u51FA\u961F
     */</span>
    <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> res

        <span class="token keyword">const</span> stack1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack1
        <span class="token keyword">const</span> stack2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack2

        <span class="token comment">// \u5C06 stack1 \u6240\u6709\u5143\u7D20\u79FB\u52A8\u5230 stack2 \u4E2D</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>stack1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> n <span class="token operator">=</span> stack1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// stack2 pop</span>
        res <span class="token operator">=</span> stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">// \u5C06 stack2 \u6240\u6709\u5143\u7D20\u201C\u8FD8\u7ED9\u201Dstack1</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>stack2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> n <span class="token operator">=</span> stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> res <span class="token operator">||</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">get</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const q = new MyQueue()</span>
<span class="token comment">// q.add(100)</span>
<span class="token comment">// q.add(200)</span>
<span class="token comment">// q.add(300)</span>
<span class="token comment">// console.info(q.length)</span>
<span class="token comment">// console.info(q.delete())</span>
<span class="token comment">// console.info(q.length)</span>
<span class="token comment">// console.info(q.delete())</span>
<span class="token comment">// console.info(q.length)</span>

</code></pre></div><h3 id="\u6D4B\u8BD5">\u6D4B\u8BD5</h3><div class="language-ts"><pre><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MyQueue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./two-stacks-one-queue&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E24\u4E2A\u6808\uFF0C\u4E00\u4E2A\u961F\u5217&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;add and length&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

        q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
        q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
        q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        q<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div>__VP_STATIC_END__`,7),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var h=n(p,[["render",e]]);export{f as __pageData,h as default};
