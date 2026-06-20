import { useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/data/site";
import { openWhatsApp, scrollToSection } from "@/lib/whatsapp";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button type="button" onClick={() => goTo("top")} className="flex items-center gap-3 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/15 ring-1 ring-sky-300/30">
            <Code2 className="h-5 w-5 text-sky-300" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide text-white">elevaDev</span>
            <span className="block text-xs text-slate-400">Soluciones web para pequeños negocios</span>
          </span>
        </button>

        <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <button type="button" onClick={() => goTo(item.href)} className="transition hover:text-white">
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            onClick={() => openWhatsApp()}
            className="hidden rounded-full bg-white px-5 text-slate-950 hover:bg-slate-200 sm:inline-flex"
          >
            Cotizar ahora
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1 text-sm text-slate-300">
            {nav.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => goTo(item.href)}
                  className="block w-full rounded-lg px-3 py-2.5 text-left transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <Button
            type="button"
            onClick={() => {
              setOpen(false);
              openWhatsApp();
            }}
            className="mt-3 w-full rounded-full bg-white text-slate-950 hover:bg-slate-200"
          >
            Cotizar ahora
          </Button>
        </div>
      ) : null}
    </header>
  );
}
