import { IPointerParams } from '@/widgets/pointer/model/types';
import clsx from 'clsx';
import { NavLink, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { IPrefix } from '@/shared/ui/prefixes/Prefixes';

import classes from './Pointer.module.scss';

export interface IPointerHeaderProps {
  prefixes?: IPrefix;
  letterPathGenerator: (letter: string) => string;
}

export const PointerHeader = ({
  prefixes,
  letterPathGenerator,
}: IPointerHeaderProps) => {
  const { letter } = useParams<IPointerParams>();

  const letters = Object.keys(prefixes ?? {}).map((letter) => (
    <li key={letter}>
      <NavLink
        // to={generatePath(ERoute.medicinePointer, { letter })}
        to={letterPathGenerator(letter)}
        className={({ isActive }) =>
          clsx({ [classes.active]: isActive }, classes.singleLetters__letter)
        }
      >
        {letter}
      </NavLink>
    </li>
  ));

  const letterPrefixes = (
    prefixes && letter ? (prefixes[letter] ?? []) : []
  ).map((prefix) => (
    <li key={prefix}>
      <HashLink to={`#${prefix}`} className={classes.prefixes__prefix}>
        {prefix}
      </HashLink>
    </li>
  ));

  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes.singleLetters}>{letters}</ul>
        <ul className={classes.prefixes}>{letterPrefixes}</ul>
      </nav>
    </div>
  );
};
