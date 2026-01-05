import{r as o,a as F,j as n,N as H,L as V}from"./index-wZWQkpw2.js";import Q from"./FooterIntro-DLfMuHUE.js";import"./index-DsW0Kbl4.js";import"./proxy-BrTsGv73.js";var x=function(e,a){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,t){l.__proto__=t}||function(l,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(l[i]=t[i])},x(e,a)};function m(e,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");x(e,a);function l(){this.constructor=e}e.prototype=a===null?Object.create(a):(l.prototype=a.prototype,new l)}var d=function(){return d=Object.assign||function(a){for(var l,t=1,i=arguments.length;t<i;t++){l=arguments[t];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(a[c]=l[c])}return a},d.apply(this,arguments)};function X(e,a){a===void 0&&(a={});var l=a.insertAt;if(!(typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",l==="top"&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var J=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
  font-size: 16px;
  line-height: 1.2em;
}

.calendly-inline-widget {
  min-width: 320px;
  height: 630px;
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
  display: inline;
  width: 100%;
  height: 100%;
}

.calendly-popup-content {
  position: relative;
}

.calendly-popup-content.calendly-mobile {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

.calendly-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  background-color: #a5a5a5;
  background-color: rgba(31, 31, 31, 0.4);
}

.calendly-overlay .calendly-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.calendly-overlay .calendly-popup {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  min-width: 900px;
  max-width: 1000px;
  height: 90%;
  max-height: 680px;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: none;
    transform: none;
    width: 100%;
    height: auto;
    min-width: 0;
    max-height: none;
  }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
  height: 100%;
}

.calendly-overlay .calendly-popup-close {
  position: absolute;
  top: 25px;
  right: 25px;
  color: #fff;
  width: 19px;
  height: 19px;
  cursor: pointer;
  background: url(https://assets.calendly.com/assets/external/close-icon.svg)
    no-repeat;
  background-size: contain;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup-close {
    top: 15px;
    right: 15px;
  }
}

.calendly-badge-widget {
  position: fixed;
  right: 20px;
  bottom: 15px;
  z-index: 9998;
}

.calendly-badge-widget .calendly-badge-content {
  display: table-cell;
  width: auto;
  height: 45px;
  padding: 0 30px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;
  font-family: sans-serif;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
  color: #666a73;
}

.calendly-badge-widget .calendly-badge-content span {
  display: block;
  font-size: 12px;
}

.calendly-spinner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  z-index: -1;
}

