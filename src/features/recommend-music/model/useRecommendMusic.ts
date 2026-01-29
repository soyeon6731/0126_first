import { useState } from 'react';
import { useMessageStore } from '@/entities/message';
import { getRecommendations } from '../api/recommendApi';
import { ERROR_MESSAGES } from '@/shared/config/constants';
import { useToast } from '@/hooks/use-toast';

export function useRecommendMusic() {
  const { addMessage, setLoading } = useMessageStore();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const recommend = async (userPrompt: string) => {
    if (!userPrompt.trim()) {
      return;
    }

    setIsProcessing(true);
    setLoading(true);

    try {
      // Add user message
      addMessage({
        role: 'user',
        content: userPrompt,
      });

      // Get recommendations from OpenAI + Supabase
      const tracks = await getRecommendations(userPrompt);

      // Add bot response with recommendations
      addMessage({
        role: 'bot',
        content: `${tracks.length}곡을 찾았어요! 마음에 드는 곡이 있으면 좋겠다 ✨`,
        recommendations: tracks,
      });
    } catch (error) {
      console.error('Error getting recommendations:', error);

      let errorMessage: string = ERROR_MESSAGES.GENERIC;
      if (error instanceof Error) {
        if (error.message === 'NO_RESULTS') {
          errorMessage = ERROR_MESSAGES.NO_RESULTS;
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = ERROR_MESSAGES.NETWORK;
        } else {
          errorMessage = ERROR_MESSAGES.LLM_FAILED;
        }
      }

      // Add error message
      addMessage({
        role: 'bot',
        content: errorMessage,
      });

      // Show toast notification
      toast({
        variant: 'destructive',
        description: errorMessage,
      });
    } finally {
      setIsProcessing(false);
      setLoading(false);
    }
  };

  return {
    recommend,
    isProcessing,
  };
}
