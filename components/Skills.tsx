"use client";

// Skills section — technology categories from CV
import { useLanguage } from "@/contexts/LanguageContext";

// Static data: colors, icons, and skill arrays that don't change by language
const SKILL_META = {
  backend: {
    color: "bg-pink-50 border-pink-100",
    icon: "⚙️",
    skills: ["Java", "Spring Boot", "Node.js", "Python", "Kotlin", "C++", "RESTful APIs", "Hibernate/JPA"],
  },
  frontend: {
    color: "bg-purple-50 border-purple-100",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  databases: {
    color: "bg-cyan-50 border-cyan-100",
    icon: "🗄️",
    skills: ["MySQL", "SQL Server", "Oracle", "SQL", "NoSQL"],
  },
  devtools: {
    color: "bg-orange-50 border-orange-100",
    icon: "🛠️",
    skills: ["Git", "Docker", "Maven", "Gradle", "Linux", "Azure", "Firebase", "Sentry", "PostHog", "i18next"],
  },
  testing: {
    color: "bg-green-50 border-green-100",
    icon: "🧪",
    skills: ["JUnit", "Mockito", "Jest"],
  },
  methodologies: {
    color: "bg-yellow-50 border-yellow-100",
    icon: "📐",
    // skills come from translations (some strings change by locale)
  },
} as const;

type SkillKey = keyof typeof SKILL_META;

export default function Skills() {
  const { t } = useLanguage();

  const groups: { key: SkillKey; label: string; skills: readonly string[] }[] = [
    { key: "backend",       label: t.skills.categories.backend,       skills: SKILL_META.backend.skills },
    { key: "frontend",      label: t.skills.categories.frontend,      skills: SKILL_META.frontend.skills },
    { key: "databases",     label: t.skills.categories.databases,     skills: SKILL_META.databases.skills },
    { key: "devtools",      label: t.skills.categories.devtools,      skills: SKILL_META.devtools.skills },
    { key: "testing",       label: t.skills.categories.testing,       skills: SKILL_META.testing.skills },
    { key: "methodologies", label: t.skills.categories.methodologies, skills: t.skills.methodologySkills },
  ];

  return (
    <section id="habilidades" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">
            {t.skills.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            {t.skills.title}{" "}
            <span className="text-brand">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => {
            const meta = SKILL_META[group.key];
            return (
              <div
                key={group.key}
                className={`rounded-2xl border p-6 flex flex-col gap-4 ${meta.color}`}
              >
                {/* Card header */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{meta.icon}</span>
                  <h3 className="font-bold text-[#1a1a2e] text-base">{group.label}</h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-white text-gray-700 border border-gray-200 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
