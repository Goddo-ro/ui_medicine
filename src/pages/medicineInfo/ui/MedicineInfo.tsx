import { PathHistory } from '@/widgets/pathHistory';

import { useHistoryPaths } from '@/pages/medicineInfo/model/useHistoryPaths';
import { useMedicineFetch } from '@/pages/medicineInfo/model/useMedicineFetch';

import { CircularProgress } from '@mui/material';

import classes from './MedicineInfo.module.scss';

// TODO: order button
// TODO: replace diseases title with links

export const MedicineInfo = () => {
  const { data, isLoading } = useMedicineFetch();
  const historyPaths = useHistoryPaths(
    data?.title ? data.title[0] : '-',
    data?.title ?? '',
  );

  return (
    <>
      <PathHistory paths={historyPaths} />
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
    </>
  );
};
