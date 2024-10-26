import { loginData } from '@/pages/login/model/login-schema';

import { Button } from '@/shared/ui/button/Button';
import { Input } from '@/shared/ui/input/Input';

export const LoginPage = () => {
  const validate = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    try {
      loginData.parse(data);
      console.debug('Successful parse');
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validate(new FormData(e.currentTarget));
      }}
    >
      <Input type='input' label='Почта' id='email' name='email' required />

      <Input
        label='Пароль (мин. 6 символов)'
        type='password'
        id='password'
        name='password'
        required
      />

      <Button type='submit'>Submit</Button>
    </form>
  );
};
