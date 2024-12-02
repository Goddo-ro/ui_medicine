import { MessageModel } from '@/widgets/messagesProvider/model/types';
import { useEffect, useState } from 'react';

export const useMessagesAnimation = (messages: MessageModel[]) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (messages.length > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [messages]);

  return { isVisible };
};
