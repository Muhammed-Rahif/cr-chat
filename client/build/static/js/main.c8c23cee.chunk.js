(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{153:function(e,t,a){},190:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(11),r=a.n(s),i=(a(153),a(15)),o=a(130),l=a(13),j=a(264),d=a(132),m=a(266),b=a(259),u=a(21),h=a(16),x=a(118),O=a(247),g=a(271),p=a(249),f=a(250),v=a(204),y=a(251),w=a(252),N=a(123),C=a.n(N),I=a(125),k=a.n(I),B=a(253),S=a(124),T=a.n(S),D=a(2),M=Object(O.a)({list:{width:250,padding:0}});var E=function(e){var t=e.status,a=e.setSideDrawer,n=e.changeMode,s=Object(c.useState)(!0),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),d=Object(i.a)(j,2),m=d[0],b=d[1],u=M();return Object(c.useEffect)((function(){l(t)}),[t]),Object(c.useEffect)((function(){n(m)}),[m]),Object(D.jsx)("div",{style:{width:"auto"},onClick:function(){a(!1),l(!1)},children:Object(D.jsxs)(g.a,{anchor:"left",open:o,children:[Object(D.jsx)(p.a,{className:u.list,children:Object(D.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(D.jsx)("img",{src:"./logo192.png",width:"80",height:"80",alt:"CR CHAT"}),Object(D.jsx)("h3",{children:"CR CHAT"})]})}),Object(D.jsx)(f.a,{}),Object(D.jsx)(p.a,{className:u.list,children:Object(D.jsxs)(v.a,{button:!0,children:[Object(D.jsx)(y.a,{children:Object(D.jsx)(C.a,{})}),Object(D.jsx)(w.a,{primary:"Home"})]})}),Object(D.jsx)(f.a,{}),Object(D.jsx)(p.a,{className:u.list,children:Object(D.jsxs)(v.a,{button:!0,children:[Object(D.jsx)(y.a,{children:Object(D.jsx)(T.a,{})}),Object(D.jsx)(w.a,{primary:"Dark mode"}),Object(D.jsx)(B.a,{name:"checkedB",color:"primary",onChange:function(e){b(e.target.checked)},checked:m})]})}),Object(D.jsx)(f.a,{}),Object(D.jsx)(p.a,{className:u.list,children:Object(D.jsxs)(v.a,{button:!0,children:[Object(D.jsx)(y.a,{children:Object(D.jsx)(k.a,{})}),Object(D.jsx)(w.a,{primary:"Info"})]})}),Object(D.jsx)(f.a,{})]})})},R=(a(190),a(202));function F(e){var t=e.name,a=e.time,c=e.msg;return Object(D.jsx)("div",{className:"msg",children:Object(D.jsxs)("div",{className:"bubble",children:[Object(D.jsxs)("div",{className:"txt",children:[Object(D.jsx)("span",{className:"name",children:t}),Object(D.jsx)("span",{className:"timestamp",children:a}),Object(D.jsx)("span",{className:"message",children:c})]}),Object(D.jsx)("div",{className:"bubble-arrow"})]})})}function L(e){var t=e.time,a=e.msg;return Object(D.jsx)("div",{className:"msg",children:Object(D.jsx)("div",{className:"bubble follow",children:Object(D.jsxs)("div",{className:"txt",children:[Object(D.jsx)("span",{className:"timestamp",children:t}),Object(D.jsx)("span",{className:"message follow",children:a})]})})})}function U(e){var t=e.name,a=e.time,c=e.msg;return Object(D.jsx)("div",{className:"msg",children:Object(D.jsxs)("div",{className:"bubble alt",children:[Object(D.jsxs)("div",{className:"txt",children:[Object(D.jsx)("span",{className:"name alt",children:t}),Object(D.jsx)("span",{className:"timestamp",children:a}),Object(D.jsx)("p",{className:"message",children:c})]}),Object(D.jsx)("div",{className:"bubble-arrow alt"})]})})}function W(e){var t=e.time,a=e.msg;return Object(D.jsx)("div",{className:"msg",children:Object(D.jsx)("div",{className:"bubble altfollow",children:Object(D.jsxs)("div",{className:"txt",children:[Object(D.jsx)("span",{className:"timestamp",children:t}),Object(D.jsx)("p",{className:"message follow",children:a})]})})})}function q(e){var t=e.text;return Object(D.jsx)(R.a,{style:{padding:".1rem",paddingLeft:"1rem",paddingRight:"1rem",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",width:"45%",opacity:"0.7",marginTop:".75rem",marginBottom:".75rem"},children:t})}var A,H=a(254),G=a(255),Y=a(205),J=a(59),P=a(126),z=a.n(P),Z=a(127),$=a.n(Z),K=a(128),Q=a.n(K),V=a(267),X=a(134),_=a(256),ee=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:100,maxHeight:100,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2)},title:{flexGrow:1,textAlign:"center",fontFamily:"'Bree Serif', serif"},header:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},chatBody:{zIndex:"-1",marginTop:"100px",height:"80vh",overflowY:"scroll"}}})),te=Object(x.io)("http://192.168.43.102:5000");var ae=function(e){var t,a=e.logoutUser,n=e.getUserData,s=e.changeMode,r=Object(c.useState)([]),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(c.useState)(!1),m=Object(i.a)(d,2),b=m[0],x=m[1],O=Object(c.useState)(!1),g=Object(i.a)(O,2),p=g[0],f=g[1],v=Object(c.useState)(""),y=Object(i.a)(v,2),w=y[0],N=y[1],C=ee(),I=function(){f(null)},k=function(e){var t=e.itm;return console.log(t),"static"===t.type&&n().userId===t.userId&&"connect"===t.reason?Object(D.jsx)(q,{text:"You Joined"}):"static"===t.type&&"connect"===t.reason?Object(D.jsx)(q,{text:"".concat(t.name," Joined")}):"static"===t.type&&"disconnect"===t.reason?Object(D.jsx)(q,{text:"".concat(t.name," Left")}):"message"===t.type&&n().userId===t.userId?Object(D.jsx)(U,{name:"You",msg:t.msg,time:t.time}):"message"===t.type?Object(D.jsx)(F,{name:t.name,msg:t.msg,time:t.time}):"secondary"===t.type&&n().userId===t.userId?Object(D.jsx)(W,{msg:t.msg,time:t.time}):"secondary"===t.type?Object(D.jsx)(L,{msg:t.msg,time:t.time}):Object(D.jsx)(q,{text:"Someting went wrong. You need to reload or reenter.!"})};return Object(c.useEffect)((function(){te.on("connect",(function(){te.emit("userConnected",n()),te.on("userConnect",(function(e){j((function(t){return[].concat(Object(h.a)(t),[e])}))})),te.on("userDisconnect",(function(e){j((function(t){return[].concat(Object(h.a)(t),[e])}))})),te.on("message",(function(e){A===e.userId?(e.type="secondary",j((function(t){return[].concat(Object(h.a)(t),[e])}))):(e.type="message",j((function(t){return[].concat(Object(h.a)(t),[e])})));var t=document.getElementById("chatBody");t.scrollTo({top:t.scrollHeight,behavior:"smooth"}),A=e.userId}))}))}),[]),Object(D.jsxs)("div",{className:C.root,children:[Object(D.jsx)(E,{status:b,changeMode:s,setSideDrawer:x}),Object(D.jsx)(H.a,{position:"fixed",color:"inherit",style:{borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"},children:Object(D.jsxs)(G.a,{className:C.toolbar,children:[Object(D.jsx)(Y.a,{edge:"start",className:C.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){x(!0)},children:Object(D.jsx)(z.a,{})}),Object(D.jsx)("div",{className:C.header,children:Object(D.jsx)(J.a,{className:C.title,variant:"h4",noWrap:!0,children:Object(D.jsx)("img",{src:"./logo192.png",width:"80",height:"80",alt:"CR CHAT"})})}),Object(D.jsx)(Y.a,{onClick:function(e){f(e.currentTarget)},"aria-label":"display more actions",edge:"end",color:"inherit",children:Object(D.jsx)($.a,{})}),Object(D.jsx)(X.a,{id:"simple-menu",keepMounted:!0,anchorEl:p,open:Boolean(p),onClose:I,children:Object(D.jsx)(_.a,{onClick:function(){I(),a()},children:"Logout"})})]})}),Object(D.jsx)("div",{id:"chatBody",className:C.chatBody,children:l.map((function(e,t){return Object(D.jsx)(k,{itm:e},t)}))}),Object(D.jsxs)("div",{style:{bottom:0,position:"sticky",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(D.jsx)(V.a,(t={id:"filled-textarea",label:"Type here...!",placeholder:"Get to know everyone.",multiline:!0,variant:"filled",fullWidth:!0,rows:"1"},Object(u.a)(t,"id","textField"),Object(u.a)(t,"rowsMax","4"),Object(u.a)(t,"color","primary"),Object(u.a)(t,"value",w),Object(u.a)(t,"onChange",(function(e){N(e.target.value)})),t)),Object(D.jsx)(Y.a,{style:{borderRadius:0,padding:"1rem"},onClick:function(){if(null===w||" "===w||""===w)document.getElementById("textField").focus();else{var e=n();e.msg=w,te.emit("massage",e),N(""),document.getElementById("textField").focus()}},children:Object(D.jsx)(Q.a,{})})]})]})},ce=a(65),ne=a(133),se=a(272),re=a(262),ie=a(261),oe=a(270),le=a(257),je=a(260),de=a(268),me=a(129),be=a.n(me),ue=a(258);function he(){return Object(D.jsxs)(J.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(D.jsx)(le.a,{color:"inherit",href:"/",children:"CR Chat"})," ",(new Date).getFullYear(),"."]})}var xe=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var Oe=function(e){var t=e.setUserData,a=(e.getUserData,xe()),c=Object(ne.a)(),n=c.register,s=c.handleSubmit,r=c.formState.errors;return Object(D.jsxs)(ue.a,{component:"main",maxWidth:"xs",children:[Object(D.jsx)(b.a,{}),Object(D.jsxs)("div",{className:a.paper,children:[Object(D.jsx)(se.a,{className:a.avatar,children:Object(D.jsx)(be.a,{})}),Object(D.jsx)(J.a,{component:"h1",variant:"h5",children:"Get In"}),Object(D.jsxs)("form",{autoComplete:"off",className:a.form,onSubmit:s((function(e){t(e)})),children:[Object(D.jsx)("input",Object(ce.a)({hidden:!0,value:Math.random().toString(16).slice(2),name:"userId"},n("userId"))),Object(D.jsxs)(je.a,{container:!0,spacing:2,children:[Object(D.jsx)(je.a,{item:!0,xs:12,children:Object(D.jsx)(V.a,Object(ce.a)({variant:"outlined",fullWidth:!0,id:"name",label:"Name",error:Boolean(r.name),helperText:r.name?r.name.message:null},n("name",{required:"User Name is required.!",minLength:{value:4,message:"Minimum 4 charecters.!"}})))}),Object(D.jsx)(je.a,{item:!0,xs:12,children:Object(D.jsx)(V.a,Object(ce.a)({variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",error:Boolean(r.email),helperText:r.email?r.email.message:null},n("email",{required:"Email is required.!",minLength:{value:5,message:"Type a valid email address.!"},pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Type a valid email address.!"}})))}),Object(D.jsx)(je.a,{item:!0,xs:12,children:Object(D.jsx)(V.a,Object(ce.a)({variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:Boolean(r.password),helperText:r.password?r.password.message:null},n("password",{required:"Password is required.!",minLength:{value:6,message:"Minimum 6 charecters.!"}})))}),Object(D.jsx)(je.a,{item:!0,xs:12,children:Object(D.jsx)(ie.a,{control:Object(D.jsx)(oe.a,{required:!0,value:"true",color:"default"}),label:"I am agree that I am subscribed Crossroads youtube channel."})})]}),Object(D.jsx)(re.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Get In"}),Object(D.jsx)(je.a,{container:!0,justify:"flex-end",children:Object(D.jsx)(je.a,{item:!0,children:Object(D.jsx)(le.a,{href:"",variant:"body2"})})})]})]}),Object(D.jsx)(de.a,{mt:5,children:Object(D.jsx)(he,{})})]})},ge=a(265),pe=a(263);var fe=function(){var e=Object(pe.a)(["cr-chat-cookie"]),t=Object(i.a)(e,3),a=t[0],s=t[1],r=t[2],u=Object(c.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches),h=Object(i.a)(u,2),x=h[0],O=h[1],g=Object(j.a)("(prefers-color-scheme: dark)"),p=function(){return a.userData};Object(c.useEffect)((function(){O(g)}),[Object(j.a)("(prefers-color-scheme: dark)")]);var f=n.a.useMemo((function(){return Object(d.a)({palette:{type:x?"dark":"light"}})}),[x]);return Object(D.jsx)(ge.a,{children:Object(D.jsx)(o.a,{children:Object(D.jsx)(l.d,{children:Object(D.jsxs)(m.a,{theme:f,children:[Object(D.jsx)(b.a,{}),Object(D.jsx)(l.b,{exact:!0,path:"/",component:ae,children:"undefined"!=typeof p()?Object(D.jsx)(ae,{changeMode:function(e){O(e)},getUserData:p,logoutUser:function(){r("userData"),window.location.reload()}}):Object(D.jsx)(l.a,{to:"/get-in"})}),Object(D.jsx)(l.b,{path:"/get-in",component:Oe,children:"undefined"==typeof p()?Object(D.jsx)(Oe,{setUserData:function(e){s("userData",e,{path:"/"}),window.location.reload()},getUserData:p}):Object(D.jsx)(l.a,{to:"/"})})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,275)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(fe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ve()}},[[199,1,2]]]);
//# sourceMappingURL=main.c8c23cee.chunk.js.map