import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Globe2, MessageCircle, ShieldCheck, Smartphone, Store, Zap, BarChart3, Layers3, Clock3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Store,
    title: "Catálogos web para vender por WhatsApp",
    text: "Tus productos ordenados en una web rápida, con botones de pedido directo para que tus clientes compren sin preguntar uno por uno."
  },
  {
    icon: Globe2,
    title: "Landing pages para negocios",
    text: "Páginas profesionales para presentar servicios, captar clientes y mostrar confianza desde el primer clic."
  },
  {
    icon: Layers3,
    title: "Tiendas pequeñas personalizadas",
    text: "Soluciones simples con productos, categorías, carrito o pedidos conectados a WhatsApp según lo que necesite tu negocio."
  },
  {
    icon: Code2,
    title: "Migración y mejora de webs",
    text: "Migración desde Shopify, WordPress o páginas antiguas hacia una web más ligera, propia y adaptada a tu marca."
  }
];

const benefits = [
  "Diseño serio, moderno y adaptado a celular",
  "Botones de contacto pensados para generar consultas",
  "Estructura clara para que el cliente entienda rápido qué vendes",
  "Carga rápida y navegación simple",
  "Integración con WhatsApp, redes, mapas y formularios",
  "Soporte para cambios, mejoras y mantenimiento mensual"
];

const packages = [
  {
    name: "Presencia",
    price: "Desde S/ 350",
    description: "Para negocios que necesitan verse profesionales y recibir consultas.",
    features: ["Landing page", "Diseño responsive", "Botón a WhatsApp", "Formulario de contacto", "SEO básico"]
  },
  {
    name: "Catálogo",
    price: "Desde S/ 550",
    description: "Para negocios que venden productos por WhatsApp o redes sociales.",
    features: ["Catálogo por categorías", "Productos con precio y foto", "Pedido directo por WhatsApp", "Enlace para redes", "Carga inicial de productos"]
  },
  {
    name: "Tienda simple",
    price: "Desde S/ 1,200",
    description: "Para negocios que quieren una experiencia más completa y ordenada.",
    features: ["Carrito o pedido guiado", "Panel básico opcional", "Base de datos", "Integración de pagos o QR", "Soporte de lanzamiento"]
  }
];

const process = [
  {
    icon: MessageCircle,
    title: "1. Conversamos",
    text: "Reviso tu negocio, qué vendes y qué necesitas mejorar para recibir más consultas."
  },
  {
    icon: BarChart3,
    title: "2. Definimos la solución",
    text: "Te propongo una estructura simple, clara y ajustada a tu presupuesto."
  },
  {
    icon: Zap,
    title: "3. Desarrollo y entrega",
    text: "Construyo tu web, la optimizo para celular y la dejo lista para compartir."
  },
  {
    icon: ShieldCheck,
    title: "4. Soporte y mejoras",
    text: "Puedes solicitar mantenimiento, cambios o nuevas funciones según crezca tu negocio."
  }
];

const demoProducts = [
  {
    name: "Polos",
    image: "/demo/polos.jpg"
  },
  {
    name: "Casacas",
    image: "/demo/casacas.jpg"
  },
  {
    name: "Accesorios",
    image: "/demo/accesorios.jpg"
  },
  {
    name: "Ofertas",
    image: "/demo/ofertas.jpg"
  }
];

const contact = {
  phone: "51935452663",
  displayPhone: "935 452 663",
  email: "jcarrascop13@gmail.com"
};

