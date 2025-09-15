// src/components/Navbar.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function cx(...args) {
  return args.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { pathname } = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const H_EXPANDED = 112;
  const H_COMPACT = 80;
  const SCROLL_THRESHOLD = 10;

  // prevent background scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // compact nav on scroll — only update state when threshold crosses
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const applyNavHeight = (isScrolled) => {
      root.style.setProperty("--nav-h", `${isScrolled ? H_COMPACT : H_EXPANDED}px`);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > SCROLL_THRESHOLD;
        // only update when it changes to avoid re-render storms
        setScrolled((prev) => {
          if (prev !== next) applyNavHeight(next);
          return next === prev ? prev : next;
        });
        ticking = false;
      });
    };

    // initial
    applyNavHeight(window.scrollY > SCROLL_THRESHOLD);
    setScrolled(window.scrollY > SCROLL_THRESHOLD);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus + scroll to top on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileServicesOpen(false);
    // 'instant' isn't a valid behavior; use auto (or just window.scrollTo(0,0))
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  // close dropdown on outside click
  const dropdownRef = useRef(null);
  useEffect(() => {
    if (!openDropdown) return;
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openDropdown]);

  const linkBase = useMemo(
    () =>
      cx(
        "text-[15px] sm:text-sm transition-colors",
        scrolled
          ? "text-slate-700 hover:text-slate-900"
          : "text-slate-200 hover:text-white"
      ),
    [scrolled]
  );
  const activeClasses = scrolled
    ? "text-slate-900 font-medium"
    : "text-white font-medium";

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/work", label: "Work" },
    { to: "/contact", label: "Contact" },
  ];

  // NOTE: No /services/graphic-designing route yet; point to UI/UX to avoid 404s.
  const serviceLinks = [
    { label: "Web Design & Development", to: "/services/web-development" },
    { label: "SEO", to: "/services/SEO" },
    { label: "App Development", to: "/services/app-development" },
    { label: "Digital Marketing", to: "/services/digital-marketing" },
    { label: "UI/UX", to: "/services/UIUX" },
    { label: "Google PPC Ads", to: "/services/google-ppc-ads" },
    { label: "Virtual Assistance", to: "/services/virtual-assistance" },
    { label: "Video Editing", to: "/services/video-editing" },
    { label: "Graphic Designing", to: "/services/UIUX" }, // temp
  ];

  return (
    <header
      className={cx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white text-slate-900 border-b border-slate-200 shadow-sm"
          : "bg-transparent text-white"
      )}
    >
      {/* Top bar */}
      <div
        className={cx(
          "mx-auto w-full max-w-7xl flex items-center justify-between px-3 sm:px-4 md:px-[10px] transition-all duration-300",
          scrolled ? "h-16 sm:h-20" : "h-[88px] sm:h-28"
        )}
      >
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-1 !pl-0 min-w-0"
          aria-label="Webify Tech — Home"
        >
          <span
            className={cx(
              "font-['Poppins'] tracking-tight block truncate transition-all",
              scrolled
                ? "text-[clamp(22px,4vw,30px)] text-slate-900"
                : "text-[clamp(26px,5vw,36px)] text-white"
            )}
          >
            Webify Tech
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navItems.slice(0, 1).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cx(linkBase, isActive && activeClasses)
              }
              end
            >
              {item.label}
            </NavLink>
          ))}

          {/* Services dropdown (CSS transitions only) */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === "services" ? null : "services")
              }
              aria-expanded={openDropdown === "services"}
              aria-controls="services-menu"
              className={cx(linkBase, "inline-flex items-center gap-1")}
            >
              Services
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className={cx(
                  "transition-transform",
                  openDropdown === "services" && "rotate-180"
                )}
                aria-hidden="true"
              >
                <path
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              id="services-menu"
              ref={dropdownRef}
              className={cx(
                "absolute left-0 top-full mt-2 w-56 rounded-md border transition-opacity duration-200",
                scrolled
                  ? "bg-white border-slate-200 shadow-lg"
                  : "bg-[#151515] border-white/10 shadow-soft",
                openDropdown === "services"
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              )}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <ul className="py-2">
                {serviceLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className={cx(
                        "block px-4 py-2 text-sm transition-colors",
                        scrolled
                          ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                          : "text-slate-200 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cx(linkBase, isActive && activeClasses)
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* CTA */}
          <Link
            to="/proposalrequest"
            className={
              scrolled
                ? "px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90"
                : "px-4 py-2 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90"
            }
          >
            Request a Proposal
          </Link>
        </nav>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3">
          <Link
            to="/contact"
            className={
              scrolled
                ? "px-3 py-2 rounded-xl bg-black text-white text-sm hover:opacity-90"
                : "px-3 py-2 rounded-xl border border-white/20 text-sm text-white hover:bg-white/10"
            }
          >
            Proposal
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((v) => !v);
              setOpenDropdown(null);
            }}
            className={
              scrolled
                ? "px-3 py-2 rounded-xl border border-slate-300 text-sm text-slate-800 hover:bg-slate-100"
                : "px-3 py-2 rounded-xl border border-white/20 text-sm text-slate-200 hover:bg-white/10"
            }
          >
            Menu
          </button>
        </div>
      </div>

      {/* Floating logo pill */}
      <div
        className="pointer-events-none absolute left-0 right-0 hidden sm:block"
        style={{ top: "var(--nav-h)" }}
      >
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-[10px]">
          <div className="flex justify-end">
            <Link
              to="/"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full px-3 py-2 shadow-md"
              style={{
                background: scrolled ? "#0B1220" : "rgba(255,255,255,0.12)",
                border: scrolled
                  ? "1px solid rgba(15,23,42,0.2)"
                  : "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                backdropFilter: "saturate(140%) blur(6px)",
              }}
            >
              <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white text-black text-xs font-bold">
                WT
              </span>
              <span className="text-xs font-medium">Webify Tech</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cx(
          "lg:hidden transition-[max-height,opacity] duration-300 overflow-hidden",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
          scrolled
            ? "border-t border-slate-200 bg-white"
            : "border-t border-white/10 bg-[#0B1220]"
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-[10px] py-4">
          {/* Top-level links */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cx(
                    "block py-2 text-[15px] sm:text-sm transition-colors",
                    scrolled
                      ? "text-slate-700 hover:text-slate-900"
                      : "text-slate-200 hover:text-white",
                    isActive &&
                      (scrolled
                        ? "text-slate-900 font-medium"
                        : "text-white font-medium")
                  )
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Services accordion (mobile) */}
          <div className="mt-2 border-t pt-2" />
          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
            className={cx(
              "w-full flex items-center justify-between py-2 text-[15px] sm:text-sm",
              scrolled
                ? "text-slate-700 hover:text-slate-900"
                : "text-slate-200 hover:text-white"
            )}
          >
            <span>Services</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className={cx("transition-transform", mobileServicesOpen && "rotate-180")}
              aria-hidden="true"
            >
              <path
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={cx(
              "grid transition-[grid-template-rows] duration-300",
              mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <ul className="overflow-hidden">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className={cx(
                      "block px-1.5 py-2 text-sm",
                      scrolled
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-slate-300 hover:text-white"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
