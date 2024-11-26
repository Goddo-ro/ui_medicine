import store from '@/app/store';
import { ru } from 'date-fns/locale';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <Provider store={store}>{children}</Provider>
    </LocalizationProvider>
  );
};
