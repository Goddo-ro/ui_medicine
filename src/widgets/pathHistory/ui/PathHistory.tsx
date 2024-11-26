import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { Breadcrumbs } from '@mui/material';

import classes from './PathHistory.module.scss';

export interface PathModel {
  displayName: string;
  path: string;
}

interface PathHistoryProps {
  paths: PathModel[];
  className?: string;
}

export const PathHistory = ({ paths, className }: PathHistoryProps) => {
  return (
    <Breadcrumbs className={clsx(classes.breadcrumbs, className)}>
      {paths.map((path, index) => (
        <NavLink key={index} to={path.path} className={classes.item}>
          {path.displayName}
        </NavLink>
      ))}
    </Breadcrumbs>
  );
};
