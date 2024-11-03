import { IMedicine } from '@/entities/medicine';
import { ITransaction } from '@/entities/transaction';
import { Autocomplete, Button, ModalProps, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { FormEvent, useEffect, useState } from 'react';

import { getMedicine } from '@/shared/api/medicine';
import { PositionedModal } from '@/shared/ui/positionedModal/PositionedModal';

import classes from './Medkit.module.scss';

type MedkitAddDialogProps = Omit<ModalProps, 'children'> & {
  onAdd: (transaction: ITransaction) => void;
  close: () => void;
};

export const MedkitAddDialog = ({
  onAdd,
  close,
  ...rest
}: MedkitAddDialogProps) => {
  const [medicines, setMedicines] = useState<IMedicine[]>([]);
  const [medicine, setMedicine] = useState<IMedicine | null>(null);
  const [purchaseDate, setPurchaseDate] = useState<Date | null>(new Date());
  const [expirationDate, setExpirationDate] = useState<Date | null>(new Date());
  const [count, setCount] = useState(1);

  useEffect(() => {
    getMedicine().then((res) => {
      setMedicines(res.data);
    });
  }, []);

  const formTransaction = (): ITransaction | null => {
    if (!medicine || !purchaseDate || !expirationDate) return null;
    return {
      medicine_id: medicine?.id,
      count: count,
      purchase_date: purchaseDate?.toString(),
      expiration_date: expirationDate?.toString(),
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: handle errors;
    const transaction = formTransaction();
    if (transaction) {
      onAdd(transaction);
    }
    close();
  };

  return (
    <PositionedModal {...rest}>
      <form onSubmit={handleSubmit} className={classes.modalContainer}>
        <h2 className={classes.modalContainer__title}>Добавление записи</h2>
        <Autocomplete
          value={medicine}
          onChange={(_, newValue: IMedicine | null) => {
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
          <Button type='submit'>Создать</Button>
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
