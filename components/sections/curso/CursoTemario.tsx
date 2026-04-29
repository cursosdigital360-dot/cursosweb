"use client";

import { SectionTitle } from "../../ui/SectionTitle";

export function CursoTemario() {
  const temas = [
    {
      // Ícono de software/planificación (Vector elegante en lugar de emoji)
      icon: (
        <svg className="w-6 h-6 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      category: "Planificación en Exoplan",
      items: [
        "Análisis clínico y radiográfico del caso",
        "Posicionamiento ideal del implante",
        "Uso estratégico de herramientas del software",
      ],
    },
    {
      // Ícono de precisión/diseño
      icon: (
        <svg className="w-6 h-6 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2-1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      category: "Diseño de Guías Quirúrgicas",
      items: [
        "Principios clave de diseño estructural",
        "Ajuste, estabilidad y precisión en boca",
        "Errores comunes y protocolos para evitarlos",
      ],
    },
    {
      // Ícono de manufactura/impresión
      icon: (
        <svg className="w-6 h-6 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      category: "Manufactura e Impresión 3D",
      items: [
        "Preparación técnica de archivos STL",
        "Materiales recomendados y parámetros",
        "Flujo de trabajo práctico y posprocesado",
      ],
    },
  ];

  return (
    // CAMBIO: Fondo Azul Carbono profundo (#141C21)
    <section id="temario" className="py-24 bg-[#141C21] relative overflow-hidden">
      
      {/* Background decorative (Glow dorado sutil) */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#B58D53]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2A3B47]/30 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section header usando nuestro componente base */}
        <SectionTitle 
          accent="Programa del Curso"
          title="¿Qué aprenderás?"
          subtitle="Un temario estructurado para llevarte de la teoría directamente a la ejecución clínica en dos días intensivos."
          centered
          className="[&>h2]:text-white"
        />

        {/* Tema cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {temas.map((tema, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-[#2A3B47] bg-[#1A242B] p-8 hover:border-[#B58D53]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 flex flex-col"
            >
              {/* Glow interno on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#B58D53]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Number badge & Icon */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#2A3B47]/50 border border-[#B58D53]/20 shadow-inner group-hover:bg-[#B58D53]/10 transition-colors">
                  {tema.icon}
                </div>
                <div>
                  <p className="text-[#B58D53] text-xs font-bold uppercase tracking-widest mb-1">
                    Módulo 0{index + 1}
                  </p>
                  <h3 className="text-[#F9F9F9] font-bold text-lg leading-tight tracking-wide">
                    {tema.category}
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px mb-6 opacity-20 bg-gradient-to-r from-transparent via-[#B58D53] to-transparent w-full" />

              {/* Items list */}
              <ul className="relative z-10 space-y-4 flex-1">
                {tema.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#2A3B47] border border-[#B58D53]/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-inner">
                      <svg className="w-3 h-3 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full-width bottom stat bar (Estilo Dashboard B2B) */}
        <div className="rounded-2xl border border-[#B58D53]/20 bg-[#1A242B] overflow-hidden shadow-xl shadow-black/40">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#2A3B47]">
            {[
              { label: "Horas de formación", value: "16 hrs" },
              { label: "Modalidad", value: "Presencial" },
              { label: "Práctica Clínica", value: "Casos Reales" },
            ].map((stat, i) => (
              <div key={i} className="px-8 py-8 text-center hover:bg-[#2A3B47]/10 transition-colors">
                <p className="text-2xl md:text-3xl font-black text-[#B58D53] mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}