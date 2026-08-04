import { useRef, useState, type FormEvent } from "react";
import type { SubmitStatus } from "../types";

/** Reproduces the original front-end-only submit simulation (spinner then
 * success state) as a proper React state machine instead of raw DOM mutation. */
export function useContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const formRef = useRef<HTMLFormElement | null>(null);
  const resetTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== "idle") return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      formRef.current?.reset();
      resetTimeout.current = setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return { status, formRef, handleSubmit };
}
