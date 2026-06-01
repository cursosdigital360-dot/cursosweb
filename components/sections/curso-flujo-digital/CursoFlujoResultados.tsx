import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoResultados() {
  const { transformation } = cursoFlujoDigitalConfig;

  // Fallbacks robustos alineados con las expectativas de transformación comercial
  const title = transformation?.outcomesTitle || "Al finalizar el curso podrás aplicar un flujo digital más claro en tu clínica";
  const outcomes = transformation?.outcomes || [
    "Escanear pacientes.",
    "Diseñar en Exocad.",
    "Imprimir en 3D.",
    "Maquillar provisionales impresos en resina.",
    "Entender el flujo completo entre escaneo, diseño, impresión y terminado.",
    "Comunicarte mejor con tu laboratorio dental.",
    "Tener mayor claridad para integrar tecnología digital en tu práctica odontológica."
  ];
  const closingNote = transformation?.closingNote || "Este curso no busca saturarte de teoría. Está diseñado para que entiendas el flujo completo practicando paso a paso.";

  return (
    <section className="w-full bg-[#0B1E35]/40 py-16 lg:py-24 border-b border-[#0B1E35] backdrop-blur-sm relative">
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#3CCBFF]/5 blur-[90px] pointer-events-none"></div>

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Bloque Izquierdo: Promesa de Retorno Técnico */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex w-fit items-center rounded-full bg-[#3CCBFF]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#3CCBFF] uppercase mb-4 border border-[#3CCBFF]/20">
                Perfil de Egreso
              </div>
              <h3 className="text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl leading-tight">
                {title}
              </h3>
            </div>

            {/* Nota Destacada de Cierre Práctico */}
            <div className="mt-8 lg:mt-12 rounded-xl border border-l-2 border-[#0B1E35] border-l-[#3CCBFF] bg-[#07111F]/60 p-5">
              <span className="block text-[10px] font-black tracking-wider text-[#3CCBFF] uppercase mb-1">
                Nota Importante
              </span>
              <p className="text-xs font-medium leading-relaxed text-[#8A94A6]">
                {closingNote}
              </p>
            </div>
          </div>

          {/* Bloque Derecho: Checklist Estilo Técnico Corporativo */}
          <div className="lg:col-span-7 rounded-2xl border border-[#0B1E35] bg-[#07111F]/40 p-6 sm:p-8 backdrop-blur-md">
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div 
                  key={index} 
                  className="flex items-start border-b border-[#0B1E35]/60 pb-3 last:border-0 last:pb-0"
                >
                  {/* Bullet Geométrico Cian */}
                  <div className="mr-4 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#3CCBFF]/10 text-[9px] font-bold text-[#3CCBFF]">
                    →
                  </div>
                  <p className="text-sm font-medium leading-normal text-[#F5F7FA] tracking-wide">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}