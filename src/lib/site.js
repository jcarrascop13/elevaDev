export const contact = {
  phone: "51935452663",
  displayPhone: "935 452 663",
  email: "jcarrascop13@gmail.com",
  github: "https://github.com/jcarrascop13",
};

export function createWhatsAppUrl(message) {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message = "Hola, vi la web de elevaDev y quiero una cotización para mi negocio.") {
  window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export function openEmail(subject = "Cotización para desarrollo web", body = "Hola, quiero información sobre una web para mi negocio.") {
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
