import {
  ITransaction,
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from '@/entities/transaction';
import { selectAuth } from '@/entities/viewer';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { columns } from '@/pages/medkit/model/consts';
import { MedkitAddDialog } from '@/pages/medkit/ui/MedkitAddDialog';

import { useAppSelector } from '@/shared/lib/store';
import { ERoute } from '@/shared/routes/routes';
import { DataTable } from '@/shared/ui/table/DataTable';

import { GridToolbar } from '@mui/x-data-grid';

import classes from './Medkit.module.scss';

// TODO: create UI component for errors
// TODO: refactor Skeleton theme

export const Medkit = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const isAuth = useAppSelector(selectAuth);

  const fetchTransactions = useCallback(() => {
    if (!isAuth) return;
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

  const handleAdd = (transaction: ITransaction) => {
    createTransaction(transaction).then(() => {
      fetchTransactions();
    });
  };

  // TODO: search by medicine title

  const handleDelete = () => {
    setIsLoading(true);
    const deletingPromises = selectedIds.map((id) => {
      deleteTransaction(id);
    });
    Promise.all(deletingPromises)
      .then(() => {
        fetchTransactions();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUpdate = (newTransaction: ITransaction) => {
    const selectedId = selectedIds[0];
    if (selectedId === undefined) return;
    setIsLoading(true);
    updateTransaction(selectedId, newTransaction)
      .then(() => {
        fetchTransactions();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!isAuth) return <Navigate to={ERoute.login} replace />;

  return (
    <>
      <MedkitAddDialog
        onAdd={handleAdd}
        open={isAddDialogOpen}
        close={() => {
          setIsAddDialogOpen(false);
        }}
        onClose={() => {
          setIsAddDialogOpen(false);
        }}
        onUpdate={handleUpdate}
        transaction={
          selectedIds?.length === 1
            ? transactions.find(
                (transaction) => transaction.id === selectedIds[0],
              )
            : undefined
        }
      />
      <div className={clsx(classes.container, 'unwidth')}>
        <DataTable
          columns={columns}
          rows={transactions}
          loading={isLoading}
          toolbarProps={{
            title: <h3>Приобретенные лекарства</h3>,
            onAdd: () => {
              setIsAddDialogOpen(true);
            },
            onEdit: () => {
              setIsAddDialogOpen(true);
            },
            disableEdit: selectedIds.length !== 1,
            onDelete: handleDelete,
            disableDelete: !selectedIds.length,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          checkboxSelection
          onRowSelectionModelChange={(ids) => {
            setSelectedIds(ids.map((id) => Number.parseInt(id.toString())));
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              style: { marginBottom: 8 },
              showQuickFilter: true,
            },
          }}
          pageSizeOptions={[15, 25]}
        />
      </div>
    </>
  );
};
