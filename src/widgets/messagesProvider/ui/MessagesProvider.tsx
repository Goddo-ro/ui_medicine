import { useMessagesAnimation } from '@/widgets/messagesProvider/model/useMessagesAnimation';
import { useMessagesProvider } from '@/widgets/messagesProvider/model/useMessagesProvider';
import clsx from 'clsx';

import classes from './MessagesProvider.module.scss';

export const MessagesProvider = () => {
  const { messages } = useMessagesProvider();
  const { isVisible } = useMessagesAnimation(messages);

  console.log(isVisible);

  return (
    <div className={clsx(classes.messages, { [classes.visible]: isVisible })}>
      {messages.map((message) => (
        <div
          className={clsx(classes.message, {
            [classes.success]: message.type === 'success',
            [classes.error]: message.type === 'error',
          })}
        >
          {message.message}
        </div>
      ))}
    </div>
  );
};
