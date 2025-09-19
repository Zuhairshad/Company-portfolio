// src/components/ContactFormFormspree.jsx
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactFormFormspree() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnblzdd";

  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    hearAbout: "",
    budget: "",
    message: "",
    file: null,
  });

  const onChange = (e) => {
    const { name, value, files, type } = e.target;
    // Only take a file when there is at least one file
    if (type === "file") {
      setForm((f) => ({ ...f, [name]: files && files.length > 0 ? files[0] : null }));
    } else {
      setForm((f) => ({ ...f, [name]: value ?? "" }));
    }
  };

  // 1) Replace your handleSubmit with this:
async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
  
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (v !== null && v !== undefined) fd.append(k, v);
    });
    fd.append("_subject", "New Contact Submission — Webify Tech");
  
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
        // mode: "cors", // not required, but you can uncomment
      });
  
      // If fetch reached the server but got a non-2xx response:
      if (!res.ok) {
        const text = await res.text(); // get raw toasts for debugging
        let message = "Submission failed.";
        try {
          const data = JSON.parse(text);
          if (data?.errors?.length) {
            message = data.errors.map((e) => e.message).join(", ");
          }
        } catch {
          // not JSON → keep text snippet if helpful
          if (text) message = text.slice(0, 200);
        }
        console.error("Formspree non-OK:", res.status, message);
        toast.error("❌ " + message);
        return;
      }
  
      // Success
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        hearAbout: "",
        budget: "",
        message: "",
        file: null,
      });
      e.currentTarget.reset();
      toast.success("✅ Thanks! Your message has been sent.");
    } catch (err) {
      // This is the true “network error” (CORS/ad-block/offline)
      console.error("Network/CORS error posting to Formspree:", err);
      const hint =
        "This is usually caused by an ad-blocker or CORS (Allowed Domains). " +
        "Try disabling extensions, adding your localhost to Allowed Domains, or testing another network.";
      toast.error("⚠️ Network error. " + hint);
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

          {/* Right column — form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative z-[100] overflow-visible bg-white p-6 sm:p-8"
            >
              {/* Honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

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
                    value={form.firstName}
                    onChange={onChange}
                  />
                </div>

                <div>
                  <label className={label} htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={baseInput}
                    value={form.lastName}
                    onChange={onChange}
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
                    value={form.email}
                    onChange={onChange}
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
                    
                    className={baseInput}
                    value={form.phone}
                    onChange={onChange}
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
                    value={form.service}
                    onChange={onChange}
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
                    value={form.hearAbout}
                    onChange={onChange}
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
                    
                    className={selectClass}
                    value={form.budget}
                    onChange={onChange}
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
                    
                    rows={5}
                    className={baseInput}
                    value={form.message}
                    onChange={onChange}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={label} htmlFor="file">File upload</label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    className="block text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-white file:text-sm hover:file:opacity-90"
                    onChange={onChange}
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

           {/* Toast notifications */}
           <ToastContainer
  position="top-right"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnFocusLoss
  draggable
  pauseOnHover
  toastStyle={{
    background: "#0B1220",
    color: "#ffffff",
    borderRadius: "0.75rem",
    fontSize: "0.9rem",
    zIndex: 50,
    marginTop: "calc(var(--nav-h) + 40px)" 
  }}
/>

    </section>
  );
}
