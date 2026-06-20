import {
  BarChart3,
  Clock3,
  Code2,
  Globe2,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Store,
  Zap,
} from "lucide-react";

/**
 * Todo el contenido de la web vive aquí. Para cambiar un texto, precio
 * o dato de contacto, este es el único archivo que hace falta tocar.
 */

export const contact = {
  phone: "51935452663",
  displayPhone: "+51 935 452 663",
  email: "jcarrascop13@gmail.com",
  defaultMessage:
    "Hola, vi la web de elevaDev y quiero una cotización para mi negocio.",
};

export const nav = [
  { label: "Servicios", href: "servicios" },
  { label: "Proyectos", href: "proyectos" },
  { label: "Paquetes", href: "paquetes" },
  { label: "Proceso", href: "proceso" },
  { label: "Contacto", href: "contacto" },
];

export const hero = {
  badge: "Webs rápidas, serias y listas para vender",
  title: "Convierte tu negocio en una presencia digital profesional.",
  description:
    "Desarrollo páginas web, catálogos digitales y tiendas pequeñas para negocios que quieren verse mejor, recibir más consultas y ordenar sus ventas sin complicarse con sistemas enormes.",
  stats: [
    { value: "100%", label: "adaptado a celular" },
    { value: "24/7", label: "visible para clientes" },
    { value: "+ventas", label: "por WhatsApp y web" },
  ],
};

export const demoProducts = [
  { name: "Polos", image: "/demo/polos.jpg" },
  { name: "Casacas", image: "/demo/casacas.jpg" },
  { name: "Accesorios", image: "/demo/accesorios.jpg" },
  { name: "Ofertas", image: "/demo/ofertas.jpg" },
];

export const services = [
  {
    icon: Store,
    title: "Catálogos web para vender por WhatsApp",
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
    featured: false,
    features: [
      "Landing page",
      "Diseño responsive",
      "Botón a WhatsApp",
      "Formulario de contacto",
      "SEO básico",
    ],
  },
  {
    name: "Catálogo",
    price: "Desde S/ 550",
    description: "Para negocios que venden productos por WhatsApp o redes sociales.",
    featured: true,
    features: [
      "Catálogo por categorías",
      "Productos con precio y foto",
      "Pedido directo por WhatsApp",
      "Enlace para redes",
      "Carga inicial de productos",
    ],
  },
  {
    name: "Tienda simple",
    price: "Desde S/ 1,200",
    description: "Para negocios que quieren una experiencia más completa y ordenada.",
    featured: false,
    features: [
      "Carrito o pedido guiado",
      "Panel básico opcional",
      "Base de datos",
      "Integración de pagos o QR",
      "Soporte de lanzamiento",
    ],
  },
];

export const process = [
  {
    icon: MessageCircle,
    title: "1. Conversamos",
    text: "Reviso tu negocio, qué vendes y qué necesitas mejorar para recibir más consultas.",
  },
  {
    icon: BarChart3,
    title: "2. Definimos la solución",
    text: "Te propongo una estructura simple, clara y ajustada a tu presupuesto.",
  },
  {
    icon: Zap,
    title: "3. Desarrollo y entrega",
    text: "Construyo tu web, la optimizo para celular y la dejo lista para compartir.",
  },
  {
    icon: ShieldCheck,
    title: "4. Soporte y mejoras",
    text: "Puedes solicitar mantenimiento, cambios o nuevas funciones según crezca tu negocio.",
  },
];

export const guarantees = [
  {
    icon: Clock3,
    title: "Entrega ordenada",
    text: "Trabajo con etapas claras para que sepas qué se está construyendo y qué falta antes de publicar.",
  },
  {
    icon: Smartphone,
    title: "Pensado para celular",
    text: "La mayoría de clientes llega desde TikTok, Instagram o WhatsApp. Tu web debe verse perfecta en móvil.",
  },
  {
    icon: ShieldCheck,
    title: "Soporte post entrega",
    text: "Puedes mantener tu web actualizada con cambios, productos, banners, copias de seguridad y mejoras.",
  },
];

/**
 * Proyectos reales entregados a clientes. Cada uno con status "live" debe
 * tener al menos: name, description, tags, href (link en vivo) e image.
 * Mientras un proyecto está en proceso de documentarse, se deja con
 * status "soon" y se muestra como tarjeta de "próximamente".
 */
export const projects = [
  {
    status: "soon",
    name: "Balkan Blood Theme",
    description:
      "Proyecto real en proceso de documentación. Pronto vas a poder ver capturas, stack usado y el resultado para el cliente.",
    tags: ["Próximamente"],
  },
];
