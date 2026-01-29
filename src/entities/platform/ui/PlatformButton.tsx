'use client';

import React from 'react';
import type { PlatformName } from '../model/types';
import { PLATFORMS } from '@/shared/config/constants';

interface PlatformButtonProps {
  platform: PlatformName;
  url: string;
}

export function PlatformButton({ platform, url }: PlatformButtonProps) {
  const config = PLATFORMS[platform];

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={`platform-button platform-button-${platform} flex-1 flex items-center justify-center gap-1`}
      aria-label={`Open in ${config.name}`}
    >
      <span className="text-sm">{config.emoji}</span>
      <span className="text-xs font-medium">{platform === 'youtube' ? 'YouTube' : 'Spotify'}</span>
    </button>
  );
}
