import store from '@/app/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

export const Providers = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
