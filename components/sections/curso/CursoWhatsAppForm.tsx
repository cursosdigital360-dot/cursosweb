"use client";

import { useState } from "react";
import { siteConfig } from "../../../content/site.config";
import { SectionTitle } from "../../ui/SectionTitle";

export function CursoWhatsAppForm() {
  const { contact } = siteConfig;
  
  // Extraemos y limpiamos el número dinámico de la configuración global
  const finalWaNumber = contact?.whatsapp?.replace(/\D/g, '') || "525520894849";

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `¡Hola Alan! Me interesa apartar mi lugar para el curso de *Cirugía Guiada en Nogales* (6 y 7 de Mayo).

Mis datos son:
👤 *Nombre:* ${nombre}
📱 *Teléfono:* ${telefono}
📧 *Correo:* ${correo}
🦷 *Especialidad:* ${especialidad || "No especificada"}

Por favor bríndame información sobre los métodos de pago. 🙏`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${finalWaNumber}?text=${encoded}`, "_blank");
  };

  return (
    // CAMBIO: Fondo Hueso ultra limpio (#F9F9F9)
    <section id="inscripcion" className="py-24 bg-[#F9F9F9] relative overflow-hidden">
      
      {/* Background glow sutil dorado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-[#B58D53]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Header con SectionTitle */}
        <SectionTitle 
          accent="Paso 1 de 1"
          title="Reserva tu lugar hoy"
          subtitle="Llena el formulario y en segundos abrirás WhatsApp con tu información precargada. Alan, nuestro coordinador, confirmará tu lugar."
          centered
          className="mb-8"
        />

        {/* Urgency banner B2B Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-white px-6 py-4 mb-10 shadow-sm max-w-2xl mx-auto">
          <span className="relative flex h-3 w-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
          </span>
          <p className="text-gray-700 font-medium text-sm sm:text-base text-center">
            <strong className="text-red-600 font-bold">⚠️ Atención:</strong> Solo nos quedan 6 lugares disponibles.
          </p>
        </div>

        {/* Form card: Estilo documento corporativo */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-bold text-[#2A3B47] mb-2 uppercase tracking-wider">
                  Nombre completo *
                </label>
                <input
                  id="form-nombre"
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Dr. / Dra."
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-[#2A3B47] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B58D53] focus:border-[#B58D53] transition-all font-medium"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-bold text-[#2A3B47] mb-2 uppercase tracking-wider">
                  WhatsApp / Teléfono *
                </label>
                <input
                  id="form-telefono"
                  type="tel"
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="+52 000 000 0000"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-[#2A3B47] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B58D53] focus:border-[#B58D53] transition-all font-medium"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Correo */}
              <div>
                <label className="block text-sm font-bold text-[#2A3B47] mb-2 uppercase tracking-wider">
                  Correo electrónico *
                </label>
                <input
                  id="form-correo"
                  type="email"
                  required
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="doctor@clinica.com"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-[#2A3B47] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B58D53] focus:border-[#B58D53] transition-all font-medium"
                />
              </div>

              {/* Especialidad */}
              <div>
                <label className="block text-sm font-bold text-[#2A3B47] mb-2 uppercase tracking-wider">
                  Especialidad
                </label>
                <input
                  id="form-especialidad"
                  type="text"
                  value={especialidad}
                  onChange={(e) => setEspecialidad(e.target.value)}
                  placeholder="Ej. Implantología"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-[#2A3B47] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B58D53] focus:border-[#B58D53] transition-all font-medium"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-4">
              <button
                id="form-submit"
                type="submit"
                className="group w-full relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-bold text-lg text-white bg-[#B58D53] hover:bg-[#9A7642] shadow-xl shadow-[#B58D53]/20 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Enviar mis datos por WhatsApp
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-center text-gray-400 text-xs mt-4">
                Tus datos están protegidos. Solo usaremos tu información para enviarte detalles del curso.
              </p>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
}