import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';

import { Diseases } from '@/pages/diseases';
import { Medicines } from '@/pages/medicines';
import { Medkit } from '@/pages/medkit';
import { Root } from '@/pages/root';

const routesList: RouteProps[] = [
  {
    path: '/',
    element: <Medicines />,
  },
  {
    path: '/diseases',
    element: <Diseases />,
  },
  {
    path: '/medkit',
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
