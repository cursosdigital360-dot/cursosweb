export function CursoRequisitos() {
  const indispensables = [
    {
      icon: "💻",
      title: "Laptop Gamer",
      detail:
        "Windows 10/11 (64-bit) · Intel i5 / AMD Ryzen 5+ · 16 GB RAM mínimo (32 GB recomendado) · GPU NVIDIA GTX 1060 / RTX 3060+ · SSD NVMe 256 GB+",
    },
    {
      icon: "🖥️",
      title: "Software Exoplan",
      detail: "Licencia activa de Exoplan instalada y funcionando en tu equipo antes del curso.",
    },
    {
      icon: "📁",
      title: "2 Casos Propios",
      detail:
        "Traer 2 casos con tomografía (CBCT) y escaneo STL de cada paciente listos para trabajar.",
    },
  ];

  const opcionales = [
    {
      icon: "🖨️",
      title: "Impresora 3D",
      detail: "Si cuentas con ella, podrás imprimir tus guías durante el taller.",
    },
  ];

  return (
    <section
      id="requisitos"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-amber-900/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Antes de llegar
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Requisitos del{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #D4AF37 0%, #F5E27A 100%)",
              }}
            >
              Curso
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Para aprovechar al máximo el tiempo presencial, necesitas llegar con esto listo.
          </p>
        </div>

        {/* Indispensables */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/5" />
            <p className="text-white font-bold uppercase tracking-widest text-xs px-4">
              Indispensable
            </p>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="space-y-4">
            {indispensables.map((req, i) => (
              <div
                key={i}
                className="flex gap-5 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-950/20 to-transparent p-5 hover:border-amber-500/40 transition-colors duration-300"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  {req.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{req.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{req.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opcionales */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/5" />
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs px-4">
              Opcional
            </p>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="space-y-4">
            {opcionales.map((req, i) => (
              <div
                key={i}
                className="flex gap-5 rounded-2xl border border-white/5 bg-[#111] p-5 hover:border-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-white/5 border border-white/10">
                  {req.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{req.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{req.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
