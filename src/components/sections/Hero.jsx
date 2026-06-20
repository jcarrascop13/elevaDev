import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openWhatsApp, scrollToSection } from "@/lib/site";
import { demoProducts } from "@/data/content";

const stats = [
  { value: "100%", label: "adaptado a celular" },
  { value: "24/7", label: "visible para clientes" },
  { value: "+ventas", label: "por WhatsApp y web" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(134,59,255,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(71,191,255,0.14),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.08fr_0.92fr] md:pb-28 md:pt-40">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 font-mono text-xs text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            disponible para nuevos proyectos
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Convierte tu negocio en una presencia digital profesional.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Desarrollo páginas web, catálogos digitales y tiendas pequeñas para negocios que quieren verse mejor, recibir más consultas y ordenar sus ventas sin complicarse con sistemas enormes.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              type="button"
              onClick={() => openWhatsApp()}
              className="h-12 rounded-full bg-violet-500 px-7 text-base font-semibold text-white hover:bg-violet-400"
            >
              Quiero una cotización <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => scrollToSection("proyectos")}
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white"
            >
              Ver proyecto real
            </Button>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-violet-500/10 blur-3xl" />
          <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur">
            <CardContent className="p-6">
              <div className="rounded-3xl border border-white/10 bg-zinc-900 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs text-zinc-400">demo de catálogo</p>
                    <p className="font-semibold text-white">Tienda urbana</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                    <Smartphone className="h-3 w-3" />
                    activo
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {demoProducts.map((item) => (
                    <div
                      key={item.name}
                      className="group overflow-hidden rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        width="160"
                        height="120"
                        className="mb-3 h-20 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
                      />
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="mt-1 text-xs text-zinc-400">Pedir por WhatsApp</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl bg-violet-500 p-4 text-white">
                  <p className="text-sm font-semibold">Cliente interesado detectado</p>
                  <p className="mt-1 text-xs text-violet-100">La web guía el pedido y lo envía directo a WhatsApp.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
