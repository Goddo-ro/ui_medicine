import { useGetMedicinePrefixesQuery } from '@/entities/medicine';
import { generatePath } from 'react-router-dom';

import { paths } from '@/shared/routes/routes';
import { Error } from '@/shared/ui/error/Error';
import { Prefixes } from '@/shared/ui/prefixes/Prefixes';

import classes from './Medicine.module.scss';

export const Medicines = () => {
  const { data, isLoading, isError } = useGetMedicinePrefixesQuery();

  return (
    <section className={classes.content}>
      <h1 className={classes.title}>Алфавитный указатель лекарств</h1>

      {isError && (
        <Error errorText='При загрузке данных произошла ошибка, перезагрузите страницу.' />
      )}
      {!isError && (
        <Prefixes
          data={data}
          isLoading={isLoading}
          letterLinkGenerator={(letter) =>
            generatePath(paths.medicinePointer, { letter })
          }
          prefixLinkGenerator={(letter, prefix) =>
            generatePath(paths.medicinePointer, {
              letter: `${letter}#${prefix}`,
            })
          }
        />
      )}
    </section>
  );
};
