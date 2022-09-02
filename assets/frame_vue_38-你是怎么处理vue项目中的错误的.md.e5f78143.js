import{o as n,c as s,b as a}from"./app.157864df.js";const p='{"title":"38-你是怎么处理vue项目中的错误的？","description":"","frontmatter":{},"headers":[{"level":2,"title":"38-你是怎么处理vue项目中的错误的？","slug":"_38-你是怎么处理vue项目中的错误的？"},{"level":3,"title":"分析","slug":"分析"},{"level":3,"title":"思路","slug":"思路"},{"level":3,"title":"回答范例","slug":"回答范例"},{"level":3,"title":"实践","slug":"实践"}],"relativePath":"frame/vue/38-你是怎么处理vue项目中的错误的.md","lastUpdated":1662083353135}',t={},o=[a('<h2 id="_38-你是怎么处理vue项目中的错误的？">38-你是怎么处理vue项目中的错误的？</h2><h3 id="分析">分析</h3><p>这是一个综合应用题目，在项目中我们常常需要将App的异常上报，此时错误处理就很重要了。</p><p>这里要区分错误的类型，针对性做收集。</p><p>然后是将收集的的错误信息上报服务器。</p><h3 id="思路">思路</h3><ol><li>首先区分错误类型</li><li>根据错误不同类型做相应收集</li><li>收集的错误是如何上报服务器的</li></ol><h3 id="回答范例">回答范例</h3><ol><li>应用中的错误类型分为&quot;<code>接口异常</code>&quot;和“<code>代码逻辑异常</code>”</li><li>我们需要根据不同错误类型做相应处理：<code>接口异常</code>是我们请求后端接口过程中发生的异常，可能是请求失败，也可能是请求获得了服务器响应，但是返回的是错误状态。以Axios为例，这类异常我们可以通过封装Axios，在拦截器中统一处理整个应用中请求的错误。<code>代码逻辑异常</code>是我们编写的前端代码中存在逻辑上的错误造成的异常，vue应用中最常见的方式是使用全局错误处理函数<code>app.config.errorHandler</code>收集错误。</li><li>收集到错误之后，需要统一处理这些异常：分析错误，获取需要错误信息和数据。这里应该有效区分错误类型，如果是请求错误，需要上报接口信息，参数，状态码等；对于前端逻辑异常，获取错误名称和详情即可。另外还可以收集应用名称、环境、版本、用户信息，所在页面等。这些信息可以通过vuex存储的全局状态和路由信息获取。</li></ol><h3 id="实践">实践</h3><p>axios拦截器中处理捕获异常：</p><div class="language-vue"><pre><code>// 响应拦截器\ninstance.interceptors.response.use(\n  (response) =&gt; {\n    return response.data;\n  },\n  (error) =&gt; {\n    // 存在response说明服务器有响应\n    if (error.response) {\n      let response = error.response;\n      if (response.status &gt;= 400) {\n        handleError(response);\n      }\n    } else {\n      handleError(null);\n    }\n    return Promise.reject(error);\n  },\n);\n</code></pre></div><p>vue中全局捕获异常：</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// report error to tracking services</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>处理接口请求错误：</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">handleError</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 接口错误，从config字段中获取请求信息</span>\n    <span class="token keyword">let</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> params<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">.</span>config\n    <span class="token keyword">let</span> err_data <span class="token operator">=</span> <span class="token punctuation">{</span>\n       url<span class="token punctuation">,</span> method<span class="token punctuation">,</span>\n       params<span class="token operator">:</span> <span class="token punctuation">{</span> query<span class="token operator">:</span> params<span class="token punctuation">,</span> body<span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">,</span>\n       error<span class="token operator">:</span> error<span class="token punctuation">.</span>data<span class="token operator">?.</span>message <span class="token operator">||</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>处理前端逻辑错误：</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">handleError</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> errData <span class="token operator">=</span> <span class="token keyword">null</span>\n    <span class="token comment">// 逻辑错误</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>error <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> error\n      errData <span class="token operator">=</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> name<span class="token punctuation">,</span>\n        error<span class="token operator">:</span> message\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      errData <span class="token operator">=</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> <span class="token string">&#39;other&#39;</span><span class="token punctuation">,</span>\n        error<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">strigify</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',18)];t.render=function(a,p,t,e,c,r){return n(),s("div",null,o)};export default t;export{p as __pageData};
