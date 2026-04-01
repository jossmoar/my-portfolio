// Projects section — showcases 3 highlighted projects
const projects = [
  {
    title: "EventPlus App",
    description:
      "Aplicación web para gestión de eventos con registro de usuarios, venta de tickets y panel de control en tiempo real.",
    tags: ["React", "Java", "Spring Boot", "MySQL"],
    icon: "🎟️",
    color: "bg-pink-50 border-pink-100",
    iconBg: "bg-pink-100",
  },
  {
    title: "Registro de Eventos",
    description:
      "Módulo de registro y seguimiento de asistentes con reportes exportables y validación de datos en tiempo real.",
    tags: ["JavaScript", "REST API", "SQL Server"],
    icon: "📋",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    title: "Dashboard Analítico",
    description:
      "Panel administrativo con métricas de eventos, visualizaciones de datos y gestión de roles de usuario.",
    tags: ["React", "Tailwind CSS", "Node.js"],
    icon: "📊",
    color: "bg-cyan-50 border-cyan-100",
    iconBg: "bg-cyan-100",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">
            Portafolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            Especializada en crear{" "}
            <span className="text-brand">experiencias web bonitas</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Proyectos que combinan buen diseño, arquitectura sólida y código limpio.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`rounded-2xl border p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow ${project.color}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${project.iconBg}`}
              >
                {project.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[#1a1a2e] text-lg">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white text-gray-600 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
