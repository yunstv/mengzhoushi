webpackJsonp([26],{"+VOm":function(e,t){},"AZ6/":function(e,t){},FePl:function(e,t){},GdyH:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i=(n("j1ja"),n("uMhA"),n("tvR6"),n("lsjP"),{render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("el-container",[n("el-header",[n("app-header")],1),e._v(" "),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("app-sidebar")],1),e._v(" "),n("el-main",[n("div",{staticClass:"app_components_boxshadow"},[n("router-view")],1)]),e._v(" "),n("el-aside",{staticClass:"app_container_r",attrs:{width:"245px"}},[n("app-clock")],1)],1)],1)],1)},staticRenderFns:[]});var o=n("VU/8")({name:"app",data:function(){return{}},computed:{isloginstate:function(){return this.$store.state.isloginstate}}},i,!1,function(e){n("AZ6/")},null,null).exports,s=n("/ocq"),r=n("Gu7T"),l=n.n(r),u=[{path:"/home",name:"home",component:function(){return n.e(4).then(n.bind(null,"KR8f"))}}],h=[{path:"/user",name:"user",component:function(){return n.e(22).then(n.bind(null,"md3T"))}}],c=[{path:"/editor",name:"editor",components:{default:function(){return n.e(7).then(n.bind(null,"wpTi"))}},children:[{path:"quill-editor",name:"quill-editor",components:{editor:function(){return n.e(3).then(n.bind(null,"slDT"))}}},{path:"markdown",name:"markdown",components:{editor:function(){return n.e(5).then(n.bind(null,"7c7T"))}}}]}],d=[{path:"/game",name:"game",components:{default:function(){return n.e(6).then(n.bind(null,"CXKa"))}},children:[{path:"color-filter",name:"color-filter",components:{game:function(){return n.e(2).then(n.bind(null,"MjRT"))}}},{path:"xiaoxiaole",name:"xiaoxiaole",components:{game:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"Ozu1"))}}},{path:"chaojimali-fyb",name:"chaojimaliSSS",components:{game:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"7fgF"))}}},{path:"chaojimali-jjb",name:"chaojimali",components:{game:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"oofD"))}}},{path:"tuixiangzi",name:"tuixiangzi",components:{game:function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"ZnmS"))}}},{path:"ganji-qi",name:"ganji-qi",components:{game:function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,"Pqb3"))}}},{path:"duimutou",name:"duimutou",components:{game:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"3Wje"))}}},{path:"tanqiu",name:"tanqiu",components:{game:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"H8K2"))}}},{path:"tetris",name:"tetris",components:{game:function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,"xiT7"))}}},{path:"fruit-ninja",name:"fruit-ninja",components:{game:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"4GoR"))}}},{path:"xiangqi",name:"xiangqi",components:{game:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"/jcD"))}}},{path:"flappy",name:"flappy",components:{game:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"bF/u"))}}},{path:"wuziqi",name:"wuziqi",components:{game:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"Ddj+"))}}},{path:"tankedazhan",name:"tankedazhan",components:{game:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"C/ws"))}}}]}],p=[{path:"/",name:"index",component:function(){return n.e(15).then(n.bind(null,"JXTs"))}}].concat(l()(u),l()(h),l()(c),l()(d));a.default.use(s.a);var m=new s.a({routes:p}),f=n("NYxO"),v={SER_ISLOGINSTATE:function(e,t){a.default.set(e,"isloginstate",t)}};a.default.use(f.a);var g=new f.a.Store({state:{isloginstate:"loggiing"},actions:{setIsloginstate:function(e,t){(0,e.commit)("SER_ISLOGINSTATE",t)}},mutations:v,strict:!0}),b=n("zL8q"),w=n.n(b),_=n("//Fk"),x=n.n(_),k=n("woOf"),T=n.n(k),P=n("mtWM"),y=n.n(P).a.create({baseURL:"https://api.github.com/",headers:{Authorization:"token 41cb4cd74d98d94e50715aae289c6051dad986b2"}});y.interceptors.request.use(function(e){return e.headers=T()(e.headers,{}),e},function(e){return x.a.reject(e)}),y.interceptors.response.use(function(e){return localStorage.setItem("GITHUB_API_HEADERS_ETAG",e.headers.etag),e.data},function(e){return x.a.reject(e)}),y.install=function(e){e.prototype.$axios=y};var C=y;a.default.use(w.a),a.default.use(C),function(){function e(e){if("function"!=typeof window.onload)window.onload=e;else{var t=window.onload;window.onload=function(){t(),e()}}}function t(){var e={};for(var t in{Top:"",Left:""}){var n="Top"==t?"Y":"X";void 0!==window["page"+n+"Offset"]?e[t.toLowerCase()]=window["page"+n+"Offset"]:(n=document.documentElement.clientHeight?document.documentElement:document.body,e[t.toLowerCase()]=n["scroll"+t])}return e}function n(e){this.parent=document.body,this.createEl(this.parent,e),this.size=15*Math.random()+15,this.el.style.width=Math.round(this.size)+"px",this.el.style.height=Math.round(this.size)+"px",this.maxLeft=document.body.offsetWidth-this.size,this.maxTop=document.body.offsetHeight-this.size,this.left=Math.random()*this.maxLeft,this.top=t().top+1,this.angle=1.4+.2*Math.random(),this.minAngle=1.4,this.maxAngle=1.6,this.angleDelta=.01*Math.random(),this.speed=2+Math.random()}var a=!1;e(function(){a=!0});var i=!0;window.createSnow=function(o,s){if(a){var r=[],l=setInterval(function(){i&&s>r.length&&Math.random()<.0025*s&&r.push(new n(o)),!i&&!r.length&&clearInterval(l);for(var e=t().top,a=(h=void 0,c=void 0,c=document.body,window.innerHeight?h=window.innerHeight:c.parentElement.clientHeight?h=c.parentElement.clientHeight:c&&c.clientHeight&&(h=c.clientHeight),h),u=r.length-1;u>=0;u--)r[u]&&(r[u].top<e||r[u].top+r[u].size+1>e+a?(r[u].remove(),r[u]=null,r.splice(u,1)):(r[u].move(),r[u].draw()));var h,c},40);u=window,h="scroll",c=function(){for(var e=r.length-1;e>=0;e--)r[e].draw()},u.addEventListener?u.addEventListener(h,c,!1):u.attachEvent&&u.attachEvent("on"+h,c)}else e(function(){createSnow(o,s)});var u,h,c},window.removeSnow=function(){i=!1},n.prototype={createEl:function(e,t){this.el=document.createElement("img"),this.el.setAttribute("src",t+"snow"+Math.floor(4*Math.random())+".gif"),this.el.style.position="absolute",this.el.style.display="block",this.el.style.zIndex="99999",this.parent.appendChild(this.el)},move:function(){(this.angle<this.minAngle||this.angle>this.maxAngle)&&(this.angleDelta=-this.angleDelta),this.angle+=this.angleDelta,this.left+=this.speed*Math.cos(this.angle*Math.PI),this.top-=this.speed*Math.sin(this.angle*Math.PI),this.left<0?this.left=this.maxLeft:this.left>this.maxLeft&&(this.left=0)},draw:function(){this.el.style.top=Math.round(this.top)+"px",this.el.style.left=Math.round(this.left)+"px"},remove:function(){this.parent.removeChild(this.el),this.parent=this.el=null}}}();var S=function(){return createSnow("./static/image/xuehua/",20)},M=function(){return removeSnow()},E={name:"users",data:function(){return{isxuehuashow:!0,value:"关"}},watch:{isxuehuashow:function(){var e=this.isxuehuashow;e?S():M()}},mounted:function(){this.isxuehuashow=!this.isxuehuashow},methods:{}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app_vuser"},[n("el-popover",{ref:"popover",staticStyle:{padding:"0"},attrs:{placement:"top-start",trigger:"hover",width:"130","popper-class":"app_header_navbar_popper"}},[n("div",{staticClass:"app_vuser_setting"},[n("ul",{staticClass:"el-dropdown-menu"},[n("li",{staticClass:"el-dropdown-menu__item"},[e._v("个人资料")]),e._v(" "),n("li",{staticClass:"el-dropdown-menu__item"},[e._v("退出账号")])])])]),e._v(" "),n("span",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}],staticClass:"app_header_navbar_username"},[n("span",{staticClass:"app_header_navbar_username_img"})])],1)},staticRenderFns:[]};var j={name:"navigation",data:function(){return{w:"0",x:"0",navigationList:[{name:"首页",paths:"/"},{name:"博文",paths:"/home"},{name:"相册",paths:"/photo"},{name:"游戏",paths:"/game"},{name:"留言板",paths:"/guestbook"},{name:"关于我",paths:"/about"},{name:"博文头条",paths:"/toutiao"},{name:"写作",paths:"/editor"}]}},mounted:function(){this.routeindeOf()},watch:{$route:function(){this.routeindeOf()}},methods:{routeindeOf:function(){var e=this;this.navigationList.forEach(function(t,n){e.$route.path.indexOf(t.paths)>-1&&e.animation(n)})},animation:function(e){var t=0,n=0;this.$refs.node.forEach(function(a,i){var o=a.offsetWidth;e===i&&(t=o),e>i&&(n+=o)}),this.w=t,this.x=n},tabclick:function(e,t){this.animation(t),e.indexOf("static")>-1?window.open(e):this.$router.push({path:e})}}},z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app_navigation_view"},[e._l(e.navigationList,function(t,a){return n("div",{key:a,ref:"node",refInFor:!0,staticClass:"pull-left node",on:{click:function(n){e.tabclick(t.paths,a)}}},[e._v("\n    "+e._s(t.name)+"\n  ")])}),e._v(" "),n("i",{staticClass:"animation_christensen",style:"width:"+e.w+"px;left:"+e.x+"px;"})],2)},staticRenderFns:[]};var H={components:{appHeaderUser:n("VU/8")(E,I,!1,function(e){n("FePl")},"data-v-8ab3cbb2",null).exports,appHeaderNavigation:n("VU/8")(j,z,!1,function(e){n("GdyH")},null,null).exports},name:"headers",data:function(){return{}},methods:{}},R={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app_header"},[n("div",{staticClass:"app_header_brand"},[e._m(0),e._v(" "),n("div",{staticClass:"pull-left app_navigation"},[n("app-header-navigation")],1)]),e._v(" "),n("div",{staticClass:"app_header_navbar"},[n("app-header-user")],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pull-left app_logo"},[n("span",{staticClass:"app_brand"},[e._v("梦周十")]),e._v(" "),n("p",[e._v("迷离在宇宙中的尘埃")])])}]};var A=n("VU/8")(H,R,!1,function(e){n("+VOm")},null,null).exports,F=n("fZjL"),L=n.n(F),O={name:"sidebar",components:{appSidebarIndex:function(){return n.e(1).then(n.bind(null,"e5kW"))},appSidebarHome:function(){return n.e(19).then(n.bind(null,"poIj"))},appSidebarGame:function(){return n.e(8).then(n.bind(null,"BVGb"))}},data:function(){return{views:{index:!1,home:!1,photo:!1,game:{path:"/game/",show:!1},guestbook:!1,about:!1,toutiao:!1}}},watch:{$route:function(){this.handleviews()}},methods:{handleviews:function(){var e=this.views,t=L()(e),n=this.$route,a=n.name,i=n.path;t.forEach(function(t){var n=!1,o=e[t];a===t&&(n=!0),"boolean"==typeof o?e[t]=n:e[t].show=i.indexOf(o.path)>-1}),this.views=e}}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app_sidebar"},[e.views.index?[n("app-sidebar-index")]:e.views.home?[n("app-sidebar-home")]:e.views.game.show?[n("app-sidebar-game")]:e._e()],2)},staticRenderFns:[]};var q=n("VU/8")(O,$,!1,function(e){n("s/g6")},"data-v-462baa65",null).exports;var D=function(e){var t=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];function n(n){var i=n||new Date;e.time=a(i.getHours(),2)+":"+a(i.getMinutes(),2)+":"+a(i.getSeconds(),2),e.date=a(i.getFullYear(),4)+"-"+a(i.getMonth()+1,2)+"-"+a(i.getDate(),2)+" "+t[i.getDay()]}function a(e,t){for(var n="",a=0;a<t;a++)n+="0";return(n+e).slice(-t)}n();var i=document.getElementById("myCanvas").getContext("2d"),o=112,s=150;L();var r=50,l=2,u=150,h=2,c=80,d=2,p=60,m=2,f=160,v=2,g=90,b=2,w=70,_=2,x=170,k=2,T=100,P=2,y=80,C=2,S=180,M=2,E=110,I=2,j=90,z=2,H=190,R=5,A=116,F=2;function L(){var e=new Date;n(e);var t=e.getHours(),a=e.getMinutes(),L=e.getSeconds();t=(t+=parseFloat(a/60))>12?t-12:t,i.clearRect(0,0,400,400),i.strokeStyle="#333",i.fillStyle="#333",i.beginPath(),i.lineWidth=10,i.shadowColor="#b7b7b7",i.shadowBlur=3,i.arc(o,s,100,0,2*Math.PI),i.stroke(),i.beginPath(),i.strokeStyle="#FFF",i.lineWidth=5,i.arc(o,s,100,0,2*Math.PI),i.stroke();for(var O=0;O<=60;O++)O%5==0?(i.save(),i.translate(o,s),i.rotate(6*O*Math.PI/180),i.beginPath(),i.strokeStyle="#636363",i.lineWidth=4,i.moveTo(0,-92),i.lineTo(0,-70),i.closePath(),i.stroke(),i.restore()):(i.save(),i.translate(o,s),i.rotate(6*O*Math.PI/180),i.beginPath(),i.strokeStyle="#e4e4e4",i.lineWidth=2.5,i.moveTo(0,-92),i.lineTo(0,-80),i.closePath(),i.stroke(),i.restore());for(O=1;O<13;O++){switch(i.save(),i.translate(o,s),i.beginPath(),i.font="14px 微软雅黑",O){case 1:i.fillText(O,26,-46);break;case 2:i.fillText(O,49,-25);break;case 3:i.fillText(O,58,5);break;case 4:i.fillText(O,49,35);break;case 5:i.fillText(O,26,55);break;case 6:i.fillText(O,-4,63);break;case 7:i.fillText(O,-38,55);break;case 8:i.fillText(O,-55,35);break;case 9:i.fillText(O,-65,5);break;case 10:i.fillText(O,-55,-25);break;case 11:i.fillText(O,-35,-45);break;case 12:i.fillText(O,-8,-55)}i.closePath(),i.fill(),i.restore()}i.strokeStyle="#005fd1",i.beginPath(),i.lineWidth=3,i.arc(o,s,4.5,0,2*Math.PI),i.closePath(),i.stroke(),i.fillStyle="#fff",i.beginPath(),i.arc(o,s,4,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.save(),i.strokeStyle="#e4e4e4",i.translate(o,s),i.rotate(6*L*Math.PI/180),i.fillStyle="#636363",i.shadowColor="#005fd1",i.beginPath(),i.moveTo(0,0),i.lineTo(0,-70),i.fill(),i.stroke(),i.restore(),i.beginPath(),i.save(),i.strokeStyle="#b7b7b7",i.translate(o,s),i.rotate(6*a*Math.PI/180),i.fillStyle="red",i.shadowColor="#005fd1",i.beginPath(),i.moveTo(0,0),i.lineTo(0,-60),i.fill(),i.stroke(),i.restore(),i.beginPath(),i.save(),i.strokeStyle="#636363",i.translate(o,s),i.rotate(30*t*Math.PI/180),i.fillStyle="#636363",i.shadowColor="#005fd1",i.beginPath(),i.moveTo(0,0),i.lineTo(0,-50),i.fill(),i.stroke(),i.restore(),i.save(),i.strokeStyle="#333",i.beginPath(),i.strokeStyle="#005fd1",i.moveTo(110,47),i.bezierCurveTo(120,-50,110,100,150,0),i.stroke(),i.beginPath(),i.strokeStyle="#005fd1",i.moveTo(0,50),i.bezierCurveTo(130,-90,-10,-100,10,-10),i.stroke(),i.beginPath(),i.strokeStyle="#333",i.moveTo(90,251),i.lineTo(90,270),i.lineTo(130,270),i.lineTo(130,251),i.stroke(),i.beginPath(),i.strokeStyle="#505050",i.moveTo(90,270),i.bezierCurveTo(r,305,u,305,c,350),i.stroke(),i.beginPath(),i.moveTo(100,270),i.bezierCurveTo(p,305,f,305,g,350),i.stroke(),i.beginPath(),i.moveTo(110,270),i.bezierCurveTo(w,305,x,305,T,350),i.stroke(),i.beginPath(),i.moveTo(120,270),i.bezierCurveTo(y,305,S,305,E,350),i.stroke(),i.beginPath(),i.moveTo(130,270),i.bezierCurveTo(j,305,H,305,A,350),i.stroke(),(r+=l)>=140?l=-2:r<=40&&(l=2),(u+=h)>=140?h=-2:u<=40&&(h=2),(c+=d)>=140?d=-2:c<=40&&(d=2),(p+=m)>=150?m=-2:p<=50&&(m=2),(f+=v)>=150?v=-2:f<=50&&(v=2),(g+=b)>=150?b=-2:g<=50&&(b=2),(w+=_)>=160?_=-2:w<=60&&(_=2),(x+=k)>=160?k=-2:x<=60&&(k=2),(T+=P)>=160?P=-2:T<=60&&(P=2),(y+=C)>=170?C=-2:y<=70&&(C=2),(S+=M)>=170?M=-2:S<=70&&(M=2),(E+=I)>=170?I=-2:E<=70&&(I=2),(j+=z)>=180?z=-2:j<=80&&(z=2),(H+=R)>=180?R=-2:H<=80&&(R=2),(A+=F)>=176?F=-2:A<=76&&(F=2)}setInterval(L,100)},W={name:"clock",data:function(){return{time:"",date:""}},mounted:function(){new D(this)},computed:{}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app_clock app_components_boxshadow"},[e._m(0),e._v(" "),n("div",{attrs:{id:"clock"}},[n("p",{staticClass:"date"},[e._v(e._s(e.date))]),e._v(" "),n("p",{staticClass:"time"},[e._v(e._s(e.time))])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("canvas",{attrs:{id:"myCanvas",width:"225",height:"370"}},[this._v("抱歉，您的浏览器不支持canvas画布")])])}]};var U=n("VU/8")(W,G,!1,function(e){n("t9Rr")},"data-v-77698158",null).exports;a.default.component("app-header",A),a.default.component("app-sidebar",q),a.default.component("app-clock",U),a.default.config.productionTip=!1,new a.default({el:"#app",router:m,store:g,components:{App:o},template:"<App/>"})},lsjP:function(e,t){},"s/g6":function(e,t){},t9Rr:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d9ee636fd5891f144da4.js.map