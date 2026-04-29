"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";

export function EventsSection() {
  // Array de eventos para que en el futuro solo agregues un objeto más y crezca solo
  const events = [
    {
      id: "nogales-2025",
      title: "Cirugía Guiada: De la Incertidumbre a la Precisión",
      instructor: "Dr. Christopher Chong",
      date: "06 y 07 de Mayo",
      location: "Nogales, Sonora",
      image: "/images/hero-nogales.webp",
      badge: "Cupo Limitado",
      slug: "/curso-nogales" // La ruta hacia la landing que acabamos de armar
    }
  ];

  return (
    // Fondo Azul Carbono Profundo (#0D1317)
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

        {/* Grid de Eventos (Cartelera) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <Link 
              key={event.id} 
              href={event.slug}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:border-[#B58D53]/40 hover:-translate-y-2"
            >
              {/* Imagen de fondo con zoom effect */}
              <Image 
                src={event.image} 
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Overlays de gradiente para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1317] via-[#0D1317]/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-[#0D1317]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

              {/* Contenido de la Tarjeta */}
              <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                
                {/* Badge de disponibilidad */}
                <div className="mb-6">
                  <span className="bg-[#B58D53] text-[#0D1317] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">
                    {event.badge}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
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

                {/* Línea decorativa que crece en hover */}
                <div className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#B58D53] w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              </div>
            </Link>
          ))}

          {/* Tarjeta de "Próximamente" (Para no dejar el espacio vacío) */}
          <div className="relative h-[450px] rounded-[2.5rem] border-2 border-dashed border-[#2A3B47] flex flex-col items-center justify-center text-center p-12 bg-[#1A242B]/30 group">
             <div className="w-20 h-20 rounded-3xl bg-[#2A3B47]/50 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-10 h-10 text-gray-500 group-hover:text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
             <h3 className="text-xl font-bold text-gray-500 mb-2">Próximas Sedes</h3>
             <p className="text-gray-600 text-sm max-w-[200px]">Estamos planificando nuevas fechas en CDMX, Guadalajara y Monterrey.</p>
          </div>
        </div>

      </Container>
    </section>
  );
}