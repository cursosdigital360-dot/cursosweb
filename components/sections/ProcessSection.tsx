import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { siteConfig } from "../../content/site.config";

export function ProcessSection() {
  const { process } = siteConfig;

  return (
    <section id="como-funciona" className="py-24 bg-brand-950 text-white relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <Container className="relative z-10">
        <SectionTitle 
          title={process.title}
          centered
          className="text-white [&>h2]:text-white max-w-4xl mx-auto"
        />
        
        <div className="mt-20 max-w-5xl mx-auto">
          {process.steps.map((step, index) => (
            <div key={index} className="relative flex gap-8 md:gap-12 mb-12 last:mb-0 group cursor-default">
              
              {/* Timeline Line */}
              {index !== process.steps.length - 1 && (
                <div className="absolute left-[39px] md:left-[55px] top-20 bottom-[-48px] w-0.5 bg-brand-900/50 group-hover:bg-brand-500/50 transition-colors"></div>
              )}
              
              {/* Number Bubble */}
              <div className="relative z-10 flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-full bg-brand-900 border-2 border-brand-800 flex items-center justify-center shadow-xl group-hover:border-brand-500 transition-colors duration-300">
                <span className="text-2xl md:text-4xl font-black text-brand-400 group-hover:text-brand-300">
                  {step.step}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-3 md:pt-6 pb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                  {step.name}
                </h3>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed md:max-w-2xl">
                  {step.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
