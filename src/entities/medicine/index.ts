export type { Medicine } from './model/types';
export {
  medicineApi,
  useGetMedicineQuery,
  useGetMedicineByIdQuery,
  useGetMedicinePrefixesQuery,
  useGetMedicinePrefixesWordsQuery,
  useGetMedicineByTitleQuery,
  useLazyGetMedicineByTitleQuery,
  useLazyGetMedicineByIdQuery,
} from './api';
