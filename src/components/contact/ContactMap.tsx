export function ContactMap() {
  return (
    <div className="h-[400px] rounded-xl overflow-hidden relative group">
      <div className="absolute inset-0 bg-surface-dim/40 backdrop-blur-[2px] z-10 flex items-center justify-center pointer-events-none">
        <div className="bg-surface p-6 rounded-xl shadow-xl flex flex-col items-center text-center max-w-xs">
          <span className="material-symbols-outlined text-4xl text-secondary mb-2">map</span>
          <h4 className="font-headline-md text-primary mb-1">Nos bureaux</h4>
          <p className="text-on-surface-variant text-sm">
            Cliquez pour explorer notre présence continentale
          </p>
        </div>
      </div>
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        role="img"
        aria-label="Carte de l'Afrique avec les bureaux AFRIDIGITAL à Lagos, Johannesburg et Nairobi"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCryAmwwsJMjq5p8gkiG5VsW0fuk-Ni0akHIWL8opfONVVYUjPrXulul8CfudU5eTy_RMlKnSct7I4EcILrZDQ2XcQo2cppggeecRGy2ggfPRiy5ZG9YAVGld_u6fOdQw6Te1nJeepgUa2zLbt4eKwhWcuqdd5mRnvV-OwLjP9XXZ-ewVBDqzeXkYUWDVeXmS0xmwmjsUKnqIdNynTb6L4vNb2qFflEEZjwVeGzCTsMsPuTa_pljiHzFhAKLfpWxTfiS54Z60Fb7bU')",
        }}
      />
    </div>
  );
}
