(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(164),s=n(24),l=n(12),o=n(167),j=n(161),u=n(168),d=n(17),f=n(154),p=n(157),b=Object(f.a)((function(e){return{appBar:{borderRadius:15,margin:"10px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"300px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(p.a[500]),backgroundColor:p.a[500]}}})),x=n(38),m=n(171),v=n(166),A=n(26),O=n.n(A),h=n(46),w=n(80),g=n.n(w).a.create({baseURL:"/api"}),y=function(e){return g.post("/posts",e)},P=function(e,t){return g.patch("/posts/".concat(e),t)},k=function(e){return g.delete("/posts/".concat(e))},D=function(e){return function(){var t=Object(h.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e);case 3:n({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("error1");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},N=Object(f.a)({media:{paddingTop:"36.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",flexDirection:"column",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"center",direction:"column"},message:{marginTop:"10px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",textAlign:"center",flexDirection:"column",fontWeight:"bold"}}),C=n(158),T=n(160),J=n(162),S=n(163),H=n(170),L=n(82),G=n.n(L),X=n(81),V=n.n(X),W=n(2);var E=function(e){var t=e.post,n=(e.setCurrentId,N()),a=Object(d.b)();return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(C.a,{className:n.card,style:{margin:"14px"},children:[Object(W.jsx)(T.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(W.jsx)("div",{className:n.overlay,children:Object(W.jsxs)(j.a,{variant:"h3",color:"textPrimary",style:{color:"white"},children:["Dish ",t.title]})}),Object(W.jsxs)(J.a,{className:n.message,children:[Object(W.jsxs)("div",{className:"text-gray-400",children:["Cook Time ",t.message]}),Object(W.jsxs)("div",{className:"text-gray-400",children:["Dishes Served:",t.tags]})]}),Object(W.jsx)("div",{className:n.cardActions,children:Object(W.jsxs)(S.a,{disableSpacing:!0,children:[Object(W.jsxs)(H.a,{onClick:function(){return a(D(t._id))},style:{color:"red"},children:["Delete ",Object(W.jsx)(V.a,{})]}),Object(W.jsxs)(H.a,{onClick:function(){return a(D(t._id))},style:{color:"blue"},children:["UPDATE ",Object(W.jsx)(G.a,{})]})]})})]})})},Z=Object(f.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),q=n(165);var R=function(e){e.currentId;var t=e.setCurrentId,n=Object(d.c)((function(e){return e.posts})),a=Z();return n.length?Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(v.a,{container:!0,justify:"space-between",alignItems:"stretch",className:a.mainContainer,spacing:3,style:{marginTop:"7px"},children:Object(W.jsx)(v.a,{item:!0,xs:12,sm:12,children:n.map((function(e){return Object(W.jsx)(E,{post:e,setCurrentId:t},e._id)}))})})}):Object(W.jsxs)(i.a,{maxWidth:"md",style:{marginTop:"300px"},children:[Object(W.jsx)(j.a,{style:{textAlign:"center"},children:"Fetching Api"}),Object(W.jsx)(q.a,{style:{color:"blue"}})]})},M=n(22),z=Object(f.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{marginTop:"30px",padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{display:"flex",flexDirection:"column",justifyContent:"center",width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),F=n(88),U=n(169),B=n(83),I=n.n(B);var K=function(e){var t=e.currentId,n=e.setCurrentId,r=z(),c=Object(d.b)(),i=Object(d.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),s=Object(l.f)();console.log(s),Object(a.useEffect)((function(){if(i)return f(i)}),[i]);var o=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),j=Object(x.a)(o,2),u=j[0],f=j[1],p=function(){n(null),f({title:"",message:"",tags:"",selectedFile:""})};return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(F.a,{className:"".concat(r.root," ").concat(r.paper),children:Object(W.jsxs)("form",{autoComplete:"off",noValidate:!0,onSubmit:function(e){var n;e.preventDefault(),c(t?function(e,t){return function(){var n=Object(h.a)(O.a.mark((function n(a){var r,c;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P(e,t);case 3:r=n.sent,c=r.data,a({type:"UPDATE",payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(t,Object(M.a)({},u)):(n=Object(M.a)({},u),function(){var e=Object(h.a)(O.a.mark((function e(t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(n);case 3:a=e.sent,r=a.data,t({type:"CREATE",payload:r}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),p()},className:r.form,children:[Object(W.jsx)(U.a,{name:"title",label:"Cusine Name",fullWidth:!0,value:u.title,onChange:function(e){return f(Object(M.a)(Object(M.a)({},u),{},{title:e.target.value}))},variant:"outlined"}),Object(W.jsx)(U.a,{name:"message",label:"Duration for Cooking",fullWidth:!0,value:u.message,onChange:function(e){return f(Object(M.a)(Object(M.a)({},u),{},{message:e.target.value}))},variant:"outlined"}),Object(W.jsx)(U.a,{name:"tags",label:"No of dishs served",fullWidth:!0,value:u.tags,onChange:function(e){return f(Object(M.a)(Object(M.a)({},u),{},{tags:e.target.value.split(",")}))},variant:"outlined"}),Object(W.jsx)("div",{className:r.fileInput,children:Object(W.jsx)(I.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return f(Object(M.a)(Object(M.a)({},u),{},{selectedFile:t}))}})}),Object(W.jsx)(H.a,{variant:"contained",className:r.buttonSubmit,size:"large",type:"submit",color:"primary",fullWidth:!0,children:"Submit"}),Object(W.jsx)(H.a,{variant:"contained",className:r.buttonSubmit,size:"large",color:"secondary",fullWidth:!0,onClick:p,children:"Clear"})]})})})},Y=n(55),Q=Object(f.a)((function(e){return Object(Y.a)({appBar:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:"70px"}},e.breakpoints.down("xs"),{mainContainer:{flexDirection:"column-reverse"}})})),_=function(){var e=Q(),t=Object(a.useState)(0),n=Object(x.a)(t,2),r=n[0],c=n[1];Object(d.b)();return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(m.a,{in:!0,children:Object(W.jsx)(i.a,{children:Object(W.jsxs)(v.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,className:e.mainContainer,children:[Object(W.jsx)(v.a,{item:!0,xs:12,sm:7}),Object(W.jsxs)(v.a,{item:!0,xs:12,sm:4,children:[Object(W.jsx)(s.b,{to:"/",className:"button-go ",children:"Home Page"}),Object(W.jsx)(K,{currentId:r,setCurrentId:c})]})]})})}),Object(W.jsxs)("div",{className:"text-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.05)"},children:["\xa9 2023 Copyright:",Object(W.jsx)("a",{className:"text-reset fw-bold",href:"https://mdbootstrap.com/",children:"Cusinerecipe.com"})]})]})};var $=function(){var e=b();return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(o.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(W.jsxs)("div",{className:e.brandContainer,children:[Object(W.jsx)(j.a,{component:s.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Recipe"}),Object(W.jsx)("img",{className:e.image,src:"data:image/jpeg;base64,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",alt:"icon",height:"60"})]}),Object(W.jsx)(u.a,{className:e.toolbar,children:Object(W.jsxs)("div",{className:e.profile,children:[Object(W.jsx)(s.b,{to:"/",className:"button-go ",children:"Italian"}),Object(W.jsx)(s.b,{to:"/",className:"button-go ",children:"Indian"}),Object(W.jsx)(s.b,{to:"/add",className:"button-go ",children:"Add Cusine"})]})})]})})},ee=function(){var e=Q(),t=Object(a.useState)(0),n=Object(x.a)(t,2),r=n[0],c=n[1],s=Object(d.b)();return Object(a.useEffect)((function(){s(function(){var e=Object(h.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("/posts");case 3:n=e.sent,a=n.data,t({type:"FETCH_ALL",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[r,s]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(m.a,{in:!0,children:Object(W.jsx)(i.a,{children:Object(W.jsxs)(v.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,className:e.mainContainer,children:[Object(W.jsx)(v.a,{item:!0,xs:12,sm:7,children:Object(W.jsx)(R,{setCurrentId:c})}),Object(W.jsx)(v.a,{item:!0,xs:12,sm:4,children:Object(W.jsx)(K,{currentId:r,setCurrentId:c})})]})})}),Object(W.jsxs)("div",{className:"text-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.05)"},children:["\xa9 2023 Copyright:",Object(W.jsx)("a",{className:"text-reset fw-bold",href:"https://mdbootstrap.com/",children:"Cusinerecipe.com"})]})]})};var te=function(){return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(s.a,{children:Object(W.jsxs)(i.a,{maxWidth:"lg",children:[Object(W.jsx)($,{}),Object(W.jsxs)(l.c,{children:[Object(W.jsx)(l.a,{path:"/",exact:!0,component:ee}),Object(W.jsx)(l.a,{path:"/add",exact:!0,component:_})]})]})})})},ne=(n(122),n(42)),ae=n(86),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(ae.a)(e),[t.payload]);default:return e}},ce=Object(ne.b)({posts:re}),ie=n(85),se=Object(ne.d)(ce,Object(ne.c)(Object(ne.a)(ie.a)));c.a.render(Object(W.jsx)(d.a,{store:se,children:Object(W.jsx)(te,{})}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.690af679.chunk.js.map