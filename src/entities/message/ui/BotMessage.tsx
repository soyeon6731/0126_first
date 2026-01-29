'use client';

import React from 'react';
import type { Message } from '../model/types';

interface BotMessageProps {
  message: Message;
}

export function BotMessage({ message }: BotMessageProps) {
  const { content, timestamp } = message;

  return (
    <div className="flex items-start gap-3 max-w-[85%]">
      {/* Bot Avatar - Pixel Style */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center flex-shrink-0 border-3 border-primary-400 shadow-[2px_2px_0px_rgba(124,140,248,0.4)]">
        <span className="text-xl">🎵</span>
        {/* Pixel corner */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-primary-500 rounded-tl-lg" />
      </div>

      {/* Message Bubble */}
      <div className="flex flex-col gap-2">
        <div className="message-bubble-bot">
          <p className="text-neutral-800 whitespace-pre-wrap">{content}</p>
        </div>

        {/* Timestamp */}
        <span className="text-xs text-neutral-500 ml-2" suppressHydrationWarning>
          {timestamp.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}
