import { contact } from "@/data/site";

/** Construye un link de WhatsApp con un mensaje pre-escrito. */
export function whatsappUrl(message = contact.defaultMessage) {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
}

/** Abre WhatsApp en una pestaña nueva con el mensaje indicado. */
export function openWhatsApp(message) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

/** Abre el cliente de correo con asunto y cuerpo pre-llenados. */
export function openEmail() {
  const subject = encodeURIComponent("Cotización para desarrollo web");
  const body = encodeURIComponent("Hola, quiero información sobre una web para mi negocio.");
  window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
}

/** Hace scroll suave hacia una sección por id. */
export function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
