import Image from "next/image";

export function CursoRequisitos() {
  return (
    // CAMBIO RADICAL: Fondo Hueso (#F9F9F9) para romper la monotonía oscura
    <section id="requisitos" className="py-24 bg-[#F9F9F9] relative overflow-hidden">
      
      {/* Detalle decorativo de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B58D53]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* COLUMNA IZQUIERDA: Texto y Requisitos */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <span className="inline-block text-sm font-bold tracking-[0.2em] text-[#B58D53] uppercase mb-4 border-b-2 border-[#B58D53]/30 pb-1">
                Preparación
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#2A3B47] leading-tight mb-4">
                Lo que necesitas para el curso
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Para garantizar que ejecutes el flujo completo, es vital contar con las herramientas tecnológicas adecuadas durante la sesión práctica.
              </p>
            </div>

            {/* Tarjeta B2B de Requisitos (Fondo oscuro sobre fondo blanco para resaltar) */}
            <div className="bg-[#1A242B] rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/10 border border-[#2A3B47]">
              
              <div className="grid sm:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#2A3B47]">
                {/* Indispensable */}
                <div>
                  <h3 className="text-[#B58D53] font-bold uppercase tracking-wider text-sm mb-4">Indispensable</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B58D53]" /> Laptop Gamer
                    </li>
                    <li className="flex items-center gap-3 text-white font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B58D53]" /> Software Exoplan
                    </li>
                    <li className="flex items-start gap-3 text-white font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B58D53] mt-2" /> 
                      <span>2 Casos clínicos <br/><span className="text-gray-400 text-xs font-light">(Tomografía y STL)</span></span>
                    </li>
                  </ul>
                </div>

                {/* Opcional */}
                <div>
                  <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-4">Opcional</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600" /> Impresora 3D
                    </li>
                  </ul>
                </div>
              </div>

              {/* Especificaciones de la Laptop */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#B58D53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Specs de la Laptop
                </h3>
                <ul className="space-y-2 text-sm text-gray-400 font-light">
                  <li><strong className="text-gray-200">OS:</strong> Windows 10/11 (64-bit)</li>
                  <li><strong className="text-gray-200">CPU:</strong> Intel Core i5 o AMD Ryzen 5 (Quad-Core min)</li>
                  <li><strong className="text-gray-200">RAM:</strong> 16 GB mínimo (32 GB recomendado)</li>
                  <li><strong className="text-gray-200">GPU:</strong> NVIDIA GTX 1060 o RTX 3060 (4GB VRAM min)</li>
                  <li><strong className="text-gray-200">Almacenamiento:</strong> SSD 256 GB mínimo</li>
                </ul>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA: Imagen Gigante */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            {/* Círculo decorativo de fondo para asentar la imagen */}
            <div className="absolute w-[120%] h-[120%] bg-gradient-to-br from-[#EAEAEA] to-transparent rounded-full -z-10" />
            
            <div className="relative w-full max-w-md aspect-square drop-shadow-2xl hover:scale-105 transition-transform duration-700">
              <Image 
                src="/images/requisitos-render.webp" 
                alt="Render 3D de guía quirúrgica en mandíbula" 
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}