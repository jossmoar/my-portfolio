"use client";

// Catalog of live, deployed side-projects — grows as new ones are added
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { LIVE_PROJECTS_META } from "@/lib/liveProjectsMeta";

export default function LiveProjects() {
  const { t } = useLanguage();
  const items = t.liveProjects.items;

  return (
    <section className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">
            {t.liveProjects.eyebrow}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            {t.liveProjects.title}{" "}
            <span className="text-brand">{t.liveProjects.titleHighlight}</span>
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            {t.liveProjects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, i) => {
            const meta = LIVE_PROJECTS_META[i];
            return (
              <article
                key={project.title}
                className={`rounded-2xl border p-6 md:p-8 flex flex-col gap-5 ${meta.color}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0 ${meta.iconBg}`}
                  >
                    {meta.icon}
                  </div>
                  <h2 className="font-bold text-[#1a1a2e] text-xl">{project.title}</h2>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-600 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-1">
                  <a
                    href={meta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors"
                  >
                    {t.liveProjects.viewLive}
                  </a>
                  <a
                    href={meta.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-semibold hover:border-brand hover:text-brand transition-colors"
                  >
                    {t.liveProjects.viewCode}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-brand transition-colors"
          >
            ← {t.liveProjects.backToPortfolio}
          </Link>
        </div>
      </div>
    </section>
  );
}
