"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function CursoNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevenir el scroll cuando el menú móvil está abierto
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

  const handleReservar = () => {
    setIsMobileMenuOpen(false); // Cierra el menú móvil si está abierto
    const el = document.getElementById("inscripcion");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Inicio", href: "/" }, // Enlace para regresar a la plataforma principal
    { label: "Temario", href: "#temario" },
    { label: "Para quién", href: "#para-quien" },
    { label: "Requisitos", href: "#requisitos" },
    { label: "Instructor", href: "#instructor" },
  ];

  return (
    <>
      {/* NAVEGADOR PRINCIPAL (Estética Carbono del Home) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141C21]/95 backdrop-blur-xl border-b border-white/5 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Original */}
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

          {/* Nav links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#B58D53] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-[#B58D53] hover:after:w-full after:transition-all after:duration-300 ${
                  link.label === "Inicio" ? "text-gray-400" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Controles Derechos */}
          <div className="flex items-center gap-4">
            {/* CTA Desktop */}
            <button
              id="nav-cta"
              onClick={handleReservar}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-white bg-[#B58D53] hover:bg-[#9A7642] shadow-lg shadow-[#B58D53]/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Reservar lugar
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

      {/* MENÚ MÓVIL DESPLEGABLE (100% SÓLIDO) */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#141C21] transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabecera Menú Móvil */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/5">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image src="/images/logo-od360.png" alt="Logo OD360" fill className="object-contain" />
            </div>
            <span className="text-[#F9F9F9] font-bold text-sm tracking-tight">
              Odontología Digital <span className="text-[#B58D53]">360</span>
            </span>
          </Link>
          
          {/* Botón Cerrar */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none bg-white/5 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Enlaces Menú Móvil */}
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
        </div>

        {/* CTA Menú Móvil */}
        <div className="mt-auto p-8 border-t border-white/5 bg-[#0D1317]">
          <button
            onClick={handleReservar}
            className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-[#B58D53] active:bg-[#9A7642] transition-colors shadow-lg shadow-[#B58D53]/10"
          >
            Reservar lugar
          </button>
        </div>
      </div>
    </>
  );
}