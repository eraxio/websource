webpackJsonp([20],{"+OJF":function(t,e){},YihB:function(t,e){},sSoT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("zGk2"),r=a("rLn3"),n=a("0vVi"),o=a("ytf2"),i=a("bSIt"),c=a("Tnm7"),u=a("bu39"),l=a("tIMw"),m=a.n(l),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};function p(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(r,n){try{var o=e[r](n),i=o.value}catch(t){return void a(t)}if(!o.done)return Promise.resolve(i).then(function(t){s("next",t)},function(t){s("throw",t)});t(i)}("next")})}}var h={components:{WithdrawRemain:n.a,WithdrawBouns:s.a,LoadingPop:u.a,WithdrawClaim:r.a},data:function(){return{curSelect:{},showRemain:!1,showBouns:!1,showClaim:!1,curPool:null,poolIndex:0,list:[],poolAbi:"",poolAbi3:"",tokenPoolAbi:"",IdoWhiteList:"",poolAddress:"",poolAddress2:"",poolAddress3:"",timeId:null,tokenPoolContract:null,leftExchange:0,leftPercent:0,showLoading:!1,claimAmount:0,earned:0,loadingData:{type:0},inviteAddress:c.c,isShowApprove:!1,exchangeTokenAry:[],maxValue:0,showBuy:!1,input:"",canExchanValue:0,maxBuyTimes:0,curBuyTimes:0,bounsList:[],minimum:0,maximum:0,contract:null,isClaim:!1}},computed:d({},Object(i.c)({mateMaskToken:function(t){return t.app.mateMaskToken},chainObj:function(t){return t.app.chainObj},language:function(t){return t.app.language}}),{poolStatus:function(){return this.curPool?(3===this.curPool.poolStatus?(this.leftExchange=0,console.log("leftExchange",this.leftExchange),this.leftPercent=100):(this.curPool.poolStatus||0===this.curPool.poolStatus)&&(this.leftPercent=(parseInt(this.curPool.poolTotalAmounts)-parseInt(this.leftExchange))/parseInt(this.curPool.poolTotalAmounts)*100),this.curPool.poolStatus):(this.leftExchange=0,console.log("leftExchange",this.leftExchange),this.leftPercent=100,3)}}),watch:{mateMaskToken:function(){window.location.reload()},curSelect:function(){this.input="",this.calcMax(),this.checkApprove()},input:function(t){t?(parseFloat(t)>this.maximum&&this.maximum>0&&(t=this.maximum+""),parseFloat(t)>parseFloat(this.maxValue)&&(t=this.maxValue+""),t=t.match(/^\d*(\.?\d{0,4})/g)[0]||null,this.input=t,this.canExchanValue=(parseFloat(this.input)*parseFloat(this.curSelect.real)).toFixed(4)):this.canExchanValue=0}},mounted:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(o.b)(),t.poolIndex=t.$route.params.pIdx,t.poolIndex||(t.poolIndex=0),e.next=5,t.initData();case 5:t.timewait();case 6:case"end":return e.stop()}},e,t)}))()},beforeDestroy:function(){clearInterval(this.timeId)},methods:{getTotalAndLeft:function(){var t=this.curPool&&this.curPool.poolTotalAmounts;return t||(t=0),this.$t("message.ido_33")+t+this.$t("message.ido_34")+(t-this.leftExchange)+" )"},clickShowRemain:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:return e.next=5,t.tokenPoolContract.methods.getFunAddress().call();case 5:if(a=e.sent,t.mateMaskToken.toLowerCase()==a.toLowerCase()){e.next=9;break}return t.$message.error("仅项目方可操作"),e.abrupt("return");case 9:t.showRemain=!0;case 10:case"end":return e.stop()}},e,t)}))()},clickShowBouns:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a,s,r,n,o,i,c,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:a=[],s=!0,r=!1,n=void 0,e.prev=7,o=t.exchangeTokenAry[Symbol.iterator]();case 9:if(s=(i=o.next()).done){e.next=23;break}return c=i.value,(u={}).name=c.name,e.next=15,t.tokenPoolContract.methods.getRewardAmount(t.mateMaskToken,c.tokenAddress).call();case 15:return l=e.sent,e.next=18,t.getRealNumByAddress(l,c.tokenAddress);case 18:u.value=e.sent,a.push(u);case 20:s=!0,e.next=9;break;case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(7),r=!0,n=e.t0;case 29:e.prev=29,e.prev=30,!s&&o.return&&o.return();case 32:if(e.prev=32,!r){e.next=35;break}throw n;case 35:return e.finish(32);case 36:return e.finish(29);case 37:t.bounsList=a,t.$nextTick(function(){t.showBouns=!0});case 39:case"end":return e.stop()}},e,t,[[7,25,29,37],[30,,32,36]])}))()},getPlaceholder:function(){return this.minimum&&this.maximum?parseFloat(this.minimum)==parseFloat(this.maximum)?this.minimum:this.minimum+"-"+this.maximum:"0.00"},getHarvestDesc:function(){return this.curPool?"en"===this.language?this.curPool.sReleaseTime_en:this.curPool.sReleaseTime_ch:""},getRealNumByAddress:function(t,e){var a=this;return p(regeneratorRuntime.mark(function s(){var r,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return r=new web3.eth.Contract(JSON.parse(c.t),e),s.next=3,r.methods.decimals().call();case 3:return n=s.sent,s.abrupt("return",a.$util.fromWei(t,n,2));case 5:case"end":return s.stop()}},s,a)}))()},initCopy:function(){var t=this,e=document.getElementById("copyBtn"),a=new m.a(e);a.on("success",function(){t.$message.success(t.$t("message.lang_62"))}),a.on("error",function(t){})},toApprove:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a,s,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isShowApprove){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.checkCanBuyAndApprove();case 4:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:return a=new web3.eth.Contract(JSON.parse(c.t),t.curSelect.tokenAddress),e.next=10,a.methods.allowance(t.mateMaskToken,t.curPool.tokenPoolContractAddress).call();case 10:if(s=e.sent,parseInt(s)){e.next=22;break}return e.next=14,web3.eth.getGasPrice();case 14:return r=e.sent,t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,e.next=20,a.methods.approve(t.curPool.tokenPoolContractAddress,"1000000000000000000000000000000000000000000").send({from:t.mateMaskToken,gasPrice:r},function(e,a){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=a});case 20:t.showLoading=!1,t.isShowApprove=!1;case 22:case"end":return e.stop()}},e,t)}))()},toBuyNow:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a,s,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkCanBuyAndApprove();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:if(!t.isShowApprove){e.next=8;break}return t.$message.error(t.$t("message.ido_24")),e.abrupt("return");case 8:if(t.showBuy){e.next=11;break}return t.showBuy=!0,e.abrupt("return");case 11:if(parseFloat(t.input)){e.next=13;break}return e.abrupt("return");case 13:if(!(parseFloat(t.input)<t.minimum&&t.minimum)){e.next=16;break}return t.$message.error(t.$t("message.ido_29")+t.minimum),e.abrupt("return");case 16:if(!parseInt(t.maxBuyTimes)){e.next=20;break}if(!(parseInt(t.curBuyTimes[0])>=parseInt(t.maxBuyTimes))){e.next=20;break}return t.$message.error(t.$t("message.ido_30").replace("{0}",t.maxBuyTimes)),e.abrupt("return");case 20:if(!(parseFloat(t.canExchanValue)>parseFloat(t.leftExchange))){e.next=23;break}return t.$message.error(t.$t("message.ido_31")),e.abrupt("return");case 23:return t.loadingData.type=1,t.loadingData.scan=t.chainObj[t.curPool.sChainId],t.showLoading=!0,a=new web3.eth.Contract(JSON.parse(c.t),t.curSelect.tokenAddress),e.next=29,a.methods.decimals().call();case 29:return s=e.sent,r=t.$util.toWei(t.input,s),e.next=33,t.contract.methods.buy(r).send({from:t.mateMaskToken},function(e,a){if(e)return t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=a});case 33:t.showLoading=!1,t.showBuy=!1,t.input="",t.updateLeftCount(),t.updateClaimNum(),t.calcMax();case 39:case"end":return e.stop()}},e,t)}))()},getClaim:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading=!0,e.next=3,t.contract.methods.claimRewards().send({from:t.mateMaskToken},function(t,e){});case 3:t.showLoading=!1,t.updateClaimNum();case 5:case"end":return e.stop()}},e,t)}))()},checkApprove:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.curSelect){e.next=2;break}return e.abrupt("return");case 2:if(t.mateMaskToken){e.next=4;break}return e.abrupt("return");case 4:return a=new web3.eth.Contract(JSON.parse(c.t),t.curSelect.tokenAddress),e.next=7,a.methods.allowance(t.mateMaskToken,t.curPool.tokenPoolContractAddress).call();case 7:s=e.sent,t.isShowApprove=!parseInt(s);case 9:case"end":return e.stop()}},e,t)}))()},checkCanBuyAndApprove:function(){var t=this;return p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:if(t.curPool){e.next=5;break}return e.abrupt("return",!1);case 5:if(t.leftExchange){e.next=8;break}return t.$message.error(t.$t("message.ido_25")),e.abrupt("return",!1);case 8:return e.next=10,t.getWhiteListContract();case 10:if(e.sent){e.next=13;break}return e.abrupt("return",!1);case 13:if(3!==t.curPool.poolStatus){e.next=16;break}return t.$message.error(t.$t("message.ido_27")),e.abrupt("return",!1);case 16:return e.abrupt("return",!0);case 17:case"end":return e.stop()}},e,t)}))()},getWhiteListContract:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a,s,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.contract.methods.checkWhiteListInfo().call();case 2:if((a=e.sent)[0]!==c.c){e.next=5;break}return e.abrupt("return",!0);case 5:if(!(a[1]<Date.parse(new Date)/1e3)){e.next=7;break}return e.abrupt("return",!0);case 7:return s=new web3.eth.Contract(JSON.parse(t.IdoWhiteList),a[0]),e.next=10,s.methods.isInWhiteList(t.mateMaskToken).call();case 10:return(r=e.sent)||t.$message.error(t.$t("message.ido_28")),e.abrupt("return",r);case 13:case"end":return e.stop()}},e,t)}))()},calcMax:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a,s,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.maxValue=0,e.abrupt("return");case 3:return a=new web3.eth.Contract(JSON.parse(c.t),t.curSelect.tokenAddress),e.next=6,a.methods.balanceOf(t.mateMaskToken).call();case 6:return s=e.sent,e.next=9,a.methods.decimals().call();case 9:r=e.sent,t.maxValue=t.$util.fromWei(s,r);case 11:case"end":return e.stop()}},e,t)}))()},getSummary:function(){return this.curPool?"en"===this.language?this.curPool.sSummary_en:this.curPool.sSummary_ch:""},getDescription:function(){return this.curPool?"en"===this.language?this.curPool.sDescription_en:this.curPool.sDescription_ch:""},initData:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a,s,r,n,i,u,l,m,d,p,h,v,f,g,_,x,k,b,C,P,w,S,A,y,T,I,$,R,B,L,N,D,F,E,O;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$util.getChainKey(),e.next=3,t.$api.GetSystemConfig({sAppId:a,sKey1:"IDO"});case 3:if(s=e.sent,(r=s.vList)&&r.length){e.next=8;break}return t.$message.error(t.$t("message.bridge_35")),e.abrupt("return");case 8:for(n=!0,i=!1,u=void 0,e.prev=11,l=r[Symbol.iterator]();!(n=(m=l.next()).done);n=!0)"IdoPoolFactoryAbi"===(d=m.value).sKey2&&(t.poolAbi=d.sValue),"IdoPoolFactoryAddress"===d.sKey2&&(t.poolAddress=d.sValue),"IdoTokenPoolAbi"===d.sKey2&&(t.tokenPoolAbi=d.sValue),"IdoWhiteList"===d.sKey2&&(t.IdoWhiteList=d.sValue),"IdoPoolFactoryAddress_V2"===d.sKey2&&(t.poolAddress2=d.sValue),"IdoPoolFactoryAbi_V3"===d.sKey2&&(t.poolAbi3=d.sValue),"IdoPoolAddressList"===d.sKey2&&(t.poolAddress3=d.sValue.split(","));e.next=19;break;case 15:e.prev=15,e.t0=e.catch(11),i=!0,u=e.t0;case 19:e.prev=19,e.prev=20,!n&&l.return&&l.return();case 22:if(e.prev=22,!i){e.next=25;break}throw u;case 25:return e.finish(22);case 26:return e.finish(19);case 27:return e.next=29,t.$api.GetSystemConfig({sAppId:a,sKey1:"IDOData"});case 29:return p=e.sent,h=p.vList,Object(o.b)(),v=null,f=parseInt(t.poolIndex.split(",")[0]),t.contract=new web3.eth.Contract(JSON.parse(t.poolAbi3),t.poolIndex.split(",")[1]),e.next=37,t.contract.methods.getPoolInfo().call();case 37:return v=e.sent,g=f,_=null,h.forEach(function(t){parseInt(t.sKey2.split(",")[0])===g&&(_=t)}),x=JSON.parse(_.sValue),k={tokenContractAddress:v[0],poolStartTime:v[3],poolEndTime:v[4],poolTotalAmounts:v[5],tokenPoolContractAddress:_.sKey2.split(",")[1]},b=Object.assign(x,k),e.next=46,t.getAmount(b);case 46:if(b.poolTotalAmounts=e.sent,b.sDescription_en=b.sDescription_en.replace(/<br>/g,"\n"),b.sDescription_ch=b.sDescription_ch.replace(/<br>/g,"\n"),t.curPool=b,!t.curPool.URL){e.next=66;break}e.t1=regeneratorRuntime.keys(t.curPool.URL);case 52:if((e.t2=e.t1()).done){e.next=66;break}C=e.t2.value,P=t.curPool.URL[C],w=0;case 56:if(!(w<t.curPool.IconURL.length)){e.next=64;break}if(S=t.curPool.IconURL[w],P!==S.url){e.next=61;break}return S.name=C,e.abrupt("break",64);case 61:w++,e.next=56;break;case 64:e.next=52;break;case 66:return t.tokenPoolContract=v,t.updateLeftCount(),A={},y=v[2],T=new web3.eth.Contract(JSON.parse(c.t),v[1]),I=new web3.eth.Contract(JSON.parse(c.t),v[0]),e.next=74,I.methods.decimals().call();case 74:return $=e.sent,R=new web3.eth.Contract(JSON.parse(c.t),v[1]),e.next=78,R.methods.symbol().call();case 78:return B=e.sent,e.next=81,I.methods.symbol().call();case 81:return L=e.sent,e.next=84,T.methods.decimals().call();case 84:return N=e.sent,e.next=87,t.contract.methods.getSoftCap().call();case 87:return D=e.sent,D=t.$util.fromWei(D,N),F=parseInt(b.sDecimals)||6,E=t.$util.fromWei(y,$,F),A.tokenPoolName=L,A.name=B,A.realPrice=parseFloat((1/parseFloat(E)).toFixed(F)),A.realPrice=t.$util.fromE(A.realPrice),A.priceStr="1 "+B+" = "+E+" "+L,A.tokenAddress=v[1],A.real=E,A.softCap=D,t.curSelect=A,t.curPool.softCap=D,t.curPool.tokenPoolName=L,e.next=104,t.contract.methods.checkTxnLimit().call();case 104:return O=e.sent,e.next=107,t.getRealNumByAddress(O[1],v[1]);case 107:return t.minimum=e.sent,e.next=110,t.getRealNumByAddress(O[2],v[1]);case 110:return t.maximum=e.sent,t.maxBuyTimes=O[0],e.next=114,t.contract.methods.getBuyRecord(t.mateMaskToken).call();case 114:t.curBuyTimes=e.sent,t.updateClaimNum();case 116:case"end":return e.stop()}},e,t,[[11,15,19,27],[20,,22,26]])}))()},updateClaimNum:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.mateMaskToken){e.next=14;break}return e.next=3,t.contract.methods.getBuyRecord(t.mateMaskToken).call();case 3:return(a=e.sent)[2]-a[3]>0&&(t.isClaim=!0),e.next=7,t.getRealNumByAddress(a[2],t.curPool.tokenContractAddress);case 7:return t.claimAmount=e.sent,e.next=10,t.contract.methods.earned(t.mateMaskToken).call();case 10:return s=e.sent,e.next=13,t.getRealNumByAddress(s,t.curPool.tokenContractAddress);case 13:t.earned=e.sent;case 14:case"end":return e.stop()}},e,t)}))()},updateLeftCount:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=new web3.eth.Contract(JSON.parse(c.t),t.curPool.tokenContractAddress),"0x57076E5D74088eBEDf5c04D75306d04A5e85d188"!==t.poolIndex){e.next=5;break}t.leftExchange=0,e.next=12;break;case 5:return e.next=7,a.methods.decimals().call();case 7:return s=e.sent,e.next=10,t.contract.methods.getTotalSupply().call();case 10:t.leftExchange=e.sent,t.leftExchange=t.$util.fromWei(t.leftExchange,s,2);case 12:case"end":return e.stop()}},e,t)}))()},getChain:function(t){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[t]?this.chainObj[t]:{}},getAmount:function(t){var e=this;return p(regeneratorRuntime.mark(function a(){var s,r,n;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s=0,r=new web3.eth.Contract(JSON.parse(c.t),t.tokenContractAddress),a.next=4,r.methods.decimals().call();case 4:return n=a.sent,s=e.$util.fromWei(t.poolTotalAmounts,n,2),a.abrupt("return",s);case 7:case"end":return a.stop()}},a,e)}))()},timewait:function(){var t=this;clearInterval(this.timeId),this.timeId=setInterval(function(){if(t.curPool){var e=(new Date).getTime()/1e3,a=parseInt(t.curPool.poolStartTime),s=parseInt(t.curPool.poolEndTime),r=0,n=0,o=0,i=0,c=2;if(e<a){var u=a-e;r=parseInt(u/3600/24),n=parseInt(24*(parseFloat(u/3600/24)-parseInt(u/3600/24))),o=parseInt(60*(parseFloat(u/3600)-parseInt(u/3600))),i=parseInt(60*(parseFloat(60*(parseFloat(u/3600)-parseInt(u/3600)))-parseInt(60*(parseFloat(u/3600)-parseInt(u/3600))))),c=1}else if(e>s)clearInterval(t.timeId),c=3;else{var l=s-e;r=parseInt(l/3600/24),n=parseInt(24*(parseFloat(l/3600/24)-parseInt(l/3600/24))),o=parseInt(60*(parseFloat(l/3600)-parseInt(l/3600))),i=parseInt(60*(parseFloat(60*(parseFloat(l/3600)-parseInt(l/3600)))-parseInt(60*(parseFloat(l/3600)-parseInt(l/3600))))),c=2}r=(r+100).toString().substring(1),n=(n+100).toString().substring(1),o=(o+100).toString().substring(1),i=(i+100).toString().substring(1),t.$set(t.curPool,"poolStatus",c),t.$set(t.curPool,"day",r),t.$set(t.curPool,"hours",n),t.$set(t.curPool,"minutes",o),t.$set(t.curPool,"seconds",i)}},1e3)},toUrl:function(t){t&&window.open(t)},toWhiteList:function(t){localStorage.setItem("ido-whitelist",t.WhiteLists),this.$router.push("/ido-whitelist")},getTimeDateStr:function(t){var e=0;if(!this.curPool)return"";e="start"===t?this.curPool.poolStartTime:this.curPool.poolEndTime,e=1e3*parseInt(e);var a=new Date(e);return a.getUTCFullYear()+"."+(a.getUTCMonth()+101).toString().substring(1)+"."+(a.getUTCDate()+100).toString().substring(1)},getTimeStr:function(t){var e=0;if(!this.curPool)return"";e="start"===t?this.curPool.poolStartTime:this.curPool.poolEndTime,e=1e3*parseInt(e);var a=new Date(e);return(a.getUTCHours()+100).toString().substring(1)+":"+(a.getUTCMinutes()+100).toString().substring(1)},getStatusSign:function(t){switch(t){case 1:return this.$t("message.ido_3");case 2:return this.$t("message.ido_32");case 3:return this.$t("message.ido_4")}},getBuyRecordByIndex:function(){var t=this;return p(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return",!1);case 3:return e.next=5,t.tokenPoolContract.methods.getBuyRecord(t.mateMaskToken).call();case 5:if(a=e.sent,parseFloat(a)){e.next=9;break}return t.$message.error("未购买或已领取"),e.abrupt("return");case 9:return e.next=11,t.getRealNumByAddress(a,t.curPool.tokenContractAddress);case 11:t.claimAmount=e.sent,t.claimAmount=t.claimAmount.toString(),t.showClaim=!0;case 14:case"end":return e.stop()}},e,t)}))()}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"white-bg"},[a("div",{staticClass:"ido-detail"},[a("div",{staticClass:"back"},[a("div",{staticClass:"back-container",on:{click:function(e){return t.$router.back()}}},[a("span",[t._v("< "+t._s(t.$t("message.notice_22")))])])]),t._v(" "),a("div",{staticClass:"ido-container"},[a("div",{staticClass:"ido-container-left"},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-top"},[a("div",[a("img",{staticClass:"ido-logo",attrs:{src:t.curPool&&t.curPool.sLogoUrl,alt:""}}),t._v(" "),a("span",{staticClass:"ido-name"},[t._v(t._s(t.curPool&&t.curPool.sName))])]),t._v(" "),t.curPool&&t.curPool.WhiteLists?a("div",{staticClass:"whitelist-btn",on:{click:function(e){return t.toWhiteList(t.curPool)}}},[t._v("\n              "+t._s(t.$t("message.ido_40"))+"\n            ")]):t._e()]),t._v(" "),a("div",{staticClass:"ido-desc line4hidden"},[t._v(t._s(t.getSummary()))])]),t._v(" "),t.curPool&&t.curPool.URL?a("div",{staticClass:"ido-links"},t._l(t.curPool.IconURL,function(e,s){return a("div",{key:s,staticClass:"ido-link-item",on:{click:function(a){return t.toUrl(e.url)}}},[a("el-tooltip",{attrs:{effect:"dark",content:e.name,placement:"bottom"}},[a("img",{attrs:{src:e.icon,alt:""}})])],1)}),0):t._e(),t._v(" "),a("div",{staticClass:"cap"},[t.curPool&&t.curPool.softCap?a("div",{staticClass:"soft-cap"},[a("div",{staticClass:"cap-title"},[t._v(t._s(t.$t("message.v3_ido_1")))]),t._v(" "),a("div",{staticClass:"cap-value"},[t._v("\n              $"+t._s(t._f("filterThousands")(t.curPool&&(t.curPool.softCap*t.curSelect.realPrice).toFixed(2)))+"\n               | \n              "+t._s(t._f("filterThousands")(t.curPool&&t.curPool.softCap))+"\n              "+t._s(t.curPool&&t.curPool.tokenPoolName)+"\n            ")])]):t._e(),t._v(" "),a("div",{staticClass:"hart-cap"},[a("div",{staticClass:"cap-title"},[t._v(t._s(t.$t("message.v3_ido_2")))]),t._v(" "),a("div",{staticClass:"cap-value"},[t._v("\n              $"+t._s(t._f("filterThousands")(t.curPool&&(t.curPool.poolTotalAmounts/t.curSelect.real).toFixed(2)))+"\n               | \n              "+t._s(t._f("filterThousands")(t.curPool&&t.curPool.poolTotalAmounts))+"\n              "+t._s(t.curPool&&t.curPool.tokenPoolName)+"\n            ")])])]),t._v(" "),t.curSelect?a("div",{staticClass:"supported-coin"},[a("div",{staticClass:"coin-title"},[t._v(t._s(t.$t("message.ido_7")))]),t._v(" "),a("div",{staticClass:"unit"},[t._v(t._s(t.curSelect.name))]),t._v(" "),a("div",{staticClass:"exchange-rate"},[a("span",[t._v(t._s(t.curSelect&&t.curSelect.priceStr))]),t._v(" "),a("span",[t._v("1 "+t._s(t.curPool&&t.curPool.tokenPoolName)+" =\n              "+t._s(t.curSelect.realPrice)+" "+t._s(t.curSelect.name))])])]):t._e(),t._v(" "),a("div",{staticClass:"harvestDesc"},[t._v(t._s(t.getHarvestDesc()))]),t._v(" "),a("div",{staticClass:"html-desc",domProps:{innerHTML:t._s(t.getDescription())}}),t._v(" "),t.curPool&&t.curPool.sImgUrl?a("img",{staticClass:"html-img",attrs:{src:t.curPool&&t.curPool.sImgUrl,alt:""}}):t._e()]),t._v(" "),a("div",{staticClass:"ido-container-right"},[a("div",{staticClass:"left"},[a("img",{staticClass:"logo",attrs:{src:t.curPool&&t.curPool.sLogoUrl,alt:""}}),t._v(" "),a("div",[a("p",{staticClass:"ido-name"},[t._v(t._s(t.curPool&&t.curPool.sName))]),t._v(" "),a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.poolStatus,expression:"poolStatus == 1"}],staticClass:"status-info status-info2"},[a("i",{staticClass:"iconfont icon-naozhong1"}),t._v(" "),a("span",[t._v(t._s(t.getStatusSign(t.curPool&&t.curPool.poolStatus)))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.poolStatus,expression:"poolStatus == 2"}],staticClass:"status-info status-info1"},[a("i",{staticClass:"iconfont icon-huo"}),t._v(" "),a("span",[t._v(t._s(t.getStatusSign(t.curPool&&t.curPool.poolStatus)))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==t.poolStatus,expression:"poolStatus == 3"}],staticClass:"status-info status-info3"},[a("i",{staticClass:"iconfont"}),t._v(" "),a("span",[t._v(t._s(t.getStatusSign(t.curPool&&t.curPool.poolStatus)))])]),t._v(" "),a("div",{staticClass:"chain-info"},[a("img",{attrs:{src:t.getChain(t.curPool&&t.curPool.sChainId).icon,alt:""}}),t._v(" "),a("div",{staticClass:"chain-name"},[t._v("\n                  "+t._s(t.getChain(t.curPool&&t.curPool.sChainId).name)+"\n                ")])])])])]),t._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"top-div"},[a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color3"},[a("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.v3_ido_12")))]),t._v(" "),a("div",{staticClass:"amount-value"},[a("div",{staticClass:"start-time time"},[a("div",{class:{perch:!0,"perch-end":2===t.poolStatus||3===t.poolStatus}},[a("div",{staticClass:"perch-center"})]),t._v("\n                    "+t._s(t.getTimeDateStr("start"))+"\n                    "+t._s(t.getTimeStr("start"))+" UTC\n                  ")]),t._v(" "),a("div",{staticClass:"end-time time"},[a("div",{class:{perch:!0,"perch-end":3===t.poolStatus}},[a("div",{staticClass:"perch-line"}),t._v(" "),a("div",{staticClass:"perch-center"})]),t._v("\n                    "+t._s(t.getTimeDateStr("end"))+"\n                    "+t._s(t.getTimeStr("end"))+" UTC\n                  ")])])])]),t._v(" "),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color3"},[a("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_11")))]),t._v(" "),a("div",{staticClass:"amount-value"},[a("div",{staticClass:"progress-desc"},[a("span",[t._v("\n                      "+t._s(t._f("filterThousands")(t.curPool&&(3===t.poolStatus?t.curPool.poolTotalAmounts:t.curPool.poolTotalAmounts-t.leftExchange)))+"\n                      "+t._s(t.curPool&&t.curPool.tokenPoolName))]),t._v(" "),a("span",[t._v(t._s(t._f("filterThousands")(t.curPool&&t.curPool.poolTotalAmounts))+"\n                      "+t._s(t.curPool&&t.curPool.tokenPoolName))])]),t._v(" "),a("div",{class:"progress-plan progress-status"+t.poolStatus},[a("el-progress",{attrs:{"show-text":!1,"stroke-width":12,color:2===t.poolStatus?"#5CBB4E":1===t.poolStatus?"#ECEEFF":"#5CBB4E",percentage:2===t.poolStatus?t.leftPercent:100,status:"success"}}),t._v(" "),a("p",{staticClass:"ido-time"},[2===t.poolStatus||1===t.poolStatus?a("span",[t._v(t._s(t.curPool.day)+t._s(t.$t("message.ido_20"))+"\n                        "+t._s(t.curPool.hours)+":"+t._s(t.curPool.minutes)+":"+t._s(t.curPool.seconds))]):a("span",[t._v("-")])])],1)])])]),t._v(" "),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color3"},[a("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.ido_16")))]),t._v(" "),a("div",{staticClass:"amount-value"},[t._v("\n                  "+t._s(0==t.claimAmount?"-":t.claimAmount)+"\n                  "+t._s(0==t.claimAmount?"":t.curPool&&t.curPool.tokenPoolName)+"\n                ")])])]),t._v(" "),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color3"},[a("div",{staticClass:"amount-title"},[t._v(t._s(t.$t("message.v3_ido_4")))]),t._v(" "),a("div",{staticClass:"amount-value"},[t._v("\n                  "+t._s(0==t.earned?"-":t.earned)+"\n                  "+t._s(0==t.earned?"":t.curPool&&t.curPool.tokenPoolName)+"\n                ")])])]),t._v(" "),a("div",{staticClass:"ido-btn"},[1===t.poolStatus?a("div",[t.isShowApprove?a("div",{staticClass:"withdraw-Approve disabled btn"},[a("el-tooltip",{attrs:{effect:"dark",content:t.$t("message.v3_ido_6"),placement:"bottom"}},[a("span",[t._v(t._s(t.$t("message.ido_15")))])])],1):t._e()]):2===t.poolStatus?a("div",[t.isShowApprove?a("div",{staticClass:"withdraw-Approve btn",on:{click:t.toApprove}},[t._v("\n                  "+t._s(t.$t("message.ido_14"))+"\n                ")]):!t.isShowApprove&&(t.curBuyTimes[0]<t.maxBuyTimes||0==t.maxBuyTimes)?a("div",{staticClass:"withdraw-Deposit btn",on:{click:t.toBuyNow}},[t._v("\n                  "+t._s(t.$t("message.ido_15"))+"\n                ")]):t.earned&&0!==t.earned?t.isClaim&&t.earned&&0!=t.earned?a("div",{staticClass:"withdraw-Claim btn",on:{click:t.getClaim}},[t._v("\n                  "+t._s(t.$t("message.v3_ido_5"))+"\n                ")]):t._e():a("el-tooltip",{attrs:{effect:"dark",content:t.$t("message.v3_ido_7"),placement:"bottom"}},[t.earned&&0!==t.earned?t._e():a("div",{staticClass:"withdraw-Claim disabled btn"},[a("span",[t._v(t._s(t.$t("message.v3_ido_5")))])])])],1):3===t.poolStatus?a("div",[t.isClaim&&0!=t.earned?a("div",{staticClass:"withdraw-Claim btn",on:{click:t.getClaim}},[t._v("\n                  "+t._s(t.$t("message.v3_ido_5"))+"\n                ")]):t.isClaim&&0==t.earned?a("div",{staticClass:"withdraw-Claim btn disabled"},[t._v("\n                  "+t._s(t.$t("message.v3_ido_5"))+"\n                ")]):t.earned&&0!=t.earned?t._e():a("div",{staticClass:"withdraw-Claim disabled btn"},[t._v("\n                  "+t._s(t.$t("message.v3_ido_8"))+"\n                ")])]):t._e()])])])])]),t._v(" "),a("loading-pop",{attrs:{dataInfo:t.loadingData},model:{value:t.showLoading,callback:function(e){t.showLoading=e},expression:"showLoading"}}),t._v(" "),a("el-dialog",{attrs:{title:t.$t("message.v3_ido_9"),visible:t.showBuy,width:"563px","show-close":!1,center:""},on:{"update:visible":function(e){t.showBuy=e}}},[a("div",[a("div",{staticClass:"input-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{placeholder:t.getPlaceholder(),type:"text"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._v("\n          |\n          "),a("span",{staticClass:"max-button",on:{click:function(e){t.input=t.maxValue+""}}},[t._v(t._s(t.$t("message.ido_19")))])]),t._v(" "),a("p",{staticClass:"balance"},[t._v("\n          "+t._s(t.$t("message.ido_13"))+": "+t._s(t._f("filterThousands")(t.maxValue))+"\n          "+t._s(t.curSelect&&t.curSelect.name)+"\n        ")])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"btn cancel",on:{click:function(e){t.showBuy=!1}}},[t._v(t._s(t.$t("message.assets_lang_11")))]),t._v(" "),a("el-button",{staticClass:"btn confirm",on:{click:t.toBuyNow}},[t._v(t._s(t.$t("message.v3_ido_13")))])],1)])],1)])},staticRenderFns:[]};var f=a("C7Lr")(h,v,!1,function(t){a("YihB"),a("+OJF")},"data-v-5ff0cc26",null);e.default=f.exports}});