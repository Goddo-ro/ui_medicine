import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/shared/api/client';
import { AUTH_BASE_URL } from '@/shared/consts/baseURLs';

export const authApi = createApi({
  reducerPath: AUTH_BASE_URL,
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/${AUTH_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    isLoggedIn: builder.mutation<boolean, string | null>({
      query: (token) => ({
        url: '/isLoggedIn',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useIsLoggedInMutation } = authApi;
