import Image from "next/image";
import { cursoFlujoDigitalConfig } from "@/content/curso-flujo-digital.config";

export function CursoFlujoNavbar() {
  const { info, ctas } = cursoFlujoDigitalConfig;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#0B1E35] bg-[#07111F]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Identidad de Marca: Logo e Isotipo de Odontología Digital 360 */}
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[#0B1E35] bg-[#0B1E35]/30 p-1">
              <Image
                src="/images/logo-od360.png"
                alt="Logo Odontología Digital 360"
                fill
                sizes="40px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black tracking-widest text-[#F5F7FA] uppercase leading-none">
                ODONTOLOGÍA DIGITAL 360
              </span>
              <span className="text-[9px] font-bold tracking-wider text-[#3CCBFF] uppercase mt-1 leading-none">
                {info?.name || "Flujo Digital"}
              </span>
            </div>
          </div>

          {/* Navegación Ancla - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-xs font-medium tracking-wide text-[#8A94A6] hover:text-[#F5F7FA] transition-colors">
              Inicio
            </a>
            <a href="#que-aprenderas" className="text-xs font-medium tracking-wide text-[#8A94A6] hover:text-[#F5F7FA] transition-colors">
              Qué aprenderás
            </a>
            <a href="#programa" className="text-xs font-medium tracking-wide text-[#8A94A6] hover:text-[#F5F7FA] transition-colors">
              Programa
            </a>
            <a href="#precio" className="text-xs font-medium tracking-wide text-[#8A94A6] hover:text-[#F5F7FA] transition-colors">
              Precio
            </a>
            <a href="#faq" className="text-xs font-medium tracking-wide text-[#8A94A6] hover:text-[#F5F7FA] transition-colors">
              FAQ
            </a>
          </div>

          {/* CTA de Conversión */}
          <div>
            <a
              href={ctas?.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#2D7FF9] px-5 py-2.5 text-xs font-bold tracking-wide text-[#F5F7FA] hover:bg-[#3CCBFF] hover:text-[#07111F] transition-all duration-300 shadow-lg shadow-[#2D7FF9]/15"
            >
              Apartar mi lugar
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}