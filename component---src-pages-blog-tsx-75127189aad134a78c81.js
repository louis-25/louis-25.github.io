/*! For license information please see component---src-pages-blog-tsx-75127189aad134a78c81.js.LICENSE.txt */
(self.webpackChunklouis_25=self.webpackChunklouis_25||[]).push([[410],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,r){var n=r(2858),a=r(3884),o=r(379),i=r(521);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(e)}r["%C2"]="�";for(var l=Object.keys(r),u=0;u<l.length;u++){var s=l[u];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],l=e[i];(a?-1!==t.indexOf(i):t(i,l,e))&&(r[i]=l)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),a=r(3038),o=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=r(8936),s=r(7091),c=r(4734),p=r(8616),f=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?u(e):encodeURIComponent(e):e}function g(e,t){return t.decode?s(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function x(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function h(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function b(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&g(r,e).includes(e.arrayFormatSeparator);r=o?g(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)})):null===r?r:g(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o}else n[t]=r?g(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,l=i(e.split("&"));try{for(l.s();!(o=l.n()).done;){var u=o.value;if(""!==u){var s=c(t.decode?u.replace(/\+/g," "):u,"="),p=a(s,2),f=p[0],m=p[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?m:g(m,t),r(g(f,t),m,n)}}}catch(S){l.e(S)}finally{l.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var b=v[x],w=n[b];if("object"==typeof w&&null!==w)for(var k=0,E=Object.keys(w);k<E.length;k++){var j=E[k];w[j]=h(w[j],t)}else n[b]=h(w,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=b,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[m(t,e),"[",a,"]"].join("")]:[[m(t,e),"[",m(a,e),"]=",m(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[m(t,e),"[]"].join("")]:[[m(t,e),"[]=",m(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[m(t,e),":list="].join("")]:[[m(t,e),":list=",m(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[m(r,e),t,m(a,e)].join("")]:[[n,m(a,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[m(t,e)]:[[m(t,e),"=",m(n,e)].join("")])}}}}(t),a={},i=0,l=Object.keys(e);i<l.length;i++){var u=l[i];r(u)||(a[u]=e[u])}var s=Object.keys(a);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var a=e[r];return void 0===a?"":null===a?m(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?m(r,t)+"[]":a.reduce(n(r),[]).join("&"):m(r,t)+"="+m(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=c(e,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:b(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},f,!0),r);var a=x(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),l=Object.assign(i,e.query),u=t.stringify(l,r);u&&(u="?".concat(u));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(r[f]?m(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(a).concat(u).concat(s)},t.pick=function(e,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},f,!1),a);var o=t.parseUrl(e,a),i=o.url,l=o.query,u=o.fragmentIdentifier;return t.stringifyUrl({url:i,query:p(l,r),fragmentIdentifier:u},a)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},4293:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(6771),a=r(1309),o=r(3366),i=r(7294),l=r(1597),u=["active"];var s=(0,n.Z)("div",{target:"e1tnz7u41"})({name:"1j3zsgn",styles:"display:flex;flex-direction:column;flex-wrap:wrap;margin:20px auto 0;@media (max-width: 1350px){flex-direction:row;}@media (max-width: 768px){width:100%;}"}),c=(0,n.Z)((function(e){e.active;var t=(0,o.Z)(e,u);return i.createElement(l.rU,t)}),{target:"e1tnz7u40"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(e){return e.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){}"),p=function(e){var t=e.selectedCategory,r=e.categoryList;return i.createElement(s,null,Object.entries(r).map((function(e){var r=e[0],n=e[1];return i.createElement(c,{to:"/blog/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},f=r(8945);var d=(0,n.Z)(l.rU,{target:"es6gvlh8"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),m=(0,n.Z)("div",{target:"es6gvlh7"})({name:"h8hwxc",styles:"height:270px;display:flex;align-items:center;overflow:hidden"}),g=(0,n.Z)(f.G,{target:"es6gvlh6"})({name:"w8zkcy",styles:"width:100%;max-height:300px;align-items:center;flex:8"}),y=(0,n.Z)("div",{target:"es6gvlh5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),x=(0,n.Z)("div",{target:"es6gvlh4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),v=(0,n.Z)("div",{target:"es6gvlh3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),h=(0,n.Z)("div",{target:"es6gvlh2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),b=(0,n.Z)("div",{target:"es6gvlh1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),w=(0,n.Z)("div",{target:"es6gvlh0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),k=function(e){var t=e.title,r=e.date,n=e.categories,a=e.summary,o=e.thumbnail.childImageSharp.gatsbyImageData,l=e.link;return i.createElement(d,{to:l},i.createElement(m,null,i.createElement(g,{image:o,alt:"Post Item Image"})),i.createElement(y,null,i.createElement(x,null,t),i.createElement(v,null,r),i.createElement(h,null,n.map((function(e){return i.createElement(b,{key:e},e)}))),i.createElement(w,null,a)))},E=r(5900),j=r.n(E),S=function(e){for(var t=e.postPerPage,r=e.totalPosts,n=e.currentPage,a=e.paginate,o=[],l=1;l<=Math.ceil(r/t);l++)o.push(l);return i.createElement("nav",null,i.createElement("ul",{className:"pagination"},o.map((function(e){return i.createElement("li",{key:e,className:j()("pagination_item",{pagination_currPage:n===e}),onClick:function(){a(e),window.scrollTo(0,0)}},e)}))))};var I=(0,n.Z)("div",{target:"eq5nnk00"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),A=function(e){var t=e.selectedCategory,r=e.posts,n=(0,i.useMemo)((function(){return r.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]),a=(0,i.useState)(1),o=a[0],l=a[1],u=(0,i.useState)(6)[0],s=o*u,c=s-u,p=n.slice(c,s);return i.createElement(i.Fragment,null,i.createElement(I,null,p.map((function(e){var t=e.node,r=t.id,n=t.fields.slug,a=t.frontmatter;return i.createElement(k,Object.assign({},a,{link:n,key:r}))}))),i.createElement(S,{postPerPage:u,totalPosts:n.length,currentPage:o,paginate:function(e){return l(e)}}))},O=r(2203),F=r(3757),_=r(2394);var Z=(0,n.Z)(f.G,{target:"e1v3xtl80"})({name:"168wvqe",styles:"width:150px;height:150px;border-radius:50%"}),C=function(e){var t=e.profileImage;return i.createElement(Z,{image:t,alt:"Profile Image"})};var M=(0,n.Z)("div",{target:"eduu1h35"})({name:"12u6hgu",styles:"position:absolute;width:220px;margin-top:50px;left:-15rem;border-radius:10px;padding:10px;@media (max-width: 1350px){position:relative;width:100%;left:0;padding:20px;}"}),N=(0,n.Z)("div",{target:"eduu1h34"})({name:"1pxb2y6",styles:"@media (max-width: 1350px){display:flex;align-items:center;}"}),U=(0,n.Z)("div",{target:"eduu1h33"})({name:"1fwl4or",styles:"width:768px;position:relative;@media (max-width: 768px){width:100%;padding:0px 20px;}"}),P=(0,n.Z)("h2",{target:"eduu1h32"})({name:"dc6528",styles:"margin-top:20px;border-top:1px solid black"}),R=(0,n.Z)("div",{target:"eduu1h31"})({name:"1ijmh6t",styles:"text-align:center;@media (max-width: 1350px){display:flex;}"}),z=(0,n.Z)("div",{target:"eduu1h30"})({name:"1lmjle2",styles:"@media (max-width: 1350px){margin-top:45px;margin-left:20px;}"}),$={github:"https://github.com/louis-25",email:"20151577@vision.hoseo.edu"},L=function(e){var t=e.gatsbyImageData,r=e.children;return i.createElement(U,null,i.createElement(M,null,i.createElement(N,null,i.createElement(R,null,i.createElement(C,{profileImage:t}),i.createElement(z,null,i.createElement("h2",null,"Louis"),i.createElement(_.Z,{links:$})))),i.createElement(P,null,"Category"),r))};var T=function(e){var t=e.location.search,r=e.data,o=r.allMarkdownRemark.edges,l=r.file.childImageSharp.gatsbyImageData,u=O.parse(t),s="string"==typeof u.category&&u.category?u.category:"All",c=(0,i.useMemo)((function(){return o.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]),f=(0,n.Z)("div",{target:"e14jd38w0"})({name:"uvpgix",styles:"width:768px;margin:auto;@media (max-width: 768px){width:100%;}"});return i.createElement(a.Z,{title:"Louis's Blog",description:"개발용 블로그입니다"},i.createElement(f,null,i.createElement(F.Z,null),i.createElement(L,{gatsbyImageData:l},i.createElement(p,{selectedCategory:s,categoryList:c})),i.createElement(A,{selectedCategory:s,posts:o})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-75127189aad134a78c81.js.map