'use client';

import React from 'react';
import { useSendMessage } from '../model/useSendMessage';

export function MessageInput() {
  const { inputValue, setInputValue, handleSend, handleKeyPress, isProcessing } =
    useSendMessage();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#FEFBF6] border-t-4 border-primary-300 p-4 z-40 relative">
      {/* Pixel Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, #FF547A 0px, #FF547A 2px, transparent 2px, transparent 8px),
              repeating-linear-gradient(0deg, #FF547A 0px, #FF547A 2px, transparent 2px, transparent 8px)
            `,
            backgroundSize: '8px 8px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto flex gap-3 items-center relative">
        {/* Decorative Corner Stars */}
        <div className="absolute -left-2 -top-8 text-2xl animate-bounce">⭐</div>

        {/* Input with Pixel Border */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="어떤 음악이 듣고 싶은지 말해줘 >_<"
            disabled={isProcessing}
            className="w-full px-5 py-3.5 bg-white border-4 border-neutral-300 rounded-2xl
                       focus:border-primary-500 focus:outline-none text-base font-body
                       disabled:opacity-50 disabled:cursor-not-allowed
                       placeholder:text-neutral-400 transition-all
                       shadow-[4px_4px_0px_rgba(0,0,0,0.1)]
                       focus:shadow-[6px_6px_0px_rgba(124,140,248,0.3)]"
          />
          {/* Input corner decoration */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-primary-400 rounded-tr-2xl" />
        </div>

        {/* Send Button - Game Boy Style */}
        <button
          onClick={handleSend}
          disabled={!inputValue.trim() || isProcessing}
          className="relative w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600
                     rounded-2xl flex items-center justify-center
                     border-4 border-secondary-700
                     hover:from-secondary-500 hover:to-secondary-700
                     active:translate-y-1 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed
                     shadow-[0_6px_0_0_rgba(230,55,93,1)]
                     hover:shadow-[0_8px_0_0_rgba(230,55,93,1)]
                     active:shadow-[0_2px_0_0_rgba(230,55,93,1)]"
          aria-label="Send message"
        >
          <span className="text-3xl drop-shadow-sm">💌</span>

          {/* Button highlight */}
          <div className="absolute top-1 left-1 w-6 h-6 bg-white/30 rounded-tl-xl rounded-br-full" />

          {/* Pixel corners */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-white/50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-black/20" />
        </button>

        {/* Decorative Hearts */}
        <div className="absolute -right-2 -top-8 text-xl animate-pulse">💗</div>
      </div>
    </div>
  );
}
