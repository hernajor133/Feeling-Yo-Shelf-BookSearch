(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a,r,o,s,c,i=n(0),l=n(45),d=n.n(l),u=(n(107),n(108),n(34)),j=n(98),b=n(100),h=n(137),O=n(133),m=n(97),x=n(62),p=n(10),v=n(51),g=n(38),k=n(12),f=n(22),w=n.n(f),S=n(127),y=n(128),I=n(136),C=n(95),B=n(129),F=n(130),L=n(142),T=n(125),_=n(52),N=n(135),$=Object(N.a)(a||(a=Object(_.a)(["\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),q=Object(N.a)(r||(r=Object(_.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),U=Object(N.a)(o||(o=Object(_.a)(["\n  mutation saveBook($book: savedBook!) {\n    saveBook(book: $book) {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),E=Object(N.a)(s||(s=Object(_.a)(["\n  mutation removeBook($bookId: ID!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),D=n(23),G=n(24),P=n(84),Y=n.n(P),J=new(function(){function e(){Object(D.a)(this,e)}return Object(G.a)(e,[{key:"getProfile",value:function(){return Y()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Y()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"loginUser",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),K=function(e){var t=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!t)return!1;var n=null===t||void 0===t?void 0:t.filter((function(t){return t!==e}));return localStorage.setItem("saved_books",JSON.stringify(n)),!0},V=n(3),z=function(){var e=Object(i.useState)([]),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),o=Object(k.a)(r,2),s=o[0],c=o[1],l=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),d=Object(k.a)(l,2),u=d[0],j=d[1],b=Object(T.a)(U),h=Object(k.a)(b,1)[0];Object(i.useEffect)((function(){return function(){var e;(e=u).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var O=function(){var e=Object(g.a)(w.a.mark((function e(t){var n,r,o,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(s));case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||""}})),a(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(g.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.find((function(e){return e.bookId===t})),J.loggedIn()?J.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,h({variables:{book:a}});case 7:j([].concat(Object(v.a)(u),[a.bookId])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(S.a,{fluid:!0,className:"text-light bg-dark",children:Object(V.jsxs)(y.a,{children:[Object(V.jsx)("h1",{children:"Search for Books!"}),Object(V.jsx)(I.a,{onSubmit:O,children:Object(V.jsxs)(I.a.Row,{children:[Object(V.jsx)(C.a,{xs:12,md:8,children:Object(V.jsx)(I.a.Control,{name:"searchInput",value:s,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})}),Object(V.jsx)(C.a,{xs:12,md:4,children:Object(V.jsx)(B.a,{type:"submit",variant:"success",size:"lg",children:"Submit Search"})})]})})]})}),Object(V.jsxs)(y.a,{children:[Object(V.jsx)("h2",{children:n.length?"Viewing ".concat(n.length," results:"):"Search for a book to begin"}),Object(V.jsx)(F.a,{children:n.map((function(e){return Object(V.jsxs)(L.a,{border:"dark",children:[e.image?Object(V.jsx)(L.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(V.jsxs)(L.a.Body,{children:[Object(V.jsx)(L.a.Title,{children:e.title}),Object(V.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(V.jsx)(L.a.Text,{children:e.description}),J.loggedIn()&&Object(V.jsx)(B.a,{disabled:null===u||void 0===u?void 0:u.some((function(t){return t===e.bookId})),className:"btn-block btn-info",onClick:function(){return m(e.bookId)},children:null!==u&&void 0!==u&&u.some((function(t){return t===e.bookId}))?"This book has already been saved!":"Save this Book!"})]})]},e.bookId)}))})]})]})},A=n(131),H=Object(N.a)(c||(c=Object(_.a)(["\n  query me {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),M=function(){var e=Object(A.a)(H),t=e.loading,n=e.data,a=(null===n||void 0===n?void 0:n.me)||{},r=Object(T.a)(E),o=Object(k.a)(r,1)[0],s=function(){var e=Object(g.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.loggedIn()?J.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,o({variables:{bookId:t}});case 6:K(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return t?Object(V.jsx)("h2",{children:"LOADING..."}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(S.a,{fluid:!0,className:"text-light bg-dark",children:Object(V.jsx)(y.a,{children:Object(V.jsx)("h1",{children:"Viewing saved books!"})})}),Object(V.jsxs)(y.a,{children:[Object(V.jsx)("h2",{children:a.savedBooks.length?"Viewing ".concat(a.savedBooks.length," saved ").concat(1===a.savedBooks.length?"book":"books",":"):"You have no saved books!"}),Object(V.jsx)(F.a,{children:a.savedBooks.map((function(e){return Object(V.jsxs)(L.a,{border:"dark",children:[e.image?Object(V.jsx)(L.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(V.jsxs)(L.a.Body,{children:[Object(V.jsx)(L.a.Title,{children:e.title}),Object(V.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(V.jsx)(L.a.Text,{children:e.description}),Object(V.jsx)(B.a,{className:"btn-block btn-danger",onClick:function(){return s(e.bookId)},children:"Delete this Book!"})]})]},e.bookId)}))})]})]})},R=n(139),W=n(138),Q=n(134),X=n(140),Z=n(56),ee=n(132),te=function(){var e=Object(i.useState)({username:"",email:"",password:""}),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(k.a)(r,1)[0],s=Object(i.useState)(!1),c=Object(k.a)(s,2),l=c[0],d=c[1],j=Object(T.a)(q),b=Object(k.a)(j,1)[0],h=function(e){var t=e.target,r=t.name,o=t.value;a(Object(u.a)(Object(u.a)({},n),{},Object(Z.a)({},r,o)))},O=function(){var e=Object(g.a)(w.a.mark((function e(t){var r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b({variables:Object(u.a)({},n)});case 4:r=e.sent,o=r.data,J.loginUser(o.addUser.token),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),d(!0);case 13:a({username:"",email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(I.a,{noValidate:!0,validated:o,onSubmit:O,children:[Object(V.jsx)(ee.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your signup!"}),Object(V.jsxs)(I.a.Group,{children:[Object(V.jsx)(I.a.Label,{htmlFor:"username",children:"Username"}),Object(V.jsx)(I.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:n.username,required:!0}),Object(V.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(V.jsxs)(I.a.Group,{children:[Object(V.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(V.jsx)(I.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:h,value:n.email,required:!0}),Object(V.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(V.jsxs)(I.a.Group,{children:[Object(V.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(V.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(V.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(V.jsx)(B.a,{disabled:!(n.username&&n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},ne=function(){var e=Object(i.useState)({email:"",password:""}),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(k.a)(r,1)[0],s=Object(i.useState)(!1),c=Object(k.a)(s,2),l=c[0],d=c[1],j=Object(T.a)($),b=Object(k.a)(j,1)[0],h=function(e){var t=e.target,r=t.name,o=t.value;a(Object(u.a)(Object(u.a)({},n),{},Object(Z.a)({},r,o)))},O=function(){var e=Object(g.a)(w.a.mark((function e(t){var r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b({variables:Object(u.a)({},n)});case 4:r=e.sent,o=r.data,J.loginUser(o.loginUser.token),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),d(!0);case 13:a({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(I.a,{noValidate:!0,validated:o,onSubmit:O,children:[Object(V.jsx)(ee.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(V.jsxs)(I.a.Group,{children:[Object(V.jsx)(I.a.Label,{htmlFor:"email",children:"Email"}),Object(V.jsx)(I.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:h,value:n.email,required:!0}),Object(V.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(V.jsxs)(I.a.Group,{children:[Object(V.jsx)(I.a.Label,{htmlFor:"password",children:"Password"}),Object(V.jsx)(I.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(V.jsx)(I.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(V.jsx)(B.a,{disabled:!(n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},ae=function(){var e=Object(i.useState)(!1),t=Object(k.a)(e,2),n=t[0],a=t[1];return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(R.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(V.jsxs)(y.a,{fluid:!0,children:[Object(V.jsx)(R.a.Brand,{as:x.b,to:"/",children:"Google Books Search"}),Object(V.jsx)(R.a.Toggle,{"aria-controls":"navbar"}),Object(V.jsx)(R.a.Collapse,{id:"navbar",children:Object(V.jsxs)(W.a,{className:"ml-auto",children:[Object(V.jsx)(W.a.Link,{as:x.b,to:"/",children:"Search For Books"}),J.loggedIn()?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(W.a.Link,{as:x.b,to:"/saved",children:"See Your Books"}),Object(V.jsx)(W.a.Link,{onClick:J.logout,children:"Logout"})]}):Object(V.jsx)(W.a.Link,{onClick:function(){return a(!0)},children:"Login/Sign Up"})]})})]})}),Object(V.jsx)(Q.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"signup-modal",children:Object(V.jsxs)(X.a.Container,{defaultActiveKey:"login",children:[Object(V.jsx)(Q.a.Header,{closeButton:!0,children:Object(V.jsx)(Q.a.Title,{id:"signup-modal",children:Object(V.jsxs)(W.a,{variant:"pills",children:[Object(V.jsx)(W.a.Item,{children:Object(V.jsx)(W.a.Link,{eventKey:"login",children:"Login"})}),Object(V.jsx)(W.a.Item,{children:Object(V.jsx)(W.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(V.jsx)(Q.a.Body,{children:Object(V.jsxs)(X.a.Content,{children:[Object(V.jsx)(X.a.Pane,{eventKey:"login",children:Object(V.jsx)(ne,{handleModalClose:function(){return a(!1)}})}),Object(V.jsx)(X.a.Pane,{eventKey:"signup",children:Object(V.jsx)(te,{handleModalClose:function(){return a(!1)}})})]})})]})})]})},re=Object(j.a)({uri:"/graphql"}),oe=Object(m.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(u.a)(Object(u.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),se=new b.a({link:oe.concat(re),cache:new h.a});var ce=function(){return Object(V.jsx)(O.a,{client:se,children:Object(V.jsx)(x.a,{children:Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(ae,{}),Object(V.jsxs)(p.c,{children:[Object(V.jsx)(p.a,{path:"/",element:Object(V.jsx)(z,{})}),Object(V.jsx)(p.a,{path:"/saved",element:Object(V.jsx)(M,{})}),Object(V.jsx)(p.a,{path:"*",element:Object(V.jsx)("h1",{className:"display-2",children:"Wrong page!"})})]})]})})})};d.a.render(Object(V.jsx)(ce,{}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.fe4f4e5b.chunk.js.map