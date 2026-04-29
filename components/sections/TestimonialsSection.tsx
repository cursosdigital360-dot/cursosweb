import { Container } from "../ui/Container";
import { siteConfig } from "../../content/site.config";

export function TestimonialsSection() {
  // Datos inventados hiper-realistas enfocados en B2B y ROI
  const fakeTestimonials = [
    {
      name: "Dr. Carlos Mendoza",
      specialty: "Implantólogo y Cirujano Oral",
      quote: "Compré un escáner hace un año y lo usaba como un juguete caro porque no entendía el software CAD. Con OD360 no solo aprendí a diseñar mis propias guías quirúrgicas, sino que me armaron el flujo exacto para mi clínica. Hoy imprimo in-house.",
      metrics: [
        { label: "Ahorro en Laboratorio", value: "-45%" },
        { label: "Retorno de Inversión", value: "4 Meses" }
      ]
    },
    {
      name: "Dra. Ana Sofía Ruiz",
      specialty: "Rehabilitadora Oral",
      quote: "Mi mayor miedo era detener la clínica para aprender. La mentoría 1:1 fue brutal porque Alan implementó el sistema mientras yo seguía atendiendo. En dos meses pasamos de análogo a 100% digital sin perder un solo paciente.",
      metrics: [
        { label: "Transición Digital", value: "60 Días" },
        { label: "Tiempos de Sillón", value: "-30%" }
      ]
    },
    {
      name: "Dr. Roberto Garza",
      specialty: "Prostodoncista",
      quote: "Los diplomados tradicionales te enseñan en tipodontos y cuando llegas a la vida real no sabes qué hacer. Aquí el acompañamiento clínico en mis propios casos me dio la seguridad para cobrar tratamientos de alto valor desde la primera semana.",
      metrics: [
        { label: "Precisión Clínica", value: "100%" },
        { label: "Repetición de Casos", value: "Cero" }
      ]
    }
  ];

  return (
    // CAMBIO: Fondo Azul Carbono para retomar la autoridad y el contraste
    <section className="py-24 md:py-32 bg-[#2A3B47] relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1A242B]/50 to-transparent pointer-events-none"></div>

      <Container className="relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center text-sm font-bold text-[#B58D53] mb-4 tracking-widest uppercase border border-[#B58D53]/30 bg-[#B58D53]/10 px-4 py-1.5 rounded-full">
            Resultados Reales
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#F9F9F9] mb-6 leading-tight drop-shadow-md">
            El impacto de una buena implementación
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            No escuches lo que decimos. Mira los números de las clínicas que ya transformaron su flujo de trabajo.
          </p>
        </div>
        
        {/* Grilla de Testimonios */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {fakeTestimonials.map((item, index) => (
             <div 
               key={index} 
               className="bg-[#1A242B] rounded-3xl p-8 border border-[#B58D53]/10 hover:border-[#B58D53]/40 shadow-xl shadow-black/20 hover:shadow-[#B58D53]/5 hover:-translate-y-1 transition-all duration-300 relative flex flex-col"
             >
                {/* Comillas Doradas */}
                <svg className="w-10 h-10 text-[#B58D53]/30 absolute top-8 right-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                {/* Info del Doctor */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Placeholder elegante en lugar de un cuadro roto */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2A3B47] to-[#141C21] border border-[#B58D53]/30 rounded-full flex items-center justify-center flex-shrink-0 text-[#B58D53] font-bold text-lg shadow-inner">
                    {item.name.split(" ")[1][0]}{item.name.split(" ")[2] ? item.name.split(" ")[2][0] : ''}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F9F9F9] tracking-wide">{item.name}</h4>
                    <span className="text-sm text-gray-400 font-light">{item.specialty}</span>
                  </div>
                </div>
                
                {/* Cita del testimonio */}
                <p className="text-gray-300 italic leading-relaxed mb-8 flex-1 font-light">
                  "{item.quote}"
                </p>
                
                {/* Stats / ROI (Estilo Dashboard) */}
                <div className="mt-auto pt-6 border-t border-[#2A3B47] grid grid-cols-2 gap-4">
                   <div>
                     <span className="block text-[10px] md:text-xs uppercase font-bold text-gray-500 mb-1 tracking-wider">{item.metrics[0].label}</span>
                     <span className="font-black text-xl text-[#B58D53]">{item.metrics[0].value}</span>
                   </div>
                   <div>
                     <span className="block text-[10px] md:text-xs uppercase font-bold text-gray-500 mb-1 tracking-wider">{item.metrics[1].label}</span>
                     <span className="font-black text-xl text-[#F9F9F9]">{item.metrics[1].value}</span>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </Container>
    </section>
  );
}