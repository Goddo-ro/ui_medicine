import { Auth } from '@/features/auth';
import { Search } from '@/features/search';

import AppIcon from '@/shared/icons/medicine.svg';

import DehazeIcon from '@mui/icons-material/Dehaze';

import classes from './Header.module.scss';

interface HeaderProps {
  toggleNavbarOpen: () => void;
}

export const Header = ({ toggleNavbarOpen }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <DehazeIcon
          onClick={toggleNavbarOpen}
          className={classes.navbarToggle}
        />
        <div className={classes.header__title}>
          <img src={AppIcon} alt='MedWiki' />
          <h1>MedWiki</h1>
        </div>
        <Search className={classes.search} />
        <Auth />
      </div>
    </header>
  );
};
