import { IDisease } from '@/entities/disease/@x/disease';

interface IType {
  readonly id: number;
  readonly title: string;
}

export interface IMedicine {
  readonly id: number;
  readonly title: string;
  readonly type_id: number;
  readonly description: string;
  readonly type: IType;
  readonly diseases: IDisease[];
}

export interface IGetMedicineBody {
  readonly search?: string;
  readonly startsWith?: string;
}
