 "use client";

import Link from "next/link";

export function CursoHero() {
  const whatsappBase = "https://wa.me/523113761284?text=";

  const handleCTA = () => {
    const msg = encodeURIComponent(
      "Hola, quiero reservar mi lugar en el curso de Cirugía Guiada en Nogales (6 y 7 de Mayo). Por favor bríndame más información."
    );
    window.open(`${whatsappBase}${msg}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-yellow-600/10 blur-[120px] pointer-events-none" />

      {/* Radial glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-900/20 blur-[100px] pointer-events-none" />

      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT — Copy */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            Cupo limitado — Solo 6 lugares
          </div>

          {/* Main headline */}
          <div className="mb-4">
            <p className="text-amber-400/80 font-bold uppercase tracking-[0.3em] text-sm mb-3">
              Curso Presencial · Nogales, Sonora
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">
              CIRUGÍA
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #D4AF37 0%, #F5E27A 40%, #B8860B 100%)",
                }}
              >
                GUIADA
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-slate-300 mb-2 font-light italic">
            De la incertidumbre a la
          </p>
          <p
            className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text mb-8"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #D4AF37 0%, #FDE68A 50%, #D4AF37 100%)",
            }}
          >
            PRECISIÓN
          </p>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
            Aprende paso a paso la planificación en{" "}
            <strong className="text-amber-300">Exoplan</strong>, elaboración de
            guías quirúrgicas 100% funcionales e impresión 3D en un curso
            presencial intensivo.
          </p>

          {/* Date + price chips */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold">6 y 7 de Mayo</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-white">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">10:00 am – 6:00 pm</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-amber-500/20 border border-amber-500/40 px-4 py-2.5 text-amber-300">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold text-lg">$8,000 MXN</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              id="hero-cta-primary"
              onClick={handleCTA}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-black overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-amber-900/40"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #D4AF37 0%, #F5E27A 50%, #B8860B 100%)",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Reservar mi lugar
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            <Link
              href="#temario"
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Ver temario completo
            </Link>
          </div>
        </div>

        {/* RIGHT — Visual card */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-3xl bg-amber-500/20 blur-3xl scale-90" />

            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-[#141414] to-[#0d0d0d] p-8 shadow-2xl">
              {/* Gold accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #D4AF37, #F5E27A, #D4AF37)",
                }}
              />

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-4">
                  <svg
                    className="w-8 h-8 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                  Impartido por
                </p>
                <h3 className="text-white text-xl font-black">
                  Dr. Christopher Chong
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Especialista en Cirugía Guiada
                </p>
              </div>

              <div
                className="rounded-2xl p-px mb-6"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #D4AF37, #B8860B)",
                }}
              >
                <div className="rounded-2xl bg-[#0d0d0d] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm">Inversión</span>
                    <span
                      className="text-2xl font-black text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #D4AF37 0%, #F5E27A 100%)",
                      }}
                    >
                      $8,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm">Fecha</span>
                    <span className="text-white font-semibold">
                      6 y 7 de Mayo
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm">Sede</span>
                    <span className="text-white font-semibold">
                      Nogales, Sonora
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Cupo</span>
                    <span className="text-red-400 font-bold">Solo 6 lugares</span>
                  </div>
                </div>
              </div>

              {/* Urgency */}
              <div className="flex items-center gap-2 justify-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <p className="text-red-400 text-sm font-bold">
                  Quedan muy pocos lugares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#temario"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-amber-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Ver más</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
