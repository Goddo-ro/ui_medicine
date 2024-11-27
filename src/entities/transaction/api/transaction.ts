import { Transaction } from '@/entities/transaction';

import { apiInstance } from '@/shared/api/client';
import { TRANSACTION_BASE_URL } from '@/shared/consts/baseURLs';

//TODO: replace with rtk query

export const getTransactions = () => {
  return apiInstance.get<Transaction[]>(`${TRANSACTION_BASE_URL}/`);
};

export const createTransaction = (transaction: Transaction) => {
  return apiInstance.post(`${TRANSACTION_BASE_URL}/`, transaction);
};

export const deleteTransaction = (transaction_id: number) => {
  return apiInstance.delete(`${TRANSACTION_BASE_URL}/${transaction_id}`);
};

export const updateTransaction = (
  transaction_id: number,
  transaction: Transaction,
) => {
  return apiInstance.put(
    `${TRANSACTION_BASE_URL}/${transaction_id}`,
    transaction,
  );
};
