"use client";

import { SectionTitle } from "../../ui/SectionTitle";

export function CursoParaQuien() {
  const audiencias = [
    {
      title: "Dentistas Generales",
      description:
        "Que quieren dar el salto a la implantología digital con seguridad y respaldo tecnológico, minimizando el riesgo operatorio.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Implantólogos",
      description:
        "Que ya trabajan implantes y necesitan eliminar la incertidumbre clínica mediante guías quirúrgicas de alta precisión.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Profesionales Digitales",
      description:
        "Que ya usan software CAD pero quieren agregar la fabricación in-house de guías quirúrgicas a su arsenal clínico.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const beneficios = [
    {
      title: "Reduce margen de error",
      desc: "La guía hace el trabajo de posicionamiento. Tú ejecutas con certeza milimétrica.",
    },
    {
      title: "Aumenta la seguridad clínica",
      desc: "Sabe exactamente dónde va cada implante antes de hacer el primer corte en quirófano.",
    },
    {
      title: "Mejora resultados estéticos",
      desc: "Colocación ideal del implante = restauración predecible = paciente satisfecho.",
    },
    {
      title: "Diferénciate con tecnología",
      desc: "Ofrece un estándar de cuidado que muy pocos odontólogos en tu ciudad pueden ofrecer.",
    },
    {
      title: "Rehabilitación predecible",
      desc: "Evita dolores de cabeza y ajustes post-quirúrgicos al tener la prótesis contemplada desde el inicio.",
    },
    {
      title: "Resuelve casos complejos",
      desc: "Aborda con total confianza anatómica los casos que antes rechazabas por riesgo.",
    },
  ];

  return (
    // CAMBIO: Fondo oscuro con nuestro Azul Carbono (#0D1317) para alternar con el #141C21 del temario
    <section id="para-quien" className="py-24 bg-[#0D1317] relative overflow-hidden">
      
      {/* Background (Glow minimalista dorado) */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #B58D53 0%, transparent 50%), radial-gradient(circle at 80% 50%, #B58D53 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Sección: Para quién */}
        <SectionTitle 
          accent="Público Objetivo"
          title="¿Para quién es este curso?"
          centered
          className="[&>h2]:text-white mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-28">
          {audiencias.map((a, i) => (
            <div
              key={i}
              className="group rounded-[2rem] border border-[#2A3B47] bg-[#1A242B] p-8 hover:border-[#B58D53]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[#B58D53] bg-[#2A3B47]/50 border border-[#B58D53]/20 shadow-inner group-hover:bg-[#B58D53]/10 transition-colors">
                {a.icon}
              </div>
              <h3 className="text-[#F9F9F9] font-bold text-xl mb-3 flex items-center gap-2 tracking-tight">
                 {a.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

        {/* Sección: Por qué tomar el curso */}
        <SectionTitle 
          accent="Razones que Importan"
          title="¿Por qué tomar este curso?"
          centered
          className="[&>h2]:text-white mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-[#2A3B47] bg-[#141C21] p-6 hover:border-[#B58D53]/30 transition-all duration-300 hover:shadow-md hover:shadow-[#B58D53]/5 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#2A3B47]/50 border border-[#B58D53]/20 flex items-center justify-center mt-0.5 group-hover:bg-[#B58D53]/10 transition-colors shadow-inner">
                <svg className="w-5 h-5 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#F9F9F9] font-bold text-sm mb-1.5 tracking-wide">{b.title}</h4>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}