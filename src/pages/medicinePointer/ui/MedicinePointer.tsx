import {
  useGetMedicinePrefixesQuery,
  useGetMedicinePrefixesWordsQuery,
} from '@/entities/medicine';
import { IPointerParams, IPrefixWord, Pointer } from '@/widgets/pointer';
import { generatePath, useParams } from 'react-router-dom';

import { ERoute } from '@/shared/routes/routes';

export const MedicinePointer = () => {
  const { letter } = useParams<IPointerParams>();

  const { data: prefixes } = useGetMedicinePrefixesQuery();
  const { data } = useGetMedicinePrefixesWordsQuery({ startsWith: letter });

  return (
    <Pointer
      data={data}
      prefixes={prefixes}
      letterPathGenerator={(letter: string) =>
        generatePath(ERoute.medicinePointer, { letter })
      }
      wordPathGenerator={(word: IPrefixWord) =>
        generatePath(ERoute.medicineInfo, { id: word.id.toString() })
      }
    />
  );
};
