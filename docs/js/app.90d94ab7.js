(function(t){function e(e){for(var a,i,c=e[0],o=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==r[o]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"2da8":function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("JtcHeader"),s("section",{staticClass:"hero"},[s("div",{staticClass:"hero-body"},[s("router-view")],1)]),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("b",[t._v("JapaniseTextClassifier")]),t._v(" (c) "),s("a",{attrs:{href:"https://twitter.com/koudenpa"}},[t._v("koudenpa")]),t._v(".\n            ")]),s("p",[s("a",{attrs:{href:"https://github.com/7474/JapaniseTextClassifier"}},[t._v("GitHub repository")])])])])}],i=s("d225"),c=s("308d"),o=s("6bb5"),u=s("4e2b"),l=s("9ab4"),f=s("60a3"),p=s("2f62");a["a"].use(p["a"]);var d=new p["a"].Store({}),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),s("div",{staticClass:"navbar-item"},[s("div",{staticClass:"buttons"},[s("a",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"bd-tw-button button",attrs:{href:t.loginUrl}},[t._m(1),s("span",[t._v("\n                            Login\n                        ")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"button",attrs:{href:t.userUrl}},[s("figure",{staticClass:"image is-24x24 is-inline-block"},[s("img",{attrs:{src:t.iconUrl}})]),t._v("\n                        @"+t._s(t.userId)+"\n                    ")]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"button",attrs:{href:t.logoutUrl}},[t._v("\n                        Logout\n                    ")])])]),t._m(2)]),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("List")])],1),s("div",{staticClass:"navbar-end"})])])])},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-item",attrs:{href:"/"}},[s("figure",{staticClass:"image is-32x32 is-inline-block"},[s("img",{attrs:{src:"brand.png",alt:"JapaniseTextClassifier"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fab fa-twitter"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])}],v=(s("ac6a"),s("6b54"),s("b0b4")),g=(s("7514"),s("96cf"),s("3b8d")),y=s("bc3a"),m=s.n(y),O=s("6fc5"),j=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.me={iconUrl:"",userId:"",raw:{}},t}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"setMe",value:function(t){this.me=t,console.log(this.me)}},{key:"getAuthMe",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://japanisetextclassifierfunction.azurewebsites.net/.auth/me",{withCredentials:!0});case 2:if(e=t.sent,console.log(e),200!==e.status){t.next=9;break}return s=e.data[0],t.abrupt("return",{userId:s.user_id,iconUrl:s.user_claims.find((function(t){return"urn:twitter:profile_image_url_https"===t.typ})).val,raw:s});case 9:return t.abrupt("return",{iconUrl:"",userId:"",raw:{}});case 10:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"isLogin",get:function(){return!!this.me.userId}},{key:"userUrl",get:function(){return"https://twitter.com/"+this.me.userId}}]),e}(O["d"]);Object(l["a"])([O["c"]],j.prototype,"setMe",null),Object(l["a"])([Object(O["a"])({commit:"setMe"})],j.prototype,"getAuthMe",null),j=Object(l["a"])([Object(O["b"])({dynamic:!0,store:d,name:"id",namespaced:!0})],j);var _=Object(O["e"])(j),C=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"created",value:function(){_.getAuthMe()}},{key:"isLogin",get:function(){return _.isLogin}},{key:"userId",get:function(){return _.me.userId}},{key:"iconUrl",get:function(){return _.me.iconUrl}},{key:"userUrl",get:function(){return _.userUrl}},{key:"loginUrl",get:function(){return"https://japanisetextclassifierfunction.azurewebsites.net/.auth/login/twitter?post_login_redirect_url="+encodeURIComponent(window.location.toString())}},{key:"logoutUrl",get:function(){return"https://japanisetextclassifierfunction.azurewebsites.net/.auth/logout?post_logout_redirect_uri="+encodeURIComponent(window.location.toString())}}]),e}(f["c"]);C=Object(l["a"])([f["a"]],C);var w=C;document.addEventListener("DOMContentLoaded",(function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(){var e=t.dataset.target,s=document.getElementById(e);t.classList.toggle("is-active"),null!==s&&s.classList.toggle("is-active")}))}))}));var x=w,k=s("2877"),R=Object(k["a"])(x,h,b,!1,null,"e11f0860",null),L=R.exports,T=s("8c4f"),P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("classify-form"),s("hr"),s("result-list",{attrs:{results:t.results}})],1)},E=[],J=(s("8e6e"),s("456d"),s("a481"),s("386d"),s("bd86")),U=s("0b16"),q=s("f28b"),S="http://localhost:7071/api".replace(/\/+$/,""),$=function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a;Object(i["a"])(this,t),this.basePath=s,this.axios=a,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)},I=function(t){function e(t,s){var a;return Object(i["a"])(this,e),a=Object(c["a"])(this,Object(o["a"])(e).call(this,s)),a.field=t,a.name="RequiredError",a}return Object(u["a"])(e,t),e}(Object(q["a"])(Error));function N(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function M(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?N(s,!0).forEach((function(e){Object(J["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):N(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var B=function(t){return{classifyJapaniseText:function(e){var s,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="/v1/classify",n=U["parse"](r,!0);t&&(s=t.baseOptions);var i=M({method:"POST"},s,{},a),c={},o={};c["Content-Type"]="application/json",n.query=M({},n.query,{},o,{},a.query),delete n.search,i.headers=M({},c,{},a.headers);var u=!0;return i.data=u?JSON.stringify(void 0!==e?e:{}):e||"",{url:U["format"](n),options:i}},getClassifyResult:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===e||void 0===e)throw new I("id","Required parameter id was null or undefined when calling getClassifyResult.");var a,r="/v1/classify/{id}".replace("{".concat("id","}"),encodeURIComponent(String(e))),n=U["parse"](r,!0);t&&(a=t.baseOptions);var i=M({method:"GET"},a,{},s),c={},o={};return n.query=M({},n.query,{},o,{},s.query),delete n.search,i.headers=M({},c,{},s.headers),{url:U["format"](n),options:i}},getClassifyResultList:function(e){var s,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="/v1/classify",n=U["parse"](r,!0);t&&(s=t.baseOptions);var i=M({method:"GET"},s,{},a),c={},o={};return void 0!==e&&(o["offset"]=e),n.query=M({},n.query,{},o,{},a.query),delete n.search,i.headers=M({},c,{},a.headers),{url:U["format"](n),options:i}}}},A=function(t){return{classifyJapaniseText:function(e,s){var a=B(t).classifyJapaniseText(e,s);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,s=M({},a.options,{url:e+a.url});return t.request(s)}},getClassifyResult:function(e,s){var a=B(t).getClassifyResult(e,s);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,s=M({},a.options,{url:e+a.url});return t.request(s)}},getClassifyResultList:function(e,s){var a=B(t).getClassifyResultList(e,s);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,s=M({},a.options,{url:e+a.url});return t.request(s)}}}},D=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"classifyJapaniseText",value:function(t,e){return A(this.configuration).classifyJapaniseText(t,e)(this.axios,this.basePath)}},{key:"getClassifyResult",value:function(t,e){return A(this.configuration).getClassifyResult(t,e)(this.axios,this.basePath)}},{key:"getClassifyResultList",value:function(t,e){return A(this.configuration).getClassifyResultList(t,e)(this.axios,this.basePath)}}]),e}($),z=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i["a"])(this,t),this.apiKey=e.apiKey,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions},G=function(t){function e(t){var s;return Object(i["a"])(this,e),s=Object(c["a"])(this,Object(o["a"])(e).call(this,t)),s.classifyResults=[],s.classificationApi=new D(new z({basePath:"https://japanisetextclassifierfunction.azurewebsites.net/api",baseOptions:{withCredentials:!0}})),s}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"addClassifyResult",value:function(t){this.classifyResults.unshift(t)}},{key:"setClassifyResults",value:function(t){this.classifyResults=t}},{key:"classifyJapaniseText",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.classificationApi.classifyJapaniseText({text:e,translatorName:"GcpTranslator",classifierName:"AzureClassifier"});case 2:return s=t.sent,console.log(s),t.abrupt("return",s.data);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"loadResultList",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.classificationApi.getClassifyResultList();case 2:return e=t.sent,console.log(e),t.abrupt("return",e.data.items);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"classifyResultById",get:function(){var t=this;return function(e){return t.classifyResults.find((function(t){return t.id===e}))}}}]),e}(O["d"]);Object(l["a"])([O["c"]],G.prototype,"addClassifyResult",null),Object(l["a"])([O["c"]],G.prototype,"setClassifyResults",null),Object(l["a"])([Object(O["a"])({commit:"addClassifyResult",rawError:!0})],G.prototype,"classifyJapaniseText",null),Object(l["a"])([Object(O["a"])({commit:"setClassifyResults"})],G.prototype,"loadResultList",null),G=Object(l["a"])([Object(O["b"])({dynamic:!0,store:d,name:"japaniseTextClassifier",namespaced:!0})],G);var F=Object(O["e"])(G),H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-mobile"},[s("form",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],attrs:{disabled:t.isBusy}},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jaText,expression:"jaText"}],staticClass:"textarea",attrs:{placeholder:"分類したい日本語"},domProps:{value:t.jaText},on:{input:function(e){e.target.composing||(t.jaText=e.target.value)}}})])]),s("div",{staticClass:"field is-grouped is-grouped-right"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",attrs:{type:"button",disabled:t.isBusy},on:{click:t.onClick}},[t._v("classify")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"message is-info"},[t._m(0)])])},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-body"},[s("i",[t._v("Login")]),t._v(" すると日本語の短文が性的か、攻撃的か、を分類できます。\n        ")])}],Q=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.jaText="",t.isBusy=!1,t}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"onClick",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("onClick"),console.log(this.$store.state),this.isBusy=!0,t.prev=3,t.next=6,F.classifyJapaniseText(this.jaText);case 6:return t.prev=6,this.isBusy=!1,this.jaText="",t.finish(6);case 10:case"end":return t.stop()}}),t,this,[[3,,6,10]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"isLogin",get:function(){return _.isLogin}}]),e}(f["c"]);Q=Object(l["a"])([f["a"]],Q);var V=Q,W=V,X=Object(k["a"])(W,H,K,!1,null,"360a2728",null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-mobile"},[s("ul",t._l(t.results,(function(t){return s("li",[s("ResultSummary",{attrs:{result:t}})],1)})),0)])},tt=[],et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("p",[t._v(t._s(t.result.request.text))]),s("p",{staticClass:"subtitle is-7 has-text-right has-text-grey"},[t._v("Japanise")])]),s("div",{staticClass:"card-content"},[s("p",[t._v(t._s(t.result.translatedText))]),s("p",{staticClass:"subtitle is-7 has-text-right has-text-grey"},[t._v("English")])]),s("div",{staticClass:"card-footer"},t._l(t.result.categories,(function(e){return s("div",{staticClass:"card-footer-item"},[s("div",{staticClass:"tags has-addons"},[s("span",{staticClass:"tag is-dark"},[t._v(t._s(e.name))]),s("span",{staticClass:"tag",class:t._f("scoreClass")(e.score)},[t._v(t._s(t._f("score")(e.score)))])]),s("progress",{staticClass:"progress ",class:t._f("scoreClass")(e.score),attrs:{max:"1"},domProps:{value:e.score}},[t._v("\n                "+t._s(e.name)+": "+t._s(t._f("score")(e.score))+"\n            ")])])})),0),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"card-footer-item"},[s("router-link",{attrs:{to:t.detailPath}},[t._v("Detail")])],1)])])},st=[],at=(s("c5f6"),function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"detailPath",get:function(){return"/detail/"+this.result.id}}]),e}(f["c"]));Object(l["a"])([Object(f["b"])()],at.prototype,"result",void 0),at=Object(l["a"])([Object(f["a"])({filters:{score:function(t){return new Number(t).toFixed(2)},scoreClass:function(t){return t>=.8?"is-danger":t>=.5?"is-warning":"is-info"}}})],at);var rt=at,nt=rt,it=(s("ee95"),Object(k["a"])(nt,et,st,!1,null,"55f12c1c",null)),ct=it.exports,ot=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(f["c"]);Object(l["a"])([Object(f["b"])()],ot.prototype,"results",void 0),ot=Object(l["a"])([Object(f["a"])({components:{ResultSummary:ct}})],ot);var ut=ot,lt=ut,ft=Object(k["a"])(lt,Z,tt,!1,null,"2dcc2b17",null),pt=ft.exports,dt=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"created",value:function(){F.loadResultList()}},{key:"results",get:function(){return F.classifyResults}}]),e}(f["c"]);dt=Object(l["a"])([Object(f["a"])({components:{ClassifyForm:Y,ResultList:pt}})],dt);var ht=dt,bt=ht,vt=Object(k["a"])(bt,P,E,!1,null,"5566abf7",null),gt=vt.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("p",[t._v(t._s(t.result.request.text))]),s("p",{staticClass:"subtitle is-7 has-text-right has-text-grey"},[t._v("Japanise")])]),s("div",{staticClass:"card-content"},[s("p",[t._v(t._s(t.result.translatedText))]),s("p",{staticClass:"subtitle is-7 has-text-right has-text-grey"},[t._v("English")])]),s("div",{staticClass:"card-footer"},t._l(t.result.categories,(function(e){return s("div",{staticClass:"card-footer-item"},[s("div",{staticClass:"tags has-addons"},[s("span",{staticClass:"tag is-dark"},[t._v(t._s(e.name))]),s("span",{staticClass:"tag",class:t._f("scoreClass")(e.score)},[t._v(t._s(t._f("score")(e.score)))])]),s("progress",{staticClass:"progress ",class:t._f("scoreClass")(e.score),attrs:{max:"1"},domProps:{value:e.score}},[t._v("\n                "+t._s(e.name)+": "+t._s(t._f("score")(e.score))+"\n            ")])])})),0),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"card-footer-item"},[s("a",{staticClass:"bd-tw-button button",attrs:{href:t.shreUrl,target:"_blank"}},[t._m(0),s("span",[t._v("\n                    Tweet\n                ")])])])]),s("div",{staticClass:"card-content"},[s("pre",[t._v(t._s(t.rawData))])])])},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fab fa-twitter"})])}],Ot=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(v["a"])(e,[{key:"result",get:function(){return F.classifyResultById(this.$route.params.id)}},{key:"rawData",get:function(){return JSON.stringify(this.result,null,2)}},{key:"shreUrl",get:function(){if(this.result){var t="https://japanisetextclassifierfunction.azurewebsites.net/api/v1/classify/share/"+this.result.id;return"https://twitter.com/intent/tweet?hashtags=JapaniseTextClassifier&text="+encodeURIComponent(t)}return""}}]),e}(f["c"]);Ot=Object(l["a"])([Object(f["a"])({filters:{score:function(t){return new Number(t).toFixed(2)},scoreClass:function(t){return t>=.8?"is-danger":t>=.5?"is-warning":"is-info"}}})],Ot);var jt=Ot,_t=jt,Ct=Object(k["a"])(_t,yt,mt,!1,null,"2df1240f",null),wt=Ct.exports;a["a"].use(T["a"]);var xt=new T["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"home",component:gt},{path:"/detail/:id",name:"detail",component:wt}]});f["c"].use(p["a"]);var kt=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(f["c"]);kt=Object(l["a"])([Object(f["a"])({store:d,router:xt,components:{JtcHeader:L}})],kt);var Rt=kt,Lt=Rt,Tt=Object(k["a"])(Lt,r,n,!1,null,null,null),Pt=Tt.exports;a["a"].config.productionTip=!0,new a["a"]({render:function(t){return t(Pt)}}).$mount("#app")},ee95:function(t,e,s){"use strict";var a=s("2da8"),r=s.n(a);r.a}});
//# sourceMappingURL=app.90d94ab7.js.map