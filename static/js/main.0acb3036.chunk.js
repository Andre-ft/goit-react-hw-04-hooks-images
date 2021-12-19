(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={Item:"ImageGalleryItem_Item__1KFI8","Item-image":"ImageGalleryItem_Item-image__c5MHf"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2NURL",Modal:"Modal_Modal__DfipM"}},14:function(e,t,a){e.exports={"App-header":"App_App-header__1tE6L","App-link":"App_App-link__ITvKa",App:"App_App__2fo9Q"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2QTDj"}},17:function(e,t,a){e.exports={Loader:"Loader_Loader__2xxek"}},18:function(e,t,a){e.exports={Button:"Button_Button__k64fL"}},24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=(a(24),a(3)),u=a(14),l=a.n(u),s=a(8),j=a(5),b=a.n(j),m=a(1);function d(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(m.jsx)("header",{className:b.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):s.b.error("Input query.")},className:b.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:b.a.SearchForm_button,children:Object(m.jsx)("span",{className:b.a.SearchForm_button_label,children:"Search"})}),Object(m.jsx)("input",{className:b.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var h=d;d.defaultProps={onSubmit:function(){return null}};a(26);var f=a(12);var p={fetchGallery:function(e,t){return fetch("".concat("https://pixabay.com","/api/?q=").concat(e,"&page=").concat(t,"&key=").concat("23458770-c93bd78e83fb2002196f13d31","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){return 0===t.hits.length?Promise.reject(new Error("Nothing to show for: ".concat(e))):t.hits}))}},_=a(15),O=a.n(_),g=a(10),x=a.n(g);function v(e){var t=e.item,a=t.id,n=t.webformatURL,r=t.largeImageURL,c=e.onClick;return Object(m.jsx)("li",{className:x.a.Item,children:Object(m.jsx)("img",{src:n,alt:"",className:x.a["Item-image"],id:a,onClick:function(){return c(r)}})})}v.defaultProps={onClick:function(){return null}};a(27);var S=a(16),y=a.n(S),k=a(17),I=a.n(k);function L(){return Object(m.jsx)(y.a,{className:I.a.Loader,type:"MutatingDots",color:"#6ef8d6",height:100,width:100,timeout:2e3,radius:20,secondaryColor:"#1262a8"})}var C=a.p+"static/media/error.7d86105a.jpg";function w(e){var t=e.message;return Object(m.jsxs)("div",{role:"alert",children:[Object(m.jsx)("img",{src:C,width:"240",alt:"sadcat"}),Object(m.jsx)("p",{children:t})]})}var F=a(13),N=a(19),A=a(18),G=a.n(A),E=["onClick"],M=function(e){var t=e.onClick,a=Object(N.a)(e,E);return Object(m.jsx)("button",Object(F.a)(Object(F.a)({type:"button",className:G.a.Button,onClick:t},a),{},{children:"Load more"}))};M.defaultProps={onClick:function(){return null}};var q=M,B="idle",P="pending",R="resolved",U="rejected";function T(e){var t=e.query,a=e.getImageURL,r=Object(n.useState)(null),c=Object(i.a)(r,2),o=c[0],u=c[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),j=s[0],b=s[1],d=Object(n.useState)(B),h=Object(i.a)(d,2),_=h[0],g=h[1],x=Object(n.useState)(1),S=Object(i.a)(x,2),y=S[0],k=S[1];Object(n.useEffect)((function(){""!==t&&(g(P),k(1),p.fetchGallery(t,1).then((function(e){u(e),g(R)})).catch((function(e){b(e),g(U)})))}),[t]),Object(n.useEffect)((function(){1!==y&&p.fetchGallery(t,y).then((function(e){u([].concat(Object(f.a)(o),Object(f.a)(e))),g(R)})).catch((function(e){b(e),g(U)}))}),[y]);var I=function(e){a(e)};return"idle"===_?Object(m.jsx)("div",{children:"Input query."}):"pending"===_?Object(m.jsx)(L,{}):"rejected"===_?Object(m.jsx)(w,{message:j.message}):"resolved"===_?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{className:O.a.ImageGallery,children:o.map((function(e){return Object(m.jsx)(v,{item:e,onClick:I},e.id)}))}),Object(m.jsx)(q,{onClick:function(){k(y+1)},"aria-label":"Load more images"})]}):void 0}var D=a(11),z=a.n(D),J=document.querySelector("#modal-root");function K(e){var t=e.children,a=e.onClose;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){return window.removeEventListener("keydown",r)}}),[]);var r=function(e){"Escape"===e.code&&a()};return Object(c.createPortal)(Object(m.jsx)("div",{className:z.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(m.jsx)("div",{className:z.a.Modal,children:t})}),J)}K.defaultProps={onClose:function(){return null}};var Q=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(i.a)(c,2),u=o[0],j=o[1];return Object(m.jsxs)("div",{className:l.a.App,style:{maxWidth:1170,margin:"0 auto",padding:20},children:[Object(m.jsx)(h,{onSubmit:function(e){r(e)}}),Object(m.jsx)(T,{query:a,getImageURL:function(e){j(e)}}),u&&Object(m.jsx)(K,{onClose:function(){j(null)},imageURL:u,children:Object(m.jsx)("img",{src:u,alt:a})}),Object(m.jsx)(s.a,{autoClose:3e3})]})};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(Q,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__-kOzB",SearchForm:"Searchbar_SearchForm__17Llm",SearchForm_button:"Searchbar_SearchForm_button__10mqL",SearchForm_button_label:"Searchbar_SearchForm_button_label__OthTu",SearchForm_input:"Searchbar_SearchForm_input__3GzXo"}}},[[48,1,2]]]);
//# sourceMappingURL=main.0acb3036.chunk.js.map