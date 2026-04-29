import { siteConfig } from "../../content/site.config";
import Link from "next/link";

export function FloatingWhatsApp() {
  const { contact } = siteConfig;
  
  // Fallback de seguridad por si siteConfig falla
  const finalWaUrl = contact?.whatsappUrl || "https://wa.me/523113761284";

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up" style={{ animationDelay: '1s' }}>
      
      {/* Contenedor relativo para el efecto de "Glow" y animación */}
      <div className="relative group">
        
        {/* Anillos de pulsación (Atraen el ojo sin usar verde neón) */}
        <div className="absolute inset-0 rounded-full bg-[#B58D53] opacity-30 group-hover:animate-ping transition-all"></div>
        <div className="absolute -inset-1 rounded-full bg-[#B58D53]/10 blur-sm"></div>
        
        <Link 
          href={finalWaUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          // Usamos el Dorado Bronce o el Carbono Oscuro para mantener la estética premium
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#1A242B] border-2 border-[#B58D53] text-[#B58D53] hover:bg-[#B58D53] hover:text-[#1A242B] rounded-full shadow-2xl shadow-black/50 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
             <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </Link>
      </div>
      
    </div>
  );
}