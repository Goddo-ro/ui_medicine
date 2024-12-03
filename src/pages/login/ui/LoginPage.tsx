import { generalErrorName, useLogin } from '@/pages/login/model/useLogin';
import { LoginAuthVariants } from '@/pages/login/ui/LoginAuthVariants';

import { Button } from '@/shared/ui/button';
import { Error } from '@/shared/ui/error';
import { Form } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

export const LoginPage = () => {
  const { login, errors, setErrors, isLoading } = useLogin();

  const generalError = errors.find(
    (error) => error.fieldName === generalErrorName,
  );

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        login(new FormData(e.currentTarget));
      }}
      title='Вход в аккаунт'
      isLoading={isLoading}
    >
      {generalError && <Error errorText={generalError.message} />}

      <Input
        type='input'
        label='Почта'
        id='email'
        name='email'
        required
        error={errors.find((error) => error.fieldName === 'email')?.message}
        onChange={() => {
          setErrors((prev) =>
            prev.filter((error) => error.fieldName !== 'email'),
          );
        }}
      />

      <Input
        label='Пароль'
        type='password'
        id='password'
        name='password'
        autoComplete='on'
        required
        error={errors.find((error) => error.fieldName === 'password')?.message}
        onChange={() => {
          setErrors((prev) =>
            prev.filter((error) => error.fieldName !== 'password'),
          );
        }}
      />

      <Button type='submit' isLoading={isLoading}>
        Войти
      </Button>

      <LoginAuthVariants />
    </Form>
  );
};
