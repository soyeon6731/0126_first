'use client';

import React from 'react';

export function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 max-w-[85%]">
      {/* Bot Avatar - Pixel Style */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center flex-shrink-0 border-3 border-primary-400 shadow-[2px_2px_0px_rgba(124,140,248,0.4)]">
        <span className="text-xl">🎵</span>
        {/* Pixel corner */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-primary-500 rounded-tl-lg" />
      </div>

      {/* Typing Animation */}
      <div className="message-bubble-bot">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
