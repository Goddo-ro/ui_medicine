import { Disease } from '@/entities/disease/@x/medicine';

interface MedicineType {
  readonly id: number;
  readonly title: string;
}

export interface Medicine {
  readonly id: number;
  readonly title: string;
  readonly type_id: number;
  readonly description: string;
  readonly type: MedicineType;
  readonly diseases: Disease[];
}
