import { loginThunk, selectAuth } from '@/entities/viewer';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { loginData } from '@/pages/login/model/login-schema';

import { IFieldError } from '@/shared/fieldError/fieldError';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { ERoute } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/button/Button';
import { Form } from '@/shared/ui/form/Form';
import { Input } from '@/shared/ui/input/Input';
import { errorParser } from '@/shared/zod/errorParser';

export const LoginPage = () => {
  const [errors, setErrors] = useState<IFieldError[]>([]);

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectAuth);

  if (isAuth) return <Navigate to={ERoute.medkit} replace />;

  const handleLogin = (email: string, password: string) => {
    dispatch(loginThunk({ email, password }));
  };

  const validate = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    try {
      const { email, password } = loginData.parse(data);
      setErrors([]);
      handleLogin(email, password);
    } catch (error: unknown) {
      errorParser(
        error,
        (errors) => setErrors(errors),
        (error) => {
          console.error('Unexpected validation error:', error);
        },
      );
    }
  };

  // TODO: loader while auth checking

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        validate(new FormData(e.currentTarget));
      }}
      title='Вход в аккаунт'
    >
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
        error={errors.find((error) => error.fieldName === 'password')?.message}
        required
      />

      <Button type='submit'>Войти</Button>
    </Form>
  );
};
