(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2361],{67487:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(13428),o=n(2265),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},s=n(46614),i=o.forwardRef(function(e,t){return o.createElement(s.default,(0,a.Z)({},e,{ref:t,icon:r}))})},99412:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(13428),o=n(2265),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},s=n(46614),i=o.forwardRef(function(e,t){return o.createElement(s.default,(0,a.Z)({},e,{ref:t,icon:r}))})},11024:function(e,t,n){"use strict";n.d(t,{i:function(){return i}});var a=n(2265),o=n(73310),r=n(11445),s=n(19056);function i(e){return t=>a.createElement(r.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},a.createElement(e,Object.assign({},t)))}t.Z=(e,t,n,r)=>i(i=>{let{prefixCls:c,style:l}=i,m=a.useRef(null),[d,u]=a.useState(0),[f,p]=a.useState(0),[g,h]=(0,o.Z)(!1,{value:i.open}),{getPrefixCls:x}=a.useContext(s.E_),y=x(t||"select",c);a.useEffect(()=>{if(h(!0),"undefined"!=typeof ResizeObserver){let e=new ResizeObserver(e=>{let t=e[0].target;u(t.offsetHeight+8),p(t.offsetWidth)}),t=setInterval(()=>{var a;let o=n?`.${n(y)}`:`.${y}-dropdown`,r=null===(a=m.current)||void 0===a?void 0:a.querySelector(o);r&&(clearInterval(t),e.observe(r))},10);return()=>{clearInterval(t),e.disconnect()}}},[]);let S=Object.assign(Object.assign({},i),{style:Object.assign(Object.assign({},l),{margin:0}),open:g,visible:g,getPopupContainer:()=>m.current});return r&&(S=r(S)),a.createElement("div",{ref:m,style:{paddingBottom:d,position:"relative",minWidth:f}},a.createElement(e,Object.assign({},S)))})},24230:function(e,t,n){"use strict";var a=n(2265),o=n(37125),r=n(64853);t.Z=(e,t)=>{let n=a.useContext(o.Z);return[a.useMemo(()=>{var a;let o=t||r.Z[e],s=null!==(a=null==n?void 0:n[e])&&void 0!==a?a:{};return Object.assign(Object.assign({},"function"==typeof o?o():o),s||{})},[e,t,n]),a.useMemo(()=>{let e=null==n?void 0:n.locale;return(null==n?void 0:n.exist)&&!e?r.Z.locale:e},[n])]}},25086:function(e,t,n){"use strict";n.d(t,{Qt:function(){return i},Uw:function(){return s},fJ:function(){return r},ly:function(){return c},oN:function(){return d}});var a=n(89426),o=n(92386);let r=new a.E4("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),s=new a.E4("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),i=new a.E4("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),c=new a.E4("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),l=new a.E4("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),m={"slide-up":{inKeyframes:r,outKeyframes:s},"slide-down":{inKeyframes:i,outKeyframes:c},"slide-left":{inKeyframes:l,outKeyframes:new a.E4("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}})},"slide-right":{inKeyframes:new a.E4("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),outKeyframes:new a.E4("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}})}},d=(e,t)=>{let{antCls:n}=e,a=`${n}-${t}`,{inKeyframes:r,outKeyframes:s}=m[t];return[(0,o.R)(a,r,s,e.motionDurationMid),{[`
      ${a}-enter,
      ${a}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${a}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]}},66993:function(e,t,n){Promise.resolve().then(n.bind(n,69188))},46993:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return a}});let a=n(21024)._(n(2265)).default.createContext(null)},69188:function(e,t,n){"use strict";n.r(t);var a=n(57437),o=n(41858),r=n(20068),s=n(89994),i=n(43191),c=n(61396),l=n.n(c),m=n(2265);let d={labelCol:{span:8,labelCol:{span:8,style:{fontsize:"medium"}},wrapperCol:{span:16}},wrapperCol:{span:16}};t.default=()=>{let[e,t]=(0,m.useState)({assignto:"",describe:"",select1:"",date1:"",comm1:"",select2:"",date2:"",comm2:"",select3:"",date3:"",comm3:""}),[n,c]=(0,m.useState)({Sassignto:"",Sdescribe:"",Sselect1:"",Sdate1:"",Scomm1:"",Sselect2:"",Sdate2:"",Scomm2:"",Sselect3:"",Sdate3:"",Scomm3:"",Sselect4:"",Sdate4:"",Scomm4:""}),[u,f]=(0,m.useState)({Tassignto:"",Tdescribe:"",Tselect1:"",Tdate1:"",Tcomm1:"",Tselect2:"",Tdate2:"",Tcomm2:"",Tselect3:"",Tdate3:"",Tcomm3:"",Tselect4:"",Tdate4:"",Tcomm4:"",Tselect5:"",Tdate5:"",Tcomm5:"",Tselect6:"",Tdate6:"",Tcomm6:"",Tselect7:"",Tdate7:"",Tcomm7:"",Tselect8:"",Tdate8:"",Tcomm8:""}),[p,g]=(0,m.useState)({Fassignto:"",Fdescribe:"",Fselect1:"",Fdate1:"",Fcomm1:"",Fselect2:"",Fdate2:"",Fcomm2:"",Fselect3:"",Fdate3:"",Fcomm3:"",Fselect4:"",Fdate4:"",Fcomm4:"",Fselect5:"",Fdate5:"",Fcomm5:"",Fselect6:"",Fdate6:"",Fcomm6:""}),[h,x]=(0,m.useState)({Fiassignto:"",Fidescribe:"",Fiselect1:"",Fidate1:"",Ficomm1:"",Fiselect2:"",Fidate2:"",Ficomm2:"",Fiselect3:"",Fidate3:"",Ficomm3:"",Fiselect4:"",Fidate4:"",Ficomm4:""}),[y,S]=(0,m.useState)({Siassignto:"",Sidescribe:"",Siselect1:"",Sidate1:"",Sicomm1:"",Siselect2:"",Sidate2:"",Sicomm2:""});return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"flex w-[100%] flex-col items-start gap-5",children:(0,a.jsxs)("div",{className:" bg-white px-4 py-4 w-[100%] ",children:[(0,a.jsx)("h1",{className:"flex w-[100%] h-7 flex-col justify-center text-black  text-2xl non-italic font-semibold leading-snug",children:"Procurement (Development workflow)"}),(0,a.jsx)("p",{children:"Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items."})]})}),(0,a.jsxs)("section",{className:"flex flex-col items-center flex-shrink-0 mt-4  w-auto py-1 h-screen bg-white",children:[(0,a.jsx)("h1",{className:"text-black text-2xl font-semibold leading-normal  px-4 py-4 w-[100%] flex items-center",children:"Basic Details"}),(0,a.jsxs)(o.Z,{...d,name:"nest-messages",style:{maxWidth:600},children:[(0,a.jsx)(o.Z.Item,{name:["UsecaseName"],label:"Usecase Name :",rules:[{message:"Please input the project name!"}],children:(0,a.jsx)(r.default,{name:"projectName",id:"projectName"})}),(0,a.jsx)(o.Z.Item,{name:["AssignTo"],label:"Assign To :",rules:[{message:"Please input the project description!"}],children:(0,a.jsx)(r.default,{name:"projectDescription",id:"projectDescription"})}),(0,a.jsx)(o.Z.Item,{name:["UsecaseDescription"],label:"Usecase Description :",rules:[{message:"Please input the project department!"}],children:(0,a.jsx)(r.default,{name:"projectDepartment",id:"projectDepartment"})}),(0,a.jsx)(o.Z.Item,{name:"range-time-picker",label:"Project Duration",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(s.default,{id:"projectStartDate",placeholder:"Start Date",className:"text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 shadow px-1 py-1 h-8 w-[184px] m-1"}),(0,a.jsx)("span",{children:"-"}),(0,a.jsx)(s.default,{id:"projectEndDate",placeholder:"End Date",className:"text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200shadow px-1 py-1 h-8 w-[184px] m-1"})]})}),(0,a.jsx)(l(),{href:"/main/projects/usecaseFormStepper",children:(0,a.jsx)(i.ZP,{children:"Next"})})]})]})]})}},61396:function(e,t,n){e.exports=n(25250)},75018:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(10870),o="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function r(e,t){return 0===e.indexOf(t)}function s(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,a.Z)({},n);var s={};return Object.keys(e).forEach(function(n){(t.aria&&("role"===n||r(n,"aria-"))||t.data&&r(n,"data-")||t.attr&&o.includes(n))&&(s[n]=e[n])}),s}}},function(e){e.O(0,[9017,8658,2881,3191,1288,3399,5250,6758,6503,458,9307,1808,1858,9994,2971,4938,1744],function(){return e(e.s=66993)}),_N_E=e.O()}]);