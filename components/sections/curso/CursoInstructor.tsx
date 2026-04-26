export function CursoInstructor() {
  return (
    <section
      id="instructor"
      className="py-24 bg-[#080808] relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-amber-900/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Tu instructor
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Aprende de quien{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #D4AF37 0%, #F5E27A 100%)",
              }}
            >
              lo vive en clínica
            </span>
          </h2>
        </div>

        <div
          className="rounded-3xl p-px"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(212,175,55,0.4), rgba(212,175,55,0.1), rgba(212,175,55,0.4))",
          }}
        >
          <div className="rounded-3xl bg-[#0f0f0f] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Avatar / visual side */}
              <div
                className="md:w-5/12 relative flex items-center justify-center p-12"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 100%)",
                }}
              >
                {/* Avatar placeholder — premium monogram */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-2xl scale-110"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #D4AF37, #B8860B)",
                      opacity: 0.3,
                    }}
                  />
                  <div
                    className="relative w-40 h-40 rounded-full flex items-center justify-center text-5xl font-black text-black shadow-2xl"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #D4AF37 0%, #F5E27A 50%, #B8860B 100%)",
                    }}
                  >
                    CC
                  </div>
                </div>

                {/* Decorative corner lines */}
                <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-amber-500/30 rounded-tl-2xl" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-amber-500/30 rounded-br-2xl" />
              </div>

              {/* Info side */}
              <div className="md:w-7/12 p-8 md:p-10">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                  Especialista en Implantología Digital
                </p>
                <h3 className="text-3xl font-black text-white mb-1">
                  Dr. Christopher Chong
                </h3>
                <div className="h-px bg-amber-500/20 my-5" />

                <p className="text-slate-300 leading-relaxed mb-6">
                  Especialista en cirugía guiada con dominio total de{" "}
                  <strong className="text-amber-300">Exoplan</strong> y flujos
                  de trabajo 3D. Ha formado a decenas de odontólogos en México
                  llevándolos de la odontología analógica a la precisión digital
                  con resultados clínicos reales y verificables.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "+200", label: "Guías diseñadas" },
                    { value: "+5 años", label: "Enseñando flujo digital" },
                    { value: "100%", label: "Casos con guía" },
                    { value: "Nogales", label: "Sonora · México" },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-xl bg-white/5 border border-white/5 p-4">
                      <p
                        className="text-xl font-black text-transparent bg-clip-text"
                        style={{
                          backgroundImage: "linear-gradient(135deg, #D4AF37, #F5E27A)",
                        }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
