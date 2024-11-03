import { IMedicine } from '@/entities/medicine';

import { formatDate } from '@/shared/lib/date';
import { Column } from '@/shared/ui/table/DataTable';

// TODO: parse date

export const columns: Column[] = [
  {
    row_id: 'id',
    label: 'ID',
  },
  {
    row_id: 'medicine',
    label: 'Название',
    render: (medicine: IMedicine) => <b>{medicine.title}</b>,
  },
  {
    row_id: 'medicine_id',
    label: 'ID Лекарства',
  },
  {
    row_id: 'count',
    label: 'Количество',
  },
  {
    row_id: 'purchase_date',
    label: 'Приобретение',
    render: (date: string) => formatDate(date),
  },
  {
    row_id: 'expiration_date',
    label: 'Истечение срока',
    render: (date: string) => formatDate(date),
  },
];
