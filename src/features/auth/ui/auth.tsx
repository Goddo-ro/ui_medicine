import {
  checkAuth,
  logoutThunk,
  selectAuth,
  selectLoading,
} from '@/entities/viewer';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { ERoute } from '@/shared/routes/routes';

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
      <Link to={ERoute.login} className={classes.button}>
        Логин
      </Link>
      <Link
        to={ERoute.register}
        className={clsx(classes.button, classes.danger)}
      >
        Регистрация
      </Link>
    </>
  );
};
