'use client';

import React from 'react';
import { QUICK_ACTIONS } from '@/shared/config/constants';

interface QuickActionChipsProps {
  onSelect: (query: string) => void;
  disabled?: boolean;
}

export function QuickActionChips({ onSelect, disabled = false }: QuickActionChipsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {QUICK_ACTIONS.map((action) => (
        <button
          key={action.label}
          onClick={() => onSelect(action.query)}
          disabled={disabled}
          className="quick-chip disabled:opacity-50 disabled:cursor-not-allowed relative group"
        >
          <span className="mr-1.5 inline-block group-hover:scale-110 transition-transform">{action.emoji}</span>
          <span>{action.label}</span>

          {/* Pixel corner decoration */}
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      ))}
    </div>
  );
}
