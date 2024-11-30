import { Transaction } from '@/entities/transaction';
import clsx from 'clsx';
import { useCallback, useState } from 'react';

import { columns } from '@/pages/medkit/model/consts';
import { useTableFetcher } from '@/pages/medkit/model/useTableFetcher';
import { MedkitAddDialog } from '@/pages/medkit/ui/MedkitAddDialog';

import { DataTable } from '@/shared/ui/table/DataTable';

import { GridToolbar } from '@mui/x-data-grid';

import classes from './Medkit.module.scss';

// TODO: create UI component for errors

export type SelectedIds = number[];

export const Medkit = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<SelectedIds>([]);

  const clearSelected = useCallback(() => {
    setSelectedIds([]);
  }, [setSelectedIds]);

  const { isLoading, transactions, handleAdd, handleDelete, handleUpdate } =
    useTableFetcher(clearSelected);

  const close = useCallback(() => {
    setIsAddDialogOpen(false);
  }, []);

  return (
    <>
      <MedkitAddDialog
        onAdd={handleAdd}
        open={isAddDialogOpen}
        close={close}
        onClose={close}
        onUpdate={(transaction: Transaction) => {
          handleUpdate(transaction, selectedIds[0]);
        }}
        transaction={
          selectedIds?.length === 1
            ? transactions?.find(
                (transaction) => transaction.id === selectedIds[0],
              )
            : undefined
        }
      />
      <div className={clsx(classes.container, 'unwidth')}>
        <DataTable
          columns={columns}
          rows={transactions}
          loading={isLoading}
          toolbarProps={{
            title: <h3>Приобретенные лекарства</h3>,
            onAdd: () => {
              setIsAddDialogOpen(true);
            },
            onEdit: () => {
              setIsAddDialogOpen(true);
            },
            disableEdit: selectedIds.length !== 1,
            onDelete: () => {
              handleDelete(selectedIds);
            },
            disableDelete: !selectedIds.length,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          checkboxSelection
          rowSelectionModel={selectedIds}
          onRowSelectionModelChange={(ids) => {
            setSelectedIds(ids.map((id) => Number.parseInt(id.toString())));
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              style: { marginBottom: 8 },
              showQuickFilter: true,
            },
          }}
          pageSizeOptions={[15, 25]}
        />
      </div>
    </>
  );
};
