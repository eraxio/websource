webpackJsonp([23],{FjPy:function(t,e){},WYEY:function(t,e,a){"use strict";function n(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function n(s,r){try{var i=e[s](r),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{iPageNo:0,iPageNum:15,iCount:0,iTotal:0,tableData:[]}},mounted:function(){this.updateView()},methods:{onPageChange:function(t){var e=this;return n(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.iPageNo=t-1,a.next=3,e.updateView();case 3:case"end":return a.stop()}},a,e)}))()},updateView:function(){var t=this;return n(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.GetTransactionsList({iPageNo:t.iPageNo,iPageNum:t.iPageNum});case 2:a=e.sent,t.iCount=a.iCount,t.iTotal=a.iTotal,t.tableData=[],t.$nextTick(function(){t.tableData=a.vData});case 7:case"end":return e.stop()}},e,t)}))()},getShowNum:function(t,e){return this.$util.cutStrMid(t,e)},toAssets:function(t){var e=t.sContractAddress,a=t.sTokenId;window.open(window.location.origin+"/assets/"+e+"/"+a)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"listing"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("message.transactions_1")))]),t._v(" "),a("div",{staticClass:"desc"},[t._v(t._s(t.$t("message.transactions_2")))]),t._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{attrs:{data:t.tableData,stripe:"",border:"","empty-text":" "}},[a("el-table-column",{attrs:{prop:"iNo",label:t.$t("message.transactions_3"),width:"58"}}),t._v(" "),a("el-table-column",{attrs:{prop:"iEventTime",label:t.$t("message.transactions_4"),width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return a("div",{},[a("span",[t._v(t._s(t.$util.formatTimeBySecond(n.iEventTime)))])])}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sItemName",label:t.$t("message.transactions_5"),width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return a("div",{},[a("div",{staticClass:"link item line1hidden",staticStyle:{width:"160px"},attrs:{href:"",target:"_blank"},on:{click:function(e){return t.toAssets(n)}}},[t._v(t._s(n.sItemName)+"\n                    ")])])}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"Currency Type",label:t.$t("message.transactions_6"),width:"144"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return a("div",{staticClass:"currency"},[a("img",{staticClass:"icon",attrs:{src:n.sCurrencyIcon,alt:""}}),t._v(" "),a("span",[t._v(t._s(n.sCurrency))])])}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"iPrice",label:t.$t("message.assets_lang_17"),width:"93"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return a("div",{},[a("span",[t._v(t._s(parseFloat(n.iPrice).toFixed(3)))])])}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sWalletFrom",label:t.$t("message.assets_lang_8"),width:"236"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return a("div",{},[a("div",{staticClass:"link item",attrs:{href:"",target:"_blank"},on:{click:function(e){return t.$util.toAddress(n.sWalletFrom)}}},[t._v(t._s(t.getShowNum(n.sWalletFrom,22))+"\n                    ")])])}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sWalletTo",label:t.$t("message.assets_lang_9")},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return a("div",{},[a("div",{staticClass:"link item",attrs:{href:"",target:"_blank"},on:{click:function(e){return t.$util.toAddress(n.sWalletTo)}}},[t._v(t._s(t.getShowNum(n.sWalletTo,22))+"\n                    ")])])}}])})],1)],1),t._v(" "),a("el-pagination",{attrs:{background:"","hide-on-single-page":!0,layout:"prev, pager, next","page-size":t.iPageNum,total:t.iTotal},on:{"current-change":t.onPageChange}})],1)},staticRenderFns:[]};var i=a("VU/8")(s,r,!1,function(t){a("FjPy")},"data-v-105315aa",null);e.default=i.exports}});