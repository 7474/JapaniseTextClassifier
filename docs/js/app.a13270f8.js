(function(e){function t(t){for(var n,i,u=t[0],c=t[1],o=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,o||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("JtcHeader"),r("Home")],1)},a=[],i=r("d225"),u=r("308d"),c=r("6bb5"),o=r("4e2b"),l=r("9ab4"),f=r("60a3"),p=r("2f62");n["a"].use(p["a"]);var h=new p["a"].Store({}),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a",{directives:[{name:"show",rawName:"v-show",value:!e.isLogin,expression:"!isLogin"}],attrs:{href:e.loginUrl}},[e._v("Login with Twitter")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isLogin,expression:"isLogin"}]},[r("a",{attrs:{href:e.userUrl}},[r("img",{staticStyle:{width:"1.4em"},attrs:{src:e.iconUrl}}),e._v(e._s(e.userId))])])])},d=[],v=(r("6b54"),r("b0b4")),y=(r("7514"),r("96cf"),r("3b8d")),O=r("bc3a"),j=r.n(O),g=r("6fc5"),m=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.me={iconUrl:"",userId:"",raw:{}},e}return Object(o["a"])(t,e),Object(v["a"])(t,[{key:"setMe",value:function(e){this.me=e,console.log(this.me)}},{key:"getAuthMe",value:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://japanisetextclassifierfunction.azurewebsites.net/.auth/me",{withCredentials:!0});case 2:if(t=e.sent,console.log(t),200!==t.status){e.next=9;break}return r=t.data[0],e.abrupt("return",{userId:r.user_id,iconUrl:r.user_claims.find((function(e){return"urn:twitter:profile_image_url_https"===e.typ})).val,raw:r});case 9:return e.abrupt("return",{iconUrl:"",userId:"",raw:{}});case 10:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isLogin",get:function(){return!!this.me.userId}},{key:"userUrl",get:function(){return"https://twitter.com/"+this.me.userId}}]),t}(g["d"]);Object(l["a"])([g["c"]],m.prototype,"setMe",null),Object(l["a"])([Object(g["a"])({commit:"setMe"})],m.prototype,"getAuthMe",null),m=Object(l["a"])([Object(g["b"])({dynamic:!0,store:h,name:"id",namespaced:!0})],m);var w=Object(g["e"])(m),x=function(e){function t(){return Object(i["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),Object(v["a"])(t,[{key:"created",value:function(){w.getAuthMe()}},{key:"isLogin",get:function(){return w.isLogin}},{key:"userId",get:function(){return w.me.userId}},{key:"iconUrl",get:function(){return w.me.iconUrl}},{key:"userUrl",get:function(){return w.userUrl}},{key:"loginUrl",get:function(){return"https://japanisetextclassifierfunction.azurewebsites.net/.auth/login/twitter?post_login_redirect_url="+encodeURIComponent(window.location.toString())}}]),t}(f["c"]);x=Object(l["a"])([f["a"]],x);var R=x,_=R,k=r("2877"),C=Object(k["a"])(_,b,d,!1,null,"da85adb2",null),T=C.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("JapaniseTextClassifierVueJsClient")]),r("classify-form"),r("hr"),r("result-list",{attrs:{results:e.results}})],1)},L=[],J=(r("8e6e"),r("ac6a"),r("456d"),r("a481"),r("386d"),r("bd86")),q=r("0b16"),U=r("f28b"),E="http://localhost:7071/api".replace(/\/+$/,""),S=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j.a;Object(i["a"])(this,e),this.basePath=r,this.axios=n,t&&(this.configuration=t,this.basePath=t.basePath||this.basePath)},I=function(e){function t(e,r){var n;return Object(i["a"])(this,t),n=Object(u["a"])(this,Object(c["a"])(t).call(this,r)),n.field=e,n.name="RequiredError",n}return Object(o["a"])(t,e),t}(Object(U["a"])(Error));function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(J["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){return{classifyJapaniseText:function(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s="/v1/classify",a=q["parse"](s,!0);e&&(r=e.baseOptions);var i=$({method:"POST"},r,{},n),u={},c={};u["Content-Type"]="application/json",a.query=$({},a.query,{},c,{},n.query),delete a.search,i.headers=$({},u,{},n.headers);var o=!0;return i.data=o?JSON.stringify(void 0!==t?t:{}):t||"",{url:q["format"](a),options:i}},getClassifyResult:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===t||void 0===t)throw new I("id","Required parameter id was null or undefined when calling getClassifyResult.");var n,s="/v1/classify/{id}".replace("{".concat("id","}"),encodeURIComponent(String(t))),a=q["parse"](s,!0);e&&(n=e.baseOptions);var i=$({method:"GET"},n,{},r),u={},c={};return a.query=$({},a.query,{},c,{},r.query),delete a.search,i.headers=$({},u,{},r.headers),{url:q["format"](a),options:i}},getClassifyResultList:function(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s="/v1/classify",a=q["parse"](s,!0);e&&(r=e.baseOptions);var i=$({method:"GET"},r,{},n),u={},c={};return void 0!==t&&(c["offset"]=t),a.query=$({},a.query,{},c,{},n.query),delete a.search,i.headers=$({},u,{},n.headers),{url:q["format"](a),options:i}}}},N=function(e){return{classifyJapaniseText:function(t,r){var n=A(e).classifyJapaniseText(t,r);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,r=$({},n.options,{url:t+n.url});return e.request(r)}},getClassifyResult:function(t,r){var n=A(e).getClassifyResult(t,r);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,r=$({},n.options,{url:t+n.url});return e.request(r)}},getClassifyResultList:function(t,r){var n=A(e).getClassifyResultList(t,r);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E,r=$({},n.options,{url:t+n.url});return e.request(r)}}}},B=function(e){function t(){return Object(i["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),Object(v["a"])(t,[{key:"classifyJapaniseText",value:function(e,t){return N(this.configuration).classifyJapaniseText(e,t)(this.axios,this.basePath)}},{key:"getClassifyResult",value:function(e,t){return N(this.configuration).getClassifyResult(e,t)(this.axios,this.basePath)}},{key:"getClassifyResultList",value:function(e,t){return N(this.configuration).getClassifyResultList(e,t)(this.axios,this.basePath)}}]),t}(S),z=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i["a"])(this,e),this.apiKey=t.apiKey,this.username=t.username,this.password=t.password,this.accessToken=t.accessToken,this.basePath=t.basePath,this.baseOptions=t.baseOptions},D=function(e){function t(e){var r;return Object(i["a"])(this,t),r=Object(u["a"])(this,Object(c["a"])(t).call(this,e)),r.classifyResults=[],r.classificationApi=new B(new z({basePath:"https://japanisetextclassifierfunction.azurewebsites.net/api",baseOptions:{withCredentials:!0}})),r}return Object(o["a"])(t,e),Object(v["a"])(t,[{key:"addClassifyResult",value:function(e){this.classifyResults.unshift(e)}},{key:"setClassifyResults",value:function(e){this.classifyResults=e}},{key:"classifyJapaniseText",value:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.classificationApi.classifyJapaniseText({text:t,translatorName:"GcpTranslator",classifierName:"AzureClassifier"});case 2:return r=e.sent,console.log(r),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadResultList",value:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.classificationApi.getClassifyResultList();case 2:return t=e.sent,console.log(t),e.abrupt("return",t.data.items);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"classifyResultById",get:function(){var e=this;return function(t){return e.classifyResults.find((function(e){return e.id===t}))}}}]),t}(g["d"]);Object(l["a"])([g["c"]],D.prototype,"addClassifyResult",null),Object(l["a"])([g["c"]],D.prototype,"setClassifyResults",null),Object(l["a"])([Object(g["a"])({commit:"addClassifyResult",rawError:!0})],D.prototype,"classifyJapaniseText",null),Object(l["a"])([Object(g["a"])({commit:"setClassifyResults"})],D.prototype,"loadResultList",null),D=Object(l["a"])([Object(g["b"])({dynamic:!0,store:h,name:"japaniseTextClassifier",namespaced:!0})],D);var H=Object(g["e"])(D),G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{directives:[{name:"show",rawName:"v-show",value:e.isLogin,expression:"isLogin"}],attrs:{disabled:e.isBusy}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jaText,expression:"jaText"}],attrs:{placeholder:"分類したい日本語"},domProps:{value:e.jaText},on:{input:function(t){t.target.composing||(e.jaText=t.target.value)}}}),r("button",{attrs:{type:"button",disabled:e.isBusy},on:{click:e.onClick}},[e._v("classify")])])])},K=[],F=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.jaText="",e.isBusy=!1,e}return Object(o["a"])(t,e),Object(v["a"])(t,[{key:"onClick",value:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("onClick"),console.log(this.$store.state),this.isBusy=!0,e.prev=3,e.next=6,H.classifyJapaniseText(this.jaText);case 6:return e.prev=6,this.isBusy=!1,this.jaText="",e.finish(6);case 10:case"end":return e.stop()}}),e,this,[[3,,6,10]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"isLogin",get:function(){return w.isLogin}}]),t}(f["c"]);F=Object(l["a"])([f["a"]],F);var V=F,Q=V,W=Object(k["a"])(Q,G,K,!1,null,"15c8b2a6",null),X=W.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.results,(function(e){return r("li",[r("result",{attrs:{result:e}})],1)})),0)])},Z=[],ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(e._s(e.result.request.text))]),r("p",[e._v("↓")]),r("p",[e._v(e._s(e.result.translatedText))]),r("ul",e._l(e.result.categories,(function(t){return r("li",[e._v("\n            "+e._s(t.name)+": "+e._s(t.score)+"\n        ")])})),0)])},te=[],re=function(e){function t(){return Object(i["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),t}(f["c"]);Object(l["a"])([Object(f["b"])()],re.prototype,"result",void 0),re=Object(l["a"])([f["a"]],re);var ne=re,se=ne,ae=Object(k["a"])(se,ee,te,!1,null,"adcb1f18",null),ie=ae.exports,ue=function(e){function t(){return Object(i["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),t}(f["c"]);Object(l["a"])([Object(f["b"])()],ue.prototype,"results",void 0),ue=Object(l["a"])([Object(f["a"])({components:{Result:ie}})],ue);var ce=ue,oe=ce,le=Object(k["a"])(oe,Y,Z,!1,null,"0fc83c45",null),fe=le.exports,pe=function(e){function t(){return Object(i["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),Object(v["a"])(t,[{key:"created",value:function(){H.loadResultList()}},{key:"results",get:function(){return H.classifyResults}}]),t}(f["c"]);pe=Object(l["a"])([Object(f["a"])({components:{ClassifyForm:X,ResultList:fe}})],pe);var he=pe,be=he,de=Object(k["a"])(be,P,L,!1,null,"0f04bc94",null),ve=de.exports;f["c"].use(p["a"]);var ye=function(e){function t(){return Object(i["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),t}(f["c"]);ye=Object(l["a"])([Object(f["a"])({store:h,components:{JtcHeader:T,Home:ve}})],ye);var Oe=ye,je=Oe,ge=Object(k["a"])(je,s,a,!1,null,null,null),me=ge.exports;n["a"].config.productionTip=!0,new n["a"]({render:function(e){return e(me)}}).$mount("#app")}});
//# sourceMappingURL=app.a13270f8.js.map