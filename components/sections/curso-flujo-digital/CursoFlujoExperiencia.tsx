import Image from "next/image";
import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoExperiencia() {
  const { experience, assets } = cursoFlujoDigitalConfig;

  const title = experience?.title || "Más que un curso: una experiencia completa en Tepic";
  const text = experience?.text || "La experiencia está pensada para que aprendas, practiques, convivas y conectes con otros odontólogos interesados en integrar tecnología digital a su práctica.";
  
  const includes = experience?.includes || [
    "Coffee break", "Café", "Galletas", "Lonche", "Bebidas", "Cocas", 
    "Aguas", "Convivencia", "Recorrido nocturno por Tepic", 
    "Experiencia en La Tóbara el domingo", "Networking con colegas"
  ];

  return (
    <section className="w-full bg-[#0B1E35]/40 py-16 lg:py-24 border-b border-[#0B1E35] backdrop-blur-sm relative">
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#3CCBFF]/5 blur-[100px] pointer-events-none"></div>

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Lado Izquierdo: Copy y Desglose de Inclusiones */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex w-fit items-center rounded-full bg-[#3CCBFF]/10 px-3 py-1 text-[10px] font-bold tracking-widest text-[#3CCBFF] uppercase mb-4 border border-[#3CCBFF]/20">
              Valor Agregado Híbrido
            </div>
            <h3 className="text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl leading-tight">
              {title}
            </h3>
            <p className="mt-4 text-sm font-normal leading-relaxed text-[#8A94A6] max-w-xl">
              {text}
            </p>

            {/* Grid de Chips de Inclusiones de la Experiencia */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {includes.map((item, idx) => (
                <div 
                  key={idx} 
                  className="rounded-lg border border-[#0B1E35] bg-[#07111F]/60 px-4 py-2.5 text-xs font-bold tracking-wide text-[#F5F7FA] flex items-center space-x-2 transition-all duration-300 hover:border-[#2D7FF9]/40"
                >
                  <span className="text-[#3CCBFF] text-[10px]">♦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Derecho: Split de Imágenes del Entorno (Tepic de Noche / La Tóbara) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            
            {/* Tarjeta Imagen 1: Tepic Noche */}
            <div className="relative h-44 w-full rounded-xl border border-[#0B1E35] overflow-hidden group bg-[#07111F]">
              {assets?.tepicNight ? (
                <Image 
                  src={assets.tepicNight}
                  alt="Recorrido nocturno por Tepic durante experiencia del curso"
                  fill
                  sizes="(max-w-1024px) 50vw, 35vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-[#0B1E35]/20">
                  <span className="text-[10px] font-bold text-[#8A94A6] uppercase tracking-wider">Hospitalidad Tepic</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-80"></div>
              <span className="absolute bottom-3 left-4 text-[10px] font-black tracking-widest text-[#F5F7FA] uppercase">
                Tepic Nocturno
              </span>
            </div>

            {/* Tarjeta Imagen 2: La Tóbara */}
            <div className="relative h-44 w-full rounded-xl border border-[#0B1E35] overflow-hidden group bg-[#07111F]">
              {assets?.tobaraTrip ? (
                <Image 
                  src={assets.tobaraTrip}
                  alt="Experiencia opcional en La Tóbara para participantes del curso"
                  fill
                  sizes="(max-w-1024px) 50vw, 35vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-[#0B1E35]/20">
                  <span className="text-[10px] font-bold text-[#8A94A6] uppercase tracking-wider">Networking de Campo</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-80"></div>
              <span className="absolute bottom-3 left-4 text-[10px] font-black tracking-widest text-[#F5F7FA] uppercase">
                Entorno La Tóbara
              </span>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}