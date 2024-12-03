import { Outlet } from 'react-router-dom';

import { Fixed } from '@/pages/root/ui/Fixed';

export const Root = () => {
  return (
    <div className='app'>
      <Fixed />
      <main className='app__content'>
        <Outlet />
      </main>
    </div>
  );
};
