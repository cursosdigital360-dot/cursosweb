import { Container } from "../ui/Container";
import { siteConfig } from "../../content/site.config";

export function BenefitsSection() {
  // Ignoramos la lista básica de siteConfig y creamos un Bento Grid estructurado
  return (
    <section className="py-24 md:py-32 bg-[#F9F9F9] relative overflow-hidden">
      
      {/* Fondo sutil tipo blueprint */}
      <div className="absolute inset-0 bg-[radial-gradient(#2A3B47_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>

      <Container className="relative z-10">
        
        {/* Encabezado */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center text-sm font-bold text-[#B58D53] mb-4 tracking-widest uppercase">
            El Ecosistema OD360
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#2A3B47] mb-6 leading-tight">
            No vendemos cursos. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58D53] to-[#8A6733]">
              Entregamos resultados.
            </span>
          </h2>
        </div>

        {/* BENTO GRID ASIMÉTRICO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* Tarjeta 1: Larga Horizontal (Azul Carbono) - Foco en ROI */}
          <div className="md:col-span-2 bg-[#2A3B47] rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-xl shadow-[#2A3B47]/10 hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B58D53]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <svg className="w-10 h-10 text-[#B58D53] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Compra Inteligente</h3>
              </div>
              <p className="text-gray-400 text-lg md:text-xl font-light max-w-md">
                Evita gastar miles de dólares en escáneres o impresoras equivocadas. Te damos la <span className="text-white font-medium">ruta exacta de hardware</span> según tu presupuesto.
              </p>
            </div>
          </div>

          {/* Tarjeta 2: Vertical Alta (Dorado Bronce) - Foco en Soporte */}
          <div className="md:row-span-2 bg-gradient-to-br from-[#B58D53] to-[#9A7642] rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-xl shadow-[#B58D53]/20 hover:-translate-y-1 transition-transform duration-300 text-white flex flex-col">
            <div className="absolute -bottom-10 -right-10 opacity-20">
              <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z"/></svg>
            </div>
            <div className="relative z-10 flex-1 flex flex-col">
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-none tracking-tight">100%<br/>Casos<br/>Reales</h3>
              <p className="text-[#F9F9F9]/90 text-lg font-medium mt-auto leading-relaxed">
                Olvídate de los tipodontos. Aprendes el flujo digital aplicándolo en pacientes reales, con nuestro acompañamiento hombro a hombro en tu clínica.
              </p>
            </div>
          </div>

          {/* Tarjeta 3: Cuadrada Blanca - Foco en Curva de aprendizaje */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#2A3B47]/5 shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center">
            <div className="text-5xl font-black text-[#2A3B47] mb-2 tracking-tighter">3x</div>
            <h3 className="text-xl font-bold text-[#2A3B47] mb-2">Más Rápido</h3>
            <p className="text-gray-500 font-light">Reduce años de prueba y error. Domina el software CAD en semanas, no en meses.</p>
          </div>

          {/* Tarjeta 4: Cuadrada Blanca - Foco en Ecosistema */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#2A3B47]/5 shadow-lg shadow-black/5 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center relative overflow-hidden">
            <div className="w-12 h-12 bg-[#2A3B47]/5 rounded-full flex items-center justify-center mb-4">
               <svg className="w-6 h-6 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
               </svg>
            </div>
            <h3 className="text-xl font-bold text-[#2A3B47] mb-2">Ecosistema Cerrado</h3>
            <p className="text-gray-500 font-light">Acceso a laboratorios, fresadoras y red de proveedores verificados a precios exclusivos.</p>
          </div>

        </div>
      </Container>
    </section>
  );
}