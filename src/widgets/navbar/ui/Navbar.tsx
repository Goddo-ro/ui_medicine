import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { navLinks } from '@/shared/consts/navLinks';

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
  return <nav className={classes.navbar}>{links}</nav>;
};
