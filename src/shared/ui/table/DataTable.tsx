import Table, { TableProps } from 'rc-table';

import classes from './DataTable.module.scss';

// TODO: search input
// TODO: pagination
// TODO: column sorting

export const DataTable = (props: TableProps) => {
  return <Table className={classes.table} {...props} />;
};
