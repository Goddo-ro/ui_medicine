import { IMedicine } from '@/entities/medicine';

export interface ITransaction {
  readonly id: number;
  readonly medicine_id: number;
  readonly count: number;
  readonly purchase_date: Date;
  readonly expiration_date: Date;
  readonly medicines?: IMedicine[];
}
