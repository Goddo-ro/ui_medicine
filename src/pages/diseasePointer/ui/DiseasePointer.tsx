import {
  useGetPrefixesQuery,
  useGetPrefixesWithWordsQuery,
} from '@/entities/disease';
import { PathHistory } from '@/widgets/pathHistory';
import { Pointer } from '@/widgets/pointer';
import { useParams } from 'react-router-dom';

import { useHistoryPaths } from '@/pages/diseasePointer/model/useHistoryPaths';

import { PointerParams, PrefixWord } from '@/shared/prefix';
import { generatePath, paths } from '@/shared/routes';
import { Error } from '@/shared/ui/error';

export const DiseasePointer = () => {
  const { letter } = useParams<PointerParams>();

  const {
    data: prefixes,
    isFetching: prefixesFetching,
    isError: prefixesError,
  } = useGetPrefixesQuery();
  const {
    data,
    isFetching: wordsFetching,
    isError: wordsError,
  } = useGetPrefixesWithWordsQuery({ startsWith: letter });

  const isFetching = prefixesFetching || wordsFetching;
  const isError = prefixesError || wordsError;

  const historyPaths = useHistoryPaths(letter ?? '');

  return (
    <>
      <PathHistory paths={historyPaths} />
      {isError && (
        <Error errorText='При загрузке данных произошла ошибка, перезагрузите страницу.' />
      )}
      {!isError && (
        <Pointer
          data={data}
          prefixes={prefixes}
          isLoading={isFetching}
          letterPathGenerator={(letter: string) =>
            generatePath(paths.diseasePointer, { letter })
          }
          wordPathGenerator={(word: PrefixWord) =>
            generatePath(paths.diseaseInfo, { id: word.id })
          }
        />
      )}
    </>
  );
};
