import { useState } from 'react';
import { ZodError } from 'zod';

import { loginData } from '@/pages/login/model/login-schema';

import { IFieldError } from '@/shared/fieldError/fieldError';
import { Button } from '@/shared/ui/button/Button';
import { Input } from '@/shared/ui/input/Input';

import classes from './LoginPage.module.scss';

export const LoginPage = () => {
  const [errors, setErrors] = useState<IFieldError[]>([]);

  const validate = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    try {
      loginData.parse(data);
      setErrors([]);
      console.debug('Successful parse');
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const fieldErrors: IFieldError[] = error.errors.map((err) => ({
          message: err.message,
          fieldName: err.path[0]?.toString() || '',
        }));
        setErrors(fieldErrors);
      } else {
        console.error('Unexpected validation error:', error);
      }
    }
  };

  return (
    <div className={classes.formContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validate(new FormData(e.currentTarget));
        }}
        className={classes.form}
      >
        <h2 className={classes.form__title}>Вход в аккаунт</h2>
        <Input
          type='input'
          label='Почта'
          id='email'
          name='email'
          required
          error={errors.find((error) => error.fieldName === 'email')?.message}
        />

        <Input
          label='Пароль'
          type='password'
          id='password'
          name='password'
          error={
            errors.find((error) => error.fieldName === 'password')?.message
          }
          required
        />

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};
