// src/components/ContactFormEmailJS.jsx
// E-commerce / Marketplace version (Amazon · eBay · Etsy)
// - Updates copy for ecom services
// - Adds marketplace-specific fields (platforms, store URL, SKUs, fulfillment, ad spend, category)

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EcommerceForms() {
  // EmailJS configuration
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
      console.log("EmailJS success:", result.text);

      if (form) form.reset();
      setStatus({ state: "success", msg: "✅ Thanks! Your message has been sent." });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ state: "error", msg: "❌ Failed to send message. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  const baseInput =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-400 focus:bg-white text-slate-900";
  const label = "block text-sm font-medium text-slate-200 mb-1";
  const selectClass = `${baseInput} pointer-events-auto cursor-pointer`;

  return (
    <section className="relative isolate bg-gradient-to-r from-gray-900 to-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column */}
          <div className="lg:col-span-5 text-white py-40">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              Marketplace Growth
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
              Launch & Scale on Amazon, eBay, and Etsy
            </h2>
            <p className="mt-3 text-base text-white/80 max-w-md">
              Tell us about your store and goals. We handle setup, listing optimization,
              ads, reviews, and ongoing growth across top marketplaces.
            </p>

            {/* Careers / partnership (desktop) */}
            <div className="mt-8 hidden md:block">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="text-white/90">
                  For careers or partnerships, visit our Careers page.
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
            <form onSubmit={handleSubmit} className="relative z-[100] overflow-visible bg-white p-6 sm:p-8 rounded-2xl">
              {/* Hidden context so your EmailJS template knows this is ecom */}
              <input type="hidden" name="form_context" value="ecommerce_marketplace_contact" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="firstName">
                    First Name<span className="text-rose-500">*</span>
                  </label>
                  <input id="firstName" name="firstName" type="text" required className={baseInput} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input id="lastName" name="lastName" type="text" className={baseInput} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
                    Email<span className="text-rose-500">*</span>
                  </label>
                  <input id="email" name="email" type="email" required className={baseInput} autoComplete="email" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">
                    Phone Number<span className="text-rose-500">*</span>
                  </label>
                  <input id="phone" name="phone" type="tel" required className={baseInput} autoComplete="tel" />
                </div>

                {/* Store details */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="storeUrl">
                    Store / Listing URL (if any)
                  </label>
                  <input id="storeUrl" name="storeUrl" type="url" placeholder="https://…" className={baseInput} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="category">
                    Primary Category
                  </label>
                  <select id="category" name="category" className={selectClass} defaultValue="">
                    <option value="">Select</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Toys & Games">Toys & Games</option>
                    <option value="Handmade">Handmade</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="skuCount">
                    Approx. # of SKUs
                  </label>
                  <input id="skuCount" name="skuCount" type="number" min="0" className={baseInput} placeholder="e.g., 25" />
                </div>

                {/* Platforms */}
                <div className="sm:col-span-2">
                  <span className="block text-sm font-medium text-slate-700 mb-1">
                    Platforms<span className="text-rose-500">*</span>
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: "amazon", label: "Amazon" },
                      { id: "ebay", label: "eBay" },
                      { id: "etsy", label: "Etsy" },
                    ].map((p) => (
                      <label key={p.id} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                        <input type="checkbox" name="platforms" value={p.label} className="h-4 w-4" required={false} />
                        {p.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="service">
                    What do you need help with?<span className="text-rose-500">*</span>
                  </label>
                  <select id="service" name="service" required className={selectClass} defaultValue="">
                    <option value="">Please Select</option>
                    <option value="Full Store Setup & Verification">Full Store Setup & Verification</option>
                    <option value="Listing Creation & Optimization">Listing Creation & Optimization</option>
                    <option value="Brand Store / A+ Content">Brand Store / A+ Content</option>
                    <option value="Ads (Amazon Ads / eBay Ads / Etsy Ads)">Ads (Amazon Ads / eBay Ads / Etsy Ads)</option>
                    <option value="Review Strategy & Compliance">Review Strategy & Compliance</option>
                    <option value="Account Health & Support">Account Health & Support</option>
                    <option value="End-to-End Management (Retainer)">End-to-End Management (Retainer)</option>
                  </select>
                </div>

                {/* Ops details */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="fulfillment">
                    Fulfillment Model
                  </label>
                  <select id="fulfillment" name="fulfillment" className={selectClass} defaultValue="">
                    <option value="">Select</option>
                    <option value="FBA">FBA</option>
                    <option value="FBM">FBM</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="monthlyAdSpend">
                    Current / Planned Monthly Ad Spend
                  </label>
                  <select id="monthlyAdSpend" name="monthlyAdSpend" className={selectClass} defaultValue="">
                    <option value="">Select</option>
                    <option value="<$1k">&lt;$1k</option>
                    <option value="$1k–$5k">$1k–$5k</option>
                    <option value="$5k–$15k">$5k–$15k</option>
                    <option value="$15k+">$15k+</option>
                  </select>
                </div>

                {/* Budget & timeline */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="projectBudget">
                    Service Budget<span className="text-rose-500">*</span>
                  </label>
                  <select id="projectBudget" name="projectBudget" required className={selectClass} defaultValue="">
                    <option value="">Select</option>
                    <option value="$500 – $1k">$500 – $1k</option>
                    <option value="$1k – $3k">$1k – $3k</option>
                    <option value="$3k – $7k">$3k – $7k</option>
                    <option value="$7k+">$7k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="timeline">
                    Ideal Start Timeline
                  </label>
                  <select id="timeline" name="timeline" className={selectClass} defaultValue="">
                    <option value="">Select</option>
                    <option value="ASAP">ASAP</option>
                    <option value="2–4 weeks">2–4 weeks</option>
                    <option value="1–2 months">1–2 months</option>
                    <option value="Later / Exploring">Later / Exploring</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">
                    Tell us about your products and goals<span className="text-rose-500">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={5} className={baseInput} placeholder="What are you selling? Where are you live (or planning to launch)? Any current challenges?" />
                </div>

                {/* Consent */}
                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm text-slate-600">
                    <input type="checkbox" name="consent" className="mt-1 h-4 w-4" required />
                    I agree to be contacted about my marketplace project.
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Request Proposal"}
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
                <p>For careers or partnerships, visit our Careers page.</p>
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

      {/* Subtle gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/0 to-black/5" />
    </section>
  );
}
