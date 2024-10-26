import { apiInstance } from '@/shared/api/client';
import { AUTH_BASE_URL } from '@/shared/consts/authBaseURL';

import { IData, ILogin } from './types';

export const login = (email: string, password: string): Promise<ILogin> => {
  return apiInstance.post<ILogin, IData>(`${AUTH_BASE_URL}/login`, {
    email,
    password,
  });
};
