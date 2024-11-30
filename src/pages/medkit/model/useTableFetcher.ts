import { Transaction, useGetTransactionsQuery } from '@/entities/transaction';
import { useCallback } from 'react';

import { useToolbarButtons } from '@/pages/medkit/model/useToolbarButtons';
import { SelectedIds } from '@/pages/medkit/ui/Medkit';

export const useTableFetcher = (clearSelected: () => void) => {
  const {
    data: transactions,
    isFetching: transactionsLoading,
    refetch,
  } = useGetTransactionsQuery();

  const { isLoading, addAction, deleteAction, updateAction } =
    useToolbarButtons();

  const handleAdd = useCallback((transaction: Transaction) => {
    addAction(transaction).finally(() => {
      refetch();
    });
  }, []);

  const handleUpdate = useCallback(
    (newTransaction: Transaction, updatingId: number) => {
      const updateState = updateAction(newTransaction, updatingId);
      if (updateState) {
        updateState.finally(() => {
          clearSelected();
          refetch();
        });
      }
    },
    [],
  );

  const handleDelete = useCallback((selectedIds: SelectedIds) => {
    deleteAction(selectedIds).finally(() => {
      clearSelected();
      refetch();
    });
  }, []);

  return {
    transactions,
    isLoading: isLoading || transactionsLoading,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
};
