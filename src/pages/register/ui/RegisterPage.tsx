import { useRegister } from '@/pages/register/model/useRegister';

import { Button } from '@/shared/ui/button/Button';
import { Form } from '@/shared/ui/form/Form';
import { Input } from '@/shared/ui/input/Input';

export const RegisterPage = () => {
  const { register, errors } = useRegister();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        register(new FormData(e.currentTarget));
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
