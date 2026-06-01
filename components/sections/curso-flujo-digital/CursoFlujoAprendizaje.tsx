import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoAprendizaje() {
  const { modules } = cursoFlujoDigitalConfig;

  // Fallback estructural estricto indexado según los datos nativos solicitados
  const modulosVisuales = modules || [
    { id: 1, title: "Escaneo intraoral", description: "Aprenderás el uso práctico del escáner intraoral para capturar información clínica con precisión y llevar el caso al entorno digital.", equipments: ["Medit", "SEED Scan"] },
    { id: 2, title: "Diseño digital en Exocad", description: "Practicarás diseño dental digital con Exocad para comprender el proceso desde el archivo escaneado hasta la preparación del caso." },
    { id: 3, title: "Impresión 3D dental", description: "Aprenderás el flujo básico de impresión 3D aplicado a odontología, utilizando impresoras dentales SprintRay." },
    { id: 4, title: "Provisionales impresos en resina", description: "Trabajarás con provisionales y resinas biocompatibles para entender el proceso de fabricación, terminado y aplicación clínica." },
    { id: 5, title: "Maquillaje dental de provisionales", description: "Practicarás maquillaje de provisionales impresos en resina para mejorar el acabado estético y la presentación del caso." },
    { id: 6, title: "Comunicación con laboratorio", description: "Aprenderás a mejorar la comunicación 1 a 1 con tu laboratorio dental mediante archivos, diseño digital y procesos más claros." }
  ];

  return (
    <section id="que-aprenderas" className="w-full bg-[#07111F] py-16 lg:py-24 border-b border-[#0B1E35] relative">
      {/* Luz ambiental técnica de fondo */}
      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2D7FF9]/5 blur-[120px] pointer-events-none"></div>

      <Container className="relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-[10px] font-bold tracking-widest text-[#2D7FF9] uppercase bg-[#2D7FF9]/10 border border-[#2D7FF9]/20 px-3 py-1 rounded-full">
            Estructura Académica
          </span>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl">
            Domina las etapas clave del flujo digital dental
          </h3>
          <p className="mt-3 text-sm font-normal text-[#8A94A6] max-w-xl mx-auto">
            Un circuito cerrado de aprendizaje diseñado para replicar la operativa real de una clínica de alta tecnología.
          </p>
        </div>

        {/* Grid de Módulos (6 Columnas Estructurales) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modulosVisuales.map((modulo, index) => {
            // Formatear el ID numérico para visualización técnica de dos dígitos (01, 02, etc.)
            const idFormateado = String(modulo.id || index + 1).padStart(2, '0');

            return (
              <div 
                key={modulo.id || index}
                className="group relative flex flex-col justify-between rounded-xl border border-[#0B1E35] bg-[#0B1E35]/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2D7FF9]/40 hover:bg-[#0B1E35]/60"
              >
                <div>
                  {/* Encabezado de Tarjeta con Numeración Indexada */}
                  <div className="flex items-center justify-between border-b border-[#0B1E35] pb-4 mb-4">
                    <span className="text-xs font-black tracking-wider text-[#3CCBFF] uppercase">
                      Módulo
                    </span>
                    <span className="text-xl font-black tracking-tight text-[#2D7FF9]/40 group-hover:text-[#2D7FF9] transition-colors">
                      {idFormateado}
                    </span>
                  </div>

                  {/* Título y Descripción */}
                  <h4 className="text-base font-bold tracking-wide text-[#F5F7FA]">
                    {modulo.title}
                  </h4>
                  <p className="mt-2 text-xs font-normal leading-relaxed text-[#8A94A6]">
                    {modulo.description}
                  </p>
                </div>

                {/* Sub-bloque Técnico de Insumos/Equipos (Solo si aplica) */}
                {modulo.equipments && modulo.equipments.length > 0 && (
                  <div className="mt-5 pt-3 border-t border-[#0B1E35]/60">
                    <span className="block text-[9px] font-bold tracking-wider text-[#3CCBFF] uppercase mb-1.5">
                      Tecnología en interacción:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {modulo.equipments.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="rounded bg-[#07111F] px-2 py-0.5 text-[10px] font-semibold text-[#F5F7FA] border border-[#0B1E35]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}