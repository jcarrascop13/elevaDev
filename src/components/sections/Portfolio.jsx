import { Github, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { featuredProject, demoProducts } from "@/data/content";
import { contact } from "@/lib/site";

export default function Portfolio() {
  return (
    <section id="proyectos" className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">// proyecto real</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Un caso real, no una maqueta.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Así es como se ve una tienda cuando un negocio decide ordenar su catálogo y dejar de depender solo de mensajes sueltos.
          </p>
        </div>

        <Card className="mt-12 overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04]">
          <CardContent className="grid gap-0 p-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-2">
                {featuredProject.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{featuredProject.name}</h3>
              <p className="text-sm font-medium text-violet-300">{featuredProject.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{featuredProject.description}</p>

              <div className="mt-6 space-y-3">
                {featuredProject.highlights.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                    <p className="text-sm text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={featuredProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  <Github className="h-4 w-4" />
                  Ver repositorio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 underline-offset-4 transition hover:text-white hover:underline"
                >
                  Más proyectos en GitHub
                </a>
              </div>
            </div>

            <div className="bg-zinc-950/60 p-6 md:p-8">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl">
                <div className="flex items-center gap-3 border-b border-white/10 bg-zinc-900/80 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </div>
                  <div className="flex flex-1 flex-wrap gap-1.5 overflow-hidden font-mono text-[11px] text-zinc-400">
                    {featuredProject.pages.map((page, index) => (
                      <span
                        key={page}
                        className={`rounded-full px-2.5 py-1 ${index === 0 ? "bg-violet-400/15 text-violet-200" : "bg-white/5"}`}
                      >
                        {page}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 p-4">
                  {demoProducts.map((item) => (
                    <div key={item.name} className="overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        width="200"
                        height="150"
                        className="h-24 w-full object-cover sm:h-28"
                      />
                      <p className="px-3 py-2 text-xs font-medium text-zinc-200">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-center font-mono text-xs text-zinc-500">vista del catálogo de productos</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
