import {
  useGetMedicinePrefixesQuery,
  useGetMedicinePrefixesWordsQuery,
} from '@/entities/medicine';
import { PathHistory } from '@/widgets/pathHistory';
import { Pointer, PointerParams, PrefixWord } from '@/widgets/pointer';
import { useParams } from 'react-router-dom';

import { useHistoryPaths } from '@/pages/medicinePointer/model/useHistoryPaths';

import { generatePath, paths } from '@/shared/routes/routes';
import { Error } from '@/shared/ui/error/Error';

export const MedicinePointer = () => {
  const { letter } = useParams<PointerParams>();

  const {
    data: prefixes,
    isFetching: prefixesFetching,
    isError: prefixesError,
  } = useGetMedicinePrefixesQuery();
  const {
    data,
    isFetching: wordsFetching,
    isError: wordsError,
  } = useGetMedicinePrefixesWordsQuery({ startsWith: letter });

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
            generatePath(paths.medicinePointer, { letter })
          }
          wordPathGenerator={(word: PrefixWord) =>
            generatePath(paths.medicineInfo, { id: word.id })
          }
        />
      )}
    </>
  );
};
