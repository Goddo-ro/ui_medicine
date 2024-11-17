import {
  useGetPrefixesQuery,
  useGetPrefixesWithWordsQuery,
} from '@/entities/disease';
import { IPointerParams, IPrefixWord, Pointer } from '@/widgets/pointer';
import { useParams } from 'react-router-dom';

import { ERoute, generatePath } from '@/shared/routes/routes';

export const DiseasePointer = () => {
  const { letter } = useParams<IPointerParams>();

  const { data: prefixes } = useGetPrefixesQuery();
  const { data } = useGetPrefixesWithWordsQuery({ startsWith: letter });

  return (
    <Pointer
      data={data}
      prefixes={prefixes}
      letterPathGenerator={(letter: string) =>
        generatePath(ERoute.diseasePointer, { letter })
      }
      wordPathGenerator={(word: IPrefixWord) =>
        generatePath(ERoute.diseaseInfo, { id: word.id })
      }
    />
  );
};
