import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/site";
import { packages } from "@/data/content";

export default function Packages() {
  return (
    <section id="paquetes" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">// paquetes</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Elige una solución según la etapa de tu negocio.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-zinc-400">
          Los precios son referenciales. Cada proyecto se ajusta según cantidad de secciones, productos y funciones necesarias.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((pack) => (
          <Card
            key={pack.name}
            className={`rounded-[2rem] border-white/10 ${pack.featured ? "bg-violet-500 text-white" : "bg-white/[0.04] text-white"}`}
          >
            <CardContent className="p-7">
              {pack.featured && (
                <div className="mb-5 inline-flex rounded-full bg-zinc-950 px-3 py-1 font-mono text-xs font-semibold text-white">
                  Recomendado
                </div>
              )}
              <h3 className="text-2xl font-semibold">{pack.name}</h3>
              <p className="mt-3 font-mono text-3xl font-semibold">{pack.price}</p>
              <p className={`mt-4 text-sm leading-6 ${pack.featured ? "text-violet-100" : "text-zinc-400"}`}>{pack.description}</p>
              <div className="mt-6 space-y-3">
                {pack.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${pack.featured ? "text-white" : "text-violet-300"}`} />
                    <p className={`text-sm ${pack.featured ? "text-violet-50" : "text-zinc-300"}`}>{feature}</p>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                onClick={() => openWhatsApp(`Hola, vi la web de elevaDev y quiero información sobre el paquete ${pack.name}.`)}
                className={`mt-8 h-11 w-full rounded-full ${pack.featured ? "bg-zinc-950 text-white hover:bg-zinc-800" : "bg-white text-zinc-950 hover:bg-zinc-200"}`}
              >
                Solicitar este paquete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
