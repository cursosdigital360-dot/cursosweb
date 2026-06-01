"use client";

import { useState } from "react";
import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoFAQ() {
  const { faqs } = cursoFlujoDigitalConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqItems = faqs || [
    {
      question: "¿Necesito experiencia previa en Exocad?",
      answer: "No necesariamente. El curso está diseñado para ayudarte a entender el flujo de trabajo paso a paso, con práctica guiada."
    },
    {
      question: "¿El curso es presencial?",
      answer: "Sí. Es un curso presencial intensivo en Tepic, Nayarit."
    },
    {
      question: "¿Cuántos lugares hay disponibles?",
      answer: "El cupo está limitado a 20 participantes para asegurar una práctica real 1 a 1."
    }
  ];

  return (
    <section id="faq" className="w-full bg-[#07111F] py-20 lg:py-28 relative overflow-hidden border-b border-[#0B1E35]">
      {/* Sutil ambient lighting background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#2D7FF9]/5 blur-[120px] pointer-events-none"></div>

      <Container>
        <div className="mx-auto max-w-3xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-xs font-bold text-[#3CCBFF] mb-4 tracking-widest uppercase bg-[#3CCBFF]/10 px-3 py-1 rounded border border-[#3CCBFF]/20">
              Preguntas Frecuentes
            </div>
            <h3 className="text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl">
              Resuelve tus dudas sobre el curso
            </h3>
            <p className="mt-4 text-sm text-[#8A94A6] max-w-lg mx-auto">
              Todo lo que necesitas saber sobre el programa intensivo en Tepic. Si tienes otra pregunta, contáctanos por WhatsApp.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#2D7FF9]/50 bg-[#0B1E35]/40 shadow-xl shadow-[#2D7FF9]/5"
                      : "border-[#0B1E35] bg-[#0B1E35]/10 hover:border-[#2D7FF9]/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <h4
                      className={`font-bold pr-8 text-base md:text-lg transition-colors duration-300 ${
                        isOpen ? "text-[#3CCBFF]" : "text-[#F5F7FA] group-hover:text-[#3CCBFF]"
                      }`}
                    >
                      {item.question}
                    </h4>

                    {/* Styled Icon */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 border ${
                        isOpen
                          ? "bg-[#2D7FF9] border-[#2D7FF9] text-[#07111F] rotate-180"
                          : "bg-[#07111F] border-[#0B1E35] text-[#8A94A6] group-hover:border-[#2D7FF9]/40 group-hover:text-[#F5F7FA]"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable answer */}
                  <div
                    className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-96 pb-6 opacity-100 border-t border-[#0B1E35]/50"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-[#8A94A6] leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
