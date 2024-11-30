import { loginThunk, selectAuth } from '@/entities/viewer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router-dom';

import { loginData } from '@/pages/login/model/login-schema';
import { useLogin } from '@/pages/login/model/useLogin';

import { useAppDispatch, useAppSelector } from '@/shared/lib/store';
import { paths } from '@/shared/routes/routes';
import { Button } from '@/shared/ui/button/Button';
import { Form } from '@/shared/ui/form/Form';
import { Input } from '@/shared/ui/input/Input';

const config = {
  apiKey: '',
  authDomain: '',
  // ...
};
firebase.initializeApp(config);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

export const LoginPage = () => {
  const { login, errors } = useLogin();

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        validate(new FormData(e.currentTarget));
      }}
      title='Вход в аккаунт'
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

  //     <Button type='submit'>Войти</Button>
  //   </Form>
  // );
};
