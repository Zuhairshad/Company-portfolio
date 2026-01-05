// src/pages/CaseStudy.jsx
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects.js";
import Navbar from "../components/Navbar.jsx";

/* ---------- helpers ---------- */
function labelize(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}
function fmt(v) {
  if (v == null) return " - ";
  return typeof v === "number" ? String(v) : String(v);
}
/** Prefer paired baseline→after metrics; otherwise show top-level scalar metrics */
function summarizeMetrics(metrics) {
  if (!metrics || typeof metrics !== "object") return [];
  const baseline = metrics.baseline || metrics.before || null;
  const after = metrics.after || metrics.after90d || metrics.variantBest || null;

  if (
    baseline &&
    after &&
    typeof baseline === "object" &&
    typeof after === "object"
  ) {
    const keys = Object.keys(baseline)
      .filter((k) => k in after)
      .slice(0, 4);
    if (keys.length) {
      return keys.map(
        (k) => `${labelize(k)} ${fmt(baseline[k])} → ${fmt(after[k])}`
      );
    }
  }

  // Fallback: up to 4 scalar top-level entries (e.g., spamReduction: "98%")
  return Object.entries(metrics)
    .filter(([, v]) => typeof v !== "object")
    .slice(0, 4)
    .map(([k, v]) => `${labelize(k)} ${fmt(v)}`);
}

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Case study not found.</p>
      </div>
    );
  }

  const m = summarizeMetrics(project.details?.metrics);

  return (
    <article className="min-h-screen bg-white">
      {/* Site Nav */}
      <Navbar />

      {/* Hero */}
      <header className="relative w-full py-40 min-h-[60vh] md:min-h-[70vh]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/55" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 px-3 py-1 text-xs font-medium">
              {project.category}
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white">
              {project.title}
            </h1>
            {project.blurb && (
              <p className="mt-3 text-white/90">
                {project.blurb}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick facts */}
        {(project.details?.client ||
          project.details?.industry ||
          project.details?.timeframe) && (
          <section className="grid sm:grid-cols-3 gap-4">
            {project.details?.client && (
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="text-slate-500 text-sm">Client</div>
                <div className="font-medium text-slate-900">
                  {project.details.client}
                </div>
              </div>
            )}
            {project.details?.industry && (
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="text-slate-500 text-sm">Industry</div>
                <div className="font-medium text-slate-900">
                  {project.details.industry}
                </div>
              </div>
            )}
            {project.details?.timeframe && (
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="text-slate-500 text-sm">Timeframe</div>
                <div className="font-medium text-slate-900">
                  {project.details.timeframe}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Team & Stack */}
        {(project.details?.team || project.details?.stack) && (
          <section className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
            {project.details?.team && (
              <div className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">Team</h3>
                <p className="mt-2 text-slate-700">
                  {Array.isArray(project.details.team)
                    ? project.details.team.join(", ")
                    : project.details.team}
                </p>
              </div>
            )}
            {project.details?.stack && (
              <div className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">Stack</h3>
                <p className="mt-2 text-slate-700">
                  {Array.isArray(project.details.stack)
                    ? project.details.stack.join(", ")
                    : project.details.stack}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Results chips */}
        {m.length > 0 && (
          <section className="mt-6">
            <h3 className="sr-only">Results</h3>
            <div className="flex flex-wrap gap-2">
              {m.map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                >
                  {chip}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Challenge / Solution / Outcome */}
        {(project.details?.challenge ||
          project.details?.solution ||
          project.details?.outcome) && (
          <section className="mt-10 grid md:grid-cols-3 gap-6">
            {project.details?.challenge && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900">📌 Challenge</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {project.details.challenge}
                </p>
              </div>
            )}
            {project.details?.solution && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900">🛠 Solution</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {project.details.solution}
                </p>
              </div>
            )}
            {project.details?.outcome && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900">🚀 Outcome</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {project.details.outcome}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Deliverables */}
        {project.details?.deliverables?.length > 0 && (
          <section className="mt-10">
            <h3 className="text-xl font-semibold text-slate-900">Deliverables</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {project.details.deliverables.map((d, i) => (
                <li key={i}>• {d}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Testimonial */}
        {project.details?.testimonial && (
          <section className="mt-10">
            <blockquote className="border-l-4 border-slate-200 pl-4 italic text-slate-700">
              {project.details.testimonial}
            </blockquote>
          </section>
        )}

        {/* Supporting visual (kept from your version) */}
        <div className="my-12">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
            alt="Case study supporting visual"
            className="rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>

        <Link
          to="/work"
          className="inline-block mt-2 text-sm font-medium text-emerald-600 hover:underline"
        >
          ← Back to Work
        </Link>
      </main>
    </article>
  );
}
