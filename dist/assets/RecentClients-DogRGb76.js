import{j as e}from"./index-wZWQkpw2.js";const r=["/Baskora.svg","/arcveil.svg","/editflows.svg","/kyn.svg","/lensory.svg","/lunari.svg","/shutter.svg","/streetwear.svg","/Baskora.svg","/arcveil.svg"];function l({items:s,speed:t=10}){return e.jsxs("div",{className:"relative overflow-hidden group",children:[e.jsx("div",{className:"flex gap-16 items-center whitespace-nowrap will-change-transform animate-marquee",style:{"--speed":`${t}s`},children:[...s,...s].map((n,a)=>e.jsx("div",{className:"shrink-0 w-[200px]  flex justify-center",children:e.jsx("img",{src:n,alt:`Client Logo ${a+1}`,className:"max-h-44 object-contain"})},a))}),e.jsx("style",{children:`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--speed) linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `})]})}function m(){return e.jsx("section",{className:"bg-white text-slate-900 py-20 md:py-28",children:e.jsxs("div",{className:"mx-auto w-full max-w-6xl px-4 text-center",children:[e.jsx("span",{className:"inline-block text-xs px-3 py-1 rounded-full bg-white/5 text-black",children:" Clients & Achievements "}),e.jsx("h2",{className:"text-3xl md:text-5xl font-semibold text-black",children:"Our Recent Client"}),e.jsx("p",{className:"mt-3 md:mt-4 text-slate-600",children:"Trusted by top brands and businesses — here are some of our latest collaborations."}),e.jsx("div",{className:"mt-10 md:mt-14",children:e.jsx(l,{items:r,speed:15})})]})})}export{m as default};
//# sourceMappingURL=RecentClients-DogRGb76.js.map
