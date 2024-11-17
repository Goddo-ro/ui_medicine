import { useGetMedicinePrefixesQuery } from '@/entities/medicine';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { IPointerParams } from '@/pages/pointer/ui/Pointer';

import { ERoute, generatePath } from '@/shared/routes/routes';

import classes from './Pointer.module.scss';

// TODO: add skeletons

export const PointerHeader = () => {
  const { data: prefixes } = useGetMedicinePrefixesQuery();

  const { letter } = useParams<IPointerParams>();

  const letters = Object.keys(prefixes ?? {}).map((letter) => (
    <li key={letter}>
      <NavLink
        to={generatePath(ERoute.medicinePointer, { letter })}
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
