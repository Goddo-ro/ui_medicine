import { Link } from 'react-router-dom';

import { PrefixesSkeleton } from '@/shared/ui/prefixes/PrefixesSkeleton';

import classes from './Prefixes.module.scss';

export type Prefix = Record<string, string[]>;

interface PrefixesProps {
  data?: Prefix;
  isLoading: boolean;
  letterLinkGenerator: (letter: string) => string;
  prefixLinkGenerator: (letter: string, prefix: string) => string;
}

// TODO: fix hash link scroll for prefixes

export const Prefixes = ({
  data,
  isLoading,
  letterLinkGenerator,
  prefixLinkGenerator,
}: PrefixesProps) => {
  const singleLetters = Object.keys(data ?? {});

  return (
    <div className={classes.container}>
      {isLoading ? (
        <PrefixesSkeleton />
      ) : (
        <>
          <ul className={classes.header}>
            {singleLetters.map((letter) => (
              <li key={letter}>
                <Link to={letterLinkGenerator(letter)}>{letter}</Link>
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
                      <Link to={prefixLinkGenerator(letter, prefix)}>
                        {prefix}
                      </Link>
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
