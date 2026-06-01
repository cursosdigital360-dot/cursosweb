"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";

export function EventsSection() {
  // Matriz de control comercial: Tepic (Activo) y Nogales (Sold Out)
  const events = [
    {
      id: "tepic-2026",
      status: "active",
      title: "Flujo Digital en tu Clínica",
      instructor: "Dr. Alan Castillo",
      date: "31 de Julio y 01 de Agosto",
      location: "Tepic, Nayarit",
      image: "/images/curso-flujo-digital/clinica-odontic-curso.webp", // Foto de la clínica mapeada
      badge: "Nuevo Curso",
      slug: "/curso-flujo-digital"
    },
    {
      id: "nogales-2026",
      status: "completed",
      title: "Cirugía Guiada: De la Incertidumbre a la Precisión",
      instructor: "Dr. Alan Castillo",
      date: "06 y 07 de Mayo",
      location: "Nogales, Sonora",
      image: "/images/hero-nogales.webp",
      badge: "SOLD OUT",
      slug: "#" // Deshabilitado comercialmente
    }
  ];

  return (
    <section id="eventos" className="py-24 bg-[#0D1317] relative overflow-hidden">
      
      {/* Glow decorativo de fondo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#B58D53]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <Container className="relative z-10">
        
        {/* Encabezado de la Cartelera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[#B58D53] text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
              Academia Presencial
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Próximos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58D53] to-[#D4AF37]">Eventos Estelares</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg font-light max-w-sm md:text-right">
            Formación clínica de alto nivel con los mejores especialistas del país.
          </p>
        </div>

        {/* Grid de Eventos (Cartelera Dinámica Dual) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => {
            const isActive = event.status === "active";

            return (
              <Link 
                key={event.id} 
                href={event.slug}
                onClick={(e) => !isActive && e.preventDefault()} // Bloquear navegación si es Sold Out
                className={`group relative h-[450px] rounded-[2.5rem] overflow-hidden border shadow-2xl transition-all duration-500 ${
                  isActive 
                    ? "border-white/5 hover:border-[#2D7FF9]/40 hover:-translate-y-2 cursor-pointer" 
                    : "border-white/5 opacity-40 cursor-not-allowed"
                }`}
              >
                {/* Imagen de fondo con zoom effect condicional */}
                <Image 
                  src={event.image} 
                  alt={event.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    isActive ? "group-hover:scale-105 group-hover:rotate-0.5" : ""
                  }`}
                />

                {/* Overlays de gradiente para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1317] via-[#0D1317]/70 to-transparent z-10" />
                <div className="absolute inset-0 bg-[#0D1317]/10 z-10" />

                {/* Contenido de la Tarjeta */}
                <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                  
                  {/* Badge de disponibilidad dinámico */}
                  <div className="mb-6">
                    <span className={`text-[#0D1317] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg ${
                      isActive ? "bg-[#3CCBFF]" : "bg-red-500/80 text-white"
                    }`}>
                      {event.badge}
                    </span>
                  </div>

                  <h3 className={`text-3xl md:text-4xl font-black mb-4 leading-tight tracking-tight drop-shadow-lg ${
                    isActive ? "text-white" : "text-gray-400 line-through"
                  }`}>
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-y-4 gap-x-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                        <svg className="w-4 h-4 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-200 text-sm font-bold uppercase tracking-wider">{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                        <svg className="w-4 h-4 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-200 text-sm font-bold uppercase tracking-wider">{event.location}</span>
                    </div>
                  </div>

                  {/* Línea decorativa reactiva solo para el curso activo */}
                  {isActive && (
                    <div className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#3CCBFF] w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

      </Container>
    </section>
  );
}