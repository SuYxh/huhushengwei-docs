import{o as n,c as s,b as a}from"./app.157864df.js";const t='{"title":"优先队列","description":"","frontmatter":{},"headers":[{"level":2,"title":"场景","slug":"场景"},{"level":2,"title":"优先队列","slug":"优先队列-1"},{"level":2,"title":"优先队列的实现","slug":"优先队列的实现"},{"level":3,"title":"代码实现","slug":"代码实现"},{"level":3,"title":"测试代码","slug":"测试代码"},{"level":2,"title":"数组、栈和队列图解","slug":"数组、栈和队列图解"}],"relativePath":"algorithm/dataStructure/queue/优先队列.md","lastUpdated":1662083353131}',p={},o=[a('<h1 id="优先队列">优先队列</h1><h2 id="场景">场景</h2><p>生活中类似<strong>优先队列</strong>的场景：</p><ul><li>优先排队的人，优先处理。 (买票、结账、WC)。</li><li>排队中，有紧急情况（特殊情况）的人可优先处理。</li></ul><h2 id="优先队列-1">优先队列</h2><p>优先级队列主要考虑的问题：</p><ul><li>每个元素不再只是一个数据，还包含优先级。</li><li>在添加元素过程中，根据优先级放入到正确位置。</li></ul><h2 id="优先队列的实现">优先队列的实现</h2><h3 id="代码实现">代码实现</h3><div class="language-js"><pre><code><span class="token comment">// 优先队列内部的元素类</span>\n<span class="token keyword">class</span> <span class="token class-name">QueueElement</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> priority</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> element<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>priority <span class="token operator">=</span> priority<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 优先队列类（继承 Queue 类）</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PriorityQueue</span> <span class="token keyword">extends</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// enqueue(element, priority) 入队，将元素按优先级加入到队列中</span>\n  <span class="token comment">// 重写 enqueue()</span>\n  <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> priority</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 根据传入的元素，创建 QueueElement 对象</span>\n    <span class="token keyword">const</span> queueElement <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueueElement</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> priority<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 判断队列是否为空</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 如果为空，不用判断优先级，直接添加</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queueElement<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 定义一个变量记录是否成功添加了新元素</span>\n      <span class="token keyword">let</span> added <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 让新插入的元素进行优先级比较，priority 值越小，优先级越大</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>queueElement<span class="token punctuation">.</span>priority <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>priority<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment">// 在指定的位置插入元素</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> queueElement<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          added <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n          <span class="token keyword">break</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token comment">// 如果遍历完所有元素，优先级都大于新插入的元素，就将新插入的元素插入到最后</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>added<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queueElement<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// dequeue() 出队，从队列中删除前端元素，返回删除的元素</span>\n  <span class="token comment">// 继承 Queue 类的 dequeue()</span>\n  <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// front() 查看队列的前端元素</span>\n  <span class="token comment">// 继承 Queue 类的 front()</span>\n  <span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// isEmpty() 查看队列是否为空</span>\n  <span class="token comment">// 继承 Queue 类的 isEmpty()</span>\n  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// size() 查看队列中元素的个数</span>\n  <span class="token comment">// 继承 Queue 类的 size()</span>\n  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// toString() 将队列中元素以字符串形式返回</span>\n  <span class="token comment">// 重写 toString()</span>\n  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      result <span class="token operator">+=</span> item<span class="token punctuation">.</span>element <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>priority <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="测试代码">测试代码</h3><div class="language-js"><pre><code><span class="token keyword">const</span> priorityQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 入队 enqueue() 测试</span>\npriorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npriorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npriorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npriorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npriorityQueue<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//--&gt; output:</span>\n<span class="token comment">// QueueElement {element: &quot;A&quot;, priority: 10}</span>\n<span class="token comment">// QueueElement {element: &quot;C&quot;, priority: 11}</span>\n<span class="token comment">// QueueElement {element: &quot;B&quot;, priority: 15}</span>\n<span class="token comment">// QueueElement {element: &quot;E&quot;, priority: 18}</span>\n<span class="token comment">// QueueElement {element: &quot;D&quot;, priority: 20}</span>\n\n<span class="token comment">// 出队 dequeue() 测试</span>\npriorityQueue<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npriorityQueue<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//--&gt; output:</span>\n<span class="token comment">// QueueElement {element: &quot;B&quot;, priority: 15}</span>\n<span class="token comment">// QueueElement {element: &quot;E&quot;, priority: 18}</span>\n<span class="token comment">// QueueElement {element: &quot;D&quot;, priority: 20}</span>\n\n<span class="token comment">// isEmpty() 测试</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; false</span>\n\n<span class="token comment">// size() 测试</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; 3</span>\n\n<span class="token comment">// toString() 测试</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>priorityQueue<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; B-15 E-18 D-20</span>\n</code></pre></div><h2 id="数组、栈和队列图解">数组、栈和队列图解</h2><p><img src="https://qn.huat.xyz/mac/20220829103410.png" alt="数组、栈和队列图解"></p>',14)];p.render=function(a,t,p,e,c,u){return n(),s("div",null,o)};export default p;export{t as __pageData};
