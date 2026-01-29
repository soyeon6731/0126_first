'use client';

import React from 'react';
import type { Message } from '../model/types';

interface UserMessageProps {
  message: Message;
}

export function UserMessage({ message }: UserMessageProps) {
  const { content, timestamp } = message;

  return (
    <div className="flex items-start gap-3 max-w-[85%] ml-auto flex-row-reverse">
      {/* User Avatar - Pixel Style */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-secondary-200 to-secondary-300 flex items-center justify-center flex-shrink-0 border-3 border-secondary-400 shadow-[2px_2px_0px_rgba(255,84,122,0.4)]">
        <span className="text-xl">😊</span>
        {/* Pixel corner */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-secondary-500 rounded-tr-lg" />
      </div>

      {/* Message Bubble */}
      <div className="flex flex-col gap-2">
        <div className="message-bubble-user">
          <p className="text-neutral-800 whitespace-pre-wrap">{content}</p>
        </div>

        {/* Timestamp */}
        <span className="text-xs text-neutral-500 mr-2 text-right" suppressHydrationWarning>
          {timestamp.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  );
}
