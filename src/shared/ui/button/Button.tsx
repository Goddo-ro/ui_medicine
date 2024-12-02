import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import { CircularProgress } from '@mui/material';

import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({ isLoading, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={props.disabled || isLoading}
      className={clsx(classes.button, props.className)}
    >
      {isLoading ? <CircularProgress size={'1em'} /> : props.children}
    </button>
  );
};
