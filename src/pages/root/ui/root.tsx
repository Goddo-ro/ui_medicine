import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <main className='app'>
      <Header />
      <section className='app__content'>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};
