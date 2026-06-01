import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoTrust() {
  const { trustBlock } = cursoFlujoDigitalConfig;

  // Fallbacks seguros en caso de inconsistencia menor de tipado en la fuente de verdad
  const title = trustBlock?.title || "Aprende con práctica real, no solo viendo diapositivas";
  const text = trustBlock?.text || "Este curso está diseñado para odontólogos que quieren entender y aplicar el flujo digital dentro de su clínica, desde el escaneo hasta el diseño, impresión y terminado de provisionales.";
  const signals = trustBlock?.signals || [
    "Instructor: Dr. Alan Castillo",
    "Práctica 1 a 1",
    "Equipos reales de escaneo e impresión",
    "Software Exocad",
    "Resinas biocompatibles",
    "Enfoque clínico y práctico",
    "Cupo reducido"
  ];

  return (
    <section className="w-full bg-[#07111F] py-16 lg:py-24 border-b border-[#0B1E35]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Bloque Izquierdo: Mensaje de Impacto Antiteoría */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full bg-[#2D7FF9]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#3CCBFF] uppercase mb-4 border border-[#2D7FF9]/20">
              Metodología Inmersiva
            </div>
            <h3 className="text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl leading-tight">
              {title}
            </h3>
            <p className="mt-4 text-sm font-normal leading-relaxed text-[#8A94A6]">
              {text}
            </p>
          </div>

          {/* Bloque Derecho: Grid Técnico de Señales de Confianza */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {signals.map((signal, index) => (
                <div 
                  key={index} 
                  className="flex items-start rounded-xl border border-[#0B1E35] bg-[#0B1E35]/30 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#2D7FF9]/30"
                >
                  {/* Indicador geométrico minimalista en lugar de iconos externos */}
                  <div className="mr-4 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#2D7FF9]/15 border border-[#2D7FF9]/30 text-[10px] text-[#3CCBFF] font-bold">
                    ✓
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#F5F7FA] tracking-wide">
                      {signal}
                    </span>
                    <span className="text-[11px] text-[#8A94A6] mt-0.5 font-medium">
                      Verificado en protocolo clínico
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}