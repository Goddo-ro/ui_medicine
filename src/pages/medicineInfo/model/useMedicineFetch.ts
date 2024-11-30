import { useLazyGetMedicineByIdQuery } from '@/entities/medicine';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type MedicineInfoParams = {
  id: string;
};

export const useMedicineFetch = () => {
  const { id } = useParams<MedicineInfoParams>();
  const [trigger, result] = useLazyGetMedicineByIdQuery();

  useEffect(() => {
    if (id) {
      trigger(Number(id));
    }
  }, [id]);

  return result;
};
