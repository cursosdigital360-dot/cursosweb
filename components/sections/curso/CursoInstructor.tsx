import Image from "next/image";
import { SectionTitle } from "../../ui/SectionTitle";

export function CursoInstructor() {
  return (
    // CAMBIO: Volvemos al Carbono ultra oscuro (#0D1317) para máximo dramatismo después de la sección blanca
    <section id="instructor" className="py-24 bg-[#0D1317] relative overflow-hidden">
      
      {/* Background radial glow sutil */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#B58D53]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-[#2A3B47]/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        <SectionTitle 
          accent="Tu Instructor"
          title="Aprende de quien lo vive en clínica"
          centered
          className="[&>h2]:text-white mb-16"
        />

        <div className="rounded-[2rem] p-px bg-gradient-to-br from-[#2A3B47] via-[#B58D53]/30 to-[#2A3B47]">
          <div className="rounded-[2rem] bg-[#1A242B] overflow-hidden shadow-2xl shadow-black">
            <div className="flex flex-col md:flex-row">
              
              {/* LADO VISUAL: Foto Clínica Visceral */}
              <div className="md:w-5/12 relative min-h-[300px] md:min-h-full bg-[#141C21]">
                {/* Overlay oscuro sutil para que no deslumbre */}
                <div className="absolute inset-0 bg-black/10 z-10 mix-blend-multiply" />
                
                <Image 
                  src="/images/caso-clinico-chong.webp"
                  alt="Caso clínico de cirugía guiada por Dr. Christopher Chong"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />

                {/* Decorative corner lines (Estilo mira de precisión) */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#B58D53] z-20" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#B58D53] z-20" />
              </div>

              {/* LADO DE INFORMACIÓN */}
              <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-[#B58D53] text-xs font-bold uppercase tracking-widest mb-2">
                  Especialista en Implantología Digital
                </p>
                <h3 className="text-3xl md:text-4xl font-black text-[#F9F9F9] mb-1 tracking-tight">
                  Dr. Christopher Chong
                </h3>
                
                <div className="h-px bg-gradient-to-r from-[#B58D53]/50 to-transparent w-full my-6" />

                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  Especialista en cirugía guiada con dominio total de <strong className="text-white font-medium">Exoplan</strong> y flujos de trabajo 3D. Ha formado a decenas de odontólogos en México llevándolos de la odontología analógica a la precisión digital con resultados clínicos reales y verificables.
                </p>

                {/* Stats Grid B2B */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "+200", label: "Guías diseñadas" },
                    { value: "+5 años", label: "Enseñando flujo" },
                    { value: "100%", label: "Precisión clínica" },
                    { value: "Nogales", label: "Sonora · México" },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-xl bg-[#141C21] border border-[#2A3B47] p-4 hover:border-[#B58D53]/30 transition-colors">
                      <p className="text-2xl font-black text-[#B58D53] tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-gray-500 text-xs font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
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