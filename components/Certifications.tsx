"use client";

// Certifications section — verifiable credentials with modern card design
import { useLanguage } from "@/contexts/LanguageContext";

// Accent colors cycled per card to add visual variety
const CARD_ACCENTS = [
  { gradient: "from-[#f72585] to-[#7209b7]", light: "bg-pink-50", ring: "ring-pink-200" },
  { gradient: "from-[#7209b7] to-[#4cc9f0]", light: "bg-purple-50", ring: "ring-purple-200" },
  { gradient: "from-[#4cc9f0] to-[#f72585]", light: "bg-cyan-50",   ring: "ring-cyan-200" },
];

// Verified checkmark badge
function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm3.78 4.78a.75.75 0 0 0-1.06-1.06L6.75 8.69 5.28 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5Z" />
      </svg>
      Verified
    </span>
  );
}

// External link icon
function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
      <path d="M10.5 3H17m0 0v6.5M17 3l-7 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 5H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Certifications() {
  const { t } = useLanguage();
  const c = t.certifications;

  return (
    <section id="certificaciones" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">
            {c.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            {c.title} <span className="text-brand">{c.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            {c.subtitle}
          </p>
        </div>

        {/* Cards grid — designed for up to 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <article
                key={item.credentialId}
                className={`relative rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ring-1 ${accent.ring}`}
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-linear-to-r ${accent.gradient}`} />

                {/* Card body */}
                <div className="flex flex-col gap-5 p-6 flex-1">
                  {/* Top row: icon + verified badge */}
                  <div className="flex items-start justify-between">
                    {/* Certificate icon with gradient background */}
                    <div className={`w-12 h-12 rounded-xl ${accent.light} flex items-center justify-center`}>
                      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <rect x="2" y="3" width="20" height="14" rx="2" className="fill-current opacity-10" />
                        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-brand" />
                        <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-brand" />
                        <circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" className="text-brand" />
                        <path d="M10.5 18.5 9 21M13.5 18.5 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-brand" />
                      </svg>
                    </div>
                    <VerifiedBadge />
                  </div>

                  {/* Certificate name */}
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] text-base leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-brand font-semibold text-sm mt-1">{item.issuer}</p>
                  </div>

                  {/* Issued date */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      {c.issuedLabel}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                      {item.issued}
                    </span>
                  </div>

                  {/* Credential ID */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                      {c.credentialIdLabel}
                    </p>
                    <p className="font-mono text-[11px] text-gray-500 break-all leading-relaxed">
                      {item.credentialId}
                    </p>
                  </div>

                  {/* Verify button — pushes to bottom. Always present since all certs have a URL or local PDF */}
                  <div className="mt-auto pt-1">
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-linear-to-r ${accent.gradient} text-white text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm`}
                    >
                      {c.verifyLabel}
                      <ExternalLinkIcon />
                    </a>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
