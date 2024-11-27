import {
  useGetPrefixesQuery,
  useGetPrefixesWithWordsQuery,
} from '@/entities/disease';
import { PathHistory } from '@/widgets/pathHistory';
import { IPointerParams, IPrefixWord, Pointer } from '@/widgets/pointer';
import { useParams } from 'react-router-dom';

import { useHistoryPaths } from '@/pages/diseasePointer/model/useHistoryPaths';

import { generatePath, paths } from '@/shared/routes/routes';

export const DiseasePointer = () => {
  const { letter } = useParams<IPointerParams>();

  const { data: prefixes } = useGetPrefixesQuery();
  const { data } = useGetPrefixesWithWordsQuery({ startsWith: letter });

  const historyPaths = useHistoryPaths(letter ?? '');

  return (
    <>
      <PathHistory paths={historyPaths} />
      <Pointer
        data={data}
        prefixes={prefixes}
        letterPathGenerator={(letter: string) =>
          generatePath(paths.diseasePointer, { letter })
        }
        wordPathGenerator={(word: IPrefixWord) =>
          generatePath(paths.diseaseInfo, { id: word.id })
        }
      />
    </>
  );
};
