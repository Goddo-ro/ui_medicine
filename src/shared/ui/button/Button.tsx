import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import { CircularProgress } from '@mui/material';

import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={props.disabled || props.isLoading}
      className={clsx(classes.button, props.className)}
    >
      {props.isLoading ? <CircularProgress size={'1em'} /> : props.children}
    </button>
  );
};
