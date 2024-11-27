import {
  checkAuth,
  logoutThunk,
  selectAuth,
  selectLoading,
} from '@/entities/viewer';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { paths } from '@/shared/routes/routes';

import { Skeleton } from '@mui/material';

import classes from './auth.module.scss';

export const Auth = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectAuth);
  const isLoading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <div className={classes.container}>
      {isLoading ? (
        <Skeleton className={classes.skeleton} />
      ) : (
        <>
          {isAuth ? (
            <button
              onClick={() => {
                dispatch(logoutThunk());
              }}
              className={classes.exit}
              aria-label='Exit'
            >
              Выйти
            </button>
          ) : (
            <AuthButtons />
          )}
        </>
      )}
    </div>
  );
};

const AuthButtons = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          clsx({ [classes.active]: isActive }, classes.button)
        }
        to={paths.login}
      >
        Логин
      </NavLink>
      <NavLink
        to={paths.register}
        className={({ isActive }) =>
          clsx(classes.button, classes.danger, { [classes.active]: isActive })
        }
      >
        Регистрация
      </NavLink>
    </>
  );
};
