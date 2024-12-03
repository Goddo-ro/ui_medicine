import { Disease } from '@/entities/disease';
import { Medicine } from '@/entities/medicine';

export type Option = Disease | Medicine;

export type SearchResponse = Option[];
export interface SearchParams {
  readonly search: string;
}
