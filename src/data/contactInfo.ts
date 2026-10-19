import type { ContactChannel, OfficeHub } from "../types";
import { CONTACT_EMAIL_GENERAL, CONTACT_EMAIL_SUPPORT } from "../lib/mailConfig";

export const contactChannels: ContactChannel[] = [
  {
    icon: "mail",
    title: "Email",
    rows: [
      {
        label: "General inquiries:",
        value: CONTACT_EMAIL_GENERAL,
        href: `mailto:${CONTACT_EMAIL_GENERAL}`,
      },
      {
        label: "Technical support:",
        value: CONTACT_EMAIL_SUPPORT,
        href: `mailto:${CONTACT_EMAIL_SUPPORT}`,
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
