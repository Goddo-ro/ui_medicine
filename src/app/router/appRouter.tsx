import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';

import { Diseases } from '@/pages/diseases';
import { Medicines } from '@/pages/medicines';
import { Medkit } from '@/pages/medkit';
import { Root } from '@/pages/root';

import { ERoute } from '@/shared/types/routes';

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
