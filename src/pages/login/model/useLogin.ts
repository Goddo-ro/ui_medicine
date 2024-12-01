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

  const loginHandler = async (loginFn: () => Promise<unknown>) => {
    try {
      await loginFn();
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

  const login = async (formData: FormData) => {
    loginHandler(() => {
      const { email, password } = validate(formData);
      return signInWithEmailAndPassword(auth, email, password);
    });
  };

  const loginWithGoogle = async () => {
    loginHandler(() => {
      return signInWithPopup(auth, googleProvider);
    });
  };

  return { login, loginWithGoogle, errors };
};

const validate = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  return loginData.parse(data);
};
