import { Button } from "@/components/ui/button";
import { openWhatsApp, scrollToSection } from "@/lib/site";

const links = [
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "paquetes", label: "Paquetes" },
  { id: "proceso", label: "Proceso" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection("inicio")}
          className="flex items-center gap-2.5"
        >
          <img src="/favicon.svg" alt="elevaDev" className="h-8 w-8" />
          <span className="font-mono text-sm font-semibold tracking-tight text-white">
            eleva<span className="text-violet-400">Dev</span>
          </span>
        </button>

        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="transition hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <Button
          type="button"
          onClick={() => openWhatsApp()}
          className="rounded-full bg-white px-5 text-zinc-950 hover:bg-zinc-200"
        >
          Cotizar ahora
        </Button>
      </div>
    </nav>
  );
}
