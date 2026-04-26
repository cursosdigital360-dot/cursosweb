import { HeroSection } from "../../../components/sections/HeroSection";
import { ProblemSection } from "../../../components/sections/ProblemSection";
import { SolutionSection } from "../../../components/sections/SolutionSection";
import { ProcessSection } from "../../../components/sections/ProcessSection";
import { ProgramsSection } from "../../../components/sections/ProgramsSection";
import { BenefitsSection } from "../../../components/sections/BenefitsSection";
import { TestimonialsSection } from "../../../components/sections/TestimonialsSection";
import { FAQSection } from "../../../components/sections/FAQSection";
import { ContactSection } from "../../../components/sections/ContactSection";
import { FloatingWhatsApp } from "../../../components/ui/FloatingWhatsApp";
import { PromoPopup } from "../../../components/ui/PromoPopup";
import { Navbar } from "../../../components/sections/Navigation";
import { Footer } from "../../../components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Promo popup: appears 5s after page load */}
      <PromoPopup />

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <ProgramsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
