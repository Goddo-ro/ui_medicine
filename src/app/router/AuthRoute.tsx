import { selectAuth } from '@/entities/viewer';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@/shared/lib/store';

interface AuthRouterProps {
  allowIfAuth?: boolean;
  redirectPath: string;
}

export const AuthRouter = ({
  allowIfAuth = true,
  redirectPath,
}: AuthRouterProps) => {
  const isAuth = useAppSelector(selectAuth);

  if ((allowIfAuth && !isAuth) || (!allowIfAuth && isAuth)) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};
