(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(7),o=n.n(s),a=(n(13),n(2)),i=n(3),h=n(5),d=n(4),l=function(e){var t=e.name,n=e.email,c=e.phone,s=e.address,o=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n}),Object(r.jsx)("p",{children:c}),Object(r.jsx)("p",{children:s})]})]})},b=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(l,{id:t[n].id,name:t[n].name,email:t[n].email,phone:t[n].phone,address:t[n].address.street},n)}))})},j=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},u=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"},children:e.children})},f=(c.Component,n(14),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)(u,{children:Object(r.jsx)(b,{robots:c})})]}):Object(r.jsx)("h1",{children:"Loading"})}}]),n}(c.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);o.a.render(Object(r.jsx)(f,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.fb59de50.chunk.js.map