.calendly-spinner > div {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #e1e1e1;
  border-radius: 50%;
  vertical-align: middle;
  -webkit-animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.calendly-spinner .calendly-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.calendly-spinner .calendly-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`;X(J);function h(e){return e.charAt(0)==="#"?e.slice(1):e}function K(e){return e!=null&&e.primaryColor&&(e.primaryColor=h(e.primaryColor)),e!=null&&e.textColor&&(e.textColor=h(e.textColor)),e!=null&&e.backgroundColor&&(e.backgroundColor=h(e.backgroundColor)),e}var R;(function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled",e.PAGE_HEIGHT="calendly.page_height"})(R||(R={}));var A=function(e){var a=e.url,l=e.prefill,t=l===void 0?{}:l,i=e.pageSettings,c=i===void 0?{}:i,g=e.utm,r=g===void 0?{}:g,f=e.embedType,s=K(c),y=s.backgroundColor,M=s.hideEventTypeDetails,z=s.hideLandingPageDetails,b=s.primaryColor,v=s.textColor,W=s.hideGdprBanner,w=t.customAnswers,p=t.date,C=t.email,N=t.firstName,j=t.guests,E=t.lastName,k=t.location,_=t.name,S=r.utmCampaign,L=r.utmContent,T=r.utmMedium,P=r.utmSource,I=r.utmTerm,D=r.salesforce_uuid,u=a.indexOf("?"),O=u>-1,q=a.slice(u+1),$=O?a.slice(0,u):a,G=[O?q:null,y?"background_color=".concat(y):null,M?"hide_event_type_details=1":null,z?"hide_landing_page_details=1":null,b?"primary_color=".concat(b):null,v?"text_color=".concat(v):null,W?"hide_gdpr_banner=1":null,_?"name=".concat(encodeURIComponent(_)):null,k?"location=".concat(encodeURIComponent(k)):null,N?"first_name=".concat(encodeURIComponent(N)):null,E?"last_name=".concat(encodeURIComponent(E)):null,j?"guests=".concat(j.map(encodeURIComponent).join(",")):null,C?"email=".concat(encodeURIComponent(C)):null,p&&p instanceof Date?"date=".concat(Z(p)):null,S?"utm_campaign=".concat(encodeURIComponent(S)):null,L?"utm_content=".concat(encodeURIComponent(L)):null,T?"utm_medium=".concat(encodeURIComponent(T)):null,P?"utm_source=".concat(encodeURIComponent(P)):null,I?"utm_term=".concat(encodeURIComponent(I)):null,D?"salesforce_uuid=".concat(encodeURIComponent(D)):null,f?"embed_type=".concat(f):null,"embed_domain=1"].concat(w?ne(w):[]).filter(function(Y){return Y!==null}).join("&");return"".concat($,"?").concat(G)},Z=function(e){var a=e.getMonth()+1,l=e.getDate(),t=e.getFullYear();return[t,a<10?"0".concat(a):a,l<10?"0".concat(l):l].join("-")},ee=/^a\d{1,2}$/,ne=function(e){var a=Object.keys(e).filter(function(l){return l.match(ee)});return a.length?a.map(function(l){return"".concat(l,"=").concat(encodeURIComponent(e[l]))}):[]},U=function(e){m(a,e);function a(){return e!==null&&e.apply(this,arguments)||this}return a.prototype.render=function(){return o.createElement("div",{className:"calendly-spinner"},o.createElement("div",{className:"calendly-bounce1"}),o.createElement("div",{className:"calendly-bounce2"}),o.createElement("div",{className:"calendly-bounce3"}))},a}(o.Component),te="calendly-inline-widget",ae=function(e){m(a,e);function a(l){var t=e.call(this,l)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return a.prototype.onLoad=function(){this.setState({isLoading:!1})},a.prototype.render=function(){var l=A({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),t=this.props.LoadingSpinner||U;return o.createElement("div",{className:this.props.className||te,style:this.props.styles||{}},this.state.isLoading&&o.createElement(t,null),o.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:l}))},a}(o.Component),le=function(e){m(a,e);function a(l){var t=e.call(this,l)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return a.prototype.onLoad=function(){this.setState({isLoading:!1})},a.prototype.render=function(){var l=A({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),t=this.props.LoadingSpinner||U;return o.createElement(o.Fragment,null,this.state.isLoading&&o.createElement(t,null),o.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:l}))},a}(o.Component),B=function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return F.createPortal(o.createElement("div",{className:"calendly-overlay"},o.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),o.createElement("div",{className:"calendly-popup"},o.createElement("div",{className:"calendly-popup-content"},o.createElement(le,d({},e)))),o.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)};(function(e){m(a,e);function a(l){var t=e.call(this,l)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}return a.prototype.onClick=function(l){l.preventDefault(),this.setState({isOpen:!0})},a.prototype.onClose=function(l){l.stopPropagation(),this.setState({isOpen:!1})},a.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),o.createElement(B,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},a})(o.Component);(function(e){m(a,e);function a(l){var t=e.call(this,l)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}return a.prototype.onClick=function(){this.setState({isOpen:!0})},a.prototype.onClose=function(l){l.stopPropagation(),this.setState({isOpen:!1})},a.prototype.render=function(){return o.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},o.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&o.createElement("span",null,"powered by Calendly")),o.createElement(B,d({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},a})(o.Component);const oe=[{src:"favicon.png",alt:"Acme"}],ie=[{q:"How long is the intro call?",a:"Usually 15–30 minutes."},{q:"What do you need from me?",a:"A quick overview of goals, audience, examples you like, and any deadlines."},{q:"Do you sign NDAs?",a:"Yes. We can sign yours or provide ours."}];function me(){return o.useEffect(()=>{},[]),n.jsxs("main",{className:" bg-[#0B1220] text-white",children:[n.jsx(H,{}),n.jsx("div",{className:"border-b pt-40 border-white/10 text-sm",children:n.jsx("div",{className:"mx-auto max-w-7xl px-4 py-2 flex items-center gap-2 text-slate-300",children:n.jsx("span",{className:"ml-auto text-slate-400",children:"Avg. response: < 2 hrs"})})}),n.jsxs("section",{className:"mx-auto max-w-7xl py-16 px-4 pt-10 pb-6",children:[n.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",children:"Request a Proposal"}),n.jsx("p",{className:"mt-3 text-slate-300 max-w-2xl",children:"Book a quick discovery call (15–30 min). We’ll align on goals, scope, timeline, and budget to craft your proposal."}),n.jsx("div",{className:"mt-6 flex flex-wrap items-center gap-6 opacity-80",children:oe.map(e=>n.jsx("img",{src:e.src,alt:e.alt,className:"h-8 w-auto"},e.alt))})]}),n.jsxs("section",{className:"mx-auto max-w-7xl px-4 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8",children:[n.jsxs("div",{className:"lg:col-span-8",children:[n.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[n.jsx("h2",{className:"text-xl font-semibold",children:"Pick a time that works for you"}),n.jsx("span",{className:"text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200",children:"Timezone auto-detected"})]}),n.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/10 bg-white/5",children:n.jsx(ae,{url:"https://calendly.com/zuhairshad140/proposal-discovery-call",styles:{height:"720px"},pageSettings:{backgroundColor:"0B1220",hideEventTypeDetails:!1,hideLandingPageDetails:!0,primaryColor:"ffffff",textColor:"ffffff"},prefill:{}})}),n.jsx("p",{className:"mt-3 text-xs text-slate-400",children:"Powered by Calendly — we respect your privacy and never share your info."})]}),n.jsx("aside",{className:"lg:col-span-4",children:n.jsxs("div",{className:"lg:sticky lg:top-24 space-y-6",children:[n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.04] p-5",children:[n.jsx("h3",{className:"text-lg font-semibold",children:"What we’ll cover"}),n.jsxs("ul",{className:"mt-3 space-y-2 text-sm text-slate-200",children:[n.jsx("li",{children:"• Your goals & audience"}),n.jsx("li",{children:"• Scope & key deliverables"}),n.jsx("li",{children:"• Timeline & milestones"}),n.jsx("li",{children:"• Budget ranges & next steps"})]})]}),n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.04] p-5",children:[n.jsx("h3",{className:"text-lg font-semibold",children:"Popular services"}),n.jsx("div",{className:"mt-3 grid grid-cols-2 gap-3 text-sm",children:["Web Design","Web Dev","SEO","Branding"].map(e=>n.jsx(V,{to:`/services/${e.toLowerCase().replace(" ","-")}`,className:"rounded-xl border border-white/10 bg-black/30 px-3 py-2 hover:bg-white/10 transition",children:e},e))})]}),n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5",children:[n.jsx("p",{className:"text-sm text-slate-200",children:"“Nextstac translated our vision into a clean, high-converting site. Smooth process, on time, on budget.”"}),n.jsx("div",{className:"mt-3 text-xs text-slate-400",children:"— Sarah M., Head of Growth"})]}),n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.04] p-5",children:[n.jsx("h3",{className:"text-lg font-semibold",children:"Prefer not to book?"}),n.jsx("p",{className:"mt-2 text-sm text-slate-300",children:"Email us your brief and we’ll reply within a business day."}),n.jsxs("div",{className:"mt-3 flex flex-wrap gap-3 text-sm",children:[n.jsx("a",{href:"mailto:mubashir@nextstac.com",className:"rounded-xl border border-white/10 px-3 py-2 hover:bg-white/10",children:"mubashir@nextstac.com"}),n.jsx("a",{href:"https://wa.me/123456789",target:"_blank",rel:"noreferrer",className:"rounded-xl border border-white/10 px-3 py-2 hover:bg-white/10",children:"WhatsApp"})]})]}),n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.04] p-5",children:[n.jsx("h3",{className:"text-lg font-semibold",children:"FAQs"}),n.jsx("div",{className:"mt-3 divide-y divide-white/10",children:ie.map(e=>n.jsxs("details",{className:"group py-3",children:[n.jsxs("summary",{className:"cursor-pointer list-none text-sm text-slate-200 flex items-center justify-between",children:[e.q,n.jsx("span",{className:"ml-4 text-slate-400 group-open:rotate-180 transition",children:"⌄"})]}),n.jsx("p",{className:"mt-2 text-xs text-slate-300",children:e.a})]},e.q))})]})]})})]}),n.jsxs("section",{className:"mx-auto max-w-7xl px-4 pb-20",children:[n.jsx("h2",{className:"text-2xl font-semibold",children:"Typical Engagements"}),n.jsx("div",{className:"mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[{name:"Starter",blurb:"Landing page or mini-site",price:"$$",time:"2–3 weeks"},{name:"Growth",blurb:"Site + CMS + SEO setup",price:"$$$",time:"4–6 weeks"},{name:"Custom",blurb:"Complex features & integrations",price:"Custom",time:"Varies"}].map(e=>n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.04] p-5",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("h3",{className:"text-lg font-semibold",children:e.name}),n.jsx("span",{className:"text-xs rounded-full bg-white/10 px-2 py-1",children:e.time})]}),n.jsx("p",{className:"mt-2 text-sm text-slate-300",children:e.blurb}),n.jsxs("div",{className:"mt-3 text-sm text-slate-200",children:["Budget: ",e.price]})]},e.name))})]}),n.jsx("div",{className:"border-t border-white/10 bg-[#OB1220]",children:n.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center gap-3",children:[n.jsx("p",{className:"text-sm text-slate-300",children:"Ready to talk? Grab a slot or email your brief."}),n.jsxs("div",{className:"sm:ml-auto flex gap-3",children:[n.jsx("a",{href:"#top",onClick:e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},className:"rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90",children:"Book a Call"}),n.jsx("a",{href:"mailto:mubashir@nextstac.com",className:"rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10",children:"Email Brief"})]})]})}),n.jsx(Q,{})]})}export{me as default};
//# sourceMappingURL=RequestProposal-CDFH5fpf.js.map
