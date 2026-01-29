import type { Track } from '@/entities/track';

export type MessageRole = 'user' | 'bot' | 'system';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  recommendations?: Track[];
}
