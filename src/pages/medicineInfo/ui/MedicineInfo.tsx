import { PathHistory } from '@/widgets/pathHistory';
import { Link } from 'react-router-dom';

import { useHistoryPaths } from '@/pages/medicineInfo/model/useHistoryPaths';
import { useMedicineFetch } from '@/pages/medicineInfo/model/useMedicineFetch';

import { generatePath, paths } from '@/shared/routes';
import { Error } from '@/shared/ui/error';

import { CircularProgress } from '@mui/material';

import classes from './MedicineInfo.module.scss';

export const MedicineInfo = () => {
  const { data, isLoading, isError } = useMedicineFetch();
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
            {isError && (
              <Error errorText='При загрузке данных произошла ошибка, перезагрузите страницу.' />
            )}
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
                    <li key={disease.id}>
                      <Link
                        to={generatePath(paths.diseaseInfo, { id: disease.id })}
                      >
                        {disease.title}
                      </Link>
                    </li>
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
