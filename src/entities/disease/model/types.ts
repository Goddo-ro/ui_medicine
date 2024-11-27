import { Medicine } from '@/entities/medicine/@x/disease';
import { Symptom } from '@/entities/symptom';

export interface Disease {
  readonly id: number;
  readonly title: string;
  readonly medicines: Medicine[];
  readonly symptoms: Symptom[];
}

export interface GetDiseaseBody {
  readonly startsWith?: string;
}
