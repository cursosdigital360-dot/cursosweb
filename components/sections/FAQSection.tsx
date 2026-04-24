"use client";

import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { siteConfig } from "../../content/site.config";
import { useState } from "react";

export function FAQSection() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionTitle 
            title={faq.title}
            centered
          />
          
          <div className="mt-12 space-y-4">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl border ${isOpen ? 'border-brand-200 shadow-md' : 'border-slate-100 shadow-sm'} overflow-hidden transition-all duration-200`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <h3 className={`font-bold pr-8 ${isOpen ? 'text-brand-900' : 'text-slate-800'}`}>
                      {item.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-brand-50 text-brand-600 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
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
