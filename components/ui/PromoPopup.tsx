"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "../../content/site.config";

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeCoursePromo, contact } = siteConfig;

  // Evitar scroll cuando el popup está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    // Mostrar 5 segundos después de que cargue la página
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      activeCoursePromo?.whatsappMessage || "Hola, quiero información para apartar mi lugar en el curso Flujo Digital en tu Clínica del Dr. Alan Castillo."
    );
    // Usamos el número real configurado en el sistema
    const finalWaNumber = contact?.whatsapp?.replace(/\D/g, '') || "525520894849"; 
    window.open(`https://wa.me/${finalWaNumber}?text=${msg}`, "_blank");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  // Abstracción de datos dinámicos para el Dashboard de la tarjeta
  const fechaDisplay = activeCoursePromo ? "31 de Julio y 01 de Agosto" : "31 Jul - 01 Ago";
  const lugarDisplay = activeCoursePromo ? "Tepic, Nayarit" : "Tepic, Nayarit";
  const precioDisplay = activeCoursePromo?.price || "$9,300 MXN";
  const apartadoDisplay = activeCoursePromo?.deposit ? `Aparta c/ ${activeCoursePromo.deposit}` : "Aparta con $2,000";
  const rutaLanding = activeCoursePromo?.route || "/curso-flujo-digital";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Promoción Curso Flujo Digital"
    >
      {/* Backdrop: Glassmorphism denso para enfocar la atención */}
      <div
        className="absolute inset-0 bg-[#07111F]/80 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup card: Azul Marino Oscuro con borde Cian sutil */}
      <div
        className="relative w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl shadow-black/80 bg-[#07111F] border border-[#2D7FF9]/30"
        style={{
          animation: "popup-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Línea superior Cian/Azul eléctrico (Toque Odontología Digital 360) */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1E35] via-[#3CCBFF] to-[#0B1E35]" />

        {/* Botón de Cerrar */}
        <button
          id="popup-close"
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#0B1E35] border border-[#0B1E35] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3CCBFF]/50 transition-colors z-10"
          aria-label="Cerrar"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-10">
          {/* Badge de Escasez Psicológica */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2D7FF9]/40 bg-[#2D7FF9]/10 px-4 py-1.5 text-xs font-black text-[#3CCBFF] mb-6 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CCBFF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3CCBFF]" />
            </span>
            Cupo Limitado · {activeCoursePromo?.seats || "20 lugares"}
          </div>

          {/* Título de Impacto Comercial */}
          <h2 className="text-3xl font-black text-[#F5F7FA] mb-2 leading-none tracking-tight uppercase">
            FLUJO
            <br />
            <span className="bg-gradient-to-r from-[#2D7FF9] to-[#3CCBFF] bg-clip-text text-transparent">
              DIGITAL
            </span>
          </h2>
          <p className="text-[#8A94A6] text-base mb-6 font-light">
            Implementa escáner, Exocad e impresión 3D en tu clínica.
          </p>

          {/* Detalles Técnicos (Dashboard Style) */}
          <div className="rounded-2xl bg-[#0B1E35]/60 border border-[#0B1E35] p-5 mb-8 space-y-3">
           {[
    { icon: "📅", text: fechaDisplay },
    { icon: "📍", text: lugarDisplay },
    { icon: "🏢", text: "Sede: Café del Chef" }, // <-- Cambiado de "por confirmar" a la sede real
    { icon: "💰", text: `${precioDisplay} · ${apartadoDisplay}` },
  ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#07111F] border border-[#0B1E35] flex items-center justify-center text-base">
                  {item.icon}
                </div>
                <span className="text-[#F5F7FA] font-bold tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Instructor Clínico */}
          <p className="text-[#8A94A6] text-xs mb-6 text-center tracking-wide">
            Impartido por el <strong className="text-[#F5F7FA]">Dr. Alan Castillo</strong>
          </p>

          {/* Bloque de Botones y Enlaces */}
          <div className="flex flex-col gap-3">
            <button
              id="popup-whatsapp"
              onClick={handleWhatsApp}
              // Botón Principal Verde WhatsApp Corporativo
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-[#07111F] bg-[#25D366] hover:bg-[#3CCBFF] shadow-lg shadow-[#25D366]/10 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              {activeCoursePromo?.ctaLabel || "Apartar mi lugar por WhatsApp"}
            </button>

            {/* Enlace directo a la Landing Page del nuevo curso */}
            <Link
              href={rutaLanding}
              id="popup-info"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#8A94A6] border border-[#0B1E35] hover:bg-[#0B1E35]/50 hover:border-[#3CCBFF]/50 hover:text-[#F5F7FA] transition-colors"
            >
              Ver temario e información completa →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popup-enter {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}