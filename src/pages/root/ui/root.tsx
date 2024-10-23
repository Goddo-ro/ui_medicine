import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className='app'>
      <Header />
      <div className='app__content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
