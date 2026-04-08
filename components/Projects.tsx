"use client";

// Projects section — showcases highlighted projects
import { useLanguage } from "@/contexts/LanguageContext";

// Static data: visual styling per project (order matches translations.projects.items)
const PROJECT_META = [
  { tags: ["Kotlin", "Android Studio", "Firebase"], icon: "📱", color: "bg-pink-50 border-pink-100", iconBg: "bg-pink-100" },
  { tags: ["JavaScript", "REST API", "SQL Server"],  icon: "📋", color: "bg-purple-50 border-purple-100", iconBg: "bg-purple-100" },
  { tags: ["React", "Tailwind CSS", "Node.js"],      icon: "📊", color: "bg-cyan-50 border-cyan-100",   iconBg: "bg-cyan-100" },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-white">
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

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => {
            const meta = PROJECT_META[i];
            return (
              <article
                key={project.title}
                className={`rounded-2xl border p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow ${meta.color}`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${meta.iconBg}`}>
                  {meta.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-[#1a1a2e] text-lg">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-600 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
