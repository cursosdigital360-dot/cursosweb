import { Container } from "../ui/Container";
import { siteConfig } from "../../content/site.config";

export function SolutionSection() {
  const { solution } = siteConfig;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 mb-6">
              Nuestra Propuesta de Valor
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-950 mb-6">
              {solution.title}
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              {solution.description}
            </p>
            
            <ul className="space-y-4">
              {solution.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply z-10" />
              {/* Note: In a real app this would be next/image, using a generic tech-dental placeholder here */}
              <img 
                src="https://images.unsplash.com/photo-1590625997232-261efbf5948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Flujo Digital Odontológico" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-500 rounded-2xl -z-10 opacity-20" />
            <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-brand-100 rounded-full -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
