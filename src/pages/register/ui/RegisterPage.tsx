import { registerThunk, selectAuth } from '@/entities/viewer';
import { IAuthData, IRegister } from '@/entities/viewer/model/types';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { registerData } from '@/pages/register/model/register.schema';

import { IFieldError } from '@/shared/fieldError/fieldError';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { ERoute } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/button/Button';
import { Form } from '@/shared/ui/form/Form';
import { Input } from '@/shared/ui/input/Input';
import { errorParser } from '@/shared/zod/errorParser';

export const RegisterPage = () => {
  const [errors, setErrors] = useState<IFieldError[]>([]);

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectAuth);
  const navigate = useNavigate();

  if (isAuth) return <Navigate to={ERoute.medkit} replace />;

  const handleRegister = (email: string, password: string) => {
    dispatch(registerThunk({ email, password })).then(() => {
      navigate(ERoute.login);
    });
  };

  const validate = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    try {
      const { email, password } = registerData.parse(data);
      setErrors([]);
      handleRegister(email, password);
      console.debug('Successful parse');
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

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        validate(new FormData(e.currentTarget));
      }}
      title='Регистрация'
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

      <Input
        label='Подтвердите пароль'
        type='password'
        id='confirmPassword'
        name='confirmPassword'
        error={
          errors.find((error) => error.fieldName === 'confirmPassword')?.message
        }
        required
      />

      <Button type='submit'>Войти</Button>
    </Form>
  );
};
