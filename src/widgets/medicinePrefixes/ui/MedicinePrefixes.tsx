import { useGetMedicinePrefixesQuery } from '@/entities/medicine';

import { ERoute, generatePath } from '@/shared/routes/routes';
import { Prefixes } from '@/shared/ui/prefixes/Prefixes';

export const MedicinePrefixes = () => {
  const { data, isLoading } = useGetMedicinePrefixesQuery();

  return (
    <Prefixes
      data={data}
      isLoading={isLoading}
      letterLinkGenerator={(letter) =>
        generatePath(ERoute.medicinePointer, { letter })
      }
      prefixLinkGenerator={(letter, prefix) =>
        generatePath(ERoute.medicinePointer, { letter: `${letter}#${prefix}` })
      }
    />
  );
};
