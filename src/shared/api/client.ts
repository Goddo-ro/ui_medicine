import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const getFirebaseToken = async (): Promise<string | null> => {
  return new Promise((resolve) => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        resolve(token);
      } else {
        resolve(null);
      }
    });
  });
};

export const API_URL = 'http://127.0.0.1:8080/api';

export const baseQueryWithAuth = (baseUrl: string) => {
  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: async (headers) => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        try {
          const token = await user.getIdToken();
          headers.set('Authorization', `Bearer ${token}`);
        } catch (error) {
          console.error('Ошибка получения токена Firebase:', error);
        }
      }

      return headers;
    },
  });
};
