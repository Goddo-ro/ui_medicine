import { IMedicine } from '@/entities/medicine/@x/disease';
import { ISymptom } from '@/entities/symptom';

export interface IDisease {
  readonly id: number;
  readonly title: string;
  readonly medicines: IMedicine[];
  readonly symptoms: ISymptom[];
}

export interface IGetDiseaseBody {
  readonly startsWith?: string;
}
