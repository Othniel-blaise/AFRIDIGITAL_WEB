import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function ServicesCta() {
  return (
    <Reveal as="section" className="mt-32 px-margin-mobile md:px-margin-desktop">
      <GlassCard className="rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden border-2 border-primary/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
        <div className="relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-8 max-w-3xl mx-auto">
            Un projet technologique ? Nos experts africains vous accompagnent.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
            Ne laissez pas vos idées dormir. Discutons ensemble de la meilleure stratégie pour
            digitaliser votre succès.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              to="/contact"
              size="pill"
              icon="calendar_today"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Prendre rendez-vous
            </Button>
            <Button
              to="/contact"
              variant="outline-inverse"
              size="pill"
              icon="mail"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}
