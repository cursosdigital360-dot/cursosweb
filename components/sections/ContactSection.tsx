"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "../../content/site.config";
import Link from "next/link";

export function ContactSection() {
  const { contact } = siteConfig;

  // Datos reales inyectados de Odontología Digital 360
  const whatsappNumber = "523113761284";
  const defaultWaUrl = `https://wa.me/${whatsappNumber}?text=Hola%20Alan,%20quiero%20informaci%C3%B3n%20sobre%20la%20implementaci%C3%B3n%20de%20flujo%20digital.`;
  const finalWaUrl = contact?.whatsappUrl || defaultWaUrl;
  
  const address = "Calle Juan Escutia 168 A, Centro, 63000 Tepic, Nay.";
  const schedule = "Lunes a viernes de 10 am a 8 pm";

  // Función para manejar el formulario y enviarlo a WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(finalWaUrl, '_blank');
  };

  return (
    // Fondo oscuro para un cierre contundente y premium
    <section className="py-24 md:py-32 bg-[#1A242B] relative overflow-hidden">
      
      {/* Resplandor decorativo de fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B58D53]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2A3B47]/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      <Container className="relative z-10">
        
        {/* Contenedor Principal (Tarjeta Dividida) */}
        <div className="max-w-6xl mx-auto bg-[#2A3B47] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/40 flex flex-col md:flex-row border border-[#B58D53]/20">
          
          {/* Columna Izquierda: Información de Contacto / Concierge */}
          <div className="md:w-5/12 p-8 md:p-12 lg:p-16 bg-[#141C21] border-b md:border-b-0 md:border-r border-[#2A3B47] flex flex-col justify-between relative overflow-hidden">
            
            {/* Patrón sutil de fondo en la columna */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#F9F9F9_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center text-xs font-bold text-[#B58D53] mb-4 tracking-widest uppercase">
                Da el primer paso
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#F9F9F9] mb-6 leading-tight tracking-tight">
                Comienza tu transformación hoy
              </h2>
              <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">
                Ponte en contacto con nuestro equipo para agendar un diagnóstico de tu clínica sin costo.
              </p>
              
              <div className="space-y-8">
                {/* Bloque: Ubicación */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#2A3B47] border border-[#B58D53]/20 flex items-center justify-center flex-shrink-0 mt-1 shadow-inner">
                    <svg className="w-6 h-6 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#F9F9F9] mb-1.5 text-lg">Nuestra Sede</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{address}</p>
                  </div>
                </div>
                
                {/* Bloque: Horario */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#2A3B47] border border-[#B58D53]/20 flex items-center justify-center flex-shrink-0 mt-1 shadow-inner">
                    <svg className="w-6 h-6 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#F9F9F9] mb-1.5 text-lg">Horario Clínico</h5>
                    <p className="text-gray-400 text-sm">{schedule}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Botón Directo WhatsApp (Sección Inferior) */}
            <div className="relative z-10 mt-12 pt-8 border-t border-[#2A3B47]">
              <Link href={finalWaUrl} target="_blank" rel="noopener noreferrer" className="block group">
                <Button className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white border-none h-14 text-lg hidden md:flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 transition-all duration-300 group-hover:-translate-y-1 font-bold rounded-xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Chatear por WhatsApp
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Columna Derecha: Formulario B2B */}
          <div className="md:w-7/12 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-[#F9F9F9]">Aplica para una sesión</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3.5 bg-[#1A242B] border border-[#B58D53]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58D53] focus:border-transparent text-white placeholder:text-gray-600 transition-all shadow-inner" 
                    placeholder="Dr. / Dra."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-5 py-3.5 bg-[#1A242B] border border-[#B58D53]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58D53] focus:border-transparent text-white placeholder:text-gray-600 transition-all shadow-inner" 
                    placeholder="+52"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Especialidad</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3.5 bg-[#1A242B] border border-[#B58D53]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58D53] focus:border-transparent text-white placeholder:text-gray-600 transition-all shadow-inner" 
                    placeholder="Ej. Implantología"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Ciudad</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3.5 bg-[#1A242B] border border-[#B58D53]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58D53] focus:border-transparent text-white placeholder:text-gray-600 transition-all shadow-inner" 
                    placeholder="Ciudad, Estado"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">¿Cuál es tu objetivo digital actual?</label>
                <textarea 
                  rows={4}
                  className="w-full px-5 py-3.5 bg-[#1A242B] border border-[#B58D53]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B58D53] focus:border-transparent text-white placeholder:text-gray-600 transition-all resize-none shadow-inner" 
                  placeholder="Ej. Quiero comprar un escáner pero no sé cuál, o quiero dejar de pagar laboratorios..."
                ></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full bg-[#B58D53] hover:bg-[#9A7642] !text-white font-bold border-none h-14 text-lg shadow-xl shadow-[#B58D53]/20 transition-all duration-300 hover:-translate-y-1 rounded-xl">
                  Solicitar Diagnóstico
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4 font-light">
                  Tus datos están seguros. Nos pondremos en contacto en menos de 24 horas.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}