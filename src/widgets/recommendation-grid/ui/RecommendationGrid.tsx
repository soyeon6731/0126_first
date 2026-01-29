'use client';

import React from 'react';
import type { Track } from '@/entities/track';
import { TrackCard } from '@/entities/track';
import { isHiddenGem } from '@/features/recommend-music';

interface RecommendationGridProps {
  tracks: Track[];
}

export function RecommendationGrid({ tracks }: RecommendationGridProps) {
  if (!tracks || tracks.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Summary - Pixel Art Style */}
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-br from-primary-50 to-secondary-50 border-3 border-primary-400 rounded-2xl relative shadow-[4px_4px_0px_rgba(124,140,248,0.3)]">
          {/* Pixel corners */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-primary-500 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-secondary-500 rounded-br-2xl" />

          <span className="text-2xl animate-bounce">✨</span>
          <span className="text-sm font-heading text-primary-700">
            {tracks.length}곡의 추천
          </span>

          {/* Decorative stars */}
          <div className="absolute -top-2 -left-2 text-xs animate-pulse">⭐</div>
          <div className="absolute -bottom-2 -right-2 text-xs animate-pulse" style={{ animationDelay: '0.3s' }}>💫</div>
        </div>
      </div>

      {/* Grid */}
      <div className="recommendations-grid">
        {tracks.map((track, index) => (
          <TrackCard
            key={track.id}
            track={track}
            isHiddenGem={isHiddenGem(track)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
