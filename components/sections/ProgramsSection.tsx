import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { siteConfig } from "../../content/site.config";
import Link from "next/link";

export function ProgramsSection() {
  const { programs, contact } = siteConfig;

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionTitle 
          title={programs.title}
          centered
        />
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.items.map((program, index) => {
            const isFlagship = program.label !== undefined;
            return (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col items-start ${
                  isFlagship 
                    ? "bg-brand-900 text-white shadow-xl shadow-brand-900/20 ring-1 ring-brand-800" 
                    : "bg-white text-slate-900 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100"
                }`}
              >
                {isFlagship && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="inline-block bg-brand-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                      {program.label}
                    </span>
                  </div>
                )}
                
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isFlagship ? "text-white" : "text-brand-950"}`}>
                  {program.name}
                </h3>
                
                <p className={`mb-8 flex-1 leading-relaxed ${isFlagship ? "text-brand-100" : "text-slate-600"}`}>
                  {program.description}
                </p>
                
                <ul className="w-full space-y-3 mb-10">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <svg 
                        className={`w-5 h-5 flex-shrink-0 ${isFlagship ? "text-brand-400" : "text-brand-500"}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`font-medium ${isFlagship ? "text-slate-200" : "text-slate-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                  <Button 
                    variant={isFlagship ? "secondary" : "outline"} 
                    className={`w-full ${!isFlagship ? "border-brand-200 text-brand-900 hover:bg-brand-50" : ""}`}
                  >
                    Ver detalles
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
