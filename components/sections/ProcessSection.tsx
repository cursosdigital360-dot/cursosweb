import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle"; 
import { siteConfig } from "../../content/site.config";

export function ProcessSection() {
  const { process } = siteConfig;

  // Fallbacks estratégicos actualizados (Claros, directos y de 4 pasos)
  const defaultSteps = [
    {
      step: "01",
      name: "Diagnóstico y Setup",
      description: "Analizamos tu clínica actual. Entendemos qué equipos tienes, tu flujo de pacientes y diseñamos la ruta exacta de implementación."
    },
    {
      step: "02",
      name: "Capacitación Clínica Activa",
      description: "Cero relleno teórico. Aprendes el flujo digital completo trabajando sobre casos reales para dominar el software al 100%."
    },
    {
      step: "03",
      name: "Guía de Compra Inteligente",
      description: "Te decimos exactamente qué escáner o impresora comprar según tu presupuesto. Evitas gastar dinero en equipos que no necesitas."
    },
    {
      step: "04",
      name: "Acompañamiento en Clínica",
      description: "No te dejamos solo con las máquinas. Te acompañamos en tus primeros casos reales para asegurar que el flujo digital sea un éxito."
    }
  ];

  const stepsToRender = process?.steps?.length ? process.steps : defaultSteps;

  return (
    // Fondo claro (#F9F9F9) para mantener el zig-zag del embudo
    <section id="como-funciona" className="py-24 md:py-32 bg-[#F9F9F9] relative overflow-hidden">
      
      {/* Fondo Creativo: Blueprint / Grid Tecnológico en Azul Carbono muy tenue */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A3B470A_1px,transparent_1px),linear-gradient(to_bottom,#2A3B470A_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Máscara radial para que el grid se desvanezca en los bordes y se vea elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F9] via-transparent to-[#F9F9F9]"></div>

      <Container className="relative z-10">
        
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
           <div className="inline-flex items-center text-sm font-bold text-[#B58D53] mb-4 tracking-widest uppercase bg-[#B58D53]/10 px-4 py-1.5 rounded-full border border-[#B58D53]/20">
             El Flujo Digital
           </div>
           <h2 className="text-4xl md:text-5xl font-extrabold text-[#2A3B47] mb-6 tracking-tight">
             {process?.title || "Tu ruta hacia la transformación digital"}
           </h2>
           <p className="text-xl text-gray-600 font-light leading-relaxed">
             Un método de 4 pasos diseñado para que implementes tecnología en tu clínica de forma predecible, segura y sin frustraciones.
           </p>
        </div>
        
        {/* Circuito de Pasos */}
        <div className="max-w-4xl mx-auto">
          {stepsToRender.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-12 mb-16 last:mb-0 group cursor-default">
              
              {/* Línea conectora (Circuito) */}
              {index !== stepsToRender.length - 1 && (
                <div className="absolute left-[39px] md:left-[55px] top-24 bottom-[-80px] w-[2px] md:w-[3px] bg-gradient-to-b from-[#B58D53]/40 via-[#2A3B47]/10 to-transparent group-hover:from-[#B58D53] group-hover:via-[#B58D53]/50 transition-all duration-500"></div>
              )}
              
              {/* Nodo (Burbuja de Número) */}
              <div className="relative z-10 flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl bg-white border border-[#2A3B47]/10 flex items-center justify-center shadow-lg group-hover:shadow-[#B58D53]/20 group-hover:border-[#B58D53] group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Fondo sutil que aparece en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B58D53]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="text-3xl md:text-5xl font-black text-[#2A3B47] group-hover:text-[#B58D53] transition-colors duration-300 relative z-10 font-mono tracking-tighter">
                  {step.step}
                </span>
              </div>
              
              {/* Contenido de la tarjeta del paso */}
              <div className="flex-1 pt-2 md:pt-4 pb-6 md:pl-0 pl-4 border-l-2 md:border-l-0 border-[#2A3B47]/10 ml-10 md:ml-0 group-hover:border-[#B58D53]/50 transition-colors duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2A3B47] mb-4 group-hover:text-[#B58D53] transition-colors duration-300 tracking-tight">
                  {step.name}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}