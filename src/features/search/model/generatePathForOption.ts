import { Option } from '@/features/search/api/types';

import { generatePath, paths } from '@/shared/routes';

export const generatePathForOption = (option: Option) => {
  return 'description' in option
    ? generatePath(paths.medicineInfo, { id: option.id })
    : generatePath(paths.diseaseInfo, { id: option.id });
};
