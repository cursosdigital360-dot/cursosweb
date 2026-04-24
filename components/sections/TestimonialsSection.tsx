import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionTitle 
          title="Resultados Reales en Clínica"
          subtitle="Conoce cómo el flujo digital transformó la práctica de otros odontólogos."
          centered
        />
        
        {/* Placeholder para futuras imágenes/casos reales */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
             <div key={item} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
                <svg className="w-10 h-10 text-brand-200 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden">
                    {/* Placeholder para foto real */}
                    <div className="w-full h-full bg-brand-100 flex items-center justify-center text-brand-400">Foto</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-950">Dr. Nombre Apellido</h4>
                    <span className="text-sm text-slate-500">Especialidad</span>
                  </div>
                </div>
                
                <p className="text-slate-600 italic leading-relaxed">
                  "Aquí irá un testimonio enfocado en resultados clínicos reales, no en qué bonito estuvo el curso. Se enfocará en cómo el doctor recuperó su inversión y mejoró sus tiempos en consulta gracias a la implementación guiada."
                </p>
                
                {/* Stats / ROI hipotético */}
                <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-2 gap-4">
                   <div>
                     <span className="block text-xs uppercase font-bold text-slate-400 mb-1">Ahorro de laboratorio</span>
                     <span className="font-bold text-brand-900">+40%</span>
                   </div>
                   <div>
                     <span className="block text-xs uppercase font-bold text-slate-400 mb-1">Certeza clínica</span>
                     <span className="font-bold text-brand-900">100%</span>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
