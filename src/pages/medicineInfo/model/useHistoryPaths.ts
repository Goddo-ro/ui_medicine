import { PathModel } from '@/widgets/pathHistory';

import { medicineHomeDisplayName } from '@/shared/history';
import { generatePath, paths } from '@/shared/routes';

export const useHistoryPaths = (
  firstMedicineLetter: string,
  medicineTitle: string,
) => {
  const historyPaths: PathModel[] = [
    {
      displayName: medicineHomeDisplayName,
      path: paths.medicines,
    },
    {
      displayName: `Лекарства на букву ${firstMedicineLetter}`,
      path: generatePath(paths.medicinePointer, {
        letter: firstMedicineLetter,
      }),
    },
    {
      displayName: medicineTitle,
      path: paths.diseaseInfo,
    },
  ];

  return historyPaths;
};
