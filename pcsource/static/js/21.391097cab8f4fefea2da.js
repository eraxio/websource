webpackJsonp([21],{"7rfL":function(e,t){},UbyM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("bSIt"),n=a("ytf2"),r=a("Tnm7"),i=a("bu39"),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e};function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function s(n,r){try{var i=t[n](r),c=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(c).then(function(e){s("next",e)},function(e){s("throw",e)});e(c)}("next")})}}var u={components:{LoadingPop:i.a},data:function(){return{price:"",balance:0,list:[],toChain:{},showPop:!1,constractChainObj:{},curConstractChain:{},receive:0,charge:0,BridgeABI:"",chainInfoData:{},showLoading:!1,curSelect:null,loadingData:{type:0,isBridge:!0}}},watch:{price:function(e){e&&(e=(e+"").match(/^\d*(\.?\d{0,4})/g)[0]||null,this.price=e,parseFloat(this.price)>parseFloat(this.balance)&&(this.price=this.balance),this.receive=(this.price-this.charge).toFixed(4),this.receive<0&&(this.receive=0))},mateMaskToken:function(){this.initConfig()}},computed:c({},Object(s.c)({mateMaskToken:function(e){return e.app.mateMaskToken},chainObj:function(e){return e.app.chainObj},configData:function(e){return e.app.configData}}),{bridgeList:function(){var e=this.configData.bridge_asset;if(e){var t=e.split("|"),a=[],s=!0,n=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(s=(i=c.next()).done);s=!0){var o=i.value;if(o){var u=o.split(",");if(u.length){var l={};l.desc=u[0],l.icon=u[1],l.api=u[2],a.push(l)}}}}catch(e){n=!0,r=e}finally{try{!s&&c.return&&c.return()}finally{if(n)throw r}}return a}return[]},curChain:function(){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[web3.currentProvider.chainId]?this.chainObj[web3.currentProvider.chainId]:{}},getShowList:function(){var e=[];if("undefined"!=typeof web3&&this.list.length){var t=!0,a=!1,s=void 0;try{for(var n,r=this.list[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var i="0x"+n.value.chainId.toString(16);i!==this.curChain.chainId&&e.push(this.chainObj[i])}}catch(e){a=!0,s=e}finally{try{!t&&r.return&&r.return()}finally{if(a)throw s}}}return e}}),mounted:function(){Object(n.b)(),this.bridgeList.length&&(this.curSelect=this.bridgeList[0]),this.initConfig()},methods:{selectBridge:function(e){this.curSelect=e,this.initConfig()},toSwitch:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var a,s,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=window.ethereum){t.next=3;break}return t.abrupt("return");case 3:if(s=e.toChain.chainId,n=e.chainInfoData[s]){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,a.request({method:"wallet_addEthereumChain",params:n}).catch();case 9:t.sent;case 10:case"end":return t.stop()}},t,e)}))()},initConfig:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var a,s,n,r,i,c,o,u,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.price="",e.balance=0,t.next=4,e.GetAddChainData();case 4:return t.next=6,e.$axios.get(e.curSelect.api+"/public/getConfList");case 6:for(a=t.sent,e.list=a,s=!0,n=!1,r=void 0,t.prev=11,i=e.list[Symbol.iterator]();!(s=(c=i.next()).done);s=!0)o=c.value,e.constractChainObj["0x"+o.chainId.toString(16)]=o;t.next=19;break;case 15:t.prev=15,t.t0=t.catch(11),n=!0,r=t.t0;case 19:t.prev=19,t.prev=20,!s&&i.return&&i.return();case 22:if(t.prev=22,!n){t.next=25;break}throw r;case 25:return t.finish(22);case 26:return t.finish(19);case 27:if(e.constractChainObj[web3.currentProvider.chainId]){t.next=30;break}return e.$message.error(e.$t("message.bridge_35")),t.abrupt("return");case 30:return t.next=32,e.$api.GetSystemConfig({sAppId:"Erax-dev",sKey1:"bridge"});case 32:u=t.sent,l=u.vList,e.BridgeABI=l[0].sValue,e.curConstractChain=e.constractChainObj[web3.currentProvider.chainId],e.updateBalance(),e.$nextTick(function(){if(e.getShowList.length){e.$set(e,"toChain",e.getShowList[0]),e.toChain=e.getShowList[0];var t=e.constractChainObj[e.toChain.chainId];e.charge=parseFloat(parseFloat(t.fee).toFixed(4))}});case 38:case"end":return t.stop()}},t,e,[[11,15,19,27],[20,,22,26]])}))()},updateBalance:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var a,s,n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.mateMaskToken||!r.t){t.next=11;break}return(a=e.curConstractChain.neraAddress)||(a=e.curConstractChain.address),s=new web3.eth.Contract(JSON.parse(r.t),a),t.next=6,s.methods.balanceOf(e.mateMaskToken).call().catch(function(e){if(e)return n=0,!1});case 6:return n=t.sent,t.next=9,s.methods.decimals().call();case 9:i=t.sent,e.balance=e.$util.fromWei(n,i,4);case 11:case"end":return t.stop()}},t,e)}))()},GetAddChainData:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var a,s,n,r,i,c,o,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.GetSystemConfig({sAppId:"Erax-dev",sKey1:"ChainData"});case 2:for(a=t.sent,s=a.vList,e.chainInfoData={},n=!0,r=!1,i=void 0,t.prev=8,c=s[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)u=o.value,e.chainInfoData[u.sKey2]=JSON.parse(u.sValue);t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),r=!0,i=t.t0;case 16:t.prev=16,t.prev=17,!n&&c.return&&c.return();case 19:if(t.prev=19,!r){t.next=22;break}throw i;case 22:return t.finish(19);case 23:return t.finish(16);case 24:case"end":return t.stop()}},t,e,[[8,12,16,24],[17,,19,23]])}))()},selectChain:function(e){this.toChain=e,this.showPop=!1},transfer:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var a,s,n,i,c,o,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingData.type=1,e.loadingData.scan=e.chainObj["0x"+e.curConstractChain.chainId.toString(16)],e.showLoading=!0,a=e.curConstractChain.neraAddress||e.curConstractChain.address,s=new web3.eth.Contract(JSON.parse(r.t),a),t.next=7,web3.eth.getGasPrice();case 7:if(n=t.sent,console.log("推荐gas费==="+n),"ETH"!=e.curConstractChain.code){t.next=27;break}return t.next=12,s.methods.allowance(e.mateMaskToken,e.curConstractChain.address).call();case 12:if("0"!=(i=t.sent)){t.next=20;break}return console.log("跳转ERC20授权!"),t.next=17,s.methods.approve(e.curConstractChain.address,"1000000000000000000000000000000000000000000").send({from:e.mateMaskToken,gasPrice:n},function(t,a){if(t)return e.showLoading=!1,console.log("授权报错"),Vue.prototype.$message.error(i18n.t("message.assets_lang_90")),e.showLoading=!1,!1});case 17:return t.next=19,s.methods.allowance(e.mateMaskToken,e.curConstractChain.address).call();case 19:i=t.sent;case 20:if("0"!=i){t.next=26;break}return console.log("ERC20未授权!"),e.showLoading=!1,t.abrupt("return",!1);case 26:console.log("ERC20已授权!");case 27:return c=new web3.eth.Contract(JSON.parse(e.BridgeABI),e.curConstractChain.address),o=0,t.next=31,s.methods.decimals().call();case 31:return u=t.sent,o=e.$util.toWei(e.price,u),t.next=35,c.methods.swapIn(o,e.toChain.chainId).send({from:e.mateMaskToken,gasPrice:n},function(t,a){if(t)return e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=a,e.showStake=!1,e.$axios.post(e.curSelect.api+"/swapIn/swapIn",{txId:a,userAddress:e.mateMaskToken,amount:e.price,chainId:parseInt(e.toChain.chainId,16),fromChainId:e.curConstractChain.chainId})});case 35:e.showLoading=!1,e.price="",e.receive=0,e.updateBalance();case 39:case"end":return t.stop()}},t,e)}))()},getChainName:function(){return this.toChain.chainId&&this.chainObj?this.chainObj[this.toChain.chainId].name:""}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nera-bridge"},[a("div",{staticClass:"bridge-container"},[a("div",{staticClass:"title"},[e._v(e._s(e.curSelect&&e.curSelect.desc)+" "+e._s(e.$t("message.bridge_1")))]),e._v(" "),a("div",{staticClass:"flex-sb"},[a("div",{staticClass:"coin-div"},[a("span",{staticClass:"txt1"},[e._v(e._s(e.$t("message.bridge_2")))]),e._v(" "),a("div",{staticClass:"bridge-list"},e._l(e.bridgeList,function(t,s){return a("div",{key:s,staticClass:"bridge-list-item",class:e.curSelect&&e.curSelect.desc===t.desc?"select-birdge":"",on:{click:function(a){return e.selectBridge(t)}}},[a("img",{attrs:{src:t.icon,alt:""}}),e._v(" "),a("div",[e._v(e._s(t.desc))])])}),0)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.mateMaskToken,expression:"mateMaskToken"}],staticClass:"txt3",on:{click:function(t){return e.$router.push({path:"/bridge-history",query:{api:e.curSelect.api}})}}},[e._v("\n        "+e._s(e.$t("message.bridge_14"))+" "),a("i",{staticClass:"el-icon-arrow-right"})])]),e._v(" "),a("div",{staticClass:"nera-bridge-swap"},[a("div",{staticClass:"select-item"},[a("img",{attrs:{src:e.curChain.icon,alt:""}}),e._v(" "),a("span",[e._v(e._s(e.curChain.name))])]),e._v(" "),e._m(0),e._v(" "),a("el-popover",{attrs:{placement:"bottom-end",title:e.$t("message.bridge_28"),width:"328",trigger:"click","popper-class":"option-pop","visible-arrow":!1},model:{value:e.showPop,callback:function(t){e.showPop=t},expression:"showPop"}},[e._l(e.getShowList,function(t,s){return a("div",{key:s,staticClass:"chain-option",class:e.toChain.chainId===t.chainId?"select-option":"",on:{click:function(a){return e.selectChain(t)}}},[a("img",{attrs:{src:t.icon,alt:""}}),e._v(" "),a("span",[e._v(e._s(t.name))]),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:e.toChain.chainId===t.chainId,expression:"toChain.chainId === item.chainId"}],staticClass:"iconfont icon-gou"})])}),e._v(" "),a("div",{staticClass:"select-item",attrs:{slot:"reference"},slot:"reference"},[a("img",{attrs:{src:e.toChain.icon,alt:""}}),e._v(" "),a("span",[e._v(e._s(e.toChain.name))]),e._v(" "),a("i",{staticClass:"fas fa-chevron-right"})])],2)],1),e._v(" "),a("div",{staticClass:"notice"},[a("div",[e._v("\n        "+e._s(e.$t("message.bridge_26"))+" "+e._s(e.getChainName())+" "+e._s(e.$t("message.bridge_3"))+"\n      ")]),e._v(" "),a("div",[e._v("\n        "+e._s(e.$t("message.bridge_4"))+"\n        "),a("div",{staticClass:"bridge-btn add",on:{click:e.toSwitch}},[e._v(e._s(e.$t("message.bridge_27")))]),e._v("\n        "+e._s(e.$t("message.bridge_5"))+"\n      ")])]),e._v(" "),a("div",{staticClass:"nera-balance"},[a("span",{staticClass:"balance-title"},[e._v(e._s(e.curSelect&&e.curSelect.desc)+" "+e._s(e.$t("message.bridge_6"))+": ")]),a("span",{staticClass:"balance"},[e._v(e._s(e._f("filterThousands")(e.balance)))])]),e._v(" "),a("div",[a("div",{staticClass:"amount"},[e._v(e._s(e.$t("message.bridge_7")))]),e._v(" "),a("el-input",{staticClass:"input-with-select",attrs:{type:"number"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),e._v(" "),a("el-row",[a("el-col",{staticClass:"cost-item",attrs:{span:12}},[a("span",{staticClass:"cost1"},[e._v(e._s(e.$t("message.bridge_8"))+" ≈ ")]),e._v(" "),a("span",{staticClass:"txt2"},[e._v(e._s(e.receive))]),a("img",{attrs:{src:e.curSelect&&e.curSelect.icon,alt:""}}),a("span",{staticClass:"txt2"},[e._v(e._s(e.curSelect&&e.curSelect.desc))])]),e._v(" "),a("el-col",{staticClass:"cost-item",attrs:{span:12}},[a("span",{staticClass:"cost2"},[e._v(e._s(e.toChain.name)+" Gas ≈ ")]),e._v(" "),a("span",{staticClass:"txt2"},[e._v(e._s(e.charge))]),a("img",{attrs:{src:e.curSelect&&e.curSelect.icon,alt:""}}),a("span",{staticClass:"txt2"},[e._v(e._s(e.curSelect&&e.curSelect.desc))])])],1),e._v(" "),a("div",{staticClass:"address"},[a("span",{staticClass:"address-txt1"},[e._v(e._s(e.$t("message.bridge_9"))+": ")]),a("span",{staticClass:"address-txt2"},[e._v(e._s(e.mateMaskToken))])]),e._v(" "),e.mateMaskToken?a("el-button",{staticClass:"transfer",attrs:{disabled:e.price<=0||e.receive<5||!e.curConstractChain.chainId},on:{click:e.transfer}},[e._v("\n      "+e._s(e.$t("message.bridge_16"))+"\n    ")]):a("div",{staticClass:"bridge-btn btn-connect",on:{click:function(t){return e.$router.push("/metamask")}}},[e._v("\n      "+e._s(e.$t("message.bridge_15"))+"\n    ")]),e._v(" "),a("div",{staticClass:"tips"},[a("div",{staticClass:"tips-title desc"},[e._v(e._s(e.$t("message.bridge_10")))]),e._v(" "),a("div",{staticClass:"desc"},[e._v("1. "+e._s(e.$t("message.bridge_11"))+" "+e._s(parseFloat((e.charge+5).toFixed(4)))+" "+e._s(e.curSelect&&e.curSelect.desc)+".")]),e._v(" "),a("div",{staticClass:"desc"},[e._v("2. "+e._s(e.$t("message.bridge_12"))+" "+e._s(e.balance)+" "+e._s(e.curSelect&&e.curSelect.desc)+".")]),e._v(" "),a("div",{staticClass:"desc"},[e._v("\n        3. "+e._s(e.$t("message.bridge_13"))+"\n      ")])])],1),e._v(" "),a("loading-pop",{attrs:{dataInfo:e.loadingData},model:{value:e.showLoading,callback:function(t){e.showLoading=t},expression:"showLoading"}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"exchange"},[t("i",{staticClass:"iconfont icon-shuangjiantou"})])}]};var d=a("C7Lr")(u,l,!1,function(e){a("7rfL"),a("hJMf")},"data-v-22deb60f",null);t.default=d.exports},hJMf:function(e,t){}});