export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Explorer",
    links: [
      { label: "Services", href: "/services" },
      { label: "Projets", href: "#" },
      { label: "Études de cas", href: "#" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "À propos", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Actualités", href: "#" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];
