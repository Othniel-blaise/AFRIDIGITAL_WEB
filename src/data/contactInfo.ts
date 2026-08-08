import type { ContactChannel, OfficeHub } from "../types";

export const contactChannels: ContactChannel[] = [
  {
    icon: "mail",
    title: "Email",
    rows: [
      {
        label: "General inquiries:",
        value: "afridigital4@gmail.com",
        href: "mailto:afridigital4@gmail.com",
      },
      {
        label: "Technical support:",
        value: "afridigital4@gmail.com",
        href: "mailto:afridigital4@gmail.com",
      },
    ],
  },
  {
    icon: "call",
    title: "Phone",
    rows: [
      { label: "Côte d'Ivoire:", value: "+225 07 79 28 48 84" },
      { label: "Côte d'Ivoire:", value: "+225  07 89 88 60 13" },
    ],
  },
];

export const officeHubs: OfficeHub[] = [
  { city: "Côte d'Ivoire", address: "Grand-Bassam, Sud-Comoé" },

];
