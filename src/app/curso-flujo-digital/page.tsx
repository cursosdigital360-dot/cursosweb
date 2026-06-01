import { Metadata } from "next";
import { cursoFlujoDigitalConfig } from "@/content/curso-flujo-digital.config";

// Importación unificada de la arquitectura de componentes requerida
import { CursoFlujoNavbar } from "@/components/sections/curso-flujo-digital/CursoFlujoNavbar";
import { CursoFlujoHero } from "@/components/sections/curso-flujo-digital/CursoFlujoHero";
import { CursoFlujoTrust } from "@/components/sections/curso-flujo-digital/CursoFlujoTrust";
import { CursoFlujoAprendizaje } from "@/components/sections/curso-flujo-digital/CursoFlujoAprendizaje";
import { CursoFlujoResultados } from "@/components/sections/curso-flujo-digital/CursoFlujoResultados";
import { CursoFlujoTecnologia } from "@/components/sections/curso-flujo-digital/CursoFlujoTecnologia";
import { CursoFlujoPrograma } from "@/components/sections/curso-flujo-digital/CursoFlujoPrograma";
import { CursoFlujoExperiencia } from "@/components/sections/curso-flujo-digital/CursoFlujoExperiencia";
import { CursoFlujoInstructor } from "@/components/sections/curso-flujo-digital/CursoFlujoInstructor";
import { CursoFlujoPrecio } from "@/components/sections/curso-flujo-digital/CursoFlujoPrecio";
import { CursoFlujoParaQuien } from "@/components/sections/curso-flujo-digital/CursoFlujoParaQuien";
import { CursoFlujoFAQ } from "@/components/sections/curso-flujo-digital/CursoFlujoFAQ";
import { CursoFlujoCTA } from "@/components/sections/curso-flujo-digital/CursoFlujoCTA";
import { CursoFlujoStickyCTA } from "@/components/sections/curso-flujo-digital/CursoFlujoStickyCTA";

// Configuración estricta de Metadata del lado del servidor para SEO B2B
export const metadata: Metadata = {
  title: cursoFlujoDigitalConfig?.meta?.title || "Curso de Flujo Digital Dental en Tepic | Dr. Alan Castillo",
  description: cursoFlujoDigitalConfig?.meta?.description || "Curso presencial de flujo digital dental en Tepic con el Dr. Alan Castillo. Aprende escaneo intraoral, diseño en Exocad, impresión 3D y provisionales en resina.",
  keywords: cursoFlujoDigitalConfig?.meta?.keywords || [
    "curso de flujo digital dental",
    "curso Exocad México",
    "curso Exocad Tepic",
    "curso escáner intraoral",
    "curso impresión 3D dental",
    "odontología digital Tepic",
    "curso odontología digital México",
    "provisionales impresos en resina",
    "curso dental presencial"
  ],
  alternates: {
    canonical: "/curso-flujo-digital"
  }
};

export default function CursoFlujoDigitalPage() {
  return (
    <div className="w-full min-h-screen bg-[#07111F] text-[#F5F7FA] antialiased selection:bg-[#2D7FF9] selection:text-[#F5F7FA]">
      
      {/* 01. Barra de Navegación Sticky */}
      <CursoFlujoNavbar />

      <main>
        {/* 02. Bloque Hero Principal (Contiene H1 SEO integrado) */}
        <CursoFlujoHero />

        {/* 03. Bloque de Credibilidad y Enfoque Antiteoría */}
        <CursoFlujoTrust />

        {/* 04. Desglose de Módulos Formativos */}
        <CursoFlujoAprendizaje />

        {/* 05. Bloque Split de Perfil de Egreso y Outcomes */}
        <CursoFlujoResultados />

        {/* 06. Módulo de Infraestructura de Equipamiento Real */}
        <CursoFlujoTecnologia />

        {/* 07. Itinerario Cronológico por Día (Timeline) */}
        <CursoFlujoPrograma />

        {/* 08. Inclusiones de Hospitalidad y Networking */}
        <CursoFlujoExperiencia />

        {/* 09. Bloque del Instructor de Autoridad Validada */}
        <CursoFlujoInstructor />

        {/* 10. Card de Conversión y Fijación de Precios de Venta */}
        <CursoFlujoPrecio />

        {/* 11. Columnas de Calificación de Leads (Filtros de Audiencia) */}
        <CursoFlujoParaQuien />

        {/* 12. Sección de Acordeones Nativos para Objeciones Frecuentes */}
        <CursoFlujoFAQ />

        {/* 13. Bloque de Remate Comercial de Fin de Embudo */}
        <CursoFlujoCTA />
      </main>

      {/* 14. CTA Persistente Inferior Exclusivo para Conversión Móvil */}
      <CursoFlujoStickyCTA />

    </div>
  );
}