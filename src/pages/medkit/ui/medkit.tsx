import { ITransaction, getTransactions } from '@/entities/transaction';
import { selectAuth } from '@/entities/viewer';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { columns, skeletonData } from '@/pages/medkit/model/consts';

import { useAppSelector } from '@/shared/lib/store';
import { ERoute } from '@/shared/routes/routes';
import { Input } from '@/shared/ui/input/Input';
import { DataTable } from '@/shared/ui/table/DataTable';

import classes from './Medkit.module.scss';

// TODO: create UI component for errors
// TODO: responsive table with scroll
// TODO: refactor Skeleton theme

export const Medkit = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const isAuth = useAppSelector(selectAuth);

  useEffect(() => {
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

  if (!isAuth) return <Navigate to={ERoute.login} replace />;

  return (
    <div className={classes.container}>
      <DataTable
        title={() => (
          <div className={classes.header}>
            <h3 className={classes.header__title}>Ваши транзакции</h3>
            {/* <Input containerClassname={classes.header__search} label='' /> */}
          </div>
        )}
        columns={columns}
        data={
          isLoading
            ? [skeletonData]
            : // : Array(5)
              //     .fill(0)
              //     .map((_) => transactions[0])
              transactions
        }
        tableLayout='auto'
        expandable={{
          defaultExpandAllRows: true,
        }}
        rowKey={(record) => record.id}
      />
    </div>
  );
};
