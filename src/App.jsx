// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Work from "./pages/Work.jsx"
import CaseStudy from "./pages/CaseStudy.jsx";
import Contact from "./pages/Contact.jsx"
import RequestProposal from "./pages/RequestProposal.jsx";
import WebsiteDesign from "./pages/WebsiteDesign.jsx";
import Navbar from "./components/Navbar.jsx";
import UIUX from "./pages/UIUX.jsx";
import DigitalMarketing from "./pages/DigitalMarketing.jsx";
import SEO from "./pages/SEO.jsx"
import AppDevelopment from "./pages/AppDevelopment.jsx";
import GooglePpcAds from "./pages/GooglePpcAds.jsx";
import VirtualAssistance from "./pages/VirtualAssistance.jsx";
import VideoEditing from "./pages/VideoEditing.jsx";
export default function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/proposalrequest" element={<RequestProposal/>} />
        <Route path="/services/web-development" element={<WebsiteDesign/>} />
        <Route path="/services/SEO" element={<SEO/>}/>
        <Route path="/services/UIUX" element={<UIUX />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/google-ppc-ads" element={<GooglePpcAds/>} />
        <Route path="/services/virtual-assistance" element={<VirtualAssistance />} />
        <Route path="/services/video-editing" element={<VideoEditing />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />



      {/* add more routes here */}
    </Routes>
    </>
  );
}
