webpackJsonp([9],{"4ffO":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("TQvf");var n=a("NYxO"),s=a("oFuF"),r=a("pe5U"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function o(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function c(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(s,r){try{var i=t[s](r),o=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}("next")})}}var l={components:{EraxErac:r.a},name:"Ntf",data:function(){return{list:[],showItem:{},iPageNo:0,iPageNum:10,iLevel:1,levelName:"",iCount:0,busy:!1,nameAry:[this.$t("message.lang_26"),this.$t("message.lang_27"),this.$t("message.lang_28"),this.$t("message.lang_29"),this.$t("message.lang_30"),this.$t("message.lang_31"),this.$t("message.lang_32"),this.$t("message.lang_33"),this.$t("message.lang_34")]}},computed:i({},Object(n.c)({language:function(e){return e.app.language}})),watch:{language:function(e){this.nameAry=[this.$t("message.lang_26"),this.$t("message.lang_27"),this.$t("message.lang_28"),this.$t("message.lang_29"),this.$t("message.lang_30"),this.$t("message.lang_31"),this.$t("message.lang_32"),this.$t("message.lang_33"),this.$t("message.lang_34")]}},mounted:function(){this.iLevel=parseInt(this.$route.query.level),this.levelName=s.a.getNameByLevel(this.iLevel),this.getEraxNftList(),window.addEventListener("scroll",this.handleLoad)},destroyed:function(){},methods:{handleLoad:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,n,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight,!(a+n>=s-618)||e.busy){t.next=10;break}if(e.busy=!0,!(e.list.length<e.iCount)){t.next=9;break}return e.iPageNo++,t.next=9,e.getEraxNftList();case 9:e.busy=!1;case 10:case"end":return t.stop()}},t,e)}))()},getEraxNftList:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.GetEraxNftList({iType:3,iLevel:e.iLevel,iPageNo:e.iPageNo,iPageNum:e.iPageNum});case 2:a=t.sent,e.iCount=a.iCount,a.vNfts=a.vNfts.map(function(t){return i({},t,{sLevelName:e.nameAry[e.iLevel-1]})}),e.list=[].concat(o(e.list),o(a.vNfts)),e.showItem&&e.showItem.iId||(e.showItem=e.list[0]);case 7:case"end":return t.stop()}},t,e)}))()},toAddress:function(e){s.a.toAddress(e)},getShowNum:function(e,t){return s.a.cutStrMid(e,t)},getImg:function(){return a("JIzp")("./level"+(10-this.iLevel)+".png")},toDetail:function(e){this.showItem=e}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nft"},[e._m(0),e._v(" "),a("div",{staticClass:"nft-container"},[a("div",{staticClass:"nft-header"},[a("div",{staticClass:"title"},[e._v(e._s(e.nameAry[e.iLevel-1])+" "+e._s(e.$t("message.lang_56")))])]),e._v(" "),a("div",{staticClass:"line"}),e._v(" "),a("div",{staticClass:"ntf-main"},e._l(e.list,function(e,t){return a("EraxErac",{key:t,attrs:{item:e}})}),1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bannerDiv"},[t("img",{staticClass:"banner",attrs:{src:a("PmHn"),alt:""}})])}]};var v=a("VU/8")(l,u,!1,function(e){a("tk25")},"data-v-8ae16a0c",null);t.default=v.exports},JIzp:function(e,t,a){var n={"./level1.png":"K0p2","./level2.png":"ifei","./level3.png":"SInm","./level4.png":"ku7w","./level5.png":"B2qP","./level6.png":"eQzy","./level7.png":"/ESm","./level8.png":"VWHn","./level9.png":"00kF"};function s(e){return a(r(e))}function r(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="JIzp"},LkA2:function(e,t){},pe5U:function(e,t,a){"use strict";var n=a("TQvf"),s=a.n(n),r=a("QxMA"),i=a("Q3RE"),o=a("NYxO"),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};var l={components:{IMedia:r.a},props:{value:{type:Boolean,default:!1},dataInfo:{type:Object,default:function(){}}},data:function(){return{dialogVisible:this.value,input:""}},watch:{value:function(e){this.dialogVisible=e,this.input=""}},mounted:function(){window.addEventListener("TRANSACTION-UPDATE",this.onTransactionUpdate)},beforeDestroy:function(){window.removeEventListener("TRANSACTION-UPDATE",this.onTransactionUpdate)},computed:c({},Object(o.c)({language:function(e){return e.app.language},mateMaskToken:function(e){return e.app.mateMaskToken}})),methods:{onTransactionUpdate:function(e){this.$emit("callBack",!0),this.$emit("input",!1)},handleClose:function(e){this.$emit("input",!1)},onConfirm:function(){var e,t=this;return(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.input.toLowerCase()!==t.mateMaskToken.toLowerCase()){e.next=3;break}return t.$message.error(t.$t("message.assets_lang_82")),e.abrupt("return");case 3:return e.next=5,Object(i.o)(t.input,t.dataInfo.sTokenId);case 5:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:t.$emit("callBack",!0),t.$emit("input",!1);case 10:case"end":return e.stop()}},e,t)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(s,r){try{var i=t[s](r),o=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}("next")})})()}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.$t("message.assets_lang_133"),visible:e.dialogVisible,"append-to-body":"",center:"","lock-scroll":"",width:"600px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("el-input",{attrs:{placeholder:e.$t("message.assets_lang_30")},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",disabled:!e.input.length},on:{click:e.onConfirm}},[e._v(e._s(e.$t("message.assets_lang_14")))])],1)])],1)},staticRenderFns:[]};var v=a("VU/8")(l,u,!1,function(e){a("LkA2")},"data-v-51c81a7a",null).exports,f={name:"EraxErac",props:{item:{type:Object,required:!0}},components:{Transfer:v},data:function(){return{v:this.item,transferDialogVisible:!1}},mounted:function(){this.initCopy()},methods:{initCopy:function(){var e=this,t=document.getElementById("copy"+this.v.sTokenId),a=new s.a(t);a.on("success",function(){e.$message.success(e.$t("message.lang_62"))}),a.on("error",function(e){})},transferCallBack:function(){this.$emit("callBack")}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"erax-erac-item erax-erac"},[a("div",{staticClass:"erax-a"},[a("div",{staticClass:"erax-erac-left"},[a("div",{staticClass:"erax-erac-left-1"},[a("img",{staticClass:"erax-img",attrs:{src:e.v.sAvatarImg,alt:""}})]),e._v(" "),a("div",[a("p",{staticClass:"erax-erac-t"},[e._v(e._s(e.$t("message.Erac_01"))+"："),a("span",[e._v(e._s(e.v.sName))])]),e._v(" "),a("p",{staticClass:"erax-erac-t"},[e._v(e._s(e.$t("message.Erac_02"))+"："),a("span",[e._v(e._s(e.v.iId))])]),e._v(" "),a("p",{staticClass:"erax-erac-t"},[e._v(e._s(e.$t("message.Erac_03"))+"："),a("span",[e._v(e._s(e.v.iValue))])]),e._v(" "),a("p",{staticClass:"erax-erac-t"},[e._v(e._s(e.$t("message.Erac_04"))+"："),a("span",[e._v("\n          "+e._s(e._f("filterThousands")(e.v.iMiningSpeed))+" "+e._s(e.$t("message.lang_53"))+"/"+e._s(e.$t("message.assets_lang_94")))])])])]),e._v(" "),a("div",{staticClass:"erax-erac-right"},[a("div",{staticClass:"-broder"}),e._v(" "),a("div",{staticClass:"erax-erac-o"},[a("p",{staticClass:"erax-erac-r"},[e._v(e._s(e.$t("message.Erac_05"))+"：")]),e._v(" "),a("p",{staticClass:"erax-erac-r"},[a("a",{staticClass:"link",attrs:{target:"_blank",href:"https://cn.etherscan.com/address/"+e.v.sContractAddress}},[e._v(e._s(e._f("filterCutStrMid")(e.v.sContractAddress,14)))]),e._v(" "),a("i",{staticClass:"far fa-copy icon",attrs:{id:"copy"+e.v.sTokenId,"data-clipboard-action":"copy","data-clipboard-text":e.v.sContractAddress}})]),e._v(" "),a("p",{staticClass:"erax-erac-r"},[e._v(e._s(e.$t("message.Erac_06"))+"："),a("span",[e._v(e._s(e._f("filterCutStrMid")(e.v.sTokenId)))])]),e._v(" "),a("p",{staticClass:"erax-erac-r"},[e._v(e._s(e.$t("message.Erac_07"))+"："),a("span",[e._v(e._s(e.v.sBlockchain))])]),e._v(" "),a("el-button",{staticClass:"transfer",attrs:{type:"primary",size:"small "},on:{click:function(t){e.transferDialogVisible=!0}}},[e._v(e._s(e.$t("message.assets_lang_14")))])],1)])]),e._v(" "),a("p",{staticClass:"erax-level-name"},[e._v(e._s(e.v.sLevelName))]),e._v(" "),a("transfer",{attrs:{dataInfo:e.v},on:{callBack:e.transferCallBack},model:{value:e.transferDialogVisible,callback:function(t){e.transferDialogVisible=t},expression:"transferDialogVisible"}})],1)},staticRenderFns:[]};var d=a("VU/8")(f,m,!1,function(e){a("r9Qk")},"data-v-3fce7a1c",null);t.a=d.exports},r9Qk:function(e,t){},tk25:function(e,t){}});