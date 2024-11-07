import { useGetMedicinePrefixesWordsQuery } from '@/entities/medicine';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import classes from './Pointer.module.scss';

export const PointerBody = () => {
  const { letter } = useParams();

  const { data } = useGetMedicinePrefixesWordsQuery({ startsWith: letter });

  return (
    <div className={classes.body}>
      {Object.entries(data ?? {}).map(([prefix, words]) => (
        <div key={prefix}>
          <h2 className={classes.prefix} id={prefix}>
            {prefix}
          </h2>
          {words.map((word) => (
            <Link to={'#'} key={'word'}>
              {word}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};