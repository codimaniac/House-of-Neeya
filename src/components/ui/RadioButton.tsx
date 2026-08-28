"use client";

import { InputHTMLAttributes } from "react";

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

/**
 * Brand-styled radio button. Noir ring, Gold dot on select.
 * Group multiple instances with a shared `name` prop, same as native radios.
 */
export default function RadioButton({ label, className = "", ...props }: RadioButtonProps) {
  return (
    <label className={`flex items-center gap-2.5 text-sm cursor-pointer select-none ${className}`}>
      <span className="relative flex-shrink-0">
        <input type="radio" className="peer sr-only" {...props} />
        <span className="block h-4 w-4 rounded-full border-[1.4px] border-[#1C1916]" />
        <span
          className="
            pointer-events-none absolute inset-[3px] rounded-full bg-[#B4915A]
            opacity-0 peer-checked:opacity-100 transition-opacity
          "
        />
      </span>
      <span className="text-[#1C1916]">{label}</span>
    </label>
  );
}
