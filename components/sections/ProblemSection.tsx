import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { siteConfig } from "../../content/site.config";

export function ProblemSection() {
  const { problem } = siteConfig;

  return (
    <section className="py-24 bg-slate-50 relative">
      <Container>
        <SectionTitle 
          title={problem.title}
          centered
          className="max-w-4xl mx-auto"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {problem.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                 <span className="text-8xl font-black text-brand-900 leading-none">0{index + 1}</span>
               </div>
               
               <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
               </div>
               
               <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
               <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
