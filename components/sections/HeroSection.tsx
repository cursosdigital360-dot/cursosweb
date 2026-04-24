import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "../../content/site.config";
import Link from "next/link";

export function HeroSection() {
  const { hero, contact } = siteConfig;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-950 text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-900/50" />
      
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-300 mb-6 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2"></span>
            {siteConfig.name} - Plataforma de Implementación
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {hero.headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Link href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-brand-500 hover:bg-brand-400 text-brand-950 font-semibold border-none group">
                {hero.ctaPrimary}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
            <Link href="#como-funciona">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10">
                {hero.ctaSecondary}
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-slate-400 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Acompañamiento clínico
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Casos reales
            </div>
            <div className="flex items-center gap-2 hidden sm:flex">
              <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Impacto inmediato
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
