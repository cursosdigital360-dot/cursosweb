"use client";

import Link from "next/link";
import { siteConfig } from "../../content/site.config";

export function Navbar() {
  const handleReservar = () => {
    window.open(siteConfig.contact.whatsappUrl, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-brand-500 text-white text-xs font-black shadow-md">
            OD
          </div>
          <span className="text-brand-950 font-bold text-sm hidden sm:block group-hover:text-brand-500 transition-colors">
            Odontología Digital 360
          </span>
        </Link>

        {/* Nav links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {[
            { label: "Cómo funciona", href: "#como-funciona" },
            { label: "Programas", href: "#programas" },
            { label: "Beneficios", href: "#beneficios" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {/* Curso Promocionado */}
          <Link
             href="/curso-nogales"
             className="text-brand-600 hover:text-brand-800 font-bold ml-2 transition-colors"
          >
            Curso Nogales
          </Link>
        </div>

        {/* CTA */}
        <button
          id="nav-cta-home"
          onClick={handleReservar}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-brand-500 hover:bg-brand-400 shadow-md shadow-brand-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Contactar Asesor
        </button>
      </div>
    </nav>
  );
}
