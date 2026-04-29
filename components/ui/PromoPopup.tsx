"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "../../content/site.config";

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { contact } = siteConfig;

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
    // Show 5 seconds after page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hola Alan, vi la información del curso de Cirugía Guiada en Nogales y quiero más información para reservar mi lugar."
    );
    // Usamos el número real de Alan si existe en la config
    const finalWaNumber = contact?.whatsapp?.replace(/\D/g, '') || "523113761284"; 
    window.open(`https://wa.me/${finalWaNumber}?text=${msg}`, "_blank");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Promoción curso Nogales"
    >
      {/* Backdrop: Glassmorphism denso para enfocar la atención */}
      <div
        className="absolute inset-0 bg-[#0D1317]/80 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup card: Carbono Profundo con borde Dorado sutil */}
      <div
        className="relative w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl shadow-black/80 bg-[#1A242B] border border-[#B58D53]/30"
        style={{
          animation: "popup-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Línea superior dorada (El Toque OD360) */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2A3B47] via-[#B58D53] to-[#2A3B47]" />

        {/* Botón de Cerrar */}
        <button
          id="popup-close"
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#141C21] border border-[#2A3B47] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#B58D53]/50 transition-colors z-10"
          aria-label="Cerrar"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-10">
          {/* Badge de Escasez */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B58D53]/40 bg-[#B58D53]/10 px-4 py-1.5 text-xs font-black text-[#B58D53] mb-6 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B58D53] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B58D53]" />
            </span>
            Cupo Limitado · 6 Lugares
          </div>

          {/* Título */}
          <h2 className="text-3xl font-black text-white mb-2 leading-none tracking-tight">
            CIRUGÍA
            <br />
            <span className="text-[#B58D53]">
              GUIADA
            </span>
          </h2>
          <p className="text-gray-400 text-base mb-6 font-light">
            De la incertidumbre a la precisión.
          </p>

          {/* Detalles (Dashboard Style) */}
          <div className="rounded-2xl bg-[#141C21] border border-[#2A3B47] p-5 mb-8 space-y-3">
            {[
              { icon: "📅", text: "6 y 7 de Mayo" },
              { icon: "📍", text: "Nogales, Sonora" },
              { icon: "⏰", text: "10:00 am – 6:00 pm" },
              { icon: "💰", text: "$8,000 MXN" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#2A3B47]/50 flex items-center justify-center text-base">
                  {item.icon}
                </div>
                <span className="text-gray-200 font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Instructor */}
          <p className="text-gray-500 text-xs mb-6 text-center tracking-wide">
            Impartido por <strong className="text-[#F9F9F9]">Dr. Christopher Chong</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <button
              id="popup-whatsapp"
              onClick={handleWhatsApp}
              // Botón Principal Dorado
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-[#B58D53] hover:bg-[#9A7642] shadow-lg shadow-[#B58D53]/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Reservar por WhatsApp
            </button>

            <Link
              href="/curso-nogales"
              id="popup-info"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-gray-300 border border-[#2A3B47] hover:bg-[#2A3B47]/30 hover:border-[#B58D53]/50 transition-colors"
            >
              Ver toda la información →
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