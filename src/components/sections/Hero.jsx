import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { demoProducts, hero } from "@/data/site";
import { openWhatsApp, scrollToSection } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 scroll-mt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_40%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.08fr_0.92fr] md:pb-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100">
            <Smartphone className="h-4 w-4" aria-hidden="true" />
            {hero.badge}
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{hero.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              type="button"
              onClick={() => openWhatsApp()}
              className="h-12 rounded-full bg-sky-400 px-7 text-base font-semibold text-slate-950 hover:bg-sky-300"
            >
              Quiero una cotización <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              type="button"
              onClick={() => scrollToSection("servicios")}
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white"
            >
              Ver servicios
            </Button>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-white">{stat.value}</dd>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          id="demo"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative scroll-mt-28"
        >
          <Card className="relative overflow-hidden rounded-2xl border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur">
            <CardContent className="p-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Demo de catálogo</p>
                    <p className="font-semibold text-white">Tienda urbana</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Activo</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {demoProducts.map((item) => (
                    <div
                      key={item.name}
                      className="group overflow-hidden rounded-xl bg-white/5 p-3 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10"
                    >
                      <img
                        src={item.image}
                        alt={`Producto de demostración: ${item.name}`}
                        loading="lazy"
                        width={280}
                        height={120}
                        className="mb-3 h-20 w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
                      />
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-400">Pedir por WhatsApp</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl bg-sky-400 p-4 text-slate-950">
                  <p className="text-sm font-semibold">Cliente interesado detectado</p>
                  <p className="mt-1 text-xs">La web guía el pedido y lo envía directo a WhatsApp.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
