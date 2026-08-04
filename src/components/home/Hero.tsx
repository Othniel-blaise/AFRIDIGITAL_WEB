import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";
import { MaterialIcon } from "../ui/MaterialIcon";

const avatars = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlGgBWAV9gVVC8-JoP5ZoZBYLJiTHJVD5WoNZEjELMHdAv8ZKoDGkx-7MOrIPVXjXa7Mcn17-LXfNB8t9GSrEEcGimjF-XBcjp96kH6sdtjh-UtnAj3juULsPF8vLC7kedwPPnF2r46Fm-YsN1hYD5V3QFB8bwfNeCStNmElC0M-S8fjm_2myDmUnjl8DRGzG78hia0S2--u6NFhoGGfmskatPcs9hiD0o7I6KU8uQujuqWRAo2PJnVqQYqGqY1oHzOvkzypHVZGA",
    alt: "Cadre dirigeant d'entreprise à Lagos",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPYWPHAfyr2caA2dx7WCHaEjIrMNNLwFEeaHKlUGwEySpjsEVIm-she_cmBBPK6NpWI1Ksme3rC8j-upYB9NdUW_IAUf_V5JkyLi759-o6oW_fvOQh_3mM3pJEwcRfF9hy115POx7Znb2MaNjgzlDQTReg387Beu7oevIJY7YwhZ59DXvmBU0dPuU2Tqf3cX9jTIQ5ipJ8-nuokL7LsTGop9EWevt1phF0qATDVoYHjS52EhHwNNCvB5ukJvZIBRzsy6_d9prCqJw",
    alt: "Entrepreneur tech à Nairobi",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3qvSB0drMaNkEU7RgXTSztWRAlOrsUOJyQVgfEQhdhCY15Lic1iX2t2l0Nfw6EvZfdEyjTMvTnLxMZ7jW8ZjeaP3nLuvbdeaB4mEBveELn9VnPGxu5yzU7dPNfUsWhxVe1CrC3TYjZ6OQbt6x-ujDO9dMVRax62u4LsT7ohSDpHsqYZGunXbni3LfbxEh_bwKZ5ElhtGtHkBBHtOxzPXPUy5PRGXzJRs2DE9pQ-q3Lv2ifeKP5CqLVPskFyha-szdykwUuXwtS2I",
    alt: "Architecte digital à Johannesburg",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 tech-pattern -z-10 opacity-40" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest text-primary rounded-full w-fit">
            <MaterialIcon name="bolt" filled className="text-[18px]" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest">
              Innovation Technologique
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-primary leading-tight">
            Expertise Digitale <br />
            <span className="text-secondary">Sur-Mesure</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Propulsez votre croissance avec des solutions technologiques de pointe conçues pour le
            marché africain. Nous transformons vos défis complexes en avantages compétitifs
            durables.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button to="/contact">Démarrer un Projet</Button>
            <Button to="/services" variant="outline">
              Voir Nos Réalisations
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar) => (
                <div
                  key={avatar.alt}
                  className="w-10 h-10 rounded-full border-2 border-white bg-surface-dim overflow-hidden"
                >
                  <img className="w-full h-full object-cover" src={avatar.src} alt={avatar.alt} />
                </div>
              ))}
            </div>
            <span className="font-body-md text-on-surface-variant">
              Plus de 200 leaders nous font confiance
            </span>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <GlassCard className="rounded-[2rem] p-4 animate-float shadow-2xl relative z-10">
            <img
              className="rounded-2xl w-full h-[500px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaQ-KUG35tzML6zn5RqseELHAwd-Z7zqIP4pTO7bqqaSSaRgFsBTvIjLE0-9fZpxW62ijn5ZrgZaWUzFi2iG4pJ6ZGvXRcR21AwgFhv-bf1cOIm-FtTYKlaU_HnMVK91mV_0D_FTbxo2FtnZIZg3xoUDkVrCJIT9Z4mXUefNfxFOYypabQa2K6Ry7rWNBOopJawRHPg4-QqR8zN9edzycfFk38EruQTQpA5zcMW9L17ExnR2h1NvXdK6kk3xj2LDp_hNPANh12Dx8"
              alt="Tableau de bord analytique futuriste pour une entreprise technologique panafricaine"
            />
          </GlassCard>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-container rounded-3xl -z-10 opacity-20 rotate-12" />
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-container rounded-full -z-10 opacity-10" />
        </div>
      </div>
    </section>
  );
}
