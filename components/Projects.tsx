"use client";

// Projects section — infinite-loop carousel
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const PROJECT_META = [
  { tags: ["Kotlin", "Android Studio", "Firebase"],                          icon: "📱", color: "bg-pink-50 border-pink-100",       iconBg: "bg-pink-100"     },
  { tags: ["Next.js 14", "Firebase", "Firestore", "QR Code"],               icon: "📋", color: "bg-purple-50 border-purple-100",   iconBg: "bg-purple-100"   },
  { tags: ["Next.js 14", "Chart.js", "Firebase", "Excel Export"],           icon: "📊", color: "bg-cyan-50 border-cyan-100",       iconBg: "bg-cyan-100"     },
  { tags: ["React Context API", "Tailwind CSS", "Next.js"],                  icon: "🌙", color: "bg-slate-50 border-slate-200",     iconBg: "bg-slate-200"    },
  { tags: ["Angular 16", "Spring Boot", "MySQL", "AWS", "Mapbox", "Docker"], icon: "🐾", color: "bg-emerald-50 border-emerald-100", iconBg: "bg-emerald-100"  },
];

export default function Projects() {
  const { t } = useLanguage();
  const items = t.projects.items;
  const total = items.length;

  // Triple the items so we can slide infinitely in both directions
  const extended = [...items, ...items, ...items];

  // 1 card on mobile, 3 on desktop
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [current, setCurrent] = useState<number>(total);
  const [animated, setAnimated] = useState(true);

  const prev = () => { setAnimated(true); setCurrent((c) => c - 1); };
  const next = () => { setAnimated(true); setCurrent((c) => c + 1); };

  // After a transition ends, jump instantly to the equivalent position in the middle copy
  const onTransitionEnd = () => {
    if (current >= total * 2) {
      setAnimated(false);
      setCurrent((c) => c - total);
    } else if (current < total) {
      setAnimated(false);
      setCurrent((c) => c + total);
    }
  };

  // Re-enable animation one frame after the instant jump (prevents visible flash)
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  // Which dot is active — normalized to the original set
  const dotActive = (current - total + total * 10) % total;

  return (
    <section id="proyectos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">
            {t.projects.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            {t.projects.title}{" "}
            <span className="text-brand">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-3 md:gap-4">
          {/* Prev arrow — hidden on mobile */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm items-center justify-center text-xl text-gray-600 hover:text-brand hover:border-brand transition-colors"
          >
            ‹
          </button>

          {/* Track */}
          <div className="overflow-hidden flex-1">
            <div
              onTransitionEnd={onTransitionEnd}
              className="flex"
              style={{
                transform: `translateX(-${current * (100 / visibleCount)}%)`,
                transition: animated ? "transform 500ms ease-in-out" : "none",
              }}
            >
              {extended.map((project, i) => {
                const meta = PROJECT_META[i % total];
                return (
                  <article
                    key={i}
                    style={{ minWidth: `${100 / visibleCount}%` }}
                    className="px-1 md:px-3"
                  >
                    <div className={`rounded-2xl border p-5 md:p-8 flex flex-col gap-5 h-full ${meta.color}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0 ${meta.iconBg}`}>
                          {meta.icon}
                        </div>
                        <h3 className="font-bold text-[#1a1a2e] text-xl">{project.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-1">
                        {meta.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-600 border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Next arrow — hidden on mobile */}
          <button
            onClick={next}
            aria-label="Siguiente"
            className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm items-center justify-center text-xl text-gray-600 hover:text-brand hover:border-brand transition-colors"
          >
            ›
          </button>
        </div>

        {/* Mobile nav: arrows + dots in one row */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-xl text-gray-600 hover:text-brand hover:border-brand transition-colors"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAnimated(true); setCurrent(total + i); }}
                aria-label={`Ir al proyecto ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === dotActive ? "bg-brand w-6 h-2.5" : "bg-gray-300 hover:bg-brand/40 w-2.5 h-2.5"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-xl text-gray-600 hover:text-brand hover:border-brand transition-colors"
          >
            ›
          </button>
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAnimated(true); setCurrent(total + i); }}
              aria-label={`Ir al proyecto ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === dotActive ? "bg-brand w-6 h-2.5" : "bg-gray-300 hover:bg-brand/40 w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
          >
            {t.projects.catalogCta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
