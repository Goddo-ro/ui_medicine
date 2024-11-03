import { ReactNode } from 'react';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Button } from '@mui/material';

import classes from './DataTable.module.scss';

export interface DataTableToolbarProps {
  title?: ReactNode;
  onAdd?: () => void;
  disableAdd?: boolean;
  onEdit?: () => void;
  disableEdit?: boolean;
  onDelete?: () => void;
  disableDelete?: boolean;
}

export const DataTableToolbar = ({
  title,
  onAdd,
  disableAdd,
  onEdit,
  disableEdit,
  onDelete,
  disableDelete,
}: DataTableToolbarProps) => {
  return (
    <div className={classes.toolbar}>
      <div>{title}</div>
      <div className={classes.toolbar__buttons}>
        {onAdd && (
          <Button
            onClick={onAdd}
            aria-label='Add medicine'
            disabled={disableAdd}
          >
            <AddIcon />
          </Button>
        )}
        {onEdit && (
          <Button
            onClick={onEdit}
            aria-label='Edit medicine'
            disabled={disableEdit}
          >
            <EditNoteIcon fontSize='small' />
          </Button>
        )}
        {onDelete && (
          <Button
            onClick={onDelete}
            aria-label='Delete medicine'
            disabled={disableDelete}
          >
            <DeleteIcon fontSize='small' />
          </Button>
        )}
      </div>
    </div>
  );
};
