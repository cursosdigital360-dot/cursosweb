import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    // Base: Transiciones suaves, efecto de hundimiento al hacer click (active:scale-95) y enfoque accesible dorado
    const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58D53] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";
    
    // Variantes inyectadas con la paleta de Odontología Digital 360
    const variants = {
      // Primary (El que Vende): Dorado Bronce con sombra luminosa
      primary: "bg-[#B58D53] text-white hover:bg-[#9A7642] shadow-lg shadow-[#B58D53]/20 hover:-translate-y-0.5",
      
      // Secondary (Autoridad): Azul Carbono sólido
      secondary: "bg-[#2A3B47] text-white hover:bg-[#1A242B] shadow-md shadow-black/10 hover:-translate-y-0.5",
      
      // Outline: Borde elegante oscuro (Ideal sobre fondos claros)
      outline: "border-2 border-[#2A3B47] text-[#2A3B47] hover:bg-[#2A3B47] hover:text-white",
      
      // Ghost: Transparente que se pinta sutilmente al pasar el mouse
      ghost: "text-[#2A3B47] hover:bg-[#2A3B47]/5 hover:text-[#B58D53]",
    };

    // Tamaños ajustados para que se sientan como botones de App móvil/Desktop premium
    const sizes = {
      sm: "h-10 px-5 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";