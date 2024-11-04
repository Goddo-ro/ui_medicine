import { ITransaction } from '@/entities/transaction';

import { apiInstance } from '@/shared/api/client';
import { TRANSACTION_BASE_URL } from '@/shared/consts/authBaseURL';

export const getTransactions = () => {
  return apiInstance.get<ITransaction[]>(`${TRANSACTION_BASE_URL}/`);
};

export const createTransaction = (transaction: ITransaction) => {
  return apiInstance.post(`${TRANSACTION_BASE_URL}/`, transaction);
};

export const deleteTransaction = (transaction_id: number) => {
  return apiInstance.delete(`${TRANSACTION_BASE_URL}/${transaction_id}`);
};

export const updateTransaction = (
  transaction_id: number,
  transaction: ITransaction,
) => {
  return apiInstance.put(
    `${TRANSACTION_BASE_URL}/${transaction_id}`,
    transaction,
  );
};
