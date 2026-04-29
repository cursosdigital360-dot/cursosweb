"use client";

import { Container } from "../ui/Container";
import { siteConfig } from "../../content/site.config";
import { useState } from "react";

export function FAQSection() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // La primera abierta por defecto

  // Fallbacks estratégicos B2B para Odontología Digital 360
  const defaultFaqs = [
    {
      question: "¿Necesito tener un escáner intraoral antes de entrar al programa?",
      answer: "No. De hecho, te recomendamos no comprar nada aún. En nuestra mentoría auditamos tu caso clínico y financiero para recomendarte el equipo exacto que necesitas, con acceso a nuestra red de proveedores para que obtengas el mejor precio."
    },
    {
      question: "¿El acompañamiento clínico es virtual o presencial?",
      answer: "Depende del programa que elijas. El Diplomado 360 incluye módulos presenciales donde aplicas el flujo en pacientes reales. La Mentoría 1:1 puede ser híbrida, guiando el software a distancia y apoyándote en el diseño de tus primeros casos."
    },
    {
      question: "Ya tomé otros cursos de CAD/CAM y sigo sin implementarlo, ¿por qué esto es distinto?",
      answer: "Porque los cursos tradicionales te enseñan a usar un botón en un software usando tipodontos de plástico. Nosotros te enseñamos el flujo completo de negocio y clínica: desde cómo cobrar el tratamiento, hasta cómo diseñar e imprimir la guía quirúrgica real para tu paciente de mañana."
    },
    {
      question: "¿Cuánto tiempo me tomará recuperar la inversión?",
      answer: "Nuestros alumnos en promedio recuperan la inversión de la educación en sus primeros 3 a 5 casos de alta complejidad (implantología o rehabilitación completa) gracias a la reducción de hasta un 45% en gastos de laboratorios externos."
    }
  ];

  const itemsToRender = faq?.items?.length ? faq.items : defaultFaqs;

  return (
    // Fondo claro (#F9F9F9) para limpiar la vista antes del cierre de ventas
    <section className="py-24 md:py-32 bg-[#F9F9F9] relative">
      <Container>
        <div className="max-w-3xl mx-auto">
          
          {/* Encabezado */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-bold text-[#B58D53] mb-4 tracking-widest uppercase bg-[#B58D53]/10 px-4 py-1.5 rounded-full border border-[#B58D53]/20">
              Despeja tus dudas
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#2A3B47] mb-6">
              {faq?.title || "Preguntas Frecuentes"}
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Respuestas claras para que des el paso hacia la odontología digital con total seguridad.
            </p>
          </div>
          
          {/* Acordeón de Preguntas */}
          <div className="space-y-4">
            {itemsToRender.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-[#B58D53]/40 shadow-lg shadow-[#B58D53]/5 translate-x-1 md:translate-x-2' 
                      : 'border-[#2A3B47]/10 shadow-sm hover:border-[#B58D53]/30 hover:shadow-md'
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-6 md:py-8 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <h3 className={`font-bold pr-8 text-lg md:text-xl transition-colors duration-300 ${
                      isOpen ? 'text-[#B58D53]' : 'text-[#2A3B47] group-hover:text-[#B58D53]'
                    }`}>
                      {item.question}
                    </h3>
                    
                    {/* Ícono animado */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                      isOpen 
                        ? 'bg-[#B58D53] border-[#B58D53] text-white rotate-180 shadow-md' 
                        : 'bg-[#F9F9F9] border-[#2A3B47]/10 text-gray-400 group-hover:border-[#B58D53]/30 group-hover:text-[#B58D53]'
                    }`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Contenido expansible */}
                  <div 
                    className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 pb-6 md:pb-8 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg pt-4 border-t border-gray-100">
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