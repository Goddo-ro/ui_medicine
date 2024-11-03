import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ReactNode } from 'react';

import {
  DataTableToolbar,
  DataTableToolbarProps,
} from '@/shared/ui/table/DataTableToolbar';

import classes from './DataTable.module.scss';

// TODO: search input
// TODO: pagination
// TODO: column sorting

interface Row {
  id?: number;
  [key: string]: any;
}

export interface Column extends TableCellProps {
  row_id: keyof Row;
  label: string;
  render?: (cell: any, row_i: number, column_i: number) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  rows: Row[];
  isLoading?: boolean;
  toolbarProps?: DataTableToolbarProps;
}

export const DataTable = ({
  columns,
  rows,
  isLoading,
  toolbarProps,
}: DataTableProps) => {
  // TODO: rewrite table with DataGrid
  return (
    <div className={classes.container}>
      {toolbarProps && <DataTableToolbar {...toolbarProps} />}
      {isLoading ? (
        <div className={classes.loaderContainer}>
          <CircularProgress />
        </div>
      ) : (
        <TableContainer sx={{ maxHeight: '80vh' }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow className={classes.table__header}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || 'center'}
                    {...column}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, row_i) => (
                <TableRow>
                  {columns.map((column, column_i) => (
                    <TableCell align='center'>
                      {column.render
                        ? column.render(row[column.row_id], row_i, column_i)
                        : row[column.row_id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
