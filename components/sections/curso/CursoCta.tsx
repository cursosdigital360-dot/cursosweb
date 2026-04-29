"use client";

import { siteConfig } from "../../../content/site.config";

export function CursoCta() {
  const { contact } = siteConfig;
  
  // Extraemos y limpiamos el número dinámico de la configuración global
  const finalWaNumber = contact?.whatsapp?.replace(/\D/g, '') || "525520894849";

  const handleCTA = () => {
    const msg = encodeURIComponent(
      "Hola Alan, quiero asegurar mi lugar en el curso de Cirugía Guiada en Nogales (6 y 7 de Mayo). ¿Me pasas los datos para el depósito de apartado?"
    );
    window.open(`https://wa.me/${finalWaNumber}?text=${msg}`, "_blank");
  };

  return (
    // CAMBIO: Fondo Azul Carbono Profundo (#141C21)
    <section className="py-24 bg-[#141C21] relative overflow-hidden">
      
      {/* Background Cinematográfico */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid de fondo B2B */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(181,141,83,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(181,141,83,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Glow Central Dorado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#B58D53]/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Spots left indicator (Escasez Real) */}
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-red-400 text-sm font-bold mb-8 shadow-lg shadow-red-900/20 uppercase tracking-widest">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          ¡Solo 6 lugares disponibles!
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tighter">
          Tu próximo nivel
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58D53] to-[#D4AF37]">
            empieza el 6 de Mayo
          </span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          No te quedes con la duda. No pierdas otro caso por falta de precisión.
          Reserva hoy tu lugar y lleva tu cirugía al estándar digital.
        </p>

        {/* Price + date cards (Estilo Dashboard de Alta Conversión) */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {[
            { label: "Inversión", value: "$8,000 MXN" },
            { label: "Fecha", value: "6 y 7 de Mayo" },
            { label: "Horario", value: "10 am – 6 pm" },
            { label: "Sede", value: "Nogales, Sonora" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#2A3B47] bg-[#1A242B] px-8 py-5 shadow-inner min-w-[140px]"
            >
              <p className="text-[#B58D53] text-xs font-bold uppercase tracking-widest mb-1.5">
                {item.label}
              </p>
              <p className="text-[#F9F9F9] font-black text-xl">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Main CTA button */}
        <button
          id="final-cta"
          onClick={handleCTA}
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white bg-[#B58D53] hover:bg-[#9A7642] shadow-2xl shadow-[#B58D53]/30 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          Asegurar mi lugar ahora
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mt-2">
          El primer depósito de apartado asegura tu lugar.
        </p>
      </div>
    </section>
  );
}