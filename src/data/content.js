import { Store, Globe2, Layers3, Code2, MessageCircle, BarChart3, Zap, ShieldCheck } from "lucide-react";

export const services = [
  {
    icon: Store,
    title: "Catálogos para vender por WhatsApp",
    text: "Tus productos ordenados en una web rápida, con botones de pedido directo para que tus clientes compren sin preguntar uno por uno.",
  },
  {
    icon: Globe2,
    title: "Landing pages para negocios",
    text: "Páginas profesionales para presentar servicios, captar clientes y mostrar confianza desde el primer clic.",
  },
  {
    icon: Layers3,
    title: "Tiendas pequeñas personalizadas",
    text: "Soluciones simples con productos, categorías, carrito o pedidos conectados a WhatsApp según lo que necesite tu negocio.",
  },
  {
    icon: Code2,
    title: "Migración y mejora de webs",
    text: "Migración desde Shopify, WordPress o páginas antiguas hacia una web más ligera, propia y adaptada a tu marca.",
  },
];

export const benefits = [
  "Diseño serio, moderno y adaptado a celular",
  "Botones de contacto pensados para generar consultas",
  "Estructura clara para que el cliente entienda rápido qué vendes",
  "Carga rápida y navegación simple",
  "Integración con WhatsApp, redes, mapas y formularios",
  "Soporte para cambios, mejoras y mantenimiento mensual",
];

export const packages = [
  {
    name: "Presencia",
    price: "Desde S/ 350",
    description: "Para negocios que necesitan verse profesionales y recibir consultas.",
    features: ["Landing page", "Diseño responsive", "Botón a WhatsApp", "Formulario de contacto", "SEO básico"],
  },
  {
    name: "Catálogo",
    price: "Desde S/ 550",
    description: "Para negocios que venden productos por WhatsApp o redes sociales.",
    features: ["Catálogo por categorías", "Productos con precio y foto", "Pedido directo por WhatsApp", "Enlace para redes", "Carga inicial de productos"],
    featured: true,
  },
  {
    name: "Tienda simple",
    price: "Desde S/ 1,200",
    description: "Para negocios que quieren una experiencia más completa y ordenada.",
    features: ["Carrito o pedido guiado", "Panel básico opcional", "Base de datos", "Integración de pagos o QR", "Soporte de lanzamiento"],
  },
];

export const process = [
  {
    icon: MessageCircle,
    title: "Conversamos",
    text: "Reviso tu negocio, qué vendes y qué necesitas mejorar para recibir más consultas.",
  },
  {
    icon: BarChart3,
    title: "Definimos la solución",
    text: "Te propongo una estructura simple, clara y ajustada a tu presupuesto.",
  },
  {
    icon: Zap,
    title: "Desarrollo y entrega",
    text: "Construyo tu web, la optimizo para celular y la dejo lista para compartir.",
  },
  {
    icon: ShieldCheck,
    title: "Soporte y mejoras",
    text: "Puedes solicitar mantenimiento, cambios o nuevas funciones según crezca tu negocio.",
  },
];

export const demoProducts = [
  { name: "Polos", image: "/demo/polos.webp" },
  { name: "Casacas", image: "/demo/casacas.webp" },
  { name: "Accesorios", image: "/demo/accesorios.webp" },
  { name: "Ofertas", image: "/demo/ofertas.webp" },
];

export const featuredProject = {
  name: "Balkan Blood",
  tagline: "Tienda de streetwear",
  description:
    "Tema de WordPress hecho a medida para una tienda de ropa urbana, con catálogo de productos integrado vía Shopify y estructura pensada para crecer por colecciones.",
  pages: ["Inicio", "Colección 01", "Colección 02", "Novedades", "Productos"],
  stack: ["WordPress", "PHP", "Shopify", "Diseño responsive"],
  highlights: [
    "Tema construido desde cero (PHP, CSS y JS)",
    "Catálogo de productos integrado con Shopify",
    "Páginas de colecciones y novedades independientes",
    "Estructura responsive, lista para mobile",
  ],
  repoUrl: "https://github.com/jcarrascop13/balkan-blood-theme",
};
