"use client";

// Contact section — form submits via mailto (static-export compatible)
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Build mailto link with form data and open email client
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde portafolio — ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:josi.montero@hotmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contacto" className="py-24 bg-[#fff0f7]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div className="flex flex-col gap-5">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            ¿Tienes un proyecto?{" "}
            <span className="text-brand">Hablemos.</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Estoy disponible para oportunidades freelance, trabajo remoto y
            posiciones de tiempo completo. No dudes en escribirme.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                ✉
              </span>
              josi.montero@hotmail.com
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                📍
              </span>
              Heredia, Costa Rica
            </div>
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Nombre
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Correo
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@correo.com"
                className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              Mensaje
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Cuéntame sobre tu proyecto..."
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition-colors shadow-md shadow-pink-200"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
