"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "523113761284";

export function CursoWhatsAppForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `¡Hola! Me interesa el curso de *Cirugía Guiada en Nogales* (6 y 7 de Mayo).

Mis datos son:
👤 *Nombre:* ${nombre}
📱 *Teléfono:* ${telefono}
📧 *Correo:* ${correo}
🦷 *Especialidad:* ${especialidad || "No especificada"}

Por favor bríndame información para reservar mi lugar. 🙏`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <section
      id="inscripcion"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-amber-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Paso 1 de 1
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Reserva tu{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #D4AF37 0%, #F5E27A 100%)",
              }}
            >
              lugar hoy
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Llena el formulario y en segundos abrirás WhatsApp con toda tu
            información precargada. Alguien del equipo confirmará tu lugar.
          </p>
        </div>

        {/* Urgency banner */}
        <div
          className="flex items-center justify-center gap-3 rounded-2xl border border-red-500/30 bg-red-950/30 px-6 py-4 mb-8"
        >
          <span className="relative flex h-3 w-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
          </span>
          <p className="text-red-300 font-bold text-sm sm:text-base">
            ⚠️ Cupo máximo:{" "}
            <strong className="text-red-200">Solo 6 lugares disponibles</strong>{" "}
            — El primer depósito asegura tu lugar.
          </p>
        </div>

        {/* Form card */}
        <div
          className="rounded-3xl p-px"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(212,175,55,0.5), rgba(212,175,55,0.1), rgba(212,175,55,0.5))",
          }}
        >
          <div className="rounded-3xl bg-[#0d0d0d] p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    id="form-nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Dr. / Dra."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    WhatsApp / Teléfono *
                  </label>
                  <input
                    id="form-telefono"
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+52 660 000 0000"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Correo */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    id="form-correo"
                    type="email"
                    required
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                  />
                </div>

                {/* Especialidad */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Especialidad
                  </label>
                  <input
                    id="form-especialidad"
                    type="text"
                    value={especialidad}
                    onChange={(e) => setEspecialidad(e.target.value)}
                    placeholder="Ej. Implantología"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                id="form-submit"
                type="submit"
                className="group w-full relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-black text-lg text-black overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-amber-900/30"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #D4AF37 0%, #F5E27A 50%, #B8860B 100%)",
                }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Enviar mis datos por WhatsApp
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <p className="text-center text-slate-600 text-xs">
                Al enviar, se abrirá WhatsApp con tu información precargada. No
                compartimos tus datos con terceros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
