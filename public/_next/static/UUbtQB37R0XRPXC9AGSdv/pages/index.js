(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{"0Sah":function(e,a,t){"use strict";var n=t("RAs/"),l=t("hVfy"),s=t("TSYQ"),r=t.n(s),c=t("q1tI"),i=t.n(c),m=t("eP04"),o=t.n(m),d=t("dDSv"),u=t.n(d),f=t("yUwB"),p=t("AIYj"),E=t("yTlV"),b=t("CLtb"),h=t("bF4Q"),v=t("pvJ/"),N={show:!0,transition:b.a,closeLabel:"Close alert"},g={show:"onClose"},w=i.a.forwardRef(function(e,a){var t=o()(e,g),s=t.bsPrefix,c=t.show,m=t.closeLabel,d=t.className,f=t.children,p=t.variant,b=t.onClose,v=t.dismissible,N=t.transition,w=Object(l.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),y=Object(E.b)(s,"alert"),j=u()(function(e){b(!1,e)}),k=i.a.createElement("div",Object(n.a)({role:"alert"},N?w:void 0,{className:r()(d,y,p&&y+"-"+p,v&&y+"-dismissible")}),v&&i.a.createElement(h.a,{onClick:j,label:m}),f);return N?i.a.createElement(N,Object(n.a)({unmountOnExit:!0,ref:a},w,{in:c}),k):c?k:null}),y=Object(p.a)("h4");y.displayName="DivStyledAsH4",w.displayName="Alert",w.defaultProps=N,w.Link=Object(f.a)("alert-link",{Component:v.a}),w.Heading=Object(f.a)("alert-heading",{Component:y}),a.a=w},RNiq:function(e,a,t){"use strict";t.r(a);var n=t("0iUn"),l=t("sLSF"),s=t("MI3g"),r=t("a7VT"),c=t("Tit0"),i=t("q1tI"),m=t.n(i),o=t("nkX9"),d=t("/MKj"),u=t("0Sah"),f=t("WpKv"),p=t("9pDC"),E=t("O5OV"),b=t("RFJL"),h=t("47Jv"),v=t("YFqc"),N=t.n(v),g=t("b0oO"),w=t("Ti5x"),y=t("6vY3"),j=function(e){function a(){return Object(n.default)(this,a),Object(s.default)(this,Object(r.default)(a).apply(this,arguments))}return Object(c.default)(a,e),Object(l.default)(a,[{key:"componentWillMount",value:function(){Object(y.a)(this.props.dispatch)}},{key:"render",value:function(){if(!this.props.authChecked||!this.props.isLoggedIn)return m.a.createElement(w.default,null);var e=this.props.assignedTasks.length,a=this.props.taskReports.length,t="";return(e>0||a>0)&&(t=m.a.createElement(u.a,{variant:"warning"},m.a.createElement("i",{className:"fas fa-bell"}),"היי ",this.props.userData.firstName,", יש לך ",e>0?m.a.createElement(N.a,{href:"/assigned-tasks"},m.a.createElement("a",null,m.a.createElement("strong",null,e)," איסופים קרובים")):"",e>0&&a>0?" ועוד ":"",a>0?m.a.createElement(N.a,{href:"/task-reports"},m.a.createElement("a",null,m.a.createElement("strong",null,a)," איסופים הממתינים למשוב")):"",".")),this.props.userData.admin?m.a.createElement("div",null,m.a.createElement(g.a,{page:"index"}),m.a.createElement("div",{className:"app"},m.a.createElement("div",{className:"wrapper d-flex justify-content-center"},m.a.createElement("main",{className:"m-2",style:{paddingBottom:"3rem"}},t,m.a.createElement("div",{className:"mb-4 mt-4"},m.a.createElement("h2",null,m.a.createElement("img",{src:"/static/dashboard.png",width:"60"}),"לוח בקרה"),m.a.createElement(f.a,{className:"mt-4"},m.a.createElement(p.a,{bg:"primary",text:"white",style:{width:"18rem"}},m.a.createElement(p.a.Header,null,"השבוע"),m.a.createElement(p.a.Body,null,m.a.createElement(p.a.Text,null,m.a.createElement("div",{style:{textAlign:"center",fontSize:"2rem"}},"5"),m.a.createElement("div",null,m.a.createElement(E.a,null,m.a.createElement(b.a,{key:"help",overlay:m.a.createElement(h.a,{id:"tooltip"},"איסופים הקבועים להיום ומחר שעדיין לא שובצו לאף מתנדב")},m.a.createElement("div",{style:{width:"100%",textAlign:"center"}}," איסופים דחופים לשיבוץ ",m.a.createElement("i",{className:"fas fa-question-circle"}))))),m.a.createElement("div",{className:"mt-4"},m.a.createElement("i",{className:"fas fa-hourglass-start fa-fw"}),"21 איסופים עתידיים"),m.a.createElement("div",null,m.a.createElement("i",{className:"far fa-calendar-times fa-fw"}),"11 משובים לא מולאו"),m.a.createElement("div",null,m.a.createElement("i",{className:"far fa-calendar-alt fa-fw"}),'51 איסופים סה"כ')))),m.a.createElement(p.a,null,m.a.createElement(p.a.Header,null,"סטטוס מתנדבים"),m.a.createElement(p.a.Body,null,m.a.createElement(p.a.Text,null,m.a.createElement("div",{style:{textAlign:"center",fontSize:"2rem"}},"143"),m.a.createElement("div",{style:{textAlign:"center"}},"מתנדבים פעילים השבוע"),m.a.createElement("div",{className:"mt-4"},m.a.createElement("i",{className:"far fa-user fa-fw"}),"324 מתנדבים באזור ",this.props.userData.region),m.a.createElement("div",null,m.a.createElement("i",{className:"far fa-envelope fa-fw"}),'2 אימותי דוא"ל ממתינים')))))))))):m.a.createElement("div",null,m.a.createElement(g.a,{page:"index"}),m.a.createElement("div",{className:"app"},m.a.createElement("div",{className:"wrapper d-flex justify-content-center"},m.a.createElement("main",{className:"m-2",style:{paddingBottom:"3rem"}},t,m.a.createElement("div",{className:"mb-4 mt-4"},m.a.createElement("h2",null,m.a.createElement("img",{src:"/static/assign.png",width:"60"}),"שיבוץ לאיסופים")),m.a.createElement(o.a,{isSelectable:!0,data:this.props.unassignedTasks,page:"index",type:"tasks"})))))}}]),a}(i.Component);a.default=Object(d.b)(function(e){return e})(j)},bF4Q:function(e,a,t){"use strict";var n=t("RAs/"),l=t("hVfy"),s=t("bQTf"),r=t.n(s),c=t("q1tI"),i=t.n(c),m=t("TSYQ"),o=t.n(m),d={label:r.a.string.isRequired,onClick:r.a.func},u=i.a.forwardRef(function(e,a){var t=e.label,s=e.onClick,r=e.className,c=Object(l.a)(e,["label","onClick","className"]);return i.a.createElement("button",Object(n.a)({ref:a,type:"button",className:o()("close",r),onClick:s},c),i.a.createElement("span",{"aria-hidden":"true"},"×"),i.a.createElement("span",{className:"sr-only"},t))});u.displayName="CloseButton",u.propTypes=d,u.defaultProps={label:"Close"},a.a=u},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);