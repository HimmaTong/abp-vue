(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50ac3036","chunk-2d0aab6a"],{1131:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"编辑角色",visible:e.dialogVisible,"before-close":e.beforeClose,width:e.dialogWidth},on:{close:e.closeDialog}},[e.dialogVisible?i("RoleCreateOrEditForm",{attrs:{"role-id":e.roleId},on:{cancel:e.onCancel,successful:e.onSuccessful}}):e._e()],1)},o=[],n=i("647b"),l=i("456d1"),s={name:"RoleEditDialog",components:{RoleCreateOrEditForm:n["default"]},mixins:[l["a"]],props:{roleId:{type:String,default:""}}},r=s,c=i("2877"),u=Object(c["a"])(r,a,o,!1,null,null,null);t["default"]=u.exports},"11d8":function(e,t,i){"use strict";i.r(t),i.d(t,"viewModel",(function(){return a})),i.d(t,"rules",(function(){return o}));var a={name:"",isDefault:null,isPublic:null},o={name:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:0,max:256,message:"长度在 0 到 256 个字符",trigger:"blur"}],isDefault:[{type:"boolean",message:"isDefault 必须为 boolean",trigger:"change"}],isPublic:[{type:"boolean",message:"isPublic 必须为 boolean",trigger:"change"}]}},"647b":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("el-form",{ref:"from",attrs:{model:e.formData,rules:e.rules,"label-width":"120px","label-position":"top",size:"mini"}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{prop:"name",label:"角色名称"}},[i("el-input",{staticClass:"form-item",attrs:{size:"mini",disabled:e.formData.isStatic,clearable:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{prop:"isDefault",label:"默认"}},[i("el-switch",{model:{value:e.formData.isDefault,callback:function(t){e.$set(e.formData,"isDefault",t)},expression:"formData.isDefault"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{prop:"isPublic",label:"公开"}},[i("el-switch",{model:{value:e.formData.isPublic,callback:function(t){e.$set(e.formData,"isPublic",t)},expression:"formData.isPublic"}})],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"from-footer"},[i("el-button",{attrs:{size:"mini"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submitForm}},[e._v("提交")])],1)],1)},o=[],n=i("9744"),l=i("8988"),s=i("11d8"),r={name:"RoleCreateOrEditForm",mixins:[n["a"]],props:{isCreate:{type:Boolean,default:!1},roleId:{type:String,default:""}},data:function(){return{formData:Object.assign({},s["viewModel"]),rules:s["rules"]}},watch:{roleId:{immediate:!0,handler:function(){this.get()}}},methods:{get:function(){var e=this;this.roleId&&l["a"].get(this.roleId).then((function(t){e.formData=Object.assign(e.formData,t)}))},submitForm:function(){var e=this;this.$refs.from.validate((function(t){if(!t)return!1;var i=null;i=e.isCreate?e.doPost():e.doPut(),i.then((function(){e.$message("提交成功"),e.$emit("successful"),e.formData=Object.assign({},s["viewModel"]),e.$refs.from.resetFields()}))}))},doPost:function(){return l["a"].post(this.formData)},doPut:function(){return l["a"].put(this.roleId,this.formData)},cancel:function(){this.$refs.from.resetFields(),this.$emit("cancel")}}},c=r,u=i("2877"),d=Object(u["a"])(c,a,o,!1,null,null,null);t["default"]=d.exports},"6c35":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-full-container"},[i("div",{staticClass:"app-full-header"},[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["AbpIdentity.Roles.Create"],expression:"['AbpIdentity.Roles.Create']"}],staticClass:"header-item-btn",attrs:{type:"success",size:"mini"},on:{click:e.create}},[e._v("新增")])],1),e._v(" "),i("div",{staticClass:"app-full-body"},[i("el-table",{attrs:{data:e.tableData,"highlight-current-row":"",size:"small"},on:{"sort-change":e.onSortChange}},[i("el-table-column",{attrs:{prop:"name",label:"名称",sortable:"custom"}}),e._v(" "),i("el-table-column",{attrs:{prop:"isDefault",label:"是否默认",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("formatBoolean")(t.row.isDefault))+"\n        ")]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"isPublic",label:"是否公开",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("formatBoolean")(t.row.isPublic))+"\n        ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["AbpIdentity.Roles.Update"],expression:"['AbpIdentity.Roles.Update']"}],attrs:{type:"primary",icon:"el-icon-edit",underline:!1},on:{click:function(i){return e.edit(t.row)}}}),e._v(" "),i("el-link",{directives:[{name:"permission",rawName:"v-permission",value:["AbpIdentity.Roles.ManagePermissions"],expression:"['AbpIdentity.Roles.ManagePermissions']"}],attrs:{type:"primary",icon:"el-icon-setting",underline:!1},on:{click:function(i){return e.permissionGrant(t.row)}}}),e._v(" "),t.row.isStatic?e._e():i("el-popconfirm",{directives:[{name:"permission",rawName:"v-permission",value:["AbpIdentity.Roles.Delete"],expression:"['AbpIdentity.Roles.Delete']"}],attrs:{placement:"top",title:"确定删除此项？"},on:{onConfirm:function(i){return e.del(t.row)}}},[i("el-link",{attrs:{slot:"reference",type:"danger",underline:!1,icon:"el-icon-delete"},slot:"reference"})],1)]}}])})],1)],1),e._v(" "),i("div",{staticClass:"app-full-footer"},[i("pagination",{attrs:{total:e.pagination.totalCount,page:e.pagination.pageIndex,limit:e.query.maxResultCount},on:{"update:page":function(t){return e.$set(e.pagination,"pageIndex",t)},"update:limit":function(t){return e.$set(e.query,"maxResultCount",t)},pagination:e.onPagination}})],1),e._v(" "),i("CreateDialog",{attrs:{visible:e.createDialogVisible,"close-confirm":!0,"dialog-width":"500px"},on:{"update:visible":function(t){e.createDialogVisible=t},close:e.dialogClose}}),e._v(" "),i("EditDialog",{attrs:{visible:e.editDialogVisible,"role-id":e.editRoleId,"close-confirm":!0,"dialog-width":"500px"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.dialogClose}}),e._v(" "),i("MenuGrant",{attrs:{visible:e.permissionGrantDialogVisible,"close-confirm":!0,"provider-key":e.permissionGrantProviderKey,"provider-name":"R",name:e.permissionGrantName,"dialog-width":"700px"},on:{"update:visible":function(t){e.permissionGrantDialogVisible=t},close:e.dialogClose}})],1)},o=[],n=(i("7f7f"),i("fd95")),l=i("8988"),s=i("333d"),r=i("b6b4"),c=i("1131"),u=i("78ef"),d={name:"Index",components:{CreateDialog:r["default"],EditDialog:c["default"],Pagination:s["a"],MenuGrant:u["a"]},mixins:[n["a"]],data:function(){return{createDialogVisible:!1,editDialogVisible:!1,permissionGrantDialogVisible:!1,editRoleId:"",permissionGrantName:"",permissionGrantProviderKey:"",query:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;l["a"].getList(this.query).then((function(t){e.tableData=t.items,e.updateTotalCount(t.totalCount)}))},dialogClose:function(e){e&&this.getList(),this.editRoleId=null},create:function(){this.createDialogVisible=!0},edit:function(e){this.editRoleId=e.id,this.editDialogVisible=!0},del:function(e){var t=this;l["a"].delete(e.id).then((function(){t.$message("删除成功"),t.getList()}))},permissionGrant:function(e){this.permissionGrantProviderKey=e.name,this.permissionGrantName=e.name,this.permissionGrantDialogVisible=!0}}},m=d,f=i("2877"),p=Object(f["a"])(m,a,o,!1,null,null,null);t["default"]=p.exports},b6b4:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"新增角色",visible:e.dialogVisible,"before-close":e.beforeClose,width:e.dialogWidth},on:{close:e.closeDialog}},[e.dialogVisible?i("RoleCreateOrEditForm",{attrs:{"is-create":!0},on:{cancel:e.onCancel,successful:e.onSuccessful}}):e._e()],1)},o=[],n=i("647b"),l=i("456d1"),s={name:"RoleCreateDialog",components:{RoleCreateOrEditForm:n["default"]},mixins:[l["a"]],props:{}},r=s,c=i("2877"),u=Object(c["a"])(r,a,o,!1,null,null,null);t["default"]=u.exports}}]);