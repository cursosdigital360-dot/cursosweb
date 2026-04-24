import * as React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className || ""}`} {...props}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-950">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
