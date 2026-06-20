import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp, scrollToSection } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden px-6 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl backdrop-blur md:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Cotización</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          ¿Quieres una web que ayude a vender y no solo adorne?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Cuéntame qué negocio tienes, qué vendes y qué necesitas mejorar. Te propongo una solución clara,
          accesible y preparada para crecer.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            type="button"
            onClick={() => openWhatsApp()}
            className="h-12 rounded-full bg-sky-400 px-8 text-base font-semibold text-slate-950 hover:bg-sky-300"
          >
            Escribir por WhatsApp <MessageCircle className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
          <Button
            type="button"
            onClick={() => scrollToSection("demo")}
            variant="outline"
            className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white"
          >
            Ver una demo
          </Button>
        </div>
      </div>
    </section>
  );
}
