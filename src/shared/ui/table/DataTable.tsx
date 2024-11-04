import {
  DataTableToolbar,
  DataTableToolbarProps,
} from '@/shared/ui/table/DataTableToolbar';

import { DataGrid, DataGridProps } from '@mui/x-data-grid';

import classes from './DataTable.module.scss';

interface DataTableProps extends DataGridProps {
  toolbarProps?: DataTableToolbarProps;
}

export const DataTable = ({
  columns,
  rows,
  toolbarProps,
  ...rest
}: DataTableProps) => {
  return (
    <div className={classes.container}>
      {toolbarProps && <DataTableToolbar {...toolbarProps} />}
      <div className={classes.tableContainer}>
        <DataGrid columns={columns} rows={rows} {...rest} />
      </div>
    </div>
  );
};
