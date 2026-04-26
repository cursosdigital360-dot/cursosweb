export function CursoTemario() {
  const temas = [
    {
      icon: "🖥️",
      category: "Planificación Digital",
      items: [
        "Planificación en Exoplan",
        "Análisis del caso",
        "Posicionamiento ideal del implante",
        "Uso estratégico de software",
      ],
    },
    {
      icon: "🦷",
      category: "Diseño de Guías Quirúrgicas",
      items: [
        "Principios clave de diseño",
        "Ajuste, estabilidad y precisión",
        "Errores comunes y cómo evitarlos",
        "Diseño de guías quirúrgicas",
      ],
    },
    {
      icon: "🖨️",
      category: "Impresión 3D",
      items: [
        "Preparación de archivos",
        "Materiales recomendados",
        "Flujo de trabajo práctico",
        "Control de calidad en impresión",
      ],
    },
  ];

  return (
    <section
      id="temario"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background decorative */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-900/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-900/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Programa del Curso
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            ¿Qué{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #D4AF37 0%, #F5E27A 100%)",
              }}
            >
              aprenderás?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un temario diseñado para llevarte de la teoría directamente a la
            ejecución clínica en dos días intensivos.
          </p>
        </div>

        {/* Tema cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {temas.map((tema, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-white/5 bg-gradient-to-br from-[#141414] to-[#0f0f0f] p-7 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20 hover:-translate-y-1"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500" />

              {/* Number badge */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  {tema.icon}
                </div>
                <div>
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Módulo {index + 1}
                  </p>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {tema.category}
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-6 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                }}
              />

              {/* Items list */}
              <ul className="relative z-10 space-y-3">
                {tema.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-2.5 h-2.5 text-amber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full-width bottom stat bar */}
        <div
          className="rounded-2xl p-px"
          style={{
            backgroundImage: "linear-gradient(135deg, #D4AF37, #B8860B)",
          }}
        >
          <div className="rounded-2xl bg-[#0f0f0f] grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
            {[
              { label: "Horas de formación", value: "16 hrs" },
              { label: "Modalidad", value: "100% Presencial" },
              { label: "Práctica con casos reales", value: "Incluida" },
            ].map((stat, i) => (
              <div key={i} className="px-8 py-6 text-center">
                <p
                  className="text-2xl font-black text-transparent bg-clip-text mb-1"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #D4AF37, #F5E27A)",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
