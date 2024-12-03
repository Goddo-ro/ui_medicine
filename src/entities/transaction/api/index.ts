import { Transaction } from '@/entities/transaction';
import { createApi } from '@reduxjs/toolkit/query/react';

import { API_URL, baseQueryWithAuth } from '@/shared/api';

const TRANSACTION_BASE_URL = 'transactions';

export const transactionApi = createApi({
  reducerPath: TRANSACTION_BASE_URL,
  baseQuery: baseQueryWithAuth(`${API_URL}/${TRANSACTION_BASE_URL}`),
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
