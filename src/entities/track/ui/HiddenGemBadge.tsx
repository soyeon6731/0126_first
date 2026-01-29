'use client';

import React from 'react';

export function HiddenGemBadge() {
  return (
    <div className="absolute -top-3 -right-3 z-10">
      <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-2.5 border-3 border-yellow-700 animate-pulse shadow-[0_4px_0_0_rgba(202,138,4,1)]">
        <span className="text-xl drop-shadow-sm">💎</span>

        {/* Pixel corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-yellow-300" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-yellow-800" />

        {/* Sparkle effect */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping" />
      </div>
    </div>
  );
}
