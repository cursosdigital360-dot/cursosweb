import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoCTA() {
  const { ctas, info } = cursoFlujoDigitalConfig;

  // Fallbacks seguros de copy e inversión alineados con la pauta
  const title = ctas?.primary || "Da el siguiente paso hacia el flujo digital en tu clínica";
  const labelTexto = "Cierre de Convocatoria";
  const subtext = "Escanea, diseña, imprime y entiende cómo conectar cada etapa del proceso digital dental en una experiencia práctica de 2 días en Tepic.";
  
  const microcopyInfo = ctas?.microcopy || `Preventa: ${info?.investment?.earlyBirdPrice || "$9,300 MXN"}. Apartado: ${info?.investment?.depositAmount || "$2,000 MXN"}. Cupo limitado a ${info?.seatsTotal || 20} odontólogos.`;

  return (
    <section className="w-full bg-[#07111F] py-20 lg:py-28 relative overflow-hidden">
      
      {/* Efectos ambientales cinemáticos sutiles */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#2D7FF9]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 h-[350px] w-[350px] rounded-full bg-[#3CCBFF]/5 blur-[100px] pointer-events-none"></div>

      <Container>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          
          {/* Card de Cierre de Alto Impacto */}
          <div className="rounded-3xl border border-[#0B1E35] bg-gradient-to-br from-[#0B1E35]/40 to-[#07111F]/60 p-8 sm:p-14 backdrop-blur-md shadow-2xl relative">
            
            {/* Elemento de atención superior */}
            <div className="mx-auto mb-6 inline-flex items-center rounded-full bg-[#3CCBFF]/10 border border-[#3CCBFF]/20 px-3 py-1 text-[10px] font-bold tracking-widest text-[#3CCBFF] uppercase">
              🚀 {labelTexto}
            </div>

            <h3 className="text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl lg:text-5xl max-w-2xl mx-auto leading-[1.1]">
              {title}
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-sm font-normal leading-relaxed text-[#8A94A6]">
              {subtext}
            </p>

            {/* Bloque Central de Llamado a la Acción */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <a
                href={ctas?.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#25D366] px-10 py-5 text-sm font-bold tracking-wide text-[#07111F] hover:bg-[#3CCBFF] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-[#25D366]/5"
              >
                Quiero apartar mi lugar
              </a>
              
              {/* Despliegue de Datos Clave en formato Microcopy */}
              <p className="text-xs font-semibold tracking-wide text-[#3CCBFF] mt-2 bg-[#07111F]/60 border border-[#0B1E35] px-4 py-2 rounded-lg">
                {microcopyInfo}
              </p>
            </div>

            {/* Nota de garantía de proceso */}
            <span className="block mt-6 text-[10px] text-[#8A94A6] font-medium">
              * La confirmación de tu apartado otorga acceso inmediato al checklist técnico de preparación logística.
            </span>

          </div>

        </div>
      </Container>
    </section>
  );
}