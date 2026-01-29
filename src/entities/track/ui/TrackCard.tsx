'use client';

import React from 'react';
import type { TrackWithLinks } from '../model/types';
import { PlatformButton } from '@/entities/platform';
import { HiddenGemBadge } from './HiddenGemBadge';

interface TrackCardProps {
  track: TrackWithLinks;
  isHiddenGem?: boolean;
  index?: number;
}

export function TrackCard({ track, isHiddenGem = false, index }: TrackCardProps) {
  const { title, artist, genres, mood_tags, track_platform_links } = track;

  return (
    <div
      className={`track-card ${isHiddenGem ? 'hidden-gem-card' : ''}`}
      style={{ animationDelay: `${(index || 0) * 0.1}s` }}
    >
      {/* Hidden Gem Badge */}
      {isHiddenGem && <HiddenGemBadge />}

      {/* Album Art Placeholder with Pixel Border - Fixed height instead of aspect-square */}
      <div className="relative overflow-hidden rounded-xl mb-2 bg-gradient-to-br from-primary-100 to-secondary-100 h-36 w-full border-3 border-primary-300 flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center text-5xl">
          🎵
        </div>
        {/* Pixel corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-primary-400" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary-400" />

        {/* Shine effect */}
        <div className="absolute top-2 left-2 w-8 h-8 bg-white/40 rounded-full blur-sm" />
      </div>

      {/* Content Area - grows to fill space */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {/* Track Info */}
        <h4 className="font-heading text-base text-neutral-900 mb-0.5 truncate leading-tight">
          {title}
        </h4>
        <p className="text-sm text-neutral-600 truncate mb-2 leading-tight">{artist}</p>

        {/* Genre & Mood Tags - Pixel Style - fixed height area */}
        <div className="flex flex-wrap gap-1 mb-2 h-7 content-start overflow-hidden">
          {genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded-lg text-xs font-heading border-2 border-primary-300 whitespace-nowrap h-fit"
            >
              {genre}
            </span>
          ))}
          {mood_tags.slice(0, 1).map((mood) => (
            <span
              key={mood}
              className="px-2 py-0.5 bg-secondary-100 text-secondary-700 rounded-lg text-xs font-heading border-2 border-secondary-300 whitespace-nowrap h-fit"
            >
              {mood}
            </span>
          ))}
        </div>

        {/* Spacer - takes remaining space */}
        <div className="flex-1 min-h-0" />

        {/* Platform Links - always at bottom, flex-shrink-0 */}
        <div className="flex gap-2 flex-shrink-0">
          {track_platform_links?.map((link) => (
            <PlatformButton
              key={link.id}
              platform={link.music_platforms.platform_name}
              url={link.external_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
