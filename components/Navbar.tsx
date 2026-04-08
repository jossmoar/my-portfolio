"use client";

// Sticky top navigation — collapses to hamburger on mobile
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, locale, toggleLocale } = useLanguage();

  const navLinks = [
    { label: t.nav.inicio, href: "#inicio" },
    { label: t.nav.habilidades, href: "#habilidades" },
    { label: t.nav.proyectos, href: "#proyectos" },
    { label: t.nav.experiencia, href: "#experiencia" },
    { label: t.nav.certificaciones, href: "#certificaciones" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <span className="text-xl font-bold text-[#1a1a2e]">
          Jose<span className="text-brand">lin</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-brand hover:text-brand transition-colors"
            aria-label="Switch language"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>

          <a
            href="#contacto"
            className="inline-flex items-center px-5 py-2 rounded-full bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors"
          >
            {t.nav.contactame}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-gray-700 hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 pt-1">
              <a
                href="#contacto"
                className="inline-flex items-center px-5 py-2 rounded-full bg-brand text-white text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                {t.nav.contactame}
              </a>
              <button
                onClick={toggleLocale}
                className="text-xs font-semibold px-3 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-brand hover:text-brand transition-colors"
              >
                {locale === "es" ? "EN" : "ES"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
