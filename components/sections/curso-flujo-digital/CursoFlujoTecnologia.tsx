import Image from "next/image";
import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoTecnologia() {
  const { technology, assets } = cursoFlujoDigitalConfig;

  // Fallbacks de contenido técnico seguro mapeados uno a uno con la fuente de verdad
  const title = technology?.title || "Trabajarás con tecnología real de odontología digital";
  const text = technology?.text || "Durante el curso utilizarás herramientas y equipos aplicados al flujo digital clínico.";
  const focus = technology?.focus || "No se trata solo de conocer el equipo. Se trata de entender cómo se conecta cada parte del proceso para llevar un caso desde la boca del paciente hasta un resultado impreso y terminado.";
  
  const tools = technology?.tools || [
    "Escáner intraoral Medit",
    "Escáner intraoral SEED Scan",
    "Impresoras dentales SprintRay",
    "Software Exocad",
    "Resinas biocompatibles",
    "Micromotor",
    "Pinceles",
    "Laptop gamer para práctica y procesamiento"
  ];

  // Matriz de imágenes previstas asignadas a su correspondiente herramienta para el grid técnico
  const gallery = [
    { src: assets?.scannerMedit, alt: "Escáner intraoral Medit usado en flujo digital dental" },
    { src: assets?.scannerSeed, alt: "Escáner SEED Scan para flujo digital dental" },
    { src: assets?.sprintrayPrinter, alt: "Impresora dental SprintRay para impresión 3D dental" },
    { src: assets?.exocadSoftware, alt: "Diseño dental digital en Exocad para curso de flujo digital" },
    { src: assets?.provisionalsResin, alt: "Provisionales dentales impresos en resina biocompatible" },
    { src: assets?.makeupDental, alt: "Maquillaje dental aplicado a provisionales impresos en resina" }
  ];

  return (
    <section className="w-full bg-[#07111F] py-16 lg:py-24 border-b border-[#0B1E35]">
      <Container>
        
        {/* Encabezado Principal */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold tracking-widest text-[#2D7FF9] uppercase bg-[#2D7FF9]/10 border border-[#2D7FF9]/20 px-3 py-1 rounded-full">
            Infraestructura Clínica
          </span>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl leading-tight">
            {title}
          </h3>
          <p className="mt-4 text-sm font-normal leading-relaxed text-[#8A94A6]">
            {text}
          </p>
        </div>

        {/* Layout de Contenido: Grid de Imágenes vs Lista de Herramientas */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Lado Izquierdo: Galería Técnica Modular (6 Módulos Visuales) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {gallery.map((img, idx) => (
              <div 
                key={idx} 
                className="relative aspect-square w-full rounded-xl border border-[#0B1E35] bg-[#0B1E35]/30 overflow-hidden group"
              >
                {img.src ? (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-w-768px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-4 bg-[#0B1E35]/20">
                    <span className="text-[9px] font-bold tracking-wider text-[#2D7FF9] text-center uppercase">
                      Asset Técnico {idx + 1}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 via-transparent to-transparent opacity-40"></div>
              </div>
            ))}
          </div>

          {/* Lado Derecho: Listado Detallado y Enfoque Práctico */}
          <div className="lg:col-span-5 rounded-2xl border border-[#0B1E35] bg-[#0B1E35]/20 p-6 sm:p-8 backdrop-blur-md">
            <span className="text-xs font-black tracking-wider text-[#3CCBFF] uppercase block mb-4 border-b border-[#0B1E35] pb-2">
              Inventario de Equipamiento
            </span>
            
            <ul className="space-y-3">
              {tools.map((tool, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#3CCBFF]" />
                  <span className="text-sm font-medium text-[#F5F7FA] tracking-wide">
                    {tool}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bloque Informativo de Enfoque Conectivo */}
            <div className="mt-8 pt-6 border-t border-[#0B1E35] bg-[#07111F]/40 p-4 rounded-xl border-l-2 border-l-[#2D7FF9]">
              <span className="text-[10px] font-bold tracking-wider text-[#2D7FF9] uppercase block mb-1">
                Estrategia del Ecosistema
              </span>
              <p className="text-xs font-medium leading-relaxed text-[#8A94A6]">
                {focus}
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}