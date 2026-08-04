import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function CtaSection() {
  return (
    <Reveal as="section" className="py-20 px-margin-mobile md:px-margin-desktop mb-24">
      <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center flex flex-col items-center">
        <div className="absolute inset-0 tech-pattern opacity-10" />
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="font-headline-xl text-headline-xl text-on-primary">
            Prêt à réinventer votre futur ?
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl">
            Rejoignez les entreprises qui dominent déjà leur marché grâce à nos solutions
            technologiques de pointe.
          </p>
          <Button to="/contact" variant="inverse" size="pill">
            Contactez-nous aujourd'hui
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
