import { selectAuth } from '@/entities/viewer';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/shared/lib/store';
import { ERoute } from '@/shared/routes/routes';

export const Medkit = () => {
  const isAuth = useAppSelector(selectAuth);

  if (!isAuth) return <Navigate to={ERoute.login} replace />;

  return <>Medkit</>;
};
