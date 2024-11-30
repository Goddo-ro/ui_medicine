import { Transaction } from '@/entities/transaction';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '@/shared/api/client';
import { TRANSACTION_BASE_URL } from '@/shared/consts/baseURLs';

export const transactionApi = createApi({
  reducerPath: TRANSACTION_BASE_URL,
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/${TRANSACTION_BASE_URL}`,
    credentials: 'include',
  }),
  tagTypes: ['Transaction'],
  endpoints: (builder) => ({
    getTransactions: builder.query<Transaction[], void>({
      query: () => '/',
    }),
    createTransaction: builder.mutation<void, Transaction>({
      query: (transaction) => ({
        url: '/',
        method: 'POST',
        body: transaction,
      }),
      invalidatesTags: ['Transaction'],
    }),
    deleteTransaction: builder.mutation<void, number>({
      query: (transactionId) => ({
        url: `/${transactionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Transaction'],
    }),
    updateTransaction: builder.mutation<
      void,
      { transactionId: number; transaction: Transaction }
    >({
      query: ({ transactionId, transaction }) => ({
        url: `/${transactionId}`,
        body: transaction,
        method: 'PUT',
      }),
      invalidatesTags: ['Transaction'],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,
} = transactionApi;
