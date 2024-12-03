import { useAnchorScroll } from '@/widgets/pointer/model/useAnchorScroll';
import { Link } from 'react-router-dom';

import { PrefixWord, PrefixWords } from '@/shared/prefix';

import classes from './Pointer.module.scss';

export interface PointerBodyProps {
  data?: PrefixWords;
  wordPathGenerator: (word: PrefixWord) => string;
}

export const PointerBody = ({ data, wordPathGenerator }: PointerBodyProps) => {
  useAnchorScroll();

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
