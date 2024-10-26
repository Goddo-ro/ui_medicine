import { FormEventHandler, PropsWithChildren } from 'react';

import classes from './Form.module.scss';

interface IFormProps extends PropsWithChildren {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  title?: string;
}

export const Form = ({ onSubmit, title, children }: IFormProps) => {
  return (
    <div className={classes.formContainer}>
      <form onSubmit={onSubmit} className={classes.form}>
        {title && <h2 className={classes.form__title}>{title}</h2>}
        {children}
      </form>
    </div>
  );
};
