// src/components/FooterIntro.jsx
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import GlobePins from "./GlobePins";

export default function FooterIntro() {
  const socials = [
    { href: "https://www.instagram.com/webify.tech/", label: "Instagram", Icon: FaInstagram },
    { href: "https://www.facebook.com/people/Webify/100094385718385/", label: "Facebook", Icon: FaFacebookF },
    { href: "https://www.linkedin.com/company/webify-tech/?viewAsMember=true", label: "LinkedIn", Icon: FaLinkedinIn },
    { href: "/", label: "X (Twitter)", Icon: FaXTwitter },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      items: [
        { label: "Home", href: "/" },
        { label: "Our Work", href: "/work" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Video Editing", href: "/services/video-editing" },
        { label: "UI UX", href: "/services/UIUX" },
        { label: "Google PPC Ads", href: "/services/google-ppc-ads" },
        { label: "SEO", href: "/services/SEO" },
        { label: "App Development", href: "/services/app-development" },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* ---- Brand + Socials (2-col layout) ---- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: brand, description, then the lists */}
          <div className="md:col-span-6">
            <span className="font-['Dancing_Script'] text-[clamp(22px,4vw,30px)] tracking-tight">
              WebifyTech
            </span>
            <p className="mt-5 max-w-sm text-base text-white/80">
              We are Webify Tech, a media company and an award-winning marketing
              and web design agency.
            </p>

            {/* Moved lists here under the description */}
            <div className="mt-8 grid grid-cols-2 gap-8 max-w-lg">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="text-base font-semibold mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-white/80 hover:text-white transition text-sm"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: socials + small globe */}
          <div className="md:col-span-6 md:justify-self-end">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
              Follow Us:
            </div>
            <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
              {socials.map(({ href, label, Icon }, i) => (
                <motion.li
                  key={label}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Small, static globe directly under socials */}
            <div className="mt-6 w-full max-w-xs md:ml-auto">
              <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                <GlobePins width={320} height={260} />
              </div>
            </div>
          </div>
        </div>
        {/* Divider removed & old links section removed */}
      </div>
    </section>
  );
}
