import { useMessage } from '@/widgets/messagesProvider';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { registerData } from '@/pages/register/model/register-schema';

import { auth } from '@/shared/api';
import { FieldError, errorParser } from '@/shared/lib/zod';
import { paths } from '@/shared/routes';

export const useRegister = () => {
  const [errors, setErrors] = useState<FieldError[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const showMessage = useMessage();

  const register = async (formData: FormData) => {
    try {
      setIsLoading(true);
      const { email, password } = validate(formData);
      await createUserWithEmailAndPassword(auth, email, password);
      showMessage(
        'Регистрация прошла успешно, Вы можете войти в аккаунт.',
        'success',
      );
      navigate(paths.login);
    } catch (error: unknown) {
      errorParser(
        error,
        (errors) => setErrors(errors),
        (error) => {
          console.error('Unexpected validation error:', error);
        },
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { register, errors, isLoading };
};

const validate = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  return registerData.parse(data);
};
