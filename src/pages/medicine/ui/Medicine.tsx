import { useGetMedicinePrefixesQuery } from '@/entities/medicine';
import { generatePath } from 'react-router-dom';

import { ERoute } from '@/shared/routes/routes';
import { Prefixes } from '@/shared/ui/prefixes/Prefixes';

import classes from './Medicine.module.scss';

export const Medicines = () => {
  const { data, isLoading } = useGetMedicinePrefixesQuery();

  return (
    <section className={classes.content}>
      <h1 className={classes.title}>Алфавитный указатель лекарств</h1>
      <Prefixes
        data={data}
        isLoading={isLoading}
        letterLinkGenerator={(letter) =>
          generatePath(ERoute.medicinePointer, { letter })
        }
        prefixLinkGenerator={(letter, prefix) =>
          generatePath(ERoute.medicinePointer, {
            letter: `${letter}#${prefix}`,
          })
        }
      />
    </section>
  );
};
