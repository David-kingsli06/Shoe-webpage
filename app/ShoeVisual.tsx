"use client";

import React, { useState } from "react";

interface ShoeVisualProps {
  id: string;
  imageSrc?: string;
  name: string;
  accentColor: string;
  glowColor: string;
  isDetailed?: boolean;
}

export function ShoeVisual({
  imageSrc,
  name,
  isDetailed = false,
}: ShoeVisualProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative flex items-end justify-center select-none w-full ${
        isDetailed ? "h-[320px] md:h-[420px]" : "h-32 md:h-36"
      }`}
    >
      {/* Main Shoe Image - sits snugly right on top of the pedestal */}
      {imageSrc && !imageError ? (
        <div
          className={`relative z-10 w-full h-full flex items-end justify-center transition-transform duration-300 ease-out ${
            isDetailed ? "hover:scale-[1.02]" : "group-hover:scale-105"
          }`}
        >
          <img
            src={imageSrc}
            alt={name}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain object-bottom pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
          />
        </div>
      ) : (
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <svg
            viewBox="0 0 320 180"
            className="w-full h-full filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 135 C70 138, 120 140, 180 138 C230 136, 270 132, 290 120 C295 105, 275 80, 240 70 C210 62, 180 65, 150 50 C130 40, 110 35, 95 45 C80 55, 65 90, 45 105 C35 115, 30 130, 40 135 Z"
              fill="#27272a"
              stroke="#52525b"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
