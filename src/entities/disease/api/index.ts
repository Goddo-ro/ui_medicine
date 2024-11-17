import { IGetDiseaseBody } from '@/entities/disease/model/types';
import { IPrefixWords } from '@/widgets/pointer';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/shared/api/client';
import { IPrefix } from '@/shared/ui/prefixes/Prefixes';

const DISEASE_BASE_URL = 'disease';

export const diseaseApi = createApi({
  reducerPath: DISEASE_BASE_URL,
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/${DISEASE_BASE_URL}`,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getPrefixes: builder.query<IPrefix, void>({
      query: () => `/prefixes`,
    }),
    getPrefixesWithWords: builder.query<IPrefixWords, IGetDiseaseBody>({
      query: (params) => ({
        url: '/prefixes/words',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useGetPrefixesQuery, useGetPrefixesWithWordsQuery } = diseaseApi;
