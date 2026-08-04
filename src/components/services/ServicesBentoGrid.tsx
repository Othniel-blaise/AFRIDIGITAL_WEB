import { serviceOfferings } from "../../data/services";
import { Reveal } from "../ui/Reveal";
import { ServiceCard } from "./ServiceCard";

export function ServicesBentoGrid() {
  return (
    <Reveal
      as="section"
      className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop"
    >
      {serviceOfferings.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </Reveal>
  );
}
