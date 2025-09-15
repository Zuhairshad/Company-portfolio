import react from "react";
import HeroSection from "../components/serviceHero";
import RecentClients from "../components/RecentClients";
import FeaturedWork from "../components/FeaturedWork";
import FaqsSection from "../components/FaqsSection";
import IndustriesSection from "../components/IndustriesSection";
import Insights from "../components/Insights";
import FooterIntro from "../components/FooterIntro";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactFormFormspree from '../components/ContactSection';
import AwardSec from "../components/serviceAwardSec";
import ScrollSection from "../components/ServiceSlidingDivs";

const DigitalMarketing = () => {
    return (
        <>
        <HeroSection
  backgroundImage="/15.png"
  marqueeText="DIGITAL MARKETING"
  textColor="white"
/>


        <AwardSec 
        topText="Leading Digital Marketing Agency"
        heading="We Drive Digital Growth That Delivers"
        subHeading="— Measurable Results Every Time"
        description="Success in digital marketing is measured by performance, not promises. Webfiy Tech creates comprehensive digital strategies that drive qualified traffic, generate quality leads, and convert prospects into loyal customers.
        Our data-driven approach combines cutting-edge technology with proven methodologies to deliver campaigns that perform. From SEO and PPC to social media and content marketing, every tactic is strategically aligned to achieve your business objectives and deliver measurable ROI.
        Your digital success depends on reaching the right audience at the right moment—our expertise ensures your message cuts through the noise and drives action."
        />

        <ScrollSection
        sections={[
            {
            title: "Digital Strategy & Analytics",
            eyebrow: "Every successful campaign starts with",
            description:
                "We analyze your market position, competitor strategies, and audience behavior to build comprehensive digital strategies. Our data-driven approach identifies opportunities, optimizes performance, and ensures every marketing dollar generates maximum return on investment.",
            tags: [
                "Market Analysis",
                "Competitor Research",
                "Customer Journey Mapping",
                "Performance Analytics",
                "Conversion Optimization",
            ],
            image: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/663137d44abc01da6e7e9a92_Research%20%26%20Strategy.avif",
            reverse: false,
            },
            {
            title: "Multi-Channel Campaigns",
            eyebrow: "Your digital presence spans multiple platforms",
            description:
                "At Webfiy Tech, we orchestrate integrated campaigns across all digital touchpoints. From search engine marketing and social media advertising to email campaigns and content marketing, we ensure consistent messaging and optimal performance across every channel your customers use.",
            tags: [
                "Search Engine Marketing",
                "Social Media Advertising",
                "Content Marketing",
                "Email Campaigns",
                "Influencer Partnerships",
                "Video Marketing",
                "Marketing Automation",
            ],
            image: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/6631388618d74d32f203c569_Visual%20Identity.avif",
            reverse: true,
            },
        ]}
        />
        <FeaturedWork />
        <RecentClients />
        <IndustriesSection />
        <FaqsSection />
        <Insights />
        <TestimonialsSection />
        <ContactFormFormspree />
        <FooterIntro />
        </>
    )
}

export default DigitalMarketing