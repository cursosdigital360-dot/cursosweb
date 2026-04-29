"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../content/site.config";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevenir el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const finalWaUrl = siteConfig?.contact?.whatsappUrl || "https://wa.me/523113761284";

  const handleReservar = () => {
    window.open(finalWaUrl, "_blank");
  };

  const navLinks = [
    { label: "El Problema", href: "#problema" },
    { label: "La Solución", href: "#solucion" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Programas", href: "#programas" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* NAVEGADOR PRINCIPAL (Fijo arriba) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141C21]/95 backdrop-blur-xl border-b border-white/5 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/images/logo-od360.png"
                alt="Logo OD360"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-[#F9F9F9] font-bold text-sm md:text-base hidden sm:block tracking-tight group-hover:text-[#B58D53] transition-colors duration-300">
              Odontología Digital <span className="text-[#B58D53]">360</span>
            </span>
          </Link>

          {/* NAVEGACIÓN DESKTOP (Oculta en móvil) */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#B58D53] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-[#B58D53] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="w-px h-4 bg-gray-500"></div>

            <Link
               href="/curso-nogales"
               className="text-[#B58D53] hover:text-[#9A7642] font-bold transition-colors uppercase tracking-wider text-xs flex items-center gap-1.5 group"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#B58D53] group-hover:animate-ping"></span>
              Curso Nogales
            </Link>
          </div>

          {/* CONTROLES DERECHOS */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleReservar}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-[#141C21] bg-[#B58D53] hover:bg-[#F9F9F9] shadow-lg shadow-[#B58D53]/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Contactar Asesor
            </button>

            {/* BOTÓN HAMBURGUESA (Móvil) */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white hover:text-[#B58D53] focus:outline-none transition-colors"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MÓVIL DESPLEGABLE (100% SÓLIDO Y SEPARADO) */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#141C21] transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CABECERA DEL MENÚ MÓVIL */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image src="/images/logo-od360.png" alt="Logo OD360" fill className="object-contain" />
            </div>
            <span className="text-[#F9F9F9] font-bold text-sm tracking-tight">
              Odontología Digital <span className="text-[#B58D53]">360</span>
            </span>
          </div>
          
          {/* BOTÓN CERRAR (X) */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none bg-white/5 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ENLACES DEL MENÚ MÓVIL */}
        <div className="flex flex-col gap-2 px-8 pt-8 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-between items-center text-lg font-medium text-white hover:text-[#B58D53] py-4 border-b border-white/5"
            >
              <span>{link.label}</span>
              <svg className="w-5 h-5 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
          
          <Link
             href="/curso-nogales"
             onClick={() => setIsMobileMenuOpen(false)}
             className="text-[#B58D53] font-bold flex items-center justify-between py-4 border-b border-white/5"
          >
            <span className="flex items-center gap-3 uppercase text-sm tracking-wider">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#B58D53]"></span>
              Curso Nogales
            </span>
          </Link>
        </div>

        {/* CTA DEL MENÚ MÓVIL */}
        <div className="mt-auto p-8 border-t border-white/5 bg-[#0D1317]">
          <button
            onClick={handleReservar}
            className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-xl font-bold text-[#141C21] bg-[#B58D53] active:bg-[#9A7642] transition-colors shadow-lg shadow-[#B58D53]/10"
          >
            Agendar Sesión
          </button>
        </div>
      </div>
    </>
  );
}