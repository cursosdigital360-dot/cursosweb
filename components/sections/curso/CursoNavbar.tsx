"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "523113761284";

export function CursoNavbar() {
  const handleReservar = () => {
    const el = document.getElementById("inscripcion");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-black text-xs font-black"
            style={{
              backgroundImage: "linear-gradient(135deg, #D4AF37, #F5E27A)",
            }}
          >
            OD
          </div>
          <span className="text-white font-bold text-sm hidden sm:block group-hover:text-amber-400 transition-colors">
            Odontología Digital 360
          </span>
        </Link>

        {/* Nav links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          {[
            { label: "Temario", href: "#temario" },
            { label: "Para quién", href: "#para-quien" },
            { label: "Requisitos", href: "#requisitos" },
            { label: "Instructor", href: "#instructor" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          id="nav-cta"
          onClick={handleReservar}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            backgroundImage: "linear-gradient(135deg, #D4AF37, #F5E27A)",
          }}
        >
          Reservar lugar
        </button>
      </div>
    </nav>
  );
}
