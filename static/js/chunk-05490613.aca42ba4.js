(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05490613","chunk-2d23797f"],{"2dee":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("el-tabs",{model:{value:e.activeTabName,callback:function(a){e.activeTabName=a},expression:"activeTabName"}},[t("el-tab-pane",{attrs:{label:"用户信息",name:"userinfo"}},[t("el-form",{ref:"from",attrs:{model:e.formData,rules:e.rules,"label-position":"top",size:"mini"}},[t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"userName",label:"用户名称"}},[t("el-input",{attrs:{size:"mini",clearable:""},model:{value:e.formData.userName,callback:function(a){e.$set(e.formData,"userName",a)},expression:"formData.userName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"surname",label:"姓"}},[t("el-input",{attrs:{size:"mini",clearable:""},model:{value:e.formData.surname,callback:function(a){e.$set(e.formData,"surname",a)},expression:"formData.surname"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"name",label:"名"}},[t("el-input",{attrs:{size:"mini",clearable:""},model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"password",label:"密码"}},[t("el-input",{attrs:{size:"mini",clearable:""},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"email",label:"邮箱地址"}},[t("el-input",{attrs:{size:"mini",clearable:""},model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"contractType",label:"手机号"}},[t("el-input",{attrs:{size:"mini",clearable:""},model:{value:e.formData.phoneNumber,callback:function(a){e.$set(e.formData,"phoneNumber",a)},expression:"formData.phoneNumber"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"lockoutEnabled",label:"登录失败,账户被锁定"}},[t("el-switch",{model:{value:e.formData.lockoutEnabled,callback:function(a){e.$set(e.formData,"lockoutEnabled",a)},expression:"formData.lockoutEnabled"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{prop:"twoFactorEnabled",label:"二次认证"}},[t("el-switch",{model:{value:e.formData.twoFactorEnabled,callback:function(a){e.$set(e.formData,"twoFactorEnabled",a)},expression:"formData.twoFactorEnabled"}})],1)],1)],1)],1)],1),e._v(" "),t("el-tab-pane",{attrs:{label:"角色",name:"roles"}},[t("el-form",{attrs:{size:"mini"}},[t("el-form-item",[t("el-checkbox-group",{model:{value:e.formData.roleNames,callback:function(a){e.$set(e.formData,"roleNames",a)},expression:"formData.roleNames"}},e._l(e.roles,(function(e,a){return t("el-checkbox",{key:a,attrs:{label:e.name,name:"role"}})})),1)],1)],1)],1),e._v(" "),t("el-divider"),e._v(" "),t("div",{staticClass:"from-footer"},[t("el-button",{attrs:{size:"mini"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submitForm}},[e._v("提交")])],1)],1)],1)},s=[],o=(t("7f7f"),t("96cf"),t("3b8d")),l=t("9744"),n=t("fab2"),i=t("fc7c"),m={name:"UserCreateOrEditForm",mixins:[l["a"]],props:{isCreate:{type:Boolean,default:!1},userId:{type:String,default:""},roles:{type:Array,default:function(){return[]}}},data:function(){return{activeTabName:"userinfo",formData:Object.assign({},i["viewModel"]),rules:i["rules"]}},watch:{userId:{immediate:!0,handler:function(){this.get()}}},methods:{get:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var a,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.userId){e.next=10;break}return i["rules"]["password"][0].required=!1,e.next=4,n["a"].get(this.userId);case 4:return a=e.sent,this.formData=Object.assign(this.formData,a),e.next=8,n["a"].getRoles(this.userId);case 8:t=e.sent,this.formData.roleNames=t.items.map((function(e){return e.name}));case 10:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),submitForm:function(){var e=this;this.$refs.from.validate((function(a){if(!a)return!1;var t=null;t=e.isCreate?e.doPost():e.doPut(),t.then((function(){e.$message("提交成功"),e.$emit("successful"),e.formData=Object.assign({},i["viewModel"]),e.$refs.from.resetFields()}))}))},doPost:function(){return n["a"].post(this.formData)},doPut:function(){return n["a"].put(this.userId,this.formData)},cancel:function(){this.$emit("cancel")}}},u=m,c=t("2877"),f=Object(c["a"])(u,r,s,!1,null,null,null);a["default"]=f.exports},9744:function(e,a,t){"use strict";var r={data:function(){return{labelWidth:120}},methods:{}};a["a"]=r},fc7c:function(e,a,t){"use strict";t.r(a),t.d(a,"viewModel",(function(){return r})),t.d(a,"rules",(function(){return s}));var r={userName:"",name:"",surname:"",password:"",email:"",phoneNumber:"",lockoutEnabled:!0,twoFactorEnabled:!0,roleNames:[]},s={userName:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"}]}}}]);