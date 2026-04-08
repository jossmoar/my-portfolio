// All UI text strings — Spanish (default) and English
export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      habilidades: "Habilidades",
      proyectos: "Proyectos",
      experiencia: "Experiencia",
      contactame: "Contáctame",
      certificaciones: "Certificaciones",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Ingeniera en Software",
      bio: "Bachillerato en Ingeniería del Software. Desarrollo aplicaciones web de extremo a extremo — desde APIs RESTful y bases de datos hasta interfaces modernas — aplicando buenas prácticas de ingeniería, metodologías ágiles y diversas tecnologías según lo que el proyecto requiera.",
      ctaProjects: "Ver Proyectos",
      ctaCv: "Descargar CV",
      badgeRole: "Software Engineer",
      expLabel: "Experiencia",
      expValue: "1+ año",
    },
    skills: {
      eyebrow: "Tecnologías",
      title: "Habilidades &",
      titleHighlight: "Herramientas",
      subtitle: "Stack técnico con el que desarrollo soluciones robustas de principio a fin.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        databases: "Bases de datos",
        devtools: "Dev Tools & Cloud",
        testing: "Testing",
        methodologies: "Metodologías",
      },
      methodologySkills: ["Agile / Scrum", "SDLC", "Code Review", "Documentación técnica"],
    },
    projects: {
      eyebrow: "Portafolio",
      title: "Especializada en crear",
      titleHighlight: "experiencias web bonitas",
      subtitle: "Proyectos que combinan buen diseño, arquitectura sólida y código limpio.",
      items: [
        {
          title: "App Móvil de Pasantías",
          description:
            "Aplicación Android para conectar estudiantes con empresas que ofrecen pasantías en todo el país. Incluye mapa interactivo con filtros por provincia, distrito y cantón, sistema de favoritos, evaluaciones y comentarios de empresas, dashboard de métricas para admin, y flujos separados de registro para estudiantes y empresas.",
        },
        {
          title: "Registro de Eventos",
          description:
            "Módulo de registro y seguimiento de asistentes con reportes exportables y validación de datos en tiempo real.",
        },
        {
          title: "Dashboard Analítico",
          description:
            "Panel administrativo con métricas de eventos, visualizaciones de datos y gestión de roles de usuario.",
        },
      ],
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia",
      titleHighlight: "Profesional",
      subtitle: "Trabajo real en entornos de producción, contribuyendo a productos usados por personas.",
      role: "Desarrolladora de Software",
      company: "EventPlus",
      period: "2024 – Presente",
      type: "Tiempo completo",
      description:
        "Plataforma web empresarial para gestión de eventos. Participé en el ciclo completo de desarrollo: corrección de bugs, implementación de herramientas de observabilidad y creación de nuevas funcionalidades.",
      contributions: [
        { icon: "🔍", label: "Monitoreo de errores", detail: "Implementé Sentry para captura y seguimiento de errores en producción." },
        { icon: "📈", label: "Métricas de producto", detail: "Integré PostHog para análisis de comportamiento de usuario y eventos." },
        { icon: "🐛", label: "Corrección de bugs", detail: "Resolución de defectos en producción y mejora de estabilidad general." },
        { icon: "🗓️", label: "Super Agenda", detail: "Desarrollé la vista de agenda avanzada para gestión de eventos del organizador." },
        { icon: "🎫", label: "Página de evento", detail: "Creé la página pública de detalle de evento con información completa." },
        { icon: "✨", label: "Flujos de creación", detail: "Implementé los flujos paso a paso para creación y publicación de eventos." },
      ],
    },
    certifications: {
      eyebrow: "Formación",
      title: "Licencias &",
      titleHighlight: "Certificaciones",
      subtitle: "Credenciales verificables de instituciones reconocidas.",
      verifyLabel: "Verificar credencial",
      issuedLabel: "Expedido",
      credentialIdLabel: "ID de credencial",
      items: [
        {
          name: "Técnico en Desarrollo de Software",
          issuer: "Universidad Cenfotec",
          issued: "Abril 2026",
          credentialId: "44cc78b5-cc30-49d2-aecf-a9c763402c92",
          credentialUrl: "https://acreditta.com/credential/44cc78b5-cc30-49d2-aecf-a9c763402c92",
        },
        {
          name: "Bachillerato en Ingeniería del Software",
          issuer: "Universidad Cenfotec",
          issued: "Abril 2026",
          credentialId: "b5debaba-c636-43b2-ba86-58be56ea4fcd",
          credentialUrl: "https://acreditta.com/credential/b5debaba-c636-43b2-ba86-58be56ea4fcd",
        },
        {
          name: "Scrum Fundamentals Certified (SFC)",
          issuer: "SCRUMstudy",
          issued: "Abril 2022",
          credentialId: "910757",
          credentialUrl: "/certs/scrum-sfc.pdf",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Tienes un proyecto?",
      titleHighlight: "Hablemos.",
      subtitle: "Estoy disponible para oportunidades freelance, trabajo remoto y posiciones de tiempo completo. No dudes en escribirme.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo",
      emailPlaceholder: "tu@correo.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      submit: "Enviar mensaje",
      subjectPrefix: "Contacto desde portafolio",
    },
    footer: "Heredia, Costa Rica",
  },

  en: {
    nav: {
      inicio: "Home",
      habilidades: "Skills",
      proyectos: "Projects",
      experiencia: "Experience",
      contactame: "Contact me",
      certificaciones: "Certifications",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Software Engineer",
      bio: "Bachelor's degree in Software Engineering. I build full-stack web applications — from RESTful APIs and databases to modern interfaces — applying engineering best practices, agile methodologies, and the right technologies for each project.",
      ctaProjects: "View Projects",
      ctaCv: "Download CV",
      badgeRole: "Software Engineer",
      expLabel: "Experience",
      expValue: "1+ year",
    },
    skills: {
      eyebrow: "Technologies",
      title: "Skills &",
      titleHighlight: "Tools",
      subtitle: "Technical stack I use to build robust solutions end to end.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        databases: "Databases",
        devtools: "Dev Tools & Cloud",
        testing: "Testing",
        methodologies: "Methodologies",
      },
      methodologySkills: ["Agile / Scrum", "SDLC", "Code Review", "Technical Documentation"],
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Specialized in building",
      titleHighlight: "beautiful web experiences",
      subtitle: "Projects combining good design, solid architecture, and clean code.",
      items: [
        {
          title: "Internship Mobile App",
          description:
            "Android app connecting students with companies offering internships nationwide. Features an interactive map with filters by province, district, and canton, favorites system, company reviews and comments, admin metrics dashboard, and separate registration flows for students and companies.",
        },
        {
          title: "Event Registration",
          description:
            "Module for attendee registration and tracking with exportable reports and real-time data validation.",
        },
        {
          title: "Analytics Dashboard",
          description:
            "Admin panel with event metrics, data visualizations, and user role management.",
        },
      ],
    },
    experience: {
      eyebrow: "Career",
      title: "Professional",
      titleHighlight: "Experience",
      subtitle: "Real work in production environments, contributing to products used by real people.",
      role: "Software Developer",
      company: "EventPlus",
      period: "2024 – Present",
      type: "Full time",
      description:
        "Enterprise web platform for event management. I participated in the full development cycle: bug fixing, observability tooling, and new feature development.",
      contributions: [
        { icon: "🔍", label: "Error monitoring", detail: "Implemented Sentry for capturing and tracking production errors." },
        { icon: "📈", label: "Product metrics", detail: "Integrated PostHog for user behavior analytics and event tracking." },
        { icon: "🐛", label: "Bug fixing", detail: "Resolved production defects and improved overall system stability." },
        { icon: "🗓️", label: "Super Agenda", detail: "Built the advanced agenda view for organizer event management." },
        { icon: "🎫", label: "Event page", detail: "Created the public event detail page with full event information." },
        { icon: "✨", label: "Creation flows", detail: "Implemented step-by-step flows for event creation and publishing." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Got a project?",
      titleHighlight: "Let's talk.",
      subtitle: "I'm available for freelance opportunities, remote work, and full-time positions. Feel free to reach out.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send message",
      subjectPrefix: "Portfolio contact",
    },
    certifications: {
      eyebrow: "Education",
      title: "Licenses &",
      titleHighlight: "Certifications",
      subtitle: "Verifiable credentials from recognized institutions.",
      verifyLabel: "Verify credential",
      issuedLabel: "Issued",
      credentialIdLabel: "Credential ID",
      items: [
        {
          name: "Software Development Technician",
          issuer: "Universidad Cenfotec",
          issued: "April 2026",
          credentialId: "44cc78b5-cc30-49d2-aecf-a9c763402c92",
          credentialUrl: "https://acreditta.com/credential/44cc78b5-cc30-49d2-aecf-a9c763402c92",
        },
        {
          name: "Bachelor's in Software Engineering",
          issuer: "Universidad Cenfotec",
          issued: "April 2026",
          credentialId: "b5debaba-c636-43b2-ba86-58be56ea4fcd",
          credentialUrl: "https://acreditta.com/credential/b5debaba-c636-43b2-ba86-58be56ea4fcd",
        },
        {
          name: "Scrum Fundamentals Certified (SFC)",
          issuer: "SCRUMstudy",
          issued: "April 2022",
          credentialId: "910757",
          credentialUrl: "/certs/scrum-sfc.pdf",
        },
      ],
    },
    footer: "Heredia, Costa Rica",
  },
} as const;

export type Translations = typeof translations.es;
