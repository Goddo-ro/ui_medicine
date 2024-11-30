import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { registerData } from '@/pages/register/model/register-schema';

import { auth } from '@/shared/api/firebase';
import { FieldError, errorParser } from '@/shared/lib/zod/errorParser';
import { paths } from '@/shared/routes/routes';

export const useRegister = () => {
  const [errors, setErrors] = useState<FieldError[]>([]);

  const navigate = useNavigate();

  // TODO: message of successful registration

  const register = async (formData: FormData) => {
    try {
      const { email, password } = validate(formData);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(paths.login);
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

  return { register, errors };
};

const validate = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  return registerData.parse(data);
};
