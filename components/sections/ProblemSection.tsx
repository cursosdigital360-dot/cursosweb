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

  return (
    // CAMBIO: Fondo Blanco impecable para el "Pattern Interrupt"
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Elemento Decorativo: Grid sutil en gris clarito para que no quede 100% plano */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQTNCNDciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMCAwaDR2NEgwVjB6bTQgNGg0djRINFY0ek0wIDRoNHY0SDBWMHptNCAwaDR2NEg0VjB6bTggOGg0djRIOFY4em00IDRoNHY0SDRWMTJ6bTAtNGg0djRINFY4em00IDBoNHY0SDRWMHptOCA4aDR2NEg4Vjh6bTQgNGg0djRINFYxMnptMC00aDR2NEg0Vjh6bTQgMGg0djRINFYweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <Container className="relative z-10">
        {/* Encabezado de la sección - Ahora adaptado para fondo blanco */}
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
              // CAMBIO: Mantenemos las tarjetas oscuras (#2A3B47) que te gustaron.
              // Le añadimos una sombra pesada para que "floten" sobre el fondo blanco.
              className="bg-[#2A3B47] p-8 rounded-2xl border border-[#B58D53]/20 hover:border-[#B58D53]/60 transition-all duration-500 group relative flex flex-col h-full shadow-xl shadow-[#2A3B47]/10 hover:shadow-2xl hover:-translate-y-1"
            >
               {/* Línea decorativa superior dorada */}
               <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#B58D53] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               {/* Ícono elegante */}
               <div className="w-14 h-14 bg-[#1A242B] text-[#B58D53] rounded-2xl flex items-center justify-center mb-8 border border-[#B58D53]/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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