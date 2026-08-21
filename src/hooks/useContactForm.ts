import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import type { SubmitStatus } from "../types";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../lib/emailjs";

/** Sends the contact form through EmailJS, using the form's own input `name`
 * attributes as the template variables (name, email, subject, message). */
export function useContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending" || !formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return { status, formRef, handleSubmit };
}
