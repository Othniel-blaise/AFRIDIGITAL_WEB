import { contactChannels, officeHubs } from "../../data/contactInfo";
import { GlassCard } from "../ui/GlassCard";
import { MaterialIcon } from "../ui/MaterialIcon";

export function ContactInfoCards() {
  return (
    <div className="lg:col-span-4 flex flex-col gap-6">
      {contactChannels.map((channel) => (
        <GlassCard key={channel.title} className="p-8 rounded-xl interactive-hover transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
              <MaterialIcon name={channel.icon} />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">{channel.title}</h3>
          </div>
          {channel.rows.map((row, index) => (
            <div
              key={row.label}
              className={index > 0 ? "mt-4 pt-4 border-t border-outline-variant/30" : ""}
            >
              <p className="text-on-surface-variant mb-2">{row.label}</p>
              {row.href ? (
                <a className="text-secondary font-bold hover:underline" href={row.href}>
                  {row.value}
                </a>
              ) : (
                <span className="text-primary font-bold">{row.value}</span>
              )}
            </div>
          ))}
        </GlassCard>
      ))}

      <GlassCard className="p-8 rounded-xl interactive-hover transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
            <MaterialIcon name="location_on" />
          </div>
          <h3 className="font-headline-md text-headline-md text-primary">Hubs</h3>
        </div>
        <ul className="space-y-4">
          {officeHubs.map((hub) => (
            <li key={hub.city} className="flex flex-col">
              <span className="font-bold text-primary">{hub.city}</span>
              <span className="text-on-surface-variant text-sm">{hub.address}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}
