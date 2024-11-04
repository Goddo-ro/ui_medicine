import { IMedicine } from '@/entities/medicine';
import { ITransaction } from '@/entities/transaction';

import { formatDate } from '@/shared/lib/date';

import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef<ITransaction>[] = [
  {
    field: 'id',
    headerName: 'ID',
    headerAlign: 'left',
    align: 'left',
    type: 'number',
    minWidth: 100,
  },
  {
    field: 'medicine_id',
    headerName: 'ID Лекарства',
    headerAlign: 'left',
    align: 'left',
    type: 'number',
    minWidth: 200,
  },
  {
    field: 'medicine',
    headerName: 'Лекарство',
    headerAlign: 'left',
    align: 'left',
    renderCell: (params) => {
      return <b>{params.row.medicine?.title || 'Нет названия'}</b>;
    },
    sortComparator: (m1: IMedicine, m2: IMedicine) =>
      m1.title.localeCompare(m2.title),
    minWidth: 200,
    flex: 1,
  },
  {
    field: 'count',
    headerName: 'Количество',
    headerAlign: 'left',
    align: 'left',
    type: 'number',
    minWidth: 200,
  },
  {
    field: 'purchase_date',
    headerName: 'Дата приобретения',
    headerAlign: 'left',
    align: 'left',
    valueFormatter: formatDate,
    minWidth: 200,
    flex: 1,
  },
  {
    field: 'expiration_date',
    headerName: 'Истечение срока',
    headerAlign: 'left',
    align: 'left',
    valueFormatter: formatDate,
    minWidth: 200,
    flex: 1,
  },
];
