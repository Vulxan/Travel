(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],a[r]&&f.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/TravelOnline/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00a7":function(t,e,i){"use strict";var s=i("c1b4"),a=i.n(s);a.a},"034f":function(t,e,i){"use strict";var s=i("c21b"),a=i.n(s);a.a},"0b6d":function(t,e,i){},"0e3f":function(t,e,i){},2162:function(t,e,i){},"2f0a":function(t,e,i){},"2fc7":function(t,e,i){"use strict";var s=i("2f0a"),a=i.n(s);a.a},3319:function(t,e,i){"use strict";var s=i("2162"),a=i.n(s);a.a},"33fe":function(t,e,i){"use strict";var s=i("d037"),a=i.n(s);a.a},"3db4":function(t,e,i){},"534b":function(t,e,i){"use strict";var s=i("cf22"),a=i.n(s);a.a},5414:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",{attrs:{exclude:"Detail"}},[i("router-view")],1)],1)},n=[],r=(i("034f"),i("2877")),o={},c=Object(r["a"])(o,a,n,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("home-header"),i("home-swiper",{attrs:{list:t.swiperList}}),i("home-icons",{attrs:{list:t.iconList}}),i("home-recommend",{attrs:{list:t.recList}}),i("home-weekend",{attrs:{list:t.weList}})],1)},f=[],m=i("c93e"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._m(1),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-rt"},[t._v(t._s(this.city)+" "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-lt"},[i("div",{staticClass:"iconfont back-icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-input"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v("输入城市/景点/游玩主题")])}],v=i("2f62"),C={name:"HomeHeader",computed:Object(m["a"])({},Object(v["c"])(["city"]))},y=C,_=(i("b182"),Object(r["a"])(y,p,h,!1,null,"0a2c62dd",null));_.options.__file="Header.vue";var b=_.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.showSwiper?i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(t){return i("swiper-slide",{key:t.id},[i("a",{attrs:{href:"#"}},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:"#"}})])])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},w=[],k={name:"HomeSwiper",data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},loop:!0,autoplay:!0}}},props:{list:Array},computed:{showSwiper:function(){return this.list.length}}},x=k,O=(i("5977"),Object(r["a"])(x,g,w,!1,null,"a0bb0c70",null));O.options.__file="Swiper.vue";var j=O.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:e.desc}})]),i("div",{staticClass:"icon-desc",domProps:{textContent:t._s(e.desc)}})])}))}))],1)},S=[],H=(i("ac6a"),{name:"HomeIcons",props:{list:Array},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}}),L=H,$=(i("8865"),Object(r["a"])(L,I,S,!1,null,"dbebb398",null));$.options.__file="Icons.vue";var E=$.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("div",{staticClass:"title"},[t._v("热销推荐")]),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail?id="+e.id}},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"#"}})]),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title",domProps:{textContent:t._s(e.title)}}),i("p",{staticClass:"item-stars"},[i("span",{staticClass:"stars iconfont"},[t._v("")]),t._v("   "),i("span",{staticClass:"comment",domProps:{textContent:t._s(e.comment)}})]),i("p",{staticClass:"item-pri-add"},[i("span",{staticClass:"pri"},[t._v("¥"),i("em",{staticClass:"pri-num",domProps:{textContent:t._s(e.pri)}})]),i("span",{staticClass:"add",domProps:{textContent:t._s(e.add)}})])])])}))])},N=[],D={name:"HomeRecommend",props:{list:Array}},A=D,T=(i("00a7"),Object(r["a"])(A,P,N,!1,null,"5a990e2c",null));T.options.__file="Recommend.vue";var G=T.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend"},[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),i("ul",t._l(t.list,function(e){return i("li",{key:e.id},[i("div",{staticClass:"item-image-wrapper"},[i("img",{staticClass:"item-image",attrs:{src:e.imgUrl}})]),i("div",{staticClass:"item-info"},[i("div",{staticClass:"item-title",domProps:{textContent:t._s(e.title)}}),i("div",{staticClass:"item-desc",domProps:{textContent:t._s(e.desc)}})])])}))])},B=[],U={name:"HomeWeekend",props:{list:Array}},F=U,R=(i("6e9f"),Object(r["a"])(F,M,B,!1,null,"6a4d7709",null));R.options.__file="Weekend.vue";var W=R.exports,J=i("bc3a"),q=i.n(J),Y={name:"Home",data:function(){return{lastCity:"",swiperList:[],iconList:[],recList:[],weList:[]}},components:{HomeHeader:b,HomeSwiper:j,HomeIcons:E,HomeRecommend:G,HomeWeekend:W},methods:{getHomeInfo:function(){q.a.get("/TravelOnline/mock/home.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recList=e.recommedList,this.weList=e.weekendList}}},computed:Object(m["a"])({},Object(v["c"])(["city"])),mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},z=Y,K=(i("534b"),Object(r["a"])(z,d,f,!1,null,null,null));K.options.__file="Home.vue";var Q=K.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city"},[i("city-header"),i("city-search",{attrs:{cities:t.cities}}),i("city-list",{attrs:{hot:t.hotCities,cities:t.cities}})],1)},X=[],Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("router-link",{attrs:{to:"/"}},[i("span",{staticClass:"iconfont header-back"},[t._v("")])]),t._v("城市选择")],1)},tt=[],et={name:"CityHeader"},it=et,st=(i("2fc7"),Object(r["a"])(it,Z,tt,!1,null,"7894b9ed",null));st.options.__file="Header.vue";var at=st.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("div",{staticClass:"search-bar"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasNoInput,expression:"!hasNoInput"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",domProps:{textContent:t._s(e.name)},on:{click:function(i){t.handleCityClick(e.name)}}})}),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("没有匹配的城市")])],2)])])},rt=[],ot=(i("386d"),i("7f7f"),i("1fba")),ct={name:"CitySearch",data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length},hasNoInput:function(){return""===this.keyword.trim()}},methods:Object(m["a"])({handleCityClick:function(t){this.changeCity(t),this.$router.push("/"),this.keyword=""}},Object(v["b"])(["changeCity"])),watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword.trim())>-1||i.name.indexOf(t.keyword.trim())>-1)&&e.push(i)});t.list=e},100):this.list=[]}},props:{cities:Object},mounted:function(){this.scroll=new ot["a"](this.$refs.search,{click:!0})}},lt=ct,ut=(i("b840"),Object(r["a"])(lt,nt,rt,!1,null,"3f9870b5",null));ut.options.__file="Search.vue";var dt=ut.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"current-city"},[i("div",{staticClass:"title"},[t._v("当前城市")]),i("div",{staticClass:"city-wrapper"},[i("div",{staticClass:"city border-right"},[t._v(t._s(this.currentCity))])])]),i("div",{staticClass:"hot-cities"},[i("div",{staticClass:"title"},[t._v("热门城市")]),i("div",{staticClass:"cities"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"city border",domProps:{textContent:t._s(e.name)},on:{click:function(i){t.handleCityClick(e.name)}}})}))]),i("div",{staticClass:"alpha-index"},[i("div",{staticClass:"title"},[t._v("字母排序")]),i("div",{staticClass:"indexes"},t._l(t.cities,function(e,s){return i("div",{key:s,staticClass:"index"},[i("a",{staticClass:"anc",attrs:{href:"#"},domProps:{textContent:t._s(s)},on:{click:function(e){return e.preventDefault(),t.handleLetterClick(e)}}})])}))]),i("div",{staticClass:"area"},[t._l(t.cities,function(e,s){return[i("div",{key:s,staticClass:"title alpha-title",attrs:{id:s},domProps:{textContent:t._s(s)}}),i("div",{key:"part"+s,staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item",domProps:{textContent:t._s(e.name)},on:{click:function(i){t.handleCityClick(e.name)}}})}))]})],2)])])},mt=[],pt={name:"CityList",props:{hot:Array,cities:Object},mounted:function(){this.scroll=new ot["a"](this.$refs.wrapper,{click:!0})},methods:Object(m["a"])({handleLetterClick:function(t){this.scroll.scrollToElement("#"+t.target.innerText,1e3)},handleCityClick:function(t){this.changeCity(t),this.$router.push("/"),this.scroll.scrollTo(0,0)}},Object(v["b"])(["changeCity"])),computed:Object(m["a"])({},Object(v["c"])({currentCity:"city"}))},ht=pt,vt=(i("e127"),Object(r["a"])(ht,ft,mt,!1,null,"12857604",null));vt.options.__file="List.vue";var Ct=vt.exports,yt={name:"City",data:function(){return{hotCities:[],cities:{}}},components:{CityHeader:at,CitySearch:dt,CityList:Ct},methods:{getCityInfo:function(){q.a.get("/TravelOnline/mock/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.hotCities=e.hotCities,this.cities=e.cities}}},mounted:function(){this.getCityInfo()}},_t=yt,bt=(i("8c48"),Object(r["a"])(_t,V,X,!1,null,"8dff06dc",null));bt.options.__file="City.vue";var gt=bt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detial"},[i("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,bannerImgs:t.gallaryImgs}}),i("detail-header"),i("detial-list",{attrs:{list:t.list}})],1)},kt=[],xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner",on:{click:t.handleGallaryToggle}},[i("div",{staticClass:"banner-wrapper"},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title",domProps:{textContent:t._s(t.sightName)}}),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.bannerImgs.length)+"\n      ")])])]),i("fade-animation",[i("connon-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.bannerImgs},on:{close:t.handleGallaryToggle}})],1)],1)},Ot=[],jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallary",on:{click:function(e){return e.stopPropagation(),t.handleGallaryClick(e)}}},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.imgs,function(t,e){return i("swiper-slide",{key:e},[i("img",{staticClass:"swiper-img",attrs:{src:t,alt:"#"}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},It=[],St={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination",type:"fraction"},observer:!0,observeParents:!0,effect:"flip"}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},Ht=St,Lt=(i("a110"),Object(r["a"])(Ht,jt,It,!1,null,"cdd9e9ae",null));Lt.options.__file="Gallary.vue";var $t=Lt.exports,Et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",[t._t("default")],2)},Pt=[],Nt={name:"FadeAnimation"},Dt=Nt,At=(i("3319"),Object(r["a"])(Dt,Et,Pt,!1,null,"66bdc405",null));At.options.__file="FadeAnimation.vue";var Tt=At.exports,Gt={name:"DetailBanner",data:function(){return{showGallary:!1}},methods:{handleGallaryToggle:function(t){this.showGallary=!this.showGallary}},props:{sightName:String,bannerImg:String,bannerImgs:Array},components:{ConnonGallary:$t,FadeAnimation:Tt}},Mt=Gt,Bt=(i("ad41"),Object(r["a"])(Mt,xt,Ot,!1,null,"3bf4c27e",null));Bt.options.__file="Banner.vue";var Ut=Bt.exports,Ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[i("div",{staticClass:"iconfont header-abs-back"},[t._v("")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[i("router-link",{staticClass:"iconfont header-fixed-back",attrs:{tag:"span",to:"/"}},[t._v("")]),t._v("景点详情")],1)],1)},Rt=[],Wt={name:"DetailHeader",data:function(){return{opacityStyle:{opacity:1},top:0}},computed:{showAbs:function(){return!(this.top>60)}},methods:{handleScroll:function(){this.top=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;var t=(this.top-60)/103;t=t>1?1:t,t=t<0?0:t,this.opacityStyle={opacity:t}}},created:function(){window.addEventListener("scroll",this.handleScroll)}},Jt=Wt,qt=(i("9ef6"),Object(r["a"])(Jt,Ft,Rt,!1,null,"107ad2ec",null));qt.options.__file="Header.vue";var Yt=qt.exports,zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},t._l(t.list,function(e){return i("div",{key:e.id,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v(t._s(e.title))]),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},Kt=[],Qt={name:"DetailList",props:{list:Array}},Vt=Qt,Xt=(i("33fe"),Object(r["a"])(Vt,zt,Kt,!1,null,"350f3670",null));Xt.options.__file="List.vue";var Zt=Xt.exports,te={name:"Detail",components:{DetailBanner:Ut,DetailHeader:Yt,DetialList:Zt},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[],top:0}},methods:{getDetailInfo:function(){q.a.get("/TravelOnline/mock/detail.json",{params:this.$route.query}).then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},ee=te,ie=(i("6db4"),Object(r["a"])(ee,wt,kt,!1,null,"9414644a",null));ie.options.__file="Detail.vue";var se=ie.exports;s["a"].use(u["a"]);var ae=new u["a"]({routes:[{path:"/",name:"Home",component:Q},{path:"/city",name:"City",component:gt},{path:"/detail",name:"Detail",component:se}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ne=i("fe3c"),re=i.n(ne),oe=i("7212"),ce=i.n(oe),le="北京";try{localStorage.city&&(le=localStorage.city)}catch(t){}var ue={city:le},de={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s["a"].use(v["a"]);var fe=new v["a"].Store({state:ue,mutations:de,getters:{doubleCity:function(t){return t.city+" "+t.city}}});i("dfa4"),i("3db4"),i("c8f4"),i("5414");s["a"].config.productionTip=!1,s["a"].use(ce.a),re.a.attach(document.body),new s["a"]({router:ae,store:fe,render:function(t){return t(l)}}).$mount("#app")},5977:function(t,e,i){"use strict";var s=i("cb29"),a=i.n(s);a.a},"687b":function(t,e,i){},"6db4":function(t,e,i){"use strict";var s=i("844a"),a=i.n(s);a.a},"6e9f":function(t,e,i){"use strict";var s=i("e879"),a=i.n(s);a.a},"844a":function(t,e,i){},8865:function(t,e,i){"use strict";var s=i("f431"),a=i.n(s);a.a},"8c48":function(t,e,i){"use strict";var s=i("687b"),a=i.n(s);a.a},"9ef6":function(t,e,i){"use strict";var s=i("cced"),a=i.n(s);a.a},a110:function(t,e,i){"use strict";var s=i("0b6d"),a=i.n(s);a.a},a4ab:function(t,e,i){},ad41:function(t,e,i){"use strict";var s=i("a4ab"),a=i.n(s);a.a},b074:function(t,e,i){},b182:function(t,e,i){"use strict";var s=i("d8c4"),a=i.n(s);a.a},b840:function(t,e,i){"use strict";var s=i("b074"),a=i.n(s);a.a},c1b4:function(t,e,i){},c21b:function(t,e,i){},c8f4:function(t,e,i){},cb29:function(t,e,i){},cced:function(t,e,i){},cf22:function(t,e,i){},d037:function(t,e,i){},d8c4:function(t,e,i){},e127:function(t,e,i){"use strict";var s=i("0e3f"),a=i.n(s);a.a},e879:function(t,e,i){},f431:function(t,e,i){}});
//# sourceMappingURL=app.f81854f9.js.map