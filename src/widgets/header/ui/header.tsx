import { Auth } from '@/features/auth';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { headerNavLinks } from '@/shared/consts/headerNavLinks';
import AppIcon from '@/shared/icons/medicine.svg';

import classes from './Header.module.scss';

export const Header = () => {
  const links = headerNavLinks.map((link) => (
    <NavLink
      key={link.to}
      {...link}
      className={({ isActive }) => clsx({ [classes.active]: isActive })}
    >
      {link.title}
    </NavLink>
  ));

  // TODO: add searchbar

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__title}>
          <img src={AppIcon} alt='MedWiki' />
          <h1>MedWiki</h1>
        </div>
        <nav className={classes.header__links}>{links}</nav>
        <Auth />
      </div>
    </header>
  );
};
