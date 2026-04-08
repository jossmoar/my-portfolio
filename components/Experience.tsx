"use client";

// Experience section — professional work history with key contributions
import { useLanguage } from "@/contexts/LanguageContext";

const EXPERIENCE_TAGS = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Sentry", "PostHog", "Firebase", "Chart.js", "Axios", "Google Maps API",
];

export default function Experience() {
  const { t } = useLanguage();
  const exp = t.experience;

  return (
    <section id="experiencia" className="py-16 md:py-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">
            {exp.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            {exp.title} <span className="text-brand">{exp.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            {exp.subtitle}
          </p>
        </div>

        {/* Experience card */}
        <article className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a2e]">{exp.role}</h3>
              <p className="text-brand font-semibold mt-0.5">{exp.company}</p>
              <p className="text-gray-400 text-sm mt-0.5">{exp.description}</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
              <span className="text-xs font-semibold text-white bg-brand px-3 py-1 rounded-full">
                {exp.period}
              </span>
              <span className="text-xs text-gray-400">{exp.type}</span>
            </div>
          </div>

          {/* Contributions grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {exp.contributions.map((item) => (
              <div
                key={item.label}
                className="flex gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e]">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {EXPERIENCE_TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-50 text-brand border border-pink-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
