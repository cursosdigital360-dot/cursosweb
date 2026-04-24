"use client";

import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { siteConfig } from "../../content/site.config";
import Link from "next/link";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto bg-brand-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Informacion de contacto */}
          <div className="md:w-5/12 p-8 md:p-12 bg-brand-900 border-r border-brand-800 text-white flex flex-col justify-between">
            <div>
              <SectionTitle 
                title="Comienza tu transformación hoy"
                className="[&>h2]:text-white [&>h2]:text-3xl mb-8"
              />
              <p className="text-brand-100 mb-10 text-lg">
                Ponte en contacto con nuestro equipo de asesores clínicos para hacerte un diagnóstico sin costo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Ubicación</h5>
                    <p className="text-brand-200 text-sm leading-relaxed">{contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Horario de atención</h5>
                    <p className="text-brand-200 text-sm">{contact.schedule}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-brand-800">
              <Link href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none h-14 text-lg hidden md:flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.296-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Chatear por WhatsApp
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Formulario */}
          <div className="md:w-7/12 p-8 md:p-12 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">O déjanos tus datos</h3>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.open(contact.whatsappUrl, '_blank') }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Nombre completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-white placeholder:text-slate-500" 
                    placeholder="Dr. / Dra."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-white placeholder:text-slate-500" 
                    placeholder="+52"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Especialidad</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-white placeholder:text-slate-500" 
                    placeholder="Ej. Rehabilitación"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Ciudad</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-white placeholder:text-slate-500" 
                    placeholder="Ciudad, Estado"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">¿Qué te gustaría implementar en tu clínica?</label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 bg-brand-900 border border-brand-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-white placeholder:text-slate-500 resize-none" 
                  placeholder="Cuéntanos brevemente tu objetivo..."
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" size="lg" className="w-full bg-brand-500 hover:bg-brand-400 text-brand-950">
                  Solicitar Diagnóstico
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
