import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site";
import { openWhatsApp } from "@/lib/whatsapp";

function ProjectCard({ project }) {
  const isLive = project.status === "live";

  return (
    <Card
      className={
        isLive
          ? "overflow-hidden rounded-2xl border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.08]"
          : "overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.02]"
      }
    >
      {isLive && project.image ? (
        <img
          src={project.image}
          alt={`Captura del proyecto ${project.name}`}
          loading="lazy"
          className="h-44 w-full object-cover"
        />
      ) : (
        <div className="flex h-44 items-center justify-center bg-slate-900/60 text-slate-600">
          <Sparkles className="h-8 w-8" aria-hidden="true" />
        </div>
      )}

      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className={
                isLive
                  ? "rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300"
                  : "rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400"
              }
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>

        {isLive && project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-sky-200"
          >
            Ver proyecto <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <SectionHeading
        eyebrow="Proyectos"
        title="Trabajo real, entregado a negocios reales."
        description="Estos son proyectos en los que he trabajado. Cada uno con un objetivo claro: que el cliente reciba más consultas y venda mejor."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}

        <Card className="flex flex-col justify-between rounded-2xl border-white/10 bg-sky-400/[0.06] p-6">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold text-white">¿Tienes un proyecto en mente?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Cuéntame qué necesitas y lo conversamos sin compromiso por WhatsApp.
            </p>
          </CardContent>
          <button
            type="button"
            onClick={() => openWhatsApp("Hola, vi tus proyectos en la web de elevaDev y quiero contarte sobre el mío.")}
            className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-sky-300 hover:text-sky-200"
          >
            Escribir por WhatsApp <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </button>
        </Card>
      </div>
    </section>
  );
}
