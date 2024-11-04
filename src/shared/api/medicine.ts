import { IMedicine } from '@/entities/medicine';

import { apiInstance } from '@/shared/api/client';

const BASE_URL = 'medicine';

export const getMedicine = () => {
  return apiInstance.get<IMedicine[]>(`${BASE_URL}`);
};