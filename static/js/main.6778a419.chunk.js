(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),s=(n(15),n(4)),i=n(5),d=n(6),b=n(10),u=n(9),j=n(7),l=n(0),h=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)("div",{children:t.map((function(e,t){return Object(l.jsx)("button",{type:"button",className:j.button,name:e,onClick:n,children:e.charAt(0).toUpperCase()+e.slice(1)},t)}))})},v=n(8),O=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{className:v.reviews,children:[Object(l.jsx)("h2",{children:t}),n]})},p=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})},f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(l.jsx)(l.Fragment,{children:a>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Statistics"}),Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral:",n]}),Object(l.jsxs)("p",{children:["Bad:",c]}),Object(l.jsxs)("p",{children:["Total:",a]}),Object(l.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]}):Object(l.jsx)(p,{message:"No feedback given"})})},g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.addReview=function(t){var n=t.target.name;e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e}return Object(d.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good;return Math.round(e/this.countTotalFeedback()*100)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(O,{title:"Please leave feedback",children:[Object(l.jsx)(h,{options:a,onLeaveFeedback:this.addReview}),Object(l.jsx)(f,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})})}}]),n}(c.Component);o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={button:"FeedbackOptions_button__2CigL"}},8:function(e,t,n){e.exports={reviews:"Section_reviews__1UoJI"}}},[[17,1,2]]]);
//# sourceMappingURL=main.6778a419.chunk.js.map