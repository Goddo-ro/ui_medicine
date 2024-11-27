import { selectAuth } from '@/entities/viewer';
import { Navigate } from 'react-router-dom';

import { useLogin } from '@/pages/login/model/useLogin';

import { useAppSelector } from '@/shared/lib/store';
import { paths } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/button/Button';
import { Form } from '@/shared/ui/form/Form';
import { Input } from '@/shared/ui/input/Input';

export const LoginPage = () => {
  const isAuth = useAppSelector(selectAuth);

  const { login, errors } = useLogin();

  if (isAuth) return <Navigate to={paths.medkit} replace />;

  // TODO: loader while auth checking

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        login(new FormData(e.currentTarget));
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
