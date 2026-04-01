// Hero section — matches the provided design mockup exactly
import Image from "next/image";

// Social link icons as inline SVGs to avoid icon lib dependency
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// Decorative rotated diamond shape
function Diamond({ className }: { className: string }) {
  return (
    <div
      className={`absolute rotate-45 rounded-sm ${className}`}
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[#fff0f7] overflow-hidden pt-16"
    >
      {/* Background gradient blob — the pink glow behind the photo */}
      <div
        className="absolute right-0 top-0 w-[55%] h-full rounded-l-[80px]"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, #f9a8d4 0%, #fce7f3 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Floating decorative diamonds */}
      <Diamond className="w-5 h-5 bg-[#ff9f1c] opacity-80 top-[22%] right-[14%]" />
      <Diamond className="w-3.5 h-3.5 bg-[#4cc9f0] opacity-80 top-[35%] right-[8%]" />
      <Diamond className="w-4 h-4 bg-[#f72585] opacity-60 top-[60%] right-[18%]" />
      <Diamond className="w-6 h-6 bg-[#ff9f1c] opacity-50 top-[72%] right-[6%]" />
      <Diamond className="w-3 h-3 bg-[#7209b7] opacity-70 top-[18%] right-[40%]" />
      <Diamond className="w-4 h-4 bg-[#4cc9f0] opacity-50 top-[80%] left-[12%]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* LEFT — text content */}
        <div className="flex flex-col gap-5 z-10">
          <p className="text-lg text-gray-600 font-medium">Hola, soy</p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a1a2e] leading-tight">
            Joselin Montero
          </h1>

          <p className="text-2xl font-semibold text-brand">Frontend Developer</p>

          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Especializada en crear experiencias web bonitas, funcionales y
            escalables que conectan con los usuarios.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#proyectos"
              className="px-7 py-3 rounded-full bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition-colors shadow-md shadow-pink-200"
            >
              Ver Proyectos
            </a>
            <a
              href="/cv/joselin-montero-cv.pdf"
              download
              className="px-7 py-3 rounded-full border-2 border-brand text-brand font-semibold text-sm hover:bg-brand hover:text-white transition-colors"
            >
              Descargar CV
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 mt-2">
            <a
              href="https://www.linkedin.com/in/joselin-montero-arias-8aa641239"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-brand hover:shadow-md transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-brand hover:shadow-md transition-all"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="mailto:josi.montero@hotmail.com"
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-brand hover:shadow-md transition-all"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* RIGHT — profile photo with gradient ring */}
        <div className="relative flex items-center justify-center z-10">
          {/* Outer gradient ring */}
          <div
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-1"
            style={{
              background: "linear-gradient(135deg, #f72585 0%, #7209b7 50%, #4cc9f0 100%)",
            }}
          >
            {/* Inner photo container */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#fce7f3]">
              <Image
                src="/images/select.png"
                alt="Joselin Montero"
                width={320}
                height={320}
                className="w-full h-full object-cover" style={{ objectPosition: "center 50%" }}
                priority
              />
            </div>
          </div>

          {/* Small floating badge — React skill indicator */}
          <div className="absolute -bottom-2 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand inline-block" />
            <span className="text-xs font-semibold text-gray-700">Software Engineer</span>
          </div>

          {/* Experience badge */}
          <div className="absolute -top-2 -right-2 bg-white rounded-2xl shadow-lg px-4 py-2">
            <p className="text-xs text-gray-500">Experiencia</p>
            <p className="text-sm font-bold text-brand">1+ año</p>
          </div>
        </div>
      </div>
    </section>
  );
}
