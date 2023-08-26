(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3284:function(e,t,r){Promise.resolve().then(r.bind(r,8919)),Promise.resolve().then(r.bind(r,9201)),Promise.resolve().then(r.bind(r,9380)),Promise.resolve().then(r.bind(r,7826)),Promise.resolve().then(r.bind(r,8302)),Promise.resolve().then(r.t.bind(r,2126,23)),Promise.resolve().then(r.t.bind(r,7402,23))},7826:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(3955);r(2310);var o=r(4646),n=r(6494),i=r(5846),s=r.n(i),l=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(o&&(o+=" "),o+=a);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(a&&(a+=" "),a+=t);return a},c=r(9201);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:r}=(0,c.useActiveSectionContext)();return(0,a.jsxs)("header",{className:"z-[999] relative",children:[(0,a.jsx)(o.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-black border-opacity-10 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,a.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,a.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:n.Ok.map(n=>(0,a.jsx)(o.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,a.jsxs)(s(),{className:l("flex w-20 items-center justify-center px-12 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===n.name}),href:n.hash,onClick:()=>{t(n.name),r(Date.now())},children:[n.name,n.name===e&&(0,a.jsx)(o.E.span,{className:"bg-gray-200 text-white rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},n.hash))})})]})}},8302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var a=r(3955),o=r(9380);r(2310);var n=r(8136);function i(){let{theme:e,toggleTheme:t}=(0,o.useTheme)();return(0,a.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-10 shadow-3xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,a.jsx)(n.eSY,{}):(0,a.jsx)(n.s1t,{})})}},9201:function(e,t,r){"use strict";r.r(t),r.d(t,{ActiveSectionContext:function(){return n},default:function(){return i},useActiveSectionContext:function(){return s}});var a=r(3955),o=r(2310);let n=(0,o.createContext)(null);function i(e){let{children:t}=e,[r,i]=(0,o.useState)("Home"),[s,l]=(0,o.useState)(0);return(0,a.jsx)(n.Provider,{value:{activeSection:r,setActiveSection:i,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,o.useContext)(n);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i},useTheme:function(){return s}});var a=r(3955),o=r(2310);let n=(0,o.createContext)(null);function i(e){let{children:t}=e,[r,i]=(0,o.useState)("light");return(0,o.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(i(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(i("dark"),document.documentElement.classList.add("dark"))},[]),(0,a.jsx)(n.Provider,{value:{theme:r,toggleTheme:()=>{"light"===r?(i("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(i("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,o.useContext)(n);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},6494:function(e,t,r){"use strict";r.d(t,{$c:function(){return l},Ok:function(){return s},ZU:function(){return c}});var a=r(2310),o=r(198),n=r(2801),i=r(7782);let s=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],l=[{title:"Software Developer Internship",location:"Grass Solution Pvt Ltd",href:!0,redirect:"https://grras.com/",description:"While doing Bachelor i got a chance doing internship, without missing i catch it and learn HTML, CSS, JS, PHP, PHP FrameWork (CodeIgniter), AngularJS",icon:a.createElement(o.zQU),date:"2018"},{title:"BCA (Bachelor In Computer Application)",location:"Moradabad, Uttar Pradesh",href:!1,description:"I started development journey with Core PHP / MYSQL, when i was doing my bachelors. I love to build applications and solving the problem.",icon:a.createElement(i.qWM),date:"2019"},{title:"Software Engineer",location:"Finbyz Tech Pvt Ltd",href:!0,redirect:"https://finbyz.tech/",description:"In my first job at Finbyz Tech, Here i explored a lot of technologies #electron.js, frappe, javascript, websocket which excited me. As I was very pasionate about coding/learning and working with new technologies.",icon:a.createElement(o.zQU),date:"2019 - 2020 (Pursuing MCA)"},{title:"Sr Full-Stack Developer",location:"Align Connect Pvt Ltd",href:!0,redirect:"http://alignconnect.in/",description:"I wanted to find myself more with some new challenges. So, I joined as a FullStack Developer, later on i promoted as Sr. FullStack Software Engineer. Here i build product sales crm, Ecommerce Website (Araurveda), Lead Management System and many landing pages using Javascript framework. Here i also get a chance to work with the Hosting Server WHM, Cpannel. I do work here by taking up the ownership",icon:a.createElement(o.zQU),date:"2020 - 2021 (Pursuing MCA)"},{title:"MCA (Master In Computer Application)",location:"Ahmedabad, Gujarat",href:!1,description:"I graduated immediately found a job as a Software Developer, above timeline showing that.",icon:a.createElement(i.qWM),date:"2021"},{title:"Software Enginner",location:"Hidden Brain Pvt Ltd",href:!0,redirect:"https://www.hiddenbrains.com/",description:"I have been want to build a product by adapting the best practices in terms of development,testing and tooling. So, i expanded my understanding of what it takes to build a great product, and given me tremendous amounts of learnings in terms of product management and engineering systems design.",icon:a.createElement(o.zQU),date:"2021 - 2023"},{title:"Tech Lead",location:"Excellent Web World",href:!0,redirect:"https://www.excellentwebworld.com/",description:"My primary focus is to provide guidance to the team and facilitate their growth through the adoption of cutting-edge technologies.",icon:a.createElement(n.huN),date:"2023 - Present \uD83D\uDE80"}],c=["HTML","CSS","BootStrap","JavaScript","TypeScript","React","Next.js","ElectronJs","Flutter","Socket.IO","Node.js","Git","Tailwind","Prisma","MongoDB","Redux","AWS","Linux","Shell Programming","MySQl","Express","Python","Django"]},7402:function(){},2126:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}},8919:function(e,t,r){"use strict";let a,o;r.r(t),r.d(t,{CheckmarkIcon:function(){return Q},ErrorIcon:function(){return B},LoaderIcon:function(){return U},ToastBar:function(){return ee},ToastIcon:function(){return R},Toaster:function(){return eo},default:function(){return en},resolveValue:function(){return S},toast:function(){return H},useToaster:function(){return W},useToasterStore:function(){return D}});var n,i=r(2310);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",o="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+i+";":a+="f"==n[1]?m(i,n):n+"{"+m(i,"k"==n[1]?"":t)+"}":"object"==typeof i?a+=m(i,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=m.p?m.p(n,i):n+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,o)=>{var n;let i=f(e),s=p[i]||(p[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!p[s]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[s]=m(o?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&p.g?p.g:null;return r&&(p.g=p[s]),n=p[s],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=a?n+t.data:t.data+n),s},g=(e,t,r)=>e.reduce((e,a,o)=>{let n=t[o];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,v,x,w=y.bind({k:1});function k(e,t){let r=this||{};return function(){let a=arguments;function o(n,i){let s=Object.assign({},n),l=s.className||o.className;r.p=Object.assign({theme:v&&v()},s),r.o=/ *go\d+/.test(l),s.className=y.apply(r,a)+(l?" "+l:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),x&&c[0]&&x(s),b(c,s)}return t?t(o):o}}var E=e=>"function"==typeof e,S=(e,t)=>E(e)?e(t):e,j=(a=0,()=>(++a).toString()),C=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},P=new Map,I=e=>{if(P.has(e))return;let t=setTimeout(()=>{P.delete(e),$({type:4,toastId:e})},1e3);P.set(e,t)},A=e=>{let t=P.get(e);t&&clearTimeout(t)},N=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&A(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?N(e,{type:1,toast:r}):N(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?I(a):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},T=[],M={toasts:[],pausedAt:void 0},$=e=>{M=N(M,e),T.forEach(e=>{e(M)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,r]=(0,i.useState)(M);(0,i.useEffect)(()=>(T.push(r),()=>{let e=T.indexOf(r);e>-1&&T.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},L=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}),_=e=>(t,r)=>{let a=L(t,e,r);return $({type:2,toast:a}),a.id},H=(e,t)=>_("blank")(e,t);H.error=_("error"),H.success=_("success"),H.loading=_("loading"),H.custom=_("custom"),H.dismiss=e=>{$({type:3,toastId:e})},H.remove=e=>$({type:4,toastId:e}),H.promise=(e,t,r)=>{let a=H.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(H.success(S(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{H.error(S(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var O=(e,t)=>{$({type:1,toast:{id:e,height:t}})},F=()=>{$({type:5,time:Date.now()})},W=e=>{let{toasts:t,pausedAt:r}=D(e);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&H.dismiss(t.id);return}return setTimeout(()=>H.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,i.useCallback)(()=>{r&&$({type:6,time:Date.now()})},[r]),o=(0,i.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:n}=r||{},i=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),s=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<s&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:O,startPause:F,endPause:a,calculateOffset:o}}},B=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,Q=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,J=k("div")`
  position: absolute;
`,q=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,R=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(G,null,t):t:"blank"===r?null:i.createElement(q,null,i.createElement(U,{...a}),"loading"!==r&&i.createElement(J,null,"error"===r?i.createElement(B,{...a}):i.createElement(Q,{...a})))},Y=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Z=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(r),Z(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(R,{toast:e}),s=i.createElement(K,{...e.ariaProps},S(e.message,e));return i.createElement(V,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:n,message:s}):i.createElement(i.Fragment,null,n,s))});n=i.createElement,m.p=void 0,b=n,v=void 0,x=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let n=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:n,className:t,style:r},o)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:n,containerClassName:s})=>{let{toasts:l,handlers:c}=W(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let n=r.position||t,s=er(n,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:s},"custom"===r.type?S(r.message,r):o?o(r):i.createElement(ee,{toast:r,position:n}))}))},en=H}},function(e){e.O(0,[680,296,166,269,225,704,801,744],function(){return e(e.s=3284)}),_N_E=e.O()}]);