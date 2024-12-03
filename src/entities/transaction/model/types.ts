import { Medicine } from '@/entities/medicine/@x/transaction';

export interface Transaction {
  readonly id?: number;
  readonly medicine_id: number;
  readonly count: number;
  readonly purchase_date: string;
  readonly expiration_date: string;
  readonly medicine?: Medicine;
}
