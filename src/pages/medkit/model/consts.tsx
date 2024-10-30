import { IMedicine } from '@/entities/medicine';
import { ITransaction } from '@/entities/transaction';
import { ColumnType } from 'rc-table';
import Skeleton from 'react-loading-skeleton';

// TODO: parse date

type TransactionSkeleton = {
  [K in keyof ITransaction]: React.ReactNode | { title: React.ReactNode };
};

export const skeletonData: TransactionSkeleton = {
  id: <Skeleton />,
  medicine_id: <Skeleton />,
  count: <Skeleton />,
  purchase_date: <Skeleton />,
  expiration_date: <Skeleton />,
  medicine: { title: <Skeleton /> },
};

export const columns: ColumnType<ITransaction | TransactionSkeleton>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    minWidth: 100,
  },
  {
    title: 'Название',
    dataIndex: 'medicine',
    key: 'medicine',
    render: (medicine?: IMedicine) =>
      medicine ? medicine.title : 'No Medicines',
    width: '50%',
    minWidth: 200,
  },
  {
    title: 'ID Лекарства',
    dataIndex: 'medicine_id',
    key: 'medicine_id',
    minWidth: 120,
  },
  {
    title: 'Количество',
    dataIndex: 'count',
    key: 'count',
    minWidth: 75,
  },
  {
    title: 'Приобретение',
    dataIndex: 'purchase_date',
    key: 'purchase_date',
    minWidth: 200,
    width: '25%',
  },
  {
    title: 'Истечение срока',
    dataIndex: 'expiration_date',
    key: 'expiration_date',
    minWidth: 200,
    width: '25%',
  },
];
