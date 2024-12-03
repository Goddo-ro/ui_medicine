import { PathModel } from '@/widgets/pathHistory';
import { generatePath } from 'react-router-dom';

import { diseaseHomeDisplayName } from '@/shared/history';
import { paths } from '@/shared/routes';

export const useHistoryPaths = (
  firstDiseaseLetter: string,
  diseaseTitle: string,
) => {
  const historyPaths: PathModel[] = [
    {
      displayName: diseaseHomeDisplayName,
      path: paths.medicines,
    },
    {
      displayName: `Заболевания на букву ${firstDiseaseLetter}`,
      path: generatePath(paths.diseasePointer, {
        letter: firstDiseaseLetter,
      }),
    },
    {
      displayName: diseaseTitle,
      path: paths.diseaseInfo,
    },
  ];

  return historyPaths;
};
