import { SearchParams, SearchResponse } from '@/features/search/api/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/shared/api';

const SEARCH_BASE_URL = 'search';

export const searchApi = createApi({
  reducerPath: SEARCH_BASE_URL,
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/${SEARCH_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    search: builder.query<SearchResponse, SearchParams>({
      query: (params) => ({
        url: '/',
        params,
      }),
    }),
  }),
});

export const { useSearchQuery } = searchApi;
