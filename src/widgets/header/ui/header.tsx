import { Auth } from '@/features/auth';
import { Search } from '@/features/search';

import AppIcon from '@/shared/icons/medicine.svg';

import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__title}>
          <img src={AppIcon} alt='MedWiki' />
          <h1>MedWiki</h1>
        </div>
        <Search />
        <Auth />
      </div>
    </header>
  );
};
