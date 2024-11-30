import { Medicine } from '@/entities/medicine';
import { Transaction } from '@/entities/transaction';
import { useEffect, useState } from 'react';

export const useTransactionBody = (transaction: Transaction | undefined) => {
  const [medicine, setMedicine] = useState<Medicine | null>(
    transaction?.medicine || null,
  );
  const [purchaseDate, setPurchaseDate] = useState<Date | null>(
    new Date(transaction?.purchase_date || new Date()),
  );
  const [expirationDate, setExpirationDate] = useState<Date | null>(
    new Date(transaction?.expiration_date || new Date()),
  );
  const [count, setCount] = useState(transaction?.count || 1);

  const isUpdating = !!transaction;

  useEffect(() => {
    setMedicine(transaction?.medicine || null);
    setPurchaseDate(new Date(transaction?.purchase_date || new Date()));
    setExpirationDate(new Date(transaction?.expiration_date || new Date()));
    setCount(transaction?.count || 1);
  }, [transaction]);

  return {
    medicine,
    setMedicine,
    purchaseDate,
    setPurchaseDate,
    expirationDate,
    setExpirationDate,
    count,
    setCount,
    isUpdating,
  };
};
