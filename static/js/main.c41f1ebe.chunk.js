(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{25:function(e,t,i){},43:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),a=i(10),c=i.n(a),r=(i(25),i(5)),o=i(13),u=i(4),l=i(3),d="SINGLE_SELECT",j="MULTI_SELECT",p="IMAGE_SINGLE_SELECT",b="IMAGE_MULTI_SELECT",m="TEXT_FIELD",h=i(8),v=function(){return Object(h.b)()},O=h.c,w=i(12),g=Object(w.b)({name:"quiz",initialState:{answers:{},showCorrect:!1,correctPoints:{}},reducers:{addAnswer:function(e,t){e.answers=Object(u.a)(Object(u.a)({},e.answers),t.payload)},clearAnswers:function(e){e.answers={}},setCorrectPoints:function(e,t){e.correctPoints=t.payload},setShowAnswers:function(e,t){e.showCorrect=t.payload}}}),f=function(e){return e.quiz.answers},A=function(e){return e.quiz.showCorrect},x=function(e){return e.quiz.correctPoints},k=g.actions,_=k.addAnswer,C=(k.clearAnswers,k.setShowAnswers),S=k.setCorrectPoints,q=g.reducer,y=i(6),N=i(2),T=(i(43),i(1)),M=function(e){var t,i=e.question,n=e.isImage,s=e.incompleteAnswers,a=i.question,c=i.description,r=void 0===c?"":c,o=i.pts,u=i.answers,d=void 0===u?[]:u,j=i.name,p=i.correctAnswers,b=null===(t=O(f))||void 0===t?void 0:t[j],m=O(A),h=O(x),w=v();return Object(T.jsxs)("div",{className:Object(N.a)("SingleChoice-Wrapper",s.includes(j)&&"SingleChoice-Wrapper_isRed"),children:[Object(T.jsx)("div",{className:Object(N.a)("SingleChoice-QuestionTitle"),children:a}),Object(T.jsx)("div",{className:Object(N.a)("SingleChoice-Pts"),children:m?"".concat(null===h||void 0===h?void 0:h[j],"/").concat(o," punkti"):"".concat(o," punkti")}),Object(T.jsx)("div",{children:"Atzimejiet vienu"}),Object(T.jsx)("div",{className:Object(N.a)("SingleChoice-Description"),children:Object(y.a)(r)}),Object(T.jsx)("div",{className:Object(N.a)("SingleChoice-AnswersWrapper",n&&"SingleChoice-AnswersWrapper_isImage"),children:d.map((function(e,t){return Object(T.jsxs)("div",{className:Object(N.a)("SingleChoice-Answer",n&&"SingleChoice-Answer_isImage",m&&p.includes(t)&&"SingleChoice-Answer_isGreen",b===t&&m&&!p.includes(t)&&"SingleChoice-Answer_isRed"),children:[Object(T.jsx)("input",{id:"".concat(j).concat(e).concat(t),name:a,checked:b===t,disabled:m,onChange:function(){return w(_(Object(l.a)({},j,t)))},type:"radio"}),Object(T.jsx)("label",{htmlFor:"".concat(j).concat(e).concat(t),children:n?Object(T.jsx)("img",{className:Object(N.a)("SingleChoice-Label",b===t&&n&&"SingleChoice-Label_isSelected"),src:e}):e})]})}))})]})},z=(i(45),function(e){var t,i=e.question,n=e.isImage,s=e.incompleteAnswers,a=i.question,c=i.description,r=void 0===c?"":c,u=i.pts,d=i.answers,j=void 0===d?[]:d,p=i.name,b=i.correctAnswers,m=(null===(t=O(f))||void 0===t?void 0:t[p])||[],h=O(A),w=O(x),g=v();return Object(T.jsxs)("div",{className:Object(N.a)("MultiChoice-Wrapper",s.includes(p)&&"MultiChoice-Wrapper_isRed"),children:[Object(T.jsx)("div",{className:Object(N.a)("MultiChoice-QuestionTitle"),children:a}),Object(T.jsx)("div",{className:Object(N.a)("MultiChoice-Pts"),children:h?"".concat(null===w||void 0===w?void 0:w[p],"/").concat(u," punkti"):"".concat(u," punkti")}),Object(T.jsx)("div",{children:"Atzimejiet vienu vai vairakas"}),Object(T.jsx)("div",{className:Object(N.a)("MultiChoice-Description"),children:Object(y.a)(r)}),Object(T.jsx)("div",{className:Object(N.a)("MultiChoice-AnswersWrapper",n&&"MultiChoice-AnswersWrapper_isImage"),children:j.map((function(e,t){return Object(T.jsxs)("div",{className:Object(N.a)("MultiChoice-Answer",n&&"MultiChoice-Answer_isImage",h&&b.includes(t)&&"SingleChoice-Answer_isGreen",m.includes(t)&&h&&!b.includes(t)&&"SingleChoice-Answer_isRed"),children:[Object(T.jsx)("input",{id:"".concat(p).concat(e).concat(t),name:a,checked:m.includes(t),disabled:h,onChange:function(e){var i=e.currentTarget.checked;return function(e,t,i){g(_(i?Object(l.a)({},e,[].concat(Object(o.a)(m),[t])):Object(l.a)({},e,m.filter((function(e){return e!==t})))))}(p,t,i)},type:"checkbox"}),Object(T.jsx)("label",{htmlFor:"".concat(p).concat(e).concat(t),children:n?Object(T.jsx)("img",{className:Object(N.a)("MultiChoice-Label",m.includes(t)&&n&&"MultiChoice-Label_isSelected"),src:e}):e})]})}))})]})}),I=(i(46),function(e){var t,i=e.question,n=e.incompleteAnswers,s=i.question,a=i.description,c=void 0===a?"":a,r=i.pts,o=i.name,u=i.correctAnswers,d=(null===(t=O(f))||void 0===t?void 0:t[o])||"",j=O(A),p=O(x),b=v();return Object(T.jsxs)("div",{className:Object(N.a)("Text-Wrapper",n.includes(o)&&"Text-Wrapper_isRed"),children:[Object(T.jsx)("div",{className:Object(N.a)("Text-QuestionTitle"),children:s}),Object(T.jsx)("div",{className:Object(N.a)("Text-Pts"),children:j?"".concat(null===p||void 0===p?void 0:p[o],"/").concat(r," punkti"):"".concat(r," punkti")}),Object(T.jsx)("div",{children:"Ierakstat atbildu"}),Object(T.jsx)("div",{className:Object(N.a)("Text-Description"),children:Object(y.a)(c)}),Object(T.jsx)("div",{className:Object(N.a)("Text-AnswersWrapper",u.includes(d)&&j?"Text-AnswersWrapper_isGreen":"Text-AnswersWrapper_isRed"),children:Object(T.jsx)("input",{type:"text",value:d,disabled:j,onChange:function(e){var t=e.currentTarget.value;return b(_(Object(l.a)({},o,t)))}})})]})}),E=i(20),W=(i(47),function(e){var t=e.data,i=Object(n.useState)([]),s=Object(r.a)(i,2),a=s[0],c=s[1],h=Object(n.useState)(""),w=Object(r.a)(h,2),g=w[0],x=w[1],k=Object(n.useState)(!1),_=Object(r.a)(k,2),q=_[0],y=_[1],W=Object(E.a)(9e5,1e3),L=Object(r.a)(W,2),B=L[0],P=L[1],D=P.start,F=P.pause;Object(n.useEffect)((function(){D()}),[]);var K=O(f),R=v(),G=function(e){var t,i=e.type,n=e.name;return!(i!==d&&i!==p||!(null===K||void 0===K?void 0:K[n])&&0!==(null===K||void 0===K?void 0:K[n]))||(!(i!==j&&i!==b||!(null===K||void 0===K?void 0:K[n])||!(null===K||void 0===K||null===(t=K[n])||void 0===t?void 0:t.length))||!(i!==m||!(null===K||void 0===K?void 0:K[n])))},J=function(){return t.reduce((function(e,t){var i=t.type,n=t.correctAnswers,s=t.pts,a=void 0===s?0:s,c=t.name;if(i===d||i===p)return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},c,n.includes(null===K||void 0===K?void 0:K[c])?a:0));if(i===j||i===b){var r=a/n.length,o=((null===K||void 0===K?void 0:K[c])||[]).reduce((function(e,t){return n.includes(t)?e+r:e}),0),h=((null===K||void 0===K?void 0:K[c])||[]).reduce((function(e,t){return n.includes(t)?e:e+r}),0);return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},c,o-h))}return i===m?Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},c,n.includes(null===K||void 0===K?void 0:K[c])?a:0)):e}),{})},U=function(){return t.reduce((function(e,t){var i=t.pts;return e+(void 0===i?0:i)}),0)},Q=function(e){return Object.values(e).reduce((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e+t}),0)};Object(n.useEffect)((function(){!q&&B>0&&y(!0),q&&0===B&&H(!0)}),[B]);var H=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!e){var i=t.reduce((function(e,t){var i=t.name;return G(t)?e:[].concat(Object(o.a)(e),[i])}),[]);if(null===i||void 0===i?void 0:i.length)return void c(i)}F(),c([]),R(C(!0)),R(S(J())),x("Apsveicam, J\u016bs ieguv\u0101t ".concat(Q(J())," no ").concat(U()," punktiem")),window.scrollTo(0,0)},V=O(A);return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:Object(N.a)("Quiz-Timer"),children:"".concat(Math.floor(B/1e3/60),":").concat(B/1e3-60*Math.floor(B/1e3/60))}),Object(T.jsx)("div",{className:Object(N.a)("Quiz-Message"),children:g}),t.map((function(e){return function(e){var t;return t={},Object(l.a)(t,d,Object(T.jsx)(M,{question:e,incompleteAnswers:a})),Object(l.a)(t,j,Object(T.jsx)(z,{question:e,incompleteAnswers:a})),Object(l.a)(t,p,Object(T.jsx)(M,{question:e,incompleteAnswers:a,isImage:!0})),Object(l.a)(t,b,Object(T.jsx)(z,{question:e,incompleteAnswers:a,isImage:!0})),Object(l.a)(t,m,Object(T.jsx)(I,{question:e,incompleteAnswers:a})),t}(e)[e.type]})),Object(T.jsx)("button",{className:Object(N.a)("Quiz-Button"),onClick:function(){V?window.location.reload():H()},children:V?"S\u0100KT TESTU NO JAUNA?":"NODOT TESTU"})]})});i(48);var L=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),i=t[0],s=t[1],a=[{type:d,question:"Kur\u0101 g\u0101d\u0101 tika tika dibin\u0101ta Audi komp\u0101nija?",name:"audi_dibinasana",answers:["1909. gad\u0101","1910. gad\u0101","1903. gad\u0101","1901. gad\u0101"],pts:1,correctAnswers:[0]},{type:m,question:"K\u0101 sauc Ford komp\u0101nijas dibin\u0101taju?",name:"ford_dibina",pts:5,description:"Pirm\u0101 komp\u0101nija, kura uzs\u0101ka izmantot klasisko autora\u017eotnes konveijeru, lai atvieglotu ra\u017eo\u0161anu, palielin\u0101tu apjomus",correctAnswers:["Henrijs Fords","henrijs fords","Fords Henrijs","fords henrijs"]},{type:d,question:"Ko noz\u012bm\u0113 abriviat\u016bra ABS?",name:"abs_jautajums",answers:["Brem\u017eu blok\u0113\u0161anas sist\u0113ma","Brem\u017eu pretblo\u0137\u0113\u0161anas sist\u0113ma"],pts:1,correctAnswers:[1]},{type:j,question:"K\u0101 var tikt m\u0113r\u012bta auto jauda?",name:"jaudas_merisana",answers:["Zigrsp\u0113ki","Kilovati","Amp\u0113ri"],pts:2,correctAnswers:[0,1]},{type:d,question:"Vai Benz Patent-Motorwagen bija pirm\u0101 praktisk\u0101 automa\u0161\u012bna?",name:"benzo",answers:["J\u0101","N\u0113"],pts:1,description:"<img src=https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_640,f_auto/MA_00486523_fuwriq.jpg width=640 height=435>",correctAnswers:[0]},{type:d,question:"Cik \u0101tri var\u0113ja braukt ar pirmo praktisko automob\u012bli?",name:"first_carins",answers:["16 km/h","50 km/h","10 km/h","5 km/h"],pts:2,correctAnswers:[2]},{type:p,question:"Atz\u012bm\u0113jiet Volkswagen logotipu!",name:"taksometru_masinas_bildes",answers:["https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854","https://www.volkswagen.lv/idhub/etc/clientlibs/vwa-ngw18/ngw18-frontend/clientlibs/statics/img/vw-logo-2x.png","https://i.pinimg.com/originals/6e/de/9a/6ede9a835035ba5d9d43c510e63cfb5d.jpg","https://i.imgur.com/nd3BX9W.jpg"],pts:1,correctAnswers:[1]},{type:b,question:"Atz\u012bm\u0113jat visas sarkanas ma\u0161\u012bnas, ko J\u016bs redzat!",name:"sarkani_auto",answers:["https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/2019-Porsche-911-coupe-red-press-image-1001x565p-%281%29.jpg","https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80","https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/vauxhall-corsa20-11.jpg?itok=NKrpS1jU","https://cdn.motor1.com/images/mgl/AovXy/s3/ferrari-laferrari-aperta.webp"],pts:3,correctAnswers:[0,2,3]},{type:d,question:"Vai att\u0113l\u0101 redzam\u0101 ma\u0161\u012bna bija pirm\u0101, kura sp\u0113ja lidot?",name:"lidojosa",answers:["J\u0101","N\u0113"],pts:1,description:"<img src=https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_640,f_auto/Icon_A-Terrafugia-March10_2012-243-FrontDriving8x10WM_fvgews.jpg width=256 height=256>",correctAnswers:[0]},{type:m,question:"Cik \u0101tri pasaules \u0101tr\u0101k\u0101 ma\u0161\u012bna Koenigsegg Agera R var sasniegt 100 km/h?",name:"motora_tilpums",pts:5,correctAnswers:["2.9","2,9"]},{type:d,question:"K\u0101das auto firmas logotips ir att\u0113lots \u0101tt\u0113l\u0101?",name:"masinas_logo",answers:["Renault","Volkswagen","Ford","Audi","BMW","Dacia"],pts:1,description:"<img src=https://i2.wp.com/thinkmarketingmagazine.com/wp-content/uploads/2012/08/bmw-logo.png?ssl=1 width=128 height=128>",correctAnswers:[4]},{type:m,question:"Nosauciet komp\u0101niju / brendu, kuram logotips ir 4 p\u0101rkl\u0101jo\u0161i ap\u013ci?",name:"audi_logo",pts:4,description:"\u013boti popul\u0101ra auto komp\u0101nija",correctAnswers:["Audi","AUDI","audi"]}];return Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)("header",{className:"App-header",children:[i&&Object(T.jsx)(W,{data:a}),!i&&Object(T.jsxs)("div",{className:Object(N.a)("App-Introduction"),children:[Object(T.jsx)("div",{children:"Sveicin\u0101ti!"}),Object(T.jsx)("div",{children:"Testa t\u0113ma: automa\u0161\u012bnas"}),Object(T.jsx)("div",{children:"Test sast\u0101v no 20 jaut\u0101jumiem"}),Object(T.jsx)("div",{children:"Laika ierobe\u017eojums uz visu testu: ".concat(15," min\u016btes")}),Object(T.jsx)("button",{className:Object(N.a)("App-StartButton"),onClick:function(){return s(!0)},children:"S\u0101kt testu"})]})]})})},B=Object(w.a)({reducer:{quiz:q}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(h.a,{store:B,children:Object(T.jsx)(L,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.c41f1ebe.chunk.js.map