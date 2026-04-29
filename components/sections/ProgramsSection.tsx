import { Container } from "../ui/Container";
// Ajusta SectionTitle si tiene estilos fijos, o ignóralo si acepta heredar color
import { SectionTitle } from "../ui/SectionTitle"; 
import { Button } from "../ui/Button";
import { siteConfig } from "../../content/site.config";
import Link from "next/link";

export function ProgramsSection() {
  const { programs, contact } = siteConfig;

  // Fallbacks estratégicos B2B para Odontología Digital 360
  const defaultPrograms = [
    {
      name: "Mentoría 1:1 de Implementación",
      description: "Consultoría privada para auditar tu clínica y armar tu lista de compras exacta de hardware y software sin desperdiciar dinero.",
      features: [
        "Auditoría de equipos actuales",
        "Ruta de compras optimizada",
        "Setup de software a distancia",
        "Soporte por 30 días"
      ]
    },
    {
      name: "Diplomado en Flujo Digital 360",
      description: "El programa más completo. Aprende escaneo, diseño CAD e impresión 3D trabajando directamente sobre casos reales.",
      label: "Programa Estrella",
      features: [
        "Capacitación 100% práctica",
        "Módulos de escaneo intraoral",
        "Diseño de guías y provisionales",
        "Acompañamiento en tu primer caso clínico"
      ]
    }
  ];

  const itemsToRender = programs?.items?.length ? programs.items : defaultPrograms;

  return (
    // CAMBIO: Fondo Carbono Profundo (#1A242B) para alto contraste con la sección anterior
    <section className="py-24 md:py-32 bg-[#1A242B] relative overflow-hidden">
      
      {/* Resplandores de fondo para no dejarlo plano */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B58D53]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <Container className="relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#F9F9F9] mb-6 tracking-tight">
             {programs?.title || "Nuestros Programas"}
          </h2>
          <p className="text-lg text-gray-400 font-light">
             Elige el nivel de acompañamiento que necesitas para llevar tu práctica al siguiente nivel.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {itemsToRender.map((program, index) => {
            const isFlagship = program.label !== undefined;
            return (
              <div 
                key={index}
                // Lógica de estilos: Si es Flagship brilla en dorado, si no, se mantiene en azul carbono
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col items-start transition-all duration-500 group ${
                  isFlagship 
                    ? "bg-[#2A3B47] text-white shadow-2xl shadow-[#B58D53]/10 border border-[#B58D53]/50 hover:border-[#B58D53] hover:-translate-y-2" 
                    : "bg-[#141C21] text-white shadow-xl shadow-black/30 border border-[#2A3B47] hover:border-[#B58D53]/30 hover:-translate-y-1"
                }`}
              >
                {/* Etiqueta del programa estrella */}
                {isFlagship && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="inline-block bg-[#B58D53] text-[#141C21] text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-[#B58D53]/20">
                      {program.label}
                    </span>
                  </div>
                )}
                
                {/* Título del programa */}
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${isFlagship ? "text-[#F9F9F9]" : "text-gray-200"}`}>
                  {program.name}
                </h3>
                
                {/* Descripción */}
                <p className={`mb-8 flex-1 leading-relaxed font-light ${isFlagship ? "text-gray-300" : "text-gray-400"}`}>
                  {program.description}
                </p>
                
                {/* Lista de beneficios */}
                <ul className="w-full space-y-4 mb-10">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg 
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isFlagship ? "text-[#B58D53]" : "text-[#2A3B47]"}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`font-medium ${isFlagship ? "text-gray-200" : "text-gray-400 group-hover:text-gray-300 transition-colors"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Botones de acción */}
                <Link href={contact?.whatsappUrl || "https://wa.me/523113761284"} target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                  <Button 
                    size="lg"
                    className={`w-full font-bold transition-all ${
                      isFlagship 
                        ? "bg-[#B58D53] hover:bg-[#9A7642] !text-white border-none shadow-lg shadow-[#B58D53]/20" 
                        : "bg-transparent hover:bg-[#2A3B47]/30 !text-[#F9F9F9] border border-[#2A3B47] hover:border-[#B58D53]/50"
                    }`}
                  >
                    {isFlagship ? "Aplicar al Diplomado" : "Solicitar Mentoría"}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}