import {
  IGetMedicineBody,
  IMedicine,
  IPrefix,
} from '@/entities/medicine/model/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/shared/api/client';

const MEDICINE_BASE_URL = 'medicine';

export const medicineApi = createApi({
  reducerPath: 'medicine',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/${MEDICINE_BASE_URL}`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getMedicine: builder.query<IMedicine[], IGetMedicineBody>({
      query: (body) => ({
        url: '/',
        method: 'GET',
        body,
      }),
    }),
    getMedicinePrefixes: builder.query<IPrefix[], void>({
      query: () => `/prefixes`,
    }),
    getMedicineById: builder.query<IMedicine, number>({
      query: (medicine_id) => `/${medicine_id}`,
    }),
  }),
});

export const {
  useGetMedicineQuery,
  useGetMedicinePrefixesQuery,
  useGetMedicineByIdQuery,
} = medicineApi;
