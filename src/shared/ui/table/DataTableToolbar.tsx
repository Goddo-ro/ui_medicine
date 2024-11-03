import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { ReactNode } from 'react';

import classes from './DataTable.module.scss';

export interface DataTableToolbarProps {
  title?: ReactNode;
  onAdd?: () => void;
}

export const DataTableToolbar = ({ title, onAdd }: DataTableToolbarProps) => {
  return (
    <div className={classes.toolbar}>
      <div className={classes.toolbar__buttons}>
        {onAdd && (
          <Button onClick={onAdd} aria-label='Add medicine'>
            <AddIcon />
          </Button>
        )}
      </div>
      <div className={classes.title}>{title}</div>
      <div></div>
    </div>
  );
};
