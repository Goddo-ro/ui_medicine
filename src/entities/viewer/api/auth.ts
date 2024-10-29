import {
  IAuthData,
  IIsLoggedIn,
  ILogin,
  IRegister,
} from '@/entities/viewer/model/types';

import { apiInstance } from '@/shared/api/client';
import { AUTH_BASE_URL } from '@/shared/consts/authBaseURL';

export const isLoggedIn = () => {
  return apiInstance.get<IIsLoggedIn>(`${AUTH_BASE_URL}/isLoggedIn`);
};

export const logout = () => {
  return apiInstance.post(`${AUTH_BASE_URL}/logout`);
};

export const login = (email: string, password: string) => {
  return apiInstance.post<ILogin, IAuthData>(`${AUTH_BASE_URL}/login`, {
    email,
    password,
  });
};

export const register = (email: string, password: string) => {
  return apiInstance.post<IRegister, IAuthData>(`${AUTH_BASE_URL}/register`, {
    email,
    password,
  });
};
