export function CursoParaQuien() {
  const audiencias = [
    {
      title: "Dentistas Generales",
      description:
        "Que quieren dar el salto a la implantología digital con seguridad y respaldo tecnológico.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Implantólogos",
      description:
        "Que ya trabajan implantes y quieren eliminar la incertidumbre clínica con guías quirúrgicas de precisión.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Profesionales Digitales",
      description:
        "Que ya usan software y quieren agregar el flujo de guías quirúrgicas a su arsenal clínico.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const beneficios = [
    {
      title: "Reduce margen de error",
      desc: "La guía hace el trabajo de posicionamiento. Tú ejecutas con certeza.",
    },
    {
      title: "Aumenta la seguridad clínica",
      desc: "Sabe exactamente dónde va cada implante antes de hacer el primer corte.",
    },
    {
      title: "Mejora resultados estéticos",
      desc: "Colocación ideal = restauración predecible = paciente satisfecho.",
    },
    {
      title: "Diferénciate con tecnología",
      desc: "Ofrece algo que pocos odontólogos en tu ciudad pueden ofrecer.",
    },
    {
      title: "Rehabilitación predecible",
      desc: "Menos ajustes post-quirúrgicos, mejor experiencia para el paciente.",
    },
    {
      title: "Resuelve casos complejos",
      desc: "Aborda con confianza los casos que antes rechazabas por riesgo.",
    },
  ];

  return (
    <section
      id="para-quien"
      className="py-24 bg-[#080808] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 60%), radial-gradient(circle at 80% 50%, #D4AF37 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Para quién */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Ideal para
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            ¿Para quién es{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #D4AF37 0%, #F5E27A 100%)",
              }}
            >
              este curso?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-24">
          {audiencias.map((a, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-white/5 bg-[#111] p-7 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-amber-400"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))",
                  border: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                {a.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">✔ {a.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

        {/* Por qué tomar el curso */}
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Razones que importan
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            ¿Por qué tomar{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #D4AF37 0%, #F5E27A 100%)",
              }}
            >
              este curso?
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-white/5 bg-[#111] p-5 hover:border-amber-500/20 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mt-0.5">
                <svg
                  className="w-4 h-4 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{b.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
