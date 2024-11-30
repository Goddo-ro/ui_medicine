import { FormEventHandler, PropsWithChildren } from 'react';

import classes from './Form.module.scss';

interface FormProps extends PropsWithChildren {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  title?: string;
}

// TODO: loading

export const Form = ({ onSubmit, title, children }: FormProps) => {
  return (
    <div className={classes.formContainer}>
      <form onSubmit={onSubmit} className={classes.form}>
        {title && <h2 className={classes.form__title}>{title}</h2>}
        {children}
      </form>
    </div>
  );
};
