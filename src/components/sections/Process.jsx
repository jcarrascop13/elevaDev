import { process } from "@/data/content";

export default function Process() {
  return (
    <section id="proceso" className="bg-zinc-900/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">// proceso</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Simple para ti, profesional para tus clientes.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-violet-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-sm text-zinc-600">0{index + 1}</span>
                </div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
