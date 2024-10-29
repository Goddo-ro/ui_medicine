import store from '@/app/store';
import { PropsWithChildren } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SkeletonTheme baseColor='#7ab2d3' highlightColor='#b9e5e8'>
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    </SkeletonTheme>
  );
};
