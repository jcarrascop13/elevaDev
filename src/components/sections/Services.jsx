import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">// servicios</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Soluciones pequeñas, bien hechas y pensadas para vender.</h2>
        <p className="mt-5 text-lg leading-8 text-zinc-300">
          No necesitas una plataforma complicada para empezar. Necesitas una web clara, rápida y confiable que ayude a tus clientes a tomar acción.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="rounded-3xl border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{service.text}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
