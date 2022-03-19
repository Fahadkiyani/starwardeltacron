"use strict";(self.webpackChunkstar_war_app=self.webpackChunkstar_war_app||[]).push([[133],{8133:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=a(2791),n=a(885),i=a(4569),l=a.n(i),d=a(1687),r=a(184),c=(0,s.createContext)();function o(e){var t=e.children,a=(0,s.useState)(),i=(0,n.Z)(a,2),o=i[0],u=i[1],h=(0,s.useState)(null),m=(0,n.Z)(h,2),x=m[0],f=m[1],v=(0,s.useState)(!1),j=(0,n.Z)(v,2),p=j[0],D=j[1],w=(0,s.useState)([]),g=(0,n.Z)(w,2),N=g[0],y=g[1],S=(0,s.useState)(!1),b=(0,n.Z)(S,2),H=b[0],Z=b[1],k=(0,s.useState)({}),B=(0,n.Z)(k,2),C=B[0],M=B[1];(0,s.useEffect)((function(){_()}),[]);var z=localStorage.getItem("token"),_=function(){D(!0),l().post("".concat(d.HQ,"/people"),{authorization:"Bearer ".concat(z)}).then((function(e){y(e.data.results),D(!1)})).catch((function(e){return alert(e)}))},A={isAuthorized:o,setIsAuthorized:u,isValidUser:x,setIsValidUser:f,isLoading:p,setIsLoading:D,showDetails:H,setShowDetails:Z,tempData:N,setTempData:y,tempDetailsData:C,setTempDetailsData:M,fetchPeoplesListHandler:_,fetchDetailsHandler:function(e){D(!0),l().post("".concat(d.HQ,"/people/details"),{route:e,authorization:"Bearer ".concat(z)}).then((function(e){M(e.data),D(!1)})).catch((function(e){return alert(e)}))}};return(0,r.jsx)(c.Provider,{value:A,children:t})}var u=a(8386),h=a(9051),m=a(2426),x=a.n(m),f=a(1554);function v(e){var t=e.title,a=e.body,s=(e.cancelBtn,e.confirmBtn,e.handleConfirm,e.showModal),n=e.setShowModal;e.defaultEventHandler;return(0,r.jsxs)(f.Z,{show:s,centered:!0,fullscreen:!1,size:"lg",onHide:function(){return n(!1)},children:[(0,r.jsx)(f.Z.Header,{closeButton:!0,children:(0,r.jsx)(f.Z.Title,{children:(0,r.jsx)("h1",{children:t})})}),(0,r.jsx)(f.Z.Body,{style:{maxHeight:"70vh",minHeight:"70vh",overflow:"auto"},children:(0,r.jsx)("div",{className:"d-flex justify-content-center",children:a})})]})}var j=function(){var e,t=(0,s.useContext)(c),a=t.tempData,n=t.tempDetailsData,i=t.isLoading,l=t.showDetails,d=t.setShowDetails,o=t.fetchDetailsHandler,m=(0,s.useMemo)((function(){return{tempData:a}}),[a]),f=Object.keys(n);return(0,r.jsxs)(r.Fragment,{children:[l&&(0,r.jsx)(v,{showModal:l,setShowModal:function(e){return d(e)},title:null===n||void 0===n?void 0:n.name,body:i?(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)(u.a,{})}):(0,r.jsx)("div",{children:(0,r.jsxs)("table",{style:{maxWidth:"inherit"},children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Fields"}),(0,r.jsx)("th",{children:"Value"})]}),f.map((function(e,t){return e=e.toString(),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"h6",children:e}),(0,r.jsx)("td",{title:null===n||void 0===n?void 0:n[e],className:"text-truncate",style:{maxWidth:400},children:null===n||void 0===n?void 0:n[e]})]},t)}))]})})}),(0,r.jsxs)("div",{className:"p-5 m-5 mt-2 shadow p-3 mb-5 bg-white rounded",children:[i&&(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)(u.a,{})}),(0,r.jsx)(h.X2,{className:"d-flex-row",children:null===m||void 0===m||null===(e=m.tempData)||void 0===e?void 0:e.map((function(e,t){return(0,r.jsx)(h.JX,{sm:"12",md:"6",lg:"4",onClick:function(){o(null===e||void 0===e?void 0:e.url),d(!0)},children:(0,r.jsx)("div",{className:"card mb-2",children:(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"d-flex-row",children:[(0,r.jsx)("h5",{className:"card-title",children:null===e||void 0===e?void 0:e.name}),(0,r.jsxs)("p",{children:["male"===(null===e||void 0===e?void 0:e.gender)?(0,r.jsx)("i",{class:"fa fa-male","aria-hidden":"true"}):"female"===(null===e||void 0===e?void 0:e.gender)?(0,r.jsx)("i",{class:"fa fa-female","aria-hidden":"true"}):(0,r.jsx)("i",{class:"fa fa-genderless","aria-hidden":"true"})," ",null===e||void 0===e?void 0:e.gender]})]}),(0,r.jsx)("p",{className:"card-text pt-0 mt-0",children:(0,r.jsxs)("span",{className:"text-muted",children:[(0,r.jsx)("i",{className:"fa fa-eye"})," ",null===e||void 0===e?void 0:e.eye_color," | ",null===e||void 0===e?void 0:e.height," inch | DOB ",null===e||void 0===e?void 0:e.birth_year]})}),(0,r.jsxs)("p",{className:"pt-0 mt-0 text-muted",style:{fontSize:"0.8em"},children:["Created At: ",x()(null===e||void 0===e?void 0:e.created).format("YYYY-MM-DD hh:mm A")]})]})})})},t)}))}),(0,r.jsx)("div",{className:"pb-3"})]})]})},p=function(){return(0,r.jsx)(o,{children:(0,r.jsx)(j,{})})}}}]);
//# sourceMappingURL=133.7a3be7d8.chunk.js.map