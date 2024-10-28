import { login as loginAction } from '@/entities/viewer';
import { useState } from 'react';

import { login } from '@/pages/login/api/login';
import { loginData } from '@/pages/login/model/login-schema';

import { IFieldError } from '@/shared/fieldError/fieldError';
import { useAppDispatch } from '@/shared/lib/store';
import { Button } from '@/shared/ui/button/Button';
import { Form } from '@/shared/ui/form/Form';
import { Input } from '@/shared/ui/input/Input';
import { errorParser } from '@/shared/zod/errorParser';

export const LoginPage = () => {
  const [errors, setErrors] = useState<IFieldError[]>([]);
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    login(email, password).then(() => {
      dispatch(loginAction());
    });
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
