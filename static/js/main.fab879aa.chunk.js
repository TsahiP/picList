(this.webpackJsonppiclist=this.webpackJsonppiclist||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(29),i=n.n(a),u=(n(35),n(5)),s=n.n(u),o=n(6),l=n(11),f=n(30),b=Object(f.create)({baseURL:"http://cs.cbtgroup.ml:27015/"}),d=function(){return b.get("/api/pic_list")},p=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:if((t=e.sent).ok){e.next=5;break}return e.abrupt("return",t.data);case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j={handleGetPicList:p},h=Object(r.createContext)(),v=(n(103),function(e){return console.log(e),b.delete("/api/pic_list/"+e)}),O=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.data);case 5:return e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x={handleDeleteService:O},m=n(0),A=function(e){var t=e.itemName,n=e.id;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:t}),Object(m.jsxs)("div",{className:"ui vertical animated button",onClick:function(){var e=x.handleDeleteService(parseInt(n));console.log(e)},children:[Object(m.jsx)("div",{className:"hidden content",children:"Delete"}),Object(m.jsx)("div",{className:"visible content",children:Object(m.jsx)("i",{className:"trash alternate icon"})})]})]})},n)},z=function(){var e=Object(r.useContext)(h).picList;return Object(m.jsx)("div",{children:e?e.map((function(e){return Object(m.jsx)(A,{itemName:e.itemName,id:e.id})})):console.log("dont have")})},g=function(e){return b.post("/api/pic_list",e)},N=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.data);case 5:return e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={handlePostNewItem:N},I=function(){var e=Object(r.useState)({itemName:""}),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)("div",{children:["Add new item",Object(m.jsx)("div",{className:"ui input focus",children:Object(m.jsx)("input",{type:"text",name:"itemName",value:n.itemName,placeholder:"Search...",onChange:function(e){return function(e){c({itemName:e.target.value}),console.log(n)}(e)}})}),Object(m.jsx)("button",{className:"ui primary button",onClick:function(){C.handlePostNewItem(n),c({itemName:""})},children:"Save"})]})},L=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"data:image/png;base64,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",alt:"header pic"})})},E=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){a()}),[n]);var a=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.handleGetPicList();case 2:t=e.sent,console.log(t),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(h.Provider,{value:{picList:n},children:Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsxs)("div",{style:{textAlign:"center"},children:[Object(m.jsx)(L,{className:"App-header"}),Object(m.jsx)(I,{}),Object(m.jsx)(z,{})]})})})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root"))},35:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.fab879aa.chunk.js.map