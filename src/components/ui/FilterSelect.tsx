"use client";

import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

/**
 * Brand-styled select. Removes the native arrow and replaces it with a
 * hand-drawn Noir chevron, Noir border to match the rest of the form controls.
 */
export default function Select({ options, className = "", ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={`
          w-full appearance-none rounded-[2px] border border-[#1C1916]
          bg-[#F5F1E7] px-3 py-2.5 pr-9 text-sm text-[#1C1916]
          focus:outline-none focus:ring-1 focus:ring-[#B4915A]
          ${className}
        `}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-1.5 w-2.5"
        viewBox="0 0 10 6"
        fill="none"
      >
        <path d="M0 0l5 6 5-6z" fill="#1C1916" />
      </svg>
    </div>
  );
}
