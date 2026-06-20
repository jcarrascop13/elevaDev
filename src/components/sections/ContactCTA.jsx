import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp, openEmail, scrollToSection } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(134,59,255,0.18),transparent_38%)]" />
      <div className="relative mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl backdrop-blur md:p-14">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">// cotización</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">¿Quieres una web que ayude a vender y no solo adorne?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
          Cuéntame qué negocio tienes, qué vendes y qué necesitas mejorar. Te propongo una solución clara, accesible y preparada para crecer.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            type="button"
            onClick={() => openWhatsApp()}
            className="h-12 rounded-full bg-violet-500 px-8 text-base font-semibold text-white hover:bg-violet-400"
          >
            Escribir por WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
          <Button
            type="button"
            onClick={() => scrollToSection("proyectos")}
            variant="outline"
            className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white"
          >
            Ver el proyecto real
          </Button>
        </div>
        <button
          type="button"
          onClick={() => openEmail()}
          className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 underline-offset-4 transition hover:text-white hover:underline"
        >
          <Mail className="h-4 w-4" />
          o escríbeme un correo
        </button>
      </div>
    </section>
  );
}
