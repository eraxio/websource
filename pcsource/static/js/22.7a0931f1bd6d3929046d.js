webpackJsonp([22],{AZmF:function(e,t){},NvvV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("JrLM");n("XTgB");function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})}}var i={name:"metamask",data:function(){return{installed:!1,showList:!1,list:[{iconS:n("yiFE"),iconB:n("8JQn"),name:"Metamask",index:0,desc:"message.login_5"},{iconS:n("+iQ2"),iconB:n("8T7N"),name:"Math Wallet",index:1,desc:"message.login_6"}],selected:{}}},mounted:function(){var e=this;return o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.selected=e.list[0];case 1:case"end":return t.stop()}},t,e)}))()},methods:{handleDown:function(){window.open("https://metamask.io/download.html")},select:function(e){this.selected=e},handleSign:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.a)();case 2:if(!t.sent){t.next=9;break}if(n=e.$route.query.redirect){t.next=8;break}return e.$router.back(),t.abrupt("return");case 8:e.$router.push({name:n});case 9:case"end":return t.stop()}},t,e)}))()},toConnect:function(){var e=this;return o(regeneratorRuntime.mark(function t(){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("connect-----"+e.selected.name),n="",t.t0=e.selected.index,t.next=0===t.t0?5:1===t.t0?17:2===t.t0?29:30;break;case 5:if("undefined"!=typeof web3){t.next=10;break}return window.open("https://metamask.io/download.html"),t.abrupt("return");case 10:return t.next=12,window.ethereum.request({method:"eth_requestAccounts"});case 12:if(r=t.sent,n=r[0]||""){t.next=16;break}return t.abrupt("return");case 16:return t.abrupt("break",30);case 17:if("undefined"!=typeof web3){t.next=22;break}return window.open("https://mathwallet.org/"),t.abrupt("return");case 22:return t.next=24,window.ethereum.request({method:"eth_requestAccounts"});case 24:if(o=t.sent,n=o[0]||""){t.next=28;break}return t.abrupt("return");case 28:case 29:return t.abrupt("break",30);case 30:if(!n){t.next=37;break}if(e.$store.dispatch("app/changeData",{key:"mateMaskToken",val:n}),i=e.$route.query.redirect){t.next=36;break}return e.$router.back(),t.abrupt("return");case 36:e.$router.push({name:i});case 37:case"end":return t.stop()}},t,e)}))()}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"erax-locked"}},[n("h2",{staticClass:"erax-locked-title"},[e._v(e._s(e.$t("message.Accounts_40")))]),e._v(" "),n("img",{attrs:{src:e.selected.iconB,alt:""}}),e._v(" "),n("div",{staticClass:"btnConnect",on:{click:e.toConnect}},[e._v(e._s(e.$t("message.login_1"))+e._s(e.selected.name))]),e._v(" "),n("div",{staticClass:"desc"},[e._v(e._s(e.$t("message.login_2"))),n("span",{staticClass:"wallet-name"},[e._v(e._s(e.selected.name))]),e._v(e._s(e.$t("message.login_3")))]),e._v(" "),n("div",{staticClass:"use-wallet",on:{click:function(t){e.showList=!e.showList}}},[e._v(e._s(e.$t("message.login_4")))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"}],staticClass:"list"},e._l(e.list,function(t,r){return n("div",{key:r,staticClass:"item",class:e.selected.name===t.name?"active":"",on:{click:function(n){return e.select(t)}}},[n("img",{attrs:{src:t.iconS,alt:""}}),e._v(" "),n("div",{staticClass:"txt line4hidden"},[e._v(e._s(e.$t(t.desc)))])])}),0)])},staticRenderFns:[]};var s=n("VU/8")(i,a,!1,function(e){n("AZmF")},"data-v-a0cae298",null);t.default=s.exports},XTgB:function(e,t){var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==(void 0===e?"undefined":i(e))&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,u){"use strict";u.r(t);var l={};u.r(l),u.d(l,"get_info",function(){return x}),u.d(l,"abi_json_to_bin",function(){return S}),u.d(l,"push_transaction",function(){return A}),u.d(l,"get_table_rows",function(){return E}),u.d(l,"get_account",function(){return T}),u.d(l,"get_producers",function(){return C}),u.d(l,"get_currency_balance",function(){return j}),u.d(l,"get_account_registed",function(){return N}),u.d(l,"get_actions",function(){return M});var d="undefined"!=typeof navigator?navigator.userAgent:"";"undefined"!=typeof navigator&&navigator.appVersion;var f={trident:d.indexOf("Trident")>-1,presto:d.indexOf("Presto")>-1,webKit:d.indexOf("AppleWebKit")>-1,gecko:d.indexOf("Gecko")>-1&&-1==d.indexOf("KHTML"),mobile:!!d.match(/AppleWebKit.*Mobile.*/),ios:!!d.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:d.indexOf("Android")>-1||d.indexOf("Adr")>-1,iPhone:d.indexOf("iPhone")>-1,iPad:d.indexOf("iPad")>-1,mdsApp:d.indexOf("MdsApp")>-1,mdsVer:d.indexOf("MdsApp")>-1?d.match(/MdsApp\/[^\s]+\s?/)[0].trim().split("/")[1]:"0"},h=new(function(){function e(t){c(this,e),t.mdsApp&&t.android?this.postMessageHandler=window.mds:t.mdsApp&&t.iPhone&&void 0!==window.webkit?this.postMessageHandler=window.webkit.messageHandlers.mds:this.postMessageHandler={postMessage:console.log}}return o(e,[{key:"sign_global_callback",value:function(e){if("function"==typeof e){var t="mdseosappcallback"+(new Date).getTime()+Math.floor(1e8*Math.random()+1e7);return window[t]=function(n){e(n),window[t]=null},console.log(t),t}return e}},{key:"send",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(o,i){var a={method:e,params:n,callback:t.sign_global_callback(function(e){if(r)return o(e);var t=JSON.parse(e);return t.error?i(t.error):o(t),!0})};try{t.postMessageHandler.postMessage(JSON.stringify(a))}catch(e){i(e)}})}}]),e}())(f),p=new Map;p.set(1,"ETH"),p.set(2,"NEO"),p.set(3,"EOS"),p.set(4,"EOSFORCE"),p.set(5,"ONT"),p.set(6,"BTC"),p.set(7,"ESN"),p.set(8,"TRX"),p.set(9,"NAS"),p.set(10,"BOS"),p.set(11,"ENU"),p.set(12,"TELOS"),p.set(13,"ZILLIQA"),p.set(14,"BINANCE"),p.set(15,"IRIS"),p.set(16,"COSMOS"),p.set(17,"CHAINX"),p.set(18,"CODEX"),p.set(19,"POLKADOT"),p.set(20,"VECHAIN"),p.set(21,"FT"),p.set(22,"COINEX"),p.set(19001,"KUSAMA");var v=function(e){return p.has(e)?p.get(e):"UNKNOWN"},g=function(e){e=e.toUpperCase();var t=!0,n=!1,o=void 0;try{for(var i,a=p[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value,c=r(s,2),u=c[0];if(c[1]==e)return u}}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}return 0},y=function(){function e(){c(this,e)}return o(e,[{key:"isMath",value:function(){return f.mdsApp}},{key:"openUrl",value:function(e){return h.send("openURL",{url:e})}},{key:"openThirdApp",value:function(e){return h.send("openThirdApplication",{appSchemeURL:e})}},{key:"close",value:function(){return h.send("close")}},{key:"back",value:function(){return h.send("goBack")}},{key:"fullScreen",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return h.send("fullScreen",{mode:e})}},{key:"orientation",value:function(){var e="portrait";switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0){case 1:e="landscape";break;default:e="portrait"}return h.send("deviceOrientation",{orientation:e})}},{key:"share",value:function(e){return h.send("shareAction",{type:1,imageURL:e.img,activity:{type:"event",app:"app",event:"share",name:e.name,data:e.data}})}},{key:"shareTo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h.send("shareAction",n({type:e},t))}},{key:"getAppInfo",value:function(){return h.send("getAppInfo")}},{key:"getLanguage",value:function(){return new Promise(function(e,t){h.send("getLanguage",{},!0).then(function(t){e(t)},t)})}},{key:"getWalletType",value:function(){return new Promise(function(e,t){h.send("activeWalletType").then(function(t){e(t.blockchain||v(t.type))},t)})}},{key:"getCurrentWallet",value:function(){return h.send("activeWalletAccount")}},{key:"walletPicker",value:function(e){return h.send("walletPicker",{blockchain:e})}},{key:"getWallets",value:function(){return h.send("selectWallets")}},{key:"getWalletList",value:function(e){var t=g(e);return h.send("getWalletsWithType",{type:t,blockchain:e})}},{key:"postCustomMessage",value:function(e,t){return h.send(e,t)}}]),e}(),m=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";c(this,e),this.chain=t},b="BTC",_="NEO",k="EOS",w=function(e){function t(){return c(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,b))}return s(t,m),o(t,[{key:"transfer",value:function(){var e={};return(e="object"==i(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:{from:arguments.length<=0?void 0:arguments[0],amount:arguments.length<=1?void 0:arguments[1],to:arguments.length<=2?void 0:arguments[2],memo:arguments.length<=3?void 0:arguments[3]}).symbol=e.symbol?e.symbol:"BTC",e.precision=e.precision?e.precision:6,h.send("sendTransaction",{blockchain:this.chain,action:"transfer",data:e})}}]),t}(),O=function(e){function t(){return c(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,_))}return s(t,m),o(t,[{key:"transfer",value:function(){var e={};return(e="object"==i(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:{from:arguments.length<=0?void 0:arguments[0],amount:arguments.length<=1?void 0:arguments[1],to:arguments.length<=2?void 0:arguments[2],memo:arguments.length<=3?void 0:arguments[3]}).symbol=e.symbol?e.symbol:"NEO",e.precision=e.precision?e.precision:8,h.send("sendTransaction",{blockchain:this.chain,action:"transfer",data:e})}}]),t}(),P=function(){function e(t){c(this,e),t&&(this.account=t.account?t.account:null,this.accountPermission=t.accountPermission?t.accountPermission:"active")}return o(e,[{key:"setAccount",value:function(e){this.account=e}},{key:"getAccount",value:function(){return this.account}},{key:"setAccountPermission",value:function(e){this.accountPermission=e}},{key:"getAccountPermission",value:function(){return this.accountPermission}}]),e}(),x="/v1/chain/get_info",S="/v1/chain/abi_json_to_bin",A="/v1/chain/push_transaction",E="/v1/chain/get_table_rows",T="/v1/chain/get_account",C="/v1/chain/get_producers",j="/v1/chain/get_currency_balance",N="/v1/chain/get_account",M="/v1/history/get_actions",I=function(){function e(t){c(this,e),t&&(this.httpEndpoint=t.httpEndpoint?t.httpEndpoint:null,this.chainID=t.chainID?t.chainID:null,this.nodes=t.nodes?t.nodes:[]),t.defaultNode&&this.setNode(t.defaultNode)}return o(e,[{key:"setNode",value:function(e){return!(!this.nodes[e]||!this.nodes[e].jsonRpc||(this.chainID=e,this.httpEndpoint=this.nodes[e].jsonRpc,this.netChainID=this.nodes[e].chainID,0))}},{key:"getNode",value:function(){return this.chainID}},{key:"getChainID",value:function(){return this.netChainID}},{key:"getHttpEndPoint",value:function(){return this.httpEndpoint}},{key:"getRpcUrl",value:function(e){if(void 0===l[e])throw new Error("undefined url");return this.getHttpEndPoint()+l[e]}}]),e}(),R=function(){function e(){c(this,e)}return o(e,null,[{key:"get",value:function(e){return void 0===e.dataType&&(e.dataType="JSON"),new Promise(function(t,n){var r={method:"GET",headers:e.headers};fetch(e.url,r).then(function(r){r.ok?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"JSON";switch(t=t.toLowerCase()){case"json":return e.json();case"html":return e.text();case"blob":return e.blob();default:return new Promise(function(t){t(e.body)})}}(r,e.dataType).then(t,n):n(r.status)},function(e){return n(e)})})}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n["Content-Type"]&&(n["Content-Type"]="application/json"),fetch(e,{method:"POST",headers:n,body:JSON.stringify(t)})}}]),e}(),L=function(e){function t(){var e;return c(this,t),(e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,k))).account=new P,e}return s(t,m),o(t,[{key:"init",value:function(e){return this.node=new I(e),!0}},{key:"get_info",value:function(){return R.get({url:this.node.getRpcUrl("get_info")})}},{key:"abi_json_to_bin",value:function(e){return R.post({url:this.node.getRpcUrl("abi_json_to_bin"),data:e})}},{key:"push_transaction",value:function(e,t,n){return n||(n="none"),R.post({url:this.node.getRpcUrl("push_transaction"),data:{compression:n,transaction:e,signatures:t}})}},{key:"push_transaction_all",value:function(e){return R.post({url:this.node.getRpcUrl("push_transaction"),data:e})}},{key:"signTransaction",value:function(e){if(!this.node)throw new Error("EOS chain need to initialize.");return h.send("eosTransactionSign",{transaction:e,network:{blockchain:"eos",chainId:this.node.getChainID()}})}},{key:"customSignProvider",value:function(e){var t=this,n=(e.buf,e.sign,e.transaction);return new Promise(function(e,r){t.signTransaction(n).then(function(t){t.error?r(t.error):e(t.result)})})}},{key:"getEos",value:function(){if("undefined"==typeof Eos)throw new Error("Eos.js not found!");if(void 0===this.node)throw new Error("EOS chain need to initialize.");return Eos({httpEndpoint:this.node.getHttpEndPoint(),chainId:this.node.getChainID(),signProvider:this.customSignProvider})}},{key:"getAccount",value:function(){var e=this;return new Promise(function(t,n){h.send("eosGetAccount").then(function(n){e.account.setAccount(n.account),e.node.setNode(n.node),n.authority&&e.account.setAccountPermission(n.authority),t(n)},n)})}}]),t}(),D=new(function(){function e(){c(this,e),this.blockchains=[new w,new O,new L]}return o(e,[{key:"getBlockchain",value:function(e){return this.blockchains.find(function(t){return t.chain===e})}},{key:"getBlockchains",value:function(){return this.blockchains}}]),e}()),U=new(function(e){function t(){var e;return c(this,t),e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),D.getBlockchains(),D.getBlockchains().map(function(t){e[t.chain]=t}),e}return s(t,y),t}());"undefined"!=typeof window&&(window.mathwallet=U),t.default=U}])}});