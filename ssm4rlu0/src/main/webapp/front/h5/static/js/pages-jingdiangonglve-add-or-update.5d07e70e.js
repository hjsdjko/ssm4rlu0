(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jingdiangonglve-add-or-update"],{1063:function(e,r,n){var t=n("116f");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=n("4f06").default;i("09642154",t,!0,{sourceMap:!1,shadowMode:!1})},"116f":function(e,r,n){var t=n("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-63f1fee4]{padding:%?20?%}.content[data-v-63f1fee4]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-63f1fee4]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-63f1fee4]{width:%?180?%}.avator[data-v-63f1fee4]{width:%?150?%;height:%?60?%}.right-input[data-v-63f1fee4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-63f1fee4]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-63f1fee4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-63f1fee4]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-63f1fee4]{border:0}.cu-form-group uni-input[data-v-63f1fee4]{padding:0 %?30?%}.uni-input[data-v-63f1fee4]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-63f1fee4]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-63f1fee4]::after{line-height:%?88?%}.select .uni-input[data-v-63f1fee4]{line-height:%?88?%}.input .right-input[data-v-63f1fee4]{line-height:%?110?%}',""]),e.exports=r},"24e2":function(e,r,n){"use strict";var t,i=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("v-uni-view",{staticClass:"content"},[n("v-uni-form",{staticClass:"app-update-pv"},[n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("攻略标题")]),n("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.gonglvebiaoti,placeholder:"攻略标题"},model:{value:e.ruleForm.gonglvebiaoti,callback:function(r){e.$set(e.ruleForm,"gonglvebiaoti",r)},expression:"ruleForm.gonglvebiaoti"}})],1),n("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("景点名称")]),n("v-uni-picker",{attrs:{value:e.jingdianmingchengIndex,range:e.jingdianmingchengOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.jingdianmingchengChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.jingdianmingcheng?e.ruleForm.jingdianmingcheng:"请选择景点名称"))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("出发城市")]),n("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.chufachengshi,placeholder:"出发城市"},model:{value:e.ruleForm.chufachengshi,callback:function(r){e.$set(e.ruleForm,"chufachengshi",r)},expression:"ruleForm.chufachengshi"}})],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("行程天数")]),n("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.xingchengtianshu,placeholder:"行程天数"},model:{value:e.ruleForm.xingchengtianshu,callback:function(r){e.$set(e.ruleForm,"xingchengtianshu",r)},expression:"ruleForm.xingchengtianshu"}})],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("行程距离")]),n("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.xingchengjuli,placeholder:"行程距离"},model:{value:e.ruleForm.xingchengjuli,callback:function(r){e.$set(e.ruleForm,"xingchengjuli",r)},expression:"ruleForm.xingchengjuli"}})],1),n("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("交通工具")]),n("v-uni-picker",{attrs:{value:e.jiaotonggongjuIndex,range:e.jiaotonggongjuOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.jiaotonggongjuChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.jiaotonggongju?e.ruleForm.jiaotonggongju:"请选择交通工具"))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.jingdianfengmianTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("景点封面")]),n("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.jingdianfengmian?n("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.jingdianfengmian,mode:"aspectFill"}}):n("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("行程路线")]),n("v-uni-textarea",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"行程路线"},model:{value:e.ruleForm.xingchengluxian,callback:function(r){e.$set(e.ruleForm,"xingchengluxian",r)},expression:"ruleForm.xingchengluxian"}})],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("攻略详情")]),n("v-uni-textarea",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"攻略详情"},model:{value:e.ruleForm.gonglvexiangqing,callback:function(r){e.$set(e.ruleForm,"gonglvexiangqing",r)},expression:"ruleForm.gonglvexiangqing"}})],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},o=[];n.d(r,"b",(function(){return i})),n.d(r,"c",(function(){return o})),n.d(r,"a",(function(){return t}))},"42d2":function(e,r,n){"use strict";var t=n("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n("ac6a"),n("28a5"),n("96cf");var i=t(n("3b8d")),o=t(n("e2b1")),a={data:function(){return{ruleForm:{gonglvebiaoti:"",jingdianmingcheng:"",chufachengshi:"",xingchengtianshu:"",xingchengjuli:"",jiaotonggongju:"",xingchengluxian:"",jingdianfengmian:"",gonglvexiangqing:"",thumbsupnum:"",crazilynum:""},jingdianmingchengOptions:[],jingdianmingchengIndex:0,jiaotonggongjuOptions:[],jiaotonggongjuIndex:0,user:{},ro:{gonglvebiaoti:!1,jingdianmingcheng:!1,chufachengshi:!1,xingchengtianshu:!1,xingchengjuli:!1,jiaotonggongju:!1,xingchengluxian:!1,jingdianfengmian:!1,gonglvexiangqing:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(r){var n,t,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:return t=e.sent,this.user=t.data,e.next=7,this.$api.option("jingdianxinxi","jingdianmingcheng",{});case 7:if(t=e.sent,this.jingdianmingchengOptions=t.data,this.jiaotonggongjuOptions="汽车,火车,飞机,其他".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=18;break}return this.ruleForm.id=r.id,e.next=16,this.$api.info("jingdiangonglve",this.ruleForm.id);case 16:t=e.sent,this.ruleForm=t.data;case 18:if(!r.cross){e.next=69;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 21:if((e.t1=e.t0()).done){e.next=69;break}if(o=e.t1.value,"gonglvebiaoti"!=o){e.next=27;break}return this.ruleForm.gonglvebiaoti=i[o],this.ro.gonglvebiaoti=!0,e.abrupt("continue",21);case 27:if("jingdianmingcheng"!=o){e.next=31;break}return this.ruleForm.jingdianmingcheng=i[o],this.ro.jingdianmingcheng=!0,e.abrupt("continue",21);case 31:if("chufachengshi"!=o){e.next=35;break}return this.ruleForm.chufachengshi=i[o],this.ro.chufachengshi=!0,e.abrupt("continue",21);case 35:if("xingchengtianshu"!=o){e.next=39;break}return this.ruleForm.xingchengtianshu=i[o],this.ro.xingchengtianshu=!0,e.abrupt("continue",21);case 39:if("xingchengjuli"!=o){e.next=43;break}return this.ruleForm.xingchengjuli=i[o],this.ro.xingchengjuli=!0,e.abrupt("continue",21);case 43:if("jiaotonggongju"!=o){e.next=47;break}return this.ruleForm.jiaotonggongju=i[o],this.ro.jiaotonggongju=!0,e.abrupt("continue",21);case 47:if("xingchengluxian"!=o){e.next=51;break}return this.ruleForm.xingchengluxian=i[o],this.ro.xingchengluxian=!0,e.abrupt("continue",21);case 51:if("jingdianfengmian"!=o){e.next=55;break}return this.ruleForm.jingdianfengmian=i[o],this.ro.jingdianfengmian=!0,e.abrupt("continue",21);case 55:if("gonglvexiangqing"!=o){e.next=59;break}return this.ruleForm.gonglvexiangqing=i[o],this.ro.gonglvexiangqing=!0,e.abrupt("continue",21);case 59:if("thumbsupnum"!=o){e.next=63;break}return this.ruleForm.thumbsupnum=i[o],this.ro.thumbsupnum=!0,e.abrupt("continue",21);case 63:if("crazilynum"!=o){e.next=67;break}return this.ruleForm.crazilynum=i[o],this.ro.crazilynum=!0,e.abrupt("continue",21);case 67:e.next=21;break;case 69:this.styleChange();case 70:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},jingdianmingchengChange:function(e){this.jingdianmingchengIndex=e.target.value,this.ruleForm.jingdianmingcheng=this.jingdianmingchengOptions[this.jingdianmingchengIndex]},jiaotonggongjuChange:function(e){this.jiaotonggongjuIndex=e.target.value,this.ruleForm.jiaotonggongju=this.jiaotonggongjuOptions[this.jiaotonggongjuIndex]},jingdianfengmianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.jingdianfengmian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.jingdianmingcheng){e.next=3;break}return this.$utils.msg("景点名称不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.xingchengtianshu||this.$validate.isIntNumer(this.ruleForm.xingchengtianshu)){e.next=6;break}return this.$utils.msg("行程天数应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.xingchengjuli||this.$validate.isIntNumer(this.ruleForm.xingchengjuli)){e.next=9;break}return this.$utils.msg("行程距离应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=12;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=15;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 15:if(!this.ruleForm.id){e.next=20;break}return e.next=18,this.$api.update("jingdiangonglve",this.ruleForm);case 18:e.next=22;break;case 20:return e.next=22,this.$api.add("jingdiangonglve",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,n=r.getFullYear(),t=r.getMonth()+1,i=r.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),t=t>9?t:"0"+t,i=i>9?i:"0"+i,"".concat(n,"-").concat(t,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};r.default=a},"771f":function(e,r,n){"use strict";n.r(r);var t=n("42d2"),i=n.n(t);for(var o in t)"default"!==o&&function(e){n.d(r,e,(function(){return t[e]}))}(o);r["default"]=i.a},a45f:function(e,r,n){"use strict";n.r(r);var t=n("24e2"),i=n("771f");for(var o in i)"default"!==o&&function(e){n.d(r,e,(function(){return i[e]}))}(o);n("d19b");var a,g=n("f0c5"),u=Object(g["a"])(i["default"],t["b"],t["c"],!1,null,"63f1fee4",null,!1,t["a"],a);r["default"]=u.exports},d19b:function(e,r,n){"use strict";var t=n("1063"),i=n.n(t);i.a}}]);