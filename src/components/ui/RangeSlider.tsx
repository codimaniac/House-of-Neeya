"use client";

import { InputHTMLAttributes } from "react";

interface RangeSliderProps extends InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  value: number;
}

/**
 * Brand-styled single-thumb range slider. Track fills Gold up to the current
 * value, thumb is a Noir circle with a Gold ring.
 *
 * Uses Tailwind's arbitrary-variant syntax to target the pseudo-elements
 * (`::-webkit-slider-thumb`, `::-moz-range-thumb`) directly, so no extra
 * CSS file is needed. Requires Tailwind v3.1+.
 */
export default function RangeSlider({ min, max, value, className = "", ...props }: RangeSliderProps) {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      style={{
        background: `linear-gradient(to right, #B4915A 0%, #B4915A ${percent}%, #E1D8C3 ${percent}%, #E1D8C3 100%)`,
      }}
      className={`
        h-[3px] w-full appearance-none rounded-full outline-none cursor-pointer
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:h-4
        [&::-webkit-slider-thumb]:w-4
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-[#1C1916]
        [&::-webkit-slider-thumb]:border-2
        [&::-webkit-slider-thumb]:border-[#B4915A]
        [&::-webkit-slider-thumb]:cursor-pointer
        [&::-moz-range-thumb]:h-4
        [&::-moz-range-thumb]:w-4
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-[#1C1916]
        [&::-moz-range-thumb]:border-2
        [&::-moz-range-thumb]:border-[#B4915A]
        [&::-moz-range-thumb]:cursor-pointer
        [&::-moz-range-progress]:bg-[#B4915A]
        [&::-moz-range-progress]:h-[3px]
        [&::-moz-range-progress]:rounded-full
        ${className}
      `}
      {...props}
    />
  );
}
