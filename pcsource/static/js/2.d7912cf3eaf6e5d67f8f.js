webpackJsonp([2],{"1Cs2":function(t,e){},ICeu:function(t,e){},Lo4r:function(t,e){},PqEs:function(t,e){},Rmja:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("TIfe");var s=a("Tnm7"),n=a("NYxO"),r=a("ytf2"),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(n,r){try{var i=e[n](r),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})}}var c={props:{value:{type:Boolean,default:!1},address:{type:String,default:function(){return""}},name:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:this.value,balance:0,price:""}},watch:{value:function(t){var e=this;this.dialogVisible=t,this.price="",Object(r.b)(),this.$nextTick(o(regeneratorRuntime.mark(function t(){var a,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.address),a=new web3.eth.Contract(JSON.parse(s.t),e.address),t.next=4,a.methods.balanceOf(e.mateMaskToken).call().catch(function(t){if(t)return n=0,!1});case 4:return n=t.sent,t.next=7,a.methods.decimals().call();case 7:r=t.sent,e.balance=e.$util.fromWei(n,r,4);case 9:case"end":return t.stop()}},t,e)})))},price:function(t){t&&(t=(t+"").match(/^\d*(\.?\d{0,4})/g)[0]||null,this.price=t,parseFloat(this.price)>parseFloat(this.balance)&&(this.price=this.balance))}},computed:i({},Object(n.c)({language:function(t){return t.app.language},mateMaskToken:function(t){return t.app.mateMaskToken}})),mounted:function(){var t=this;return o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},methods:{getTitle:function(){return this.$t("message.stake_1")+this.name+this.$t("message.stake_2")},handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t=this;return o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(parseFloat(t.price)){e.next=2;break}return e.abrupt("return");case 2:t.$emit("STAKE",t.price);case 3:case"end":return e.stop()}},e,t)}))()}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.getTitle(),visible:t.dialogVisible,"append-to-body":"",center:"","lock-scroll":"",width:"500px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"token"},[t._v(t._s(t.mateMaskToken))]),t._v(" "),a("div",{staticClass:"txt1"},[t._v(t._s(t.name)+" "+t._s(t.$t("message.stake_3"))+"："),a("span",{staticClass:"txt2"},[t._v(t._s(t.balance))])]),t._v(" "),a("div",{staticClass:"input-div"},[a("div",{staticClass:"desc"},[t._v(t._s(t.$t("message.stake_4"))+" "+t._s(t.name)+" "+t._s(t.$t("message.stake_5")))]),t._v(" "),a("el-input",{model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),t._v(" "),a("el-button",{staticClass:"max-btn",on:{click:function(e){t.price=t.balance+""}}},[t._v(t._s(t.$t("message.ido_19")))])],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"btn3",attrs:{disabled:t.price<=0},on:{click:t.onConfirm}},[t._v("\n              "+t._s(t.$t("message.stake_24"))+"\n          ")])],1)])],1)},staticRenderFns:[]};var l=a("VU/8")(c,u,!1,function(t){a("fd6l")},"data-v-bc34431e",null).exports,d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};var v={props:{value:{type:Boolean,default:!1},balanceOf:{type:Number,default:0},earned:{type:Number,default:0}},data:function(){return{dialogVisible:this.value,sSellOrder:null,sSellSig:null}},watch:{value:function(t){this.dialogVisible=t}},computed:d({},Object(n.c)({mateMaskToken:function(t){return t.app.mateMaskToken}}),{price:function(){return(parseFloat(this.balanceOf)+parseFloat(this.earned)).toFixed(4)}}),methods:{handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t,e=this;return(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$emit("WITHDRAW",!0);case 1:case"end":return t.stop()}},t,e)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(n,r){try{var i=e[n](r),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})})()}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.$t("message.stake_6"),visible:t.dialogVisible,"append-to-body":"",center:"","lock-scroll":"",width:"500px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"token"},[t._v(t._s(t.mateMaskToken))]),t._v(" "),a("div",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_7"))+"："),a("span",{staticClass:"txt2"},[t._v(t._s(t._f("filterThousands")(t.balanceOf)))])]),t._v(" "),a("div",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_8"))+"："),a("span",{staticClass:"txt2"},[t._v(t._s(t._f("filterThousands")(t.earned)))])]),t._v(" "),a("div",{staticClass:"input-div"},[a("div",{staticClass:"desc"},[t._v(t._s(t.$t("message.stake_9")))]),t._v(" "),a("el-input",{attrs:{disabled:!0},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),t._v(" "),a("div",{staticClass:"tips"},[t._v(t._s(t.$t("message.stake_10")))]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"btn",on:{click:t.onConfirm}},[t._v("\n              "+t._s(t.$t("message.stake_23"))+"\n          ")])],1)])],1)},staticRenderFns:[]};var p=a("VU/8")(v,h,!1,function(t){a("Y50a")},"data-v-99f1a7e8",null).exports,f=a("bu39"),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};var g={props:{value:{type:Boolean,default:!1},balanceOf:{type:Number,default:0},earned:{type:Number,default:0}},data:function(){return{dialogVisible:this.value,sSellOrder:null,sSellSig:null}},watch:{value:function(t){this.dialogVisible=t}},computed:m({},Object(n.c)({mateMaskToken:function(t){return t.app.mateMaskToken}}),{price:function(){return parseFloat(this.earned).toFixed(4)}}),methods:{handleClose:function(t){this.$emit("input",!1)},onConfirm:function(){var t,e=this;return(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$emit("HARVEST",!0);case 1:case"end":return t.stop()}},t,e)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(n,r){try{var i=e[n](r),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})})()}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.$t("message.stake_49"),visible:t.dialogVisible,"append-to-body":"",center:"","lock-scroll":"",width:"500px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"txt1"},[t._v(t._s(t.mateMaskToken))]),t._v(" "),a("div",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_7"))+"："),a("span",{staticClass:"txt2"},[t._v(t._s(t._f("filterThousands")(t.balanceOf)))])]),t._v(" "),a("div",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_8"))+"："),a("span",{staticClass:"txt2"},[t._v(t._s(t._f("filterThousands")(t.earned)))])]),t._v(" "),a("div",{staticClass:"input-div"},[a("div",{staticClass:"desc"},[t._v(t._s(t.$t("message.stake_52")))]),t._v(" "),a("el-input",{attrs:{disabled:!0},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),t._v(" "),a("div",{staticClass:"tips"},[t._v(t._s(t.$t("message.stake_53")))]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"btn",on:{click:t.onConfirm}},[t._v("\n              "+t._s(t.$t("message.stake_50"))+"\n          ")])],1)])],1)},staticRenderFns:[]};var w=a("VU/8")(g,_,!1,function(t){a("PqEs")},"data-v-76e12790",null).exports,b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t};function k(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(n,r){try{var i=e[n](r),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})}}var x={components:{stake:l,WithDraw:p,Harvest:w,LoadingPop:f.a},props:{dataInfo:{type:Array,default:function(){return[]}},poolAbi:{type:String,default:function(){return""}},haveHarvest:{type:Boolean,default:function(){return!1}},descAry:{type:Array,default:function(){return[]}}},data:function(){return{showWithDraw:!1,showHarvest:!1,showStake:!1,isRequest:!1,time:0,timeId:null,address:"",abi:"",contract:null,rewardRate:0,totalSupply:0,balanceOf:0,earned:0,realRate:0,inviteAddress:"",isStart:!0,isInviteError:!1,isShowApprove:!1,showLoading:!1,loadingData:{type:0}}},watch:{mateMaskToken:function(){window.location.reload()}},computed:b({},Object(n.c)({mateMaskToken:function(t){return t.app.mateMaskToken},chainObj:function(t){return t.app.chainObj},cashDic:function(t){return t.app.cashDic},sBTC:function(t){return t.app.BTCUSDT},sETH:function(t){return t.app.ETHUSDT},sBRD:function(t){return t.app.BRDBTC},sNEAR:function(t){return t.app.NERAUSDT},BNBUSDT:function(t){return t.app.BNBUSDT},language:function(t){return t.app.language}}),{poolName:function(){var t="en"===this.language?"en":"zh";if(this.descAry.length){var e=parseInt(this.dataInfo[7])-1,a=this.descAry.length>e?this.descAry[e]:this.descAry[0];return"en"==t?a.sName_en:a.sName_ch}},poolDesc:function(){var t="en"===this.language?"en":"zh";if(this.descAry.length){var e=parseInt(this.dataInfo[7])-1,a=this.descAry.length>e?this.descAry[e]:this.descAry[0];return"en"==t?a.sSummary_en:a.sSummary_ch}},getChain:function(t){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[t]?this.chainObj[t]:{}},canWithDraw:function(){return!(this.earned+this.balanceOf)},canHarvest:function(){return!this.earned},curChain:function(){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[web3.currentProvider.chainId]?this.chainObj[web3.currentProvider.chainId]:{}},getRealRate:function(){return 3===this.dataInfo.poolStatus?"0":this.realRate}}),mounted:function(){if(this.inviteAddress=this.$route.params.address,this.inviteAddress)try{this.inviteAddress=window.atob(this.inviteAddress),-1===this.inviteAddress.indexOf("NE")?(this.inviteAddress=s.c,this.$message.error(this.$t("message.invite_err")),this.isInviteError=!0):this.inviteAddress=this.inviteAddress.substring(2)}catch(t){this.$message.error(this.$t("message.invite_err")),this.isInviteError=!0}else this.inviteAddress=s.c;var t=(new Date).getTime();this.isStart=1e3*parseInt(this.dataInfo[4])<t,window.addEventListener("START-TIME",this.onInit),this.checkApprove()},beforeDestroy:function(){window.removeEventListener("START-TIME",this.onInit)},methods:{getStatus:function(t){switch(t){case 1:return this.$t("message.ido_3");case 2:return this.$t("message.ido_2");case 3:return this.$t("message.ido_4")}},getStatusSign:function(t){switch(t){case 1:return this.$t("message.ido_3");case 2:return this.$t("message.ido_32");case 3:return this.$t("message.ido_4")}},getDoll:function(){if(!this.dataInfo.length)return 0;if(!this.sNEAR)return 0;var t="";switch(this.dataInfo.length&&(t=this.dataInfo[0]),t){case"ETH":case"WETH":return(parseFloat(this.sETH.c)*parseFloat(this.totalSupply)).toFixed(2);case"BRD":return(parseFloat(this.sBRD.c)*parseFloat(this.sBTC.c)*parseFloat(this.totalSupply)).toFixed(2);case"NERA":case"ERAT":return(parseFloat(this.sNEAR.c)*parseFloat(this.totalSupply)).toFixed(2);default:return""}},getOpenAndEndTime:function(){return this.$util.formatTimeToStr(1e3*parseInt(this.dataInfo[4]),"yyyy-MM-dd hh:mm")+" - "+this.$util.formatTimeToStr(1e3*parseInt(this.dataInfo[5]),"yyyy-MM-dd hh:mm")},getOpenTime:function(){return this.$util.formatTimeBySecond(1e3*parseInt(this.dataInfo[4]))},getTimeLeft:function(){return 60-this.time},checkApprove:function(){var t=this;return k(regeneratorRuntime.mark(function e(){var a,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=2;break}return e.abrupt("return");case 2:return a=new web3.eth.Contract(JSON.parse(s.t),t.dataInfo[2]),e.next=5,a.methods.allowance(t.mateMaskToken,t.dataInfo[6]).call();case 5:n=e.sent,t.isShowApprove=!parseInt(n);case 7:case"end":return e.stop()}},e,t)}))()},onApprove:function(){var t=this;return k(regeneratorRuntime.mark(function e(){var a,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return");case 3:if(t.isShowApprove){e.next=6;break}return t.$message.success(t.$t("message.stake_59")),e.abrupt("return");case 6:return t.loadingData.type=1,t.loadingData.scan=t.chainObj[ethereum.chainId],t.showLoading=!0,e.next=11,web3.eth.getGasPrice();case 11:return a=e.sent,console.log("推荐gas费==="+a),n=new web3.eth.Contract(JSON.parse(s.t),t.dataInfo[2]),e.next=16,n.methods.allowance(t.mateMaskToken,t.dataInfo[6]).call();case 16:if("0"!=(r=e.sent)){e.next=26;break}return console.log("跳转ERC20授权!"),e.next=21,n.methods.approve(t.dataInfo[6],"1000000000000000000000000000000000000000000").send({from:t.mateMaskToken,gasPrice:a},function(e,a){if(e)return t.showLoading=!1,console.log("授权报错"),t.$message.error(t.$t("message.assets_lang_90")),!1;t.loadingData.type=2,t.loadingData.txId=a});case 21:return e.next=23,n.methods.allowance(t.mateMaskToken,t.dataInfo[6]).call();case 23:r=e.sent,e.next=29;break;case 26:return t.$message.success(t.$t("message.stake_59")),t.showLoading=!1,e.abrupt("return");case 29:if("0"!=r){e.next=35;break}return console.log("ERC20未授权!"),t.showLoading=!1,e.abrupt("return",!1);case 35:console.log("ERC20已授权!");case 36:t.showLoading=!1,t.isShowApprove=!1;case 38:case"end":return e.stop()}},e,t)}))()},toShowWithDraw:function(){this.mateMaskToken?this.showWithDraw=!0:this.$router.push("/metamask")},toShowHarvest:function(){this.mateMaskToken?this.showHarvest=!0:this.$router.push("/metamask")},onStake:function(){this.isStart&&(this.isInviteError?this.$message.error(this.$t("message.invite_err")):this.mateMaskToken?this.showStake=!0:this.$router.push("/metamask"))},onInit:function(){this.contract=new web3.eth.Contract(JSON.parse(this.poolAbi),this.dataInfo[6]),this.refresh()},getIcon:function(t){return this.dataInfo&&this.dataInfo.length?s.f[this.dataInfo[t].toLowerCase()]:""},withDraw:function(){var t=this;return k(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingData.type=1,t.loadingData.scan=t.chainObj[ethereum.chainId],t.showLoading=!0,e.next=5,web3.eth.getGasPrice();case 5:return a=e.sent,console.log("推荐gas费==="+a),e.next=9,t.contract.methods.withdrawAndGetReward().send({from:t.mateMaskToken,gasPrice:a},function(e,a){if(e)return t.$message.error(t.$t("message.stake_11")),t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=a,t.showWithDraw=!1,t.$message(t.$t("message.stake_12"))});case 9:t.$message.success(t.$t("message.stake_13")),t.refresh(),t.showLoading=!1;case 12:case"end":return e.stop()}},e,t)}))()},harvest:function(){var t=this;return k(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingData.type=1,t.loadingData.scan=t.chainObj[ethereum.chainId],t.showLoading=!0,e.next=5,web3.eth.getGasPrice();case 5:return a=e.sent,console.log("推荐gas费==="+a),e.next=9,t.contract.methods.getReward().send({from:t.mateMaskToken,gasPrice:a},function(e,a){if(e)return t.$message.error(t.$t("message.stake_54")),t.showLoading=!1,!1;t.loadingData.type=2,t.loadingData.txId=a,t.showHarvest=!1,t.$message(t.$t("message.stake_55"))});case 9:t.$message.success(t.$t("message.stake_56")),t.refresh(),t.showLoading=!1;case 12:case"end":return e.stop()}},e,t)}))()},stake:function(t){var e=this;return k(regeneratorRuntime.mark(function a(){var n,r,i,o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.loadingData.type=1,e.loadingData.scan=e.chainObj[ethereum.chainId],e.showLoading=!0,a.next=5,web3.eth.getGasPrice();case 5:return n=a.sent,console.log("推荐gas费==="+n),r=new web3.eth.Contract(JSON.parse(s.t),e.dataInfo[2]),a.next=10,r.methods.decimals().call();case 10:return i=a.sent,t=e.$util.toWei(t,i),a.next=14,r.methods.allowance(e.mateMaskToken,e.dataInfo[6]).call();case 14:if("0"!=(o=a.sent)){a.next=22;break}return console.log("跳转ERC20授权!"),a.next=19,r.methods.approve(e.dataInfo[6],"1000000000000000000000000000000000000000000").send({from:e.mateMaskToken,gasPrice:n},function(t,a){if(t)return e.showLoading=!1,console.log("授权报错"),e.$message.error(i18n.t("message.assets_lang_90")),e.showLoading=!1,!1});case 19:return a.next=21,r.methods.allowance(e.mateMaskToken,e.dataInfo[6]).call();case 21:o=a.sent;case 22:if("0"!=o){a.next=28;break}return console.log("ERC20未授权!"),e.showLoading=!1,a.abrupt("return",!1);case 28:console.log("ERC20已授权!");case 29:return e.isShowApprove=!1,a.next=32,e.contract.methods.stake(t,e.inviteAddress).send({from:e.mateMaskToken,gasPrice:n},function(t,a){if(t)return e.$message.error(e.$t("message.stake_14")),e.showLoading=!1,!1;e.loadingData.type=2,e.loadingData.txId=a,e.showStake=!1,e.$message(e.$t("message.stake_15"))});case 32:e.$message.success(e.$t("message.stake_16")),e.refresh(),e.showLoading=!1;case 35:case"end":return a.stop()}},a,e)}))()},startTime:function(){var t=this;clearInterval(this.timeId),this.timeId=setInterval(function(){t.time++,t.time>=60&&(clearInterval(t.timeId),t.refresh())},1e3)},initData:function(){var t=this;return k(regeneratorRuntime.mark(function e(){var a,n,r,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.contract&&t.dataInfo&&t.dataInfo.length){e.next=2;break}return e.abrupt("return");case 2:return a=new web3.eth.Contract(JSON.parse(s.t),t.dataInfo[2]),n=new web3.eth.Contract(JSON.parse(s.t),t.dataInfo[3]),e.next=6,a.methods.decimals().call();case 6:return r=e.sent,e.next=9,n.methods.decimals().call();case 9:if(i=e.sent,!t.mateMaskToken){e.next=19;break}return e.next=13,t.contract.methods.balanceOf(t.mateMaskToken).call();case 13:return t.balanceOf=e.sent,t.balanceOf=parseFloat(t.$util.fromWei(t.balanceOf,r,4)),e.next=17,t.contract.methods.earned(t.mateMaskToken).call();case 17:t.earned=e.sent,t.earned=parseFloat(parseFloat(t.$util.fromWei(t.earned,i,4)).toFixed(4));case 19:return e.next=21,t.contract.methods.getRewardRate().call();case 21:return t.rewardRate=e.sent,t.rewardRate=parseFloat(t.$util.fromWei(t.rewardRate,i,4)),e.next=25,t.contract.methods.totalSupply().call();case 25:return t.totalSupply=e.sent,t.totalSupply=parseFloat(parseFloat(t.$util.fromWei(t.totalSupply,r,4)).toFixed(4)),o=t.totalSupply?t.totalSupply:1,t.realRate=(31536e5*t.rewardRate/o).toFixed(2),e.abrupt("return",!0);case 30:case"end":return e.stop()}},e,t)}))()},refresh:function(){var t=this;return k(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isRequest){e.next=2;break}return e.abrupt("return");case 2:return t.isRequest=!0,e.next=5,t.initData();case 5:t.isRequest=!1,t.time=0,t.startTime();case 8:case"end":return e.stop()}},e,t)}))()}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"item-top"},[s("div",{staticClass:"status-sign"},[s("div",{staticClass:"sign-item"},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.dataInfo&&1==t.dataInfo.poolStatus,expression:"dataInfo && dataInfo.poolStatus == 1"}],attrs:{src:a("uXOr"),alt:""}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.dataInfo&&2==t.dataInfo.poolStatus,expression:"dataInfo && dataInfo.poolStatus == 2"}],attrs:{src:a("R2lP"),alt:""}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.dataInfo&&3==t.dataInfo.poolStatus,expression:"dataInfo && dataInfo.poolStatus == 3"}],attrs:{src:a("zvc6"),alt:""}}),t._v(" "),s("div",{staticClass:"sign-desc"},[t._v("\n          "+t._s(t.getStatusSign(t.dataInfo&&t.dataInfo.poolStatus))+"\n        ")])])]),t._v(" "),s("div",{staticClass:"time-circle",on:{click:t.refresh}},[s("el-progress",{attrs:{type:"circle","stroke-width":4,"show-text":!0,width:43,format:t.getTimeLeft,percentage:100*t.time/60,color:"#0076FB"}})],1)]),t._v(" "),s("div",{staticClass:"staking-detail-info"},[s("div",{staticClass:"left"},[s("div",{staticClass:"pool-name"},[t._v(t._s(t.poolName))]),t._v(" "),s("div",{staticClass:"chain-info"},[s("img",{attrs:{src:t.curChain&&t.curChain.icon,alt:""}}),t._v(" "),s("div",[t._v(t._s(t.curChain&&t.curChain.name))])]),t._v(" "),s("div",{staticClass:"pool-desc"},[t._v(t._s(t.poolDesc))]),t._v(" "),s("div",{staticClass:"time-p"},[s("div",{staticClass:"item-time"},[s("div",{staticClass:"num"},[s("div",{staticClass:"value-d"},[t._v(t._s(t.dataInfo&&t.dataInfo.day))]),s("div",{staticClass:"down-div"})]),t._v(" "),s("div",{staticClass:"desc"},[t._v(t._s(t.$t("message.ido_20")))])]),t._v(" "),s("div",{staticClass:"item-time"},[s("div",{staticClass:"num"},[s("div",{staticClass:"value-d"},[t._v(t._s(t.dataInfo&&t.dataInfo.hours))]),s("div",{staticClass:"down-div"})]),t._v(" "),s("div",{staticClass:"desc"},[t._v(t._s(t.$t("message.ido_21")))])]),t._v(" "),s("div",{staticClass:"item-time"},[s("div",{staticClass:"num"},[s("div",{staticClass:"value-d"},[t._v(t._s(t.dataInfo&&t.dataInfo.minutes))]),s("div",{staticClass:"down-div"})]),t._v(" "),s("div",{staticClass:"desc"},[t._v(t._s(t.$t("message.ido_22")))])]),t._v(" "),s("div",{staticClass:"item-time"},[s("div",{staticClass:"num"},[s("div",{staticClass:"value-d"},[t._v(t._s(t.dataInfo&&t.dataInfo.seconds))]),s("div",{staticClass:"down-div"})]),t._v(" "),s("div",{staticClass:"desc"},[t._v(t._s(t.$t("message.ido_23")))])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.dataInfo&&2==t.dataInfo.poolStatus,expression:"dataInfo && dataInfo.poolStatus == 2"}],staticClass:"button-div"},[s("el-button",{staticClass:"btn-approve shake-shake",attrs:{disabled:!t.isShowApprove},on:{click:t.onApprove}},[t._v("\n            "+t._s(t.isShowApprove?t.$t("message.ido_14"):t.$t("message.stake_59"))+"\n            ")]),t._v(" "),s("div",{staticClass:"btn-stake shake-shake",on:{click:t.onStake}},[t._v(t._s(t.$t("message.stake_24")))])],1)]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"arp-container arp-container1"},[s("div",{staticClass:"flex-bwteen margin-bottom"},[s("div",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_20")))]),t._v(" "),s("div",{staticClass:"coin-icon"},[s("img",{attrs:{src:t.getIcon(2),alt:""}}),t._v(t._s(t.dataInfo[0]))])]),t._v(" "),s("div",{staticClass:"txt2 flex-bwteen"},[t._v(t._s(t.totalSupply))])]),t._v(" "),s("div",{staticClass:"arp-container arp-container2"},[s("div",{staticClass:"txt1 flex-bwteen margin-bottom"},[t._v(t._s(t.$t("message.stake_19")))]),t._v(" "),s("div",{staticClass:"txt2 flex-bwteen"},[t._v(t._s(t.getRealRate)+" %")])]),t._v(" "),s("div",{staticClass:"arp-container arp-container3"},[s("div",{staticClass:"flex-bwteen margin-bottom"},[s("div",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_7")))]),t._v(" "),s("div",{staticClass:"coin-icon"},[s("img",{attrs:{src:t.getIcon(3),alt:""}}),t._v(t._s(t.dataInfo[0]))])]),t._v(" "),s("div",{staticClass:"flex-bwteen"},[s("div",{staticClass:"txt2"},[t._v(t._s(t.balanceOf))]),t._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.canWithDraw,expression:"!canWithDraw"}],staticClass:"btn-normal",attrs:{round:"",color:"#7232dd",plain:""},on:{click:t.toShowWithDraw}},[t._v("\n              "+t._s(t.$t("message.stake_23"))+"\n            ")])],1)]),t._v(" "),s("div",{staticClass:"arp-container arp-container4"},[s("div",{staticClass:"flex-bwteen margin-bottom"},[s("div",{staticClass:"txt1"},[t._v(t._s(t.$t("message.stake_8")))]),t._v(" "),s("div",{staticClass:"coin-icon"},[s("img",{attrs:{src:t.getIcon(3),alt:""}}),t._v(t._s(t.dataInfo[0]))])]),t._v(" "),s("div",{staticClass:"flex-bwteen"},[s("div",{staticClass:"txt2"},[t._v(t._s(t.earned))]),t._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:t.haveHarvest&&!t.canHarvest,expression:"haveHarvest && !canHarvest"}],staticClass:"btn-normal btn-normal1",attrs:{round:"",color:"#7232dd",plain:""},on:{click:t.toShowHarvest}},[t._v("\n                  "+t._s(t.$t("message.stake_50"))+"\n                ")])],1)])])]),t._v(" "),s("with-draw",{attrs:{earned:t.earned,balanceOf:t.balanceOf},on:{WITHDRAW:t.withDraw},model:{value:t.showWithDraw,callback:function(e){t.showWithDraw=e},expression:"showWithDraw"}}),t._v(" "),s("stake",{attrs:{address:t.dataInfo[2],name:t.dataInfo[0]},on:{STAKE:t.stake},model:{value:t.showStake,callback:function(e){t.showStake=e},expression:"showStake"}}),t._v(" "),s("harvest",{attrs:{earned:t.earned,balanceOf:t.balanceOf},on:{HARVEST:t.harvest},model:{value:t.showHarvest,callback:function(e){t.showHarvest=e},expression:"showHarvest"}}),t._v(" "),s("loading-pop",{attrs:{dataInfo:t.loadingData},model:{value:t.showLoading,callback:function(e){t.showLoading=e},expression:"showLoading"}})],1)},staticRenderFns:[]};function I(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}function y(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(n,r){try{var i=e[n](r),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})}}var $={data:function(){return{showWithDraw:!1,showStake:!1,isRequest:!1,address:"",address2:"",abi:"",poolAbi:"",poolAbi2:"",contract:null,contract2:null,list:[],list2:[],noList:!1,descAry:[]}},watch:{mateMaskToken:function(){console.log("链接----")}},components:{StakeItem:a("VU/8")(x,C,!1,function(t){a("Lo4r")},"data-v-333b50d9",null).exports},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t})({},Object(n.c)({mateMaskToken:function(t){return t.app.mateMaskToken},chainObj:function(t){return t.app.chainObj},chainSwitchData:function(t){return t.app.chainSwitchData}}),{curChain:function(){return"undefined"!=typeof web3&&this.chainObj&&this.chainObj[web3.currentProvider.chainId]?this.chainObj[web3.currentProvider.chainId]:{}},getChainId:function(){return"undefined"!=typeof web3?this.$t("message.stake_48")+web3.currentProvider.chainId+")":{}}}),mounted:function(){var t=this;return y(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initConfig();case 2:t.timewait();case 3:case"end":return e.stop()}},e,t)}))()},beforeDestroy:function(){clearInterval(this.timeId)},methods:{toSwitch:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var a,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.ethereum){e.next=3;break}return e.abrupt("return");case 3:if(s=t.chainSwitchData["0x38"]){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,a.request({method:"wallet_addEthereumChain",params:s}).catch();case 8:e.sent;case 9:case"end":return e.stop()}},e,t)}))()},toInvite:function(){var t=this;return y(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.mateMaskToken){e.next=3;break}return t.$router.push("/metamask"),e.abrupt("return");case 3:t.$router.push("/invite-staking");case 4:case"end":return e.stop()}},e,t)}))()},initConfig:function(){var t=this;return y(regeneratorRuntime.mark(function e(){var a,n,i,o,c,u,l,d,v,h,p,f,m,g,_,w,b,k,x,C,y,$,S,R,T;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$util.getChainKey(),e.next=3,t.$api.GetSystemConfig({sAppId:a,sKey1:"ERC20"});case 3:return n=e.sent,Object(s.l)(n.vList),e.next=7,t.$axios.post("/v1/udc/GetSystemConfig",{sAppId:a,sKey1:"StakeData"});case 7:for(i=e.sent,t.descAry=[],o=!0,c=!1,u=void 0,e.prev=12,l=i.vList[Symbol.iterator]();!(o=(d=l.next()).done);o=!0)v=d.value,t.descAry.push(JSON.parse(v.sValue));e.next=20;break;case 16:e.prev=16,e.t0=e.catch(12),c=!0,u=e.t0;case 20:e.prev=20,e.prev=21,!o&&l.return&&l.return();case 23:if(e.prev=23,!c){e.next=26;break}throw u;case 26:return e.finish(23);case 27:return e.finish(20);case 28:return e.next=30,t.$api.GetSystemConfig({sAppId:a,sKey1:"Stake"});case 30:for(h=e.sent,p=h.vList,f=!0,m=!1,g=void 0,e.prev=35,_=p[Symbol.iterator]();!(f=(w=_.next()).done);f=!0)"dataAbi"===(b=w.value).sKey2?t.abi=b.sValue:"stakeAddress"===b.sKey2?t.address=b.sValue:"poorAbi"===b.sKey2?t.poolAbi=b.sValue:"stakeAddress2"===b.sKey2?t.address2=b.sValue:"poorAbi2"===b.sKey2&&(t.poolAbi2=b.sValue);e.next=43;break;case 39:e.prev=39,e.t1=e.catch(35),m=!0,g=e.t1;case 43:e.prev=43,e.prev=44,!f&&_.return&&_.return();case 46:if(e.prev=46,!m){e.next=49;break}throw g;case 49:return e.finish(46);case 50:return e.finish(43);case 51:if(Object(r.b)(),k=[],x=[],C=0,y=0,t.abi){e.next=59;break}return t.noList=!0,e.abrupt("return");case 59:return t.contract=new web3.eth.Contract(JSON.parse(t.abi),t.address),e.next=62,t.contract.methods.getPoolsLength().call();case 62:C=e.sent,C=parseInt(C),$=0;case 65:if(!($<C)){e.next=74;break}return e.next=68,t.contract.methods.getPoolInfo($).call();case 68:S=e.sent,S=[].concat(I(S),[$+1]),k.push(S);case 71:$++,e.next=65;break;case 74:return e.next=76,t.disposalRealList(k);case 76:if(t.list=e.sent,!t.address2){e.next=96;break}return t.contract2=new web3.eth.Contract(JSON.parse(t.abi),t.address2),e.next=81,t.contract2.methods.getPoolsLength().call();case 81:y=e.sent,y=parseInt(y),R=0;case 84:if(!(R<y)){e.next=93;break}return e.next=87,t.contract2.methods.getPoolInfo(R).call();case 87:T=e.sent,T=[].concat(I(T),[R+1+C]),x.push(T);case 90:R++,e.next=84;break;case 93:return e.next=95,t.disposalRealList(x);case 95:t.list2=e.sent;case 96:t.noList=!(parseFloat(C)+parseFloat(y)),t.$nextTick(function(){var t=new CustomEvent("START-TIME");window.dispatchEvent(t)});case 98:case"end":return e.stop()}},e,t,[[12,16,20,28],[21,,23,27],[35,39,43,51],[44,,46,50]])}))()},timewait:function(){var t=this;clearInterval(this.timeId),this.timeId=setInterval(function(){var e=[].concat(I(t.list),I(t.list2));if(e.length){var a=(new Date).getTime()/1e3,s=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(s=(i=o.next()).done);s=!0){var c=i.value,u=parseInt(c[4]),l=parseInt(c[5]),d=0,v=0,h=0,p=0,f=0,m=2;a<u?(m=1,f=u-a,d=parseInt(f/3600/24),v=parseInt(24*(parseFloat(f/3600/24)-parseInt(f/3600/24))),h=parseInt(60*(parseFloat(f/3600)-parseInt(f/3600))),p=parseInt(60*(parseFloat(60*(parseFloat(f/3600)-parseInt(f/3600)))-parseInt(60*(parseFloat(f/3600)-parseInt(f/3600)))))):a>l?(m=3,d=0,v=0,h=0,p=0):(f=l-a,d=parseInt(f/3600/24),v=parseInt(24*(parseFloat(f/3600/24)-parseInt(f/3600/24))),h=parseInt(60*(parseFloat(f/3600)-parseInt(f/3600))),p=parseInt(60*(parseFloat(60*(parseFloat(f/3600)-parseInt(f/3600)))-parseInt(60*(parseFloat(f/3600)-parseInt(f/3600))))),m=2),d<10&&(d=(d+1e4).toString().substring(3)),v=(v+100).toString().substring(1),h=(h+100).toString().substring(1),p=(p+100).toString().substring(1),t.$set(c,"poolStatus",m),t.$set(c,"day",d),t.$set(c,"hours",v),t.$set(c,"minutes",h),t.$set(c,"seconds",p)}}catch(t){n=!0,r=t}finally{try{!s&&o.return&&o.return()}finally{if(n)throw r}}}},1e3)},disposalRealList:function(t){var e=this;return y(regeneratorRuntime.mark(function a(){var s,n,r,i,o,c,u,l,d,v,h,p,f,m,g,_,w,b;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:for(s=(new Date).getTime()/1e3,n=[],r=[],i=!0,o=!1,c=void 0,a.prev=6,u=t[Symbol.iterator]();!(i=(l=u.next()).done);i=!0)d=l.value,parseFloat(d[5])<=s?r.push(d):n.push(d);a.next=14;break;case 10:a.prev=10,a.t0=a.catch(6),o=!0,c=a.t0;case 14:a.prev=14,a.prev=15,!i&&u.return&&u.return();case 17:if(a.prev=17,!o){a.next=20;break}throw c;case 20:return a.finish(17);case 21:return a.finish(14);case 22:n.sort(function(t,e){return s<parseFloat(t[4])?1e17:parseFloat(e[4])-parseFloat(t[4])}),r.sort(function(t,e){return parseFloat(e[4])-parseFloat(t[4])}),v=[],h=!0,p=!1,f=void 0,a.prev=28,m=r[Symbol.iterator]();case 30:if(h=(g=m.next()).done){a.next=40;break}return _=g.value,w=new web3.eth.Contract(JSON.parse(e.poolAbi),_[6]),a.next=35,w.methods.totalSupply().call();case 35:b=a.sent,parseFloat(b)&&v.push(_);case 37:h=!0,a.next=30;break;case 40:a.next=46;break;case 42:a.prev=42,a.t1=a.catch(28),p=!0,f=a.t1;case 46:a.prev=46,a.prev=47,!h&&m.return&&m.return();case 49:if(a.prev=49,!p){a.next=52;break}throw f;case 52:return a.finish(49);case 53:return a.finish(46);case 54:return a.abrupt("return",[].concat(n,v));case 55:case"end":return a.stop()}},a,e,[[6,10,14,22],[15,,17,21],[28,42,46,54],[47,,49,53]])}))()}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"staking",staticStyle:{background:"#fff"}},[s("div",{staticClass:"staking-container"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("message.stake_18")))]),t._v(" "),t.noList?t._e():s("div",{staticClass:"header"},[s("div"),t._v(" "),s("div",{staticClass:"invite-btn",on:{click:t.toInvite}},[t._v("\n        "+t._s(t.$t("message.stake_27"))+"\n      ")])]),t._v(" "),t._l(t.list2,function(e,a){return s("stake-item",{key:a+t.list.length,attrs:{haveHarvest:!0,dataInfo:e,poolAbi:t.poolAbi2,descAry:t.descAry}})}),t._v(" "),t._l(t.list,function(e,a){return s("stake-item",{key:a,attrs:{haveHarvest:!1,dataInfo:e,poolAbi:t.poolAbi,descAry:t.descAry}})}),t._v(" "),t.noList?s("div",{staticClass:"staking-empty"},[s("img",{attrs:{src:a("j3ha"),alt:""}}),t._v(" "),s("div",{staticClass:"notice"},[s("div",[t._v("\n          "+t._s(t.$t("message.no_chain_1"))+"\n        ")]),t._v(" "),s("div",[t._v("\n          "+t._s(t.$t("message.no_chain_2"))+"\n          "),s("div",{staticClass:"bridge-btn add",on:{click:t.toSwitch}},[t._v(t._s(t.$t("message.bridge_27")))]),t._v("\n          "+t._s(t.$t("message.no_chain_3"))+"\n        ")])])]):t._e()],2)])},staticRenderFns:[]};var R=a("VU/8")($,S,!1,function(t){a("1Cs2"),a("ICeu")},"data-v-1177f467",null);e.default=R.exports},Y50a:function(t,e){},fd6l:function(t,e){}});