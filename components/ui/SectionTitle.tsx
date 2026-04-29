import * as React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: string; // Nuevo: Para añadir un pequeño badge o etiqueta arriba
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  accent,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div 
      className={`mb-12 md:mb-16 lg:mb-20 ${centered ? "text-center mx-auto" : ""} ${className || ""}`} 
      {...props}
    >
      {/* 1. Accent Badge: Pequeña etiqueta superior en Dorado Bronce */}
      {accent && (
        <span className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] text-[#B58D53] uppercase mb-4 border-b-2 border-[#B58D53]/30 pb-1">
          {accent}
        </span>
      )}

      {/* 2. Título Principal: Tipografía masiva y apretada en Azul Carbono */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#2A3B47] leading-[1.1]">
        {title}
      </h2>

      {/* 3. Subtítulo: Gris neutro con peso ligero para contraste visual */}
      {subtitle && (
        <p className={`mt-6 text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}

      {/* 4. Decoración: Línea sutil dorada si no está centrado */}
      {!centered && (
        <div className="mt-8 h-1 w-20 bg-gradient-to-r from-[#B58D53] to-transparent rounded-full" />
      )}
    </div>
  );
}