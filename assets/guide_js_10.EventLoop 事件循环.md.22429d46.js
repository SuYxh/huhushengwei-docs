import{o as e,c as o,b as t}from"./app.157864df.js";const l='{"title":"EventLoop 事件循环","description":"","frontmatter":{},"headers":[{"level":3,"title":"EventLoop 事件循环","slug":"eventloop-事件循环"}],"relativePath":"guide/js/10.EventLoop 事件循环.md","lastUpdated":1662083353139}',i={},a=[t('<h3 id="eventloop-事件循环">EventLoop 事件循环</h3><div class="language-"><pre><code>JS`是单线程的，为了防止一个函数执行时间过长阻塞后面的代码，所以会先将同步代码压入执行栈中，依次执行，将异步代码推入异步队列，异步队列又分为宏任务队列和微任务队列，因为宏任务队列的执行时间较长，所以微任务队列要优先于宏任务队列。微任务队列的代表就是，`Promise.then`，`MutationObserver`，宏任务的话就是`setImmediate setTimeout setInterval\n</code></pre></div><p>JS运行的环境。一般为浏览器或者Node。 在浏览器环境中，有JS 引擎线程和渲染线程，且两个线程互斥。 Node环境中，只有JS 线程。 不同环境执行机制有差异，不同任务进入不同Event Queue队列。 当主程结束，先执行准备好微任务，然后再执行准备好的宏任务，一个轮询结束。</p><h4 id="浏览器中的事件环（event-loop"><strong>浏览器中的事件环（Event Loop)</strong></h4><p>事件环的运行机制是，先会执行栈中的内容，栈中的内容执行后执行微任务，微任务清空后再执行宏任务，先取出一个宏任务，再去执行微任务，然后在取宏任务清微任务这样不停的循环。</p><ul><li><p>eventLoop 是由JS的宿主环境（浏览器）来实现的；</p></li><li><p>事件循环可以简单的描述为以下四个步骤:</p><ol><li>函数入栈，当Stack中执行到异步任务的时候，就将他丢给WebAPIs,接着执行同步任务,直到Stack为空；</li><li>此期间WebAPIs完成这个事件，把回调函数放入队列中等待执行（微任务放到微任务队列，宏任务放到宏任务队列）</li><li>执行栈为空时，Event Loop把微任务队列执行清空；</li><li>微任务队列清空后，进入宏任务队列，取队列的第一项任务放入Stack(栈）中执行，执行完成后，查看微任务队列是否有任务，有的话，清空微任务队列。重复4，继续从宏任务中取任务执行，执行完成之后，继续清空微任务，如此反复循环，直至清空所有的任务。</li></ol><p><img src="https://qn.huat.xyz/mac/20220828105148.awebp" alt="事件循环流程"></p></li><li><p>浏览器中的任务源(task):</p><ul><li><code>宏任务(macrotask)</code>： 宿主环境提供的，比如浏览器 ajax、setTimeout、setInterval、setTmmediate(只兼容ie)、script、requestAnimationFrame、messageChannel、UI渲染、一些浏览器api</li><li><code>微任务(microtask)</code>： 语言本身提供的，比如promise.then then、queueMicrotask(基于then)、mutationObserver(浏览器提供)、messageChannel 、mutationObersve</li></ul></li></ul><p>传送门 ☞ <a href="https://juejin.cn/post/7001881781125251086" target="_blank" rel="noopener noreferrer"># 宏任务和微任务</a></p><h4 id="node-环境中的事件环（event-loop"><strong>Node 环境中的事件环（Event Loop)</strong></h4><p><code>Node</code>是基于V8引擎的运行在服务端的<code>JavaScript</code>运行环境，在处理高并发、I/O密集(文件操作、网络操作、数据库操作等)场景有明显的优势。虽然用到也是V8引擎，但由于服务目的和环境不同，导致了它的API与原生JS有些区别，其Event Loop还要处理一些I/O，比如新的网络连接等，所以Node的Event Loop(事件环机制)与浏览器的是不太一样。</p><p><img src="https://qn.huat.xyz/mac/20220828105216.awebp" alt="2020120317343116.png"></p><p>执行顺序如下：</p><ul><li><code>timers</code>: 计时器，执行setTimeout和setInterval的回调</li><li><code>pending callbacks</code>: 执行延迟到下一个循环迭代的 I/O 回调</li><li><code>idle, prepare</code>: 队列的移动，仅系统内部使用</li><li><code>poll轮询</code>: 检索新的 I/O 事件;执行与 I/O 相关的回调。事实上除了其他几个阶段处理的事情，其他几乎所有的异步都在这个阶段处理。</li><li><code>check</code>: 执行<code>setImmediate</code>回调，setImmediate在这里执行</li><li><code>close callbacks</code>: 执行<code>close</code>事件的<code>callback</code>，一些关闭的回调函数，如：socket.on(&#39;close&#39;, ...)</li></ul>',12)];i.render=function(t,l,i,p,c,n){return e(),o("div",null,a)};export default i;export{l as __pageData};
