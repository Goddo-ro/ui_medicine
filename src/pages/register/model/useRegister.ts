import { registerThunk } from '@/entities/viewer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { registerData } from '@/pages/register/model/register-schema';

import { useAppDispatch } from '@/shared/lib/store';
import { paths } from '@/shared/routes/routes';
import { IFieldError, errorParser } from '@/shared/zod/errorParser';

export const useRegister = () => {
  const [errors, setErrors] = useState<IFieldError[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const register = (formData: FormData) => {
    try {
      const { email, password } = validate(formData);
      dispatch(registerThunk({ email, password })).then(() => {
        navigate(paths.login);
      });
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
