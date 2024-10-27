import { checkAuth, logout, selectAuth } from '@/entities/viewer';
import clsx from 'clsx';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { ERoute } from '@/shared/routes/routes';

import classes from './auth.module.scss';

export const Auth = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectAuth);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <div className={classes.container}>
      {isAuth ? (
        <button
          onClick={() => {
            logout();
          }}
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
  return (
    <>
      <Link to={ERoute.login} className={classes.button}>
        Войти
      </Link>
      <Link
        to={ERoute.register}
        className={clsx(classes.button, classes.danger)}
      >
        Зарегистрироваться
      </Link>
    </>
  );
};
