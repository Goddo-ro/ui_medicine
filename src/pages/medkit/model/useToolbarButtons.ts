import {
  Transaction,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from '@/entities/transaction';
import { useCallback } from 'react';

import { SelectedIds } from '@/pages/medkit/ui/Medkit';

export const useToolbarButtons = () => {
  const addAction = useCallback((transaction: Transaction) => {
    return createTransaction(transaction);
  }, []);

  const deleteAction = useCallback(async (selectedIds: SelectedIds) => {
    const deletingPromises = selectedIds.map((id) => {
      deleteTransaction(id);
    });
    return await Promise.all(deletingPromises);
  }, []);

  const updateAction = useCallback(
    (newTransaction: Transaction, updatingId: number) => {
      if (updatingId === undefined) return;
      return updateTransaction(updatingId, newTransaction);
    },
    [],
  );

  return { addAction, deleteAction, updateAction };
};
