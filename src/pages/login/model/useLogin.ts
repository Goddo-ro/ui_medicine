import { login as loginAction } from '@/entities/viewer';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

import { loginData } from '@/pages/login/model/login-schema';

import { auth, googleProvider } from '@/shared/api/firebase';
import { useAppDispatch } from '@/shared/lib/store';
import { FieldError, errorParser } from '@/shared/lib/zod/errorParser';

export const useLogin = () => {
  const [errors, setErrors] = useState<FieldError[]>([]);

  const dispatch = useAppDispatch();

  // TODO: HIGH add error handler

  const login = async (formData: FormData) => {
    try {
      const { email, password } = validate(formData);
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginAction());
    } catch (error) {
      errorParser(
        error,
        (errors) => setErrors(errors),
        (error) => {
          console.error('Unexpected validation error:', error);
        },
      );
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      dispatch(loginAction());
    } catch (error) {
      errorParser(
        error,
        (errors) => setErrors(errors),
        (error) => {
          console.error('Unexpected validation error:', error);
        },
      );
    }
  };

  return { login, loginWithGoogle, errors };
};

const validate = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  return loginData.parse(data);
};
