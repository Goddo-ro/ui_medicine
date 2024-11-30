import { loginThunk } from '@/entities/viewer';
import { useState } from 'react';

import { loginData } from '@/pages/login/model/login-schema';

import { useAppDispatch } from '@/shared/lib/store';
import { FieldError, errorParser } from '@/shared/lib/zod/errorParser';

export const useLogin = () => {
  const [errors, setErrors] = useState<FieldError[]>([]);

  const dispatch = useAppDispatch();

  const login = (formData: FormData) => {
    try {
      const { email, password } = validate(formData);
      dispatch(loginThunk({ email, password }));
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

  return { login, errors };
};

const validate = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  return loginData.parse(data);
};
