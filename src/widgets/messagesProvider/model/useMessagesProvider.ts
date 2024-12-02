import { selectMessages } from '@/widgets/messagesProvider/store/selectors';
import { removeMessage } from '@/widgets/messagesProvider/store/slice';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib/store';

export const useMessagesProvider = () => {
  const messages = useAppSelector(selectMessages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timers: Record<string, NodeJS.Timeout> = {};

    messages.forEach((message) => {
      if (message.duration) {
        timers[message.id] = setTimeout(() => {
          dispatch(removeMessage(message.id));
        }, message.duration ?? 1000);
      }
    });

    return () => {
      Object.values(timers).forEach(clearTimeout);
    };
  }, [messages, dispatch]);

  return { messages };
};
