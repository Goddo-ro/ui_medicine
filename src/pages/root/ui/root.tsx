import { Header } from '@/widgets/header';
import { Navbar } from '@/widgets/navbar';
import { Outlet } from 'react-router-dom';

import classes from './Root.module.scss';

export const Root = () => {
  return (
    <div className='app'>
      <div className={classes.fixed}>
        <Header />
        <Navbar />
      </div>
      <main className='app__content'>
        <Outlet />
      </main>
    </div>
  );
};
