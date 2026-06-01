import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoPrograma() {
  const { schedule } = cursoFlujoDigitalConfig;

  const title = schedule?.title || "Programa del Curso";
  
  // Fallback de cronograma idéntico a la estructura nativa dictada
  const defaultDays = [
    {
      dayNumber: 1,
      dateLabel: "Viernes 31 de julio",
      events: [
        { time: "10:00 a.m.", title: "Registro", description: "Recepción de participantes y preparación inicial." },
        { time: "10:15 a.m.", title: "Presentación", description: "Introducción al curso, objetivos y estructura del flujo digital." },
        { time: "10:30 a.m. a 2:00 p.m.", title: "Escaneo intraoral y diseño inicial", points: ["Uso del escáner intraoral.", "Práctica en tiempo real.", "Práctica con pacientes.", "Acompañamiento uno a uno.", "Introducción práctica a diseño en Exocad."] },
        { time: "2:00 p.m. a 3:00 p.m.", title: "Comida y descanso", description: "Espacio de convivencia y networking." },
        { time: "3:00 p.m. a 6:00 p.m.", title: "Impresión 3D dental", points: ["Preparación de archivos.", "Flujo de impresión.", "Uso de impresoras dentales.", "Práctica de impresión 3D."] },
        { time: "8:00 p.m. a 10:00 p.m.", title: "Recorrido por Tepic", description: "Recorrido nocturno por “la ciudad que sonríe”." }
      ]
    },
    {
      dayNumber: 2,
      dateLabel: "Sábado 1 de agosto",
      events: [
        { time: "10:00 a.m. a 3:00 p.m.", title: "Práctica de diseño", points: ["Diseño dental digital.", "Flujo de trabajo en Exocad.", "Revisión de casos.", "Corrección y acompañamiento."] },
        { time: "3:00 p.m. a 6:00 p.m.", title: "Provisionales en resina y terminado", points: ["Provisionales impresos en resina.", "Práctica con moldes 3D.", "Maquillaje dental.", "Acabado y presentación."] }
      ]
    }
  ];

  const daysData = schedule?.days || defaultDays;
  const optionalExp = schedule?.optionalExperience || {
    title: "Experiencia opcional en La Tóbara",
    description: "Una experiencia adicional de viaje y convivencia para cerrar el fin de semana con networking entre colegas el día domingo."
  };

  return (
    <section id="programa" className="w-full bg-[#07111F] py-16 lg:py-24 border-b border-[#0B1E35] relative">
      <Container>
        
        {/* Encabezado de Sección */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="text-[10px] font-bold tracking-widest text-[#2D7FF9] uppercase bg-[#2D7FF9]/10 border border-[#2D7FF9]/20 px-3 py-1 rounded-full">
            Cronograma Operativo
          </span>
          <h3 className="mt-4 text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl">
            {title}
          </h3>
          <p className="mt-3 text-sm font-normal text-[#8A94A6] max-w-md mx-auto">
            Dos días de inmersión práctica total estructurados de forma óptima y sin tiempos muertos.
          </p>
        </div>

        {/* Contenedor Flex de Columnas por Día */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {daysData.map((day, dIdx) => (
            <div 
              key={day.dayNumber || dIdx} 
              className="rounded-2xl border border-[#0B1E35] bg-[#0B1E35]/20 p-6 sm:p-8 backdrop-blur-md relative"
            >
              {/* Encabezado de Día */}
              <div className="flex items-center justify-between border-b border-[#0B1E35] pb-4 mb-8">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-wider text-[#3CCBFF] uppercase">
                    Día 0{day.dayNumber}
                  </span>
                  <h4 className="text-lg font-bold text-[#F5F7FA] mt-0.5">
                    {day.dateLabel}
                  </h4>
                </div>
                <span className="text-2xl font-black text-[#2D7FF9]/20">INTENSIVO</span>
              </div>

              {/* Timeline del Día */}
              <div className="relative border-l border-[#0B1E35] ml-2 pl-6 space-y-8">
                {day.events.map((event, eIdx) => (
                  <div key={eIdx} className="relative group">
                    
                    {/* Nodo Geométrico del Timeline */}
                    <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-[#2D7FF9] bg-[#07111F] group-hover:bg-[#3CCBFF] transition-colors duration-300" />
                    
                    {/* Contenido del Bloque de Actividad */}
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#3CCBFF] tracking-wide">
                        {event.time}
                      </span>
                      <h5 className="text-sm font-bold text-[#F5F7FA] mt-1 tracking-wide">
                        {event.title}
                      </h5>
                      
                      {event.description && (
                        <p className="mt-1.5 text-xs font-normal leading-relaxed text-[#8A94A6]">
                          {event.description}
                        </p>
                      )}

                      {event.points && event.points.length > 0 && (
                        <ul className="mt-2 space-y-1.5 pl-1">
                          {event.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start text-[11px] font-medium text-[#8A94A6] leading-normal">
                              <span className="text-[#2D7FF9] mr-2 shrink-0">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bloque de Cierre: Experiencia Opcional del Domingo */}
        {optionalExp && (
          <div className="mt-12 max-w-4xl mx-auto rounded-xl border border-dashed border-[#2D7FF9]/30 bg-[#2D7FF9]/5 p-6 backdrop-blur-sm text-center">
            <span className="inline-flex items-center rounded bg-[#2D7FF9]/20 px-2 py-0.5 text-[10px] font-bold text-[#3CCBFF] uppercase tracking-wide mb-2">
              Extensión del Programa
            </span>
            <h4 className="text-base font-bold text-[#F5F7FA] tracking-wide">
              Domingo: {optionalExp.title}
            </h4>
            <p className="mt-2 text-xs font-medium leading-relaxed text-[#8A94A6] max-w-2xl mx-auto">
              {optionalExp.description}
            </p>
          </div>
        )}

      </Container>
    </section>
  );
}