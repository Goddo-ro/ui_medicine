import clsx from 'clsx';

import classes from './Error.module.scss';

interface ErrorProps {
  errorText: string;
  className?: string;
}

export const Error = ({ errorText, className }: ErrorProps) => {
  return <div className={clsx(className, classes.error)}>{errorText}</div>;
};
