import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconTile } from "@/components/ui/icon-tile";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <SectionHeading
        eyebrow="Servicios"
        title="Soluciones pequeñas, bien hechas y pensadas para vender."
        description="No necesitas una plataforma complicada para empezar. Necesitas una web clara, rápida y confiable que ayude a tus clientes a tomar acción."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card
            key={service.title}
            className="rounded-2xl border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.08]"
          >
            <CardContent className="p-6">
              <IconTile icon={service.icon} className="mb-5" />
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
