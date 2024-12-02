import { addMessage } from '@/widgets/messagesProvider/store/slice';

import { useAppDispatch } from '@/shared/lib/store';

export const useMessage = () => {
  const dispatch = useAppDispatch();

  const showMessage = (
    message: string,
    type: 'info' | 'success' | 'error' = 'info',
    duration: number = 3000,
  ) => {
    const id = 'id' + Math.random().toString(16).slice(2);
    dispatch(addMessage({ id, message, type, duration }));
  };

  return showMessage;
};
