import { Github } from "lucide-react";
import { scrollToSection, contact } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 elevaDev. Desarrollo web para pequeños negocios.</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <button type="button" onClick={() => scrollToSection("servicios")} className="transition hover:text-white">
            Servicios
          </button>
          <button type="button" onClick={() => scrollToSection("proyectos")} className="transition hover:text-white">
            Proyectos
          </button>
          <button type="button" onClick={() => scrollToSection("contacto")} className="transition hover:text-white">
            Contacto
          </button>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
