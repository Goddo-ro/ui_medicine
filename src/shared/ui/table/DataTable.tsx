import { CircularProgress } from '@mui/material';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

import {
  DataTableToolbar,
  DataTableToolbarProps,
} from '@/shared/ui/table/DataTableToolbar';

import classes from './DataTable.module.scss';

// TODO: search input

interface DataTableProps extends DataGridProps {
  isLoading?: boolean;
  toolbarProps?: DataTableToolbarProps;
}

export const DataTable = ({
  columns,
  rows,
  isLoading,
  toolbarProps,
  ...rest
}: DataTableProps) => {
  return (
    <div className={classes.container}>
      {toolbarProps && <DataTableToolbar {...toolbarProps} />}
      <div className={classes.tableContainer}>
        {isLoading ? (
          <div className={classes.loaderContainer}>
            <CircularProgress />
          </div>
        ) : (
          <DataGrid columns={columns} rows={rows} {...rest} />
        )}
      </div>
    </div>
  );
};
