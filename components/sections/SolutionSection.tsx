import { Container } from "../ui/Container";
import { siteConfig } from "../../content/site.config";
import Image from "next/image";

export function SolutionSection() {
  const { solution } = siteConfig;

  // Fallbacks estratégicos basados en el Pitch
  const defaultFeatures = [
    "Aprende el flujo digital paso a paso y sin atajos.",
    "Capacitación 100% práctica con casos reales.",
    "Acceso guiado a la tecnología e insumos correctos.",
    "Acompañamiento para implementación en tu clínica."
  ];

  const featuresToRender = solution?.features?.length ? solution.features : defaultFeatures;

  return (
    // Fondo Azul Carbono (#2A3B47) para crear el contraste contra el blanco de la sección anterior
    <section className="py-24 md:py-32 bg-[#2A3B47] relative overflow-hidden shadow-[inset_0_10px_30px_rgba(0,0,0,0.2)]">
      
      {/* Elemento Decorativo: Línea dorada superior para un corte limpio desde el blanco */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2A3B47] via-[#B58D53] to-[#2A3B47] opacity-80"></div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Columna Izquierda: Copy y Propuesta de Valor */}
          <div className="order-2 lg:order-1">
            {/* Etiqueta / Badge */}
            <div className="inline-flex items-center rounded-full bg-[#B58D53]/10 border border-[#B58D53]/40 px-4 py-1.5 text-sm font-bold text-[#B58D53] mb-6 uppercase tracking-widest">
              Nuestra Propuesta de Valor
            </div>
            
            {/* Título Principal */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F9F9F9] mb-6 leading-tight drop-shadow-md">
              {solution?.title || "Nosotros lo resolvemos. Una plataforma integral."}
            </h2>
            
            {/* Párrafo de conexión */}
            <div className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed space-y-4 font-light">
              <p>
                {solution?.description || "La mayoría se enfrenta a cursos aislados, equipos costosos y nula claridad. Aquí no vienes a tomar otro diplomado teórico."}
              </p>
              <p className="font-semibold text-white tracking-wide">
                Vienes a transformar tu forma de trabajar, optimizar tus procesos y elevar el nivel de tus tratamientos.
              </p>
            </div>
            
            {/* Lista de Beneficios */}
            <ul className="space-y-5 mt-10">
              {featuresToRender.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group cursor-default">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A242B] border border-[#B58D53]/40 flex items-center justify-center mt-0.5 group-hover:bg-[#B58D53] group-hover:border-[#B58D53] group-hover:shadow-[0_0_15px_rgba(181,141,83,0.4)] transition-all duration-300">
                    <svg className="w-4 h-4 text-[#B58D53] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium text-lg leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Columna Derecha: Imagen y Elementos Decorativos */}
          <div className="relative order-1 lg:order-2 mb-12 lg:mb-0">
            {/* Contenedor de la Imagen */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 relative z-10 border border-[#B58D53]/20 group">
              <Image 
                src="/images/solucion-implementacion.jpg" 
                alt="Implementación de Flujo Digital Odontológico"
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
              />
            </div>
            
            {/* Elementos Decorativos Arquitectónicos */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[#B58D53] to-transparent rounded-2xl -z-10 opacity-30 blur-md" />
            <div className="absolute -top-6 -right-6 w-40 h-40 border-2 border-[#B58D53]/20 rounded-full -z-10" />
            
            {/* Resplandor central */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#B58D53]/5 rounded-full blur-[60px] -z-20 pointer-events-none" />
          </div>

        </div>
      </Container>
    </section>
  );
}