import clsx from 'clsx';
import { useState } from 'react';

import { InputProps } from '@/shared/ui/input/types';

import classes from './Input.module.scss';

export const Input = ({
  label,
  error,
  containerClassname,
  id,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={clsx(classes.wrapper, containerClassname)}>
      <div className={classes.fieldWrapper}>
        <label
          htmlFor={id}
          className={clsx(classes.label, { [classes.focused]: isFocused })}
        >
          {label}
        </label>
        <input
          id={id}
          {...rest}
          onFocus={(event) => {
            setIsFocused(true);
            rest.onFocus && rest.onFocus(event);
          }}
          onBlur={(event) => {
            setIsFocused(event.target.value !== '');
            rest.onBlur && rest.onBlur(event);
          }}
          placeholder=''
          className={clsx(classes.field, rest.className, {
            [classes.error]: error,
          })}
        />
      </div>
      {error && <span className={classes.errorText}>{error}</span>}
    </div>
  );
};
