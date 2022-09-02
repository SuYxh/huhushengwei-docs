import{o as e,c as o,b as t}from"./app.157864df.js";const c='{"title":"TCP三次握手","description":"","frontmatter":{},"headers":[{"level":3,"title":"TCP三次握手","slug":"tcp三次握手"}],"relativePath":"network/tcp/1.TCP三次握手.md","lastUpdated":1662083353139}',l={},d=[t('<h3 id="tcp三次握手">TCP三次握手</h3><ol><li>第一次握手：<code>建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认</code>；SYN：同步序列编号（Synchronize Sequence Numbers）。</li><li>第二次握手：<code>服务器收到syn包并确认客户的SYN</code>（ack=j+1），<code>同时也发送一个自己的SYN包</code>（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；</li><li>第三次握手：<code>客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1）</code>，此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。</li></ol><blockquote></blockquote>',3)];l.render=function(t,c,l,i,n,r){return e(),o("div",null,d)};export default l;export{c as __pageData};
