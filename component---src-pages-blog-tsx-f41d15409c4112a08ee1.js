/*! For license information please see component---src-pages-blog-tsx-f41d15409c4112a08ee1.js.LICENSE.txt */
(self.webpackChunklouis_25=self.webpackChunklouis_25||[]).push([[410],{5900:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var i=n.apply(null,a);i&&e.push(i)}}else if("object"===l)if(a.toString===Object.prototype.toString)for(var o in a)r.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},2950:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var r=a(6771),n=a(1309),l=a(7294),i=a(1597),o=a(8945);var s=(0,r.Z)(i.rU,{target:"es6gvlh8"})({name:"cjhwds",styles:"display:flex;flex-direction:column;border-radius:10px;overflow:hidden;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);flex:10;cursor:pointer;transition:0.15s all ease-in;&:hover{transform:translateY(-8px);box-shadow:0 12px 20px 0 rgba(0, 0, 0, 0.3);}"}),p=(0,r.Z)("div",{target:"es6gvlh7"})({name:"15h9qss",styles:"display:flex;flex:6;align-items:center;overflow:hidden"}),c=(0,r.Z)(o.G,{target:"es6gvlh6"})({name:"1jap4e5",styles:"width:100%;align-items:center;flex:8"}),u=(0,r.Z)("div",{target:"es6gvlh5"})({name:"rg69de",styles:"flex:5;display:flex;flex-direction:column;padding:15px"}),g=(0,r.Z)("div",{target:"es6gvlh4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),d=(0,r.Z)("div",{target:"es6gvlh3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),m=(0,r.Z)("div",{target:"es6gvlh2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),f=(0,r.Z)("div",{target:"es6gvlh1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),x=(0,r.Z)("div",{target:"es6gvlh0"})({name:"18ycl1",styles:"display:-webkit-box;overflow:hidden;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),v=function(e){var t=e.title,a=e.date,r=e.categories,n=e.summary,i=e.thumbnail.childImageSharp.gatsbyImageData,o=e.link;return l.createElement(s,{to:o},l.createElement(p,null,l.createElement(c,{image:i,alt:"Post Item Image"})),l.createElement(u,null,l.createElement(g,null,t),l.createElement(d,null,a),l.createElement(m,null,r.map((function(e){return l.createElement(f,{key:e},e)}))),l.createElement(x,null,n)))},h=a(5900),w=a.n(h),y=function(e){for(var t=e.postPerPage,a=e.totalPosts,r=e.currentPage,n=e.paginate,i=[],o=1;o<=Math.ceil(a/t);o++)i.push(o);return l.createElement("nav",null,l.createElement("ul",{className:"pagination"},i.map((function(e){return l.createElement("li",{key:e,className:w()("pagination_item",{pagination_currPage:r===e}),onClick:function(){n(e),window.scrollTo(0,0)}},e)}))))};var b=(0,r.Z)("div",{target:"eq5nnk00"})({name:"ar3xp7",styles:"display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:400px;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),k=function(e){var t=e.selectedCategory,a=e.posts,r=(0,l.useMemo)((function(){return a.filter((function(e){var a=e.node.frontmatter.categories;return"All"===t||a.includes(t)}))}),[t]),n=(0,l.useState)(1),i=n[0],o=n[1],s=(0,l.useState)(6)[0],p=i*s,c=p-s,u=r.slice(c,p);return l.createElement(l.Fragment,null,l.createElement(b,null,u.map((function(e){var t=e.node,a=t.id,r=t.fields.slug,n=t.frontmatter;return l.createElement(v,Object.assign({},n,{link:r,key:a}))}))),l.createElement(y,{postPerPage:s,totalPosts:r.length,currentPage:i,paginate:function(e){return o(e)}}))},E=a(2203),Z=a(3757),P=a(4206);var j=function(e){var t=e.location.search,a=e.data.allMarkdownRemark.edges,i=E.parse(t),o="string"==typeof i.category&&i.category?i.category:"All",s=(0,r.Z)("div",{target:"e14jd38w0"})({name:"uvpgix",styles:"width:768px;margin:auto;@media (max-width: 768px){width:100%;}"});return l.createElement(n.Z,{title:"Louis's Blog",description:"개발용 블로그입니다"},l.createElement(s,null,l.createElement(Z.Z,null),l.createElement(P.Z,null),l.createElement(k,{selectedCategory:o,posts:a})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-f41d15409c4112a08ee1.js.map