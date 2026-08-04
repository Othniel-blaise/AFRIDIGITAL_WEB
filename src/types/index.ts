export interface NavLink {
  label: string;
  path: string;
}

export interface Stat {
  value: string;
  label: string;
  variant: "glass" | "primary" | "secondary";
}

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

export interface CoreDomain {
  icon: string;
  title: string;
  description: string;
  accent: "primary" | "secondary";
}

export interface ServiceOffering {
  icon: string;
  title: string;
  description: string;
}

export interface ContactChannel {
  icon: string;
  title: string;
  rows: { label: string; value: string; href?: string }[];
}

export interface OfficeHub {
  city: string;
  address: string;
}

export type SubmitStatus = "idle" | "sending" | "sent";
