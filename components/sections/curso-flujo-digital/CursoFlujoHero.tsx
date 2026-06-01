import Image from "next/image";
import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoHero() {
  const { meta, info, ctas, assets } = cursoFlujoDigitalConfig;

  // Forzar visualización de dirección según requerimiento estricto de sede por confirmar
 const ciudadDisplay = "Tepic, Nayarit";
  const sedeDisplay = "Café del Chef";
  const textoUbicacionInfo = "Curso presencial en Tepic, Nayarit. Sede confirmada en las instalaciones del Café del Chef.";

  return (
    <section id="inicio" className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#07111F] py-16 lg:py-24 flex items-center">
      
      {/* Texturas de fondo técnicas y sutiles */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#8a94a6_1px,transparent_1px),linear-gradient(to_bottom,#8a94a6_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#2D7FF9]/10 blur-[150px]"></div>
      <div className="absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#3CCBFF]/5 blur-[130px]"></div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Bloque de Contenido Izquierdo */}
          <div className="flex flex-col lg:col-span-7">
            
            {/* H1 SEO oculto o integrado sutilmente para lectura algorítmica limpia */}
            <h1 className="sr-only">{meta?.h1 || "Curso de flujo digital dental en Tepic"}</h1>
            
            {/* Badge de estado */}
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-[#2D7FF9]/30 bg-[#2D7FF9]/10 px-3 py-1 text-[11px] font-bold tracking-widest text-[#3CCBFF] uppercase">
              ⚡ {info?.modality || "Curso Presencial Intensivo"}
            </div>

            {/* Headline Visual */}
            <h2 className="text-4xl font-black tracking-tight text-[#F5F7FA] sm:text-5xl lg:text-6xl xl:text-[56px] leading-[1.1]">
              Implementa el flujo digital <br />
              <span className="bg-gradient-to-r from-[#2D7FF9] to-[#3CCBFF] bg-clip-text text-transparent">
                en tu clínica en 2 días
              </span>
            </h2>

            {/* Subheadline Psicológico */}
            <p className="mt-6 text-base font-normal leading-relaxed text-[#8A94A6] sm:text-lg max-w-2xl">
              Aprende de forma práctica a escanear, diseñar en Exocad, imprimir en 3D y maquillar provisionales en resina con acompañamiento 1 a 1.
            </p>

            {/* Ficha Técnica / Cards de Datos Rápidos */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              
              {/* Card Fechas */}
              <div className="rounded-xl border border-[#0B1E35] bg-[#0B1E35]/40 p-5 backdrop-blur-sm">
                <span className="block text-[10px] font-bold tracking-wider text-[#3CCBFF] uppercase">Fechas</span>
                <span className="mt-2 block text-sm font-bold text-[#F5F7FA] leading-snug">
                  {info?.dates || "Viernes 31 de julio y sábado 1 de agosto"}
                </span>
              </div>

              {/* Card Ubicación Protegida (AQUÍ ESTÁ LA FOTO DE LA CLÍNICA) */}
              <div className="relative rounded-xl border border-[#0B1E35] bg-[#0B1E35]/40 p-5 backdrop-blur-sm overflow-hidden group">
                {assets?.clinicPhoto && (
                  <Image 
                    src={assets.clinicPhoto} 
                    alt="Instalaciones de primer nivel" 
                    fill 
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" 
                  />
                )}
                <div className="relative z-10">
                  <span className="block text-[10px] font-bold tracking-wider text-[#3CCBFF] uppercase">Ubicación</span>
                  <span className="mt-2 block text-sm font-bold text-[#F5F7FA]">{ciudadDisplay}</span>
                  <span className="block text-[11px] text-[#8A94A6] font-medium mt-0.5">{sedeDisplay}</span>
                </div>
              </div>

              {/* Card Disponibilidad */}
              <div className="rounded-xl border border-[#0B1E35] bg-[#0B1E35]/40 p-5 backdrop-blur-sm border-l-[#2D7FF9]/40">
                <span className="block text-[10px] font-bold tracking-wider text-[#2D7FF9] uppercase">Cupo Exclusivo</span>
                <span className="mt-2 block text-xl font-black text-[#F5F7FA]">
                  {info?.seatsTotal || 20} Lugares
                </span>
                <span className="block text-[10px] font-medium text-[#8A94A6] mt-0.5">Acompañamiento estricto 1:1</span>
              </div>

            </div>

            {/* Nota Informativa sobre la Sede Exacta */}
            <p className="mt-4 text-xs font-medium text-[#8A94A6] italic bg-[#0B1E35]/20 px-4 py-2 rounded-lg border border-[#0B1E35]/30 w-fit">
              ℹ️ {textoUbicacionInfo}
            </p>

            {/* Bloque Comercial del CTA */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-wider text-[#8A94A6] uppercase">Inversión Preventa</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-black text-[#F5F7FA]">{info?.investment?.earlyBirdPrice || "$9,300 MXN"}</span>
                  <span className="text-xs font-medium text-[#8A94A6] line-through">{info?.investment?.normalPrice || "$12,000 MXN"}</span>
                </div>
              </div>

              <div className="h-px w-full bg-[#0B1E35] sm:h-8 sm:w-px"></div>

              <div className="flex flex-col">
                <span className="text-[11px] font-bold tracking-wider text-[#3CCBFF] uppercase">Gatillo de Reserva</span>
                <span className="text-sm font-bold text-[#F5F7FA]">Aparta con {info?.investment?.depositAmount || "$2,000 MXN"}</span>
              </div>
            </div>

            {/* Botonera Principal */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={ctas?.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold tracking-wide text-[#07111F] hover:bg-[#3CCBFF] transition-all duration-300 shadow-xl shadow-[#25D366]/10 text-center"
              >
                {ctas?.primary || "Apartar mi lugar por WhatsApp"}
              </a>
              <a
                href="#que-aprenderas"
                className="inline-flex items-center justify-center rounded-xl border border-[#0B1E35] bg-[#07111F] px-8 py-4 text-sm font-bold tracking-wide text-[#8A94A6] hover:border-[#2D7FF9] hover:text-[#F5F7FA] transition-all duration-300 text-center"
              >
                {ctas?.secondary || "Ver temario del curso"}
              </a>
            </div>

            {/* Microcopy de Cierre */}
            <p className="mt-4 text-xs font-medium text-[#8A94A6]">
              {ctas?.microcopy || "Aparta tu lugar con $2,000 MXN. Cupo limitado a 20 participantes."}
            </p>

          </div>

          {/* Bloque Visual Derecho */}
          <div className="relative flex justify-center lg:col-span-5 w-full aspect-square sm:aspect-video lg:aspect-square max-h-[500px] rounded-2xl border border-[#0B1E35] bg-[#0B1E35]/20 overflow-hidden group">
            {assets?.heroBg ? (
              <Image
                src={assets.heroBg}
                alt="Curso de flujo digital dental con escaneo, diseño e impresión 3D en Tepic"
                fill
                priority
                sizes="(max-w-1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B1E35] to-[#07111F]">
                <div className="h-12 w-12 rounded-xl bg-[#2D7FF9]/10 border border-[#2D7FF9]/30 flex items-center justify-center text-[#3CCBFF] mb-4">
                  🔬
                </div>
                <span className="text-xs font-bold tracking-wider text-[#8A94A6] uppercase text-center">
                  Infraestructura Tecnológica 360
                </span>
                <span className="text-[10px] text-[#2D7FF9] mt-1 text-center">
                  Escáner · Exocad · Impresión 3D
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-60"></div>
          </div>

        </div>
      </Container>
    </section>
  );
}