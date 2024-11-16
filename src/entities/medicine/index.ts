export type { IMedicine, IPrefix, IPrefixWords } from './model/types';
export {
  useGetMedicineQuery,
  useGetMedicineByIdQuery,
  useGetMedicinePrefixesQuery,
  useGetMedicinePrefixesWordsQuery,
  useGetMedicineByTitleQuery,
  useLazyGetMedicineByTitleQuery,
  useLazyGetMedicineByIdQuery,
} from './api';
