import { useLazyGetMedicineByTitleQuery } from '@/entities/medicine';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MedicineInfo = () => {
  const { medicine } = useParams();
  const [trigger, result] = useLazyGetMedicineByTitleQuery();

  useEffect(() => {
    if (medicine) {
      console.log(medicine);
      trigger(medicine);
    }
  }, [medicine]);
  return (
    <>
      <h1>{medicine}</h1>
      <p>{result.data?.title}</p>
    </>
  );
};
