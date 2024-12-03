import { navLinks } from '@/widgets/navbar/model/links';
import clsx from 'clsx';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useWindowWidth } from '@/shared/lib/hooks';
import { breakpoint } from '@/shared/styleBreakpoints';

import { Menu } from '@mui/material';

import classes from './Navbar.module.scss';

interface NavbarProps {
  isNavbarOpen?: boolean;
  toggleNavbarOpen?: () => void;
}

export const Navbar = ({ isNavbarOpen, toggleNavbarOpen }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const windowWidth = useWindowWidth();

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
      {windowWidth < breakpoint ? (
        <>
          <div
            id='navbar-anchor'
            aria-controls={isNavbarOpen ? 'navbar-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={isNavbarOpen ? 'true' : undefined}
            ref={(node) => {
              setAnchorEl(node);
            }}
          />
          <Menu
            open={!!isNavbarOpen}
            id='navbar-menu'
            anchorEl={anchorEl}
            onClose={toggleNavbarOpen}
            MenuListProps={{
              'aria-labelledby': 'navbar-anchor',
            }}
            PopoverClasses={{
              paper: classes.paper,
            }}
          >
            <nav className={classes.navbar}>{links}</nav>
          </Menu>
        </>
      ) : (
        <nav className={classes.navbar}>{links}</nav>
      )}
    </div>
  );
};
