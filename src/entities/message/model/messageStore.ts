import { create } from 'zustand';
import type { Message } from './types';

interface MessageStore {
  messages: Message[];
  isLoading: boolean;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setLoading: (loading: boolean) => void;
  clearMessages: () => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [
    {
      id: 'welcome',
      role: 'bot',
      content: `안녕! 🎵 나는 K-POP AI 큐레이터야!

지금 기분이나 상황을 자유롭게 말해줘:
• "퇴근하고 집에 가는 중이야"
• "운동할 때 듣고 싶어"
• "기분 전환이 필요해"
• "비 오는 날 감성적인 거"
• "뭔가 신나는 노래!"

어떤 식으로 말해도 괜찮아! 😊`,
      timestamp: new Date(),
    },
  ],
  isLoading: false,

  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: `msg-${Date.now()}-${Math.random()}`,
          timestamp: new Date(),
        },
      ],
    })),

  setLoading: (loading) => set({ isLoading: loading }),

  clearMessages: () =>
    set({
      messages: [
        {
          id: 'welcome',
          role: 'bot',
          content: `안녕! 🎵 나는 K-POP AI 큐레이터야!

지금 기분이나 상황을 자유롭게 말해줘:
• "퇴근하고 집에 가는 중이야"
• "운동할 때 듣고 싶어"
• "기분 전환이 필요해"
• "비 오는 날 감성적인 거"
• "뭔가 신나는 노래!"

어떤 식으로 말해도 괜찮아! 😊`,
          timestamp: new Date(),
        },
      ],
    }),
}));
