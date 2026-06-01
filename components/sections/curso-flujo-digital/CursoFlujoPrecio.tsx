import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoPrecio() {
  const { info, ctas } = cursoFlujoDigitalConfig;

  return (
    <section id="precio" className="w-full bg-[#0B1E35]/30 py-16 lg:py-24 border-b border-[#0B1E35] backdrop-blur-sm relative">
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2D7FF9]/5 blur-[140px] pointer-events-none"></div>

      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="text-[10px] font-bold tracking-widest text-[#2D7FF9] uppercase bg-[#2D7FF9]/10 border border-[#2D7FF9]/20 px-3 py-1 rounded-full">
            Admisión y Valores
          </span>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl">
            Inversión Comercial
          </h3>
        </div>

        {/* Tarjeta Unificada de Conversión Central */}
        <div className="mx-auto max-w-xl rounded-2xl border border-[#2D7FF9]/20 bg-[#07111F]/90 p-6 sm:p-10 backdrop-blur-md shadow-2xl shadow-[#2D7FF9]/5 relative">
          
          {/* Badge Indicador de Escasez */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#2D7FF9] px-4 py-1 text-[10px] font-black tracking-widest text-[#F5F7FA] uppercase shadow-lg shadow-[#2D7FF9]/20">
            ⏳ Cupo Limitado a {info?.seatsTotal || 20} Odontólogos
          </div>

          <div className="text-center mt-2">
            <span className="text-xs font-bold tracking-wider text-[#8A94A6] uppercase block">
              Precio Especial de Preventa
            </span>
            
            {/* Despliegue de Precios Jerarquizados */}
            <div className="mt-4 flex items-baseline justify-center gap-3">
              <span className="text-5xl font-black tracking-tight text-[#3CCBFF]">
                {info?.investment?.earlyBirdPrice || "$9,300 MXN"}
              </span>
              <span className="text-sm font-bold text-[#8A94A6] line-through">
                {info?.investment?.normalPrice || "$12,000 MXN"}
              </span>
            </div>

            {/* Bloque de Financiamiento / Apartado */}
            <div className="mt-6 rounded-xl bg-[#0B1E35]/60 border border-[#0B1E35] p-4 max-w-sm mx-auto">
              <span className="text-[10px] font-bold tracking-wider text-[#2D7FF9] uppercase block">
                Facilidad de Inscripción
              </span>
              <span className="text-sm font-bold text-[#F5F7FA] block mt-1">
                Aparta tu lugar con {info?.investment?.depositAmount || "$2,000 MXN"}
              </span>
            </div>

            {/* Texto de Cierre Informativo */}
            <p className="mt-6 text-xs font-medium leading-relaxed text-[#8A94A6] max-w-sm mx-auto">
              {info?.investment?.textClose || "La preventa está disponible por tiempo limitado. El cupo es reducido para mantener una experiencia práctica, personalizada y con acompañamiento real."}
            </p>

            {/* Botón WhatsApp de Acción Inmediata */}
            <div className="mt-8">
              <a
                href={ctas?.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-4 text-sm font-bold tracking-wide text-[#07111F] hover:bg-[#3CCBFF] transition-all duration-300 shadow-xl shadow-[#25D366]/5"
              >
                {ctas?.primary || "Apartar mi lugar por WhatsApp"}
              </a>
            </div>

            {/* Microcopy de Seguridad */}
            <span className="block mt-3 text-[10px] font-medium text-[#8A94A6]">
              🔒 Clic directo hacia canal oficial de WhatsApp. Respuesta rápida del equipo técnico.
            </span>

          </div>
        </div>
      </Container>
    </section>
  );
}