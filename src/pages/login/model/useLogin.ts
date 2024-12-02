import { login as loginAction } from '@/entities/viewer';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

import { loginData } from '@/pages/login/model/login-schema';

import { auth, googleProvider } from '@/shared/api/firebase';
import { useAppDispatch } from '@/shared/lib/store';
import { FieldError, errorParser } from '@/shared/lib/zod/errorParser';

export const generalErrorName = 'general';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FieldError[]>([]);

  const dispatch = useAppDispatch();

  const loginHandler = async (loginFn: () => Promise<unknown>) => {
    try {
      setIsLoading(true);
      await loginFn();
      dispatch(loginAction());
    } catch (error) {
      errorParser(
        error,
        (errors) => setErrors(errors),
        (error) => {
          if (
            error instanceof FirebaseError &&
            error.code === 'auth/invalid-login-credentials'
          ) {
            setErrors((prev) => [
              ...prev,
              {
                message: 'Неправильная почта или пароль',
                fieldName: generalErrorName,
              },
            ]);
          } else {
            setErrors((prev) => [
              ...prev,
              {
                message: 'Произошла непредвиденная ошибка',
                fieldName: generalErrorName,
              },
            ]);
          }
        },
      );
    } finally {
      setIsLoading(false);
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

  return { login, loginWithGoogle, errors, setErrors, isLoading };
};

const validate = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  return loginData.parse(data);
};
