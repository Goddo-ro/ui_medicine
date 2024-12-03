import { PathHistory } from '@/widgets/pathHistory';
import { Link } from 'react-router-dom';

import { useDiseaseFetch } from '@/pages/diseaseInfo/model/useDiseaseFetch';
import { useHistoryPaths } from '@/pages/diseaseInfo/model/useHistoryPaths';

import { generatePath, paths } from '@/shared/routes';
import { Error } from '@/shared/ui/error';

import { CircularProgress } from '@mui/material';

import classes from './DiseaseInfo.module.scss';

export const DiseaseInfo = () => {
  const { data, isLoading, isError } = useDiseaseFetch();
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
                    <li key={medicine.id}>
                      <Link
                        to={generatePath(paths.medicineInfo, {
                          id: medicine.id,
                        })}
                      >
                        {medicine.title}
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
