import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoParaQuien() {
  const { targetAudience } = cursoFlujoDigitalConfig;

  // Fallback seguro de listas para calificar leads de pauta publicitaria
  const forWhomItems = targetAudience?.forWhom?.items || [
    "Eres odontólogo y quieres entrar al flujo digital.",
    "Ya tienes interés en escáner intraoral, Exocad o impresión 3D.",
    "Quieres dejar de depender completamente de procesos tradicionales.",
    "Buscas mejorar la comunicación con tu laboratorio dental.",
    "Quieres entender cómo escanear, diseñar e imprimir en un flujo práctico.",
    "Quieres diferenciar tu clínica con procesos más modernos.",
    "Prefieres aprender practicando, no solo viendo teoría."
  ];

  const notForWhomItems = targetAudience?.notForWhom?.items || [
    "Buscas una capacitación solo teórica.",
    "No estás dispuesto a practicar.",
    "No tienes interés en implementar tecnología digital.",
    "Esperas dominar todo el universo de odontología digital en un solo fin de semana.",
    "No estás abierto a trabajar paso a paso el flujo completo."
  ];

  return (
    <section id="para-quien" className="w-full bg-[#07111F] py-16 lg:py-24 border-b border-[#0B1E35]">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          
          {/* Columna Positiva: Para quién SÍ es */}
          <div className="rounded-2xl border border-[#0B1E35] bg-[#0B1E35]/20 p-6 sm:p-8 backdrop-blur-sm">
            <div className="inline-flex w-fit items-center rounded bg-[#25D366]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#25D366] uppercase tracking-wide border border-[#25D366]/20 mb-4">
              Perfil Ideal
            </div>
            <h4 className="text-xl font-black tracking-tight text-[#F5F7FA]">
              {targetAudience?.forWhom?.title || "Este curso es para ti si…"}
            </h4>
            
            <ul className="mt-6 space-y-4">
              {forWhomItems.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-3 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#25D366]/10 text-[9px] font-bold text-[#25D366]">
                    ✓
                  </span>
                  <p className="text-sm font-medium leading-normal text-[#8A94A6] tracking-wide">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Restrictiva: Para quién NO es */}
          <div className="rounded-2xl border border-[#0B1E35] bg-[#0B1E35]/10 p-6 sm:p-8 backdrop-blur-sm opacity-85">
            <div className="inline-flex w-fit items-center rounded bg-red-500/10 px-2.5 py-0.5 text-[10px] font-bold text-red-400  uppercase tracking-wide border border-red-500/20 mb-4">
              Restricciones
            </div>
            <h4 className="text-xl font-black tracking-tight text-[#F5F7FA]">
              {targetAudience?.notForWhom?.title || "Este curso no es para ti si…"}
            </h4>
            
            <ul className="mt-6 space-y-4">
              {notForWhomItems.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-3 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-red-500/10 text-[9px] font-bold text-red-400">
                    ✕
                  </span>
                  <p className="text-sm font-medium leading-normal text-[#8A94A6] tracking-wide">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}