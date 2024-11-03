import { ITransaction, getTransactions } from '@/entities/transaction';
import { createTransaction } from '@/entities/transaction/api/transaction';
import { selectAuth } from '@/entities/viewer';
import { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { columns } from '@/pages/medkit/model/consts';
import { MedkitAddDialog } from '@/pages/medkit/ui/MedkitAddDialog';

import { useAppSelector } from '@/shared/lib/store';
import { ERoute } from '@/shared/routes/routes';
import { DataTable } from '@/shared/ui/table/DataTable';

import classes from './Medkit.module.scss';

// TODO: create UI component for errors
// TODO: responsive table with scroll
// TODO: refactor Skeleton theme

export const Medkit = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

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
      />
      <div className={classes.container}>
        <DataTable
          columns={columns}
          rows={transactions}
          isLoading={isLoading}
          toolbarProps={{
            title: <h3>Приобретенные лекарства</h3>,
            onAdd: () => {
              setIsAddDialogOpen(true);
            },
          }}
        />
      </div>
    </>
  );
};
