import { cn } from "@/lib/utils";

/** Caja redondeada que envuelve un ícono de lucide-react. Usada en cards y pasos. */
export function IconTile({ icon: Icon, className }) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300",
        className
      )}
    >
      <Icon className="h-6 w-6" aria-hidden="true" />
    </div>
  );
}
