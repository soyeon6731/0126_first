'use client';

import React from 'react';
import { ChatHeader } from '@/widgets/chat-header';
import { MessageList } from '@/widgets/message-list';
import { MessageInput } from '@/features/send-message';

export function ChatPage() {
  return (
    <div className="min-h-screen bg-[#FEFBF6] relative overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="fixed top-32 left-8 text-3xl opacity-20 animate-bounce pointer-events-none" style={{ animationDuration: '3s' }}>
        🎵
      </div>
      <div className="fixed top-48 right-12 text-2xl opacity-20 animate-bounce pointer-events-none" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        🎶
      </div>
      <div className="fixed bottom-48 left-16 text-xl opacity-20 animate-pulse pointer-events-none">
        💿
      </div>
      <div className="fixed top-2/3 right-8 text-2xl opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}>
        🎧
      </div>

      {/* Header */}
      <ChatHeader />

      {/* Main Content */}
      <main className="pt-24 pb-32 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <MessageList />
        </div>
      </main>

      {/* Input Bar */}
      <MessageInput />
    </div>
  );
}
