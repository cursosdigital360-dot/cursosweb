import type { Metadata } from "next";
import { CursoNavbar } from "../../../components/sections/curso/CursoNavbar";
import { CursoHero } from "../../../components/sections/curso/CursoHero";
import { CursoTemario } from "../../../components/sections/curso/CursoTemario";
import { CursoParaQuien } from "../../../components/sections/curso/CursoParaQuien";
import { CursoRequisitos } from "../../../components/sections/curso/CursoRequisitos";
import { CursoInstructor } from "../../../components/sections/curso/CursoInstructor";
import { CursoWhatsAppForm } from "../../../components/sections/curso/CursoWhatsAppForm";
import { CursoCta } from "../../../components/sections/curso/CursoCta";

export const metadata: Metadata = {
  title: "Cirugía Guiada: De la Incertidumbre a la Precisión | Nogales, Sonora",
  description:
    "Curso presencial de Cirugía Guiada con el Dr. Christopher Chong en Nogales, Sonora. 6 y 7 de Mayo. Aprende Exoplan, diseño de guías quirúrgicas e impresión 3D. Cupo limitado: solo 6 lugares.",
  openGraph: {
    title: "Cirugía Guiada: De la Incertidumbre a la Precisión",
    description:
      "Curso presencial en Nogales, Sonora. 6 y 7 de Mayo · Dr. Christopher Chong · Solo 6 lugares",
    type: "website",
  },
};

export default function CursoNogalesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#080808]">
      <CursoNavbar />
      <CursoHero />
      <CursoTemario />
      <CursoParaQuien />
      <CursoRequisitos />
      <CursoInstructor />
      <CursoWhatsAppForm />
      <CursoCta />

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-black text-xs font-black"
              style={{ backgroundImage: "linear-gradient(135deg, #D4AF37, #F5E27A)" }}
            >
              OD
            </div>
            <span className="text-slate-400 text-sm">Odontología Digital 360</span>
          </div>
          <p className="text-slate-600 text-xs text-center">
            Curso presencial · Nogales, Sonora · 6–7 Mayo 2025
          </p>
          <a
            href="https://wa.me/523113761284"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors"
          >
            +52 311 376 1284
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp button for mobile */}
      <a
        href="https://wa.me/523113761284?text=Hola%2C%20quiero%20información%20del%20curso%20de%20Cirugía%20Guiada%20en%20Nogales."
        target="_blank"
        rel="noopener noreferrer"
        id="floating-wa"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl bg-[#25D366] text-white hover:scale-110 active:scale-95 transition-transform md:hidden"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </main>
  );
}
