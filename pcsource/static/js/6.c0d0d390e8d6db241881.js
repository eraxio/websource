webpackJsonp([6],{SjU2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("bSIt"),o=n("LoaF"),i=n("TIfe"),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,i){try{var a=t[o](i),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})}}var c={name:"favorite",data:function(){return{vList:[],iPageNo:0,iPageNum:8,iTotal:0,busy:!1}},components:{EraxCollection2:o.a},computed:a({},Object(r.b)(["token","userInfo","isUserLogin"])),watch:{token:function(e){return this.handleReset(),e}},mounted:function(){var e=this;return s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.query.uWallet){t.next=3;break}if(e.$route.query.uUserId){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.getUserFollowCollection();case 5:window.addEventListener("scroll",e.handleLoad);case 6:case"end":return t.stop()}},t,e)}))()},beforeDestroy:function(){window.removeEventListener("scroll",this.handleLoad)},methods:{handleLoad:function(){var e=this;return s(regeneratorRuntime.mark(function t(){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.documentElement.scrollTop||document.body.scrollTop,r=document.documentElement.clientHeight||document.body.clientHeight,o=document.documentElement.scrollHeight||document.body.scrollHeight,!(n+r>=o-200)||e.busy){t.next=10;break}if(e.busy=!0,!(e.vList.length<e.iTotal)){t.next=9;break}return e.iPageNo++,t.next=9,e.getUserFollowCollection();case 9:e.busy=!1;case 10:case"end":return t.stop()}},t,e)}))()},handleReset:function(){this.vList=[],this.iTotal=0,this.iPageNo=0,this.getUserFollowCollection()},getUserFollowCollection:function(){var e=this;return s(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isUserLogin){t.next=3;break}return t.next=3,i.a.GetUserInfo();case 3:return t.next=5,e.$api.GetUserFollowCollection({iPageNo:e.iPageNo,iPageNum:e.iPageNum,iUserId:parseInt(e.$route.query.uUserId)||e.userInfo.iUserId,sWallet:e.$route.query.uWallet||e.token});case 5:n=t.sent,e.iTotal=n.iTotal,e.vList=e.vList.concat(n.vCollections);case 8:case"end":return t.stop()}},t,e)}))()}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"erax-collection-list"},[e.vList.length>0?e._l(e.vList,function(t,n){return r("router-link",{key:n,attrs:{to:{name:"collection",query:{iCollectionId:t.iCollectionId}}}},[r("el-card",{staticClass:"item",attrs:{shadow:"hover"}},[r("img",{staticClass:"image",attrs:{src:t.sLogoImg}}),e._v(" "),r("div",{staticClass:"desc"},[r("el-tooltip",{attrs:{content:t.sCollectionName,placement:"top"}},[r("p",{staticClass:"name"},[e._v(e._s(t.sCollectionName))])])],1)])],1)}):r("div",{staticClass:"erax-sv-empty"},[r("img",{attrs:{src:n("2igd"),alt:""}})])],2)},staticRenderFns:[]};var u=n("C7Lr")(c,l,!1,function(e){n("amt5")},"data-v-5cbb252c",null);t.default=u.exports},amt5:function(e,t){}});