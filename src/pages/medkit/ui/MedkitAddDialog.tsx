import { Medicine, useGetMedicineQuery } from '@/entities/medicine';
import { Transaction } from '@/entities/transaction';

import { useTransactionBody } from '@/pages/medkit/model/useTransactionBody';
import { useTransactionCreator } from '@/pages/medkit/model/useTransactionCreator';

import { PositionedModal } from '@/shared/ui/positionedModal/PositionedModal';

import { Autocomplete, Button, ModalProps, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';

import classes from './Medkit.module.scss';

type MedkitAddDialogProps = Omit<ModalProps, 'children'> & {
  onAdd: (transaction: Transaction) => void;
  close: () => void;
  onUpdate: (transaction: Transaction) => void;
  transaction?: Transaction;
};

export const MedkitAddDialog = ({
  onAdd,
  close,
  onUpdate,
  transaction,
  ...rest
}: MedkitAddDialogProps) => {
  // TODO: fix datepickers overflowing
  const { data: medicines = [] } = useGetMedicineQuery({});

  const {
    medicine,
    setMedicine,
    purchaseDate,
    setPurchaseDate,
    expirationDate,
    setExpirationDate,
    count,
    setCount,
    isUpdating,
  } = useTransactionBody(transaction);

  const { handleSubmit } = useTransactionCreator({
    medicine,
    purchaseDate,
    expirationDate,
    count,
    isUpdating,
    onUpdate,
    onAdd,
  });

  return (
    <PositionedModal {...rest}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          close();
        }}
        className={classes.modalContainer}
      >
        <h2 className={classes.modalContainer__title}>
          {isUpdating ? 'Обновление' : 'Добавление'} записи
        </h2>
        <Autocomplete
          value={medicine}
          onChange={(_, newValue: Medicine | null) => {
            setMedicine(newValue);
          }}
          options={medicines}
          inputValue={medicine?.title}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label='Лекарство' />}
        />
        <DateTimePicker
          label='Дата приобретения'
          value={purchaseDate}
          onChange={(value) => {
            setPurchaseDate(value);
          }}
        />
        <DateTimePicker
          label='Истечение срока'
          value={expirationDate}
          onChange={(value) => {
            setExpirationDate(value);
          }}
        />
        <TextField
          label='Количество'
          type='number'
          inputMode='numeric'
          slotProps={{ htmlInput: { min: 1, type: 'number' } }}
          value={count}
          onChange={(e) => {
            setCount(Number.parseInt(e.target.value));
          }}
        />
        <div className={classes.modalContainer__buttons}>
          <Button type='submit'>{isUpdating ? 'Обновить' : 'Добавить'}</Button>
          {rest.onClose && (
            <Button color='error' onClick={close}>
              Отмена
            </Button>
          )}
        </div>
      </form>
    </PositionedModal>
  );
};
