(this.webpackJsonpsocialnet=this.webpackJsonpsocialnet||[]).push([[0],{62:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);a(62);var s=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))},n=a(0),i=a.n(n),c=a(13),o=a.n(c),r=a(21),l=a(10),j=a(124),d=a(126),u=a(127),b=a(128),h=a(41),m=a(147),x=a(129),g=a(77),O=a(130),p=a(67),f=a.n(p),v=a(123),P=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(1)},toolbar:{backgroundColor:"#117B80"},title:{flexGrow:1},mainFeaturesPost:{position:"relative",color:e.palette.common.white,marginBottom:e.spacing(4),backgroundSize:"cover",backgroungRepeat:"no-repeat",backgroundPosition:"center"},mainFeaturesPostContent:{position:"relative",padding:e.spacing(6),marginTop:e.spacing(8)},mainContent:{},navbar:{flexGrow:6},footer:{backgroundColor:"#117B80",marginTop:"740px"},avatarLarge:{width:e.spacing(25),height:e.spacing(25)},newPost:{width:"99%",height:50},marginBottom:{marginBottom:"10em"},navLink:{color:"white",textDecoration:"none","&.active":{color:"orange",fontWeight:"bold"}},lastMessage:{marginLeft:"10em"},navLinkDialogs:{color:"black",textDecoration:"none","&.active":{color:"grey",fontWeight:"bold"}},btnPost:{marginLeft:"84em"}}})),D=a(2);function C(){var e=P();return Object(D.jsxs)("div",{children:[Object(D.jsx)(j.a,{position:"fixed",className:e.toolbar,children:Object(D.jsx)(d.a,{maxWidth:"xl",children:Object(D.jsxs)(u.a,{children:[Object(D.jsx)(b.a,{edge:"start",color:"inherit","aria-label":"menu",className:e.menuButton,children:Object(D.jsx)(f.a,{})}),Object(D.jsx)(h.a,{className:e.title,children:Object(D.jsx)(r.b,{className:e.navLink,to:"/profile",children:"Profile"})}),Object(D.jsx)(h.a,{className:e.title,children:Object(D.jsx)(r.b,{className:e.navLink,to:"/dialogs",children:"Dialogs"})}),Object(D.jsx)(h.a,{className:e.title,children:Object(D.jsx)(r.b,{className:e.navLink,to:"/news",children:"News"})}),Object(D.jsx)(h.a,{className:e.title,children:"Settings"}),Object(D.jsx)(m.a,{mr:3,children:Object(D.jsx)(x.a,{color:"inherit",variant:"outlined",children:"Log In"})}),Object(D.jsx)(x.a,{color:"secondary",variant:"contained",children:"Sign Up"})]})})}),Object(D.jsx)(g.a,{className:e.mainFeaturesPost,style:{backgroundImage:"url(https://source.unsplash.com/random)"},children:Object(D.jsx)(d.a,{maxWidth:"xl",children:Object(D.jsx)(O.a,{container:!0,children:Object(D.jsx)(O.a,{item:!0,md:6,children:Object(D.jsx)("div",{className:e.mainFeaturesPostContent,children:Object(D.jsx)(h.a,{component:"h1",color:"inherit",variant:"h3",gutterBottom:!0,children:"Social Net Project"})})})})})})]})}var N=a(131),T=a(132),w=a(133);function k(){var e=P();return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(N.a,{className:e.navbar,children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(D.jsx)(T.a,{button:!0,children:Object(D.jsx)(w.a,{primary:e})},e)}))})})}var y=a(139),A=a(134),_=a(135),B=a(136),S=a(137),L=a(138),F=function(e){var t=P();return Object(D.jsxs)(A.a,{className:t.marginBottom,children:[Object(D.jsxs)(_.a,{children:[Object(D.jsx)(B.a,{component:"img",alt:"new post",height:"140",image:"https://lorempixel.com/1000/300",title:"Post Title"}),Object(D.jsxs)(S.a,{children:[Object(D.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(D.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:e.message})]})]}),Object(D.jsxs)(L.a,{children:[Object(D.jsx)(x.a,{size:"small",color:"primary",children:"Read more..."}),Object(D.jsx)(x.a,{size:"small",color:"primary",children:"Like"})]})]})};function E(e){var t=P(),a=e.posts.map((function(e){return Object(D.jsx)(F,{title:e.title,message:e.message},e.id)}));return Object(D.jsx)(O.a,{container:!0,children:Object(D.jsxs)(O.a,{item:!0,xs:10,children:[Object(D.jsx)(h.a,{variant:"h4",gutterBottom:!0,children:"My Posts"}),Object(D.jsxs)("div",{className:t.marginBottom,children:[Object(D.jsx)("div",{children:Object(D.jsx)("input",{id:"file-input",type:"file",name:"file",multiple:!0})}),Object(D.jsx)(y.a,{onChange:function(t){e.dispatch({type:"UPDATE_NEW_POST_TEXT",newText:t.currentTarget.value})},value:e.newPostText,className:t.newPost,rows:8,"aria-label":"maximum height",placeholder:"..."}),Object(D.jsx)("div",{children:Object(D.jsx)(x.a,{onClick:function(){e.dispatch({type:"ADD_POST"})},className:t.btnPost,variant:"outlined",color:"primary",children:"Add Post"})})]}),Object(D.jsx)("div",{children:a})]})})}var I=a(74),M=a(59),W=a(75),R=a(149),z=a(5),q=a(148),G=a(140),U=a(141),V=a(142),H=a(68),J=a.n(H),X=["children","classes","onClose"],Y=Object(z.a)((function(e){return Object(R.a)({root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}))((function(e){var t=e.children,a=e.classes,s=e.onClose,n=Object(W.a)(e,X);return Object(D.jsxs)(G.a,Object(M.a)(Object(M.a)({disableTypography:!0,className:a.root},n),{},{children:[Object(D.jsx)(h.a,{variant:"h6",children:t}),s?Object(D.jsx)(b.a,{"aria-label":"close",className:a.closeButton,onClick:s,children:Object(D.jsx)(J.a,{})}):null]}))})),Z=Object(z.a)((function(e){return{root:{padding:e.spacing(2)}}}))(U.a),K=Object(z.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(V.a);function Q(){var e=i.a.useState(!1),t=Object(I.a)(e,2),a=t[0],s=t[1],n=function(){s(!1)};return Object(D.jsxs)("div",{children:[Object(D.jsx)(x.a,{variant:"outlined",color:"primary",onClick:function(){s(!0)},children:"Open dialog"}),Object(D.jsxs)(q.a,{onClose:n,"aria-labelledby":"customized-dialog-title",open:a,children:[Object(D.jsx)(Y,{id:"customized-dialog-title",onClose:n,children:"Modal title"}),Object(D.jsxs)(Z,{dividers:!0,children:[Object(D.jsx)(h.a,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),Object(D.jsx)(h.a,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),Object(D.jsx)(h.a,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),Object(D.jsx)(K,{children:Object(D.jsx)(x.a,{autoFocus:!0,onClick:n,color:"primary",children:"Save changes"})})]})]})}var $=a(150);function ee(){var e=P();return Object(D.jsxs)(O.a,{container:!0,spacing:5,justify:"center",children:[Object(D.jsx)(O.a,{item:!0,xs:3,className:e.marginBottom,children:Object(D.jsx)($.a,{src:"https://picsum.photos/200",className:e.avatarLarge,variant:"rounded",children:"NZ"})}),Object(D.jsxs)(O.a,{item:!0,xs:9,children:[Object(D.jsx)(h.a,{children:"Name: Name Lsatname"}),Object(D.jsx)(h.a,{children:"Location: London"}),Object(D.jsx)(h.a,{children:"Occupation: Student"})]})]})}function te(e){P();return Object(D.jsxs)("div",{children:[Object(D.jsx)(ee,{}),Object(D.jsx)(E,{posts:e.posts,newPostText:e.newPostText,dispatch:e.dispatch}),Object(D.jsx)(Q,{})]})}var ae=a(143),se=a(144),ne=a(71),ie=a.n(ne),ce=a(69),oe=a.n(ce),re=a(70),le=a.n(re),je=a(72),de=a.n(je);function ue(e){var t=P();return Object(D.jsxs)(ae.a,{className:[t.footer,t.root].join(" "),value:e.value,onChange:e.handleChange,children:[Object(D.jsx)(se.a,{label:"Recents",value:"recents",icon:Object(D.jsx)(oe.a,{})}),Object(D.jsx)(se.a,{label:"Favorites",value:"favorites",icon:Object(D.jsx)(le.a,{})}),Object(D.jsx)(se.a,{label:"Folder",value:"folder",icon:Object(D.jsx)(ie.a,{})}),Object(D.jsx)(se.a,{label:"NearBy",value:"nearby",icon:Object(D.jsx)(de.a,{})})]})}var be=a(146),he=a(145),me=a(73),xe=a.n(me),ge=function(e){var t=P();return Object(D.jsxs)(T.a,{children:[Object(D.jsx)(he.a,{children:Object(D.jsx)($.a,{children:Object(D.jsx)(xe.a,{})})}),Object(D.jsx)(w.a,{children:Object(D.jsxs)(r.b,{className:t.navLinkDialogs,to:"/dialods/"+e.id,children:[e.name,Object(D.jsx)("span",{className:t.lastMessage,children:e.message})]})})]})},Oe=function(e){var t=P();return Object(D.jsx)(T.a,{children:Object(D.jsx)(w.a,{children:Object(D.jsx)(r.b,{className:t.navLinkDialogs,to:"/dialods/"+e.id,children:Object(D.jsx)("span",{className:t.lastMessage,children:e.message})})})})};var pe=function(e){var t=e.dialogs.map((function(e){return Object(D.jsx)(ge,{name:e.name,id:e.id},e.id)})),a=e.messages.map((function(e){return Object(D.jsx)(Oe,{id:e.id,message:e.message},e.id)}));P();return Object(D.jsxs)("div",{children:[Object(D.jsx)(h.a,{variant:"h6",children:"Friends"}),Object(D.jsxs)(O.a,{container:!0,spacing:5,children:[Object(D.jsx)(O.a,{item:!0,xs:2,children:Object(D.jsx)(N.a,{children:t})}),Object(D.jsx)(O.a,{item:!0,xs:10,children:a})]})]})},fe=(a(96),function(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){fetch("https://data.cityofnewyork.us/resource/tg4x-b46p.json").then((function(e){return e.json()})).then((function(e){console.log(e)}))})),Object(D.jsxs)("div",{id:"d3demo",children:[Object(D.jsx)("h1",{children:"D3 React.js Charts"}),Object(D.jsx)("svg",{ref:e})]})}),ve=function(e){var t=P(),a=e.store.getState();return Object(D.jsxs)(r.a,{children:[Object(D.jsx)(C,{}),Object(D.jsx)(d.a,{maxWidth:"xl",className:t.mainContent,children:Object(D.jsxs)(O.a,{container:!0,spacing:5,justify:"center",children:[Object(D.jsxs)(O.a,{item:!0,xs:2,children:[Object(D.jsx)(k,{}),Object(D.jsx)(be.a,{orientation:"vertical",flexItem:!0})]}),Object(D.jsxs)(O.a,{item:!0,xs:10,children:[Object(D.jsx)(l.a,{path:"/profile",render:function(){return Object(D.jsx)(te,{dispatch:e.store.dispatch.bind(e.store),newPostText:a.profilePage.newPostText,posts:a.profilePage.posts})}}),Object(D.jsx)(l.a,{path:"/dialogs",render:function(){return Object(D.jsx)(pe,{dialogs:a.dialogsPage.dialogs,messages:a.dialogsPage.messages})}}),Object(D.jsx)(l.a,{path:"/charts",render:function(){return Object(D.jsx)(fe,{})}})]})]})}),Object(D.jsx)(ue,{})]})},Pe={_state:{profilePage:{newPostText:"Enter your text",posts:[{id:1,message:"DADADADa",title:"Post #1",likesCount:12},{id:2,message:"DADADADa",title:"Post #1",likesCount:4},{id:3,message:"DADADADa",title:"Post #1",likesCount:50},{id:4,message:"DADADADa",title:"Post #1",likesCount:44},{id:5,message:"DADADADa",title:"Post #1",likesCount:12},{id:6,message:"DADADADa",title:"Post #1",likesCount:20}]},dialogsPage:{messages:[{id:1,message:"Hello"},{id:2,message:"Yo"},{id:3,message:"Hi,hi"},{id:4,message:"Super"},{id:5,message:"I,m happy"},{id:6,message:"Who are you"},{id:7,message:"???"}],dialogs:[{id:1,name:"Anna"},{id:2,name:"Anton"},{id:3,name:"Maria"},{id:4,name:"Tomas"},{id:5,name:"Viktor"},{id:6,name:"Vera"},{id:7,name:"Igor"}]}},_onChange:function(){console.log("state changed")},subscribe:function(e){this._onChange=e},getState:function(){return this._state},updateNewPostText:function(e){this._state.profilePage.newPostText=e,this._onChange()},addPost:function(){var e={id:(new Date).getTime(),message:this._state.profilePage.newPostText,likesCount:0,title:""};this._state.profilePage.posts.unshift(e),this._state.profilePage.newPostText="",this._onChange()},dispatch:function(e){if("ADD_POST"===e.type){var t={id:(new Date).getTime(),message:this._state.profilePage.newPostText,likesCount:0,title:""};this._state.profilePage.posts.unshift(t),this._state.profilePage.newPostText="",this._onChange()}else"UPDATE_NEW_POST_TEXT"===e.type&&(this._state.profilePage.newPostText=e.newText,this._onChange())}},De=function(){o.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(ve,{store:Pe})}),document.getElementById("root"))};Pe.subscribe(De),De(),s()}},[[97,1,2]]]);
//# sourceMappingURL=main.2369924b.chunk.js.map