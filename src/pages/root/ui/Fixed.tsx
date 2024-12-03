import { Search } from '@/features/search';
import { Header } from '@/widgets/header';
import { Navbar } from '@/widgets/navbar';
import { useCallback, useState } from 'react';

import classes from './Root.module.scss';

export const Fixed = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbarOpen = useCallback(() => {
    setIsNavbarOpen((prev) => !prev);
  }, [setIsNavbarOpen]);

  return (
    <div className={classes.fixed}>
      <Header toggleNavbarOpen={toggleNavbarOpen} />
      <div className={classes.search}>
        <Search />
      </div>
      <Navbar isNavbarOpen={isNavbarOpen} toggleNavbarOpen={toggleNavbarOpen} />
    </div>
  );
};
