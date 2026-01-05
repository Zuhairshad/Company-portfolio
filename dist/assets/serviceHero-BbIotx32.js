import{j as e}from"./index-wZWQkpw2.js";const c=({backgroundImage:a,subtitle:r,title:l,description:n,marqueeText:s,showScrollIndicator:m=!0,textColor:t="white",customStyles:i={}})=>e.jsxs("section",{className:`relative z-10 h-screen pb-16 overflow-hidden w-full px-4 md:px-12 py-28 text-${t}`,style:i,children:[e.jsxs("div",{className:"absolute inset-0",children:[e.jsx("img",{src:a,alt:"Background",className:"w-full h-full object-cover object-center sm:object-top md:object-center transform-gpu"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-3/4 sm:h-40 bg-gradient-to-t from-black/70 via-transparent to-transparent"})]}),e.jsx("style",{children:`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-container {
          display: flex;
          animation: marquee 10s linear infinite;
          white-space: nowrap;
        }
        .marquee-item {
          flex-shrink: 0;
          padding-right: 4rem;
        }
        .text-hollow {
          font-family: 'Prata', serif;
          font-weight: 400;
          color: transparent;
          -webkit-text-stroke: 1px ${t};
          text-stroke: 1px ${t};
        }
        @media (min-width: 640px) {
          .text-hollow {
            -webkit-text-stroke: 2px ${t};
            text-stroke: 2px ${t};
          }
          .marquee-item { padding-right: 6rem; }
        }
        @media (min-width: 768px) {
          .marquee-item { padding-right: 8rem; }
        }
      `}),e.jsx("div",{className:"absolute bottom-6 sm:bottom-8 md:bottom-18 left-0 right-0 overflow-hidden text-6xl md:text-8xl lg:text-8xl font-extrabold",children:e.jsxs("div",{className:"marquee-container",children:[e.jsx("div",{className:"marquee-item",children:e.jsx("span",{className:"text-hollow",children:s})}),e.jsx("div",{className:"marquee-item",children:e.jsx("span",{className:"text-hollow",children:s})}),e.jsx("div",{className:"marquee-item",children:e.jsx("span",{className:"text-hollow",children:s})}),e.jsx("div",{className:"marquee-item",children:e.jsx("span",{className:"text-hollow",children:s})})]})})]});export{c as H};
//# sourceMappingURL=serviceHero-BbIotx32.js.map
