import { PathModel } from '@/widgets/pathHistory';

import { diseaseHomeDisplayName } from '@/shared/history';
import { paths } from '@/shared/routes';

export const useHistoryPaths = (wordFirstLetter: string) => {
  const historyPaths: PathModel[] = [
    {
      displayName: diseaseHomeDisplayName,
      path: paths.medicines,
    },
    {
      displayName: `Заболевания на букву ${wordFirstLetter}`,
      path: paths.medicinePointer,
    },
  ];

  return historyPaths;
};
