import { ServicesHero } from "../components/services/ServicesHero";
import { ServicesBentoGrid } from "../components/services/ServicesBentoGrid";
import { ServicesCta } from "../components/services/ServicesCta";

export function Services() {
  return (
    <div className="pb-24">
      <ServicesHero />
      <ServicesBentoGrid />
      <ServicesCta />
    </div>
  );
}
