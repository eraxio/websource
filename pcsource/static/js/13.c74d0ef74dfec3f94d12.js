webpackJsonp([13],{SjU2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("NYxO"),r=n("LoaF"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(r,i){try{var a=t[r](i),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}("next")})}}var s={name:"favorite",data:function(){return{vList:[],iPageNo:0,iPageNum:8,iTotal:0,busy:!1}},components:{EraxCollection2:r.a},computed:i({},Object(o.b)(["token","userInfo"])),watch:{token:function(e){return this.handleReset(),e}},mounted:function(){var e=this;return a(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUserFollowCollection();case 2:window.addEventListener("scroll",e.handleLoad);case 3:case"end":return t.stop()}},t,e)}))()},methods:{handleLoad:function(){var e=this;return a(regeneratorRuntime.mark(function t(){var n,o,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.documentElement.scrollTop||document.body.scrollTop,o=document.documentElement.clientHeight||document.body.clientHeight,r=document.documentElement.scrollHeight||document.body.scrollHeight,!(n+o>=r-200)||e.busy){t.next=10;break}if(e.busy=!0,!(e.vList.length<e.iTotal)){t.next=9;break}return e.iPageNo++,t.next=9,e.getUserFollowCollection();case 9:e.busy=!1;case 10:case"end":return t.stop()}},t,e)}))()},handleReset:function(){this.vList=[],this.iTotal=0,this.iPageNo=0,this.getUserFollowCollection()},getUserFollowCollection:function(){var e=this;return a(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.GetUserFollowCollection({iPageNo:e.iPageNo,iPageNum:e.iPageNum,iUserId:e.userInfo.iUserId,sWallet:e.token});case 2:n=t.sent,e.iTotal=n.iTotal,e.vList=e.vList.concat(n.vCollections),console.log(e.vList);case 6:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"erax-collection-list"},[e.vList.length>0?e._l(e.vList,function(t,n){return o("router-link",{key:n,attrs:{to:{name:"collection",query:{iCollectionId:t.iCollectionId}}}},[o("el-card",{staticClass:"item",attrs:{shadow:"hover"}},[o("img",{staticClass:"image",attrs:{src:t.sLogoImg}}),e._v(" "),o("div",{staticClass:"desc"},[o("el-tooltip",{attrs:{content:t.sCollectionName,placement:"top"}},[o("p",{staticClass:"name"},[e._v(e._s(t.sCollectionName))])])],1)])],1)}):o("div",{staticClass:"erax-sv-empty"},[o("img",{attrs:{src:n("2igd"),alt:""}})])],2)},staticRenderFns:[]};var l=n("VU/8")(s,c,!1,function(e){n("tykn")},"data-v-abd32ff0",null);t.default=l.exports},tykn:function(e,t){}});