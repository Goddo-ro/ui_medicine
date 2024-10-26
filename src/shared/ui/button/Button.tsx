import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import classes from './Button.module.scss';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={clsx(classes.button, props.className)}>
      {props.children}
    </button>
  );
};
