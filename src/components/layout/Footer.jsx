import { nav } from "@/data/site";
import { scrollToSection } from "@/lib/whatsapp";

const footerLinks = nav.filter((item) => ["servicios", "paquetes", "contacto"].includes(item.href));

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} elevaDev. Desarrollo web para pequeños negocios.</p>
        <ul className="flex gap-5">
          {footerLinks.map((item) => (
            <li key={item.href}>
              <button type="button" onClick={() => scrollToSection(item.href)} className="transition hover:text-white">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
