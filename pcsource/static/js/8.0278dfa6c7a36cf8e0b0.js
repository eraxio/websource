webpackJsonp([8],{FfRZ:function(e,t){},bbBE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("ytf2"),n=a("NYxO"),s=a("Tnm7"),o=a("bu39"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function c(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function r(n,s){try{var o=t[n](s),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}var u={components:{LoadingPop:o.a},data:function(){return{curSelect:{},selectAmountShow:!1,showRemain:!1,showBouns:!1,showClaim:!1,curPool:null,poolIndex:0,list:[],poolAbi:"",poolAbi3:"",tokenPoolAbi:"",IdoWhiteList:"",poolAddress:"",poolAddress2:"",poolAddress3:"",timeId:null,tokenPoolContract:null,leftExchange:0,leftPercent:0,showLoading:!1,claimAmount:0,earned:0,loadingData:{type:0},inviteAddress:s.a,isShowApprove:!1,exchangeTokenAry:[],maxValue:0,showBuy:!1,input:"",canExchanValue:0,maxBuyTimes:0,curBuyTimes:0,bounsList:[],minimum:0,maximum:0,contract:null,isClaim:!1,chainId:null,loading:null,changeToken:!1}},computed:i({},Object(n.b)({mateMaskToken:function(e){return e.app.mateMaskToken},chainObj:function(e){return e.app.chainObj},language:function(e){return e.app.language}}),{poolStatus:function(){return this.curPool?(3===this.curPool.poolStatus?(this.leftExchange=0,this.leftPercent=100,this.getDetail()):1===this.curPool.poolStatus?(this.leftExchange=this.curPool.hardCap,this.leftPercent=100):(this.curPool.poolStatus||0===this.curPool.poolStatus)&&(this.getDetail(),this.leftPercent=(parseInt(this.curPool.hardCap)-parseInt(this.leftExchange))/parseInt(this.curPool.hardCap)*100),this.curPool.poolStatus):(this.leftExchange=0,this.leftPercent=100,3)},isCurPoolChain:function(){return!(!this.curPool||!this.chainId)&&this.chainId===this.curPool.chainId},isToBuy:function(){return parseFloat(this.input)>parseFloat(this.maxValue)||parseFloat(this.input)>parseFloat(this.maximum)||0==parseFloat(this.input)}}),watch:{mateMaskToken:function(){this.changeToken&&window.location.reload()},curSelect:function(){this.calcMax(),this.checkApprove()},input:function(e){e=e||"0",this.canExchanValue=(parseFloat(this.input)*parseFloat(this.curSelect.real)).toFixed(4)}},mounted:function(){var e=this;return c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.poolIndex=window.localStorage.getItem("ido_id"),e.poolIndex||(e.poolIndex=0),t.next=4,e.getChainId();case 4:return t.next=6,e.initData();case 6:e.timewait(),e.changeToken=!0,window.toBuy=e.testToBuy;case 9:case"end":return t.stop()}},t,e)}))()},beforeDestroy:function(){clearInterval(this.timeId)},methods:{getChainId:function(){var e=this;return c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ethereum.request({method:"eth_chainId"});case 2:e.chainId=t.sent;case 3:case"end":return t.stop()}},t,e)}))()},watchChangeInput:function(){this.input?(parseFloat(this.input)>parseFloat(this.maximum)&&this.maximum>0&&(this.input=this.maximum+""),parseFloat(this.input)>parseFloat(this.maxValue)&&(this.input=this.maxValue+""),this.input=this.input.match(/^\d*(\.?\d{0,4})/g)[0]||null):this.canExchanValue=0},getTotalAndLeft:function(){var e=this.curPool&&this.curPool.hardCap;return e||(e=0),this.$t("message.ido_33")+e+this.$t("message.ido_34")+(e-this.leftExchange)+" )"},clickShowRemain:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.$util.toConnect(),t.abrupt("return",!1);case 3:return t.next=5,e.tokenPoolContract.methods.getFunAddress().call();case 5:if(a=t.sent,e.mateMaskToken.toLowerCase()==a.toLowerCase()){t.next=9;break}return e.$message.error("仅项目方可操作"),t.abrupt("return");case 9:e.showRemain=!0;case 10:case"end":return t.stop()}},t,e)}))()},clickShowBouns:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,r,n,s,o,i,c,u,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.$util.toConnect(),t.abrupt("return",!1);case 3:a=[],r=!0,n=!1,s=void 0,t.prev=7,o=e.exchangeTokenAry[Symbol.iterator]();case 9:if(r=(i=o.next()).done){t.next=23;break}return c=i.value,(u={}).name=c.name,t.next=15,e.tokenPoolContract.methods.getRewardAmount(e.mateMaskToken,c.tokenAddress).call();case 15:return l=t.sent,t.next=18,e.getRealNumByAddress(l,c.tokenAddress);case 18:u.value=t.sent,a.push(u);case 20:r=!0,t.next=9;break;case 23:t.next=29;break;case 25:t.prev=25,t.t0=t.catch(7),n=!0,s=t.t0;case 29:t.prev=29,t.prev=30,!r&&o.return&&o.return();case 32:if(t.prev=32,!n){t.next=35;break}throw s;case 35:return t.finish(32);case 36:return t.finish(29);case 37:e.bounsList=a,e.$nextTick(function(){e.showBouns=!0});case 39:case"end":return t.stop()}},t,e,[[7,25,29,37],[30,,32,36]])}))()},getPlaceholder:function(){return this.minimum&&this.maximum?parseFloat(this.minimum)==parseFloat(this.maximum)?this.minimum:this.minimum+"-"+this.maximum+" "+this.curPool.exchangeTokenName:"0.00"},getHarvestDesc:function(){return this.curPool?"en"===this.language?this.curPool.sReleaseTime_en:this.curPool.sReleaseTime_ch:""},getRealNumByAddress:function(e,t){var a=this;return c(regeneratorRuntime.mark(function r(){var n,o;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=new web3.eth.Contract(JSON.parse(s.d),t),r.next=3,n.methods.decimals().call();case 3:return o=r.sent,r.abrupt("return",a.$util.fromWei(e,o,2));case 5:case"end":return r.stop()}},r,a)}))()},toApprove:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isCurPoolChain){t.next=3;break}return e.$message.error(""+e.$t("message.err_01")+e.chainObj[e.curPool.chainId].name+e.$t("message.err_02")),t.abrupt("return");case 3:if(e.isShowApprove){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,e.checkCanBuyAndApprove();case 7:if(t.sent){t.next=10;break}return t.abrupt("return");case 10:return a=new web3.eth.Contract(JSON.parse(s.d),e.curPool.transactionCurrencyAddress),t.next=14,a.methods.allowance(e.mateMaskToken,e.curPool.contractPoolAddress).call();case 14:if(r=t.sent,parseInt(r)){t.next=26;break}return t.next=18,web3.eth.getGasPrice();case 18:return n=t.sent,e.loadingData.type=1,e.loadingData.scan=e.chainObj[e.curPool.chainId],e.showLoading=!0,t.next=24,a.methods.approve(e.curPool.contractPoolAddress,"1000000000000000000000000000000000000000000").send({from:e.mateMaskToken,gasPrice:n},function(t,a){if(t)return e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=a});case 24:e.showLoading=!1,e.isShowApprove=!1;case 26:case"end":return t.stop()}},t,e)}))()},toBuyNow:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,r,n,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isCurPoolChain){t.next=3;break}return e.$message.error(""+e.$t("message.err_01")+e.chainObj[e.curPool.chainId].name+e.$t("message.err_02")),t.abrupt("return");case 3:return t.next=5,e.checkCanBuyAndApprove();case 5:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:if(a=!0,e.curPool.transactionCurrencyAddress===s.a&&(a=!1),!e.isShowApprove||!a){t.next=14;break}return e.$message.error(e.$t("message.ido_24")),t.abrupt("return");case 14:if(e.showBuy){t.next=17;break}return e.showBuy=!0,t.abrupt("return");case 17:if(parseFloat(e.input)){t.next=19;break}return t.abrupt("return");case 19:if(!(parseFloat(e.input)<e.minimum&&e.minimum)){t.next=22;break}return e.$message.error(e.$t("message.ido_29")+e.minimum),t.abrupt("return");case 22:if(!parseInt(e.maxBuyTimes)){t.next=26;break}if(!(parseInt(e.curBuyTimes[0])>=parseInt(e.maxBuyTimes))){t.next=26;break}return e.$message.error(e.$t("message.ido_30").replace("{0}",e.maxBuyTimes)),t.abrupt("return");case 26:if(!(parseFloat(e.canExchanValue)>parseFloat(e.leftExchange))){t.next=29;break}return e.$message.error(e.$t("message.ido_31")),t.abrupt("return");case 29:if(e.loadingData.type=1,e.loadingData.scan=e.chainObj[e.curPool.chainId],e.showLoading=!0,r=new web3.eth.Contract(JSON.parse(s.d),e.curPool.transactionCurrencyAddress),e.curPool.transactionCurrencyAddress!==s.a){t.next=39;break}return n=web3.utils.toWei(e.input),t.next=37,e.contract.methods.purchase(n).send({from:e.mateMaskToken,value:n},function(t,a){if(t)return e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=a});case 37:t.next=45;break;case 39:return t.next=41,r.methods.decimals().call();case 41:return o=t.sent,i=e.$util.toWei(e.input,o),t.next=45,e.contract.methods.purchase(i).send({from:e.mateMaskToken},function(t,a){if(t)return e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=a});case 45:e.showLoading=!1,e.showBuy=!1,e.input="",e.updateLeftCount(),e.updateClaimNum(),e.calcMax();case 51:case"end":return t.stop()}},t,e)}))()},getClaim:function(){var e=this;return c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isCurPoolChain){t.next=3;break}return e.$message.error(""+e.$t("message.err_01")+e.chainObj[e.curPool.chainId].name+e.$t("message.err_02")),t.abrupt("return");case 3:return e.showLoading=!0,t.next=6,e.contract.methods.claimRewards().send({from:e.mateMaskToken},function(e,t){});case 6:e.showLoading=!1,e.updateClaimNum();case 8:case"end":return t.stop()}},t,e)}))()},checkApprove:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=2;break}return t.abrupt("return");case 2:if(e.curPool.transactionCurrencyAddress!==s.a){t.next=5;break}return e.isShowApprove=!1,t.abrupt("return");case 5:return a=new web3.eth.Contract(JSON.parse(s.d),e.curPool.transactionCurrencyAddress),t.next=8,a.methods.allowance(e.mateMaskToken,e.curPool.contractPoolAddress).call();case 8:r=t.sent,e.isShowApprove=!parseInt(r);case 10:case"end":return t.stop()}},t,e)}))()},checkCanBuyAndApprove:function(){var e=this;return c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.$util.toConnect(),t.abrupt("return",!1);case 3:if(e.curPool){t.next=5;break}return t.abrupt("return",!1);case 5:if(e.leftExchange){t.next=8;break}return e.$message.error(e.$t("message.ido_25")),t.abrupt("return",!1);case 8:return t.next=10,e.getWhiteListContract();case 10:if(t.sent){t.next=13;break}return t.abrupt("return",!1);case 13:if(3!==e.curPool.poolStatus){t.next=16;break}return e.$message.error(e.$t("message.ido_27")),t.abrupt("return",!1);case 16:return t.abrupt("return",!0);case 17:case"end":return t.stop()}},t,e)}))()},getWhiteListContract:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.contract.methods.checkWhiteListInfo().call();case 2:if((a=t.sent)[0]!==s.a){t.next=5;break}return t.abrupt("return",!0);case 5:if(!(a[1]<Date.parse(new Date)/1e3)){t.next=7;break}return t.abrupt("return",!0);case 7:return r=new web3.eth.Contract(JSON.parse(e.IdoWhiteList),a[0]),t.next=10,r.methods.isInWhiteList(e.mateMaskToken).call();case 10:return(n=t.sent)||e.$message.error(e.$t("message.ido_28")),t.abrupt("return",n);case 13:case"end":return t.stop()}},t,e)}))()},calcMax:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,r,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.maxValue=0,t.abrupt("return");case 3:if(e.curPool.transactionCurrencyAddress!==s.a){t.next=9;break}return t.next=6,web3.eth.getBalance(e.mateMaskToken);case 6:return a=t.sent,e.maxValue=e.$util.fromWei(a,18,5),t.abrupt("return");case 9:return r=new web3.eth.Contract(JSON.parse(s.d),e.curPool.transactionCurrencyAddress),t.next=12,r.methods.balanceOf(e.mateMaskToken).call();case 12:return n=t.sent,t.next=15,r.methods.decimals().call();case 15:o=t.sent,e.maxValue=e.$util.fromWei(n,o);case 17:case"end":return t.stop()}},t,e)}))()},getSummary:function(){return this.curPool?"en"===this.language?this.curPool.summaryEn:this.curPool.summaryCh:""},getDescription:function(){return this.curPool?"en"===this.language?this.curPool.sDescription_en:this.curPool.sDescription_ch:""},initData:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.getEraxConfig({confType:"IDO",key1:"pool_factory_abi"});case 2:return a=t.sent,e.poolAbi3=a[0].stringValue.split("\\").join(""),t.next=6,e.$axios.post("erax-api/api/v1/public/launchpadInfo/"+e.poolIndex);case 6:return r=t.sent,e.curPool=r,e.minimum=parseFloat(e.curPool.minLimit),e.maximum=parseFloat(e.curPool.maxLimit),e.curPool.stairPrice=!!e.curPool.stairPrice&&e.curPool.stairPrice.split(","),e.curPool.URL=e.getLinks(r),t.next=14,e.$api.getEraxConfig({confType:"IDO",key1:"white_list_abi"});case 14:n=t.sent,e.IdoWhiteList=n[0].stringValue.split("\\").join("");case 16:case"end":return t.stop()}},t,e)}))()},getLeftExchangeV3:function(e){var t=this;return c(regeneratorRuntime.mark(function a(){var r,n;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.contract=new web3.eth.Contract(JSON.parse(t.poolAbi3),e.contractPoolAddress),r=new web3.eth.Contract(JSON.parse(s.d),e.tokenAddress),a.next=4,r.methods.decimals().call();case 4:return n=a.sent,a.next=7,t.contract.methods.getTotalSupply().call();case 7:return e.leftExchange=a.sent,e.leftExchange=t.$util.fromWei(e.leftExchange,n),a.abrupt("return",e.leftExchange);case 10:case"end":return a.stop()}},a,t)}))()},getDetail:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,n,o,i,c,u,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isCurPoolChain){t.next=4;break}return e.leftExchange=e.curPool.hardCap,e.leftPercent=0,t.abrupt("return");case 4:return Object(r.a)(),t.next=7,e.getLeftExchangeV3(e.curPool);case 7:return e.leftExchange=t.sent,e.leftPercent=(parseInt(e.curPool.hardCap)-parseInt(e.leftExchange))/parseInt(e.curPool.hardCap)*100,t.next=11,e.contract.methods.getPoolInfo().call();case 11:return a=t.sent,e.curPool.transactionCurrencyAddress=a[1],n=new web3.eth.Contract(JSON.parse(s.d),a[0]),t.next=16,n.methods.decimals().call();case 16:return o=t.sent,i=a[2],c=parseInt(e.curPool.decimals)||6,u=e.$util.fromWei(i,o,c),e.curSelect={real:u},t.next=23,e.contract.methods.checkTxnLimit().call();case 23:l=t.sent,e.maxBuyTimes=l[0],e.updateClaimNum();case 26:case"end":return t.stop()}},t,e)}))()},getLinks:function(e){var t=[];for(var a in e.website&&t.push({icon:"https://cdn.erax.io/user/20210926/7c8df6a048393cb2cbaf3b35dc134291.png",name:"Website",url:e.website}),e.whitepaper&&t.push({icon:"https://cdn.erax.io/user/20210926/dabe6ff390ffaa42ede19ec479b98e1f.png",name:"Whitepaper",url:e.whitepaper}),e){var r=null;switch(a.toLowerCase()){case"twitter":r={icon:"https://cdn.erax.io/user/20210926/a45efe3c3a229639d9b638eb2a2241d8.png",name:"Twitter",url:e[a]};break;case"telegram":r={icon:"https://cdn.erax.io/user/20210926/c1ebe8df6a490299990f781d82632e3d.png",name:"Telegram",url:e[a]};break;case"medium":r={icon:"https://cdn.erax.io/user/20210926/9571e925dd6896cad7bcef52d336030e.png",name:"Medium",url:e[a]};break;case"facebook":r={icon:"https://cdn.erax.io/user/20210930/436934a93733292c2f894149fdda8a98.png",name:"Facebook",url:e[a]};break;case"youtube":r={icon:"https://cdn.erax.io/user/20211125/204fe79b5a90647c7b2d835ceae9ebfc.png",name:"YouTube",url:e[a]};break;case"gitbook":r={icon:"https://cdn.erax.io/user/20210926/b32491eaee4caeddb040a99495c98f20.png",name:"Gitbook",url:e[a]};break;case"discord":r={icon:"https://cdn.erax.io/user/20210926/8d1f22cec0a09caa5bb7e43c309ad0f3.png",name:"Discord",url:e[a]};break;case"linkedin":r={icon:"https://cdn.erax.io/user/20211208/94a27435c3751ef1ab289e8f0eafd103.png",name:"Linkedin",url:e[a]};break;case"gethub":r={icon:"https://cdn.erax.io/user/20210926/d3f9a14b62ac88e063a27582807477b9.png",name:"Github",url:e[a]};break;case"instagram":r={icon:"https://cdn.erax.io/user/20211213/27cc7537b086e9cc3f8592b523f86226.png",name:"Instagram",url:e[a]};break;case"reddit":r={icon:"https://cdn.erax.io/user/20211217/c9f7b85f13c90d61430d75e796e31597.png",name:"Reddit",url:e[a]}}r&&t.push(r)}if(e.otherSocialInfo){var n=JSON.parse(e.otherSocialInfo);t=t.concat(n)}return t},changeInput:function(e){this.input=e,this.selectAmountShow=!1},updateClaimNum:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.mateMaskToken){t.next=17;break}return t.next=3,e.contract.methods.getBuyRecord(e.mateMaskToken).call();case 3:return(a=t.sent)[2]-a[3]>0&&(e.isClaim=!0),t.next=7,e.getRealNumByAddress(a[2],e.curPool.tokenAddress);case 7:return e.claimAmount=t.sent,t.next=10,e.contract.methods.earned(e.mateMaskToken).call();case 10:return r=t.sent,t.next=13,e.getRealNumByAddress(r,e.curPool.tokenAddress);case 13:return e.earned=t.sent,t.next=16,e.contract.methods.getBuyRecord(e.mateMaskToken).call();case 16:e.curBuyTimes=t.sent;case 17:case"end":return t.stop()}},t,e)}))()},updateLeftCount:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("更新库存了"),a=new web3.eth.Contract(JSON.parse(s.d),e.curPool.tokenAddress),t.next=4,a.methods.decimals().call();case 4:return r=t.sent,t.next=7,e.contract.methods.getTotalSupply().call();case 7:e.leftExchange=t.sent,e.leftExchange=e.$util.fromWei(e.leftExchange,r,2);case 9:case"end":return t.stop()}},t,e)}))()},getChain:function(e){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[e]?this.chainObj[e]:{}},getAmount:function(e){var t=this;return c(regeneratorRuntime.mark(function a(){var r,n,o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=0,n=new web3.eth.Contract(JSON.parse(s.d),e.contractPoolAddress),a.next=4,n.methods.decimals().call();case 4:return o=a.sent,r=t.$util.fromWei(e.hardCap,o,2),a.abrupt("return",r);case 7:case"end":return a.stop()}},a,t)}))()},timewait:function(){var e=this;clearInterval(this.timeId),this.timeId=setInterval(function(){if(e.curPool){var t=(new Date).getTime()/1e3,a=parseInt(e.curPool.startTime),r=parseInt(e.curPool.endTime),n=0,s=0,o=0,i=0,c=2;if(t<a){var u=a-t;n=parseInt(u/3600/24),s=parseInt(24*(parseFloat(u/3600/24)-parseInt(u/3600/24))),o=parseInt(60*(parseFloat(u/3600)-parseInt(u/3600))),i=parseInt(60*(parseFloat(60*(parseFloat(u/3600)-parseInt(u/3600)))-parseInt(60*(parseFloat(u/3600)-parseInt(u/3600))))),c=1}else if(t>r)clearInterval(e.timeId),c=3;else{var l=r-t;n=parseInt(l/3600/24),s=parseInt(24*(parseFloat(l/3600/24)-parseInt(l/3600/24))),o=parseInt(60*(parseFloat(l/3600)-parseInt(l/3600))),i=parseInt(60*(parseFloat(60*(parseFloat(l/3600)-parseInt(l/3600)))-parseInt(60*(parseFloat(l/3600)-parseInt(l/3600))))),c=2}n=(n+100).toString().substring(1),s=(s+100).toString().substring(1),o=(o+100).toString().substring(1),i=(i+100).toString().substring(1),e.$set(e.curPool,"poolStatus",c),e.$set(e.curPool,"day",n),e.$set(e.curPool,"hours",s),e.$set(e.curPool,"minutes",o),e.$set(e.curPool,"seconds",i)}},1e3)},toUrl:function(e){e&&window.open(e)},toWhiteList:function(e){localStorage.setItem("ido-whitelist",e.whitelists),this.$router.push("/ido-whitelist")},getTimeDateStr:function(e){var t=0;if(!this.curPool)return"";t="start"===e?this.curPool.startTime:this.curPool.endTime,t=1e3*parseInt(t);var a=new Date(t);return a.getUTCFullYear()+"."+(a.getUTCMonth()+101).toString().substring(1)+"."+(a.getUTCDate()+100).toString().substring(1)},getTimeStr:function(e){var t=0;if(!this.curPool)return"";t="start"===e?this.curPool.startTime:this.curPool.endTime,t=1e3*parseInt(t);var a=new Date(t);return(a.getUTCHours()+100).toString().substring(1)+":"+(a.getUTCMinutes()+100).toString().substring(1)},getStatusSign:function(e){switch(e){case 1:return this.$t("message.ido_3");case 2:return this.$t("message.ido_32");case 3:return this.$t("message.ido_4")}},getBuyRecordByIndex:function(){var e=this;return c(regeneratorRuntime.mark(function t(){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.mateMaskToken){t.next=3;break}return e.$util.toConnect(),t.abrupt("return",!1);case 3:return t.next=5,e.tokenPoolContract.methods.getBuyRecord(e.mateMaskToken).call();case 5:if(a=t.sent,parseFloat(a)){t.next=9;break}return e.$message.error("未购买或已领取"),t.abrupt("return");case 9:return t.next=11,e.getRealNumByAddress(a,e.curPool.contractPoolAddress);case 11:e.claimAmount=t.sent,e.claimAmount=e.claimAmount.toString(),e.showClaim=!0;case 14:case"end":return t.stop()}},t,e)}))()}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"ido-detail"},[a("div",{staticClass:"back"},[a("div",{staticClass:"back-container",on:{click:function(t){return e.$router.back()}}},[a("span",[a("i",{staticClass:"icon el-icon-arrow-left"}),e._v(" "+e._s(e.$t("message.notice_22")))])])]),e._v(" "),a("div",{staticClass:"ido-container"},[a("div",{staticClass:"ido-container-left"},[a("div",{staticClass:"item"},[a("div",{staticClass:"item-top"},[a("div",[a("img",{staticClass:"ido-logo windmill",attrs:{src:e.curPool&&e.curPool.icon,alt:""}}),e._v(" "),a("span",{staticClass:"ido-name"},[e._v(e._s(e.curPool&&e.curPool.title))])]),e._v(" "),e.curPool&&e.curPool.whitelists&&"null"!==e.curPool.whitelists?a("div",{staticClass:"whitelist-btn linear-btn",on:{click:function(t){return e.toWhiteList(e.curPool)}}},[a("div",[e._v(e._s(e.$t("message.ido_40")))])]):e._e()]),e._v(" "),a("div",{staticClass:"ido-desc line4hidden"},[e._v(e._s(e.getSummary()))])]),e._v(" "),e.curPool&&e.curPool.URL?a("div",{staticClass:"ido-links"},e._l(e.curPool.URL,function(t,r){return a("div",{key:r,staticClass:"ido-link-item",on:{click:function(a){return e.toUrl(t.url)}}},[a("el-tooltip",{attrs:{effect:"dark",content:t.name,placement:"bottom"}},[a("img",{attrs:{src:t.icon,alt:""}})])],1)}),0):e._e(),e._v(" "),a("div",{staticClass:"cap"},[a("div",{staticClass:"soft-cap item-column"},[a("div",{staticClass:"cap-title column-title"},[e._v(e._s(e.$t("message.v3_ido_1")))]),e._v(" "),a("div",{staticClass:"cap-value column-value"},[e._v("\n              "+e._s(e._f("filterThousands")(e.curPool&&e.curPool.softCap||0))+"\n              "+e._s(e.curPool&&e.curPool.tokenName)+"\n            ")])]),e._v(" "),a("div",{staticClass:"hart-cap item-column"},[a("div",{staticClass:"cap-title column-title"},[e._v(e._s(e.$t("message.v3_ido_2")))]),e._v(" "),a("div",{staticClass:"cap-value column-value"},[e._v("\n              "+e._s(e._f("filterThousands")(e.curPool&&e.curPool.hardCap||0))+"\n              "+e._s(e.curPool&&e.curPool.tokenName)+"\n            ")])])]),e._v(" "),a("div",{staticClass:"supported-coin item-column"},[a("div",{staticClass:"coin-title column-title"},[e._v(e._s(e.$t("message.ido_7")))]),e._v(" "),a("div",{staticClass:"unit"},[e._v(e._s(e.curPool&&e.curPool.exchangeTokenName))]),e._v(" "),a("div",{staticClass:"exchange-rate column-value"},[a("span",[e._v(e._s(e.curPool&&e.curPool.priceInfo))])])]),e._v(" "),e.curPool&&e.curPool.tokenAddressUrl?a("div",{staticClass:"item-column"},[a("div",{staticClass:"column-title"},[e._v(e._s(e.$t("message.ido_detail_1")))]),e._v(" "),a("div",{staticClass:"column-value token-address"},[a("a",{attrs:{href:e.curPool&&e.curPool.tokenAddressUrl,target:"_blank"}},[e._v(e._s(e.curPool&&e.curPool.tokenAddress))])])]):e._e(),e._v(" "),e.curPool&&(e.curPool.lockRulesCh||e.curPool.lockRulesEn)?a("div",{staticClass:"item-column"},[a("div",{staticClass:"column-title"},[e._v(e._s(e.$t("message.ido_detail_2")))]),e._v(" "),a("div",{staticClass:"column-value",domProps:{innerHTML:e._s("en"===e.language?e.curPool.lockRulesEn:e.curPool.lockRulesCh)}})]):e._e(),e._v(" "),e.curPool&&(e.curPool.teamInfoCh||e.curPool.teamInfoEn)?a("div",{staticClass:"item-column"},[a("div",{staticClass:"column-title"},[e._v(e._s(e.$t("message.ido_detail_4")))]),e._v(" "),a("div",{staticClass:"column-value",domProps:{innerHTML:e._s("en"===e.language?e.curPool.teamInfoEn:e.curPool.teamInfoCh)}})]):e._e(),e._v(" "),e.curPool&&(e.curPool.detailsCh||e.curPool.detailsEn)?a("div",{staticClass:"item-column"},[a("div",{staticClass:"column-title"},[e._v(e._s(e.$t("message.ido_detail_3")))]),e._v(" "),a("div",{staticClass:"column-value",domProps:{innerHTML:e._s("en"===e.language?e.curPool.detailsEn:e.curPool.detailsCh)}})]):e._e(),e._v(" "),a("div",{staticClass:"harvestDesc"},[e._v(e._s(e.getHarvestDesc()))]),e._v(" "),e.curPool&&e.curPool.sImgUrl?a("img",{staticClass:"html-img",attrs:{src:e.curPool&&e.curPool.sImgUrl,alt:""}}):e._e()]),e._v(" "),a("div",{staticClass:"ido-container-right"},[a("div",{staticClass:"left"},[a("img",{staticClass:"logo windmill",attrs:{src:e.curPool&&e.curPool.icon,alt:""}}),e._v(" "),a("div",[a("p",{staticClass:"ido-name"},[e._v(e._s(e.curPool&&e.curPool.title))]),e._v(" "),a("div",{staticClass:"ido-tags"},[1==e.poolStatus?a("div",{staticClass:"status-info status-info2"},[a("i",{staticClass:"iconfont icon-naozhong1"}),e._v(" "),a("span",[e._v(e._s(e.getStatusSign(e.curPool&&e.curPool.poolStatus)))])]):e._e(),e._v(" "),2==e.poolStatus?a("div",{staticClass:"status-info status-info1"},[a("i",{staticClass:"iconfont icon-huo"}),e._v(" "),a("span",[e._v(e._s(e.getStatusSign(e.curPool&&e.curPool.poolStatus)))])]):e._e(),e._v(" "),3==e.poolStatus?a("div",{staticClass:"status-info status-info3"},[a("i",{staticClass:"iconfont"}),e._v(" "),a("span",[e._v(e._s(e.getStatusSign(e.curPool&&e.curPool.poolStatus)))])]):e._e(),e._v(" "),a("div",{staticClass:"chain-info"},[a("img",{attrs:{src:e.getChain(e.curPool&&e.curPool.chainId).icon,alt:""}}),e._v(" "),a("div",{staticClass:"chain-name"},[e._v("\n                  "+e._s(e.getChain(e.curPool&&e.curPool.chainId).name)+"\n                ")])])])])]),e._v(" "),a("div",{staticClass:"right"},[a("div",{staticClass:"top-div"},[a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color3"},[a("div",{staticClass:"amount-title"},[e._v(e._s(e.$t("message.v3_ido_12")))]),e._v(" "),a("div",{staticClass:"amount-value"},[a("div",{staticClass:"start-time time"},[a("div",{class:{perch:!0,"perch-end":2===e.poolStatus||3===e.poolStatus}},[a("div",{staticClass:"perch-center"})]),e._v("\n                    "+e._s(e.getTimeDateStr("start"))+"\n                    "+e._s(e.getTimeStr("start"))+" UTC\n                  ")]),e._v(" "),a("div",{staticClass:"end-time time"},[a("div",{class:{perch:!0,"perch-end":3===e.poolStatus}},[a("div",{staticClass:"perch-line"}),e._v(" "),a("div",{staticClass:"perch-center"})]),e._v("\n                    "+e._s(e.getTimeDateStr("end"))+"\n                    "+e._s(e.getTimeStr("end"))+" UTC\n                  ")])])])]),e._v(" "),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color3"},[a("div",{staticClass:"amount-title"},[e._v(e._s(e.$t("message.ido_11")))]),e._v(" "),a("div",{staticClass:"amount-value"},[a("div",{staticClass:"progress-desc"},[a("span",[e._v(e._s(e._f("filterThousands")(e.curPool&&(3===e.poolStatus?e.curPool.hardCap:e.curPool.hardCap-e.leftExchange)))+"\n                      "+e._s(e.curPool&&e.curPool.tokenName))]),e._v(" "),a("span",[e._v(e._s(e._f("filterThousands")(e.curPool&&e.curPool.hardCap))+"\n                      "+e._s(e.curPool&&e.curPool.tokenName))])]),e._v(" "),a("div",{class:"progress-plan progress-status"+e.poolStatus},[a("el-progress",{attrs:{"show-text":!1,"stroke-width":12,color:2===e.poolStatus||3===e.poolStatus?"#A453F6":"#33334B",percentage:2===e.poolStatus?e.leftPercent:100,status:"success"}}),e._v(" "),a("p",{staticClass:"ido-time"},[2===e.poolStatus||1===e.poolStatus?a("span",[e._v("\n                        "+e._s(e.curPool.day)+e._s(e.$t("message.ido_20"))+"\n                        "+e._s(e.curPool.hours)+":"+e._s(e.curPool.minutes)+":"+e._s(e.curPool.seconds))]):a("span",[e._v("-")])])],1)])])]),e._v(" "),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color3"},[a("div",{staticClass:"amount-title"},[e._v(e._s(e.$t("message.ido_16")))]),e._v(" "),a("div",{staticClass:"amount-value"},[e._v("\n                  "+e._s(0==e.claimAmount?"-":e.claimAmount)+"\n                  "+e._s(0==e.claimAmount?"":e.curPool&&e.curPool.tokenName)+"\n                ")])])]),e._v(" "),a("div",{staticClass:"amount-container"},[a("div",{staticClass:"amount color3"},[a("div",{staticClass:"amount-title"},[e._v(e._s(e.$t("message.v3_ido_4")))]),e._v(" "),a("div",{staticClass:"amount-value"},[e._v("\n                  "+e._s(0==e.earned?"-":e.earned)+"\n                  "+e._s(0==e.earned?"":e.curPool&&e.curPool.tokenName)+"\n                ")])])]),e._v(" "),a("div",{staticClass:"ido-btn"},[1===e.poolStatus?a("div",[e.isShowApprove?a("div",{staticClass:"withdraw-Approve disabled btn"},[a("el-tooltip",{attrs:{effect:"dark",content:e.$t("message.v3_ido_6"),placement:"bottom"}},[a("span",[e._v(e._s(e.$t("message.ido_15")))])])],1):e._e()]):2===e.poolStatus?a("div",[e.isShowApprove?a("div",{staticClass:"withdraw-Approve btn linear-btn",class:{"disabled-linear":!e.isCurPoolChain},on:{click:e.toApprove}},[e._v("\n                  "+e._s(e.$t("message.ido_14"))+"\n                ")]):!e.isShowApprove&&(e.curBuyTimes[0]<e.maxBuyTimes||0==e.maxBuyTimes)?a("div",{staticClass:"withdraw-Deposit btn linear-btn",class:{"disabled-linear":!e.isCurPoolChain},on:{click:e.toBuyNow}},[e._v("\n                  "+e._s(e.$t("message.ido_15"))+"\n                ")]):e.earned&&0!==e.earned?e.isClaim&&e.earned&&0!=e.earned?a("div",{staticClass:"withdraw-Claim btn linear-btn",class:{"disabled-linear":!e.isCurPoolChain},on:{click:e.getClaim}},[e._v("\n                  "+e._s(e.$t("message.v3_ido_5"))+"\n                ")]):e._e():a("el-tooltip",{attrs:{effect:"dark",content:e.$t("message.v3_ido_7"),placement:"bottom"}},[e.earned&&0!==e.earned?e._e():a("div",{staticClass:"withdraw-Claim disabled btn"},[a("span",[e._v(e._s(e.$t("message.v3_ido_5")))])])])],1):3===e.poolStatus?a("div",[e.isClaim&&0!=e.earned?a("div",{staticClass:"withdraw-Claim btn linear-btn",class:{"disabled-linear":!e.isCurPoolChain},on:{click:e.getClaim}},[e._v("\n                  "+e._s(e.$t("message.v3_ido_5"))+"\n                ")]):e.isClaim&&0==e.earned?a("div",{staticClass:"withdraw-Claim btn disabled"},[e._v("\n                  "+e._s(e.$t("message.v3_ido_5"))+"\n                ")]):e.earned&&0!=e.earned?e._e():a("div",{staticClass:"withdraw-Claim disabled btn"},[e._v("\n                  "+e._s(e.$t("message.v3_ido_8"))+"\n                ")])]):e._e()])])])])]),e._v(" "),a("loading-pop",{attrs:{dataInfo:e.loadingData},model:{value:e.showLoading,callback:function(t){e.showLoading=t},expression:"showLoading"}}),e._v(" "),a("el-dialog",{attrs:{title:e.$t("message.v3_ido_9"),visible:e.showBuy,width:"563px","show-close":!1,center:""},on:{"update:visible":function(t){e.showBuy=t}}},[a("div",[e.curPool?a("div",{staticClass:"input-box"},[e.curPool.stairPrice?a("div",{staticClass:"select-amount"},[a("div",{staticClass:"amount",on:{click:function(t){e.selectAmountShow=!e.selectAmountShow}}},[e._v(e._s(e.input||e.getPlaceholder()))]),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.selectAmountShow,expression:"selectAmountShow"}]},e._l(e.curPool&&e.curPool.stairPrice,function(t,r){return a("li",{key:r,on:{click:function(a){return e.changeInput(t)}}},[e._v(e._s(t)+" "+e._s(e.curPool.exchangeTokenName))])}),0)]):a("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{placeholder:e.getPlaceholder(),type:"text"},domProps:{value:e.input},on:{keyup:e.watchChangeInput,input:function(t){t.target.composing||(e.input=t.target.value)}}}),e._v("\n          |\n          "),a("span",{staticClass:"max-button",on:{click:function(t){e.input=e.maximum>e.maxValue?e.maxValue+"":e.maximum+""}}},[e._v(e._s(e.$t("message.ido_19")))])]):e._e(),e._v(" "),a("p",{staticClass:"balance"},[e._v("\n          "+e._s(e.$t("message.ido_13"))+": "+e._s(e._f("filterThousands")(e.maxValue))+"\n          "+e._s(e.curPool&&e.curPool.exchangeTokenName)+"\n        ")])]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"btn cancel linear-btn",on:{click:function(t){e.showBuy=!1}}},[a("div",[e._v(e._s(e.$t("message.assets_lang_11")))])]),e._v(" "),a("el-button",{staticClass:"btn confirm linear-btn",attrs:{disabled:e.isToBuy},on:{click:e.toBuyNow}},[e._v(e._s(e.$t("message.v3_ido_13")))])],1)])],1)])},staticRenderFns:[]};var d=a("VU/8")(u,l,!1,function(e){a("kPKp"),a("FfRZ")},"data-v-2d52f27a",null);t.default=d.exports},kPKp:function(e,t){}});