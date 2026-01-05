import react from "react";

import HeroSection from "../components/serviceHero";
import RecentClients from "../components/RecentClients";
import FeaturedWork from "../components/FeaturedWork";
import FaqsSection from "../components/FaqsSection";
import IndustriesSection from "../components/IndustriesSection";
import Insights from "../components/Insights";
import FooterIntro from "../components/FooterIntro";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from '../components/ContactSection';
import ScrollSection from "../components/ServiceSlidingDivs";
const UIUX = () =>{
    
  
    return (
        <>
        <HeroSection
        backgroundImage="/16.png"
        marqueeText="USER INTERFACE & EXPERIENCE"
         />

        <ScrollSection
      sections={[
        {
          title: "What is UI Design?",
          eyebrow: "UI/UX",
          description:
            "User Interface (UI) Design focuses on the visual elements of your digital product. It is the point of interaction between your user and your digital environment. This encompasses the layout, visual design, and interactive elements like buttons, icons, and sliders.",
          
          image: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/66203930dd2cf71644cd2be2_Screenshot%202024-04-16%20at%203.34%201.avif",
          reverse: false,
        },
        {
          title: "What is UX Design?",
          eyebrow: "UI/UX",
          description:
            "User Experience (UX) Design, on the other hand, goes deeper into the user’s interaction with your product. It is a holistic approach that considers the entire journey a user takes to solve a problem or fulfill a need. UX design involves research to understand user behaviors, needs, and motivations and uses this insight to design a coherent, contextually relevant experience that is not only functional but also user-friendly and accessible.",
          
          image: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/6620398f66380d13b053ba17_Screenshot%202024-04-16%20at%203.34%201.avif",
          reverse: true,
        },
        ]}
        />
        <section className="w-full bg-[#070d13] font-Inter text-[#f2f5f7] px-12 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center space-y-6">
          
            <p className="md:text-lg font-semibold text-white text-sm">
              UI/UX
            </p>
          

          <h5 className="text-2xl sm:text-4xl md:text-6xl font-semibold leading-snug">
            The Interplay of UI and UX
          </h5>

          <div className="max-w-3xl mx-auto">
            <p className="text-base text-white leading-relaxed">While UI focuses on the tangible elements, UX addresses the overall feel and effectiveness of the experience. Think of UI as the tools a user needs for their journey - elegant, precise, and pleasing. UX is the path itself - the ease of navigation, the anticipation of their needs, and the satisfaction of reaching their destination effortlessly. Together, they create a harmonious digital environment that not only looks exceptional but also feels right.</p>
          </div>
    <div className="flex gap-2 md:gap-4 m-4 h-64 md:h-96">
      <img
        src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/66203f6b7ea47f2024d95b80_UX%20Designer%20Web.avif"
        alt="UX Designer"
        className="w-2/3 border rounded-lg border-gray-800"
      />
      <img
        src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/66203f6bf4a2a4ecfbea41d5_UI%20Designer%20Web.avif"
        alt="UI Designer"
        className="w-1/3 border rounded-lg border-gray-800"
      />
    </div>
          
        </div></div></section>
        <RecentClients />
        <IndustriesSection />
        <FaqsSection />
        <Insights />
        <TestimonialsSection />
        <ContactSection />
        <FooterIntro />

        </>
    )
}
export default UIUX