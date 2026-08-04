export function ServicesHero() {
  return (
    <header className="px-margin-mobile md:px-margin-desktop mb-24 relative overflow-hidden">
      <div className="absolute inset-0 connectivity-pattern pointer-events-none" />
      <div className="relative z-10 max-w-4xl">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block">
          Notre Expertise
        </span>
        <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
          L'excellence technologique au service de{" "}
          <span className="text-secondary">l'émergence africaine</span>.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Nous transformons les défis complexes en solutions numériques fluides. AFRIDIGITAL
          combine la rigueur des standards internationaux avec une compréhension profonde des
          réalités locales pour propulser votre croissance.
        </p>
      </div>
    </header>
  );
}
