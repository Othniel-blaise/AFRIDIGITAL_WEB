import { useState, type FormEvent } from "react";

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="mt-24 px-margin-mobile md:px-margin-desktop">
      <div className="bg-primary-container rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 connectivity-pattern opacity-10" />
        <div className="z-10">
          <h2 className="font-headline-lg text-headline-lg text-on-primary-container mb-2">
            Restez à la pointe de l'innovation
          </h2>
          <p className="text-on-primary-container opacity-80 max-w-lg">
            Inscrivez-vous à notre newsletter pour recevoir des analyses exclusives sur le marché
            technologique africain.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2 z-10">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="votre@email.com"
            aria-label="Votre adresse email"
            className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 outline-none focus:bg-white/20 transition-all flex-grow md:w-64 placeholder:text-white/50"
          />
          <button
            type="submit"
            className="bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all whitespace-nowrap"
          >
            {subscribed ? "Merci !" : "S'abonner"}
          </button>
        </form>
      </div>
    </section>
  );
}
