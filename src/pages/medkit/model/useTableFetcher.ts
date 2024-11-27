import { Transaction, getTransactions } from '@/entities/transaction';
import { useCallback, useEffect, useState } from 'react';

import { useToolbarButtons } from '@/pages/medkit/model/useToolbarButtons';
import { SelectedIds } from '@/pages/medkit/ui/Medkit';

export const useTableFetcher = (clearSelected: () => void) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { addAction, deleteAction, updateAction } = useToolbarButtons();

  const handleAdd = useCallback((transaction: Transaction) => {
    setIsLoading(true);
    addAction(transaction).finally(() => {
      setIsLoading(false);
      fetchTransactions();
    });
  }, []);

  const handleUpdate = useCallback(
    (newTransaction: Transaction, updatingId: number) => {
      const updateState = updateAction(newTransaction, updatingId);
      if (updateState) {
        setIsLoading(true);
        updateState.finally(() => {
          setIsLoading(false);
          clearSelected();
          fetchTransactions();
        });
      }
    },
    [],
  );

  const handleDelete = useCallback((selectedIds: SelectedIds) => {
    setIsLoading(true);
    deleteAction(selectedIds).finally(() => {
      setIsLoading(false);
      clearSelected();
      fetchTransactions();
    });
  }, []);

  const fetchTransactions = useCallback(() => {
    setIsLoading(true);
    getTransactions()
      .then((res) => {
        setTransactions(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return { transactions, isLoading, handleAdd, handleUpdate, handleDelete };
};
