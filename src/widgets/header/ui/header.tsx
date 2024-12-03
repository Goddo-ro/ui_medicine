import { Auth } from '@/features/auth';

import AppIcon from '@/shared/icons/medicine.svg';

import classes from './Header.module.scss';

export const Header = () => {
  // TODO: add searchbar

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__title}>
          <img src={AppIcon} alt='MedWiki' />
          <h1>MedWiki</h1>
        </div>
        <Auth />
      </div>
    </header>
  );
};
