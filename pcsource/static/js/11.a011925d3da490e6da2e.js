webpackJsonp([11],{QEPz:function(t,e){},f5ie:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("WnJJ"),o=s("QxMA"),r={name:"collectionsSuccess",props:{value:{type:Boolean,default:!1},form:{type:Object,default:function(){}}},components:{iMedia:o.a},data:function(){return{isShow:this.value}},watch:{value:function(t){this.isShow=t}},methods:{handleCreateProduct:function(){"collection"!==this.$route.name&&this.$router.push({name:"collection",query:{iCollectionId:this.form.iCollectionId}}),this.$emit("input",!1)},onClosed:function(){this.$emit("input",!1)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{"append-to-body":"",width:"500px",visible:t.isShow,"close-on-click-modal":!1,"show-close":!1},on:{"update:visible":function(e){t.isShow=e}}},[s("div",{staticClass:"dialog-success"},[s("i",{staticClass:"dialog-close el-icon-close",on:{click:t.onClosed}}),t._v(" "),s("i",{staticClass:"dialog-success-icon el-icon-success"}),t._v(" "),s("h1",{staticClass:"dialog-success-title"},[s("b",{staticStyle:{"margin-right":"3px"}},[t._v(t._s(t.form.sCollectionName))]),t._v(t._s(t.$t("message.Other_27")))]),t._v(" "),s("iMedia",{staticClass:"dialog-success-img",attrs:{url:t.form.sLogoImg}}),t._v(" "),s("el-button",{staticClass:"dialog-success-btn",on:{click:t.handleCreateProduct}},[t._v(t._s(t.$t("message.Other_29")))])],1)])},staticRenderFns:[]};var n=s("VU/8")(r,a,!1,function(t){s("QEPz")},"data-v-66ffa8a0",null).exports,c=s("Pgpu"),l=s.n(c),u=s("JrLM"),m=s("NYxO"),f=s("TIfe"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};function v(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,s){return function i(o,r){try{var a=e[o](r),n=a.value}catch(t){return void s(t)}if(!a.done)return Promise.resolve(n).then(function(t){i("next",t)},function(t){i("throw",t)});t(n)}("next")})}}var h={name:"collectionsCreate",props:{value:{type:Boolean,default:!1}},data:function(){return{isShow:this.value,isDisabled:!0,eraxDictData:[],eraxDictDatas:{},rules:this.getRules(),form:{},dialogSuccess:!1,myConfig:this.$store.state.app.ueditorConfig}},components:{ElUploader:i.a,VueUeditorWrap:l.a,collectionsSuccess:n},computed:d({},Object(m.b)(["token","userInfo"])),watch:{token:function(t){return t},value:function(t){this.isShow=t},userInfo:function(t){return t},form:{deep:!0,handler:function(t){this.isDisabled=!(t.sLogoImg&&t.sCollectionName&&t.iCategory&&""!==t.sDescription)}}},mounted:function(){var t=this;return v(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.eraxGetDictData();case 2:case"end":return e.stop()}},e,t)}))()},methods:{eraxGetDictData:function(){var t=this;return v(regeneratorRuntime.mark(function e(){var s,i,o,r,a,n,c,l,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.GetDictData({iDictType:1});case 2:if(!(s=e.sent).vDictData){e.next=27;break}for(i=s.vDictData.map(function(t){return d({},t,{sDictText:"message."+(s.sDictType+t.iDictSort)})}),t.eraxDictData=i,o={},r=!0,a=!1,n=void 0,e.prev=10,c=i[Symbol.iterator]();!(r=(l=c.next()).done);r=!0)u=l.value,o[+u.sDictValue]=u;e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),a=!0,n=e.t0;case 18:e.prev=18,e.prev=19,!r&&c.return&&c.return();case 21:if(e.prev=21,!a){e.next=24;break}throw n;case 24:return e.finish(21);case 25:return e.finish(18);case 26:t.eraxDictDatas=o;case 27:case"end":return e.stop()}},e,t,[[10,14,18,26],[19,,21,25]])}))()},handleSave:function(){var t=this;return v(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)();case 2:if(t.userInfo.iUserId){e.next=5;break}return e.next=5,f.a.GetUserInfo();case 5:t.$refs.form.validate(function(){var e=v(regeneratorRuntime.mark(function e(s){var i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=9;break}return e.next=3,t.$api.CreateCollection(d({iUserId:t.userInfo.iUserId},t.form,{sWallet:t.token}));case 3:i=e.sent,o=i.stCollection,t.form=o,t.dialogSuccess=!0,t.$emit("input",!1),t.$emit("callBack",!1);case 9:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}},e,t)}))()},resetForm:function(){var t=this;this.form={},this.$nextTick(function(){t.$refs.form.clearValidate()})},handleSuccess:function(t){this.$set(this.form,"sLogoImg",t),this.$refs.form.validateField("sLogoImg")},handleRemove:function(){this.$set(this.form,"sLogoImg","")},beforeAvatarUpload:function(t){var e=t.size/1024/1024<=100;return e||this.$message.error("上传图片大小不能超过 100MB!"),e},getShopDetail:function(t){var e=this;return v(regeneratorRuntime.mark(function s(){var i,o,r;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i={iUserId:1002,iCollectionId:t},s.next=3,e.$api.GetCollectionDetail(i);case 3:o=s.sent,(r=o.stCollection)&&(e.form=d({},r,{iCategory:parseInt(r.stCategory.sDictValue),isEdit:!0}));case 6:case"end":return s.stop()}},s,e)}))()},getRules:function(){return{sLogoImg:[{required:!0,message:"请上传LOGO",trigger:["blur","change"]}],sCollectionName:[{required:!0,message:"店铺名称不能为空",trigger:"blur"}],iCategory:[{type:"number",required:!0,message:"分类不能为空",trigger:["blur","change"]}],sDescription:[{required:!0,message:"描述不能为空",trigger:["blur","change"]}]}},handleClose:function(){this.$emit("input",!1)}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{staticClass:"erax-dialog",attrs:{title:t.$t("message.Collections_04"),"append-to-body":"",center:"",width:"700px",visible:t.isShow,"close-on-click-modal":!1},on:{"update:visible":function(e){t.isShow=e},close:t.handleClose}},[s("p",{staticClass:"dialog-des",staticStyle:{margin:"0 40px 30px 40px"}},[t._v(t._s(t.$t("message.Other_03")))]),t._v(" "),s("el-form",{ref:"form",staticClass:"form-box",attrs:{model:t.form,rules:t.rules}},[s("el-form-item",{staticClass:"form-item",attrs:{prop:"sLogoImg"}},[s("div",{staticClass:"form-item-header"},[s("h4",{staticClass:"form-item-title"},[t._v(t._s(t.$t("message.Other_04"))+" *")]),t._v(" "),s("h4",{staticClass:"form-item-des"},[t._v("("+t._s(t.$t("message.Accounts_43"))+":350 x 350)")])]),t._v(" "),s("div",{staticClass:"form-content"},[s("ElUploader",{attrs:{imgUrl:t.form.sLogoImg,"on-success":t.handleSuccess,onRemove:t.handleRemove}})],1)]),t._v(" "),s("el-form-item",{staticClass:"form-item",attrs:{prop:"sCollectionName"}},[s("div",{staticClass:"form-item-header"},[s("h4",{staticClass:"form-item-title"},[t._v(t._s(t.$t("message.Collections_09"))+" *")])]),t._v(" "),s("el-input",{attrs:{maxlength:64},model:{value:t.form.sCollectionName,callback:function(e){t.$set(t.form,"sCollectionName",e)},expression:"form.sCollectionName"}})],1),t._v(" "),s("el-form-item",{staticClass:"form-item",attrs:{prop:"iCategory"}},[s("div",{staticClass:"form-item-header"},[s("h4",{staticClass:"form-item-title"},[t._v(t._s(t.$t("message.Other_05"))+" *")]),t._v(" "),s("h4",{staticClass:"form-item-des"},[t._v(t._s(t.$t("message.Other_16")))])]),t._v(" "),s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.$t("message.assets_lang_74")},model:{value:t.form.iCategory,callback:function(e){t.$set(t.form,"iCategory",e)},expression:"form.iCategory"}},[t.form.iCategory||0===t.form.iCategory?s("img",{staticClass:"select-icon",attrs:{slot:"prefix",src:t.eraxDictDatas[t.form.iCategory].sDictIcon},slot:"prefix"}):t._e(),t._v(" "),t._l(t.eraxDictData,function(e){return s("el-option",{key:e.iDictSort,attrs:{label:t.$t(e.sDictText),value:e.iDictSort}},[s("p",{staticClass:"item-icon-select"},[s("img",{attrs:{src:e.sDictIcon}}),t._v(" "),s("span",[t._v(t._s(t.$t(e.sDictText)))])])])})],2)],1),t._v(" "),s("el-form-item",{staticClass:"form-item",attrs:{prop:"sDescription"}},[s("div",{staticClass:"form-item-header"},[s("h4",{staticClass:"form-item-title"},[t._v(t._s(t.$t("message.Collections_08"))+" *")]),t._v(" "),s("h4",{staticClass:"form-item-des"},[t._v(t._s(t.$t("message.Other_18")))])]),t._v(" "),s("VueUeditorWrap",{attrs:{config:t.myConfig},model:{value:t.form.sDescription,callback:function(e){t.$set(t.form,"sDescription",e)},expression:"form.sDescription"}})],1)],1),t._v(" "),s("div",{staticClass:"form-item-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"form-btn create",attrs:{type:"primary",disabled:t.isDisabled},on:{click:t.handleSave}},[t._v(t._s(t.$t("message.Collections_05"))+"\n      ")])],1)],1),t._v(" "),s("collectionsSuccess",{attrs:{form:t.form},model:{value:t.dialogSuccess,callback:function(e){t.dialogSuccess=e},expression:"dialogSuccess"}})],1)},staticRenderFns:[]};var g={name:"collectionsList",components:{collectionsCreate:s("VU/8")(h,p,!1,function(t){s("yNxJ")},"data-v-62435dc0",null).exports},data:function(){return{dialogVisible:!1,list:[],temp:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t})({},Object(m.b)(["token"])),watch:{token:function(){this.getGetCollectionList()}},activated:function(){this.getGetCollectionList()},mounted:function(){},methods:{toCollectionDetail:function(t){this.$router.push({name:"collection",query:{id:t.iCollectionId}})},callBack:function(){this.getGetCollectionList()},getGetCollectionList:function(){var t,e=this;return(t=regeneratorRuntime.mark(function t(){var s,i,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return s=t.sent,i={iUserId:1002,sWallet:s[0]},t.next=6,e.$api.GetCollectionList(i);case 6:o=t.sent,e.list=o.vCollections;case 8:case"end":return t.stop()}},t,e)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,s){return function i(o,r){try{var a=e[o](r),n=a.value}catch(t){return void s(t)}if(!a.done)return Promise.resolve(n).then(function(t){i("next",t)},function(t){i("throw",t)});t(n)}("next")})})()},onClickCreate:function(){this.$refs.shopEdit.resetForm(),this.dialogVisible=!0}},deactivated:function(){this.dialogVisible=!1}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"create"},[i("div",{staticClass:"create-container"},[i("div",{staticClass:"create-container-header"},[i("div",{staticClass:"header"},[i("h1",{staticClass:"container-title"},[t._v(t._s(t.$t("message.Collections_01")))]),t._v(" "),i("p",{staticClass:"container-description"},[t._v("\n          "+t._s(t.$t("message.Collections_02"))+t._s(t.$t("message.Collections_03"))+"\n          ")])])]),t._v(" "),i("div",{staticClass:"list-container"},[i("div",{staticClass:"list"},[i("el-card",{staticClass:"item add",attrs:{shadow:"hover"}},[i("img",{staticClass:"icon-shop",attrs:{src:s("fML6")}}),t._v(" "),i("div",{staticClass:"shop-title"},[t._v(t._s(t.$t("message.Collections_04")))]),t._v(" "),i("el-button",{staticClass:"btn",on:{click:t.onClickCreate}},[t._v(t._s(t.$t("message.Collections_05")))])],1),t._v(" "),t._l(t.list,function(e,s){return i("router-link",{key:s,attrs:{to:{name:"collection",query:{iCollectionId:e.iCollectionId}}}},[i("el-card",{staticClass:"item",attrs:{shadow:"hover"}},[i("img",{staticClass:"image",attrs:{src:e.sLogoImg}}),t._v(" "),i("div",{staticClass:"desc"},[i("el-tooltip",{attrs:{content:e.sCollectionName,placement:"top"}},[i("p",{staticClass:"name"},[t._v(t._s(e.sCollectionName))])])],1)])],1)})],2)])]),t._v(" "),i("collectionsCreate",{ref:"shopEdit",on:{callBack:t.callBack},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}})],1)},staticRenderFns:[]};var _=s("VU/8")(g,C,!1,function(t){s("xPxu")},"data-v-51fec4e5",null);e.default=_.exports},xPxu:function(t,e){},yNxJ:function(t,e){}});