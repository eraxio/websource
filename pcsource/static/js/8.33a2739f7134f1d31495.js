webpackJsonp([8],{"0vVi":function(t,e,n){"use strict";n("Tnm7");var r=n("bSIt"),a=(n("ytf2"),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t});function s(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(a,s){try{var o=e[a](s),i=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(i).then(function(t){r("next",t)},function(t){r("throw",t)});t(i)}("next")})}}var o={props:{value:{type:Boolean,default:!1},amount:{type:String,default:function(){return""}},tokenName:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:this.value}},watch:{value:function(t){this.dialogVisible=t}},computed:a({},Object(r.c)({language:function(t){return t.app.language},mateMaskToken:function(t){return t.app.mateMaskToken}})),mounted:function(){var t=this;return s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t=this;return s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("REMAIN");case 1:case"end":return e.stop()}},e,t)}))()}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:" ",visible:t.dialogVisible,"append-to-body":"",center:"",top:"40vh","lock-scroll":"",width:"400px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"amount"},[n("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_1")))]),t._v(" "),n("div",{staticClass:"amount-value"},[t._v(t._s(t._f("filterThousands")(t.amount))+" "+t._s(t.tokenName))])]),t._v(" "),n("el-button",{staticClass:"btn3",on:{click:t.onConfirm}},[t._v("\n          Withdraw Remain\n      ")])],1)],1)},staticRenderFns:[]};var c=n("C7Lr")(o,i,!1,function(t){n("OeVO")},"data-v-718533ac",null);e.a=c.exports},AsRa:function(t,e){},OeVO:function(t,e){},R09t:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("zGk2"),a=n("rLn3"),s=n("0vVi"),o=n("ytf2"),i=n("bSIt"),c=n("Tnm7"),u=n("bu39"),l=n("tIMw"),m=n.n(l),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function p(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(a,s){try{var o=e[a](s),i=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(i).then(function(t){r("next",t)},function(t){r("throw",t)});t(i)}("next")})}}var h={components:{WithdrawRemain:s.a,WithdrawBouns:r.a,LoadingPop:u.a,WithdrawClaim:a.a},data:function(){return{input:"",curSelect:{},showRemain:!1,showBouns:!1,showClaim:!1,curPool:null,poolIndex:0,list:[],poolAbi:"",tokenPoolAbi:"",IdoWhiteList:"",poolAddress:"",poolAddress2:"",timeId:null,tokenPoolContract:null,leftExchange:0,showLoading:!1,claimAmount:0,loadingData:{type:0},inviteAddress:c.c,isShowApprove:!1,leftPercent:0,exchangeTokenAry:[],maxValue:0,canExchanValue:0,maxBuyTimes:0,curBuyTimes:0,bounsList:[],minimum:0,maximum:0}},computed:d({},Object(i.c)({mateMaskToken:function(t){return t.app.mateMaskToken},chainObj:function(t){return t.app.chainObj},language:function(t){return t.app.language}}),{poolStatus:function(){return this.curPool?(3===this.curPool.poolStatus?(this.leftExchange=0,this.leftPercent=100):(this.curPool.poolStatus||0===this.curPool.poolStatus)&&(this.leftPercent=(parseInt(this.curPool.poolTotalAmounts)-parseInt(this.leftExchange))/parseInt(this.curPool.poolTotalAmounts)*100),this.curPool.poolStatus):(this.leftExchange=0,this.leftPercent=100,3)}}),watch:{mateMaskToken:function(){window.location.reload()},curSelect:function(){this.input="",this.calcMax(),this.checkApprove()},input:function(t){t?(parseFloat(t)>this.maximum&&this.maximum>0&&(t=this.maximum+""),parseFloat(t)>parseFloat(this.maxValue)&&(t=this.maxValue+""),t=t.match(/^\d*(\.?\d{0,4})/g)[0]||null,this.input=t,this.canExchanValue=(parseFloat(this.input)*parseFloat(this.curSelect.real)).toFixed(4)):this.canExchanValue=0}},mounted:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(o.b)(),t.poolIndex=t.$route.params.pIdx,t.poolIndex||(t.poolIndex=0),e.next=5,t.initData();case 5:t.timewait();case 6:case"end":return e.stop()}},e,t)}))()},beforeDestroy:function(){clearInterval(this.timeId)},methods:{getTotalAndLeft:function(){var t=this.curPool&&this.curPool.poolTotalAmounts;return t||(t=0),this.$t("message.ido_33")+t+this.$t("message.ido_34")+(t-this.leftExchange)+" )"},clickShowClaim:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:return e.next=5,t.tokenPoolContract.methods.getIDOTokenAmount(t.mateMaskToken).call();case 5:if(n=e.sent,parseFloat(n)){e.next=9;break}return t.$message.error("未购买或已领取"),e.abrupt("return");case 9:return e.next=11,t.getRealNumByAddress(n,t.curPool.tokenContractAddress);case 11:t.claimAmount=e.sent,t.claimAmount=t.claimAmount.toString(),t.showClaim=!0;case 14:case"end":return e.stop()}},e,t)}))()},getHarvestDesc:function(){return this.curPool?"en"===this.language?this.curPool.sReleaseTime_en:this.curPool.sReleaseTime_ch:""},getPlaceholder:function(){return this.minimum&&this.maximum?parseFloat(this.minimum)==parseFloat(this.maximum)?this.minimum:this.minimum+"-"+this.maximum:"0.00"},getRealNumByAddress:function(t,e){var n=this;return p(regeneratorRuntime.mark(function r(){var a,s;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=new web3.eth.Contract(JSON.parse(c.t),e),r.next=3,a.methods.decimals().call();case 3:return s=r.sent,r.abrupt("return",n.$util.fromWei(t,s,2));case 5:case"end":return r.stop()}},r,n)}))()},clickShowRemain:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:return e.next=5,t.tokenPoolContract.methods.getFunAddress().call();case 5:if(n=e.sent,t.mateMaskToken.toLowerCase()==n.toLowerCase()){e.next=9;break}return t.$message.error("仅项目方可操作"),e.abrupt("return");case 9:t.showRemain=!0;case 10:case"end":return e.stop()}},e,t)}))()},clickShowBouns:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},initCopy:function(){var t=this,e=document.getElementById("copyBtn"),n=new m.a(e);n.on("success",function(){t.$message.success(t.$t("message.lang_62"))}),n.on("error",function(t){})},toApprove:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkCanBuyAndApprove();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return n=new web3.eth.Contract(JSON.parse(c.t),t.curSelect.tokenAddress),e.next=8,n.methods.allowance(t.mateMaskToken,t.curPool.tokenPoolContractAddress).call();case 8:if(r=e.sent,parseInt(r)){e.next=22;break}return e.next=12,web3.eth.getGasPrice();case 12:return a=e.sent,console.log("推荐gas费==="+a),t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,e.next=19,n.methods.approve(t.curPool.tokenPoolContractAddress,"1000000000000000000000000000000000000000000").send({from:t.mateMaskToken,gasPrice:a},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 19:console.log("收到授权通知"),t.showLoading=!1,t.isShowApprove=!1;case 22:case"end":return e.stop()}},e,t)}))()},toBuyNow:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkCanBuyAndApprove();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:if(!t.isShowApprove){e.next=8;break}return t.$message.error(t.$t("message.ido_24")),e.abrupt("return");case 8:if(parseFloat(t.input)){e.next=10;break}return e.abrupt("return");case 10:if(!(parseFloat(t.input)<t.minimum&&t.minimum)){e.next=13;break}return t.$message.error(t.$t("message.ido_29")+t.minimum),e.abrupt("return");case 13:if(!parseInt(t.maxBuyTimes)){e.next=20;break}return e.next=16,t.tokenPoolContract.methods.getBuyTimes(t.mateMaskToken).call();case 16:if(t.curBuyTimes=e.sent,!(parseInt(t.curBuyTimes)>=parseInt(t.maxBuyTimes))){e.next=20;break}return t.$message.error(t.$t("message.ido_30").replace("{0}",t.maxBuyTimes)),e.abrupt("return");case 20:if(!(parseFloat(t.canExchanValue)>parseFloat(t.leftExchange))){e.next=23;break}return t.$message.error(t.$t("message.ido_31")),e.abrupt("return");case 23:return t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,n=new web3.eth.Contract(JSON.parse(c.t),t.curSelect.tokenAddress),e.next=29,n.methods.decimals().call();case 29:return r=e.sent,a=t.$util.toWei(t.input,r),e.next=33,t.tokenPoolContract.methods.buy(a).send({from:t.mateMaskToken},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 33:t.showLoading=!1,t.input="",t.updateLeftCount(),t.updateClaimNum(),t.calcMax();case 38:case"end":return e.stop()}},e,t)}))()},checkApprove:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.curSelect){e.next=2;break}return e.abrupt("return");case 2:if(t.mateMaskToken){e.next=4;break}return e.abrupt("return");case 4:return n=new web3.eth.Contract(JSON.parse(c.t),t.curSelect.tokenAddress),e.next=7,n.methods.allowance(t.mateMaskToken,t.curPool.tokenPoolContractAddress).call();case 7:r=e.sent,t.isShowApprove=!parseInt(r);case 9:case"end":return e.stop()}},e,t)}))()},getUrl:function(){var t=window.btoa("NE"+this.mateMaskToken);return window.location.origin+"/ido-detail/"+this.poolIndex+"/"+t},checkCanBuyAndApprove:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:if(t.curPool){e.next=5;break}return e.abrupt("return",!1);case 5:if(t.leftExchange){e.next=8;break}return t.$message.error(t.$t("message.ido_25")),e.abrupt("return",!1);case 8:return e.next=10,t.getWhiteListContract();case 10:if(e.sent){e.next=13;break}return e.abrupt("return",!1);case 13:if(3!==t.curPool.poolStatus){e.next=16;break}return t.$message.error(t.$t("message.ido_27")),e.abrupt("return",!1);case 16:return e.abrupt("return",!0);case 17:case"end":return e.stop()}},e,t)}))()},getWhiteListContract:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.tokenPoolContract.methods.getWhiteListContract().call();case 2:if((n=e.sent)!==c.c){e.next=5;break}return e.abrupt("return",!0);case 5:return r=new web3.eth.Contract(JSON.parse(t.IdoWhiteList),n),e.next=8,r.methods.isInWhiteList(t.mateMaskToken).call();case 8:return(a=e.sent)||t.$message.error(t.$t("message.ido_28")),e.abrupt("return",a);case 11:case"end":return e.stop()}},e,t)}))()},calcMax:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.maxValue=0,e.abrupt("return");case 3:return n=new web3.eth.Contract(JSON.parse(c.t),t.curSelect.tokenAddress),e.next=6,n.methods.balanceOf(t.mateMaskToken).call();case 6:return r=e.sent,e.next=9,n.methods.decimals().call();case 9:a=e.sent,t.maxValue=t.$util.fromWei(r,a);case 11:case"end":return e.stop()}},e,t)}))()},selectBridge:function(t){this.curSelect=t},getSummary:function(){return this.curPool?"en"===this.language?this.curPool.sSummary_en:this.curPool.sSummary_ch:""},getDescription:function(){return this.curPool?"en"===this.language?this.curPool.sDescription_en:this.curPool.sDescription_ch:""},initData:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,r,a,s,i,u,l,m,d,p,h,v,f,g,k,_,b,x,w,C,P,S,y,T,A,R,$,I,D,O,L,M,N,V,B,E,j,F;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$util.getChainKey(),e.next=3,t.$api.GetSystemConfig({sAppId:n,sKey1:"IDO"});case 3:if(r=e.sent,(a=r.vList)&&a.length){e.next=8;break}return t.$message.error(t.$t("message.bridge_35")),e.abrupt("return");case 8:for(s=!0,i=!1,u=void 0,e.prev=11,l=a[Symbol.iterator]();!(s=(m=l.next()).done);s=!0)"IdoPoolFactoryAbi"===(d=m.value).sKey2&&(t.poolAbi=d.sValue),"IdoPoolFactoryAddress"===d.sKey2&&(t.poolAddress=d.sValue),"IdoTokenPoolAbi"===d.sKey2&&(t.tokenPoolAbi=d.sValue),"IdoWhiteList"===d.sKey2&&(t.IdoWhiteList=d.sValue),"IdoPoolFactoryAddress_V2"===d.sKey2&&(t.poolAddress2=d.sValue);e.next=19;break;case 15:e.prev=15,e.t0=e.catch(11),i=!0,u=e.t0;case 19:e.prev=19,e.prev=20,!s&&l.return&&l.return();case 22:if(e.prev=22,!i){e.next=25;break}throw u;case 25:return e.finish(22);case 26:return e.finish(19);case 27:return e.next=29,t.$api.GetSystemConfig({sAppId:n,sKey1:"IDOData"});case 29:p=e.sent,h=p.vList,Object(o.b)(),v=new web3.eth.Contract(JSON.parse(t.poolAbi),t.poolAddress2),f=0,g=!0,k=!1,_=void 0,e.prev=37,b=h[Symbol.iterator]();case 39:if(g=(x=b.next()).done){e.next=48;break}if(w=x.value,C=w.sKey2.split(","),t.poolIndex.toLowerCase()!=C[1].toLowerCase()){e.next=45;break}return f=parseInt(C[0]),e.abrupt("break",48);case 45:g=!0,e.next=39;break;case 48:e.next=54;break;case 50:e.prev=50,e.t1=e.catch(37),k=!0,_=e.t1;case 54:e.prev=54,e.prev=55,!g&&b.return&&b.return();case 57:if(e.prev=57,!k){e.next=60;break}throw _;case 60:return e.finish(57);case 61:return e.finish(54);case 62:return P=null,e.next=65,v.methods.getPoolsLength().call();case 65:S=e.sent,y=0;case 67:if(!(y<S)){e.next=77;break}return e.next=70,v.methods.getPoolInfo(y).call();case 70:if((T=e.sent)[5]!==t.poolIndex){e.next=74;break}return P=T,e.abrupt("break",77);case 74:y++,e.next=67;break;case 77:return A={},A=h[f]?JSON.parse(h[f].sValue):JSON.parse(h[0].sValue),R={tokenPoolName:P[0],tokenContractAddress:P[1],poolStartTime:P[2],poolEndTime:P[3],poolTotalAmounts:P[4],tokenPoolContractAddress:P[5]},$=Object.assign(A,R),e.next=83,t.getAmount($);case 83:return $.poolTotalAmounts=e.sent,$.sDescription_en=$.sDescription_en.replace(/<br>/g,"\n"),$.sDescription_ch=$.sDescription_ch.replace(/<br>/g,"\n"),t.curPool=$,console.log(t.curPool),t.tokenPoolContract=new web3.eth.Contract(JSON.parse(t.tokenPoolAbi),P[5]),t.updateLeftCount(),e.next=92,t.tokenPoolContract.methods.getPrice().call();case 92:return I=e.sent,D={},O=I[0],L=I[1],M=new web3.eth.Contract(JSON.parse(c.t),t.curPool.tokenContractAddress),N=new web3.eth.Contract(JSON.parse(c.t),O),e.next=100,N.methods.symbol().call();case 100:return V=e.sent,e.next=103,M.methods.decimals().call();case 103:return B=e.sent,E=parseInt($.sDecimals)||6,j=t.$util.fromWei(L,B,E),D.name=V,D.realPrice=parseFloat((1/parseFloat(j)).toFixed(E)),D.priceStr=j+" "+V,D.priceStr="1 "+V+" = "+j+" "+P[0],D.tokenAddress=O,D.real=j,t.curSelect=D,e.next=115,t.tokenPoolContract.methods.getMinAndMaxBuyOnce().call();case 115:return F=e.sent,e.next=118,t.getRealNumByAddress(F[0],O);case 118:return t.minimum=e.sent,e.next=121,t.getRealNumByAddress(F[1],O);case 121:return t.maximum=e.sent,e.next=124,t.tokenPoolContract.methods.getMaxBuyNumber().call();case 124:t.maxBuyTimes=e.sent,t.updateClaimNum();case 126:case"end":return e.stop()}},e,t,[[11,15,19,27],[20,,22,26],[37,50,54,62],[55,,57,61]])}))()},updateClaimNum:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.mateMaskToken){e.next=7;break}return e.next=3,t.tokenPoolContract.methods.getRecord(t.mateMaskToken).call();case 3:return n=e.sent,e.next=6,t.getRealNumByAddress(n,t.curPool.tokenContractAddress);case 6:t.claimAmount=e.sent;case 7:case"end":return e.stop()}},e,t)}))()},updateLeftCount:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new web3.eth.Contract(JSON.parse(c.t),t.curPool.tokenContractAddress),"0x57076E5D74088eBEDf5c04D75306d04A5e85d188"!==t.poolIndex){e.next=5;break}t.leftExchange=0,e.next=12;break;case 5:return e.next=7,n.methods.decimals().call();case 7:return r=e.sent,e.next=10,t.tokenPoolContract.methods.getTotalSupply().call();case 10:t.leftExchange=e.sent,t.leftExchange=t.$util.fromWei(t.leftExchange,r);case 12:case"end":return e.stop()}},e,t)}))()},getSupport:function(){},getPriceStr:function(){return this.curSelect?this.curSelect.priceStr:""},getChain:function(t){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[t]?this.chainObj[t]:{}},getTimeStr:function(t){var e=0;if(!this.curPool)return"";e="start"===t?this.curPool.poolStartTime:this.curPool.poolEndTime,e=1e3*parseInt(e);var n=new Date(e);return(n.getUTCHours()+100).toString().substring(1)+":"+(n.getUTCMinutes()+100).toString().substring(1)},getTimeDesc:function(t){return""},getTimeDateStr:function(t){var e=0;if(!this.curPool)return"";e="start"===t?this.curPool.poolStartTime:this.curPool.poolEndTime,e=1e3*parseInt(e);var n=new Date(e);return n.getUTCFullYear()+"."+(n.getUTCMonth()+101).toString().substring(1)+"."+(n.getUTCDate()+100).toString().substring(1)},getAmount:function(t){var e=this;return p(regeneratorRuntime.mark(function n(){var r,a,s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=0,a=new web3.eth.Contract(JSON.parse(c.t),t.tokenContractAddress),n.next=4,a.methods.decimals().call();case 4:return s=n.sent,r=e.$util.fromWei(t.poolTotalAmounts,s),n.abrupt("return",r);case 7:case"end":return n.stop()}},n,e)}))()},timewait:function(){var t=this;clearInterval(this.timeId),this.timeId=setInterval(function(){if(t.curPool){var e=(new Date).getTime()/1e3,n=parseInt(t.curPool.poolStartTime),r=parseInt(t.curPool.poolEndTime),a=2;a=e<n?1:e>r?3:2,t.$set(t.curPool,"poolStatus",a)}},1e3)},getStatus:function(t){switch(t){case 1:return this.$t("message.ido_3");case 2:return this.$t("message.ido_2");case 3:return this.$t("message.ido_4")}},getStatusSign:function(t){switch(t){case 1:return this.$t("message.ido_3");case 2:return this.$t("message.ido_32");case 3:return this.$t("message.ido_4")}},getBtnDesc:function(t){switch(t.poolStatus){case 1:return this.$t("message.ido_6");case 2:return this.$t("message.ido_5");case 3:return this.$t("message.ido_6")}},toUrl:function(t){t&&window.open(t)},remain:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("点击remain"),t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,e.next=6,t.tokenPoolContract.methods.withdraw().send({from:t.mateMaskToken},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 6:t.showLoading=!1,t.showRemain=!1;case 8:case"end":return e.stop()}},e,t)}))()},bouns:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("点击bouns"),t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,e.next=6,t.tokenPoolContract.methods.getReward().send({from:t.mateMaskToken},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 6:t.showLoading=!1,t.showBouns=!1;case 8:case"end":return e.stop()}},e,t)}))()},claim:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("点击Claim"),e.next=3,t.tokenPoolContract.methods.getReleaseTime().call();case 3:if(n=e.sent,r=(new Date).getTime(),!(1e3*parseInt(n)<=r)){e.next=15;break}return t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,e.next=11,t.tokenPoolContract.methods.releaseIDOToken().send({from:t.mateMaskToken},function(e,n){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=n});case 11:t.showLoading=!1,t.showClaim=!1,e.next=16;break;case 15:t.$message.error("未到领取时间");case 16:case"end":return e.stop()}},e,t)}))()}}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"white-bg"},[r("div",{staticClass:"ido-detail"},[r("div",{staticClass:"back"},[r("div",{staticClass:"back-container",on:{click:function(e){return t.$router.back()}}},[r("span",[t._v("< "+t._s(t.$t("message.notice_22")))])])]),t._v(" "),r("div",{staticClass:"ido-container"},[r("div",{staticClass:"item"},[r("div",{staticClass:"item-container"},[r("div",{staticClass:"left"},[r("div",{staticClass:"status-sign"},[r("div",{staticClass:"sign-item"},[r("div",{staticClass:"sign-item"},[r("img",{directives:[{name:"show",rawName:"v-show",value:t.curPool&&1==t.curPool.poolStatus,expression:"curPool && curPool.poolStatus == 1"}],attrs:{src:n("uXOr"),alt:""}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:t.curPool&&2==t.curPool.poolStatus,expression:"curPool && curPool.poolStatus == 2"}],attrs:{src:n("R2lP"),alt:""}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:t.curPool&&3==t.curPool.poolStatus,expression:"curPool && curPool.poolStatus == 3"}],attrs:{src:n("zvc6"),alt:""}}),t._v(" "),r("div",{staticClass:"sign-desc"},[t._v("\n                    "+t._s(t.getStatusSign(t.curPool&&t.curPool.poolStatus))+"\n                  ")])])])]),t._v(" "),r("img",{attrs:{src:t.curPool&&t.curPool.sLogoUrl,alt:""}})]),t._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"top-div"},[r("div",{staticClass:"ido-name"},[t._v(t._s(t.curPool&&t.curPool.sName))]),t._v(" "),r("div",{staticClass:"chain-info"},[r("img",{attrs:{src:t.getChain(t.curPool&&t.curPool.sChainId).icon,alt:""}}),t._v(" "),r("div",[t._v(t._s(t.getChain(t.curPool&&t.curPool.sChainId).name))])]),t._v(" "),r("div",{staticClass:"desc line2hidden"},[t._v("\n                "+t._s(t.getSummary())+"\n              ")]),t._v(" "),r("div",{staticClass:"amount-container"},[r("div",{staticClass:"amount color1"},[r("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_1")))]),t._v(" "),r("div",{staticClass:"amount-value"},[t._v("\n                    "+t._s(t._f("filterThousands")(t.curPool&&t.curPool.poolTotalAmounts))+"\n                    "+t._s(t.curPool&&t.curPool.tokenPoolName)+"\n                  ")])])]),t._v(" "),r("div",{staticClass:"amount-container"},[r("div",{staticClass:"amount color2"},[r("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_7")))]),t._v(" "),r("div",{staticClass:"amount-value"},[t._v(t._s(t.curSelect.name))])])]),t._v(" "),r("div",{staticClass:"amount-container"},[r("div",{staticClass:"amount color3"},[r("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_8")))]),t._v(" "),r("div",{staticClass:"amount-value"},[t._v(t._s(t.getPriceStr()))])])]),t._v(" "),r("div",{staticClass:"time-container"},[r("div",{staticClass:"time-item time-item1"},[r("span",{staticClass:"time-desc"},[t._v(t._s(t.$t("message.ido_9")))]),r("span",{staticClass:"date"},[t._v(t._s(t.getTimeDateStr("start"))),r("span",{staticClass:"date time"},[t._v(t._s(t.getTimeStr("start")))])]),r("span",{staticClass:"Sign"},[t._v(t._s(t.getTimeDesc("start"))+" UTC")])]),t._v(" "),r("div",{staticClass:"time-item"},[r("span",{staticClass:"time-desc"},[t._v(t._s(t.$t("message.ido_10")))]),r("span",{staticClass:"date date2"},[t._v(t._s(t.getTimeDateStr("end"))),r("span",{staticClass:"date date2 time"},[t._v(t._s(t.getTimeStr("end")))])]),r("span",{staticClass:"Sign"},[t._v(t._s(t.getTimeDesc("end"))+" UTC")])])])])])])]),t._v(" "),t.curPool&&t.curPool.URL?r("div",{staticClass:"ido-links"},t._l(t.curPool.URL,function(e,n){return r("div",{key:n,staticClass:"ido-link-item",on:{click:function(n){return t.toUrl(e)}}},[t._v("\n          "+t._s(n)+"\n        ")])}),0):t._e(),t._v(" "),r("div",{staticClass:"ido-progress"},[r("div",{staticClass:"progress-desc"},[r("span",{staticClass:"progress-desc-txt1"},[t._v(t._s(t.$t("message.ido_11"))+":")]),r("span",{staticClass:"progress-desc-txt2"},[t._v(t._s(t.leftPercent.toFixed(2))+"% "+t._s(t.getTotalAndLeft()))])]),t._v(" "),r("el-progress",{attrs:{"show-text":!1,"stroke-width":44,color:"#44DF84",percentage:t.leftPercent,status:"success"}})],1),t._v(" "),3!==t.poolStatus?r("div",{staticClass:"ido-controller"},[r("div",{staticClass:"balance-div"},[r("span",{staticClass:"value-desc"},[t._v(t._s(t.$t("message.ido_13"))+":")]),r("span",{staticClass:"value-font"},[t._v(t._s(t._f("filterThousands")(t.maxValue))+" "+t._s(t.curSelect&&t.curSelect.name))])]),t._v(" "),r("div",{staticClass:"controller-container"},[r("div",{staticClass:"controller-left"},[r("el-input",{attrs:{type:"number",placeholder:t.getPlaceholder()},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),r("div",{staticClass:"input-control"},[r("div",{staticClass:"max-btn",on:{click:function(e){t.input=t.maxValue+""}}},[t._v(t._s(t.$t("message.ido_19")))]),t._v(" "),r("div",{staticClass:"line"}),t._v(" "),r("div",{staticClass:"ido-coin-div"},[r("span",{staticClass:"txt2"},[t._v(t._s(t.curSelect&&t.curSelect.name||""))])])])],1),t._v(" "),r("div",{staticClass:"controller-right"},[r("el-button",{staticClass:"Approve shake-shake",attrs:{disabled:!t.isShowApprove},on:{click:t.toApprove}},[r("div",{staticClass:"btn-info"},[t._v("\n                 "+t._s(t.isShowApprove?t.$t("message.ido_14"):t.$t("message.stake_59"))+"\n              ")])]),t._v(" "),r("div",{staticClass:"buy-now shake-shake",on:{click:t.toBuyNow}},[t._v("\n              "+t._s(t.$t("message.ido_15"))+"\n            ")])],1)]),t._v(" "),r("div",{staticClass:"value-font margin-10"},[t._v("≈ "+t._s(t.canExchanValue)+" "+t._s(t.curPool&&t.curPool.tokenPoolName))])]):t._e(),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"invite-url"},[r("div",{staticClass:"url"},[r("span",{staticClass:"desc"},[t._v(t._s(t.$t("message.stake_29"))+":")]),t._v(" "),r("span",{staticClass:"link"},[t._v(t._s(t.getUrl()))]),t._v(" "),r("i",{staticClass:"iconfont icon-fuzhi",attrs:{id:"copyBtn","data-clipboard-action":"copy","data-clipboard-text":t.getUrl()}})])]),t._v(" "),r("div",{staticClass:"bought-amount"},[r("span",{staticClass:"bought-amount-desc"},[t._v(t._s(t.$t("message.ido_16"))+":")]),t._v(" "),r("span",{staticClass:"bought-amount-value"},[t._v(t._s(t.claimAmount)+" "+t._s(t.curPool&&t.curPool.tokenPoolName))])]),t._v(" "),r("div",{staticClass:"harvestDesc"},[t._v(t._s(t.getHarvestDesc()))]),t._v(" "),r("div",{staticClass:"html-desc",domProps:{innerHTML:t._s(t.getDescription())}}),t._v(" "),t.curPool&&t.curPool.sImgUrl?r("img",{staticClass:"html-img",attrs:{src:t.curPool&&t.curPool.sImgUrl,alt:""}}):t._e()]),t._v(" "),r("loading-pop",{attrs:{dataInfo:t.loadingData},model:{value:t.showLoading,callback:function(e){t.showLoading=e},expression:"showLoading"}})],1)])},staticRenderFns:[]};var f=n("C7Lr")(h,v,!1,function(t){n("AsRa"),n("oLjL")},"data-v-148b380a",null);e.default=f.exports},ZVRe:function(t,e){},oLjL:function(t,e){},rLn3:function(t,e,n){"use strict";n("Tnm7");var r=n("bSIt"),a=(n("ytf2"),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t});function s(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(a,s){try{var o=e[a](s),i=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(i).then(function(t){r("next",t)},function(t){r("throw",t)});t(i)}("next")})}}var o={props:{value:{type:Boolean,default:!1},amount:{type:String,default:function(){return""}},tokenName:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:this.value}},watch:{value:function(t){this.dialogVisible=t}},computed:a({},Object(r.c)({language:function(t){return t.app.language},mateMaskToken:function(t){return t.app.mateMaskToken}})),mounted:function(){var t=this;return s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t=this;return s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("CLAIM");case 1:case"end":return e.stop()}},e,t)}))()}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:" ",visible:t.dialogVisible,"append-to-body":"",center:"",top:"40vh","lock-scroll":"",width:"400px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"amount"},[n("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_1")))]),t._v(" "),n("div",{staticClass:"amount-value"},[t._v(t._s(t._f("filterThousands")(t.amount))+" "+t._s(t.tokenName))])]),t._v(" "),n("el-button",{staticClass:"btn3",on:{click:t.onConfirm}},[t._v("\n          Claim\n      ")])],1)],1)},staticRenderFns:[]};var c=n("C7Lr")(o,i,!1,function(t){n("tHMO")},"data-v-5ec9f6c4",null);e.a=c.exports},tHMO:function(t,e){},zGk2:function(t,e,n){"use strict";n("Tnm7");var r=n("bSIt"),a=(n("ytf2"),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t});function s(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(a,s){try{var o=e[a](s),i=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(i).then(function(t){r("next",t)},function(t){r("throw",t)});t(i)}("next")})}}var o={props:{value:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}}},data:function(){return{dialogVisible:this.value}},watch:{value:function(t){this.dialogVisible=t}},computed:a({},Object(r.c)({language:function(t){return t.app.language},mateMaskToken:function(t){return t.app.mateMaskToken}})),mounted:function(){var t=this;return s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t=this;return s(regeneratorRuntime.mark(function e(){var n,r,a,s,o,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=0,r=!0,a=!1,s=void 0,e.prev=4,o=t.list[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)c=i.value,n+=parseFloat(c.value);e.next=12;break;case 8:e.prev=8,e.t0=e.catch(4),a=!0,s=e.t0;case 12:e.prev=12,e.prev=13,!r&&o.return&&o.return();case 15:if(e.prev=15,!a){e.next=18;break}throw s;case 18:return e.finish(15);case 19:return e.finish(12);case 20:if(n){e.next=23;break}return t.$message.error("没有分红"),e.abrupt("return");case 23:t.$emit("BONUS");case 24:case"end":return e.stop()}},e,t,[[4,8,12,20],[13,,15,19]])}))()}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:" ",visible:t.dialogVisible,"append-to-body":"",center:"",top:"40vh","lock-scroll":"",width:"400px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._l(t.list,function(e,r){return n("div",{key:r,staticClass:"amount",class:r>0?"":"pink"},[n("div",{staticClass:"amount-title"},[t._v(t._s(e.name)+" Bonus")]),t._v(" "),n("div",{staticClass:"amount-value"},[t._v(t._s(t._f("filterThousands")(e.value))+" "+t._s(e.name))])])}),t._v(" "),n("el-button",{staticClass:"btn3",on:{click:t.onConfirm}},[t._v("\n          Withdraw Bonus\n      ")])],2)],1)},staticRenderFns:[]};var c=n("C7Lr")(o,i,!1,function(t){n("ZVRe")},"data-v-006941f2",null);e.a=c.exports}});