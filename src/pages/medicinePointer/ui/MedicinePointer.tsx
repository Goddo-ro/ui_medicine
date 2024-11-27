import {
  useGetMedicinePrefixesQuery,
  useGetMedicinePrefixesWordsQuery,
} from '@/entities/medicine';
import { PathHistory } from '@/widgets/pathHistory';
import { IPointerParams, IPrefixWord, Pointer } from '@/widgets/pointer';
import { useParams } from 'react-router-dom';

import { useHistoryPaths } from '@/pages/medicinePointer/model/useHistoryPaths';

import { generatePath, paths } from '@/shared/routes/routes';

export const MedicinePointer = () => {
  const { letter } = useParams<IPointerParams>();

  const { data: prefixes } = useGetMedicinePrefixesQuery();
  const { data } = useGetMedicinePrefixesWordsQuery({ startsWith: letter });

  const historyPaths = useHistoryPaths(letter ?? '');

  return (
    <>
      <PathHistory paths={historyPaths} />
      <Pointer
        data={data}
        prefixes={prefixes}
        letterPathGenerator={(letter: string) =>
          generatePath(paths.medicinePointer, { letter })
        }
        wordPathGenerator={(word: IPrefixWord) =>
          generatePath(paths.medicineInfo, { id: word.id })
        }
      />
    </>
  );
};
