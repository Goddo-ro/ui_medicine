import { Header } from '@/widgets/header';
import { Navbar } from '@/widgets/navbar';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className='app'>
      <Header />
      <main className='app__content'>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};
