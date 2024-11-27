import { Disease, GetDiseaseBody } from '@/entities/disease/model/types';
import { PrefixWords } from '@/widgets/pointer';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/shared/api/client';
import { Prefix } from '@/shared/ui/prefixes/Prefixes';

const DISEASE_BASE_URL = 'disease';

export const diseaseApi = createApi({
  reducerPath: DISEASE_BASE_URL,
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/${DISEASE_BASE_URL}`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getPrefixes: builder.query<Prefix, void>({
      query: () => `/prefixes`,
    }),
    getPrefixesWithWords: builder.query<PrefixWords, GetDiseaseBody>({
      query: (params) => ({
        url: '/prefixes/words',
        method: 'GET',
        params,
      }),
    }),
    getById: builder.query<Disease, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useGetPrefixesQuery,
  useGetPrefixesWithWordsQuery,
  useLazyGetByIdQuery,
} = diseaseApi;
