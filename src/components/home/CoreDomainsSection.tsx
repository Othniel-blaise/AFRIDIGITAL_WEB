import { coreDomains } from "../../data/services";
import { GlassCard } from "../ui/GlassCard";
import { MaterialIcon } from "../ui/MaterialIcon";
import { Reveal } from "../ui/Reveal";

export function CoreDomainsSection() {
  return (
    <Reveal as="section" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
            Nos Domaines d'Impact
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Une Vision, Plusieurs Horizons
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-gutter-desktop">
          {coreDomains.map((domain) => (
            <GlassCard
              key={domain.title}
              className="group p-10 rounded-[2.5rem] border-transparent hover:border-primary/20 transition-all duration-500 overflow-hidden relative"
            >
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 ${
                  domain.accent === "primary" ? "bg-primary/5" : "bg-secondary/5"
                } rounded-full group-hover:scale-150 transition-transform duration-500`}
              />
              <MaterialIcon
                name={domain.icon}
                className={`${domain.accent === "primary" ? "text-primary" : "text-secondary"} text-[48px] mb-6 block`}
              />
              <h3 className="font-headline-md text-headline-md text-primary mb-4">{domain.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {domain.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
