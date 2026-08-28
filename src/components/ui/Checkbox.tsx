"use client";

import { InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

/**
 * Brand-styled checkbox. Replaces the native browser checkbox with a
 * Noir-bordered box that fills Gold + a check mark on select.
 *
 * Swap the hex values below for theme tokens (e.g. `bg-noir`, `border-noir`)
 * once they're added to tailwind.config.
 */
export default function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label className={`flex items-center gap-2.5 text-sm cursor-pointer select-none ${className}`}>
      <span className="relative flex-shrink-0">
        <input type="checkbox" className="peer sr-only" {...props} />
        <span
          className="
            block h-4 w-4 rounded-[2px] border-[1.4px] border-[#1C1916]
            peer-checked:bg-[#B4915A] peer-checked:border-[#B4915A]
            transition-colors
          "
        />
        <svg
          className="pointer-events-none absolute left-[3px] top-[3px] h-[9px] w-[7px] opacity-0 peer-checked:opacity-100 transition-opacity"
          viewBox="0 0 7 9"
          fill="none"
        >
          <path d="M1 4.5L2.8 6.5L6 1.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[#1C1916]">{label}</span>
    </label>
  );
}
