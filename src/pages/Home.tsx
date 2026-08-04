import { Hero } from "../components/home/Hero";
import { StatsSection } from "../components/home/StatsSection";
import { CoreDomainsSection } from "../components/home/CoreDomainsSection";
import { CtaSection } from "../components/home/CtaSection";

export function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <CoreDomainsSection />
      <CtaSection />
    </>
  );
}
