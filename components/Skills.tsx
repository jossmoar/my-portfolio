// Skills section — technology categories from CV
const skillGroups = [
  {
    category: "Backend",
    color: "bg-pink-50 border-pink-100",
    iconColor: "text-brand",
    icon: "⚙️",
    skills: ["Java", "Spring Boot", "Node.js", "Python", "Kotlin", "C++", "RESTful APIs", "Hibernate/JPA"],
  },
  {
    category: "Frontend",
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple",
    icon: "🎨",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Bases de datos",
    color: "bg-cyan-50 border-cyan-100",
    iconColor: "text-cyan-500",
    icon: "🗄️",
    skills: ["MySQL", "SQL Server", "Oracle", "SQL", "NoSQL"],
  },
  {
    category: "Dev Tools & Cloud",
    color: "bg-orange-50 border-orange-100",
    iconColor: "text-orange-400",
    icon: "🛠️",
    skills: ["Git", "Docker", "Maven", "Gradle", "Linux", "Azure", "Firebase"],
  },
  {
    category: "Testing",
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-500",
    icon: "🧪",
    skills: ["JUnit", "Mockito"],
  },
  {
    category: "Metodologías",
    color: "bg-yellow-50 border-yellow-100",
    iconColor: "text-yellow-500",
    icon: "📐",
    skills: ["Agile / Scrum", "SDLC", "Code Review", "Documentación técnica"],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">
            Tecnologías
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            Habilidades &{" "}
            <span className="text-brand">Herramientas</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Stack técnico con el que desarrollo soluciones robustas de principio a fin.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl border p-6 flex flex-col gap-4 ${group.color}`}
            >
              {/* Card header */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-bold text-[#1a1a2e] text-base">{group.category}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}
