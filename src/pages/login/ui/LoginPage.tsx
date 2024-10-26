import { useState } from 'react';

import { loginData } from '@/pages/login/model/login-schema';

import { IFieldError } from '@/shared/fieldError/fieldError';
import { Button } from '@/shared/ui/button/Button';
import { Form } from '@/shared/ui/form/Form';
import { Input } from '@/shared/ui/input/Input';
import { errorParser } from '@/shared/zod/errorParser';

export const LoginPage = () => {
  const [errors, setErrors] = useState<IFieldError[]>([]);

  const validate = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    try {
      loginData.parse(data);
      setErrors([]);
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
