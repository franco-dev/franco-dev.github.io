(function(e){function t(t){for(var o,c,u=t[0],l=t[1],s=t[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);a&&a(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var a=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"26b7":function(e,t,n){"use strict";n("cb08")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("HelloWorld")]),n("img",{attrs:{src:"https://de2c7r60bw5ig.cloudfront.net/courses/60f98d44369bf1178b260152/60f98d44369bf1178b260152/1vgXO1CPmNidXqTOELXduEuRhVX/image.jpg?Expires=1627177911&Signature=DZnREsoUT0vZW~q561D9WNkLy-tf93bv96vtZgQk-aA-69-4W2ZZEq4NlwR9FD9-XcDDpTURGpAt7d2NwHpIM8h74KUYeyx0kD8FjG~AKh0JEdPuA3GA2SAgw7KXU5RaeiYeETmsD1v5TsnTiGvOrc8j~eVwKyLFcWb-sbL8pG5H1re5q4R4F21bK5KMeucGkej~5ZfdCjmUKN1ClOSlLYnM5fkkCYqHZBBNRSCtjGuSh5H0U60sBrpGoTqPAnlLFO6XUYzMdg1cl9DYw9jTtUvE5Fx7lQfBQbDP7OPRdaHlu1OIeFYro9WUkLd~CpoiWIAU30EREfaKGOCaQWW8vg__&Key-Pair-Id=K2EBSW54K1LSAC",width:"640",height:"640",alt:""}}),n("div",[n("button",{on:{click:e.refrehToken}},[e._v("rt")]),n("button",{on:{click:e.getCookies}},[e._v("gc")])]),e._m(0),n("video",{staticClass:"video-js",attrs:{id:"my-video",controls:"",preload:"auto",width:"640",height:"264","data-setup":"{}",crossorigin:"anonymous"}},[n("source",{attrs:{src:e.videoURL,type:"application/x-mpegURL"}})])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("video",{attrs:{id:"video"}})])}],l=(n("99af"),n("fb6a"),n("b0c0"),n("d4ec")),s=n("bee2"),a=n("bc3a"),f=n.n(a),d=f.a.create({baseURL:"http://localhost:8000/api",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":!0,Authorization:"Bearer ".concat(sessionStorage.getItem("token"))}}),h=function(){function e(){Object(l["a"])(this,e)}return Object(s["a"])(e,[{key:"upload",value:function(e,t,n,o){var r=new FormData;return r.append("video",e,t),d.post("/sections/60f98d44369bf1178b260152/content/1vgXO1CPmNidXqTOELXduEuRhVX/video",r,{headers:{"Content-Type":"multipart/form-data","Content-Range":n},onUploadProgress:o})}},{key:"getCookies",value:function(){return d.get("/sections/60f98d44369bf1178b260152/content/1vgXO1CPmNidXqTOELXduEuRhVX",{headers:{"Content-Type":"application/json"},withCredentials:!0})}},{key:"refreshToken",value:function(){return d.post("/auth/refresh",{refreshToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWZyZXNoX2lkIjoiNjBmZDcxNTRlMDc5OTI4M2NmZWE3NjNmKys2MGRjY2U4NTc4YWU1MmY1NmJjMjMzN2MiLCJ1c2VyX2lkIjoiNjBkY2NlODU3OGFlNTJmNTZiYzIzMzdjIiwiZXhwaXJlc19hdCI6MTYyNzgyNzE1NiwiaXNzIjoidGVzdCJ9.SxdODvFFUbfDu5C2HKLrqTexJpOPekmAlOcrw0i7sf4"})}}]),e}(),p=new h,v={name:"HelloWorld",props:{msg:String},data:function(){return{file:void 0,chunkSize:4194304,currentChunkStartByte:0,currentChunkFinalByte:void 0,videoURL:"https://de3c7r60bw5ig.cloudfront.net/courses/60f98d44369bf1178b260152/60f98d44369bf1178b260152/1vgXO1CPmNidXqTOELXduEuRhVX/1vgXO1CPmNidXqTOELXduEuRhVX.m3u8"}},mounted:function(){var e=window.videojs("my-video");e.responsive(!0),e.ready((function(){e.src({src:"https://de3c7r60bw5ig.cloudfront.net/courses/60f98d44369bf1178b260152/60f98d44369bf1178b260152/1vgXO1CPmNidXqTOELXduEuRhVX/1vgXO1CPmNidXqTOELXduEuRhVX.m3u8",type:"application/x-mpegURL",withCredentials:!0})}))},methods:{selectFile:function(){this.file=this.$refs.file.files.item(0),this.currentChunkFinalByte=this.chunkSize>this.file.size?this.file.size:this.chunkSize,console.log(this.file)},getCookies:function(){var e=this;p.getCookies().then((function(e){console.log(e)})).catch((function(t){e.file=void 0,console.log(t)}))},refrehToken:function(){p.refreshToken().then((function(e){console.log(e),sessionStorage.setItem("token",e.data.accessToken)})).catch((function(e){console.log(e)}))},uploadFile:function(){var e=this,t="bytes ".concat(this.currentChunkStartByte,"-").concat(this.currentChunkFinalByte,"/").concat(this.file.size),n=this.file.slice(this.currentChunkStartByte,this.currentChunkFinalByte,this.file.type);console.log(t),p.upload(n,this.file.name,t,(function(e){console.log(e)})).then((function(t){console.log(t);var n=e.file.size-e.currentChunkFinalByte;return e.currentChunkFinalByte===e.file.size?(alert("Yay, download completed! Chao!"),void(e.file=void 0)):(n<e.chunkSize?(e.currentChunkStartByte=e.currentChunkFinalByte,e.currentChunkFinalByte=e.currentChunkStartByte+n):(e.currentChunkStartByte=e.currentChunkFinalByte,e.currentChunkFinalByte=e.currentChunkStartByte+e.chunkSize),e.uploadFile())})).catch((function(t){e.file=void 0,console.log(t)}))}}},g=v,b=(n("26b7"),n("2877")),y=Object(b["a"])(g,c,u,!1,null,"1dd4631c",null),k=y.exports,m={name:"App",components:{HelloWorld:k}},C=m,O=(n("034f"),Object(b["a"])(C,r,i,!1,null,null,null)),X=O.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(X)}}).$mount("#app")},"85ec":function(e,t,n){},cb08:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.36597ad7.js.map