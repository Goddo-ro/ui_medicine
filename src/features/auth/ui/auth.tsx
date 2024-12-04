import { logout, selectAuth } from '@/entities/viewer';
import clsx from 'clsx';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { auth } from '@/shared/api';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { paths } from '@/shared/routes';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Menu } from '@mui/material';

import classes from './Auth.module.scss';

export const Auth = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectAuth);

  return (
    <div className={classes.container}>
      {isAuth ? (
        <button
          onClick={async () => {
            await auth.signOut();
            dispatch(logout());
          }}
          className={classes.exit}
          aria-label='Exit'
        >
          Выйти
        </button>
      ) : (
        <AuthButtons />
      )}
    </div>
  );
};

const AuthButtons = () => {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AccountCircleOutlinedIcon
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        fontSize='large'
      />
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className={classes.authButtonsContainer}>
          <NavLink
            className={({ isActive }) =>
              clsx({ [classes.active]: isActive }, classes.button)
            }
            to={paths.login}
          >
            Войти
          </NavLink>
          <NavLink
            to={paths.register}
            className={({ isActive }) =>
              clsx(classes.button, classes.danger, {
                [classes.active]: isActive,
              })
            }
          >
            Зарегистрироваться
          </NavLink>
        </div>
      </Menu>
    </>
  );
};
