webpackJsonp([11],{"2AnY":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("TQvf"),n=a.n(i),s=a("NYxO"),r=a("WBHA"),o=a.n(r),l=a("oFuF"),c=(a("ytf2"),a("c2Ch"),a("TIfe")),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t};function d(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function i(n,s){try{var r=e[n](s),o=r.value}catch(t){return void a(t)}if(!r.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})}}var m={components:{countTo:o.a},name:"user",data:function(){return{copySuccess:!1,balanceShow:!1,isShow:!1,activeName:"erac",activeRecord:"wa",eraxInfo:{},startVal:0,endVal:0,profit:0,tabsList:[{to:"/accounts/erac",label:"message.Accounts_41"},{to:"/accounts/nft",label:"message.Accounts_42"},{to:"/accounts/favorite",label:"message.Accounts_05"},{to:"/accounts/follow",label:"message.Accounts_06"}],recordGold:[{time:"2021-04-18",prise:5124,totalPrise:15372},{time:"2021-04-18",prise:5124,totalPrise:15372},{time:"2021-04-18",prise:534,totalPrise:15372}],recordAirdrop:[{time:"2021-04-18",mission:"首次分享",prise:5124,totalPrise:153762},{time:"2021-04-19",mission:"首次分享",prise:5124,totalPrise:153372},{time:"2021-04-20",mission:"首次分享",prise:524,totalPrise:15372},{time:"2021-04-21",mission:"首次分享",prise:524,totalPrise:15372},{time:"2021-04-22",mission:"首次分享",prise:524,totalPrise:153572},{time:"2021-04-23",mission:"首次分享",prise:524,totalPrise:15372},{time:"2021-04-24",mission:"首次分享",prise:54,totalPrise:155472},{time:"2021-04-25",mission:"首次分享",prise:54,totalPrise:15372}]}},computed:u({},Object(s.b)(["token","userInfo"]),Object(s.c)({})),filters:{cutWallet:function(t){return l.a.cutStrMid(t,24)}},watch:{userInfo:function(t){return t}},mounted:function(){var t=this;return d(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.getEraxNftList(),t.initCopy(),t.addNumEff(),e.next=5,c.a.GetUserInfo();case 5:t.isShow=!0;case 6:case"end":return e.stop()}},e,t)}))()},methods:{addNumEff:function(){var t=this;this.timeId=setInterval(function(){t.profit&&(t.endVal=t.startVal+3*t.profit,setTimeout(function(){t.startVal=t.endVal},1e3))},3e3)},getUserExten:function(){var t,e=this;this.$api.GetUserExten({iIdle:0}).then(function(t){e.userINfo=t.stUserExtenInfo}).catch((t=d(regeneratorRuntime.mark(function t(a){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.DAPPLogin();case 2:t.sent,-1106!==a.iRspCode&&e.getUserExten();case 4:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)}))},goEdit:function(){var t=this;return d(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.DAPPLogin();case 2:e.sent&&t.$router.push({name:"userEdit"});case 4:case"end":return e.stop()}},e,t)}))()},getEraxNftList:function(){var t=this;this.$api.GetUserEraxNftList({iPageNo:0,iPageNum:18,sWallet:this.token}).then(function(e){t.eraxInfo=e;var a=(new Date).getTime();if(a>=16185024e5){t.profit=parseInt(e.iSpeedTotal)/24/60/60;var i=(a-16185024e5)/1e3;t.startVal=i*t.profit,t.endVal=i*t.profit}0===e.iEraxTotal&&t.$delete(t.tabsList,0)})},initCopy:function(t){var e=this,a=document.getElementById("erax-copy-btn");new n.a(a).on("success",function(t){e.copySuccess=!0,setTimeout(function(){e.copySuccess=!1},2e3)})},signNonce:function(){var t=this;return d(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"erax-user"},[i("div",{staticClass:"erax-bg"},[i("div",{staticClass:"erax-user-info"},[i("div",{staticClass:"erax-user-info-a"},[i("div",{staticClass:"erax-user-box"},[t.userInfo.sAvatar?i("img",{staticClass:"erax-user-img",attrs:{src:t.userInfo.sAvatar,alt:""}}):i("img",{staticClass:"erax-user-img",attrs:{src:a("SSeM"),alt:""}})]),t._v(" "),i("div",{staticClass:"erax-user-details"},[i("h2",{staticClass:"erax-user-name"},[t._v("Hello, "+t._s(t.userInfo.sNickName||"Unnamed")+"!")]),t._v(" "),i("div",{staticClass:"erax-user-wallet"},[t._v("\n            "+t._s(t._f("cutWallet")(t.token))+"\n            "),i("i",{staticClass:"far fa-copy btn-copy",attrs:{id:"erax-copy-btn","data-clipboard-action":"copy","data-clipboard-text":t.token}}),t._v(" "),t.copySuccess?i("div",{staticClass:"erax-tag-success"},[i("i",{staticClass:"el-icon-circle-check icon"}),t._v(" "+t._s(t.$t("message.Accounts_01"))+"\n            ")]):t._e()]),t._v(" "),i("div",[i("el-button",{staticClass:"erax-el-btn",attrs:{icon:"el-icon-edit"},on:{click:t.goEdit}})],1)])]),t._v(" "),i("div",{staticClass:"erax-user-balance"},[i("div",{staticClass:"erax-balance"},[i("h2",{staticClass:"erax-balance-title"},[t._v(t._s(t.$t("message.Accounts_02")))]),t._v(" "),i("p",{staticClass:"erax-balance-total"},[t._v(t._s(t.eraxInfo.iEraxTotal))]),t._v(" "),i("p",{staticClass:"erax-balance-des"},[t._v(t._s(t.$t("message.Erac_03"))+"："+t._s(t.eraxInfo.iValueTotal))])]),t._v(" "),i("div",{staticClass:"border"}),t._v(" "),i("div",{ref:"eraxBalance",staticClass:"erax-balance"},[i("h2",{staticClass:"erax-balance-title"},[t._v(t._s(t.$t("message.Accounts_03")))]),t._v(" "),i("p",{staticClass:"erax-balance-total"},[i("countTo",{staticClass:"txt2",attrs:{decimals:6,startVal:t.startVal,endVal:t.endVal,duration:3e3}}),t._v(" "),t._e()],1),t._v(" "),i("p",{staticClass:"erax-balance-des"},[t._v(t._s(t.$t("message.Erac_04"))+"："+t._s(t._f("filterThousands")(t.eraxInfo.iSpeedTotal)))]),t._v(" "),i("div",{class:["erax-balance-record",{show:t.balanceShow}]},[i("el-tabs",{staticClass:"erax-el-tabs",model:{value:t.activeRecord,callback:function(e){t.activeRecord=e},expression:"activeRecord"}},[i("el-tab-pane",{attrs:{label:t.$t("message.Accounts_16"),name:"wa"}},[i("el-table",{staticClass:"erax-user-table",staticStyle:{width:"100%"},attrs:{data:t.recordGold,"max-height":"360"}},[i("el-table-column",{attrs:{align:"center",prop:"time",label:t.$t("message.Accounts_17")}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"prise",label:t.$t("message.Accounts_18")}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"totalPrise",label:t.$t("message.Accounts_19")}})],1)],1),t._v(" "),i("el-tab-pane",{attrs:{label:t.$t("message.Accounts_20"),name:"tou"}},[i("el-table",{staticClass:"erax-user-table",staticStyle:{width:"100%"},attrs:{data:t.recordAirdrop,"max-height":"360"}},[i("el-table-column",{attrs:{width:"70",align:"center",prop:"time",label:t.$t("message.Accounts_17")}}),t._v(" "),i("el-table-column",{attrs:{width:"68",align:"center",prop:"mission",label:t.$t("message.Accounts_21")}}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"prise",label:t.$t("message.Accounts_18")}}),t._v(" "),i("el-table-column",{attrs:{"min-width":"48",align:"center",prop:"totalPrise",label:t.$t("message.Accounts_19")}})],1)],1)],1)],1)])])])]),t._v(" "),i("div",{staticClass:"erax-user-content"},[i("div",{staticClass:"erax-layout"},[i("ul",{staticClass:"erax-tabs"},t._l(t.tabsList,function(e,a){return i("router-link",{key:a,class:["erax-tabs-item",{active:t.$route.path===e.to}],attrs:{tag:"li",to:e.to}},[t._v("\n          "+t._s(t.$t(e.label))+"\n        ")])}),1),t._v(" "),i("div",{staticStyle:{padding:"40px 0"}},[t.isShow?i("router-view"):t._e()],1)])])])},staticRenderFns:[]};var p=a("VU/8")(m,f,!1,function(t){a("y/KU")},"data-v-b5ddb5e4",null);e.default=p.exports},WBHA:function(t,e,a){var i;i=function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(a);)a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(a(0));e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,l=0;l<n.length&&(!s||!r);l++)o=n[l],e.requestAnimationFrame=s=s||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),n=window.setTimeout(function(){t(e+a)},a);return i=e+a,n},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,i){var n,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(n=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),i){var l=Object.create(o.computed||null);Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}}),o.computed=l}return{esModule:n,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},t.exports=i()},"y/KU":function(t,e){}});