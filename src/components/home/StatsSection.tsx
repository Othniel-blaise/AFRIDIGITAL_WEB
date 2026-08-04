import { stats, valueProps } from "../../data/stats";
import { MaterialIcon } from "../ui/MaterialIcon";
import { Reveal } from "../ui/Reveal";

const statVariantClasses = {
  glass: "glass-card text-primary shadow-sm",
  primary: "bg-primary text-on-primary shadow-xl",
  secondary: "bg-secondary text-on-secondary shadow-xl",
} as const;

export function StatsSection() {
  return (
    <Reveal as="section" className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Pourquoi Choisir AFRIDIGITAL ?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Notre mission est d'accélérer la transformation numérique du continent en fournissant
              une excellence technique sans compromis. Nous combinons compréhension locale et
              standards internationaux.
            </p>
            <div className="flex flex-col gap-4">
              {valueProps.map((prop) => (
                <div key={prop.title} className="flex gap-4 items-start">
                  <MaterialIcon
                    name={prop.icon}
                    className="text-secondary bg-secondary-fixed p-2 rounded-lg"
                  />
                  <div>
                    <h4 className="font-headline-md text-body-md font-bold">{prop.title}</h4>
                    <p className="font-body-md text-on-surface-variant">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-gutter-desktop">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ${
                  statVariantClasses[stat.variant]
                } ${index === 1 ? "mt-8" : index === 2 ? "-mt-8" : ""}`}
              >
                <span className="font-headline-xl text-headline-xl block">{stat.value}</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider opacity-80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
