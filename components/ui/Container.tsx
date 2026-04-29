import * as React from "react";

export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      // 1. Aumentamos el padding lateral (px-6 a lg:px-12) para un look más "Editorial"
      // 2. Agregamos 'relative z-10' por defecto para que el contenido nunca quede debajo de los fondos luminosos
      className={`max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full relative z-10 ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}