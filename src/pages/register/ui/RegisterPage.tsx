import { useRegister } from '@/pages/register/model/useRegister';

import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

export const RegisterPage = () => {
  const { register, errors, isLoading } = useRegister();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        register(new FormData(e.currentTarget));
      }}
      title='Регистрация'
      isLoading={isLoading}
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

      <Button type='submit' isLoading={isLoading}>
        Войти
      </Button>
    </Form>
  );
};
