'use client';

import React, { useEffect, useRef } from 'react';
import { useMessageStore, BotMessage, UserMessage, TypingIndicator } from '@/entities/message';
import { RecommendationGrid } from '@/widgets/recommendation-grid';
import { QuickActionChips } from '@/features/recommend-music';
import { useRecommendMusic } from '@/features/recommend-music';

export function MessageList() {
  const { messages, isLoading } = useMessageStore();
  const { recommend, isProcessing } = useRecommendMusic();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div
      role="log"
      aria-live="polite"
      className="flex flex-col gap-6 pb-4"
    >
      {messages.map((message) => (
        <div key={message.id} className="flex flex-col gap-4">
          {/* Message Bubble */}
          {message.role === 'user' ? (
            <UserMessage message={message} />
          ) : (
            <BotMessage message={message} />
          )}

          {/* Recommendations Grid (if present) */}
          {message.recommendations && message.recommendations.length > 0 && (
            <RecommendationGrid tracks={message.recommendations} />
          )}
        </div>
      ))}

      {/* Typing Indicator */}
      {isLoading && <TypingIndicator />}

      {/* Quick Action Chips (show only for first message) */}
      {messages.length === 1 && !isLoading && (
        <div className="mt-4">
          <div className="relative inline-block mx-auto">
            <p className="text-center text-sm font-heading text-neutral-600 mb-4 px-4 py-2 bg-neutral-100 border-2 border-neutral-300 rounded-xl relative">
              또는 빠른 선택:
              <span className="ml-1 animate-bounce inline-block">👇</span>
              {/* Decorative pixel corners */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-primary-400 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-secondary-400 rounded-br-lg" />
            </p>
          </div>
          <QuickActionChips
            onSelect={recommend}
            disabled={isProcessing}
          />
        </div>
      )}

      {/* Scroll anchor */}
      <div ref={scrollRef} />
    </div>
  );
}
