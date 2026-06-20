import { IconTile } from "@/components/ui/icon-tile";
import { guarantees } from "@/data/site";

export function Guarantees() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {guarantees.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <IconTile icon={item.icon} className="mb-5" />
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
