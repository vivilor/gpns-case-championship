(function(t){function e(e){for(var l,i,s=e[0],o=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(t[l]=o[l]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],l=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(l=!1)}l&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var l={},r={app:0},n=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"69b33a8d"}[t]+".js"}function s(e){if(l[e])return l[e].exports;var a=l[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var l=new Promise((function(e,l){a=r[t]=[e,l]}));e.push(a[2]=l);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.src=i(t);var c=new Error;n=function(e){o.onerror=o.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var l=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+l+": "+n+")",c.name="ChunkLoadError",c.type=l,c.request=n,a[1](c)}r[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:o})}),12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(e)},s.m=t,s.c=l,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)s.d(a,l,function(e){return t[e]}.bind(null,l));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gpns-case-championship/",s.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var l=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white",light:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://reserve.isource.ru/assets/images/svg/logo-reserve.svg",transition:"scale-transition",width:"120"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer")],1),a("v-main",[a("VCol",{staticStyle:{margin:"auto",width:"60vw"}},[a("h3",{staticClass:"my-8"},[t._v("Выберите пункты отправления и назначения")]),a("CustomMap"),a("div",{staticClass:"Locations"},[a("VCard",{attrs:{elevation:"4"}},[a("VCardTitle",[t._v("Москва, 147000")]),a("VCardSubtitle",[t._v("Юр. адрес")]),a("VCardText",[t._v("Москва, ул. Гастелло, д. 3")])],1),a("VCard",{attrs:{elevation:"4"}},[a("VCardTitle",[t._v("Норильск, 256920")]),a("VCardSubtitle",[t._v("Юр. адрес")]),a("VCardText",[t._v("г. Норильск, пр. Ленина, вл. 1")])],1)],1),a("h3",{staticClass:"my-8"},[t._v("Выберите дату отгрузки")]),a("VCalendar"),a("h3",{staticClass:"my-8"},[t._v("Укажите информацию о грузах")]),a("VCard",[a("VCardTitle",[t._v("Труба 200/35 ПГ-2")]),a("VCardSubtitle",[t._v("МТР: 2093845346576")]),a("VCardText",[t._v("Весогабаритные характеристики")]),a("VCardText",[a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("VTextField",{staticStyle:{width:"58%"},attrs:{label:"Длина",outlined:""}}),a("VSelect",{staticStyle:{width:"40%"},attrs:{label:"Ед. изм-я",outlined:"",value:null,items:["Метры (М)","Сантиметры (СМ)","Футы (Ф)"]}})],1),a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("VTextField",{staticStyle:{width:"58%"},attrs:{label:"Ширина",outlined:""}}),a("VSelect",{staticStyle:{width:"40%"},attrs:{label:"Ед. изм-я",outlined:"",value:null,items:["Метры (М)","Сантиметры (СМ)","Футы (Ф)"]}})],1),a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("VTextField",{staticStyle:{width:"58%"},attrs:{label:"Высота",outlined:""}}),a("VSelect",{staticStyle:{width:"40%"},attrs:{label:"Ед. изм-я",outlined:"",value:null,items:["Метры (М)","Сантиметры (СМ)","Футы (Ф)"]}})],1)]),a("VDivider"),a("VCardText",[a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("VTextField",{staticStyle:{width:"58%"},attrs:{label:"Вес",outlined:""}}),a("VSelect",{staticStyle:{width:"40%"},attrs:{label:"Ед. изм-я",outlined:"",value:null,items:["Метры (М)","Сантиметры (СМ)","Футы (Ф)"]}})],1)]),a("VDivider"),a("VCardSubtitle",[t._v(" Особенности груза ")]),a("VCardText",[a("div",{staticClass:"align-center justify-space-between",staticStyle:{display:"flex"}},[a("VCheckbox",{attrs:{value:!0,label:"Опасный груз"}}),a("VBtn",{attrs:{link:"",depressed:"",flat:"",small:""}},[t._v("Уточнить спецификацию")])],1),a("div",{staticClass:"align-center justify-space-between",staticStyle:{display:"flex"}},[a("VCheckbox",{attrs:{value:!0,label:"Требуется упаковка"}}),a("VBtn",{attrs:{link:"",depressed:"",flat:"",small:""}},[t._v("Задать параметры")])],1)])],1),a("h2",{staticClass:"my-8"},[t._v("Итоговая стоимость")]),a("VCalendar",{ref:"calendar",attrs:{type:"month",weekdays:[1,2,3,4,5,6,0],events:t.events,"event-overlap-mode":"stack","event-overlap-threshold":30}})],1)],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("LMap",{staticClass:"Map",attrs:{center:[t.lat,t.lng],zoom:t.zoom}},[a("LTileLayer",{attrs:{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}),a("LMarker",{attrs:{"lat-lng":[t.lat,t.lng]}}),a("LMarker",{attrs:{"lat-lng":[69.3558,88.1893]}})],1)},s=[],o=a("2699"),c=a("a40a"),d=a("4e2b"),u={name:"CustomMap",components:{LMap:o["a"],LTileLayer:c["a"],LMarker:d["a"]},data:function(){return{lat:55.7558,lng:37.6173,zoom:5}},created:function(){}},p=u,v=(a("69ad"),a("2877")),f=Object(v["a"])(p,i,s,!1,null,"ef0052a4",null),m=f.exports,V={name:"App",components:{CustomMap:m},computed:{events:function(){for(var t=(new Date).getTime(),e=864e5,a=12e4,l=[],r=0;r<28-(new Date).getDay();r++){var n=a,i="red";r>3&&(n-=2e4,i="amber"),r>7&&(n-=3e4,i="light-green"),l.push({name:"".concat(n),start:new Date(t+r*e),end:new Date(t+r*e),timed:!1,color:i})}return l}}},y=V,h=(a("034f"),a("6544")),b=a.n(h),C=a("7496"),g=a("40dc"),x=a("8336"),w=a("a4f6"),S=a("b0af"),_=a("99d9"),T=a("ac7c"),k=a("62ad"),j=a("ce7e"),D=a("adda"),M=a("f6c4"),O=a("b974"),L=a("2fa4"),F=a("8654"),P=Object(v["a"])(y,r,n,!1,null,null,null),B=P.exports;b()(P,{VApp:C["a"],VAppBar:g["a"],VBtn:x["a"],VCalendar:w["a"],VCard:S["a"],VCardSubtitle:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCheckbox:T["a"],VCol:k["a"],VDivider:j["a"],VImg:D["a"],VMain:M["a"],VSelect:O["a"],VSpacer:L["a"],VTextField:F["a"]});a("d3b7"),a("3ca3"),a("ddb0");var E=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VCol",{staticStyle:{margin:"auto",width:"60vw"}},[a("h3",{staticClass:"my-8"},[t._v("Выберите пункты отправления и назначения")]),a("CustomMap"),a("div",{staticClass:"Locations"},[a("VCard",{attrs:{elevation:"4"}},[a("VCardTitle",[t._v("Москва, 147000")]),a("VCardSubtitle",[t._v("Юр. адрес")]),a("VCardText",[t._v("Москва, ул. Гастелло, д. 3")])],1),a("VCard",{attrs:{elevation:"4"}},[a("VCardTitle",[t._v("Норильск, 256920")]),a("VCardSubtitle",[t._v("Юр. адрес")]),a("VCardText",[t._v("г. Норильск, пр. Ленина, вл. 1")])],1)],1),a("h3",{staticClass:"my-8"},[t._v("Выберите дату отгрузки")]),a("VCalendar"),a("h3",{staticClass:"my-8"},[t._v("Укажите информацию о грузах")]),a("VCard",[a("VCardTitle",[t._v("Труба 200/35 ПГ-2")]),a("VCardSubtitle",[t._v("МТР: 2093845346576")]),a("VCardText",[t._v("Весогабаритные характеристики")]),a("VCardText",[a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("VTextField",{staticStyle:{width:"58%"},attrs:{label:"Длина",outlined:""}}),a("VSelect",{staticStyle:{width:"40%"},attrs:{label:"Ед. изм-я",outlined:"",value:null,items:["Метры (М)","Сантиметры (СМ)","Футы (Ф)"]}})],1),a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("VTextField",{staticStyle:{width:"58%"},attrs:{label:"Ширина",outlined:""}}),a("VSelect",{staticStyle:{width:"40%"},attrs:{label:"Ед. изм-я",outlined:"",value:null,items:["Метры (М)","Сантиметры (СМ)","Футы (Ф)"]}})],1),a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("VTextField",{staticStyle:{width:"58%"},attrs:{label:"Высота",outlined:""}}),a("VSelect",{staticStyle:{width:"40%"},attrs:{label:"Ед. изм-я",outlined:"",value:null,items:["Метры (М)","Сантиметры (СМ)","Футы (Ф)"]}})],1)]),a("VDivider"),a("VCardText",[a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("VTextField",{staticStyle:{width:"58%"},attrs:{label:"Вес",outlined:""}}),a("VSelect",{staticStyle:{width:"40%"},attrs:{label:"Ед. изм-я",outlined:"",value:null,items:["Метры (М)","Сантиметры (СМ)","Футы (Ф)"]}})],1)]),a("VDivider"),a("VCardSubtitle",[t._v(" Особенности груза ")]),a("VCardText",[a("div",{staticClass:"align-center justify-space-between",staticStyle:{display:"flex"}},[a("VCheckbox",{attrs:{value:!0,label:"Опасный груз"}}),a("VBtn",{attrs:{link:"",depressed:"",flat:"",small:""}},[t._v("Уточнить спецификацию")])],1),a("div",{staticClass:"align-center justify-space-between",staticStyle:{display:"flex"}},[a("VCheckbox",{attrs:{value:!0,label:"Требуется упаковка"}}),a("VBtn",{attrs:{link:"",depressed:"",flat:"",small:""}},[t._v("Задать параметры")])],1)])],1),a("h2",{staticClass:"my-8"},[t._v("Итоговая стоимость")]),a("VCalendar",{ref:"calendar",attrs:{type:"month",weekdays:[1,2,3,4,5,6,0],events:t.events,"event-overlap-mode":"stack","event-overlap-threshold":30}})],1)},z=[],I={name:"Home",components:{CustomMap:m},computed:{events:function(){for(var t=(new Date).getTime(),e=864e5,a=12e4,l=[],r=0;r<28-(new Date).getDay();r++){var n=a,i="red";r>3&&(n-=2e4,i="amber"),r>7&&(n-=3e4,i="light-green"),l.push({name:"".concat(n),start:new Date(t+r*e),end:new Date(t+r*e),timed:!1,color:i})}return l}}},U=I,$=(a("cccb"),Object(v["a"])(U,A,z,!1,null,null,null)),H=$.exports;b()($,{VBtn:x["a"],VCalendar:w["a"],VCard:S["a"],VCardSubtitle:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCheckbox:T["a"],VCol:k["a"],VDivider:j["a"],VSelect:O["a"],VTextField:F["a"]}),l["a"].use(E["a"]);var J=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],q=new E["a"]({mode:"history",base:"/gpns-case-championship/",routes:J}),N=q,R=a("2f62");l["a"].use(R["a"]);var G=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=a("f309"),Q=a("e1bf");l["a"].use(K["a"]);var W=new K["a"]({lang:{locales:{ru:Q["a"]},current:"ru"}}),X=(a("6cc5"),a("e11e"));l["a"].config.productionTip=!1,delete X["Icon"].Default.prototype._getIconUrl,X["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),l["a"].component("l-map",o["a"]),l["a"].component("l-tile-layer",c["a"]),l["a"].component("l-marker",d["a"]),new l["a"]({router:N,store:G,vuetify:W,render:function(t){return t(B)}}).$mount("#app")},"5ced":function(t,e,a){},"69ad":function(t,e,a){"use strict";a("fb07")},"85ec":function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")},fb07:function(t,e,a){}});
//# sourceMappingURL=app.a69c4dd3.js.map