import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className='app'>
      <Header />
      <main className='app__content'>
        <Outlet />
      </main>
    </div>
  );
};
