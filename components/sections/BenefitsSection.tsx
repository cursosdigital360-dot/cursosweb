import { Container } from "../ui/Container";
import { siteConfig } from "../../content/site.config";

export function BenefitsSection() {
  const { benefits } = siteConfig;

  return (
    <section className="py-24 bg-brand-50">
      <Container>
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-brand-900/5 relative overflow-hidden">
          {/* subtle abstract background */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-950 mb-6">
              {benefits.title}
            </h2>
            <p className="text-lg text-slate-600">
              Cambiamos la forma de enseñar odontología digital. No te damos solo teoría, te damos un ecosistema de ejecución.
            </p>
          </div>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.items.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-brand-50 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-bold text-brand-950 text-lg">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