const createWhatsAppUrl = (message) => {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function LandingelevaDev() {
  const openWhatsApp = (message = "Hola, vi la web de elevaDev y quiero una cotización para mi negocio.") => {
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const openEmail = () => {
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Cotización para desarrollo web")}&body=${encodeURIComponent("Hola, quiero información sobre una web para mi negocio.")}`;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%)]" />
        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 px-6 py-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400/15 ring-1 ring-sky-300/30">
              <Code2 className="h-5 w-5 text-sky-300" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">elevaDev</p>
              <p className="text-xs text-slate-400">Soluciones web para pequeños negocios</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <button type="button" onClick={() => scrollToSection("servicios")} className="hover:text-white">Servicios</button>
            <button type="button" onClick={() => scrollToSection("paquetes")} className="hover:text-white">Paquetes</button>
            <button type="button" onClick={() => scrollToSection("proceso")} className="hover:text-white">Proceso</button>
            <button type="button" onClick={() => scrollToSection("contacto")} className="hover:text-white">Contacto</button>
          </div>
          <Button type="button" onClick={() => openWhatsApp()} className="rounded-full bg-white px-5 text-slate-950 hover:bg-slate-200">
            Cotizar ahora
          </Button>
          </div>
        </nav>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.08fr_0.92fr] md:pb-28 md:pt-40">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100">
              <Smartphone className="h-4 w-4" />
              Webs rápidas, serias y listas para vender
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Convierte tu negocio en una presencia digital profesional.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Desarrollo páginas web, catálogos digitales y tiendas pequeñas para negocios que quieren verse mejor, recibir más consultas y ordenar sus ventas sin complicarse con sistemas enormes.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button type="button" onClick={() => openWhatsApp()} className="h-12 rounded-full bg-sky-400 px-7 text-base font-semibold text-slate-950 hover:bg-sky-300">
                Quiero una cotización <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button type="button" onClick={() => scrollToSection("servicios")} variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-7 text-base text-white hover:bg-white/10 hover:text-white">
                Ver servicios
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-semibold">100%</p>
                <p className="mt-1 text-sm text-slate-400">adaptado a celular</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-sm text-slate-400">visible para clientes</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">+ventas</p>
                <p className="mt-1 text-sm text-slate-400">por WhatsApp y web</p>
              </div>
            </div>
          </motion.div>

          <motion.div id="demo" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative scroll-mt-28">
            <div className="absolute -inset-4 rounded-[2rem] bg-sky-400/10 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur">
              <CardContent className="p-6">
                <div className="rounded-3xl border border-white/10 bg-slate-900 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Demo de catálogo</p>
                      <p className="font-semibold text-white">Tienda urbana</p>
                    </div>
                    <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Activo</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {demoProducts.map((item) => (
                      <div key={item.name} className="group overflow-hidden rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="mb-8 h-16 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
                        />
                        <p className="text-sm font-medium text-white">{item.name}</p>
                        <p className="mt-1 text-xs text-slate-400">Pedir por WhatsApp</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl bg-sky-400 p-4 text-slate-950">
                    <p className="text-sm font-semibold">Cliente interesado detectado</p>
                    <p className="mt-1 text-xs">La web guía el pedido y lo envía directo a WhatsApp.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Servicios</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Soluciones pequeñas, bien hechas y pensadas para vender.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">No necesitas una plataforma complicada para empezar. Necesitas una web clara, rápida y confiable que ayude a tus clientes a tomar acción.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="rounded-3xl border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{service.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Por qué funciona</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Tu web debe hacer más que verse bonita.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Debe explicar, convencer y llevar al cliente a escribirte. Cada sección se diseña con un objetivo: generar confianza y consultas.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <p className="text-sm leading-6 text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="paquetes" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Paquetes</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Elige una solución según la etapa de tu negocio.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">Los precios son referenciales. Cada proyecto se ajusta según cantidad de secciones, productos y funciones necesarias.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pack, index) => (
            <Card key={pack.name} className={`rounded-[2rem] border-white/10 ${index === 1 ? "bg-sky-400 text-slate-950" : "bg-white/[0.04] text-white"}`}>
              <CardContent className="p-7">
                {index === 1 && <div className="mb-5 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">Recomendado</div>}
                <h3 className="text-2xl font-semibold">{pack.name}</h3>
                <p className={`mt-3 text-3xl font-semibold ${index === 1 ? "text-slate-950" : "text-white"}`}>{pack.price}</p>
                <p className={`mt-4 text-sm leading-6 ${index === 1 ? "text-slate-800" : "text-slate-400"}`}>{pack.description}</p>
                <div className="mt-6 space-y-3">
                  {pack.features.map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${index === 1 ? "text-slate-950" : "text-sky-300"}`} />
                      <p className={`text-sm ${index === 1 ? "text-slate-900" : "text-slate-300"}`}>{feature}</p>
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  onClick={() => openWhatsApp(`Hola, vi la web de elevaDev y quiero información sobre el paquete ${pack.name}.`)}
                  className={`mt-8 h-11 w-full rounded-full ${index === 1 ? "bg-slate-950 text-white hover:bg-slate-800" : "bg-white text-slate-950 hover:bg-slate-200"}`}
                >
                  Solicitar este paquete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="proceso" className="bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Proceso</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Simple para ti, profesional para tus clientes.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-sky-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <Clock3 className="mb-5 h-7 w-7 text-sky-300" />
            <h3 className="text-xl font-semibold">Entrega ordenada</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">Trabajo con etapas claras para que sepas qué se está construyendo y qué falta antes de publicar.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <Smartphone className="mb-5 h-7 w-7 text-sky-300" />
            <h3 className="text-xl font-semibold">Pensado para celular</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">La mayoría de clientes llega desde TikTok, Instagram o WhatsApp. Tu web debe verse perfecta en móvil.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
            <ShieldCheck className="mb-5 h-7 w-7 text-sky-300" />
            <h3 className="text-xl font-semibold">Soporte post entrega</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">Puedes mantener tu web actualizada con cambios, productos, banners, copias de seguridad y mejoras.</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_38%)]" />
        <div className="relative mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl backdrop-blur md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Cotización</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">¿Quieres una web que ayude a vender y no solo adorne?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Cuéntame qué negocio tienes, qué vendes y qué necesitas mejorar. Te propongo una solución clara, accesible y preparada para crecer.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button type="button" onClick={() => openWhatsApp()} className="h-12 rounded-full bg-sky-400 px-8 text-base font-semibold text-slate-950 hover:bg-sky-300">
              Escribir por WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button type="button" onClick={() => scrollToSection("demo")} variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white">
              Ver una demo
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row md:items-center">
          <p>© 2026 elevaDev. Desarrollo web para pequeños negocios.</p>
          <div className="flex gap-5">
            <button type="button" onClick={() => scrollToSection("servicios")} className="hover:text-white">Servicios</button>
            <button type="button" onClick={() => scrollToSection("paquetes")} className="hover:text-white">Paquetes</button>
            <button type="button" onClick={() => scrollToSection("contacto")} className="hover:text-white">Contacto</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
