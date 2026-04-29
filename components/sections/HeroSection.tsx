import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "../../content/site.config";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const { hero, contact } = siteConfig;

  return (
    // Estilo Netflix: h-[95vh], fondo negro base (#141414), alineación hacia abajo
    <section className="relative h-[95vh] w-full overflow-hidden bg-[#141414] text-white flex flex-col justify-end pb-20 md:pb-28">
      
      {/* Imagen de fondo: Cubre todo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-curso-digital.jpg"
          alt="Odontología Digital 360 - Implementación"
          fill
          // CAMBIO: object-center asegura que el centro de la acción esté siempre visible
          className="object-cover object-center opacity-80 md:opacity-90" 
          priority
        />
      </div>

      {/* Gradientes Viñeta (La magia del efecto Netflix) */}
      {/* 1. Sombra superior para legibilidad del Navbar */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent z-0" />
      
      {/* 2. Sombra lateral izquierda (solo md:) para el texto */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#141414]/95 via-[#141414]/60 to-transparent z-0" />
      
      {/* 3. Sombra inferior pesada */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent z-0" />

      <Container className="relative z-10 w-full">
        <div className="max-w-4xl">
          
          {/* Badge estilo "Top 10" / "N Series" */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <div className="flex items-center justify-center px-2 py-1 bg-[#B58D53] text-[#141414] font-black text-sm rounded-sm shadow-lg">
              OD360
            </div>
            <span className="text-sm md:text-base font-bold text-gray-300 tracking-widest uppercase drop-shadow-md">
              #1 en Implementación Digital
            </span>
          </div>
          
          {/* Título: Masivo y apretado */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.05] animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: "100ms" }}>
            {hero?.headline ? (
              hero.headline 
            ) : (
              <>TECNOLOGÍA.<br className="hidden md:block"/> CONOCIMIENTO.<br/> RESULTADOS.</>
            )}
          </h1>
          
          {/* Subtítulo: Estilo Sinopsis */}
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl leading-snug animate-fade-in-up drop-shadow-lg font-medium" style={{ animationDelay: "200ms" }}>
            {hero?.subheadline || "La mayoría se estanca con cursos aislados y equipos costosos. Transforma tu forma de trabajar, optimiza procesos y eleva tu nivel hoy mismo."}
          </p>
          
          {/* Botones: Estilo "Reproducir" y "Más Info" */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Link href={contact?.whatsappUrl || "https://wa.me/523113761284"} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-white hover:bg-gray-200 !text-black font-bold border-none transition-all px-8 py-6 text-lg rounded-md flex items-center justify-center gap-3 shadow-xl">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {hero?.ctaPrimary || "Empezar ahora"}
              </Button>
            </Link>
            
            <Link href="#como-funciona">
              <Button size="lg" className="w-full sm:w-auto bg-gray-500/30 hover:bg-gray-500/50 !text-white font-bold border-none backdrop-blur-md transition-all px-8 py-6 text-lg rounded-md flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {hero?.ctaSecondary || "Más información"}
              </Button>
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}