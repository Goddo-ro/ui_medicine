import store from '@/app/store';
import { PropsWithChildren } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SkeletonTheme baseColor='#7ab2d3' highlightColor='#b9e5e8'>
      <Provider store={store}>{children}</Provider>
    </SkeletonTheme>
  );
};
