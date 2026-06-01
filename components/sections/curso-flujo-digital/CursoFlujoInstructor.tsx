import Image from "next/image";
import { cursoFlujoDigitalConfig } from "../../../content/curso-flujo-digital.config";
import { Container } from "../../ui/Container";

export function CursoFlujoInstructor() {
  const { info, assets } = cursoFlujoDigitalConfig;

  // Datos fijos autorizados del instructor para evitar invenciones de pauta
  const instructorName = info?.instructor || "Dr. Alan Castillo";
  const textInfo = `Instructor del curso ${info?.name || "Flujo Digital en tu Clínica"}. Lidera una formación centrada en la transferencia de conocimiento práctico y el acompañamiento directo en el sillón dental, omitiendo teorías de relleno para acelerar tu curva de digitalización.`;

  const keyPoints = [
    "Instructor del curso",
    "Acompañamiento directo",
    "Enfoque práctico",
    "Flujo digital aplicado a clínica"
  ];

  return (
    <section className="w-full bg-[#07111F] py-16 lg:py-24 border-b border-[#0B1E35]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Bloque Izquierdo: Fotografía Profesional con Identidad Preservada */}
          <div className="lg:col-span-5 relative aspect-[4/5] w-full max-w-[400px] mx-auto rounded-2xl border border-[#0B1E35] bg-[#0B1E35]/20 overflow-hidden group">
            {assets?.instructorPhoto ? (
              <Image
                src={assets.instructorPhoto}
                alt={`Dr. Alan Castillo instructor del curso ${info?.name || "Flujo Digital en tu Clínica"}`}
                fill
                sizes="(max-w-1024px) 100vw, 30vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B1E35] to-[#07111F]">
                <span className="text-4xl mb-2">👨‍⚕️</span>
                <span className="text-xs font-bold text-[#8A94A6] uppercase tracking-wider text-center">
                  {instructorName}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/80 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Bloque Derecho: Texto y Viñetas de Autoridad Práctica */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-widest text-[#2D7FF9] uppercase bg-[#2D7FF9]/10 border border-[#2D7FF9]/20 px-3 py-1 rounded-full w-fit">
              Mentor Clínico
            </span>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-[#F5F7FA] sm:text-4xl">
              {instructorName}
            </h3>
            
            <p className="mt-4 text-sm font-normal leading-relaxed text-[#8A94A6] max-w-xl">
              {textInfo}
            </p>

            {/* Listado de Puntos Permitidos Clave */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-lg">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 rounded-lg border border-[#0B1E35] bg-[#0B1E35]/30 p-3">
                  <span className="flex h-2 w-2 shrink-0 rounded-full bg-[#3CCBFF]" />
                  <span className="text-xs font-bold text-[#F5F7FA] tracking-wide">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}