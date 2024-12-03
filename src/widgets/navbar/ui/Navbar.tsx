import { navLinks } from '@/widgets/navbar/model/links';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.scss';

export const Navbar = () => {
  const links = navLinks.map((link) => (
    <NavLink
      key={link.to}
      {...link}
      className={({ isActive }) => clsx({ [classes.active]: isActive })}
    >
      {link.title}
    </NavLink>
  ));
  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>{links}</nav>
    </div>
  );
};
