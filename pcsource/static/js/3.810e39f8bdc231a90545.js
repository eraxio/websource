webpackJsonp([3],{"5sJ9":function(e,t){},Ewah:function(e,t){},Sjr3:function(e,t){},bbBE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Tnm7"),a=n("NYxO"),s=n("ytf2"),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,s){try{var o=t[a](s),i=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}var c={props:{value:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:this.value}},watch:{value:function(e){this.dialogVisible=e}},computed:o({},Object(a.c)({language:function(e){return e.app.language},mateMaskToken:function(e){return e.app.mateMaskToken}})),mounted:function(){var e=this;return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()},methods:{handleClose:function(e){this.$emit("input",!1)},onConfirm:function(){var e=this;return i(regeneratorRuntime.mark(function t(){var n,r,a,s,o,i,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n=0,r=!0,a=!1,s=void 0,t.prev=4,o=e.list[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)c=i.value,n+=parseFloat(c.value);t.next=12;break;case 8:t.prev=8,t.t0=t.catch(4),a=!0,s=t.t0;case 12:t.prev=12,t.prev=13,!r&&o.return&&o.return();case 15:if(t.prev=15,!a){t.next=18;break}throw s;case 18:return t.finish(15);case 19:return t.finish(12);case 20:if(n){t.next=23;break}return e.$message.error("没有分红"),t.abrupt("return");case 23:e.$emit("BONUS");case 24:case"end":return t.stop()}},t,e,[[4,8,12,20],[13,,15,19]])}))()}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{title:" ",visible:e.dialogVisible,"append-to-body":"",center:"",top:"40vh","lock-scroll":"",width:"400px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[e._l(e.list,function(t,r){return n("div",{key:r,staticClass:"amount",class:r>0?"":"pink"},[n("div",{staticClass:"amount-title"},[e._v(e._s(t.name)+" Bonus")]),e._v(" "),n("div",{staticClass:"amount-value"},[e._v(e._s(e._f("filterThousands")(t.value))+" "+e._s(t.name))])])}),e._v(" "),n("el-button",{staticClass:"btn3",on:{click:e.onConfirm}},[e._v("\n          Withdraw Bonus\n      ")])],2)],1)},staticRenderFns:[]};var l=n("VU/8")(c,u,!1,function(e){n("qaD4")},"data-v-006941f2",null).exports,m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function d(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,s){try{var o=t[a](s),i=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}var p={props:{value:{type:Boolean,default:!1},amount:{type:String,default:function(){return""}},tokenName:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:this.value}},watch:{value:function(e){this.dialogVisible=e}},computed:m({},Object(a.c)({language:function(e){return e.app.language},mateMaskToken:function(e){return e.app.mateMaskToken}})),mounted:function(){var e=this;return d(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()},methods:{handleClose:function(e){this.$emit("input",!1)},onConfirm:function(){var e=this;return d(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$emit("CLAIM");case 1:case"end":return t.stop()}},t,e)}))()}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{title:" ",visible:e.dialogVisible,"append-to-body":"",center:"",top:"40vh","lock-scroll":"",width:"400px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",{staticClass:"amount"},[n("div",{staticClass:"amount-title"},[e._v(e._s(e.$t("message.ido_1")))]),e._v(" "),n("div",{staticClass:"amount-value"},[e._v(e._s(e._f("filterThousands")(e.amount))+" "+e._s(e.tokenName))])]),e._v(" "),n("el-button",{staticClass:"btn3",on:{click:e.onConfirm}},[e._v("\n          Claim\n      ")])],1)],1)},staticRenderFns:[]};var h=n("VU/8")(p,v,!1,function(e){n("hXZW")},"data-v-5ec9f6c4",null).exports,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function g(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,s){try{var o=t[a](s),i=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}var k={props:{value:{type:Boolean,default:!1},amount:{type:String,default:function(){return""}},tokenName:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:this.value}},watch:{value:function(e){this.dialogVisible=e}},computed:f({},Object(a.c)({language:function(e){return e.app.language},mateMaskToken:function(e){return e.app.mateMaskToken}})),mounted:function(){var e=this;return g(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()},methods:{handleClose:function(e){this.$emit("input",!1)},onConfirm:function(){var e=this;return g(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$emit("REMAIN");case 1:case"end":return t.stop()}},t,e)}))()}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",{attrs:{title:" ",visible:e.dialogVisible,"append-to-body":"",center:"",top:"40vh","lock-scroll":"",width:"400px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",{staticClass:"amount"},[n("div",{staticClass:"amount-title"},[e._v(e._s(e.$t("message.ido_1")))]),e._v(" "),n("div",{staticClass:"amount-value"},[e._v(e._s(e._f("filterThousands")(e.amount))+" "+e._s(e.tokenName))])]),e._v(" "),n("el-button",{staticClass:"btn3",on:{click:e.onConfirm}},[e._v("\n          Withdraw Remain\n      ")])],1)],1)},staticRenderFns:[]};var b=n("VU/8")(k,_,!1,function(e){n("Ewah")},"data-v-718533ac",null).exports,w=n("bu39"),x=n("TQvf"),C=n.n(x),P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function S(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,s){try{var o=t[a](s),i=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}var y={components:{WithdrawRemain:b,WithdrawBouns:l,LoadingPop:w.a,WithdrawClaim:h},data:function(){return{input:"",curSelect:{},showRemain:!1,showBouns:!1,showClaim:!1,curPool:null,poolIndex:0,list:[],poolAbi:"",tokenPoolAbi:"",IdoWhiteList:"",poolAddress:"",timeId:null,tokenPoolContract:null,leftExchange:0,showLoading:!1,claimAmount:0,loadingData:{type:0},inviteAddress:r.c,isShowApprove:!1,leftPercent:0,exchangeTokenAry:[],maxValue:0,canExchanValue:0,maxBuyTimes:0,curBuyTimes:0,bounsList:[],minimum:0,maximum:0}},computed:P({},Object(a.c)({mateMaskToken:function(e){return e.app.mateMaskToken},chainObj:function(e){return e.app.chainObj},language:function(e){return e.app.language}}),{poolStatus:function(){return this.curPool?this.curPool.poolStatus:3}}),watch:{mateMaskToken:function(){window.location.reload()},curSelect:function(){this.input="",this.calcMax(),this.checkApprove()},input:function(e){e?(parseFloat(e)>this.maximum&&this.maximum>0&&(e=this.maximum+""),parseFloat(e)>parseFloat(this.maxValue)&&(e=this.maxValue+""),e=e.match(/^\d*(\.?\d{0,4})/g)[0]||null,this.input=e,this.canExchanValue=(parseFloat(this.input)/parseFloat(this.curSelect.realPrice)).toFixed(4)):this.canExchanValue=0}},mounted:function(){var e=this;return S(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Object(s.b)(),e.poolIndex=e.$route.params.pIdx,e.poolIndex||(e.poolIndex=0),t.next=5,e.initData();case 5:e.timewait();case 6:case"end":return t.stop()}},t,e)}))()},beforeDestroy:function(){clearInterval(this.timeId)},methods:{getTotalAndLeft:function(){var e=this.curPool&&this.curPool.poolTotalAmounts;return e||(e=0),this.$t("message.ido_33")+e+this.$t("message.ido_34")+(e-this.leftExchange)+" )"},clickShowClaim:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.$router.push("/metamask"),t.abrupt("return",!1);case 3:return t.next=5,e.tokenPoolContract.methods.getIDOTokenAmount(e.mateMaskToken).call();case 5:if(n=t.sent,parseFloat(n)){t.next=9;break}return e.$message.error("未购买或已领取"),t.abrupt("return");case 9:return t.next=11,e.getRealNumByAddress(n,e.curPool.tokenContractAddress);case 11:e.claimAmount=t.sent,e.claimAmount=e.claimAmount.toString(),e.showClaim=!0;case 14:case"end":return t.stop()}},t,e)}))()},getHarvestDesc:function(){return this.curPool?"en"===this.language?this.curPool.sReleaseTime_en:this.curPool.sReleaseTime_ch:""},getPlaceholder:function(){return this.minimum&&this.maximum?parseFloat(this.minimum)==parseFloat(this.maximum)?this.minimum:this.minimum+"-"+this.maximum:"0.00"},getRealNumByAddress:function(e,t){var n=this;return S(regeneratorRuntime.mark(function a(){var s,o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s=new web3.eth.Contract(JSON.parse(r.t),t),a.next=3,s.methods.decimals().call();case 3:return o=a.sent,a.abrupt("return",n.$util.fromWei(e,o,2));case 5:case"end":return a.stop()}},a,n)}))()},clickShowRemain:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.$router.push("/metamask"),t.abrupt("return",!1);case 3:return t.next=5,e.tokenPoolContract.methods.getFunAddress().call();case 5:if(n=t.sent,e.mateMaskToken.toLowerCase()==n.toLowerCase()){t.next=9;break}return e.$message.error("仅项目方可操作"),t.abrupt("return");case 9:e.showRemain=!0;case 10:case"end":return t.stop()}},t,e)}))()},clickShowBouns:function(){var e=this;return S(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()},initCopy:function(){var e=this,t=document.getElementById("copyBtn"),n=new C.a(t);n.on("success",function(){e.$message.success(e.$t("message.lang_62"))}),n.on("error",function(e){})},toApprove:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n,a,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkCanBuyAndApprove();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return n=new web3.eth.Contract(JSON.parse(r.t),e.curSelect.tokenAddress),t.next=8,n.methods.allowance(e.mateMaskToken,e.curPool.tokenPoolContractAddress).call();case 8:if(a=t.sent,parseInt(a)){t.next=22;break}return t.next=12,web3.eth.getGasPrice();case 12:return s=t.sent,console.log("推荐gas费==="+s),e.loadingData.type=1,e.loadingData.scan=e.chainObj[e.curPool.sChainId],e.showLoading=!0,t.next=19,n.methods.approve(e.curPool.tokenPoolContractAddress,"1000000000000000000000000000000000000000000").send({from:e.mateMaskToken,gasPrice:s},function(t,n){if(t)return e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=n});case 19:console.log("收到授权通知"),e.showLoading=!1,e.isShowApprove=!1;case 22:case"end":return t.stop()}},t,e)}))()},toBuyNow:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n,a,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkCanBuyAndApprove();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:if(!e.isShowApprove){t.next=8;break}return e.$message.error(e.$t("message.ido_24")),t.abrupt("return");case 8:if(parseFloat(e.input)){t.next=10;break}return t.abrupt("return");case 10:if(!(parseFloat(e.input)<e.minimum&&e.minimum)){t.next=13;break}return e.$message.error(e.$t("message.ido_29")+e.minimum),t.abrupt("return");case 13:if(!parseInt(e.maxBuyTimes)){t.next=20;break}return t.next=16,e.tokenPoolContract.methods.getBuyTimes(e.mateMaskToken).call();case 16:if(e.curBuyTimes=t.sent,!(parseInt(e.curBuyTimes)>=parseInt(e.maxBuyTimes))){t.next=20;break}return e.$message.error(e.$t("message.ido_30").replace("{0}",e.maxBuyTimes)),t.abrupt("return");case 20:if(!(parseFloat(e.canExchanValue)>parseFloat(e.leftExchange))){t.next=23;break}return e.$message.error(e.$t("message.ido_31")),t.abrupt("return");case 23:return e.loadingData.type=1,e.loadingData.scan=e.chainObj[e.curPool.sChainId],e.showLoading=!0,n=new web3.eth.Contract(JSON.parse(r.t),e.curSelect.tokenAddress),t.next=29,n.methods.decimals().call();case 29:return a=t.sent,s=e.$util.toWei(e.input,a),t.next=33,e.tokenPoolContract.methods.buy(s).send({from:e.mateMaskToken},function(t,n){if(t)return e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=n});case 33:e.showLoading=!1,e.input="",e.updateLeftCount(),e.updateClaimNum(),e.calcMax();case 38:case"end":return t.stop()}},t,e)}))()},checkApprove:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.curSelect){t.next=2;break}return t.abrupt("return");case 2:if(e.mateMaskToken){t.next=4;break}return t.abrupt("return");case 4:return n=new web3.eth.Contract(JSON.parse(r.t),e.curSelect.tokenAddress),t.next=7,n.methods.allowance(e.mateMaskToken,e.curPool.tokenPoolContractAddress).call();case 7:a=t.sent,e.isShowApprove=!parseInt(a);case 9:case"end":return t.stop()}},t,e)}))()},getUrl:function(){var e=window.btoa("NE"+this.mateMaskToken);return window.location.origin+"/ido-detail/"+this.poolIndex+"/"+e},checkCanBuyAndApprove:function(){var e=this;return S(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.$router.push("/metamask"),t.abrupt("return",!1);case 3:if(e.curPool){t.next=5;break}return t.abrupt("return",!1);case 5:if(e.leftExchange){t.next=8;break}return e.$message.error(e.$t("message.ido_25")),t.abrupt("return",!1);case 8:return t.next=10,e.getWhiteListContract();case 10:if(t.sent){t.next=13;break}return t.abrupt("return",!1);case 13:if(1!==e.curPool.poolStatus){t.next=16;break}return e.$message.error(e.$t("message.ido_26")),t.abrupt("return",!1);case 16:if(3!==e.curPool.poolStatus){t.next=19;break}return e.$message.error(e.$t("message.ido_27")),t.abrupt("return",!1);case 19:return t.abrupt("return",!0);case 20:case"end":return t.stop()}},t,e)}))()},getWhiteListContract:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n,a,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.tokenPoolContract.methods.getWhiteListContract().call();case 2:if((n=t.sent)!==r.c){t.next=5;break}return t.abrupt("return",!0);case 5:return a=new web3.eth.Contract(JSON.parse(e.IdoWhiteList),n),t.next=8,a.methods.isInWhiteList(e.mateMaskToken).call();case 8:return(s=t.sent)||e.$message.error(e.$t("message.ido_28")),t.abrupt("return",s);case 11:case"end":return t.stop()}},t,e)}))()},calcMax:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n,a,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.maxValue=0,t.abrupt("return");case 3:return n=new web3.eth.Contract(JSON.parse(r.t),e.curSelect.tokenAddress),t.next=6,n.methods.balanceOf(e.mateMaskToken).call();case 6:return a=t.sent,t.next=9,n.methods.decimals().call();case 9:s=t.sent,e.maxValue=e.$util.fromWei(a,s);case 11:case"end":return t.stop()}},t,e)}))()},selectBridge:function(e){this.curSelect=e},getSummary:function(){return this.curPool?"en"===this.language?this.curPool.sSummary_en:this.curPool.sSummary_ch:""},getDescription:function(){return this.curPool?"en"===this.language?this.curPool.sDescription_en:this.curPool.sDescription_ch:""},initData:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n,a,o,i,c,u,l,m,d,p,v,h,f,g,k,_,b,w,x,C,P,S,y,T,A,$,R,I,D,O,L,N,M,B,V;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$util.getChainKey(),t.next=3,e.$api.GetSystemConfig({sAppId:n,sKey1:"IDO"});case 3:if(a=t.sent,(o=a.vList)&&o.length){t.next=8;break}return e.$message.error(e.$t("message.bridge_35")),t.abrupt("return");case 8:for(i=!0,c=!1,u=void 0,t.prev=11,l=o[Symbol.iterator]();!(i=(m=l.next()).done);i=!0)"IdoPoolFactoryAbi"===(d=m.value).sKey2&&(e.poolAbi=d.sValue),"IdoPoolFactoryAddress"===d.sKey2&&(e.poolAddress=d.sValue),"IdoTokenPoolAbi"===d.sKey2&&(e.tokenPoolAbi=d.sValue),"IdoWhiteList"===d.sKey2&&(e.IdoWhiteList=d.sValue);t.next=19;break;case 15:t.prev=15,t.t0=t.catch(11),c=!0,u=t.t0;case 19:t.prev=19,t.prev=20,!i&&l.return&&l.return();case 22:if(t.prev=22,!c){t.next=25;break}throw u;case 25:return t.finish(22);case 26:return t.finish(19);case 27:return t.next=29,e.$api.GetSystemConfig({sAppId:n,sKey1:"IDOData"});case 29:p=t.sent,v=p.vList,Object(s.b)(),h=new web3.eth.Contract(JSON.parse(e.poolAbi),e.poolAddress),f=0,g=!0,k=!1,_=void 0,t.prev=37,b=v[Symbol.iterator]();case 39:if(g=(w=b.next()).done){t.next=48;break}if(x=w.value,C=x.sKey2.split(","),e.poolIndex.toLowerCase()!=C[1].toLowerCase()){t.next=45;break}return f=parseInt(C[0]),t.abrupt("break",48);case 45:g=!0,t.next=39;break;case 48:t.next=54;break;case 50:t.prev=50,t.t1=t.catch(37),k=!0,_=t.t1;case 54:t.prev=54,t.prev=55,!g&&b.return&&b.return();case 57:if(t.prev=57,!k){t.next=60;break}throw _;case 60:return t.finish(57);case 61:return t.finish(54);case 62:return t.next=64,h.methods.getPoolInfo(f).call();case 64:return P=t.sent,S={},S=v[f]?JSON.parse(v[f].sValue):JSON.parse(v[0].sValue),y={tokenPoolName:P[0],tokenContractAddress:P[1],poolStartTime:P[2],poolEndTime:P[3],poolTotalAmounts:P[4],tokenPoolContractAddress:P[5]},T=Object.assign(S,y),t.next=71,e.getAmount(T);case 71:return T.poolTotalAmounts=t.sent,T.sDescription_en=T.sDescription_en.replace(/<br>/g,"\n"),T.sDescription_ch=T.sDescription_ch.replace(/<br>/g,"\n"),e.curPool=T,console.log(e.curPool),e.tokenPoolContract=new web3.eth.Contract(JSON.parse(e.tokenPoolAbi),P[5]),e.updateLeftCount(),t.next=80,e.tokenPoolContract.methods.getPrice().call();case 80:return A=t.sent,$={},R=A[0],I=A[1],D=new web3.eth.Contract(JSON.parse(r.t),e.curPool.tokenContractAddress),O=new web3.eth.Contract(JSON.parse(r.t),R),t.next=88,O.methods.symbol().call();case 88:return L=t.sent,t.next=91,D.methods.decimals().call();case 91:return N=t.sent,M=parseInt(T.sDecimals)||6,B=e.$util.fromWei(I,N,M),$.name=L,$.realPrice=parseFloat((1/parseFloat(B)).toFixed(M)),$.priceStr=B+" "+L,$.priceStr="1 "+L+" = "+B+" "+P[0],$.tokenAddress=R,e.curSelect=$,t.next=102,e.tokenPoolContract.methods.getMinAndMaxBuyOnce().call();case 102:return V=t.sent,t.next=105,e.getRealNumByAddress(V[0],R);case 105:return e.minimum=t.sent,t.next=108,e.getRealNumByAddress(V[1],R);case 108:return e.maximum=t.sent,t.next=111,e.tokenPoolContract.methods.getMaxBuyNumber().call();case 111:e.maxBuyTimes=t.sent,e.updateClaimNum();case 113:case"end":return t.stop()}},t,e,[[11,15,19,27],[20,,22,26],[37,50,54,62],[55,,57,61]])}))()},updateClaimNum:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.mateMaskToken){t.next=7;break}return t.next=3,e.tokenPoolContract.methods.getRecord(e.mateMaskToken).call();case 3:return n=t.sent,t.next=6,e.getRealNumByAddress(n,e.curPool.tokenContractAddress);case 6:e.claimAmount=t.sent;case 7:case"end":return t.stop()}},t,e)}))()},updateLeftCount:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new web3.eth.Contract(JSON.parse(r.t),e.curPool.tokenContractAddress),t.next=3,n.methods.decimals().call();case 3:return a=t.sent,t.next=6,e.tokenPoolContract.methods.getTotalSupply().call();case 6:e.leftExchange=t.sent,e.leftExchange=e.$util.fromWei(e.leftExchange,a),e.leftPercent=(parseInt(e.curPool.poolTotalAmounts)-parseInt(e.leftExchange))/parseInt(e.curPool.poolTotalAmounts)*100;case 9:case"end":return t.stop()}},t,e)}))()},getSupport:function(){},getPriceStr:function(){return this.curSelect?this.curSelect.priceStr:""},getChain:function(e){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[e]?this.chainObj[e]:{}},getTimeStr:function(e){var t=0;if(!this.curPool)return"";t="start"===e?this.curPool.poolStartTime:this.curPool.poolEndTime,t=1e3*parseInt(t);var n=new Date(t);return(n.getUTCHours()+100).toString().substring(1)+":"+(n.getUTCMinutes()+100).toString().substring(1)},getTimeDesc:function(e){return""},getTimeDateStr:function(e){var t=0;if(!this.curPool)return"";t="start"===e?this.curPool.poolStartTime:this.curPool.poolEndTime,t=1e3*parseInt(t);var n=new Date(t);return n.getUTCFullYear()+"."+(n.getUTCMonth()+101).toString().substring(1)+"."+(n.getUTCDate()+100).toString().substring(1)},getAmount:function(e){var t=this;return S(regeneratorRuntime.mark(function n(){var a,s,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=0,s=new web3.eth.Contract(JSON.parse(r.t),e.tokenContractAddress),n.next=4,s.methods.decimals().call();case 4:return o=n.sent,a=t.$util.fromWei(e.poolTotalAmounts,o),n.abrupt("return",a);case 7:case"end":return n.stop()}},n,t)}))()},timewait:function(){var e=this;clearInterval(this.timeId),this.timeId=setInterval(function(){if(e.curPool){var t=(new Date).getTime()/1e3,n=parseInt(e.curPool.poolStartTime),r=parseInt(e.curPool.poolEndTime),a=2;a=t<n?1:t>r?3:2,e.$set(e.curPool,"poolStatus",a)}},1e3)},getStatus:function(e){switch(e){case 1:return this.$t("message.ido_3");case 2:return this.$t("message.ido_2");case 3:return this.$t("message.ido_4")}},getStatusSign:function(e){switch(e){case 1:return this.$t("message.ido_3");case 2:return this.$t("message.ido_32");case 3:return this.$t("message.ido_4")}},getBtnDesc:function(e){switch(e.poolStatus){case 1:return this.$t("message.ido_6");case 2:return this.$t("message.ido_5");case 3:return this.$t("message.ido_6")}},toUrl:function(e){e&&window.open(e)},remain:function(){var e=this;return S(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("点击remain"),e.loadingData.type=1,e.loadingData.scan=e.chainObj[e.curPool.sChainId],e.showLoading=!0,t.next=6,e.tokenPoolContract.methods.withdraw().send({from:e.mateMaskToken},function(t,n){if(t)return e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=n});case 6:e.showLoading=!1,e.showRemain=!1;case 8:case"end":return t.stop()}},t,e)}))()},bouns:function(){var e=this;return S(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("点击bouns"),e.loadingData.type=1,e.loadingData.scan=e.chainObj[e.curPool.sChainId],e.showLoading=!0,t.next=6,e.tokenPoolContract.methods.getReward().send({from:e.mateMaskToken},function(t,n){if(t)return e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=n});case 6:e.showLoading=!1,e.showBouns=!1;case 8:case"end":return t.stop()}},t,e)}))()},claim:function(){var e=this;return S(regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("点击Claim"),t.next=3,e.tokenPoolContract.methods.getReleaseTime().call();case 3:if(n=t.sent,r=(new Date).getTime(),!(1e3*parseInt(n)<=r)){t.next=15;break}return e.loadingData.type=1,e.loadingData.scan=e.chainObj[e.curPool.sChainId],e.showLoading=!0,t.next=11,e.tokenPoolContract.methods.releaseIDOToken().send({from:e.mateMaskToken},function(t,n){if(t)return e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=n});case 11:e.showLoading=!1,e.showClaim=!1,t.next=16;break;case 15:e.$message.error("未到领取时间");case 16:case"end":return t.stop()}},t,e)}))()}}},T={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"white-bg"},[r("div",{staticClass:"ido-detail"},[r("div",{staticClass:"back"},[r("div",{staticClass:"back-container",on:{click:function(t){return e.$router.back()}}},[r("span",[e._v("< "+e._s(e.$t("message.notice_22")))])])]),e._v(" "),r("div",{staticClass:"ido-container"},[r("div",{staticClass:"item"},[r("div",{staticClass:"item-container"},[r("div",{staticClass:"left"},[r("div",{staticClass:"status-sign"},[r("div",{staticClass:"sign-item"},[r("div",{staticClass:"sign-item"},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.curPool&&1==e.curPool.poolStatus,expression:"curPool && curPool.poolStatus == 1"}],attrs:{src:n("uXOr"),alt:""}}),e._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:e.curPool&&2==e.curPool.poolStatus,expression:"curPool && curPool.poolStatus == 2"}],attrs:{src:n("R2lP"),alt:""}}),e._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:e.curPool&&3==e.curPool.poolStatus,expression:"curPool && curPool.poolStatus == 3"}],attrs:{src:n("zvc6"),alt:""}}),e._v(" "),r("div",{staticClass:"sign-desc"},[e._v("\n                    "+e._s(e.getStatusSign(e.curPool&&e.curPool.poolStatus))+"\n                  ")])])])]),e._v(" "),r("img",{attrs:{src:e.curPool&&e.curPool.sLogoUrl,alt:""}})]),e._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"top-div"},[r("div",{staticClass:"ido-name"},[e._v(e._s(e.curPool&&e.curPool.sName))]),e._v(" "),r("div",{staticClass:"chain-info"},[r("img",{attrs:{src:e.getChain(e.curPool&&e.curPool.sChainId).icon,alt:""}}),e._v(" "),r("div",[e._v(e._s(e.getChain(e.curPool&&e.curPool.sChainId).name))])]),e._v(" "),r("div",{staticClass:"desc line2hidden"},[e._v("\n                "+e._s(e.getSummary())+"\n              ")]),e._v(" "),r("div",{staticClass:"amount-container"},[r("div",{staticClass:"amount color1"},[r("div",{staticClass:"amount-title"},[e._v(e._s(e.$t("message.ido_1")))]),e._v(" "),r("div",{staticClass:"amount-value"},[e._v("\n                    "+e._s(e._f("filterThousands")(e.curPool&&e.curPool.poolTotalAmounts))+"\n                    "+e._s(e.curPool&&e.curPool.tokenPoolName)+"\n                  ")])])]),e._v(" "),r("div",{staticClass:"amount-container"},[r("div",{staticClass:"amount color2"},[r("div",{staticClass:"amount-title"},[e._v(e._s(e.$t("message.ido_7")))]),e._v(" "),r("div",{staticClass:"amount-value"},[e._v(e._s(e.curSelect.name))])])]),e._v(" "),r("div",{staticClass:"amount-container"},[r("div",{staticClass:"amount color3"},[r("div",{staticClass:"amount-title"},[e._v(e._s(e.$t("message.ido_8")))]),e._v(" "),r("div",{staticClass:"amount-value"},[e._v(e._s(e.getPriceStr()))])])]),e._v(" "),r("div",{staticClass:"time-container"},[r("div",{staticClass:"time-item time-item1"},[r("span",{staticClass:"time-desc"},[e._v(e._s(e.$t("message.ido_9")))]),r("span",{staticClass:"date"},[e._v(e._s(e.getTimeDateStr("start"))),r("span",{staticClass:"date time"},[e._v(e._s(e.getTimeStr("start")))])]),r("span",{staticClass:"Sign"},[e._v(e._s(e.getTimeDesc("start"))+" UTC")])]),e._v(" "),r("div",{staticClass:"time-item"},[r("span",{staticClass:"time-desc"},[e._v(e._s(e.$t("message.ido_10")))]),r("span",{staticClass:"date date2"},[e._v(e._s(e.getTimeDateStr("end"))),r("span",{staticClass:"date date2 time"},[e._v(e._s(e.getTimeStr("end")))])]),r("span",{staticClass:"Sign"},[e._v(e._s(e.getTimeDesc("end"))+" UTC")])])])])])])]),e._v(" "),e.curPool&&e.curPool.URL?r("div",{staticClass:"ido-links"},e._l(e.curPool.URL,function(t,n){return r("div",{key:n,staticClass:"ido-link-item",on:{click:function(n){return e.toUrl(t)}}},[e._v("\n          "+e._s(n)+"\n        ")])}),0):e._e(),e._v(" "),r("div",{staticClass:"ido-progress"},[r("div",{staticClass:"progress-desc"},[r("span",{staticClass:"progress-desc-txt1"},[e._v(e._s(e.$t("message.ido_11"))+":")]),r("span",{staticClass:"progress-desc-txt2"},[e._v(e._s(e.leftPercent.toFixed(2))+"% "+e._s(e.getTotalAndLeft()))])]),e._v(" "),r("el-progress",{attrs:{"show-text":!1,"stroke-width":44,color:"#44DF84",percentage:e.leftPercent,status:"success"}})],1),e._v(" "),3!==e.poolStatus?r("div",{staticClass:"ido-controller"},[r("div",{staticClass:"balance-div"},[r("span",{staticClass:"value-desc"},[e._v(e._s(e.$t("message.ido_13"))+":")]),r("span",{staticClass:"value-font"},[e._v(e._s(e._f("filterThousands")(e.maxValue))+" "+e._s(e.curSelect&&e.curSelect.name))])]),e._v(" "),r("div",{staticClass:"controller-container"},[r("div",{staticClass:"controller-left"},[r("el-input",{attrs:{type:"number",placeholder:e.getPlaceholder()},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e._v(" "),r("div",{staticClass:"input-control"},[r("div",{staticClass:"max-btn",on:{click:function(t){e.input=e.maxValue+""}}},[e._v(e._s(e.$t("message.ido_19")))]),e._v(" "),r("div",{staticClass:"line"}),e._v(" "),r("div",{staticClass:"ido-coin-div"},[r("span",{staticClass:"txt2"},[e._v(e._s(e.curSelect&&e.curSelect.name||""))])])])],1),e._v(" "),r("div",{staticClass:"controller-right"},[r("el-button",{staticClass:"Approve shake-shake",attrs:{disabled:!e.isShowApprove},on:{click:e.toApprove}},[r("div",{staticClass:"btn-info"},[e._v("\n                 "+e._s(e.isShowApprove?e.$t("message.ido_14"):e.$t("message.stake_59"))+"\n              ")])]),e._v(" "),r("div",{staticClass:"buy-now shake-shake",on:{click:e.toBuyNow}},[e._v("\n              "+e._s(e.$t("message.ido_15"))+"\n            ")])],1)]),e._v(" "),r("div",{staticClass:"value-font margin-10"},[e._v("≈ "+e._s(e.canExchanValue)+" "+e._s(e.curPool&&e.curPool.tokenPoolName))])]):e._e(),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"invite-url"},[r("div",{staticClass:"url"},[r("span",{staticClass:"desc"},[e._v(e._s(e.$t("message.stake_29"))+":")]),e._v(" "),r("span",{staticClass:"link"},[e._v(e._s(e.getUrl()))]),e._v(" "),r("i",{staticClass:"iconfont icon-fuzhi",attrs:{id:"copyBtn","data-clipboard-action":"copy","data-clipboard-text":e.getUrl()}})])]),e._v(" "),r("div",{staticClass:"bought-amount"},[r("span",{staticClass:"bought-amount-desc"},[e._v(e._s(e.$t("message.ido_16"))+":")]),e._v(" "),r("span",{staticClass:"bought-amount-value"},[e._v(e._s(e.claimAmount)+" "+e._s(e.curPool&&e.curPool.tokenPoolName))])]),e._v(" "),r("div",{staticClass:"harvestDesc"},[e._v(e._s(e.getHarvestDesc()))]),e._v(" "),r("div",{staticClass:"html-desc",domProps:{innerHTML:e._s(e.getDescription())}}),e._v(" "),e.curPool&&e.curPool.sImgUrl?r("img",{staticClass:"html-img",attrs:{src:e.curPool&&e.curPool.sImgUrl,alt:""}}):e._e()]),e._v(" "),r("loading-pop",{attrs:{dataInfo:e.loadingData},model:{value:e.showLoading,callback:function(t){e.showLoading=t},expression:"showLoading"}})],1)])},staticRenderFns:[]};var A=n("VU/8")(y,T,!1,function(e){n("5sJ9"),n("Sjr3")},"data-v-61e44dac",null);t.default=A.exports},hXZW:function(e,t){},qaD4:function(e,t){}});