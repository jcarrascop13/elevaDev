import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/site";
import { openWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="paquetes" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Paquetes</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Elige una solución según la etapa de tu negocio.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-slate-400">
          Los precios son referenciales. Cada proyecto se ajusta según cantidad de secciones, productos y
          funciones necesarias.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((pack) => (
          <Card
            key={pack.name}
            className={cn(
              "rounded-2xl border-white/10",
              pack.featured ? "bg-sky-400 text-slate-950" : "bg-white/[0.04] text-white"
            )}
          >
            <CardContent className="p-7">
              {pack.featured ? (
                <div className="mb-5 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                  Recomendado
                </div>
              ) : null}

              <h3 className="text-2xl font-semibold">{pack.name}</h3>
              <p className={cn("mt-3 text-3xl font-semibold", pack.featured ? "text-slate-950" : "text-white")}>
                {pack.price}
              </p>
              <p className={cn("mt-4 text-sm leading-6", pack.featured ? "text-slate-800" : "text-slate-300")}>
                {pack.description}
              </p>

              <ul className="mt-6 space-y-3">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckCircle2
                      className={cn("mt-0.5 h-5 w-5 shrink-0", pack.featured ? "text-slate-950" : "text-sky-300")}
                      aria-hidden="true"
                    />
                    <p className={cn("text-sm", pack.featured ? "text-slate-900" : "text-slate-300")}>{feature}</p>
                  </li>
                ))}
              </ul>

              <Button
                type="button"
                onClick={() => openWhatsApp(`Hola, vi la web de elevaDev y quiero información sobre el paquete ${pack.name}.`)}
                className={cn(
                  "mt-8 h-11 w-full rounded-full",
                  pack.featured ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-white text-slate-950 hover:bg-slate-200"
                )}
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
