webpackJsonp([6],{XDgP:function(e,t){},mFje:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Xxa5"),i=a.n(o),r=a("exGp"),s=a.n(r);a("//Fk");var n={components:{},name:"Create",data:function(){return{dialogVisible:!1,list:[],temp:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",form:{imageUrl:"",name:"",description:""}}},mounted:function(){this.getGetCollectionList()},methods:{resetForm:function(){this.form={imageUrl:"",name:"",description:""}},toCollectionDetail:function(e){this.$router.push({name:"collection-detail",query:{id:e.iCollectionId}})},getGetCollectionList:function(){var e=this;return s()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.GetCollectionList({iUserId:123});case 2:a=t.sent,e.list=a.vCollections;case 4:case"end":return t.stop()}},t,e)}))()},onClickCreate:function(){this.resetForm(),this.dialogVisible=!0},onClickCollection:function(){var e=this;return s()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.form.imageUrl&&e.form.name){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$api.CreateCollection({iUserId:123,sCollectionName:e.form.name,sDescription:e.form.description,sLogoImg:e.form.imageUrl});case 4:e.getGetCollectionList(),e.dialogVisible=!1;case 6:case"end":return t.stop()}},t,e)}))()},handleAvatarSuccess:function(e,t){e.iRspCode||(this.form.imageUrl=e.data.vUrlPath[0])},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create"},[a("div",{staticClass:"list"},[a("el-card",{staticClass:"item",attrs:{shadow:"hover"}},[a("el-row",[e._v(e._s(e.$t("message.createNewCollection")))]),e._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.onClickCreate}},[e._v("Create")])],1),e._v(" "),e._l(e.list,function(t,o){return a("el-card",{key:o,staticClass:"item",attrs:{shadow:"hover"},nativeOn:{click:function(a){return e.toCollectionDetail(t)}}},[a("img",{staticClass:"image",attrs:{src:t.sLogoImg}}),e._v(" "),a("div",{staticClass:"desc"},[e._v(e._s(t.sCollectionName))])])})],2),e._v(" "),a("el-dialog",{attrs:{title:"Create your collection",visible:e.dialogVisible,width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[e._v("You can change these values later, along with configuring external URLs, payment options, and trading fees.")]),e._v(" "),a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",[a("el-row",[e._v("Logo")]),e._v(" "),a("el-row",[e._v("(350 x 350 recommended)")]),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://192.168.80.202:10001/v1/oss/PublicUpload","show-file-list":!1,accept:"image/*","on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.form.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.form.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",[a("el-row",[e._v("Name*")]),e._v(" "),a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",[a("el-row",[e._v("Description")]),e._v(" "),a("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.onClickCollection}},[e._v("Create")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(n,l,!1,function(e){a("XDgP")},"data-v-62effd9e",null);t.default=c.exports}});