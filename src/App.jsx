// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar.jsx";

// Route-split all pages (Vite will create separate chunks)
const Home = lazy(() => import("./pages/Home.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
const Work = lazy(() => import("./pages/Work.jsx"));
const CaseStudy = lazy(() => import("./pages/CaseStudy.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const RequestProposal = lazy(() => import("./pages/RequestProposal.jsx"));
const WebsiteDesign = lazy(() => import("./pages/WebsiteDesign.jsx"));
const UIUX = lazy(() => import("./pages/UIUX.jsx"));
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing.jsx"));
const SEO = lazy(() => import("./pages/SEO.jsx"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment.jsx"));
const GooglePpcAds = lazy(() => import("./pages/GooglePpcAds.jsx"));
const VirtualAssistance = lazy(() => import("./pages/VirtualAssistance.jsx"));
const VideoEditing = lazy(() => import("./pages/VideoEditing.jsx"));

// 404 (lazy) with safe fallback if the file is missing during dev
const NotFound = lazy(() =>
  import("./pages/NotFound.jsx").catch(() => ({
    default: () => <div className="p-8">Not Found</div>,
  }))
);

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="p-8 text-slate-600">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proposalrequest" element={<RequestProposal />} />

          {/* Services */}
          <Route path="/services/web-development" element={<WebsiteDesign />} />
          <Route path="/services/SEO" element={<SEO />} />
          <Route path="/services/UIUX" element={<UIUX />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/google-ppc-ads" element={<GooglePpcAds />} />
          <Route path="/services/virtual-assistance" element={<VirtualAssistance />} />
          <Route path="/services/video-editing" element={<VideoEditing />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
