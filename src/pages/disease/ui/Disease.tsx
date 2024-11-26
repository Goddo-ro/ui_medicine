import { useGetPrefixesQuery } from '@/entities/disease';
import { generatePath } from 'react-router-dom';

import { paths } from '@/shared/routes/routes';
import { Prefixes } from '@/shared/ui/prefixes/Prefixes';

import classes from './Disease.module.scss';

export const Disease = () => {
  const { data, isLoading } = useGetPrefixesQuery();

  return (
    <section className={classes.content}>
      <h1 className={classes.title}>Алфавитный указатель заболеваний</h1>
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
    </section>
  );
};
