"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54],{3015:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(7294),r=a(9960),s=a(9565);const i={wrapper:"wrapper_Xj5P",container:"container_Zyoa",animate:"animate_zf6W",text:"text_Gmv2",gradientChange:"gradientChange_k6U9"};var c=a(6785);const o=["Simple","Customize","Lightweight"];function l(e){let{title:t,i:a}=e;return n.createElement("div",{className:i.animate},n.createElement(c.Y,{as:"h1",className:i.text,start:{translateY:80},transition:{transitionDelay:.2+.3*a,transitionDuration:.25,transitionTimingFunction:"ease-in"}},t,"."))}function u(){return n.createElement("section",{className:i.wrapper},n.createElement("div",{className:i.container},o.map(((e,t)=>n.createElement(l,{key:t,title:e,i:t})))))}const d={container:"container_bfhl",heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function m(){return n.createElement("section",{className:d.container},n.createElement(u,null),n.createElement("div",{className:d.buttons},n.createElement(r.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\ud83d\udd79\ufe0f")))}function h(){return n.createElement(s.Z,{description:"This is a React specific library that makes observe and animating scrolling very easy."},n.createElement(m,null))}},6785:(e,t,a)=>{a.d(t,{Y:()=>i});var n=a(7294),r=({mediaQueryWidth:e,largeScreenRootMargin:t,smallScreenRootMargin:a,threshold:r,once:s})=>{let[i,c]=(0,n.useState)(!1),[o,l]=(0,n.useState)(null),u=(0,n.useRef)(null),d=`(min-width: ${e??768}px)`,m=t??"-35% 0px",h=a??"-25% 0px",b=s??!0,g=r??0,k=()=>new IntersectionObserver((([e])=>{b?e.isIntersecting&&c(e.isIntersecting):c(e.isIntersecting)}),{rootMargin:window.matchMedia(d).matches?m:h,threshold:g});return(0,n.useEffect)((()=>(u.current&&u.current.disconnect(),u.current=k(),o&&u.current.observe(o),()=>{var e;return null==(e=null==u?void 0:u.current)?void 0:e.disconnect()})),[o]),(0,n.useEffect)((()=>{let e=()=>{u.current&&(u.current.disconnect(),u.current=k(),o&&u.current.observe(o))};e();let t=window.matchMedia(d);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}),[]),[l,i]},s=(e,t)=>{let a={},n={},r="";return Object.keys(e).forEach((t=>{let n=e[t];switch(t){case"transitionDelay":a={...a,transitionDelay:`${n}s`};break;case"transitionDuration":a={...a,transitionDuration:`${n}s`};break;default:return void(a={...a,[t]:`${n}`})}})),Object.keys(t).forEach((e=>{let a=t[e];switch(e){case"translateX":r+=`translateX(${a}px) `;break;case"translateY":r+=`translateY(${a}px) `;break;case"translateZ":r+=`translateZ(${a}px) `;break;case"rotateX":r+=`rotateX(${a}deg) `;break;case"rotateY":r+=`rotateY(${a}deg) `;break;case"rotateZ":r+=`rotateZ(${a}deg) `;break;case"skewX":r+=`skewX(${a}deg) `;break;case"skewY":r+=`skewY(${a}deg) `;break;case"scaleX":r+=`scaleX(${a}) `;break;case"scaleY":r+=`scaleY(${a}) `;break;case"scaleZ":r+=`scaleZ(${a}) `;break;default:return void(n={...n,[e]:`${a}`})}})),n={...n,transform:r.trim()},{...a,...n}},i=({children:e,start:t={opacity:0,translateY:30},end:a={opacity:1,translateY:0},transition:i={transitionDelay:.1,transitionDuration:.4,transitionTimingFunction:"ease-in"},as:c="div",customStyle:o=!1,observerOptions:l={},style:u,...d})=>{let[m,h]=r({mediaQueryWidth:768,largeScreenRootMargin:"-35% 0px",smallScreenRootMargin:"-25% 0px",threshold:0,once:!0,...l}),b=c,[g,k]=(0,n.useState)(s(i,t));return(0,n.useEffect)((()=>{let e=s(i,h?a:t);k(e)}),[h]),n.createElement(n.Fragment,null,o?n.createElement(b,{ref:m,"data-is-active":h,...d},e):n.createElement(b,{ref:m,style:{...g,...u},"data-is-active":h,...d},e))}}}]);