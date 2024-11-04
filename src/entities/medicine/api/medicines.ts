import {
  IGetMedicineBody,
  IMedicine,
  IPrefix,
} from '@/entities/medicine/model/types';

import { apiInstance } from '@/shared/api/client';
import { MEDICINE_BASE_URL } from '@/shared/consts/baseURLs';

export const getMedicine = ({
  search = '',
  startsWith = '',
}: IGetMedicineBody) => {
  return apiInstance.get(`${MEDICINE_BASE_URL}/`, {
    params: {
      search,
      startsWith,
    },
  });
};

export const getMedicinePrefixes = () => {
  return apiInstance.get<IPrefix[]>(`${MEDICINE_BASE_URL}/prefixes`);
};

export const getMedicineById = (medicine_id: number) => {
  return apiInstance.get<IMedicine>(`${MEDICINE_BASE_URL}/${medicine_id}`);
};
