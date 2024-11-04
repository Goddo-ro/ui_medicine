import store from '@/app/store';
import { ru } from 'date-fns/locale';
import { PropsWithChildren } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <SkeletonTheme baseColor='#dfdfdf' highlightColor='#b9e5e8'>
        <BrowserRouter>
          <Provider store={store}>{children}</Provider>
        </BrowserRouter>
      </SkeletonTheme>
    </LocalizationProvider>
  );
};
