import { PrefixWord, PrefixWords } from '@/widgets/pointer/model/types';
import { Link } from 'react-router-dom';

import classes from './Pointer.module.scss';

export interface PointerBodyProps {
  data?: PrefixWords;
  wordPathGenerator: (word: PrefixWord) => string;
}

export const PointerBody = ({ data, wordPathGenerator }: PointerBodyProps) => {
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
                // to={generatePath(paths.medicineInfo, { id: word.id })}
                to={wordPathGenerator(word)}
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
