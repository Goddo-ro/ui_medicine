import { Link } from 'react-router-dom';

import NotFoundIcon from '@/shared/icons/not-found.svg';
import { paths } from '@/shared/routes';

import classes from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img
          className={classes.notFoundIcon}
          src={NotFoundIcon}
          alt='Not found image'
        />
        <h1 className={classes.title}>Нет такой страницы</h1>
        <p>Мы искали везде, но не нашли эту страницу.</p>
        <p>Может быть, веб-адрес не верен?</p>
        <p>Обратитесь к владельцу сайта.</p>
        <Link className={classes.button} to={paths.medicines}>
          На главную
        </Link>
      </div>
    </div>
  );
};
