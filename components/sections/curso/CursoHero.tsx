"use client";

import Link from "next/link";
import { siteConfig } from "../../../content/site.config";

export function CursoHero() {
  const { contact } = siteConfig;
  
  // URL de WhatsApp específica para la conversión del curso
  const finalWaNumber = contact?.whatsapp?.replace(/\D/g, '') || "525520894849";
  const nogalesWaMsg = encodeURIComponent("Hola Alan, quiero reservar mi lugar en el curso de Cirugía Guiada en Nogales (6 y 7 de Mayo). Por favor bríndame más información.");
  const nogalesWaUrl = `https://wa.me/${finalWaNumber}?text=${nogalesWaMsg}`;

  const handleCTA = () => {
    window.open(nogalesWaUrl, "_blank");
  };

  return (
    // CAMBIO: Fondo Azul Carbono en lugar de Negro Puro
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#141C21]">
      
      {/* 1. IMAGEN DE FONDO CINEMÁTICA */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: "url('/images/hero-nogales.webp')" }}
      />

      {/* 2. OVERLAYS (Gradientes para asegurar legibilidad) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#141C21] via-[#141C21]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#141C21] via-transparent to-[#141C21]/60" />

      {/* Radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#B58D53]/10 blur-[120px] pointer-events-none" />

      {/* Radial glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2A3B47]/40 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT — Copy */}
        <div className="flex-1 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B58D53]/40 bg-[#B58D53]/10 px-4 py-1.5 text-sm font-bold text-[#B58D53] mb-8 backdrop-blur-sm shadow-lg shadow-[#B58D53]/5 uppercase tracking-widest">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B58D53] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B58D53]" />
            </span>
            Cupo limitado — Solo 6 lugares
          </div>

          {/* Main headline */}
          <div className="mb-4">
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm mb-3">
              Curso Presencial · Nogales, Sonora
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-black text-white leading-[1.05] tracking-tighter drop-shadow-lg">
              CIRUGÍA
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #B58D53 0%, #D4AF37 50%, #9A7642 100%)",
                }}
              >
                GUIADA
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 mb-1 font-light italic tracking-wide">
            De la incertidumbre a la
          </p>
          <p
            className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text mb-8 tracking-wide drop-shadow-md"
            style={{
              backgroundImage: "linear-gradient(135deg, #B58D53 0%, #D4AF37 100%)",
            }}
          >
            PRECISIÓN
          </p>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-light mx-auto lg:mx-0">
            Aprende paso a paso la planificación en <strong className="text-[#F9F9F9]">Exoplan</strong>, elaboración de guías quirúrgicas 100% funcionales e impresión 3D en un curso presencial intensivo.
          </p>

          {/* Date + price chips */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            <div className="flex items-center gap-2 rounded-xl bg-[#2A3B47]/30 border border-[#2A3B47] px-4 py-2.5 text-white shadow-inner">
              <svg className="w-5 h-5 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-sm">6 y 7 de Mayo</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-[#2A3B47]/30 border border-[#2A3B47] px-4 py-2.5 text-white shadow-inner">
              <svg className="w-5 h-5 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-sm">10 am – 6 pm</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-[#B58D53]/10 border border-[#B58D53]/30 px-5 py-2.5 text-[#B58D53] shadow-md shadow-[#B58D53]/5">
              <span className="font-black text-lg tracking-tight">$8,000 MXN</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              id="hero-cta-primary"
              onClick={handleCTA}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-[#B58D53]/20 bg-[#B58D53] hover:bg-[#9A7642]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Reservar mi lugar
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <Link
              href="#temario"
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-gray-300 border border-[#2A3B47] hover:bg-[#2A3B47]/30 hover:text-white transition-all duration-300"
            >
              Ver temario completo
            </Link>
          </div>
        </div>

        {/* RIGHT — Visual card */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            
            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-[2rem] bg-[#B58D53]/10 blur-3xl scale-90" />

            {/* Card */}
            <div className="relative rounded-[2rem] overflow-hidden border border-[#B58D53]/30 bg-[#1A242B] p-8 shadow-2xl shadow-black/80">
              
              {/* Gold accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2A3B47] via-[#B58D53] to-[#2A3B47]" />

              <div className="text-center mb-8 mt-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2A3B47] border border-[#B58D53]/20 mb-4 shadow-inner">
                  <svg className="w-8 h-8 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-[#B58D53] text-xs font-bold uppercase tracking-widest mb-1">
                  Impartido por
                </p>
                <h3 className="text-[#F9F9F9] text-2xl font-black tracking-tight">
                  Dr. Christopher Chong
                </h3>
                <p className="text-gray-400 text-sm mt-1 font-light">
                  Especialista en Cirugía Guiada
                </p>
              </div>

              {/* Data Box */}
              <div className="rounded-2xl bg-[#141C21] p-5 border border-[#2A3B47] mb-6 shadow-inner space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2A3B47]/50">
                    <span className="text-gray-500 text-sm font-medium">Inversión</span>
                    <span className="text-2xl font-black text-[#B58D53]">$8,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-medium">Sede</span>
                    <span className="text-gray-200 font-semibold text-sm">Nogales, Sonora</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#2A3B47]/50">
                    <span className="text-gray-500 text-sm font-medium">Cupo</span>
                    <span className="text-red-400 font-bold text-sm bg-red-400/10 px-2 py-0.5 rounded-md">Solo 6 lugares</span>
                  </div>
              </div>

              {/* Urgency */}
              <div className="flex items-center gap-2 justify-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                  Quedan muy pocos lugares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8 mt-auto">
        <a href="#temario" className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#B58D53] transition-colors group">
          <span className="text-[10px] font-bold uppercase tracking-widest">Ver temario</span>
          <svg className="w-5 h-5 animate-bounce group-hover:text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}