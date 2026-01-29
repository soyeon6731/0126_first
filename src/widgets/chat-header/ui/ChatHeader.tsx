'use client';

import React from 'react';

export function ChatHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FEFBF6] border-b-4 border-primary-300 relative overflow-hidden">
      {/* Pixel Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, #7C8CF8 0px, #7C8CF8 2px, transparent 2px, transparent 8px),
              repeating-linear-gradient(0deg, #7C8CF8 0px, #7C8CF8 2px, transparent 2px, transparent 8px)
            `,
            backgroundSize: '8px 8px'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo with Pixel Decoration */}
        <div className="flex items-center gap-3 relative">
          {/* Pixel Corner Decoration */}
          <div className="absolute -left-2 -top-2 w-2 h-2 bg-primary-500" />
          <div className="absolute -left-2 -bottom-2 w-2 h-2 bg-secondary-500" />

          {/* Music Note with Animation */}
          <div className="relative">
            <span className="text-4xl animate-bounce inline-block">🎵</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
          </div>

          <div>
            <h1 className="font-heading text-2xl text-primary-600 tracking-tight flex items-center gap-2">
              KURATION
              <span className="text-xs px-2 py-0.5 bg-secondary-200 text-secondary-700 rounded-md border-2 border-secondary-400">
                v1.0
              </span>
            </h1>
            <p className="text-xs text-neutral-600 font-medium flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-sm animate-pulse" />
              K-POP AI 큐레이터
            </p>
          </div>
        </div>

        {/* Stats Badge */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 border-3 border-primary-300 rounded-xl relative overflow-hidden">
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />

          <span className="text-lg animate-wiggle inline-block">✨</span>
          <span className="text-sm font-heading text-neutral-700 relative z-10">
            당신만을 위한 추천
          </span>
        </div>

        {/* Pixel Stars Decoration */}
        <div className="absolute right-4 top-1 text-yellow-400 text-xs animate-pulse">⭐</div>
        <div className="absolute right-12 bottom-1 text-pink-400 text-xs animate-pulse" style={{ animationDelay: '0.5s' }}>💫</div>
      </div>

      {/* Bottom Pixel Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400" />
    </header>
  );
}
