(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),s=c(5),i=c.n(s),a=c(2),o=(c(10),c(0)),u=function(t){var e=t.setUserName,c=Object(r.useRef)();return Object(o.jsxs)("div",{className:" start",children:[Object(o.jsx)("input",{type:"text",ref:c,placeholder:"\u05de\u05d4 \u05d4\u05e9\u05dd \u05e9\u05dc\u05da?",className:"start-input"}),Object(o.jsx)("button",{className:"start-btn",onClick:function(){c.current.value&&e(c.current.value)},children:"\u05de\u05e9\u05d7\u05e7 \u05d7\u05d3\u05e9"})]})},d=function(t){var e=t.setEndGame,c=t.questionNumber,n=Object(r.useState)(30),s=Object(a.a)(n,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){if(0===i)return e(!0);var t=setInterval((function(){o((function(t){return t-1}))}),1e3);return function(){return clearInterval(t)}}),[e,i]),Object(r.useEffect)((function(){o(30)}),[c]),i},x=c(3),j=c.p+"static/media/play.8e5f6d1d.wav",m=c.p+"static/media/correct.160572d7.wav",l=c.p+"static/media/wrong.e9468218.wav",b=c.p+"static/media/wait.30e329da.wav",O=function(t){var e=t.data,c=t.setEndGame,n=t.questionNumber,s=t.setQuestionNumber,i=Object(r.useState)(null),u=Object(a.a)(i,2),d=u[0],O=u[1],f=Object(r.useState)(null),v=Object(a.a)(f,2),w=v[0],N=v[1],h=Object(r.useState)("answer"),p=Object(a.a)(h,2),q=p[0],$=p[1],E=Object(x.a)(j),y=Object(a.a)(E,1)[0],S=Object(x.a)(m),g=Object(a.a)(S,1)[0],k=Object(x.a)(l),G=Object(a.a)(k,1)[0],C=Object(x.a)(b);Object(a.a)(C,1)[0];Object(r.useEffect)((function(){y()}),[y]),Object(r.useEffect)((function(){O(e[n-1])}),[e,n]);var I=function(t,e){setTimeout((function(){e()}),t)};return Object(o.jsxs)("div",{className:"trivia",children:[Object(o.jsx)("div",{className:"question",children:null===d||void 0===d?void 0:d.question}),Object(o.jsx)("div",{className:"answers",children:null===d||void 0===d?void 0:d.answers.map((function(t){return Object(o.jsx)("div",{className:w===t?q:"answer",onClick:function(){return function(t){N(t),$("answer active"),I(3e3,(function(){return $(t.correct?"answer correct":"answer wrong")})),I(5e3,(function(){t.correct?(g(),I(1e3,(function(){s((function(t){return t+1})),N(null)}))):(G(),I(1e3,(function(){c(!0)})))}))}(t)},children:t.text},t.id)}))})]})},f=[{id:1,question:'? "\u05d0\u05d9\u05da \u05e7\u05d5\u05e8\u05d0\u05d9\u05dd \u05dc\u05e9\u05d5\u05de\u05e8\u05ea \u05e9\u05dc \u05d4\u05d1\u05d9\u05ea \u05e1\u05e4\u05e8 \u05d1 "\u05e9\u05e7\u05e9\u05d5\u05e7\u05d4',answers:[{text:"\u05d3\u05e0\u05d9\u05d0\u05dc",correct:!1,id:11},{text:"\u05d4\u05e9\u05dd \u05e9\u05dc\u05d4 \u05dc\u05d0 \u05de\u05d5\u05d6\u05db\u05e8 \u05db\u05dc \u05d4\u05e1\u05d3\u05e8\u05d4",correct:!0,id:12},{text:"\u05e9\u05de\u05e8\u05d9\u05ea",correct:!1,id:13},{text:"\u05e9\u05de\u05e9\u05d5\u05e0\u05d4",correct:!1,id:14}]},{id:2,question:'? "\u05d0\u05d9\u05da \u05e7\u05d5\u05e8\u05d0\u05d9\u05dd \u05dc\u05de\u05d5\u05e8\u05d4 \u05d1 "\u05d4\u05d1\u05d0\u05e8',answers:[{text:"\u05d6\u05d9\u05de\u05e8\u05d9",correct:!0},{text:"\u05d2\u05d5\u05dc\u05d5",correct:!1},{text:"\u05d1\u05e0\u05d5",correct:!1},{text:"\u05e9\u05e4\u05d9\u05e8\u05d0",correct:!1}]},{id:3,question:"? \u05de\u05d9 \u05d6\u05d4 \u05d2\u05d9\u05d5\u05e8\u05d0 \u05d7\u05d3-\u05e7\u05e8\u05df",answers:[{text:'"\u05d4\u05d7\u05d1\u05e8 \u05e9\u05dc \u05d3\u05e0\u05d9\u05d0\u05dc \u05d4\u05d1\u05ea \u05de "\u05e6\u05e4\u05d5\u05e3',correct:!1},{text:'"\u05d4\u05de\u05dc\u05d0\u05da \u05d1 "\u05e1\u05d5\u05e4\u05e9\u05dc\u05d9',correct:!1},{text:"\u05d0\u05d1\u05d0 \u05e9\u05dc \u05d0\u05dc\u05d9\u05e9\u05e2",correct:!1},{text:"\u05d4\u05de\u05e4\u05e7\u05d3 \u05e9\u05dc \u05e9\u05d5\u05e1\u05d8\u05e8 \u05d5\u05e9\u05d5\u05e1\u05d8\u05e8",correct:!0}]},{id:4,question:'? "\u05de\u05de\u05d4 \u05e9\u05d7\u05e8 \u05d7\u05e1\u05d5\u05df \u05d4\u05ea\u05de\u05d5\u05d8\u05d8 \u05e2\u05dc \u05d4\u05d1\u05de\u05d4 \u05d1"\u05e1\u05d5\u05e4\u05e9\u05dc\u05d9',answers:[{text:"\u05d4\u05d5\u05d0 \u05d4\u05ea\u05d7\u05e9\u05de\u05dc",correct:!0},{text:"\u05d4\u05d5\u05d0 \u05d4\u05d7\u05dc\u05d9\u05e7 \u05db\u05d9 \u05d4\u05e8\u05e6\u05e4\u05d4 \u05d4\u05d9\u05ea\u05d4 \u05e8\u05d8\u05d5\u05d1\u05d4",correct:!1},{text:"\u05e0\u05e4\u05dc \u05e2\u05dc\u05d9\u05d5 \u05e4\u05e0\u05e1",correct:!1},{text:"\u05d4\u05d5\u05d0 \u05d0\u05db\u05dc \u05d2\u05dc\u05d9\u05d3\u05d4 \u05de\u05e7\u05d5\u05dc\u05e7\u05dc\u05ea",correct:!1}]},{id:5,question:'? \u05dc\u05d0\u05df \u05d4\u05d4\u05d5\u05e8\u05d9\u05dd \u05de"\u05dc\u05d1\u05d3 \u05d1\u05d1\u05d9\u05ea" \u05d8\u05e1\u05d5 \u05dc\u05d7\u05d5\u05e4\u05e9\u05d4',answers:[{text:"\u05e8\u05d5\u05d3\u05d5\u05e1",correct:!1},{text:"\u05e6\u05d9\u05d6\u05d9\u05e7\u05d9",correct:!1},{text:"\u05de\u05d9\u05e7\u05d5\u05e0\u05d5\u05e1",correct:!1},{text:"\u05e4\u05d0\u05e7\u05d5\u05e1",correct:!0}]},{id:6,question:"? \u05dc\u05d0\u05df \u05de\u05e0\u05e6\u05d5\u05e8\u05d4 \u05e2\u05d6\u05d1",answers:[{text:"\u05dc\u05d2'\u05d5\u05e0\u05d2\u05dc \u05d1\u05e6'\u05d9\u05dc\u05d4",correct:!1},{text:"\u05dc\u05d1\u05d9\u05ea \u05d0\u05d4\u05e8\u05d5\u05df",correct:!1},{text:"\u05dc\u05e7\u05d5\u05d8\u05d1 \u05d4\u05e6\u05e4\u05d5\u05e0\u05d9",correct:!0},{text:"\u05dc\u05d1\u05e8\u05e6\u05dc\u05d5\u05e0\u05d4",correct:!1}]},{id:7,question:'? "\u05d0\u05d9\u05d6\u05d4 \u05d6\u05de\u05e8\u05d9\u05dd \u05d4\u05ea\u05d0\u05e8\u05d7\u05d5 \u05d1\u05e4\u05e8\u05e7\u05d9\u05dd \u05e9\u05dc "\u05d0\u05d1\u05d0 \u05de\u05d8\u05e4\u05dc\u05ea',answers:[{text:"\u05d7\u05e0\u05df \u05d1\u05df \u05d0\u05e8\u05d9 \u05d5\u05e1\u05d8\u05e4\u05df",correct:!0},{text:"\u05e1\u05d8\u05d8\u05d9\u05e7 \u05d5\u05d1\u05df \u05d0\u05dc",correct:!1},{text:"\u05d0\u05d5\u05e8\u05e0\u05d4 \u05d5\u05de\u05e9\u05d4 \u05d3\u05e5",correct:!1},{text:"\u05e0\u05d5\u05e2\u05d4 \u05e7\u05d9\u05e8\u05dc \u05d5\u05de\u05e8\u05d2\u05d9",correct:!1}]},{id:8,question:'? "\u05d0\u05d9\u05d6\u05d4 \u05e1\u05e4\u05e8 \u05db\u05ea\u05d1 \u05de\u05d9\u05e7\u05d9 \u05d1\u05d4\u05e9\u05e8\u05d0\u05ea \u05d3\u05e0\u05d9\u05d0\u05dc \u05d4\u05d1\u05ea \u05d1"\u05e6\u05e4\u05d5\u05e3',answers:[{text:"\u05d7\u05d5\u05dc \u05e2\u05de\u05d5\u05e7 \u05db\u05d7\u05d5\u05dc",correct:!1},{text:"\u05d4\u05e7\u05d5\u05e4\u05d4 \u05d0\u05e4\u05d9 \u05e9\u05e8\u05e7 \u05e8\u05e6\u05ea\u05d4 \u05e1\u05dc\u05e4\u05d9",correct:!0},{text:"\u05d4\u05de\u05dc\u05db\u05d4 \u05e9\u05dc \u05de\u05d5\u05e2\u05e6\u05ea \u05ea\u05dc\u05de\u05d9\u05d3\u05d9\u05dd",correct:!1},{text:"\u05d4\u05e7\u05d5\u05e4\u05d9\u05e4\u05d4 \u05d4\u05db\u05d9 \u05d9\u05e4\u05d4",correct:!1}]},{id:9,question:'? "\u05db\u05de\u05d4 \u05e4\u05e8\u05e7\u05d9\u05dd \u05d9\u05e9 \u05e2\u05d3 \u05e2\u05db\u05e9\u05d9\u05d5 \u05dc"\u05d9\u05dc\u05d3\u05d9 \u05d1\u05d9\u05ea \u05d4\u05e2\u05e5',answers:[{text:"160",correct:!1},{text:"120",correct:!1},{text:"100",correct:!1},{text:"130",correct:!0}]},{id:10,question:"? \u05de\u05d9 \u05db\u05dc \u05d4\u05d6\u05de\u05df \u05e2\u05dd \u05e1\u05d5\u05db\u05e8\u05d9\u05d4 \u05d1\u05e4\u05d4",answers:[{text:'"\u05d4\u05e9\u05d5\u05d8\u05e8 \u05de"\u05d4\u05d1\u05d0\u05e8',correct:!0},{text:'"\u05d0\u05e0\u05e4\u05d4 \u05de"\u05d0\u05dc\u05d9\u05e9\u05e2',correct:!1},{text:'"\u05d4\u05de\u05e0\u05d4\u05dc\u05ea \u05de"\u05e9\u05e7\u05e9\u05d5\u05e7\u05d4',correct:!1},{text:'"\u05e4\u05dc\u05d5\u05d8\u05e0\u05d9\u05e7 \u05de"\u05dc\u05d1\u05d3 \u05d1\u05d1\u05d9\u05ea',correct:!1}]},{id:11,question:"? \u05d1\u05de\u05d4 \u05e9\u05d5\u05e1\u05d8\u05e8 \u05e2\u05d1\u05d3\u05d4 \u05dc\u05e4\u05e0\u05d9 \u05e9\u05d4\u05e6\u05d8\u05e8\u05e4\u05d4 \u05dc\u05e1\u05d5\u05db\u05e0\u05d5\u05ea \u05dc\u05e4\u05d9\u05e6\u05d5\u05d7 \u05e7\u05e9\u05e8\u05d9\u05dd",answers:[{text:"\u05dc\u05d9\u05e6\u05e0\u05d9\u05ea \u05d1\u05d9\u05de\u05d9 \u05d4\u05d5\u05dc\u05d3\u05ea \u05e9\u05dc \u05db\u05dc\u05d1\u05d9\u05dd",correct:!0},{text:"\u05d8\u05d1\u05d7\u05d9\u05ea \u05d1\u05de\u05e1\u05e2\u05d3\u05ea \u05d4\u05d3\u05d5\u05e0\u05d0\u05d8\u05e1\u05d9\u05d4",correct:!1},{text:"\u05de\u05d3\u05e8\u05d9\u05db\u05d4 \u05d1\u05e6\u05d5\u05e4\u05d9\u05dd",correct:!1},{text:"\u05e1\u05d5\u05db\u05e0\u05ea \u05dc\u05e4\u05ea\u05d9\u05e8\u05ea \u05ea\u05e9\u05d1\u05e6\u05d9 \u05d4\u05d9\u05d2\u05d9\u05d5\u05df",correct:!1}]},{id:12,question:'? "\u05d0\u05d9\u05da \u05e7\u05d5\u05e8\u05d0\u05d9\u05dd \u05dc\u05d2\u05dc\u05d9\u05d3\u05e8\u05d9\u05d9\u05d4 \u05d1"\u05e1\u05d5\u05e4\u05e9\u05dc\u05d9 ',answers:[{text:"\u05dc\u05e7\u05d9",correct:!1},{text:"\u05d4\u05d0\u05dc\u05e4\u05e7\u05d4",correct:!1},{text:"\u05d2\u05dc\u05d9\u05d3\u05d4 \u05d8\u05d5\u05d1\u05d4",correct:!0},{text:"\u05de\u05e7\u05e0\u05d9\u05e7\u05d5\u05dc",correct:!1}]},{id:13,question:'? "\u05de\u05d9 \u05d6\u05d4 "\u05de\u05d9\u05de\u05d9\u05e8 ',answers:[{text:'"\u05d1\u05e2\u05dc \u05d4\u05d1\u05d9\u05ea \u05e9\u05dc \u05de\u05e9\u05e4\u05d7\u05ea \u05e6\u05d5\u05e8 \u05d1"\u05dc\u05d1\u05d3 \u05d1\u05d1\u05d9\u05ea ',correct:!1},{text:'"\u05d4\u05d9\u05e6\u05d5\u05e8 \u05de"\u05d4\u05d1\u05d0\u05e8 ',correct:!0},{text:'"\u05d0\u05d7 \u05e9\u05dc \u05d8\u05dc\u05d9\u05dc\u05d4 \u05de"\u05d9\u05dc\u05d3\u05d9 \u05d1\u05d9\u05ea \u05d4\u05e2\u05e5  ',correct:!1},{text:"\u05d4\u05d1\u05df \u05d3\u05d5\u05d3 \u05d4\u05e9\u05d5\u05d5\u05d3\u05d9 \u05e9\u05dc \u05d0\u05dc\u05d9\u05e9\u05e2",correct:!1}]},{id:14,question:"? \u05de\u05d4 \u05d4\u05e9\u05dd \u05d4\u05d0\u05de\u05d9\u05ea\u05d9 \u05e9\u05dc \u05e6'\u05d9\u05e7\u05d5 \u05d2\u05d5\u05e0\u05d6\u05dc\u05e1",answers:[{text:"\u05d9\u05d0\u05d9\u05e8 \u05e1\u05d5\u05e8\u05e7\u05d9\u05df",correct:!1},{text:"\u05de\u05d9\u05e7\u05d9 \u05d7\u05d9-\u05d1\u05e8",correct:!1},{text:"\u05d0\u05dc\u05d1\u05e8\u05d8 \u05e8\u05d7\u05de\u05d9\u05dd \u05e4\u05e8\u05e8\u05d4",correct:!1},{text:"\u05d9\u05e6\u05d7\u05e7 \u05d2\u05d5\u05e8\u05de\u05d6\u05e0\u05d5",correct:!0}]},{id:15,question:"? \u05d1\u05d0\u05d9\u05d6\u05d5 \u05ea\u05d5\u05db\u05e0\u05d9\u05ea \u05d4\u05e9\u05d7\u05e7\u05e0\u05d9\u05ea \u05e8\u05d1\u05e7\u05d4 \u05de\u05d9\u05db\u05d0\u05dc\u05d9 \u05dc\u05d0 \u05de\u05e9\u05ea\u05ea\u05e4\u05ea",answers:[{text:"\u05d9\u05dc\u05d3\u05d9 \u05d1\u05d9\u05ea \u05d4\u05e2\u05e5",correct:!0},{text:"\u05d0\u05d1\u05d0 \u05de\u05d8\u05e4\u05dc\u05ea",correct:!1},{text:"\u05d0\u05dc\u05d9\u05e9\u05e2",correct:!1},{text:"\u05e9\u05e7\u05e9\u05d5\u05e7\u05d4",correct:!1}]}];var v=function(){var t=Object(r.useState)(null),e=Object(a.a)(t,2),c=e[0],n=e[1],s=Object(r.useState)(1),i=Object(a.a)(s,2),x=i[0],j=i[1],m=Object(r.useState)(!1),l=Object(a.a)(m,2),b=l[0],v=l[1],w=Object(r.useState)("\u20aa 0"),N=Object(a.a)(w,2),h=N[0],p=N[1],q=f,$=Object(r.useMemo)((function(){return[{id:1,amount:"$ 100"},{id:2,amount:"$ 200"},{id:3,amount:"$ 300"},{id:4,amount:"$ 500"},{id:5,amount:"$ 1,000"},{id:6,amount:"$ 2,000"},{id:7,amount:"$ 4,000"},{id:8,amount:"$ 8,000"},{id:9,amount:"$ 16,000"},{id:10,amount:"$ 32,000"},{id:11,amount:"$ 64,000"},{id:12,amount:"$ 125,000"},{id:13,amount:"$ 250,000"},{id:14,amount:"$ 500,000"},{id:15,amount:"$ 1,000,000"}].reverse()}),[]);return Object(r.useEffect)((function(){x>15&&v(!0),x>1&&p($.find((function(t){return t.id===x-1})).amount)}),[$,x]),Object(o.jsx)("div",{className:"App",children:c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"main",children:b?Object(o.jsxs)("div",{className:"end-game",children:[Object(o.jsxs)("h1",{className:"end-text",children:["!  ",c,", \u05d4\u05e8\u05d5\u05d5\u05d7\u05ea ",h]}),Object(o.jsx)("button",{onClick:function(){j(1),v(!1),p("\u20aa 0")},className:"end-btn",children:"\u05de\u05e9\u05d7\u05e7 \u05d7\u05d3\u05e9"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"top",children:Object(o.jsx)("div",{className:"timer",children:Object(o.jsx)(d,{setEndGame:v,questionNumber:x})})}),Object(o.jsx)("div",{className:"bottom",children:Object(o.jsx)(O,{data:q,setEndGame:v,questionNumber:x,setQuestionNumber:j})})]})}),Object(o.jsx)("div",{className:"pyramid",children:Object(o.jsx)("ul",{className:"money-list",children:$.map((function(t){return Object(o.jsxs)("li",{className:x===t.id?"money-list-item active":"money-list-item",children:[Object(o.jsx)("span",{className:"money-list-item-number",children:t.id}),Object(o.jsx)("span",{className:"money-list-item-amount",children:t.amount})]},t.id)}))})})]}):Object(o.jsx)(u,{setUserName:n})})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.69bb6a8a.chunk.js.map