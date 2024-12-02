import {
  Transaction,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,
} from '@/entities/transaction';
import { useCallback } from 'react';

import { SelectedIds } from '@/pages/medkit/ui/Medkit';

export const useToolbarButtons = () => {
  const [deleteTransaction, { isLoading: isDeleting }] =
    useDeleteTransactionMutation();
  const [createTransaction, { isLoading: isCreating }] =
    useCreateTransactionMutation();
  const [updateTransaction, { isLoading: isUpdating }] =
    useUpdateTransactionMutation();

  const addAction = useCallback(async (transaction: Transaction) => {
    return await createTransaction(transaction).unwrap();
  }, []);

  const deleteAction = useCallback(async (selectedIds: SelectedIds) => {
    const deletingPromises = selectedIds.map(
      async (id) => await deleteTransaction(id).unwrap(),
    );
    return await Promise.all(deletingPromises);
  }, []);

  const updateAction = useCallback(
    async (newTransaction: Transaction, updatingId: number) => {
      return await updateTransaction({
        transactionId: updatingId,
        transaction: newTransaction,
      }).unwrap();
    },
    [],
  );

  return {
    isLoading: isDeleting || isCreating || isUpdating,
    addAction,
    deleteAction,
    updateAction,
  };
};
