(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72be7d9c"],{1006:function(e,s,t){},2017:function(e,s,t){"use strict";var o=t("b12d"),r=t.n(o);r.a},"26ca":function(e,s,t){"use strict";var o=t("1006"),r=t.n(o);r.a},"9ed6":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login-container"},[t("div",{staticClass:"imgButtons"},[t("h1",{staticStyle:{color:"#fff"}},[t("a",{attrs:{target:"_blank",href:"https://github.com/wmhello/laravel_template_with_vue",alt:"跳转到开源项目"}},[t("svg-icon",{attrs:{"icon-class":"github"}}),t("span",[e._v("开源项目")])],1)]),e._v(" "),t("h1",{staticStyle:{color:"#fff"}},[t("a",{attrs:{href:e.docAddress,target:"_blank"}},[t("svg-icon",{attrs:{"icon-class":"article"}}),t("span",[e._v("文档")])],1)])]),e._v(" "),t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v("系统登录")])]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{ref:"username",attrs:{placeholder:"登录名",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v("登录")])],1)],1)},r=[],n={name:"Login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",message:"登陆名必须填写"},{min:3,trigger:"blur",message:"登陆名不少于三个字符"}],password:[{required:!0,trigger:"blur",message:"登陆密码必须填写"},{min:3,trigger:"blur",message:"登陆密码不少于6个字符"}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(s){if(!s)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(s){var t=s.response.data;e.$message.error(t.info),e.loading=!1,e.loginForm={username:"",password:""}}))}))}},computed:{docAddress:function(){var e="http://backend.ouenyione.com/";return e+"showdoc/web/#/1"}}},a=n,i=(t("2017"),t("26ca"),t("2877")),l=Object(i["a"])(a,o,r,!1,null,"56f71ad1",null);s["default"]=l.exports},b12d:function(e,s,t){}}]);