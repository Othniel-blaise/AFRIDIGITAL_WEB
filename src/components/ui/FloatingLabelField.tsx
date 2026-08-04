import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClasses =
  "peer w-full border-b-2 border-outline-variant bg-transparent py-2 outline-none focus:border-secondary transition-colors font-body-md";
const labelClasses =
  "absolute left-0 top-2 text-on-surface-variant pointer-events-none transition-all duration-200 font-label-sm uppercase " +
  "peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-secondary " +
  "peer-[&:not(:placeholder-shown)]:-translate-y-5 peer-[&:not(:placeholder-shown)]:scale-90";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export function FloatingLabelInput({ label, id, className = "", ...rest }: FieldProps) {
  return (
    <div className={`relative ${className}`}>
      <input id={id} placeholder=" " required className={fieldClasses} {...rest} />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
}

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
}

export function FloatingLabelTextarea({ label, id, className = "", ...rest }: TextareaFieldProps) {
  return (
    <div className={`relative ${className}`}>
      <textarea
        id={id}
        placeholder=" "
        required
        rows={4}
        className={`${fieldClasses} resize-none`}
        {...rest}
      />
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
}
