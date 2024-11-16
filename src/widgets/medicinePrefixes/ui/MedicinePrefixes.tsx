import { useGetMedicinePrefixesQuery } from '@/entities/medicine';
import { MedicinePrefixesSkeleton } from '@/widgets/medicinePrefixes/ui/MedicinePrefixesSkeleton';
import { Link } from 'react-router-dom';

import classes from './MedicinePrefixes.module.scss';

export const MedicinePrefixes = () => {
  const { data, isLoading } = useGetMedicinePrefixesQuery();

  const singleLetters = Object.keys(data ?? {});

  return (
    <div className={classes.container}>
      {isLoading ? (
        <MedicinePrefixesSkeleton />
      ) : (
        <>
          <ul className={classes.header}>
            {singleLetters.map((letter) => (
              <li key={letter}>
                <Link to={`/${letter}`}>{letter}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {Object.entries(data ?? {}).map(([letter, prefixes], i) => (
              <li className={classes.letterItem} key={letter + i}>
                <h2 className={classes.letterItem__title}>{letter}</h2>
                <ul className={classes.letterItem__letters}>
                  {prefixes.map((prefix) => (
                    <li className={classes.letterItem__letter} key={prefix}>
                      <Link to={`/${letter}#${prefix}`}>{prefix}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
