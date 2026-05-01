import { Container } from "../ui/Container";
import { siteConfig } from "../../content/site.config";

export function ProblemSection() {
  const { problem } = siteConfig;

  // Fallbacks estratégicos
  const defaultItems = [
    {
      title: "Cursos Aislados y Teóricos",
      description: "Tomas diplomados llenos de teoría que no te enseñan el flujo real de trabajo ni cómo implementarlo."
    },
    {
      title: "Equipos Impagables",
      description: "Crees que necesitas invertir millones en escáneres e impresoras antes de facturar tu primer caso."
    },
    {
      title: "Poca Claridad Clínica",
      description: "Tienes la intención, pero no logras integrar la tecnología en tu práctica diaria de forma rentable."
    }
  ];

  const itemsToRender = problem?.items?.length ? problem.items : defaultItems;

  // Íconos elegantes y específicos para cada problema (reemplazan al warning)
  const elegantIcons = [
    // Ícono 1: Libro (Teoría)
    <path key="icon1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
    // Ícono 2: Presupuesto/Inversión (Dinero)
    <path key="icon2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    // Ícono 3: Mapa de ruta (Claridad)
    <path key="icon3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  ];

  return (
    // Fondo Blanco impecable para el "Pattern Interrupt"
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Elemento Decorativo: Grid sutil en gris clarito para que no quede 100% plano */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQTNCNDciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMCAwaDR2NEgwVjB6bTQgNGg0djRINFY0ek0wIDRoNHY0SDBWMHptNCAwaDR2NEg0VjB6bTggOGg0djRIOFY4em00IDRoNHY0SDRWMTJ6bTAtNGg0djRINFY4em00IDBoNHY0SDRWMHptOCA4aDR2NEg4Vjh6bTQgNGg0djRINFYxMnptMC00aDR2NEg0Vjh6bTQgMGg0djRINFYweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <Container className="relative z-10">
        {/* Encabezado de la sección */}
        <div className="max-w-3xl mb-16 md:mb-20">
           <div className="inline-flex items-center text-sm font-bold text-[#B58D53] mb-4 tracking-widest uppercase bg-[#B58D53]/10 px-3 py-1 rounded-full">
             El Desafío Actual
           </div>
           {/* Título en oscuro para máxima legibilidad */}
           <h2 className="text-4xl md:text-5xl font-extrabold text-[#2A3B47] mb-6 leading-tight tracking-tight">
             {problem?.title || "¿Por qué la mayoría de odontólogos se estancan?"}
           </h2>
           {/* Párrafo en gris medio */}
           <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
             La odontología digital avanza rápido, pero la forma de enseñarla se quedó en el pasado. Reconocer el obstáculo es el primer paso para superarlo.
           </p>
        </div>
        
        {/* Grilla de ítems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {itemsToRender.map((item, index) => (
            <div 
              key={index}
              className="bg-[#2A3B47] p-8 rounded-2xl border border-[#B58D53]/20 hover:border-[#B58D53]/60 transition-all duration-500 group relative flex flex-col h-full shadow-xl shadow-[#2A3B47]/10 hover:shadow-2xl hover:-translate-y-1"
            >
               {/* Línea decorativa superior dorada */}
               <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#B58D53] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               {/* Ícono dinámico */}
               <div className="w-14 h-14 bg-[#1A242B] text-[#B58D53] rounded-2xl flex items-center justify-center mb-8 border border-[#B58D53]/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Renderiza el ícono correspondiente según el índice (o repite si hay más de 3) */}
                  {elegantIcons[index % elegantIcons.length]}
                </svg>
               </div>
               
               {/* Título y texto en claro dentro de la tarjeta oscura */}
               <h3 className="text-2xl font-bold text-[#F9F9F9] mb-4 tracking-tight">{item.title}</h3>
               <p className="text-gray-300 leading-relaxed font-light text-base flex-grow">{item.description}</p>

               {/* Número de agua (Watermark) */}
               <div className="absolute bottom-4 right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                 <span className="text-7xl font-black text-white leading-none">0{index + 1}</span>
               </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}