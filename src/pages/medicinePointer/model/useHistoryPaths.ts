import { PathModel } from '@/widgets/pathHistory';

import { medicineHomeDisplayName } from '@/shared/history';
import { paths } from '@/shared/routes';

export const useHistoryPaths = (wordFirstLetter: string) => {
  const historyPaths: PathModel[] = [
    {
      displayName: medicineHomeDisplayName,
      path: paths.medicines,
    },
    {
      displayName: `Лекарства на букву ${wordFirstLetter}`,
      path: paths.medicinePointer,
    },
  ];

  return historyPaths;
};
