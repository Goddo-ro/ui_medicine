import { useLazyGetByIdQuery } from '@/entities/disease';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import classes from './DiseaseInfo.module.scss';

type IParams = {
  id: string;
};

// TODO: test not number param cases

export const DiseaseInfo = () => {
  const { id } = useParams<IParams>();
  const [trigger, { data, isLoading }] = useLazyGetByIdQuery();

  useEffect(() => {
    if (id) {
      trigger(Number(id));
    }
  }, [id]);

  console.log(data);

  return (
    <div className={classes.content}>
      {isLoading ? (
        <CircularProgress className={classes.loader} />
      ) : (
        <>
          <h1>{data?.title}</h1>
          <section className={classes.section}>
            <h2>Симптомы</h2>
            {!data?.symptoms.length ? (
              <p>Нет информации о симптомах</p>
            ) : (
              <ul className={classes.list}>
                {data.symptoms.map((symptom) => (
                  <li key={symptom.id}>{symptom.title}</li>
                ))}
              </ul>
            )}
          </section>

          <section className={classes.section}>
            <h2>Лекарства</h2>
            {!data?.medicines.length ? (
              <p>Нет информации о лекарствах</p>
            ) : (
              <ul className={classes.list}>
                {data.medicines.map((medicine) => (
                  <li key={medicine.id}>{medicine.title}</li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
};
