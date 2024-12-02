import { Medicine } from '@/entities/medicine';
import { Transaction } from '@/entities/transaction';
import { FormEvent } from 'react';

interface TransactionCreatorArgs {
  medicine: Medicine | null;
  purchaseDate: Date | null;
  expirationDate: Date | null;
  count: number;
  isUpdating: boolean;
  onUpdate: (transaction: Transaction) => void;
  onAdd: (transaction: Transaction) => void;
}

export const useTransactionCreator = ({
  medicine,
  purchaseDate,
  expirationDate,
  count,
  isUpdating,
  onUpdate,
  onAdd,
}: TransactionCreatorArgs) => {
  const formTransaction = (): Transaction | null => {
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
    const transaction = formTransaction();
    if (transaction) {
      if (isUpdating && onUpdate) {
        onUpdate(transaction);
      } else {
        onAdd(transaction);
      }
    }
  };

  return { handleSubmit };
};
