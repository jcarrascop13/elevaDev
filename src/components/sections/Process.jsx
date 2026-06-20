import { IconTile } from "@/components/ui/icon-tile";
import { SectionHeading } from "@/components/ui/section-heading";
import { process } from "@/data/site";

export function Process() {
  return (
    <section id="proceso" className="scroll-mt-20 bg-slate-900/70">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Proceso" title="Simple para ti, profesional para tus clientes." />

        <ol className="mt-12 grid gap-5 md:grid-cols-4">
          {process.map((step) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <IconTile icon={step.icon} className="mb-5 bg-white/5" />
              <h3 className="font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
