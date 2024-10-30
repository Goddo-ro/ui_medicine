import { ITransaction } from '@/entities/transaction';

import { apiInstance } from '@/shared/api/client';
import { TRANSACTION_BASE_URL } from '@/shared/consts/authBaseURL';

export const getTransactions = () => {
  return apiInstance.get<ITransaction[]>(`${TRANSACTION_BASE_URL}/`);
};
