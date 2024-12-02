import { Transaction, useGetTransactionsQuery } from '@/entities/transaction';
import { useMessage } from '@/widgets/messagesProvider';
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
  const showMessage = useMessage();

  const actionHandler = useCallback(async (action: () => Promise<unknown>) => {
    try {
      return await action();
    } catch {
      showMessage('Что-то пошло не так, повторите попытку.', 'error');
    }
  }, []);

  const handleAdd = useCallback(
    async (transaction: Transaction) => {
      actionHandler(() => {
        return addAction(transaction);
      }).finally(() => {
        refetch();
      });
    },
    [actionHandler],
  );

  const handleUpdate = useCallback(
    (newTransaction: Transaction, updatingId: number) => {
      actionHandler(() => {
        return updateAction(newTransaction, updatingId);
      }).finally(() => {
        clearSelected();
        refetch();
      });
    },
    [actionHandler],
  );

  const handleDelete = useCallback(
    (selectedIds: SelectedIds) => {
      actionHandler(() => {
        return deleteAction(selectedIds);
      }).finally(() => {
        clearSelected();
        refetch();
      });
    },
    [actionHandler],
  );

  return {
    transactions,
    isLoading: isLoading || transactionsLoading,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
};
