import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/site";

export default function WhatsAppFloatingButton() {
  return (
    <button
      type="button"
      onClick={() => openWhatsApp()}
      aria-label="Escribir por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-400 md:hidden"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-300 ring-2 ring-zinc-950" />
    </button>
  );
}
