import { useGetPrefixesQuery } from '@/entities/disease';
import { generatePath } from 'react-router-dom';

import { paths } from '@/shared/routes/routes';
import { Error } from '@/shared/ui/error/Error';
import { Prefixes } from '@/shared/ui/prefixes/Prefixes';

import classes from './Disease.module.scss';

export const Disease = () => {
  const { data, isLoading, isError } = useGetPrefixesQuery();

  return (
    <section className={classes.content}>
      <h1 className={classes.title}>Алфавитный указатель заболеваний</h1>
      {isError && (
        <Error errorText='При загрузке данных произошла ошибка, перезагрузите страницу.' />
      )}
      {!isError && (
        <Prefixes
          data={data}
          isLoading={isLoading}
          letterLinkGenerator={(letter) =>
            generatePath(paths.diseasePointer, { letter })
          }
          prefixLinkGenerator={(letter, prefix) =>
            generatePath(paths.diseasePointer, {
              letter: `${letter}#${prefix}`,
            })
          }
        />
      )}
    </section>
  );
};
