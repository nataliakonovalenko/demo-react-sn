(this["webpackJsonpdemo-react-sn"]=this["webpackJsonpdemo-react-sn"]||[]).push([[4],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3KDzO",dialogsItems:"Dialogs_dialogsItems__HZmhJ",active:"Dialogs_active__1XBjT",dialog:"Dialogs_dialog__2avFz",messages:"Dialogs_messages__1JqdO",message:"Dialogs_message__1CUca"}},298:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(128),r=t(293),c=t.n(r),o=t(13),l=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:c.a.dialog+" "+c.a.active},n.a.createElement(o.b,{to:a},e.name))},m=function(e){return n.a.createElement("div",{className:c.a.message},e.message)},d=t(90),u=t(129),g=t(35),b=t(50),f=Object(b.a)(30),v=Object(u.a)({form:"dialogAdddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(d.a,{component:g.b,name:"newMessageText",placeholder:"Enter your message",validate:[b.b,f]})),n.a.createElement("div",null,n.a.createElement("button",null,"Add message")))})),E=function(e){var a=e.dialogs.map((function(e){return n.a.createElement(l,{name:e.name,key:e.id,id:e.id})})),t=e.messages.map((function(e){return n.a.createElement(m,{message:e.message,key:e.id})}));return n.a.createElement("div",{className:c.a.dialogs},n.a.createElement("div",{className:c.a.dialogsItems},a),n.a.createElement("div",{className:c.a.messages},n.a.createElement("div",null,t),n.a.createElement(v,{onSubmit:function(a){e.addNewMessage(a.newMessageText)}})))},_=t(12),p=t(37),h=t(38),O=t(41),j=t(39),D=t(42),N=t(29),w=function(e){return{isAuth:e.auth.isAuth}},k=t(7);a.default=Object(k.d)(Object(_.b)((function(e){return{messages:e.dialogsPage.messages,dialogs:e.dialogsPage.dialogs}}),(function(e){return{addNewMessage:function(a){e(Object(i.a)(a))}}})),(function(e){var a=function(a){function t(){return Object(p.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(D.a)(t,a),Object(h.a)(t,[{key:"render",value:function(){return this.props.isAuth?n.a.createElement(e,this.props):n.a.createElement(N.a,{to:"/login"})}}]),t}(n.a.Component);return Object(_.b)(w)(a)}))(E)}}]);
//# sourceMappingURL=4.ad13b38a.chunk.js.map