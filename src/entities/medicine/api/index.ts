import { GetMedicineBody } from '@/entities/medicine/api/types';
import { Medicine } from '@/entities/medicine/model/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/shared/api';
import { PrefixWords } from '@/shared/prefix';
import { Prefix } from '@/shared/ui/prefixes';

const MEDICINE_BASE_URL = 'medicine';

export const medicineApi = createApi({
  reducerPath: MEDICINE_BASE_URL,
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/${MEDICINE_BASE_URL}`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getMedicine: builder.query<Medicine[], GetMedicineBody>({
      query: (body) => ({
        url: '/',
        method: 'GET',
        params: body,
      }),
    }),
    getMedicinePrefixes: builder.query<Prefix, void>({
      query: () => `/prefixes`,
    }),
    getMedicinePrefixesWords: builder.query<
      PrefixWords,
      Omit<GetMedicineBody, 'search'>
    >({
      query: (params) => ({
        url: '/prefixes/words',
        method: 'GET',
        params,
      }),
    }),
    getMedicineById: builder.query<Medicine, number>({
      query: (medicine_id) => `/${medicine_id}`,
    }),
    getMedicineByTitle: builder.query<Medicine, string>({
      query: (title) => ({
        url: `/title`,
        method: 'GET',
        params: {
          title: encodeURIComponent(title),
        },
      }),
    }),
  }),
});

export const {
  useGetMedicineQuery,
  useGetMedicinePrefixesQuery,
  useGetMedicinePrefixesWordsQuery,
  useGetMedicineByIdQuery,
  useGetMedicineByTitleQuery,
  useLazyGetMedicineByTitleQuery,
  useLazyGetMedicineByIdQuery,
} = medicineApi;
