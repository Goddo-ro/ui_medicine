export type { IMedicine, IPrefix } from './model/types';
export {
  useGetMedicineQuery,
  useGetMedicineByIdQuery,
  useGetMedicinePrefixesQuery,
  useGetMedicinePrefixesWordsQuery,
  useGetMedicineByTitleQuery,
  useLazyGetMedicineByTitleQuery,
} from './api';
