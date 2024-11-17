import { useGetMedicinePrefixesWordsQuery } from '@/entities/medicine';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { IPointerParams } from '@/pages/pointer/ui/Pointer';

import { ERoute, generatePath } from '@/shared/routes/routes';

import classes from './Pointer.module.scss';

export const PointerBody = () => {
  const { letter } = useParams<IPointerParams>();

  const { data } = useGetMedicinePrefixesWordsQuery({ startsWith: letter });

  // TODO fix rendering of large data

  return (
    <div className={classes.body}>
      {Object.entries(data ?? {}).map(([prefix, words]) => (
        <div key={prefix}>
          <h2 className={classes.prefix} id={prefix}>
            {prefix}
          </h2>
          <div className={classes.words}>
            {words.map((word) => (
              <Link
                to={generatePath(ERoute.medicineInfo, { id: word.id })}
                key={word.id}
                className={classes.medicineLink}
              >
                {word.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
