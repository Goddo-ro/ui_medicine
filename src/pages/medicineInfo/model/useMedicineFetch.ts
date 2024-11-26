import { useLazyGetMedicineByIdQuery } from '@/entities/medicine';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type IMedicineInfoParams = {
  id: string;
};

export const useMedicineFetch = () => {
  const { id } = useParams<IMedicineInfoParams>();
  const [trigger, result] = useLazyGetMedicineByIdQuery();

  useEffect(() => {
    if (id) {
      trigger(Number(id));
    }
  }, [id]);

  return result;
};
