(self.webpackChunkkurihara=self.webpackChunkkurihara||[]).push([[692],{506:function(t,e,n){"use strict";n.d(e,{Y:function(){return c}});var i=n(8759),r=n(9),o=n(6140),a=n(8270),d=n(5893),s=(0,r.default)(i.default).withConfig({displayName:"post-item__Item",componentId:"sc-1s44gwj-0"})(["",":hover{","}"],{display:"block",fontSize:"1.5rem",lineHeight:"2rem","--tw-text-opacity":"1",color:"rgba(14, 165, 233, var(--tw-text-opacity))",transitionDuration:"100ms",marginBottom:"1rem"},{"--tw-bg-opacity":"1",backgroundColor:"rgba(224, 242, 254, var(--tw-bg-opacity))"}),u=r.default.span.withConfig({displayName:"post-item__Property",componentId:"sc-1s44gwj-1"})(["",""],{fontSize:"1rem",lineHeight:"1.5rem","--tw-text-opacity":"1",color:"rgba(156, 163, 175, var(--tw-text-opacity))",paddingLeft:"1rem"}),c=function(t){var e,n,i,r,c,l,p=t.post,f=(0,a.$)().t;return(0,d.jsxs)(s,{to:(null===(e=p.node.fields)||void 0===e?void 0:e.slug)||"",children:[(0,d.jsx)("span",{children:null===(n=p.node.frontmatter)||void 0===n?void 0:n.title}),(0,d.jsxs)(u,{children:[(0,d.jsx)("time",{dateTime:null===(i=p.node.frontmatter)||void 0===i?void 0:i.publish_date,children:(0,o.Z)(new Date(null===(r=p.node.frontmatter)||void 0===r?void 0:r.publish_date),"yyyy-MM-dd")}),(0,d.jsx)("span",{children:" • "}),(0,d.jsx)("span",{children:f("{{minutes}} min",{minutes:null===(c=p.node.fields)||void 0===c||null===(l=c.timeToRead)||void 0===l?void 0:l.minutes})})]})]})}},7370:function(t,e,n){"use strict";n.r(e);var i=n(6026),r=n.n(i),o=n(5161),a=n.n(o),d=n(8759),s=n(9),u=n(5194),c=n(3805),l=n(506),p=n(5893),f=s.default.div.withConfig({displayName:"paginated-blog-index__Pagination",componentId:"sc-m70gd6-0"})(["",""],{display:"flex",flexWrap:"wrap",alignItems:"center",marginTop:"1rem",marginBottom:"1rem"}),g=(0,s.default)(d.default).withConfig({displayName:"paginated-blog-index__PageLink",componentId:"sc-m70gd6-1"})([""," ",":hover{","}"],{padding:"0.5rem","--tw-text-opacity":"1",color:"rgba(14, 165, 233, var(--tw-text-opacity))",transitionDuration:"100ms"},(function(t){return t.active&&{borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(14, 165, 233, var(--tw-border-opacity))"}}),(function(t){return!t.active&&{"--tw-bg-opacity":"1",backgroundColor:"rgba(224, 242, 254, var(--tw-bg-opacity))"}})),m=s.default.span.withConfig({displayName:"paginated-blog-index__Ellipsis",componentId:"sc-m70gd6-2"})(["",""],{paddingLeft:"1rem",paddingRight:"1rem"}),v=function(t){var e=t.pages,n=t.page,i=t.neighbour;return(0,p.jsxs)(f,{children:[(0,p.jsx)(g,{active:1===n,to:"/blog",children:"1"}),n>i+1&&(0,p.jsx)(m,{children:"…"}),a()(r()(Math.max(n-i,2),Math.min(n+i,e)),(function(t){return(0,p.jsx)(g,{active:n===t,to:"/blog/page/"+t,children:t})})),n<e-i&&(0,p.jsx)(m,{children:"…"}),e>1&&(0,p.jsx)(g,{active:n===e,to:"/blog/page/"+e,children:e})]})};e.default=function(t){var e=t.pageContext,n=e.items,i=e.page,r=e.pages;return(0,p.jsxs)(c.I,{children:[(0,p.jsx)("div",{children:a()(n,(function(t){return(0,p.jsx)(l.Y,{post:t},t.node.id)}))}),(0,p.jsx)(v,{pages:r,page:i,neighbour:3}),(0,p.jsx)("hr",{}),(0,p.jsx)(u.h,{})]})}},98:function(t){var e=Math.ceil,n=Math.max;t.exports=function(t,i,r,o){for(var a=-1,d=n(e((i-t)/(r||1)),0),s=Array(d);d--;)s[o?d:++a]=t,t+=r;return s}},7561:function(t,e,n){var i=n(7990),r=/^\s+/;t.exports=function(t){return t?t.slice(0,i(t)+1).replace(r,""):t}},7445:function(t,e,n){var i=n(98),r=n(6612),o=n(8601);t.exports=function(t){return function(e,n,a){return a&&"number"!=typeof a&&r(e,n,a)&&(n=a=void 0),e=o(e),void 0===n?(n=e,e=0):n=o(n),a=void 0===a?e<n?1:-1:o(a),i(e,n,a,t)}}},6612:function(t,e,n){var i=n(7813),r=n(8612),o=n(5776),a=n(3218);t.exports=function(t,e,n){if(!a(n))return!1;var d=typeof e;return!!("number"==d?r(n)&&o(e,n.length):"string"==d&&e in n)&&i(n[e],t)}},7990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},6026:function(t,e,n){var i=n(7445)();t.exports=i},8601:function(t,e,n){var i=n(4841),r=1/0;t.exports=function(t){return t?(t=i(t))===r||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},4841:function(t,e,n){var i=n(7561),r=n(3218),o=n(3448),a=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=i(t);var n=d.test(t);return n||s.test(t)?u(t.slice(2),n?2:8):a.test(t)?NaN:+t}}}]);
//# sourceMappingURL=component---src-templates-paginated-blog-index-tsx-366e70e56dd67b2bd8c3.js.map