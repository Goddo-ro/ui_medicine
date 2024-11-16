import { useLazyGetMedicineByIdQuery } from '@/entities/medicine';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CircularProgress, Skeleton } from '@mui/material';

import classes from './MedicineInfo.module.scss';

type IMedicineInfoParams = {
  id: string;
};

// TODO: previous urls bar

export const MedicineInfo = () => {
  const { id } = useParams<IMedicineInfoParams>();
  const [trigger, { data, isLoading }] = useLazyGetMedicineByIdQuery();

  useEffect(() => {
    if (id) {
      trigger(Number(id));
    }
  }, [id]);

  return (
    <div className={classes.content}>
      {isLoading ? (
        <CircularProgress className={classes.loader} />
      ) : (
        <>
          <h1>{data?.title}</h1>
          <section className={classes.section}>
            <h2>Тип:</h2>
            <p>{data?.type.title || 'Нет информации о типе'}</p>
          </section>
          <section className={classes.section}>
            <h2>Описание:</h2>
            <p>{data?.description || 'Нет информации об описании'}</p>
          </section>
          <section className={classes.section}>
            <h2>Показания:</h2>
            {!data?.diseases.length ? (
              <p>Нет информации о показаниях</p>
            ) : (
              <ul className={classes.reasons}>
                {data.diseases.map((disease) => (
                  <li key={disease.id}>{disease.title}</li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
};
