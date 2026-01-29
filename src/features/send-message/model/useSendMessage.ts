import { useState } from 'react';
import { useRecommendMusic } from '@/features/recommend-music';

export function useSendMessage() {
  const [inputValue, setInputValue] = useState('');
  const { recommend, isProcessing } = useRecommendMusic();

  const handleSend = async () => {
    if (!inputValue.trim() || isProcessing) {
      return;
    }

    const message = inputValue.trim();
    setInputValue(''); // Clear input immediately

    // Trigger recommendation
    await recommend(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isProcessing) {
      e.preventDefault();
      handleSend();
    }
  };

  return {
    inputValue,
    setInputValue,
    handleSend,
    handleKeyPress,
    isProcessing,
  };
}
