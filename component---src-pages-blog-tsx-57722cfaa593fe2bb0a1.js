/*! For license information please see component---src-pages-blog-tsx-57722cfaa593fe2bb0a1.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[410],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(u){l=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,r){var n=r(2858),a=r(3884),o=r(379),i=r(521);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(e)}r["%C2"]="�";for(var l=Object.keys(r),u=0;u<l.length;u++){var c=l[u];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],l=e[i];(a?-1!==t.indexOf(i):t(i,l,e))&&(r[i]=l)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),a=r(3038),o=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=r(8936),c=r(7091),s=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?u(e):encodeURIComponent(e):e}function g(e,t){return t.decode?c(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function x(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&g(r,e).includes(e.arrayFormatSeparator);r=o?g(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)})):null===r?r:g(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return g(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o}else n[t]=r?g(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,l=i(e.split("&"));try{for(l.s();!(o=l.n()).done;){var u=o.value;if(""!==u){var c=s(t.decode?u.replace(/\+/g," "):u,"="),f=a(c,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?m:g(m,t),r(g(p,t),m,n)}}}catch(S){l.e(S)}finally{l.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,E=Object.keys(w);k<E.length;k++){var j=E[k];w[j]=b(w[j],t)}else n[h]=b(w,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=h,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[m(t,e),"[",a,"]"].join("")]:[[m(t,e),"[",m(a,e),"]=",m(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[m(t,e),"[]"].join("")]:[[m(t,e),"[]=",m(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[m(t,e),":list="].join("")]:[[m(t,e),":list=",m(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[m(r,e),t,m(a,e)].join("")]:[[n,m(a,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[m(t,e)]:[[m(t,e),"=",m(n,e)].join("")])}}}}(t),a={},i=0,l=Object.keys(e);i<l.length;i++){var u=l[i];r(u)||(a[u]=e[u])}var c=Object.keys(a);return!1!==t.sort&&c.sort(t.sort),c.map((function(r){var a=e[r];return void 0===a?"":null===a?m(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?m(r,t)+"[]":a.reduce(n(r),[]).join("&"):m(r,t)+"="+m(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:h(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var a=x(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),l=Object.assign(i,e.query),u=t.stringify(l,r);u&&(u="?".concat(u));var c=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c="#".concat(r[p]?m(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(a).concat(u).concat(c)},t.pick=function(e,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},p,!1),a);var o=t.parseUrl(e,a),i=o.url,l=o.query,u=o.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(l,r),fragmentIdentifier:u},a)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},9473:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(5092),a=r(7294),o=r(1597);var i=(0,n.Z)(o.rU,{target:"e1wd9mod0"})({name:"wz9z3",styles:"cursor:pointer;display:block;&.active{font-weight:700;}"}),l=function(e){var t=e.to,r=e.target,n=e.children;return a.createElement(i,{to:t,target:r,activeClassName:"active"},n)};l.defaultProps={target:"_self"};var u=l,c=r(3366),s=["children"],f=(0,n.Z)("div",{target:"e8xrup30"})((function(e){var t=e.size;return{fontSize:void 0!==t?t+"px":"initial",fontWeight:e.weight,color:e.color}}),""),p=function(e){var t=e.children,r=(0,c.Z)(e,s);return a.createElement(f,r,t)},d=(0,n.Z)("div",{target:"e5iuriv0"})("display:flex;align-items:center;font-weight:300;",f,"{cursor:pointer;font-size:15px;}",i,"+",f,",",i,"+",i,"{margin-left:20px;}@media (max-width: 768px){",f,"{font-size:13px;}}"),m=function(){return a.createElement(d,null,a.createElement(u,{to:"/"},a.createElement(p,null,"Main")),a.createElement(u,{to:"/about/"},a.createElement(p,null,"About")),a.createElement(u,{to:"/portfolio/"},a.createElement(p,null,"Portfolio")),a.createElement(u,{to:"/blog/"},a.createElement(p,null,"Blog")))};var g=(0,n.Z)("div",{target:"e1ke0ojz0"})({name:"ubz7ph",styles:"display:flex;justify-content:space-between;align-items:center;margin:0 10px;height:50px"}),y=function(){return a.createElement(g,null,a.createElement("div",null,"Louis's Blog"),a.createElement(m,null))}},2824:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r(1309),a=r(3366),o=r(5092),i=r(7294),l=r(1597),u=["active"];var c=(0,o.Z)("div",{target:"ef7czle1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),s=(0,o.Z)((function(e){e.active;var t=(0,a.Z)(e,u);return i.createElement(l.rU,t)}),{target:"ef7czle0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(e){return e.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),f=function(e){var t=e.selectedCategory,r=e.categoryList;return i.createElement(c,null,Object.entries(r).map((function(e){var r=e[0],n=e[1];return i.createElement(s,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},p=r(8945);var d=(0,o.Z)(l.rU,{target:"eteiddd7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),m=(0,o.Z)(p.G,{target:"eteiddd6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),g=(0,o.Z)("div",{target:"eteiddd5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),y=(0,o.Z)("div",{target:"eteiddd4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),x=(0,o.Z)("div",{target:"eteiddd3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),v=(0,o.Z)("div",{target:"eteiddd2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),b=(0,o.Z)("div",{target:"eteiddd1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),h=(0,o.Z)("div",{target:"eteiddd0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),w=function(e){var t=e.title,r=e.date,n=e.categories,a=e.summary,o=e.thumbnail.childImageSharp.gatsbyImageData,l=e.link;return i.createElement(d,{to:l},i.createElement(m,{image:o,alt:"Post Item Image"}),i.createElement(g,null,i.createElement(y,null,t),i.createElement(x,null,r),i.createElement(v,null,n.map((function(e){return i.createElement(b,{key:e},e)}))),i.createElement(h,null,a)))},k=r(5900),E=r.n(k),j=function(e){for(var t=e.postPerPage,r=e.totalPosts,n=e.currentPage,a=e.paginate,o=[],u=1;u<=Math.ceil(r/t);u++)o.push(u);return i.createElement("nav",null,i.createElement("ul",{className:"pagination"},o.map((function(e){return i.createElement("li",{key:e},i.createElement(l.rU,{className:E()("pagination_item",{pagination_currPage:n===e}),onClick:function(){a(e)},to:"/blog"},e))}))))};var S=(0,o.Z)("div",{target:"e1gdo4rh0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),A=function(e){var t=e.selectedCategory,r=e.posts,n=(0,i.useMemo)((function(){return r.filter((function(e){var r=e.node.frontmatter.categories;return"All"===t||r.includes(t)}))}),[t]),a=(0,i.useState)(1),o=a[0],l=a[1],u=(0,i.useState)(5)[0],c=o*u,s=c-u,f=n.slice(s,c);return i.createElement(i.Fragment,null,i.createElement(S,null,f.map((function(e){var t=e.node,r=t.id,n=t.fields.slug,a=t.frontmatter;return i.createElement(w,Object.assign({},a,{link:n,key:r}))}))),i.createElement(j,{postPerPage:u,totalPosts:n.length,currentPage:o,paginate:function(e){return l(e)}}))},O=r(2203),_=r(9473),I=function(e){var t=e.location.search,r=e.data.allMarkdownRemark.edges,a=O.parse(t),o="string"==typeof a.category&&a.category?a.category:"All",l=(0,i.useMemo)((function(){return r.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return i.createElement(n.Z,{title:"Louis's Blog",description:"개발용 블로그입니다"},i.createElement(_.Z,null),i.createElement(f,{selectedCategory:o,categoryList:l}),i.createElement(A,{selectedCategory:o,posts:r}))}},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-57722cfaa593fe2bb0a1.js.map