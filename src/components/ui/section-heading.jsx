import { cn } from "@/lib/utils";

/**
 * Encabezado de sección reutilizable: etiqueta pequeña + título + texto opcional.
 * Mantiene la tipografía consistente en toda la página.
 */
export function SectionHeading({ eyebrow, title, description, className, align = "left" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
