import { apiInstance } from '@/shared/api/client';
import { AUTH_BASE_URL } from '@/shared/consts/authBaseURL';

interface IIsLoggedIn {
  message: string;
  uid: string;
}

export const isLoggedIn = () => {
  return apiInstance.get<IIsLoggedIn>(`${AUTH_BASE_URL}/isLoggedIn`);
};

export const logout = () => {
  return apiInstance.post(`${AUTH_BASE_URL}/logout`);
};
