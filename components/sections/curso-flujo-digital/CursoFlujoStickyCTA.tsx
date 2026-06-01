import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";

export function CursoFlujoStickyCTA() {
  const { ctas } = cursoFlujoDigitalConfig;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block md:hidden border-t border-[#0B1E35] bg-[#07111F]/90 px-4 py-3 backdrop-blur-lg pb-[calc(12px+env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-4">
        
        {/* Bloque Informativo de Precios */}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold tracking-wider text-[#3CCBFF] uppercase">
            Preventa Activa
          </span>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-base font-black text-[#F5F7FA]">$9,300</span>
            <span className="text-[10px] font-medium text-[#8A94A6]">Aparta c/ $2,000</span>
          </div>
        </div>

        {/* Botón de Acción Directo */}
        <a
          href={ctas?.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold tracking-wide text-[#07111F] active:scale-[0.98] transition-all text-center shadow-md shadow-[#25D366]/5"
        >
          Apartar por WhatsApp
        </a>

      </div>
    </div>
  );
}