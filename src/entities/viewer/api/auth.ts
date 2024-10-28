import { IData, IIsLoggedIn, ILogin } from '@/entities/viewer/model/types';

import { apiInstance } from '@/shared/api/client';
import { AUTH_BASE_URL } from '@/shared/consts/authBaseURL';

export const isLoggedIn = () => {
  return apiInstance.get<IIsLoggedIn>(`${AUTH_BASE_URL}/isLoggedIn`);
};

export const logout = () => {
  return apiInstance.post(`${AUTH_BASE_URL}/logout`);
};

export const login = (email: string, password: string) => {
  return apiInstance.post<ILogin, IData>(
    `${AUTH_BASE_URL}/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    },
  );
};
