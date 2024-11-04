import { useGetMedicinePrefixesQuery } from '@/entities/medicine';
import { MedicinePrefixesSkeleton } from '@/widgets/medicinePrefixes/ui/MedicinePrefixesSkeleton';
import { Link } from 'react-router-dom';

import classes from './MedicinePrefixes.module.scss';

export const MedicinePrefixes = () => {
  const { data, isLoading } = useGetMedicinePrefixesQuery();

  const singleLetters = data?.map((prefix) => Object.keys(prefix)) ?? [];

  return (
    <div className={classes.container}>
      {isLoading ? (
        <MedicinePrefixesSkeleton />
      ) : (
        <>
          <ul className={classes.header}>
            {singleLetters.map((letter) => (
              <li>
                <Link to={'#'}>{letter}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {data?.map((prefix) => {
              const key = Object.keys(prefix)[0];
              return (
                <li className={classes.letterItem}>
                  <h2 className={classes.letterItem__title}>{key}</h2>
                  <ul className={classes.letterItem__letters}>
                    {prefix[key].map((letter) => (
                      <li className={classes.letterItem__letter}>
                        <Link to='#'>{letter}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};
