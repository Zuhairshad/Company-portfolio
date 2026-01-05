// src/components/ContactFormEmailJS.jsx
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactFormEmailJS() {
  // EmailJS configuration - Replace with your actual IDs from emailjs.com
  const EMAILJS_SERVICE_ID = "service_wyjxiwj";
  const EMAILJS_TEMPLATE_ID = "template_94jbux9"; 
  const EMAILJS_PUBLIC_KEY = "xwPWhwR1K8CVATRjK";

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    
    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS success:', result.text);
      
      // Reset form DOM element safely
      if (form) {
        form.reset();
      }
      
      setStatus({ state: "success", msg: "✅ Thanks! Your message has been sent." });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({ state: "error", msg: "❌ Failed to send message. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }
  
  const baseInput =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-400 focus:bg-white text-slate-900";
  const label = "block text-sm font-medium text-slate-700 mb-1";
  const selectClass = `${baseInput} pointer-events-auto cursor-pointer`;

  return (
    <section className="relative isolate bg-gradient-to-r from-gray-900 to-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column */}
          <div className="lg:col-span-5 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              Let's Talk
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">Contact Us</h2>
            <p className="mt-3 text-base text-white/80 max-w-md">
              Our goal is to nurture your vision and provide innovative, custom solutions
              for all your marketing needs.
            </p>

            {/* Careers / partnership (desktop) */}
            <div className="mt-8 hidden md:block">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="text-white/90">
                  For all career / partnership opportunities, please visit our Careers page
                </p>
                <a
                  href="/career"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Career / Partnership
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative z-[100] overflow-visible bg-white p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={label} htmlFor="firstName">
                    First Name<span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className={baseInput}
                  />
                </div>

                <div>
                  <label className={label} htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={baseInput}
                  />
                </div>

                <div>
                  <label className={label} htmlFor="email">
                    Email<span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={baseInput}
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label className={label} htmlFor="phone">
                    Phone Number<span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={baseInput}
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label className={label} htmlFor="service">
                    What service are you looking for?<span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className={selectClass}
                    defaultValue=""
                  >
                    <option value="">Please Select</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Branding / Identity">Branding / Identity</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="SEO">SEO</option>
                    <option value="Marketing Strategy">Marketing Strategy</option>
                  </select>
                </div>

                <div>
                  <label className={label} htmlFor="hearAbout">Where did you hear about us?</label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    className={selectClass}
                    defaultValue=""
                  >
                    <option value="">Please Select</option>
                    <option value="Google">Google</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Referral">Referral</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className={label} htmlFor="budget">
                    What is your budget?<span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className={selectClass}
                    defaultValue=""
                  >
                    <option value="">Select</option>
                    <option value="$2k – $5k">$2k – $5k</option>
                    <option value="$5k – $10k">$5k – $10k</option>
                    <option value="$10k – $25k">$10k – $25k</option>
                    <option value="$25k+">$25k+</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className={label} htmlFor="message">
                    Tell us more about your project<span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={baseInput}
                  />
                </div>

              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
                
                {status.state === "success" && (
                  <p className="mt-3 text-sm text-emerald-700">{status.msg}</p>
                )}
                {status.state === "error" && (
                  <p className="mt-3 text-sm text-red-700">{status.msg}</p>
                )}
              </div>
            </form>

            {/* Careers card (mobile) */}
            <div className="mt-6 md:hidden text-white">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p>
                  For all career / partnership opportunities, please visit our Careers page
                </p>
                <a href="/career" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">
                  Career / Partnership
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}