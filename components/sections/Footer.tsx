import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../content/site.config";

export function Footer() {
  const { contact, slogan } = siteConfig;
  
  // Fallbacks de seguridad
  const finalWaUrl = contact?.whatsappUrl || "https://wa.me/523113761284";
  const finalWaNumber = contact?.whatsapp || "+52 311 376 1284";
  const finalSlogan = slogan || "Tecnología, conocimiento y resultados reales.";

  return (
    // Fondo ultra oscuro (#141C21) con un padding superior generoso para que respire
    <footer className="bg-[#141C21] pt-16 pb-8 relative overflow-hidden border-t border-[#2A3B47]">
      
      {/* Brillo sutil en la parte superior para separarlo de la sección de contacto */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#B58D53]/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* BLOQUE PRINCIPAL: Grid dividido */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-16">
          
          {/* Columna Izquierda: Branding (Ocupa más espacio) */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-4 group mb-6">
              <div className="relative w-14 h-14 flex-shrink-0 bg-white/5 rounded-2xl p-2 border border-white/10 group-hover:border-[#B58D53]/40 transition-colors duration-300">
                <Image 
                  src="/images/logo-od360.png" 
                  alt="Logo Odontología Digital 360"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#F9F9F9] font-extrabold text-xl md:text-2xl tracking-tight">
                  Odontología Digital <span className="text-[#B58D53]">360</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm md:text-base font-light max-w-sm leading-relaxed">
              {finalSlogan}
            </p>
          </div>

          {/* Columna Centro: Navegación Rápida */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-2 opacity-50">Plataforma</h4>
            <Link href="#como-funciona" className="text-gray-300 hover:text-[#B58D53] font-medium transition-colors w-fit">
              Cómo funciona
            </Link>
            <Link href="/curso-nogales" className="text-gray-300 hover:text-[#B58D53] font-medium transition-colors w-fit">
              Curso Nogales
            </Link>
          </div>

          {/* Columna Derecha: Contacto Directo */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-2 opacity-50">Contacto</h4>
            <a
              href={finalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition-colors group w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-[#2A3B47] border border-[#B58D53]/20 flex items-center justify-center group-hover:bg-[#B58D53] group-hover:border-[#B58D53] transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <span className="font-semibold tracking-wide">{finalWaNumber}</span>
            </a>
          </div>
          
        </div>

        {/* LÍNEA DIVISORIA */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2A3B47] to-transparent w-full mb-8"></div>

        {/* COPYRIGHT Y FIRMA */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm font-light text-gray-500">
          <p>© {new Date().getFullYear()} Odontología Digital 360. Todos los derechos reservados.</p>
          
          {/* Tu firma original, elevada a nivel premium */}
          <div className="flex items-center gap-1.5 group bg-[#2A3B47]/20 px-4 py-2 rounded-full border border-[#2A3B47]/50">
            <span>Hecho con</span>
            <span className="text-red-500 mx-0.5 text-base hover:scale-110 transition-transform cursor-default">♥</span>
            <span>por</span>
            <a 
              href="https://somoslazaro.marketing/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-gray-300 hover:text-white transition-colors ml-0.5"
            >
              somoslazaro.marketing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}