import { CheckCircle2 } from "lucide-react";
import { benefits } from "@/data/content";

export default function Benefits() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">// por qué funciona</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Tu web debe hacer más que verse bonita.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Debe explicar, convencer y llevar al cliente a escribirte. Cada sección se diseña con un objetivo: generar confianza y consultas.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
              <p className="text-sm leading-6 text-zinc-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
