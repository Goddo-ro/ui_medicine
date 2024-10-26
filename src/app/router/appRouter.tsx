import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';

import { Diseases } from '@/pages/diseases';
import { LoginPage } from '@/pages/login';
import { Medicines } from '@/pages/medicines';
import { Medkit } from '@/pages/medkit';
import { RegisterPage } from '@/pages/register';
import { Root } from '@/pages/root';

import { ERoute } from '@/shared/routes/routes';

const routesList: RouteProps[] = [
  {
    path: ERoute.medicines,
    element: <Medicines />,
  },
  {
    path: ERoute.diseases,
    element: <Diseases />,
  },
  {
    path: ERoute.medkit,
    element: <Medkit />,
  },
  {
    path: ERoute.login,
    element: <LoginPage />,
  },
  {
    path: ERoute.register,
    element: <RegisterPage />,
  },
];

export const AppRouter = () => {
  const routes = routesList.map((route, index) => (
    <Route key={index} {...route} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
