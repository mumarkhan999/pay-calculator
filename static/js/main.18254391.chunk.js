(this.webpackJsonpsal_calculator=this.webpackJsonpsal_calculator||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var a=r(1),l=r.n(a),n=r(4),c=r.n(n),i=(r(9),r(2)),s=r(0);var j=function(e){var t=e.handleMatrix,r=e.matrix;return Object(s.jsxs)("div",{onChange:function(e){return t(e.target.value)},className:"matrix-group",children:[Object(s.jsx)("h2",{children:"Please select the matrix for estimation:"}),Object(s.jsx)("input",{type:"radio",id:"hourly",name:"matrix",value:"Hourly",checked:"Hourly"===r?"true":""}),Object(s.jsx)("label",{for:"hourly",children:"Hourly"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"radio",id:"monthly",name:"matrix",value:"Monthly"}),Object(s.jsx)("label",{for:"monthly",children:"Monthly"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"radio",id:"yearly",name:"matrix",value:"Yearly"}),Object(s.jsx)("label",{for:"yearly",children:"Yearly"})]})};var h=function(e){var t=e.title,r=e.handleChange;return Object(s.jsx)("div",{className:"input-field",children:Object(s.jsxs)("div",{className:"inner-input-wrapper",children:[Object(s.jsxs)("span",{children:[t,":"]}),Object(s.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)}})]})})};var o=function(e){var t=e.dollarRate,r=e.matrixValue,a=e.matrix,l=e.monthlyWorkingHours,n={};switch(a){case"Hourly":n=function(){var e={hourly:0,monthly:0,yearly:0};return e.hourly=r,e.monthly=(r*l).toFixed(2),e.yearly=(12*e.monthly).toFixed(2),e}();break;case"Monthly":n=function(){var e={hourly:0,monthly:0,yearly:0};return e.hourly=(r/l).toFixed(2),e.monthly=r,e.yearly=(12*e.monthly).toFixed(2),e}();break;case"Yearly":n=function(){var e={hourly:0,monthly:0,yearly:0};return e.yearly=r,e.monthly=(r/12).toFixed(2),e.hourly=(e.monthly/l).toFixed(2),e}()}return Object(s.jsxs)("div",{className:"result",children:[Object(s.jsx)("hr",{}),Object(s.jsx)("h2",{children:"In ($)"}),Object(s.jsxs)("h3",{children:["Hourly Pay:      ",Object(s.jsx)("span",{children:n.hourly})]}),Object(s.jsxs)("h3",{children:["Monthly Pay:      ",Object(s.jsx)("span",{children:n.monthly})]}),Object(s.jsxs)("h3",{children:["Yearly Pay:      ",Object(s.jsx)("span",{children:n.yearly})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("h2",{children:"In your currency"}),Object(s.jsxs)("h3",{children:["Hourly Pay:      ",Object(s.jsx)("span",{children:(n.hourly*t).toFixed(2)})]}),Object(s.jsxs)("h3",{children:["Monthly Pay:      ",Object(s.jsx)("span",{children:(n.monthly*t).toFixed(2)})]}),Object(s.jsxs)("h3",{children:["Yearly Pay:      ",Object(s.jsx)("span",{children:(n.yearly*t).toFixed(2)})]})]})};var y=function(){var e=Object(a.useState)("Hourly"),t=Object(i.a)(e,2),r=t[0],l=t[1],n=Object(a.useState)(""),c=Object(i.a)(n,2),y=c[0],u=c[1],x=Object(a.useState)(""),d=Object(i.a)(x,2),b=d[0],O=d[1],m=Object(a.useState)(""),p=Object(i.a)(m,2),v=p[0],f=p[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("h1",{children:"Pay Calculator"})}),Object(s.jsx)(j,{handleMatrix:l,matrix:r}),Object(s.jsx)(h,{title:"Matrix value ($)",handleChange:u}),Object(s.jsx)(h,{title:"Dollar Rate",handleChange:O}),Object(s.jsx)(h,{title:"Monthly Working Hours",handleChange:f}),Object(s.jsx)(o,{dollarRate:b,matrixValue:y,matrix:r,monthlyWorkingHours:v})]})};c.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))},9:function(e,t,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.18254391.chunk.js.map