import { Medicine } from '@/entities/medicine/@x/disease';
import { Symptom } from '@/entities/symptom/@x/disease';

export interface Disease {
  readonly id: number;
  readonly title: string;
  readonly medicines: Medicine[];
  readonly symptoms: Symptom[];
}
