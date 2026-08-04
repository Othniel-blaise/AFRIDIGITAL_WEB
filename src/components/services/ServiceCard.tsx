import type { ServiceOffering } from "../../types";
import { MaterialIcon } from "../ui/MaterialIcon";

interface ServiceCardProps {
  service: ServiceOffering;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20">
      <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary mb-6">
        <MaterialIcon name={service.icon} />
      </div>
      <h3 className="font-headline-md text-headline-md text-primary mb-3">{service.title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-6">{service.description}</p>
      <a
        href="#"
        className="inline-flex items-center gap-1.5 font-body-md text-body-md font-semibold text-secondary hover:gap-2.5 transition-all"
      >
        En savoir plus
        <MaterialIcon name="arrow_forward" className="text-[18px]" />
      </a>
    </div>
  );
}
