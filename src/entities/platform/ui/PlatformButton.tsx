'use client';

import React from 'react';
import type { PlatformName } from '../model/types';
import { PLATFORMS } from '@/shared/config/constants';
import { generatePlatformUrl } from '@/shared/lib/generatePlatformUrl';

interface PlatformButtonProps {
  platform: PlatformName;
  artist: string;
  title: string;
}

export function PlatformButton({ platform, artist, title }: PlatformButtonProps) {
  const config = PLATFORMS[platform];

  const handleClick = () => {
    const searchUrl = generatePlatformUrl(platform, artist, title);
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={`platform-button platform-button-${platform} flex-1 flex items-center justify-center gap-0.5`}
      aria-label={`Search "${title}" by ${artist} on ${config.name}`}
    >
      <span className="text-sm">{config.emoji}</span>
      <span className="text-xs font-medium">{platform === 'youtube' ? 'YT' : 'Spotify'}</span>
    </button>
  );
}
