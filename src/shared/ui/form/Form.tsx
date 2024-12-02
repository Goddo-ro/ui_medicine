import clsx from 'clsx';
import { FormEventHandler, PropsWithChildren } from 'react';

import classes from './Form.module.scss';

interface FormProps extends PropsWithChildren {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  title?: string;
  isLoading?: boolean;
}

export const Form = ({ onSubmit, title, isLoading, children }: FormProps) => {
  return (
    <div
      className={clsx(classes.formContainer, { [classes.loading]: isLoading })}
    >
      <form onSubmit={onSubmit} className={classes.form}>
        {title && <h2 className={classes.form__title}>{title}</h2>}
        {children}
      </form>
    </div>
  );
};
