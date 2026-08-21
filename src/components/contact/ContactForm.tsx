import { useContactForm } from "../../hooks/useContactForm";
import { FloatingLabelInput, FloatingLabelTextarea } from "../ui/FloatingLabelField";
import { MaterialIcon } from "../ui/MaterialIcon";

const buttonContent = {
  idle: { label: "Envoyer le message", icon: "send", spin: false },
  sending: { label: "Envoi en cours...", icon: "sync", spin: true },
  sent: { label: "Message envoyé !", icon: "check_circle", spin: false },
  error: { label: "Échec, réessayez", icon: "error", spin: false },
} as const;

export function ContactForm() {
  const { status, formRef, handleSubmit } = useContactForm();
  const { label, icon, spin } = buttonContent[status];

  return (
    <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/30">
      <form ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
        <FloatingLabelInput id="name" name="name" type="text" label="Nom Complet" />
        <FloatingLabelInput id="email" name="email" type="email" label="Email Professionnel" />
        <FloatingLabelInput
          id="subject"
          name="subject"
          type="text"
          label="Sujet de votre demande"
          className="md:col-span-2"
        />
        <FloatingLabelTextarea
          id="message"
          name="message"
          label="Votre Message"
          className="md:col-span-2"
        />

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={status === "sending"}
            className={`px-10 py-4 rounded-lg font-headline-md flex items-center gap-2 group transition-all shadow-lg shadow-primary/20 disabled:opacity-80 ${
              status === "sent" ? "bg-green-600" : status === "error" ? "bg-red-600" : "bg-primary"
            } text-on-primary hover:-translate-y-1`}
          >
            {label}
            <MaterialIcon
              name={icon}
              className={`${spin ? "animate-spin" : ""} group-hover:translate-x-1 transition-transform`}
            />
          </button>
        </div>
      </form>
    </div>
  );
}
